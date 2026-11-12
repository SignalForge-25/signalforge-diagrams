;(function(){
  /* SFDiagrams.enhanceArticle(container, slug) (v1.7.1)
     Adds visuals to a rendered Insights article. The article text is never removed:
     a table or list a visual replaces is folded into a "View as a table / text" panel. */
  var SPECS = __SPECS__;
  var CSS = '.sfa-slot{margin:28px 0 10px}.sfa-slot+.sfa-alt{margin-top:0}'
   +'.sfa-alt{margin:0 0 30px;border:1px solid rgba(148,163,184,.16);border-radius:12px;background:rgba(6,16,42,.55)}'
   +'.sfa-alt>summary{cursor:pointer;list-style:none;display:flex;align-items:center;gap:8px;padding:10px 14px;font:500 13px/1.4 Inter,ui-sans-serif,system-ui,sans-serif;color:#94A3B8}'
   +'.sfa-alt>summary::-webkit-details-marker{display:none}'
   +'.sfa-alt>summary::before{content:"+";color:#60A5FA;font-size:17px;line-height:1;width:12px}'
   +'.sfa-alt[open]>summary::before{content:"\\2212"}'
   +'.sfa-alt>summary:hover{color:#F1F5F9}'
   +'.sfa-alt>.sfa-alt-body{padding:2px 16px 4px}'
   +'.sfa-alt .table-scroll{margin:0 0 14px}'
   +'.sfa div p,.sfa div h5{margin:0}';
  function addCss(){ if(document.getElementById('sfa-enhance-css')) return; var st=document.createElement('style'); st.id='sfa-enhance-css'; st.textContent=CSS; document.head.appendChild(st); }
  function norm(t){ return String(t||'').replace(/[‘’]/g,"'").replace(/\s+/g,' ').trim().toLowerCase(); }
  function isHead(n,lv){ return n && (lv==2 ? n.tagName==='H2' : /^H[23]$/.test(n.tagName)); }
  function next(n){ return n ? n.nextElementSibling : null; }

  function enhanceArticle(root, slug){
    var specs = SPECS[slug]; if(!root || !specs) return function(){};
    addCss();
    var heads = [].slice.call(root.querySelectorAll('h2,h3')), done = [];
    specs.forEach(function(sp){
      try {
        var want = norm(sp[0]), name = sp[1], data = sp[2], rep = sp[3], mode = sp[4] || 'after-heading';
        var h = heads.filter(function(x){ return norm(x.textContent) === want; })[0]
             || heads.filter(function(x){ return norm(x.textContent).indexOf(want) === 0; })[0];
        if(!h) return;
        var anchor = h, n;
        if(mode === 'after-block'){ anchor = h.closest('.short-answer') || next(h) || h; }
        else if(mode.indexOf('after-p-containing:') === 0){ var txt = mode.slice(19);
          for(n = next(h); n && !isHead(n,2); n = next(n)){ if(n.tagName === 'P' && n.textContent.indexOf(txt) >= 0){ anchor = n; break; } } }
        var targets = [];
        if(rep === 'table' || rep === 'list'){
          for(n = next(anchor); n && !isHead(n,3); n = next(n)){
            var hit = rep === 'table' ? (n.tagName === 'TABLE' || (n.querySelector && n.querySelector('table')))
                                      : (n.tagName === 'UL' || n.tagName === 'OL');
            if(hit){ targets = [n]; break; } } }
        else if(rep === 'allnext'){ for(n = next(anchor); n && !isHead(n,2); n = next(n)) targets.push(n); }
        /* where the visual goes: in place of what it replaces; otherwise after the intro paragraph */
        var before;
        if(targets.length) before = targets[0];
        else { var p = next(anchor); before = (mode === 'after-heading' && p && p.tagName === 'P') ? next(p) : p; }
        var slot = document.createElement('div'); slot.className = 'sfa-slot';
        var parent = before ? before.parentNode : anchor.parentNode;
        parent.insertBefore(slot, before || null);
        var stop;
        try { stop = window.SFDiagrams.mount(slot, name, data || null); } catch(e){ slot.remove(); throw e; }
        if(!slot.firstChild){ slot.remove(); return; }
        var det = null;
        if(targets.length){
          det = document.createElement('details'); det.className = 'sfa-alt';
          det.innerHTML = '<summary>' + (rep === 'table' ? 'View as a table' : 'View as text') + '</summary><div class="sfa-alt-body"></div>';
          parent.insertBefore(det, targets[0]);
          var body = det.lastChild; targets.forEach(function(t){ body.appendChild(t); });
        }
        done.push({slot:slot, det:det, targets:targets, stop:stop});
      } catch(e){ if(window.console) console.warn('SFDiagrams.enhanceArticle', sp && sp[0], e); }
    });
    return function(){ done.forEach(function(d){ try{ d.stop(); }catch(e){}
      if(d.det && d.det.parentNode){ d.targets.forEach(function(t){ d.det.parentNode.insertBefore(t, d.det); }); d.det.remove(); }
      d.slot.remove(); }); done = []; };
  }
  window.SFDiagrams.enhanceArticle = enhanceArticle;
  window.SFDiagrams.articleSlugs = Object.keys(SPECS);
})();
