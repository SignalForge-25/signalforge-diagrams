/* SignalForge article diagrams (v1.7.0): generic, data-driven visuals for Insights articles.
   art-stats, art-cards, art-steps, art-bars, art-compare, art-tabs, art-links, art-converge, art-gantt.
   Each engine: fn(host, markup, data) -> cleanup. All text stays in the DOM. */
Ve.__art = Ve.__prop + `
.sfa{--ink:#F1F5F9;--muted:#94A3B8;--faint:#8796AD;--line:rgba(148,163,184,.16);--line2:rgba(148,163,184,.28);--panel:#06102a;--card:#071433;--blue:#2563EB;--hi:#60A5FA;--pale:#BFDBFE;--soft:rgba(37,99,235,.16);--glow:rgba(37,99,235,.55);--sans:'Inter',ui-sans-serif,system-ui,sans-serif;--mono:'JetBrains Mono',ui-monospace,Menlo,monospace;color:var(--ink);font-family:var(--sans);font-size:16px;line-height:1.5;margin:8px 0 6px}
.sfa *,.sfa *::before,.sfa *::after{box-sizing:border-box}
.sfa p{margin:0}.sfa h5{margin:0}
.sfa button{font:inherit;color:inherit;background:none;border:0;padding:0;cursor:pointer}
.sfa :focus-visible{outline:2px solid var(--hi);outline-offset:3px;border-radius:8px}
.sfa .ico{width:22px;height:22px;stroke:currentColor;fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;flex:none}
.sfa .a-k{font-family:var(--mono);font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--faint)}
.sfa .a-box{border:1px solid var(--line);border-radius:18px;background:radial-gradient(120% 140% at 0% 0%,rgba(37,99,235,.10),transparent 55%),var(--panel);padding:22px}
.sfa .a-title{font-size:15px;font-weight:600;color:var(--pale);margin:0 0 14px;display:flex;gap:10px;align-items:center}
.sfa .a-foot{margin-top:12px;color:var(--faint);font-size:12.5px;line-height:1.5}
.sfa .a-foot a{color:var(--hi)}
.sfa .a-ic{width:42px;height:42px;border-radius:12px;display:grid;place-items:center;background:linear-gradient(145deg,#1d4ed8,#0b1d47);color:#fff;box-shadow:0 8px 22px rgba(37,99,235,.3);flex:none}
.sfa .a-ic .ico{width:21px;height:21px}
.sfa .rv{transition:opacity .6s ease,transform .6s cubic-bezier(.2,.7,.2,1)}
.sfa.pre .rv{opacity:0;transform:translateY(12px)}
/* stats */
.as-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(118px,1fr));gap:12px}
.as-c{border:1px solid var(--line2);border-radius:16px;background:var(--card);padding:16px 16px 14px;display:flex;flex-direction:column;gap:8px}
.as-top{display:flex;flex-direction:column-reverse;align-items:flex-start;gap:10px}
.as-v{font-size:25px;font-weight:700;letter-spacing:-.02em;color:#fff;line-height:1.05;font-variant-numeric:tabular-nums}
.as-c .ico{color:var(--hi);width:20px;height:20px}
.as-l{font-size:13.5px;color:var(--muted);line-height:1.4}
.as-c.hl{border-color:rgba(96,165,250,.55);background:linear-gradient(135deg,rgba(37,99,235,.24),rgba(37,99,235,.06))}
/* cards */
.ac-grid{display:grid;gap:12px;grid-template-columns:repeat(var(--cols,2),1fr)}
.ac-c{border:1px solid var(--line2);border-radius:16px;background:var(--card);padding:16px;display:flex;gap:14px;align-items:flex-start;transition:border-color .25s,transform .25s}
.ac-c:hover{border-color:rgba(96,165,250,.5);transform:translateY(-2px)}
.ac-n{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;font-family:var(--mono);font-size:13px;color:var(--pale);border:1.5px solid var(--hi);flex:none;background:#0b1d47}
.ac-c h5{font-size:15.5px;font-weight:600;line-height:1.3;margin-bottom:5px}
.ac-c p{font-size:14px;color:var(--muted);line-height:1.5}
@media (max-width:640px){.ac-grid{grid-template-columns:1fr}}
/* steps */
.ast{position:relative;padding-left:44px}
.ast-rail{position:absolute;left:16px;top:10px;bottom:10px;width:2px;background:var(--line2)}
.ast-rail i{position:absolute;left:0;top:0;width:2px;height:100%;background:linear-gradient(180deg,var(--hi),var(--blue));transform-origin:top;transform:scaleY(var(--p,1));transition:transform .7s ease}
.ast-s{position:relative;padding:4px 0 18px}
.ast-s:last-child{padding-bottom:0}
.ast-dot{position:absolute;left:-44px;top:2px;width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:#0b1d47;border:1.5px solid var(--line2);font-family:var(--mono);font-size:12px;color:var(--pale);transition:all .35s}
.ast-s.on .ast-dot{background:var(--blue);border-color:var(--pale);color:#fff;box-shadow:0 0 0 5px rgba(37,99,235,.2)}
.ast-s .a-k{color:var(--hi);display:block;margin-bottom:3px}
.ast-s h5{font-size:16px;font-weight:600;line-height:1.3;margin-bottom:4px}
.ast-s p{font-size:14.5px;color:var(--muted)}
.ast-g{font-family:var(--mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--pale);margin:6px 0 10px -44px;padding:6px 0 6px 44px;border-top:1px solid var(--line)}
/* bars */
.ab-r{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,2fr) 90px;gap:14px;align-items:center;padding:10px 0;border-bottom:1px solid var(--line)}
.ab-r:last-of-type{border-bottom:0}
.ab-l b{display:block;font-size:14.5px;font-weight:600;line-height:1.3}
.ab-l span{display:block;font-size:12.5px;color:var(--faint);line-height:1.4;margin-top:2px}
.ab-t{height:14px;border-radius:999px;background:rgba(148,163,184,.12);overflow:hidden}
.ab-t i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,var(--blue),var(--hi));transform-origin:left;transition:transform 1.1s cubic-bezier(.2,.7,.2,1)}
.sfa.pre .ab-t i{transform:scaleX(0)!important}
.ab-v{text-align:right;font-family:var(--mono);font-size:14px;color:var(--pale);font-variant-numeric:tabular-nums}
.ab-tot{margin-top:14px;display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;border:1px solid rgba(96,165,250,.45);border-radius:14px;background:linear-gradient(135deg,rgba(37,99,235,.22),rgba(37,99,235,.06));padding:14px 16px}
.ab-tot b{font-size:15px;font-weight:600}
.ab-tot strong{font-size:26px;font-weight:700;color:#fff;font-variant-numeric:tabular-nums}
.ab-tot span{display:block;font-size:13px;color:var(--muted);font-weight:400}
@media (max-width:640px){.ab-r{grid-template-columns:1fr 70px}.ab-t{grid-column:1/-1;grid-row:2}}
/* compare */
.acm-h{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1fr) 34px minmax(0,1fr);gap:10px;margin-bottom:6px}
.acm-r{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1fr) 34px minmax(0,1fr);gap:10px;align-items:stretch;margin-top:8px}
.acm-t{display:flex;gap:10px;align-items:center;font-weight:600;font-size:14.5px;line-height:1.3;padding:6px 0}
.acm-t .ico{color:var(--hi);width:19px;height:19px}
.acm-a{border:1px dashed var(--line2);border-radius:12px;padding:11px 13px;color:var(--muted);font-size:14px;line-height:1.45}
.acm-b{border:1px solid rgba(96,165,250,.45);border-radius:12px;padding:11px 13px;background:linear-gradient(135deg,rgba(37,99,235,.2),rgba(37,99,235,.05));font-size:14px;line-height:1.45}
.acm-x{position:relative;display:grid;place-items:center}
.acm-x i{position:absolute;left:2px;right:2px;top:50%;height:2px;background:var(--line2);overflow:hidden}
.acm-x i::after{content:"";position:absolute;inset:0;width:45%;background:linear-gradient(90deg,transparent,var(--hi));animation:acmflow 1.8s linear infinite}
@keyframes acmflow{from{transform:translateX(-100%)}to{transform:translateX(260%)}}
.acm-x svg{position:relative;width:16px;height:16px;stroke:var(--hi);fill:none;stroke-width:2;margin-left:auto}
.acm-lab{display:none;font-family:var(--mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--faint);margin-bottom:4px}
@media (max-width:700px){.acm-h{display:none}.acm-r{grid-template-columns:1fr;gap:6px;padding:12px 0;border-top:1px solid var(--line)}.acm-x{display:none}.acm-lab{display:block}}
/* tabs */
.at-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px}
.sfa .at-tab{border:1px solid var(--line2);border-radius:999px;padding:8px 15px;font-size:14px;color:var(--muted);display:flex;gap:8px;align-items:center;transition:all .25s}
.sfa .at-tab .ico{width:17px;height:17px}
.sfa .at-tab[aria-selected=true]{background:var(--blue);border-color:var(--blue);color:#fff;box-shadow:0 8px 22px rgba(37,99,235,.35)}
.at-p{border:1px solid var(--line2);border-radius:16px;background:var(--card);padding:18px 20px;display:grid;grid-template-columns:48px 1fr;gap:16px;transition:opacity .35s}
.at-p h5{font-size:17px;font-weight:600;margin-bottom:6px}
.at-p p{font-size:14.5px;color:var(--ink);line-height:1.55}
.at-p ul{margin:8px 0 0;padding-left:18px;color:var(--muted);font-size:14px}
.at-p li{margin:3px 0}
.at-p.fade{opacity:.2}
@media (max-width:640px){.at-p{grid-template-columns:1fr}}
/* links */
.al-r{display:grid;grid-template-columns:minmax(0,1fr) 70px minmax(0,1fr);gap:10px;align-items:center;margin-top:10px}
.al-r:first-child{margin-top:0}
.al-c{border:1px solid var(--line2);border-radius:12px;padding:10px 12px;font-size:14px;font-weight:600;background:var(--card);display:flex;gap:9px;align-items:center;line-height:1.3}
.al-c .ico{color:var(--hi);width:18px;height:18px}
.al-j{position:relative;height:2px;background:var(--line2)}
.al-j::before,.al-j::after{content:"";position:absolute;top:-4px;width:10px;height:10px;border-radius:50%;background:var(--blue);box-shadow:0 0 12px var(--glow)}
.al-j::before{left:-2px}.al-j::after{right:-2px}
.al-j i{position:absolute;inset:0;background:linear-gradient(90deg,transparent,var(--hi),transparent);animation:aljp 2.2s ease-in-out infinite}
@keyframes aljp{0%,100%{opacity:.2}50%{opacity:1}}
.al-d{grid-column:1/-1;font-size:14px;color:var(--muted);line-height:1.5;padding:2px 2px 8px;border-bottom:1px solid var(--line)}
.al-blk:last-child .al-d{border-bottom:0;padding-bottom:0}
@media (max-width:560px){.al-r{grid-template-columns:1fr;gap:6px}.al-j{height:16px;width:2px;margin-left:20px}.al-j::before,.al-j::after{display:none}}
/* converge */
.av{display:grid;grid-template-columns:minmax(0,1fr) 90px minmax(0,.8fr);gap:0;align-items:center;position:relative}
.av-s{display:flex;flex-direction:column;gap:9px}
.av-i{border:1px solid var(--line2);border-radius:12px;background:var(--card);padding:10px 12px;display:flex;gap:10px;align-items:center}
.av-i .ico{color:var(--hi);width:18px;height:18px}
.av-i b{display:block;font-size:14px;font-weight:600;line-height:1.3}
.av-i span{display:block;font-size:12.5px;color:var(--faint);line-height:1.35}
.av-svg{width:90px;height:100%;overflow:visible}
.av-svg path{fill:none;stroke:var(--line2);stroke-width:1.5}
.av-svg path.f{stroke:var(--hi);stroke-width:2;stroke-dasharray:6 10;animation:avf 1.4s linear infinite}
@keyframes avf{to{stroke-dashoffset:-32}}
.av-t{border:1px solid rgba(96,165,250,.55);border-radius:16px;padding:18px;background:linear-gradient(145deg,rgba(37,99,235,.28),rgba(37,99,235,.06));display:flex;flex-direction:column;gap:10px;align-items:flex-start;box-shadow:0 12px 34px rgba(37,99,235,.25)}
.av-t b{font-size:17px;font-weight:600}
.av-t span{font-size:13.5px;color:var(--pale);line-height:1.45}
@media (max-width:640px){.av{grid-template-columns:1fr}.av-svg{display:none}.av-t{margin-top:14px}.av-s::after{content:"";display:block;height:18px;width:2px;background:var(--hi);margin:2px auto 0}}
/* gantt */
.ag{display:grid;grid-template-columns:150px 1fr;gap:0 14px}
.ag-m{grid-column:2;display:grid;border-bottom:1px solid var(--line);padding-bottom:6px;margin-bottom:4px}
.ag-m span{font-family:var(--mono);font-size:10px;color:var(--faint);text-align:center;letter-spacing:.04em}
.ag-l{font-size:13.5px;color:var(--muted);padding:7px 0;line-height:1.25;display:flex;align-items:center}
.ag-l.hl{color:#fff;font-weight:600}
.ag-tr{position:relative;display:grid;align-items:center;border-bottom:1px solid rgba(148,163,184,.08)}
.ag-b{height:18px;border-radius:7px;background:rgba(96,165,250,.28);border:1px solid rgba(96,165,250,.35);transform-origin:left;transition:transform .8s cubic-bezier(.2,.7,.2,1);display:flex;align-items:center;padding:0 8px;font-family:var(--mono);font-size:10px;color:var(--pale);white-space:nowrap;overflow:hidden}
.ag-b.hl{background:linear-gradient(90deg,var(--blue),var(--hi));border-color:var(--pale);color:#fff;box-shadow:0 0 18px var(--glow);height:24px}
.sfa.pre .ag-b{transform:scaleX(0)}
.ag-l small{display:none}
@media (max-width:640px){.ag{grid-template-columns:118px 1fr}.ag-m{display:none}.ag-l{font-size:12.5px;flex-direction:column;align-items:flex-start;justify-content:center}.ag-l small{display:block;font-family:var(--mono);font-size:10px;color:var(--hi);margin-top:2px}.ag-b{font-size:0;padding:0;height:12px}.ag-b.hl{height:16px}}
@media (prefers-reduced-motion:reduce){.sfa *{animation:none!important;transition:none!important}}
`;
(function(){
  var IC = {
    house:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    building:'<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/>',
    doc:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/><path d="M10 13h6M10 17h6"/>',
    shield:'<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/>',
    scales:'<path d="M12 4v16M6 20h12"/><path d="M5 8h14"/><path d="M5 8l-3 6a3 3 0 006 0z"/><path d="M19 8l-3 6a3 3 0 006 0z"/>',
    flag:'<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',
    users:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.2A5 5 0 0121 19"/>',
    user:'<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7"/>',
    key:'<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3"/>',
    clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/>',
    cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    pound:'<path d="M16 6.5A3.5 3.5 0 009.5 8v4.5c0 3-1 4.5-3 5.5h11"/><path d="M6.5 12.5h7"/>',
    flame:'<path d="M12 3c1 4 5 5.5 5 10a5 5 0 01-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-5.5 1-8.5z"/>',
    bolt:'<path d="M13 3L5 14h6l-1 7 8-11h-6z"/>',
    leaf:'<path d="M5 19c0-8 6-14 15-14 0 9-6 15-14 15"/><path d="M5 19l7-7"/>',
    search:'<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>',
    link:'<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
    loop:'<path d="M4 12a8 8 0 0114-5.3L20 9"/><path d="M20 4v5h-5"/><path d="M20 12a8 8 0 01-14 5.3L4 15"/><path d="M4 20v-5h5"/>',
    check:'<path d="M5 12l5 5 9-10"/>',
    alert:'<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17v.5"/>',
    mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    cpu:'<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
    map:'<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
    tag:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    folder:'<path d="M3 6h6l2 2h10v11H3z"/>',
    db:'<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>',
    gauge:'<path d="M4 16a8 8 0 1116 0"/><path d="M12 16l4-5"/>',
    wrench:'<path d="M14.5 5.5a4 4 0 00-5 5L4 16l4 4 5.5-5.5a4 4 0 005-5l-3 1-2-2z"/>',
    sales:'<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    team:'<circle cx="12" cy="7" r="3"/><circle cx="5" cy="10" r="2.2"/><circle cx="19" cy="10" r="2.2"/><path d="M7 20c0-2.8 2.2-5 5-5s5 2.2 5 5M1.5 19c.3-2 1.8-3.5 3.5-3.5M22.5 19c-.3-2-1.8-3.5-3.5-3.5"/>'
  };
  function ico(n){return '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">'+(IC[n]||IC.doc)+'</svg>';}
  function el(t,c,p,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;if(p)p.appendChild(e);return e;}
  function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;');}
  var RM = typeof matchMedia!=='undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function onView(node,cb){ if(RM||typeof IntersectionObserver==='undefined'){cb();return function(){};}
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){cb();io.disconnect();}});},{threshold:.2});
    io.observe(node); return function(){io.disconnect();}; }
  function shell(host,D,cls){ var root=el('div','sfa pre '+(cls||''),host); var box=el('div','a-box',root);
    if(D&&D.title) el('p','a-title',box,(D.icon?ico(D.icon):'')+esc(D.title)); return {root:root,box:box}; }
  function foot(box,D){ if(D&&(D.note||D.src)){ var h=esc(D.note||''); if(D.src){ h+=(h?' ':'')+'Source: '+D.src.map(function(s){return '<a href="'+esc(s.url)+'" target="_blank" rel="noopener">'+esc(s.t)+'</a>';}).join(', ')+'.'; } el('p','a-foot',box,h);} }
  function reveal(root,items,gap){ return onView(root,function(){ root.classList.remove('pre'); if(RM)return;
      items.forEach(function(n,i){ n.style.transitionDelay=(i*(gap||90))+'ms'; }); }); }
  function countUp(node,to,dec,pre,suf){ if(RM||isNaN(to)){node.textContent=(pre||'')+fmt(to,dec)+(suf||'');return;}
    var t0=null,d=1100; function f(t){ if(!t0)t0=t; var p=Math.min(1,(t-t0)/d); p=1-Math.pow(1-p,3);
      node.textContent=(pre||'')+fmt(to*p,dec)+(suf||''); if(p<1)requestAnimationFrame(f);} requestAnimationFrame(f); }
  function fmt(v,dec){ var n=Number(v); return n.toLocaleString('en-GB',{minimumFractionDigits:dec||0,maximumFractionDigits:dec||0}); }

  /* art-stats: {title,items:[{v,n,pre,suf,dec,l,ic,hl}],note,src} */
  function engStats(host,markup,D){ D=D||{}; var s=shell(host,D); var g=el('div','as-grid',s.box);
    var cards=(D.items||[]).map(function(it){ var c=el('div','as-c rv'+(it.hl?' hl':''),g);
      c.innerHTML='<div class="as-top"><span class="as-v">'+esc(it.v)+'</span>'+(it.ic?ico(it.ic):'')+'</div><p class="as-l">'+esc(it.l)+'</p>'; return {c:c,it:it}; });
    foot(s.box,D);
    var off=onView(s.root,function(){ s.root.classList.remove('pre'); cards.forEach(function(x,i){ if(!RM) x.c.style.transitionDelay=(i*90)+'ms';
      if(x.it.n!=null) countUp(x.c.querySelector('.as-v'),x.it.n,x.it.dec,x.it.pre,x.it.suf); }); });
    return function(){off();host.innerHTML='';}; }

  /* art-cards: {title,cols,numbered,items:[{t,d,ic}]} */
  function engCards(host,markup,D){ D=D||{}; var s=shell(host,D); var g=el('div','ac-grid',s.box); g.style.setProperty('--cols',D.cols||2);
    var cs=(D.items||[]).map(function(it,i){ var c=el('div','ac-c rv',g);
      c.innerHTML=(D.numbered?'<span class="ac-n">'+(i+1)+'</span>':'<span class="a-ic">'+ico(it.ic)+'</span>')+'<div><h5>'+esc(it.t)+'</h5>'+(it.d?'<p>'+esc(it.d)+'</p>':'')+'</div>'; return c; });
    foot(s.box,D); var off=reveal(s.root,cs); return function(){off();host.innerHTML='';}; }

  /* art-steps: {title,items:[{k,t,d,g}]} g = optional group heading shown before the step */
  function engSteps(host,markup,D){ D=D||{}; var s=shell(host,D); var w=el('div','ast',s.box); var rail=el('div','ast-rail',w,'<i></i>');
    var ss=[]; (D.items||[]).forEach(function(it,i){ if(it.g) el('div','ast-g',w,esc(it.g)); var n=el('div','ast-s rv',w);
      n.innerHTML='<span class="ast-dot">'+(i+1)+'</span>'+(it.k?'<span class="a-k">'+esc(it.k)+'</span>':'')+'<h5>'+esc(it.t)+'</h5>'+(it.d?'<p>'+esc(it.d)+'</p>':''); ss.push(n); });
    foot(s.box,D); var inner=rail.firstChild, timer=null, k=0;
    function set(j){ ss.forEach(function(n,x){n.classList.toggle('on',x<=j);}); var wr=w.getBoundingClientRect(), d=ss[j].querySelector('.ast-dot').getBoundingClientRect();
      inner.style.setProperty('--p',Math.max(0,Math.min(1,(d.top+d.height/2-wr.top-10)/(wr.height-20)))); }
    var off=onView(s.root,function(){ s.root.classList.remove('pre'); if(RM){set(ss.length-1);return;} ss.forEach(function(n,i){n.style.transitionDelay=(i*80)+'ms';});
      set(0); timer=setInterval(function(){ k++; if(k>=ss.length){clearInterval(timer);timer=null;return;} set(k); },650); });
    return function(){ if(timer)clearInterval(timer); off(); host.innerHTML=''; }; }

  /* art-bars: {title,unit,items:[{l,s,v,lab}],total:{l,v,s},note,src} */
  function engBars(host,markup,D){ D=D||{}; var s=shell(host,D); var it=D.items||[]; var max=Math.max.apply(null,it.map(function(x){return x.v||0;}).concat([1]));
    var rows=it.map(function(x){ var r=el('div','ab-r rv',s.box);
      r.innerHTML='<div class="ab-l"><b>'+esc(x.l)+'</b>'+(x.s?'<span>'+esc(x.s)+'</span>':'')+'</div><div class="ab-t"><i style="transform:scaleX('+((x.v||0)/max).toFixed(3)+')"></i></div><div class="ab-v">'+esc(x.lab||(x.v+' '+(D.unit||'')))+'</div>'; return r; });
    var tot=null; if(D.total){ tot=el('div','ab-tot rv',s.box,'<b>'+esc(D.total.l)+(D.total.s?'<span>'+esc(D.total.s)+'</span>':'')+'</b><strong>'+esc(D.total.lab||D.total.v)+'</strong>'); }
    foot(s.box,D);
    var off=onView(s.root,function(){ s.root.classList.remove('pre'); rows.forEach(function(r,i){ if(!RM) r.style.transitionDelay=(i*110)+'ms'; var bi=r.querySelector('.ab-t i'); if(!RM) bi.style.transitionDelay=(150+i*120)+'ms'; });
      if(tot&&D.total.n!=null) countUp(tot.querySelector('strong'),D.total.n,0,D.total.pre,D.total.suf); });
    return function(){off();host.innerHTML='';}; }

  /* art-compare: {title,cols:[a,b],rows:[{t,ic,a,b}],note} */
  function engCompare(host,markup,D){ D=D||{}; var s=shell(host,D); var c=D.cols||['Before','After'];
    el('div','acm-h',s.box,'<span></span><span class="a-k">'+esc(c[0])+'</span><span></span><span class="a-k" style="color:var(--hi)">'+esc(c[1])+'</span>');
    var rs=(D.rows||[]).map(function(r){ var n=el('div','acm-r rv',s.box);
      n.innerHTML='<div class="acm-t">'+(r.ic?ico(r.ic):'')+'<span>'+esc(r.t)+'</span></div><div class="acm-a"><span class="acm-lab">'+esc(c[0])+'</span>'+esc(r.a)+'</div><div class="acm-x"><i></i><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div><div class="acm-b"><span class="acm-lab" style="color:var(--hi)">'+esc(c[1])+'</span>'+esc(r.b)+'</div>'; return n; });
    foot(s.box,D); var off=reveal(s.root,rs,100); return function(){off();host.innerHTML='';}; }

  /* art-tabs: {title,tabs:[{t,ic,h,d,points:[]}],auto} */
  function engTabs(host,markup,D){ D=D||{}; var s=shell(host,D); var T=D.tabs||[]; var bar=el('div','at-tabs',s.box); bar.setAttribute('role','tablist');
    var p=el('div','at-p rv',s.box); p.setAttribute('role','tabpanel'); var cur=0, timer=null;
    var bs=T.map(function(t,i){ var b=el('button','at-tab',bar,(t.ic?ico(t.ic):'')+esc(t.t)); b.setAttribute('role','tab'); b.addEventListener('click',function(){ stop(); show(i); }); return b; });
    function show(i){ cur=i; bs.forEach(function(b,j){b.setAttribute('aria-selected',j===i?'true':'false');}); var t=T[i];
      p.classList.add('fade'); setTimeout(function(){ p.innerHTML='<span class="a-ic">'+ico(t.ic)+'</span><div><h5>'+esc(t.h||t.t)+'</h5>'+(t.d?'<p>'+esc(t.d)+'</p>':'')+(t.points?'<ul>'+t.points.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul>':'')+'</div>'; p.classList.remove('fade'); }, RM?0:160); }
    function stop(){ if(timer){clearInterval(timer);timer=null;} }
    show(0); foot(s.box,D);
    var off=onView(s.root,function(){ s.root.classList.remove('pre'); if(!RM&&D.auto!==false) timer=setInterval(function(){ show((cur+1)%T.length); },5200); });
    s.root.addEventListener('mouseenter',stop); s.root.addEventListener('focusin',stop);
    return function(){stop();off();host.innerHTML='';}; }

  /* art-links: {title,pairs:[{a,ia,b,ib,d}]} */
  function engLinks(host,markup,D){ D=D||{}; var s=shell(host,D);
    var bs=(D.pairs||[]).map(function(x){ var w=el('div','al-blk rv',s.box);
      w.innerHTML='<div class="al-r"><div class="al-c">'+ico(x.ia||'link')+'<span>'+esc(x.a)+'</span></div><div class="al-j"><i></i></div><div class="al-c">'+ico(x.ib||'link')+'<span>'+esc(x.b)+'</span></div></div><p class="al-d">'+esc(x.d)+'</p>'; return w; });
    foot(s.box,D); var off=reveal(s.root,bs,120); return function(){off();host.innerHTML='';}; }

  /* art-converge: {title,sources:[{t,s,ic}],target:{t,s,ic},note} */
  function engConverge(host,markup,D){ D=D||{}; var s=shell(host,D); var w=el('div','av',s.box); var L=el('div','av-s',w);
    var items=(D.sources||[]).map(function(x){ var n=el('div','av-i rv',L,ico(x.ic)+'<div><b>'+esc(x.t)+'</b>'+(x.s?'<span>'+esc(x.s)+'</span>':'')+'</div>'); return n; });
    var NS='http://www.w3.org/2000/svg'; var svg=document.createElementNS(NS,'svg'); svg.setAttribute('class','av-svg'); w.appendChild(svg);
    var T=D.target||{}; var t=el('div','av-t rv',w,'<span class="a-ic">'+ico(T.ic||'db')+'</span><b>'+esc(T.t)+'</b>'+(T.s?'<span>'+esc(T.s)+'</span>':''));
    foot(s.box,D);
    function draw(){ while(svg.firstChild)svg.removeChild(svg.firstChild); var sr=svg.getBoundingClientRect(); if(!sr.height)return; var tr=t.getBoundingClientRect(); var ty=tr.top+tr.height/2-sr.top;
      svg.setAttribute('viewBox','0 0 90 '+sr.height); items.forEach(function(n,i){ var r=n.getBoundingClientRect(); var y=r.top+r.height/2-sr.top;
        var d='M0 '+y+' C45 '+y+' 45 '+ty+' 90 '+ty; var p1=document.createElementNS(NS,'path'); p1.setAttribute('d',d); svg.appendChild(p1);
        var p2=document.createElementNS(NS,'path'); p2.setAttribute('d',d); p2.setAttribute('class','f'); p2.style.animationDelay=(i*.25)+'s'; svg.appendChild(p2); }); }
    var off=reveal(s.root,items.concat([t]),90); var ro=typeof ResizeObserver!=='undefined'?new ResizeObserver(draw):null; if(ro)ro.observe(w); setTimeout(draw,50);
    return function(){off();if(ro)ro.disconnect();host.innerHTML='';}; }

  /* art-gantt: {title,months:[labels],rows:[{l,from,to,lab,hl}]} from/to = month index (0-based, may be fractional) */
  function engGantt(host,markup,D){ D=D||{}; var s=shell(host,D); var M=D.months||[]; var g=el('div','ag',s.box);
    var mh=el('div','ag-m',g); mh.style.gridTemplateColumns='repeat('+M.length+',1fr)'; M.forEach(function(m){el('span','',mh,esc(m));});
    var bars=[]; (D.rows||[]).forEach(function(r,i){ el('div','ag-l'+(r.hl?' hl':''),g,'<span>'+esc(r.l)+'</span>'+(r.lab?'<small>'+esc(r.lab)+'</small>':'')); var tr=el('div','ag-tr',g); tr.style.gridTemplateColumns='repeat('+M.length+',1fr)';
      var b=el('div','ag-b'+(r.hl?' hl':''),tr,esc(r.lab||'')); b.style.gridColumn=(Math.floor(r.from)+1)+' / '+(Math.ceil(r.to)+1); bars.push(b); });
    foot(s.box,D);
    var off=onView(s.root,function(){ s.root.classList.remove('pre'); if(!RM) bars.forEach(function(b,i){ b.style.transitionDelay=(i*110)+'ms'; }); });
    return function(){off();host.innerHTML='';}; }

  var base=_e.length; _e.push(engStats,engCards,engSteps,engBars,engCompare,engTabs,engLinks,engConverge,engGantt);
  ['art-stats','art-cards','art-steps','art-bars','art-compare','art-tabs','art-links','art-converge','art-gantt'].forEach(function(n,i){
    We[n]={root:"sfp-root",css:"__art",markup:"",fn:base+i}; });
})();
