/*! SignalForge lanes diagram v1.1.0
 * Sector briefings: where the data sits today, one version of the truth, what it produces.
 * Four lanes. Each lane matches one signal card on the briefing (same number, same colour).
 * Usage: const stop = window.SFLanes.mount(element, data);  later: stop();
 * Also registers "p-lanes" on window.SFProspect and window.SFDiagrams when either is on the page.
 * Standalone file: it changes nothing in sf-prospect.min.js or sf-diagrams.min.js.
 */
(function () {
  "use strict";
  var VERSION = "1.1.0";
  var NS = "http://www.w3.org/2000/svg";
  var MQ = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : { matches: false };
  function RED() { return MQ.matches && !document.documentElement.classList.contains("force-motion"); }

  function E(t, a, p) {
    var e = document.createElement(t);
    if (a) for (var k in a) {
      var v = a[k]; if (v == null) continue;
      if (k === "text") e.textContent = v; else if (k === "cls") e.className = v;
      else if (k === "css") e.style.cssText = v; else e.setAttribute(k, v);
    }
    if (p) p.appendChild(e); return e;
  }
  function str(v, d) { return (v == null || v === "") ? (d || "") : String(v); }
  function arr(v) { return Array.isArray(v) ? v : []; }
  function clip(s, n) { s = str(s); return s.length > n ? s.slice(0, n - 1).replace(/\s+$/, "") + "…" : s; }
  function cls(el, c, on) { if (el) el.classList.toggle(c, !!on); }

  var IC = {
    mail: '<path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/>',
    table: '<path d="M4 5h16v14H4z"/><path d="M4 10h16M10 5v14"/>',
    folder: '<path d="M3 7h6l2 2h10v9H3z"/>',
    calc: '<path d="M6 3h12v18H6z"/><path d="M9 7h6M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01"/>',
    pound: '<path d="M16 6.5A3.5 3.5 0 0 0 10 9v9M7 18h10M7 13h7"/>',
    truck: '<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="17.5" r="1.7"/><circle cx="17" cy="17.5" r="1.7"/>',
    factory: '<path d="M3 20h18M4 20v-9l5 3v-3l5 3V7h4l2 13"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 19c.7-3 3-5 6-5s5.3 2 6 5M16 5.5a3 3 0 0 1 0 5.6M17 14c2 .5 3.5 2.3 4 5"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    shield: '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>',
    filecheck: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M9.5 14l2 2 3.5-4"/>',
    doc: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/>',
    layers: '<path d="M12 4l9 4.5-9 4.5-9-4.5z"/><path d="M3 13l9 4.5 9-4.5"/>',
    kanban: '<path d="M4 4h16v16H4z"/><path d="M9.5 4v16M14.5 4v16"/>',
    pen: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',
    globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c3 3 3 14 0 17M12 3.5c-3 3-3 14 0 17"/>',
    building: '<path d="M5 21V4h10v17M15 9h4v12M8 8h4M8 12h4M8 16h4M3 21h18"/>',
    bars: '<path d="M5 20v-9M10 20V6M15 20v-8M20 20V9"/>',
    calendar: '<path d="M4 6h16v14H4z"/><path d="M4 10h16M8 3v4M16 3v4"/>',
    wrench: '<path d="M14.5 5.5a4 4 0 0 0 4.9 4.9L21 12l-9 9-3-3 9-9-1.6-1.6A4 4 0 0 0 14.5 5.5z"/>',
    box: '<path d="M4 8l8-4 8 4v8l-8 4-8-4z"/><path d="M4 8l8 4 8-4M12 12v8"/>',
    scales: '<path d="M12 4v16M7 20h10M5 8h14M5 8l-3 6h6zM19 8l-3 6h6z"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    search: '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>',
    user: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c1-4 4-6 7-6s6 2 7 6"/>',
    copy: '<path d="M9 9h11v11H9z"/><path d="M5 15H4V4h11v1"/>',
    alert: '<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17h.01"/>',
    dot: '<circle cx="12" cy="12" r="3"/>'
  };
  function ico(name, parent) {
    var s = document.createElementNS(NS, "svg");
    s.setAttribute("viewBox", "0 0 24 24"); s.setAttribute("aria-hidden", "true"); s.setAttribute("class", "sfl-ic");
    s.innerHTML = IC[name] || IC.dot; parent.appendChild(s); return s;
  }

  // Lane colours. The signal card with the same number uses the same colour.
  var COL = ["#60A5FA", "#22D3EE", "#A78BFA", "#34D399"];

  function laneData(d) {
    return arr(d.lanes).slice(0, 4).map(function (l, i) {
      var from = arr(l.from).slice(0, 3);
      var growth = l.kind === "growth";
      return {
        n: l.n || i + 1,
        c: str(l.color, COL[i]),
        growth: growth,
        kind: clip(str(l.label, growth ? str(d.growthLabel, "Growth") : str(d.dutyLabel, "Obligation")), 18),
        check: clip(l.check, 44),
        out: clip(l.out, 28),
        when: clip(l.when, 18),
        holds: clip(l.holds, 26),
        manual: arr(l.manual).slice(0, 2).map(function (m) { return clip(m, 26); }),
        from: from.map(function (f) { return { label: clip(f.label, 22), where: clip(f.where, 14), icon: f.icon || "doc" }; }),
        today: clip(str(l.today, "By hand, from " + (from.length || "several") + " places"), 46),
        with: clip(str(l.with, "Ready as the work happens"), 46)
      };
    });
  }

  function core(parent, d, short) {
    // Today: one person holds it together by hand. With one system: their name, one version of the truth.
    var p0 = E("div", { cls: "sfl-core-h sfl-v0" }, parent);
    ico("user", E("i", { cls: "sfl-pi" }, p0));
    E("b", { text: str(d.person, "One person") }, p0);
    E("span", { text: str(d.personSub, "Holds it together by hand") }, p0);
    var c = E("div", { cls: "sfl-core-h sfl-v1" }, parent);
    var nm = E("b", { text: short }, c);
    if (d.logo) {
      var im = E("img", { src: d.logo, alt: str(d.company, short), cls: "sfl-lg" + (d.logoMode === "sil" ? " sil" : "") }, c);
      c.insertBefore(im, nm); nm.hidden = true;
      im.addEventListener("error", function () { im.remove(); nm.hidden = false; });
    }
    E("span", { text: str(d.coreSub, "One version of the truth") }, c);
    return c;
  }

  function build(root, d, compact) {
    var lanes = laneData(d), short = clip(str(d.short, d.company || "Your business"), 20);
    var toggle = arr(d.toggle).length === 2 ? d.toggle : ["Today", "With one system"];
    var p = E("div", { cls: "sfl-p" + (compact ? " cmp" : "") }, root);
    var inn = E("div", { cls: "sfl-in" }, p);
    var label = "Today: " + lanes.map(function (l) { return l.out + " is pulled together by hand from " + l.from.map(function (f) { return f.label; }).join(", "); }).join("; ") +
      ". With one system: the same records feed one version of the truth for " + str(d.company, short) + ", which produces " + lanes.map(function (l) { return l.out; }).join(", ") + ".";
    var L0 = arr(d.todayLegend).length ? d.todayLegend : ["Typed in more than once", "Kept in separate places", "Waits on one person", "Done in a rush before it's due"];
    var L1 = arr(d.withLegend).length ? d.withLegend : ["Entered once", "One place to look", "Anyone can find it", "Ready as the work happens"];
    var LI0 = ["copy", "folder", "user", "clock"], LI1 = ["check", "layers", "users", "check"];
    var leg = E("div", { cls: "sfl-leg", "aria-hidden": "true" }, inn);
    var lg0 = E("div", { cls: "sfl-v0" }, leg), lg1 = E("div", { cls: "sfl-v1" }, leg);
    L0.slice(0, 4).forEach(function (t, i) { var s = E("span", {}, lg0); ico(LI0[i], s); s.appendChild(document.createTextNode(clip(t, 34))); });
    L1.slice(0, 4).forEach(function (t, i) { var s = E("span", {}, lg1); ico(LI1[i], s); s.appendChild(document.createTextNode(clip(t, 34))); });
    var g = E("div", { cls: "sfl-g m1", role: "img", "aria-label": label }, inn);
    function man(parent, l) { var m = E("div", { cls: "sfl-man" }, parent); l.manual.forEach(function (t) { var s = E("span", {}, m); ico("copy", s); s.appendChild(document.createTextNode(t)); }); return m; }
    var rows = [];

    if (!compact) {
      E("div", { cls: "sfl-h h-src", text: str(d.fromLabel, "Where it sits today"), "aria-hidden": "true" }, g);
      var hc = E("div", { cls: "sfl-h h-core", "aria-hidden": "true" }, g);
      core(hc, d, short);
      E("div", { cls: "sfl-h h-out", text: str(d.outLabel, "What it produces"), "aria-hidden": "true" }, g);
      E("div", { cls: "sfl-cbg", "aria-hidden": "true", css: "grid-row:1 / span " + (lanes.length + 1) }, g);
      lanes.forEach(function (l, i) {
        var r = i + 2, st = "grid-row:" + r + ";--lc:" + l.c;
        var rail = E("div", { cls: "sfl-rail", css: st, "aria-hidden": "true" }, g);
        var src = E("div", { cls: "sfl-src", css: st, "aria-hidden": "true" }, g);
        l.from.forEach(function (f) {
          var ch = E("div", { cls: "sfl-chip" }, src);
          ico(f.icon, E("i", {}, ch));
          var tx = E("span", {}, ch); E("b", { text: f.label }, tx); if (f.where) E("em", { text: f.where }, tx);
        });
        var w1 = E("div", { cls: "sfl-w", css: st + ";grid-column:2;--li:" + i + ";--wo:0s", "aria-hidden": "true" }, g); E("i", {}, w1); E("u", { cls: "p1" }, w1); E("u", { cls: "p2" }, w1);
        var cell = E("div", { cls: "sfl-cell", css: st, "aria-hidden": "true" }, g);
        if (l.holds) E("span", { cls: "sfl-hold", text: l.holds }, cell);
        if (l.manual.length) man(cell, l);
        var w2 = E("div", { cls: "sfl-w", css: st + ";grid-column:4;--li:" + i + ";--wo:1.3s", "aria-hidden": "true" }, g); E("i", {}, w2); E("u", { cls: "p1" }, w2); E("u", { cls: "p2" }, w2);
        var out = E("div", { cls: "sfl-out" + (l.growth ? " gr" : ""), css: st, "aria-hidden": "true" }, g);
        E("span", { cls: "sfl-bd", text: String(l.n) }, out);
        var ob = E("div", {}, out);
        var top = E("div", { cls: "sfl-ot" }, ob); E("small", { text: l.kind }, top); if (l.when) E("em", { text: l.when }, top);
        E("b", { text: l.out }, ob);
        var s0 = E("span", { cls: "sfl-s0" }, ob); ico("clock", s0); s0.appendChild(document.createTextNode(l.today));
        var s1 = E("span", { cls: "sfl-s1" }, ob); ico("check", s1); s1.appendChild(document.createTextNode(l.with));
        if (l.check) { var k1 = E("span", { cls: "sfl-ck" }, ob); ico("user", k1); k1.appendChild(document.createTextNode(l.check)); }
        rows.push([rail, src, w1, cell, w2, out]);
      });
    } else {
      var band = E("div", { cls: "sfl-band", "aria-hidden": "true" }, g);
      core(band, d, short);
      lanes.forEach(function (l) {
        var card = E("div", { cls: "sfl-cc" + (l.growth ? " gr" : ""), css: "--lc:" + l.c, "aria-hidden": "true" }, g);
        var h = E("div", { cls: "sfl-cch" }, card);
        E("span", { cls: "sfl-bd", text: String(l.n) }, h);
        var hb = E("div", {}, h); var top = E("div", { cls: "sfl-ot" }, hb); E("small", { text: l.kind }, top); if (l.when) E("em", { text: l.when }, top);
        E("b", { text: l.out }, hb);
        var fr = E("div", { cls: "sfl-ccf" }, card);
        l.from.forEach(function (f) { var ch = E("span", { cls: "sfl-mini" }, fr); ico(f.icon, ch); ch.appendChild(document.createTextNode(f.label)); });
        var via = E("div", { cls: "sfl-via" }, card); E("i", {}, via); E("span", { text: l.holds ? "Into one record: " + l.holds : "Into one record" }, via);
        if (l.manual.length) man(card, l);
        var c0 = E("span", { cls: "sfl-s0" }, card); ico("clock", c0); c0.appendChild(document.createTextNode(l.today));
        var s1 = E("span", { cls: "sfl-s1" }, card); ico("check", s1); s1.appendChild(document.createTextNode(l.with));
        if (l.check) { var k2 = E("span", { cls: "sfl-ck" }, card); ico("user", k2); k2.appendChild(document.createTextNode(l.check)); }
        rows.push([card]);
      });
    }

    var ft = E("div", { cls: "sfl-ft" }, inn);
    var grp = E("div", { cls: "sfl-tgs", role: "group", "aria-label": "Show" }, ft);
    var tb = toggle.map(function (t, i) { return E("button", { type: "button", cls: "sfl-tg", "aria-pressed": i === 1 ? "true" : "false", text: t }, grp); });
    if (d.note) E("span", { cls: "sfl-note", text: d.note }, ft);
    var rp = E("button", { type: "button", cls: "sfl-rp", text: "↻ Replay" }, ft);

    var T = [];
    function clear() { T.forEach(clearTimeout); T = []; }
    function at(ms, fn) { if (RED()) { fn(); return; } T.push(setTimeout(fn, ms)); }
    function lane(i, on) { rows[i].forEach(function (el) { cls(el, "on", on); }); }
    function mode(m, lit) {
      cls(g, "m0", m === 0); cls(g, "m1", m === 1); cls(leg, "m0", m === 0); cls(leg, "m1", m === 1);
      tb.forEach(function (b, j) { b.setAttribute("aria-pressed", j === m ? "true" : "false"); });
      rows.forEach(function (_, i) { lane(i, m === 1 && lit); });
    }
    function play() {
      clear(); mode(0, false);
      at(5200, function () { mode(1, false); });
      rows.forEach(function (_, i) { at(5600 + i * 650, function () { lane(i, true); }); });
    }
    tb[0].addEventListener("click", function () { clear(); mode(0, false); });
    tb[1].addEventListener("click", function () { clear(); mode(1, true); });
    rp.addEventListener("click", play);
    mode(1, true);
    return { pre: function () { clear(); mode(0, false); }, play: play, kill: clear };
  }

  function injectCSS() {
    if (document.getElementById("sfl-css")) return;
    var s = document.createElement("style"); s.id = "sfl-css"; s.textContent = CSS; document.head.appendChild(s);
  }

  function mount(el, data) {
    if (!el) return function () {};
    injectCSS();
    var d = data || DEMO;
    var root = E("div", { cls: "sfl" }, el);
    var inst = null, cmp = null, played = false, dead = false, rt = 0, BP = Number(d.breakpoint) || 720;
    function draw() { if (inst) inst.kill(); root.textContent = ""; try { inst = build(root, d, cmp); } catch (err) { if (window.console) console.error("SFLanes", err); inst = null; } }
    function check() { if (dead) return; var w = root.clientWidth || el.clientWidth || 1000; var c = w < BP; if (c !== cmp) { cmp = c; draw(); } }
    check();
    var ro = ("ResizeObserver" in window) ? new ResizeObserver(function () { clearTimeout(rt); rt = setTimeout(check, 120); }) : null;
    if (ro) ro.observe(root);
    var io = null;
    if (!RED() && ("IntersectionObserver" in window)) {
      io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting && !played && inst) { played = true; inst.play(); } }); }, { threshold: 0.35 });
      io.observe(root);
    }
    return function stop() { dead = true; clearTimeout(rt); if (inst) inst.kill(); if (ro) ro.disconnect(); if (io) io.disconnect(); root.remove(); };
  }

  var CSS =
  ".sfl{--stage:#020a1f;--line:rgba(148,163,184,.14);--line2:rgba(148,163,184,.26);--ink:#F1F5F9;--body:#CBD5E1;--muted:#94A3B8;--faint:#64748B;--blue:#2563EB;--hi:#60A5FA;--pale:#BFDBFE;--sans:'Inter',ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;font-family:var(--sans);color:var(--ink);line-height:1.45;-webkit-font-smoothing:antialiased;width:100%;min-width:0}\n" +
  ".sfl *{box-sizing:border-box}\n" +
  ".sfl .sfl-p{position:relative;border:1px solid var(--line);border-radius:22px;overflow:hidden;background:radial-gradient(55% 70% at 50% 40%,rgba(37,99,235,.13),transparent 65%),var(--stage)}\n" +
  ".sfl .sfl-in{padding:clamp(18px,3vw,30px);display:flex;flex-direction:column;gap:18px;min-width:0}\n" +
  ".sfl .sfl-ic{width:100%;height:100%;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}\n" +
  /* desktop grid */
  ".sfl .sfl-g{position:relative;display:grid;grid-template-columns:minmax(0,1.2fr) minmax(24px,.32fr) minmax(150px,.78fr) minmax(24px,.32fr) minmax(0,1.12fr);row-gap:10px;align-items:center}\n" +
  ".sfl .sfl-h{grid-row:1;font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);align-self:end;padding-bottom:6px}\n" +
  ".sfl .h-src{grid-column:1}.sfl .h-out{grid-column:5}\n" +
  ".sfl .h-core{grid-column:3;position:relative;z-index:2;text-align:center;padding:16px 10px 8px}\n" +
  ".sfl .sfl-core-h b{display:block;font-size:17px;font-weight:700;letter-spacing:-.01em;text-transform:none;color:var(--ink)}\n" +
  ".sfl .sfl-core-h span{display:block;margin-top:4px;font-size:10.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#DBEAFE}\n" +
  ".sfl .sfl-core-h .sfl-lg{display:block;margin:0 auto;max-width:120px;max-height:30px;object-fit:contain}.sfl .sfl-core-h .sfl-lg.sil{filter:brightness(0) invert(1)}\n" +
  ".sfl .sfl-cbg{grid-column:3;align-self:stretch;border-radius:18px;border:1px solid rgba(96,165,250,.55);background:linear-gradient(180deg,rgba(37,99,235,.42),rgba(30,58,138,.32) 40%,rgba(11,36,98,.45));box-shadow:0 0 0 6px rgba(37,99,235,.08),0 24px 60px rgba(37,99,235,.28);transition:all .7s}\n" +
  ".sfl .m0 .sfl-cbg{border-style:dashed;border-color:var(--line2);background:rgba(15,23,42,.35);box-shadow:none}\n" +
  ".sfl .m0 .h-core{opacity:.45}.sfl .h-core{transition:opacity .7s}\n" +
  ".sfl .sfl-rail{grid-column:1 / -1;align-self:stretch;border-radius:14px;background:linear-gradient(90deg,color-mix(in srgb,var(--lc) 9%,transparent),transparent 30%,transparent 70%,color-mix(in srgb,var(--lc) 9%,transparent));opacity:0;transition:opacity .6s}\n" +
  ".sfl .sfl-rail.on{opacity:1}\n" +
  ".sfl .sfl-src{grid-column:1;position:relative;display:flex;flex-direction:column;gap:6px;padding:8px 16px 8px 8px;min-width:0}\n" +
  ".sfl .sfl-src::after{content:'';position:absolute;right:0;top:24px;bottom:24px;width:2px;border-radius:2px;background:var(--line2);transition:background .5s}\n" +
  ".sfl .sfl-src.on::after{background:var(--lc)}\n" +
  ".sfl .sfl-chip{position:relative;display:flex;align-items:center;gap:9px;min-width:0;padding:6px 10px 6px 6px;border:1px solid var(--line2);border-radius:10px;background:rgba(7,20,51,.85)}\n" +
  ".sfl .sfl-chip::after{content:'';position:absolute;right:-17px;top:50%;width:16px;height:2px;background:var(--line2);transition:background .5s}\n" +
  ".sfl .sfl-src.on .sfl-chip::after{background:var(--lc)}\n" +
  ".sfl .sfl-chip i{flex:none;width:26px;height:26px;border-radius:8px;display:grid;place-items:center;padding:5px;color:var(--pale);background:rgba(37,99,235,.22)}\n" +
  ".sfl .sfl-chip span{min-width:0;display:flex;align-items:baseline;gap:6px;flex-wrap:wrap}\n" +
  ".sfl .sfl-chip b{font-size:13px;font-weight:600;color:var(--ink)}.sfl .sfl-chip em{font-style:normal;font-size:11.5px;color:var(--muted)}\n" +
  ".sfl .sfl-w{position:relative;align-self:stretch;min-height:20px}\n" +
  ".sfl .sfl-w i{position:absolute;left:0;right:0;top:50%;height:2px;margin-top:-1px;background:repeating-linear-gradient(90deg,var(--line2) 0 5px,transparent 5px 10px);transition:background .5s,box-shadow .5s}\n" +
  ".sfl .m0 .sfl-w i{right:45%}\n" +
  ".sfl .sfl-w.on i{background:var(--lc);box-shadow:0 0 10px var(--lc)}\n" +
  ".sfl .sfl-w u{position:absolute;top:50%;left:0;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:#fff;box-shadow:0 0 8px var(--lc);opacity:0}\n" +
  ".sfl .sfl-w.on u{animation:sflRun 1.7s linear infinite}.sfl .sfl-w.on u.p2{animation-delay:-.85s}\n" +
  "@keyframes sflRun{0%{left:0;opacity:0}15%{opacity:1}85%{opacity:1}100%{left:100%;opacity:0}}\n" +
  ".sfl .sfl-cell{grid-column:3;position:relative;z-index:1;display:flex;justify-content:center;padding:0 10px}\n" +
  ".sfl .sfl-hold{font-size:11.5px;font-weight:500;color:var(--ink);text-align:center;padding:6px 10px;border-radius:99px;border:1px solid color-mix(in srgb,var(--lc) 60%,transparent);background:rgba(2,10,31,.55);opacity:0;transform:scale(.94);transition:opacity .5s,transform .5s}\n" +
  ".sfl .sfl-cell.on .sfl-hold{opacity:1;transform:none}\n" +
  ".sfl .sfl-out{grid-column:5;display:flex;gap:12px;align-items:flex-start;padding:12px 14px;margin:6px 8px 6px 0;border:1px solid var(--line2);border-radius:14px;background:rgba(7,20,51,.85);transition:border-color .5s,box-shadow .5s;min-width:0}\n" +
  ".sfl .sfl-out.on{border-color:var(--lc);box-shadow:0 10px 30px color-mix(in srgb,var(--lc) 18%,transparent)}\n" +
  ".sfl .sfl-out>div{min-width:0;display:flex;flex-direction:column;gap:3px}\n" +
  ".sfl .sfl-bd{flex:none;width:26px;height:26px;border-radius:50%;display:grid;place-items:center;font-size:12.5px;font-weight:700;color:var(--lc);border:1.5px solid var(--lc);transition:all .5s}\n" +
  ".sfl .on .sfl-bd,.sfl .sfl-bd.on{background:var(--lc);color:#020a1f}.sfl .sfl-out.on .sfl-bd,.sfl .sfl-cc.on .sfl-bd{background:var(--lc);color:#020a1f}\n" +
  ".sfl .sfl-ot{display:flex;flex-wrap:wrap;gap:4px 8px;align-items:center}\n" +
  ".sfl .sfl-ot small{font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--lc)}\n" +
  ".sfl .sfl-ot em{font-style:normal;font-size:11px;color:var(--muted);border:1px solid var(--line2);border-radius:99px;padding:1px 8px}\n" +
  ".sfl .sfl-out b,.sfl .sfl-cch b{font-size:14.5px;font-weight:600;line-height:1.3;color:var(--ink)}\n" +
  ".sfl .sfl-s0,.sfl .sfl-s1{font-size:12px;line-height:1.4}\n" +
  ".sfl .sfl-s0{color:var(--muted)}\n" +
  ".sfl .sfl-s1{display:none;align-items:center;gap:6px;color:var(--body)}.sfl .sfl-s1 .sfl-ic{width:14px;height:14px;flex:none;color:var(--lc)}\n" +
  ".sfl .m1 .on .sfl-s0,.sfl .m1 .sfl-cc.on .sfl-s0{display:none}.sfl .m1 .on .sfl-s1,.sfl .m1 .sfl-cc.on .sfl-s1{display:flex}\n" +
  /* compact */
  ".sfl .cmp .sfl-g{display:flex;flex-direction:column;gap:10px}\n" +
  ".sfl .sfl-band{text-align:center;padding:14px 12px;border-radius:14px;border:1px solid rgba(96,165,250,.55);background:linear-gradient(180deg,rgba(37,99,235,.42),rgba(11,36,98,.45));transition:all .6s}\n" +
  ".sfl .m0 .sfl-band{border-style:dashed;border-color:var(--line2);background:rgba(15,23,42,.35);opacity:.6}\n" +
  ".sfl .sfl-cc{display:flex;flex-direction:column;gap:9px;padding:13px 14px;border:1px solid var(--line2);border-left:3px solid var(--lc);border-radius:14px;background:rgba(7,20,51,.85);transition:border-color .5s,box-shadow .5s}\n" +
  ".sfl .sfl-cc.on{border-color:var(--lc);box-shadow:0 10px 26px color-mix(in srgb,var(--lc) 16%,transparent)}\n" +
  ".sfl .sfl-cch{display:flex;gap:10px;align-items:flex-start}.sfl .sfl-cch>div{display:flex;flex-direction:column;gap:3px;min-width:0}\n" +
  ".sfl .sfl-ccf{display:flex;flex-wrap:wrap;gap:6px}\n" +
  ".sfl .sfl-mini{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--body);padding:4px 9px 4px 6px;border:1px solid var(--line2);border-radius:99px}.sfl .sfl-mini .sfl-ic{width:14px;height:14px;color:var(--pale)}\n" +
  ".sfl .sfl-via{display:flex;align-items:center;gap:8px;font-size:11.5px;color:var(--muted)}\n" +
  ".sfl .sfl-via i{flex:none;width:30px;height:2px;background:repeating-linear-gradient(90deg,var(--line2) 0 4px,transparent 4px 8px)}\n" +
  ".sfl .m1 .sfl-cc.on .sfl-via{color:var(--body)}.sfl .m1 .sfl-cc.on .sfl-via i{background:var(--lc)}\n" +
  ".sfl .m1 .sfl-v0,.sfl .m0 .sfl-v1{display:none}\n" +
  ".sfl .sfl-pi{display:block;width:34px;height:34px;margin:0 auto 6px;padding:7px;border-radius:50%;color:#FDE68A;border:1.5px dashed rgba(251,191,36,.7);animation:sflPulse 2.4s ease-in-out infinite}\n" +
  "@keyframes sflPulse{0%,100%{box-shadow:0 0 0 0 rgba(251,191,36,.35)}50%{box-shadow:0 0 0 8px rgba(251,191,36,0)}}\n" +
  ".sfl .m0 .h-core{opacity:1}\n" +
  ".sfl .sfl-leg>div{display:flex;flex-wrap:wrap;gap:8px}\n" +
  ".sfl .sfl-leg span{display:inline-flex;align-items:center;gap:7px;font-size:12.5px;font-weight:500;padding:6px 12px 6px 9px;border-radius:99px;border:1px solid rgba(96,165,250,.35);color:var(--body);background:rgba(37,99,235,.1)}\n" +
  ".sfl .sfl-leg span .sfl-ic{width:15px;height:15px;color:var(--hi)}\n" +
  ".sfl .sfl-leg .sfl-v0 span{border-color:rgba(251,191,36,.4);background:rgba(251,191,36,.07)}.sfl .sfl-leg .sfl-v0 span .sfl-ic{color:#FBBF24}\n" +
  ".sfl .sfl-man{display:flex;flex-direction:column;align-items:center;gap:5px}\n" +
  ".sfl .sfl-man span{display:inline-flex;align-items:center;gap:6px;font-size:11.5px;font-weight:500;color:#FDE68A;padding:4px 10px 4px 8px;border-radius:99px;border:1px dashed rgba(251,191,36,.55);background:rgba(2,10,31,.7);white-space:nowrap}\n" +
  ".sfl .sfl-man .sfl-ic{width:13px;height:13px;color:#FBBF24}\n" +
  ".sfl .m1 .sfl-man,.sfl .m0 .sfl-hold,.sfl .m0 .sfl-via{display:none}\n" +
  ".sfl .cmp .sfl-man{flex-direction:row;flex-wrap:wrap;justify-content:flex-start}\n" +
  ".sfl .m0 .sfl-src::after,.sfl .m0 .sfl-chip::after{opacity:0}\n" +
  ".sfl .sfl-chip{transition:transform .6s,border-color .6s}\n" +
  ".sfl .m0 .sfl-chip{border-style:dashed}.sfl .m0 .sfl-chip:nth-child(2){transform:translateX(14px)}.sfl .m0 .sfl-chip:nth-child(3){transform:translateX(5px)}\n" +
  ".sfl .m0 .sfl-w u.p1{animation:sflSlow 10s linear infinite;animation-delay:calc(var(--li) * 2.5s + var(--wo));background:#FBBF24;box-shadow:0 0 8px #FBBF24;width:9px;height:9px;margin:-4.5px 0 0 -4.5px;border-radius:2px}\n" +
  "@keyframes sflSlow{0%{left:0;opacity:0}2%{opacity:1}11%{left:100%;opacity:1}12%{left:100%;opacity:0}100%{left:100%;opacity:0}}\n" +
  ".sfl .sfl-s0{display:flex;align-items:center;gap:6px;color:#FDE68A}.sfl .sfl-s0 .sfl-ic{width:14px;height:14px;flex:none;color:#FBBF24}\n" +
  ".sfl .m0 .sfl-out,.sfl .m0 .sfl-cc{border-style:dashed}\n" +
  ".sfl .sfl-ck{display:none;align-items:center;gap:6px;font-size:11.5px;color:var(--pale);margin-top:2px;padding-top:6px;border-top:1px dashed var(--line2)}.sfl .sfl-ck .sfl-ic{width:13px;height:13px;flex:none;color:var(--lc)}\n" +
  ".sfl .m1 .on .sfl-ck,.sfl .m1 .sfl-cc.on .sfl-ck{display:flex}\n" +
  /* footer */
  ".sfl .sfl-ft{display:flex;flex-wrap:wrap;gap:8px 12px;align-items:center}\n" +
  ".sfl .sfl-tgs{display:flex;flex-wrap:wrap;gap:8px}\n" +
  ".sfl .sfl-tg{font:inherit;cursor:pointer;color:var(--ink);border:1px solid var(--line2);background:rgba(2,10,31,.6);border-radius:99px;padding:7px 14px;font-size:13px;font-weight:500;transition:background .25s,border-color .25s}\n" +
  ".sfl .sfl-tg:hover{border-color:var(--hi)}.sfl .sfl-tg[aria-pressed=true]{background:var(--blue);border-color:var(--blue);color:#fff}\n" +
  ".sfl .sfl-tg:focus-visible,.sfl .sfl-rp:focus-visible{outline:2px solid var(--hi);outline-offset:2px}\n" +
  ".sfl .sfl-note{font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--faint)}\n" +
  ".sfl .sfl-rp{font:inherit;cursor:pointer;margin-left:auto;border:1px solid var(--line2);background:none;border-radius:6px;padding:6px 10px;font-size:11.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}\n" +
  "@media (prefers-reduced-motion:reduce){html:not(.force-motion) .sfl *{animation:none!important;transition:none!important}}\n";

  // Example data: a fictional manufacturer. Lane content waits on the trigger check before any live use.
  var DEMO = {
    company: "Arden Vale Manufacturing", short: "Arden Vale", note: "Illustrative example",
    lanes: [
      { kind: "duty", out: "Carbon charge record", when: "From Jan 2027", holds: "Emissions by shipment", manual: ["Re-keyed into Excel", "Chased by email"], today: "Rebuilt by hand before it's due",
        from: [{ label: "Supplier invoices", where: "Sage", icon: "pound" }, { label: "Import entries", where: "Inbox", icon: "globe" }, { label: "Mill certificates", where: "Shared drive", icon: "filecheck" }] },
      { kind: "duty", out: "Packaging EPR return", when: "Twice a year", holds: "Packaging by weight", manual: ["Weights copied by hand", "Totals checked twice"], today: "Rebuilt from scratch each time",
        from: [{ label: "Despatch notes", where: "Excel", icon: "truck" }, { label: "Packaging specs", where: "Shared drive", icon: "box" }, { label: "Sales volumes", where: "Sage", icon: "bars" }] },
      { kind: "duty", out: "UKCA technical file", when: "Each new product", holds: "Evidence by product", manual: ["Hunted for in inboxes", "Versions compared by eye"], today: "Assembled when someone asks",
        from: [{ label: "Drawings", where: "SolidWorks", icon: "pen" }, { label: "Test reports", where: "Inbox", icon: "filecheck" }, { label: "Supplier declarations", where: "Shared drive", icon: "doc" }] },
      { kind: "growth", out: "Margin by order", when: "Every order", holds: "Cost and time by order", manual: ["Timesheets typed up", "Costs matched at month end"],
        from: [{ label: "Works orders", where: "Job board", icon: "kanban" }, { label: "Timesheets", where: "Paper", icon: "clock" }, { label: "Material costs", where: "Sage", icon: "pound" }],
        today: "Known once the month is closed", with: "Visible while the order is running" }
    ]
  };

  var API = { version: VERSION, mount: mount, demo: DEMO };
  window.SFLanes = API;
  function extend() {
    ["SFProspect", "SFDiagrams"].forEach(function (k) {
      var M = window[k]; if (!M || M.__sfl) return;
      var base = M.mount;
      M.mount = function (el, name, data) { return name === "p-lanes" ? mount(el, data) : base.call(M, el, name, data); };
      M.names = (M.names || []).concat(["p-lanes"]); M.__sfl = true;
    });
  }
  extend();
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", extend);
})();
