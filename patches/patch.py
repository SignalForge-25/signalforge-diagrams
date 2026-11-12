import json, sys, re
sys.path.insert(0, sys.argv[1])
from property_data import PROPERTY

SRC, OUT = sys.argv[2], sys.argv[3]
s = open(SRC, encoding="utf-8").read()

def match_end(s, i):
    stack = []; j = i; q = None
    while j < len(s):
        c = s[j]
        if q:
            if c == "\\": j += 2; continue
            if c == q: q = None
            j += 1; continue
        if c in "\"'`": q = c
        elif c in "{[(": stack.append(c)
        elif c in "}])":
            stack.pop()
            if not stack: return j + 1
        j += 1
    raise ValueError("unbalanced")

def js(v):
    return json.dumps(v, ensure_ascii=True)

# 1. variant dictionaries: append property entry at the end of each engine's dict
anchors = {"dL": "{construction:", "dO": "{construction:", "dN": "{construction:",
           "dR": "={construction:", "dS": "={construction:", "dT": "={construction:",
           "dQ": "={manufacturing:"}
for eid, pat in anchors.items():
    a = s.find('se("#%s")' % eid)
    assert a > 0, eid
    k = s.find(pat, a)
    assert 0 < k - a < 4000, (eid, k - a)
    start = k + pat.index("{")
    end = match_end(s, start)
    assert s[end - 1] == "}"
    s = s[:end - 1] + ",property:" + js(PROPERTY[eid]) + s[end - 1:]

# 2. chip labels used when a diagram shows all variants
old = '"marketing-teams":"Marketing teams"}'
n = s.count(old)
s = s.replace(old, '"marketing-teams":"Marketing teams",property:"Property and lettings"}')
print("label dicts patched:", n)

# 3. register the new diagram names, cloned from the logistics ones
for base in ["industry-hero", "evidence", "journey", "who-feels-it", "how-it-fits", "prototype", "starting-point"]:
    key = '"%s-logistics":' % base
    i = s.find(key)
    assert i > 0, key
    vs = i + len(key)
    ve = match_end(s, vs)
    entry = s[vs:ve]
    assert 'data-variant="logistics"' in entry, base
    new = '"%s-property":' % base + entry.replace('data-variant="logistics"', 'data-variant="property"')
    s = s[:ve] + "," + new + s[ve:]

# 4. version
s = s.replace('version:"1.5.2"', 'version:"1.6.0"', 1)
s = s.replace("SignalForge diagrams v1.5.2.", "SignalForge diagrams v1.6.0.", 1)
s = s.replace(" * Names: ", " * Names (v1.6.0 adds industry-hero-property, evidence-property, journey-property, who-feels-it-property, how-it-fits-property, prototype-property, starting-point-property): ", 1)
open(OUT, "w", encoding="utf-8").write(s)
print("written", OUT, len(s))
