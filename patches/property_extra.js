/* SignalForge property diagrams added in v1.6.1: property-dates, property-ready, property-path.
   Self-contained engines appended to the bundle. Each: fn(host, markup, data) -> cleanup. */
Ve.__prop = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
.sfp{--ink:#F1F5F9;--muted:#94A3B8;--faint:#8796AD;--line:rgba(148,163,184,.16);--line2:rgba(148,163,184,.28);--panel:#06102a;--card:#071433;--blue:#2563EB;--hi:#60A5FA;--pale:#BFDBFE;--soft:rgba(37,99,235,.16);--glow:rgba(37,99,235,.55);--sans:'Inter',ui-sans-serif,system-ui,sans-serif;--mono:'JetBrains Mono',ui-monospace,Menlo,monospace;color:var(--ink);font-family:var(--sans);font-size:16px;line-height:1.5;-webkit-font-smoothing:antialiased}
.sfp *,.sfp *::before,.sfp *::after{box-sizing:border-box}
.sfp button{font:inherit;color:inherit;background:none;cursor:pointer}
.sfp .pd-pt,.sfp .pd-li{border:0;padding:0}
.sfp :focus-visible{outline:2px solid var(--hi);outline-offset:3px;border-radius:8px}
.sfp p{margin:0}
.sfp .k{font-family:var(--mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--faint)}
.sfp .ico{width:22px;height:22px;stroke:currentColor;fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;flex:none}
.sfp .illus{font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--faint)}
/* dates */
.pd-wrap{border:1px solid var(--line);border-radius:20px;background:radial-gradient(120% 140% at 0% 0%,rgba(37,99,235,.10),transparent 55%),var(--panel);padding:28px 28px 22px}
.pd-rib{display:grid;grid-template-columns:150px 1fr;gap:0 18px}
.pd-months{grid-column:2;position:relative;height:26px;border-bottom:1px solid var(--line)}
.pd-m{position:absolute;bottom:6px;transform:translateX(-50%);font-family:var(--mono);font-size:10.5px;color:var(--faint);letter-spacing:.06em;white-space:nowrap}
.pd-now{position:absolute;height:214px;left:0;width:0;border-left:1px dashed rgba(96,165,250,.55)}
.pd-now span{position:absolute;top:-16px;left:-4px;font-family:var(--mono);font-size:10px;color:var(--hi);letter-spacing:.12em;white-space:nowrap}
.pd-lab{display:flex;gap:10px;align-items:center;min-height:92px;color:var(--pale);font-weight:600;font-size:14px;line-height:1.25}
.pd-lab small{display:block;color:var(--faint);font-weight:400;font-size:12px}
.pd-lane{position:relative;min-height:92px;border-bottom:1px solid var(--line)}
.pd-line{position:absolute;left:0;right:0;top:46px;height:2px;background:var(--line2);transform-origin:left;transition:transform 1.1s cubic-bezier(.2,.7,.2,1)}
.pd-band{position:absolute;top:30px;height:34px;border-radius:10px;background:linear-gradient(90deg,rgba(37,99,235,.35),rgba(37,99,235,.18));border:1px solid rgba(96,165,250,.45);transform-origin:left;transition:transform 1s cubic-bezier(.2,.7,.2,1) .5s}
.pd-band span{position:absolute;left:50%;transform:translateX(-50%);top:7px;font-family:var(--mono);font-size:10.5px;color:var(--pale);letter-spacing:.08em;white-space:nowrap}
.pd-pt{position:absolute;top:32px;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:6px;transition:opacity .5s,transform .5s}
.pd-dot{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:#0b1d47;border:1.5px solid var(--hi);color:var(--pale);box-shadow:0 0 0 0 var(--glow);transition:box-shadow .3s,background .3s}
.pd-dot .ico{width:15px;height:15px}
.pd-pt .d{font-family:var(--mono);font-size:10.5px;color:var(--muted);white-space:nowrap}
.pd-pt.big .pd-dot{width:38px;height:38px;background:var(--blue);border-color:var(--pale);animation:pdpulse 2.4s infinite}
.pd-pt.big .pd-dot .ico{width:19px;height:19px}
.pd-pt.sel .pd-dot{background:var(--blue);box-shadow:0 0 0 6px rgba(37,99,235,.25)}
.pd-pt.sel .d{color:var(--pale)}
@keyframes pdpulse{0%{box-shadow:0 0 0 0 rgba(37,99,235,.6)}80%,100%{box-shadow:0 0 0 14px rgba(37,99,235,0)}}
.pd-pend{grid-column:1/-1;display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding:14px 0 4px}
.sfp .pd-chip{border:1px dashed var(--line2);border-radius:999px;padding:7px 13px;font-size:13px;color:var(--muted);transition:border-color .2s,color .2s,background .2s}
.sfp .pd-chip.sel{border-color:var(--hi);color:var(--ink);background:var(--soft)}
.pd-det{margin-top:18px;display:grid;grid-template-columns:78px 1fr;gap:20px;align-items:start;border:1px solid var(--line2);border-radius:16px;background:var(--card);padding:20px 22px;min-height:150px}
.pd-art{width:78px;height:78px;border-radius:18px;display:grid;place-items:center;background:linear-gradient(145deg,#1d4ed8,#0b1d47);box-shadow:0 10px 30px rgba(37,99,235,.35);color:#fff}
.pd-art .ico{width:38px;height:38px;stroke-width:1.4}
.pd-det h4{margin:2px 0 12px;font-size:19px;font-weight:600;letter-spacing:-.01em}
.pd-cols{display:grid;grid-template-columns:1.2fr 1fr .6fr;gap:18px}
.pd-cols p{color:var(--ink);font-size:14.5px;margin-top:4px}
.pd-cols a{color:var(--hi);font-size:14px}
.pd-foot{display:flex;justify-content:space-between;gap:12px;margin-top:12px;color:var(--faint);font-size:12.5px;flex-wrap:wrap}
.pd-list{display:none}
.sfp.pre .pd-line,.sfp.pre .pd-band{transform:scaleX(0)}
.sfp.nar .pd-rib{grid-template-columns:118px 1fr;gap:0 12px}.sfp.nar .pd-m:nth-child(even){visibility:hidden}.sfp.nar .pd-band span{display:none}.sfp.nar .pd-lab{font-size:13px}
.sfp.pre .pd-pt{opacity:0;transform:translate(-50%,8px)}
@media (max-width:760px){.pd-rib{display:none}.pd-list{display:block;position:relative;padding-left:26px}
.pd-list::before{content:"";position:absolute;left:10px;top:6px;bottom:6px;width:2px;background:var(--line2)}
.pd-li{position:relative;display:block;width:100%;text-align:left;padding:10px 0 12px}
.pd-li::before{content:"";position:absolute;left:-21px;top:15px;width:12px;height:12px;border-radius:50%;background:#0b1d47;border:1.5px solid var(--hi)}
.pd-li.sel::before,.pd-li.big::before{background:var(--blue)}
.pd-li .d{font-family:var(--mono);font-size:11px;color:var(--hi)}
.pd-li .t{font-size:15px;font-weight:600}
.pd-li .l{font-size:12px;color:var(--faint)}
.pd-det{grid-template-columns:1fr}.pd-art{width:56px;height:56px;border-radius:14px}.pd-art .ico{width:28px;height:28px}.pd-cols{grid-template-columns:1fr}.pd-wrap{padding:20px 16px}}
@media (prefers-reduced-motion:reduce){.sfp *{animation:none!important;transition:none!important}}
/* ready */
.pr2-tabs{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px}
.sfp .pr2-tab{border:1px solid var(--line2);border-radius:999px;padding:10px 18px;font-size:14.5px;color:var(--muted);display:flex;gap:9px;align-items:center;transition:all .25s}
.sfp .pr2-tab[aria-selected=true]{background:var(--blue);border-color:var(--blue);color:#fff;box-shadow:0 8px 24px rgba(37,99,235,.35)}
.pr2-card{border:1px solid var(--line);border-radius:20px;background:radial-gradient(120% 140% at 100% 0%,rgba(37,99,235,.12),transparent 55%),var(--panel);padding:24px}
.pr2-top{display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;align-items:center;margin-bottom:18px}
.pr2-dl{display:flex;gap:12px;align-items:center}
.pr2-dl b{font-size:18px;font-weight:600}
.pr2-cd{font-family:var(--mono);font-size:12px;color:var(--pale);border:1px solid rgba(96,165,250,.45);border-radius:999px;padding:5px 11px;background:var(--soft)}
.pr2-heads{display:grid;grid-template-columns:1fr 54px 1fr;gap:12px;margin-bottom:8px}
.pr2-row{display:grid;grid-template-columns:1fr 54px 1fr;gap:12px;align-items:stretch;margin-top:10px}
.pr2-from{border:1px dashed var(--line2);border-radius:14px;padding:14px 16px;color:var(--muted);font-size:14.5px;display:flex;gap:10px;align-items:center}
.pr2-to{border:1px solid rgba(96,165,250,.45);border-radius:14px;padding:14px 16px;background:linear-gradient(135deg,rgba(37,99,235,.22),rgba(37,99,235,.06));font-size:14.5px;display:flex;flex-direction:column;gap:8px;transition:opacity .5s,transform .5s}
.pr2-ok{align-self:flex-start;font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;color:var(--pale);border:1px solid var(--line2);border-radius:999px;padding:3px 9px}
.pr2-arr{position:relative;display:grid;place-items:center}
.pr2-arr i{position:absolute;left:4px;right:4px;top:50%;height:2px;background:var(--line2);overflow:hidden}
.pr2-arr i::after{content:"";position:absolute;inset:0;width:40%;background:linear-gradient(90deg,transparent,var(--hi));animation:pr2flow 1.8s linear infinite}
@keyframes pr2flow{from{transform:translateX(-100%)}to{transform:translateX(250%)}}
.pr2-arr svg{position:relative;width:18px;height:18px;stroke:var(--hi);fill:none;stroke-width:2;margin-left:auto;margin-right:-2px}
.pr2-foot{margin-top:16px;display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;color:var(--faint);font-size:13px}
.pr2-foot b{color:var(--pale);font-weight:500}
.sfp.swap .pr2-to{opacity:0;transform:translateX(-10px)}
@media (max-width:760px){.pr2-heads{display:none}.pr2-row{grid-template-columns:1fr}.pr2-arr{height:26px}.pr2-arr i{left:50%;right:auto;top:0;bottom:0;width:2px;height:auto}.pr2-arr svg{transform:rotate(90deg);margin:0}.pr2-card{padding:18px}}
/* path */
.pp-wrap{border:1px solid var(--line);border-radius:20px;background:var(--panel);padding:26px 24px 20px;position:relative}
.pp-groups{display:grid;grid-template-columns:4fr 2fr 1.4fr;gap:14px;margin-bottom:12px}
.pp-g{border-top:2px solid var(--line2);padding-top:8px;display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap}
.pp-g.free{border-color:var(--hi)}.pp-g.paid{border-color:var(--blue)}.pp-g.own{border-color:var(--pale)}
.pp-g b{font-family:var(--mono);font-size:11px;letter-spacing:.16em}
.pp-g span{font-size:12.5px;color:var(--muted)}
.pp-track{position:relative;display:grid;grid-template-columns:repeat(4,1fr) repeat(2,1fr) 1.4fr;gap:14px}
.pp-rail{position:absolute;left:24px;right:24px;top:24px;height:2px;background:var(--line2)}
.pp-rail i{position:absolute;left:0;top:0;bottom:0;width:100%;background:linear-gradient(90deg,var(--hi),var(--blue));transform-origin:left;transform:scaleX(var(--p,1));transition:transform .6s ease}
.pp-tok{position:absolute;top:17px;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:0 0 0 5px rgba(96,165,250,.35),0 0 22px var(--glow);transition:left .6s ease;left:24px}
.pp-n{position:relative;display:flex;flex-direction:column;gap:6px;text-align:left}
.pp-c{flex:none;width:48px;height:48px;border-radius:14px;display:grid;place-items:center;background:#0b1d47;border:1.5px solid var(--line2);color:var(--pale);transition:all .35s;z-index:1}
.pp-n.on .pp-c{background:var(--blue);border-color:var(--pale);box-shadow:0 8px 24px rgba(37,99,235,.45);color:#fff}
.pp-n h5{margin:6px 0 0;font-size:15px;font-weight:600;line-height:1.25}
.pp-n p{font-size:13px;color:var(--muted)}
.pp-tag{align-self:flex-start;display:inline-block;line-height:1.45;font-family:var(--mono);font-size:10.5px;letter-spacing:.04em;border-radius:8px;padding:4px 9px;border:1px solid var(--line2);color:var(--pale)}
.pp-tag.hot{border-color:rgba(96,165,250,.6);background:var(--soft)}
.pp-own{display:flex;flex-direction:column;gap:6px;margin-top:4px}
.pp-own div{font-size:12.5px;color:var(--muted);display:flex;gap:7px;align-items:flex-start}
.pp-own b{color:var(--ink);font-weight:500}
.pp-own svg{width:14px;height:14px;stroke:var(--hi);fill:none;stroke-width:2;flex:none;margin-top:3px}
@media (max-width:860px){.pp-groups{display:none}.pp-track{grid-template-columns:1fr;gap:16px;padding-left:4px}.pp-rail,.pp-tok{display:none}.pp-n{flex-direction:row;gap:14px;align-items:flex-start}.pp-n>div{display:flex;flex-direction:column;gap:5px}.pp-n h5{margin:0}.sfp .pp-track .pp-gh{display:flex}}
.sfp .pp-gh{display:none;justify-content:space-between;gap:8px;border-top:2px solid var(--line2);padding-top:8px;margin-top:6px;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;color:var(--pale)}
.sfp .pp-gh span{font-family:var(--sans);letter-spacing:0;font-size:12px;color:var(--muted)}
.sfp .pp-gh.free{border-color:var(--hi)}.sfp .pp-gh.paid{border-color:var(--blue)}.sfp .pp-gh.own{border-color:var(--pale)}
`;
(function(){
  var IC = {
    house:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    window:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M8 14h3v3H8z"/>',
    scales:'<path d="M12 4v16M6 20h12"/><path d="M5 8h14"/><path d="M5 8l-3 6a3 3 0 006 0z"/><path d="M19 8l-3 6a3 3 0 006 0z"/>',
    flag:'<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',
    doc:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/><path d="M10 13h6M10 17h6"/>',
    shield:'<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/>',
    badge:'<circle cx="12" cy="9" r="5"/><path d="M9 13l-1 8 4-2 4 2-1-8"/>',
    cap:'<path d="M3 9l9-4 9 4-9 4z"/><path d="M7 11v4c3 2 7 2 10 0v-4"/>',
    clip:'<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4h6v3H9z"/><path d="M9 12h6M9 16h4"/>',
    building:'<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/>',
    key:'<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3"/>',
    phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
    users:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.2A5 5 0 0121 19"/>',
    cpu:'<rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
    map:'<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
    search:'<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>',
    hammer:'<path d="M14 6l4 4M4 20l9-9M12 4l8 8-3 3-8-8z"/>',
    mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    wrench:'<path d="M14.5 5.5a4 4 0 00-5 5L4 16l4 4 5.5-5.5a4 4 0 005-5l-3 1-2-2z"/>'
  };
  function ico(n){return '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">'+(IC[n]||IC.doc)+'</svg>';}
  function el(t,c,p,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;if(p)p.appendChild(e);return e;}
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');}
  var RM = typeof matchMedia!=='undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function onView(node,cb){ if(RM||typeof IntersectionObserver==='undefined'){cb();return function(){};}
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){cb();io.disconnect();}});},{threshold:.25});
    io.observe(node); return function(){io.disconnect();}; }

  /* ---------- property-dates ---------- */
  var DATES = {
    start:[2026,10,1], end:[2027,11,30],
    lanes:[{id:'reg',t:'Rental register',s:'Letting agents',ic:'house'},{id:'lh',t:'Leasehold reform',s:'Block and estate managers',ic:'building'}],
    band:{lane:'reg',from:[2027,2,15],to:[2027,5,14],label:'South East window'},
    ms:[
      {lane:'reg',d:[2026,11,15],ds:'15 Dec 2026',t:'The rental property register opens',ic:'house',what:'Landlords start registering rented homes, region by region. £65 per property, renewed every year.',who:'Landlords, and the letting agents who hold their certificates and tenancy records.',src:'Propertymark',url:'https://www.propertymark.co.uk/resource/rental-property-register-rollout-begins-on-15-december-2026.html'},
      {lane:'reg',d:[2027,2,15],ds:'15 Mar 2027',t:'South East registration window opens',ic:'window',what:'South East landlords register between 15 March and 14 June 2027. Agents can submit on a landlord’s behalf if they agree it.',who:'Letting agents managing South East properties.',src:'Propertymark',url:'https://www.propertymark.co.uk/resource/rental-property-register-rollout-begins-on-15-december-2026.html'},
      {lane:'lh',d:[2027,3,1],ds:'1 Apr 2027',t:'Leasehold reform: information, late bills and litigation costs',ic:'scales',what:'Leaseholders can request up to 6 years of service charge and building information. Costs billed more than 18 months late need a prescribed notice. Litigation costs need tribunal or court approval before going on the service charge.',who:'Landlords, block managers and residents’ management companies.',src:'GOV.UK',url:'https://www.gov.uk/government/news/flat-owners-handed-massive-boost-to-fight-rip-off-service-charges'},
      {lane:'reg',d:[2027,5,14],ds:'14 Jun 2027',t:'South East window closes',ic:'flag',what:'Councils can begin enforcement once a region’s deadline has passed.',who:'Landlords who haven’t registered, and their agents.',src:'Propertymark',url:'https://www.propertymark.co.uk/resource/rental-property-register-rollout-begins-on-15-december-2026.html'},
      {lane:'lh',d:[2027,10,1],ds:'1 Nov 2027',t:'Leasehold reform: service charges and insurance',ic:'doc',big:true,what:'Standard service charge demands, accounts and an annual report for every building. Insurance commission can no longer be passed to leaseholders, insurance arrangements must be disclosed, and administration charges published. Private landlords first; social landlords from 1 November 2028.',who:'Block and estate managers.',src:'GOV.UK',url:'https://www.gov.uk/government/news/flat-owners-handed-massive-boost-to-fight-rip-off-service-charges'}
    ],
    pend:[
      {t:'Agent licensing and qualifications',ic:'badge',what:'The government has confirmed agents will need a licence to practise and qualifications, overseen by an independent regulator.',who:'Sales, lettings and managing agents.',src:'Propertymark',url:'https://www.propertymark.co.uk/resource/labour-conference-2026-key-announcements-on-leasehold-reform-and-agent-regulation.html'},
      {t:'Caps on estate and leasehold fees',ic:'shield',what:'Powers to cap fees charged to leaseholders and to homeowners on privately managed estates. Which fees, and at what level, set by consultation.',who:'Block and estate managers.',src:'Propertymark',url:'https://www.propertymark.co.uk/resource/labour-conference-2026-key-announcements-on-leasehold-reform-and-agent-regulation.html'},
      {t:'Homebuying reform and sales packs',ic:'cap',what:'A new Code of Practice, then a consultation on mandatory qualifications from 2027, and legislation on upfront sales information by 2029.',who:'Sales agents.',src:'Property Industry Eye',url:'https://propertyindustryeye.com/?p=164899'}
    ]
  };
  function engDates(host, markup, data){
    var D = data||DATES; host.innerHTML='';
    var root=el('div','sfp pre',host), w=el('div','pd-wrap',root);
    var t0=Date.UTC(D.start[0],D.start[1],D.start[2]), t1=Date.UTC(D.end[0],D.end[1],D.end[2]);
    function pct(a){return Math.max(0,Math.min(100,(Date.UTC(a[0],a[1],a[2])-t0)/(t1-t0)*100));}
    var rib=el('div','pd-rib',w); el('div','',rib);
    var months=el('div','pd-months',rib), mn=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    for(var y=D.start[0],m=D.start[1];Date.UTC(y,m,1)<=t1;){ var p=pct([y,m,15]); el('div','pd-m',months,mn[m]+(m===0||(y===D.start[0]&&m===D.start[1])?' ’'+String(y).slice(2):'')).style.left=p+'%'; m++; if(m>11){m=0;y++;} }
    var now=new Date(), nowP=(now.getTime()-t0)/(t1-t0)*100;
    var items=[], det, sel=-1, auto=null, laneEls={};
    D.lanes.forEach(function(L,i){
      el('div','pd-lab',rib,'<span style="color:var(--hi)">'+ico(L.ic)+'</span><span>'+esc(L.t)+'<small>'+esc(L.s)+'</small></span>');
      var lane=el('div','pd-lane',rib); laneEls[L.id]=lane; el('div','pd-line',lane);
      if(i===0 && nowP>-4 && nowP<100){ var n=el('div','pd-now',lane,'<span>TODAY</span>'); n.style.left=Math.max(0,nowP)+'%'; n.style.top='-30px'; }
    });
    if(D.band){ var b=el('div','pd-band',laneEls[D.band.lane],'<span>'+esc(D.band.label)+'</span>'); var a=pct(D.band.from), z=pct(D.band.to); b.style.left=a+'%'; b.style.width=(z-a)+'%'; }
    var all=D.ms.concat(D.pend.map(function(x){x.pend=true;return x;}));
    D.ms.forEach(function(M,i){
      var pt=el('button','pd-pt'+(M.big?' big':''),laneEls[M.lane]); pt.type='button'; pt.style.left=pct(M.d)+'%';
      pt.style.transitionDelay=(RM?0:.35+i*.18)+'s';
      pt.innerHTML='<span class="pd-dot">'+ico(M.ic)+'</span><span class="d">'+esc(M.ds)+'</span>';
      if(M.hideDot){ pt.style.top='68px'; pt.querySelector('.pd-dot').style.width='24px'; pt.querySelector('.pd-dot').style.height='24px'; pt.style.flexDirection='column-reverse'; }
      pt.setAttribute('aria-label',M.ds+': '+M.t); pt.onclick=function(){stop();pick(i);}; items[i]=[pt];
    });
    var pend=el('div','pd-pend',rib,'<span class="k" style="margin-right:6px">Announced, no date yet</span>');
    D.pend.forEach(function(P,j){ var c=el('button','pd-chip',pend,esc(P.t)); c.type='button'; var i=D.ms.length+j; c.onclick=function(){stop();pick(i);}; items[i]=[c]; });
    var list=el('div','pd-list',w);
    all.forEach(function(M,i){ var li=el('button','pd-li'+(M.big?' big':''),list,'<div class="d">'+esc(M.pend?'No date yet':M.ds)+'</div><div class="t">'+esc(M.t)+'</div><div class="l">'+esc(M.pend?'Announced':(D.lanes.filter(function(L){return L.id===M.lane;})[0]||{}).t)+'</div>'); li.type='button'; li.onclick=function(){stop();pick(i);}; items[i].push(li); });
    det=el('div','pd-det',w); var art=el('div','pd-art',det), body=el('div','',det);
    el('div','pd-foot',w,'<span>Dates checked 12 November 2026. This is a summary, not legal advice.</span><span class="illus">Pick a date</span>');
    function pick(i){ if(sel>=0) items[sel].forEach(function(e){e.classList.remove('sel');}); sel=i; items[i].forEach(function(e){e.classList.add('sel');});
      var M=all[i]; art.innerHTML=ico(M.ic);
      body.innerHTML='<div class="k" style="color:var(--hi)">'+esc(M.pend?'Announced, no date yet':M.ds)+'</div><h4>'+esc(M.t)+'</h4><div class="pd-cols"><div><div class="k">What changes</div><p>'+esc(M.what)+'</p></div><div><div class="k">Who it lands on</div><p>'+esc(M.who)+'</p></div><div><div class="k">Source</div><p><a href="'+M.url+'" target="_blank" rel="noopener">'+esc(M.src)+'</a></p></div></div>'; }
    function stop(){ if(auto){clearInterval(auto);auto=null;} }
    pick(0);
    var off=onView(root,function(){ root.classList.remove('pre'); if(!RM){ var k=0; auto=setInterval(function(){k=(k+1)%D.ms.length; pick(k);},4500);} });
    root.addEventListener('pointerenter',stop); root.addEventListener('focusin',stop);
    if(RM) root.classList.remove('pre');
    function fit(){ root.classList.toggle('nar', w.clientWidth<900); } fit(); var rz=typeof ResizeObserver!=='undefined'?new ResizeObserver(fit):null; if(rz)rz.observe(w);
    return function(){stop();off();if(rz)rz.disconnect();host.innerHTML='';};
  }

  /* ---------- property-ready ---------- */
  var READY = {
    tabs:[
      {id:'block',tab:'We manage blocks and estates',ic:'building',deadline:'From 1 November 2027',to:[2027,10,1],name:'Service Charge Reform Readiness',
       rows:[['clip','A year-end pack for every block, in the new format','Accounts gathered, with a draft annual report and next demand'],
             ['mail','Leaseholder questions about costs and works','Draft replies built from the block’s own budget, invoices and minutes'],
             ['shield','Insurance details and commissions for every block','Policy, renewal date and commission on one record per block']]},
      {id:'lets',tab:'We let and manage homes',ic:'house',deadline:'South East: 15 March to 14 June 2027',to:[2027,2,15],name:'Rental Register Readiness',
       rows:[['clip','Certificates and tenancy details for every property','Each property checked, with expiries and gaps flagged, ready to register'],
             ['wrench','Tenant messages about repairs','Turned into a job for the right contractor'],
             ['mail','Landlord updates and statements','Drafted from the record, for you to send']]}
    ],
    both:'Do both? The audit plans both deadlines together.'
  };
  function engReady(host, markup, data){
    var R=data||READY; host.innerHTML=''; var root=el('div','sfp',host), cur=0, timer=null;
    var tabs=el('div','pr2-tabs',root); tabs.setAttribute('role','tablist');
    var card=el('div','pr2-card',root);
    var btns=R.tabs.map(function(T,i){ var b=el('button','pr2-tab',tabs,ico(T.ic)+'<span>'+esc(T.tab)+'</span>'); b.type='button'; b.setAttribute('role','tab'); b.onclick=function(){show(i);}; return b; });
    function months(to){ var n=new Date(), t=new Date(Date.UTC(to[0],to[1],to[2])); var m=(t.getUTCFullYear()-n.getUTCFullYear())*12+(t.getUTCMonth()-n.getUTCMonth()); return m; }
    function show(i){ cur=i; var T=R.tabs[i]; btns.forEach(function(b,j){b.setAttribute('aria-selected',String(j===i));});
      var m=months(T.to), cd=m>1?'About '+m+' months away':(m>=0?'Coming up':'Now in force');
      var h='<div class="pr2-top"><div class="pr2-dl"><span style="color:var(--hi)">'+ico('window')+'</span><b>'+esc(T.deadline)+'</b></div><span class="pr2-cd">'+cd+'</span></div>'+
        '<div class="pr2-heads"><span class="k">What lands on your team</span><span></span><span class="k" style="color:var(--hi)">What a system drafts for you</span></div>';
      T.rows.forEach(function(r){ h+='<div class="pr2-row"><div class="pr2-from"><span style="color:var(--faint)">'+ico(r[0])+'</span><span>'+esc(r[1])+'</span></div><div class="pr2-arr"><i></i><svg viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6"/></svg></div><div class="pr2-to"><span>'+esc(r[2])+'</span><span class="pr2-ok">Checked by your team</span></div></div>'; });
      h+='<div class="pr2-foot"><span>We call this <b>'+esc(T.name)+'</b>.</span><span>'+esc(R.both)+'</span></div>';
      if(!RM){ root.classList.add('swap'); }
      card.innerHTML=h;
      if(!RM){ var tos=card.querySelectorAll('.pr2-to'); tos.forEach(function(e,k){e.style.transitionDelay=(.15+k*.18)+'s';}); requestAnimationFrame(function(){requestAnimationFrame(function(){root.classList.remove('swap');});}); }
    }
    show(0);
    return function(){ if(timer)clearInterval(timer); host.innerHTML=''; };
  }

  /* ---------- property-path ---------- */
  var PATH = {
    groups:[['free','FREE','No cost, no obligation'],['paid','IF YOU GO AHEAD','Fixed prices, agreed first'],['own','YOURS','Kept by you']],
    nodes:[
      {g:'free',ic:'phone',t:'30-minute call',s:'We pick the block or the landlord file to start with.',tag:'Free'},
      {g:'free',ic:'users',t:'90-minute session',s:'At your office or online, on real documents.',tag:'Free'},
      {g:'free',ic:'cpu',t:'Prototype in 10 days',s:'A working prototype on your own documents.',tag:'Free'},
      {g:'free',ic:'map',t:'Playback',s:'What we’d build first, and what it would cost.',tag:'Free'},
      {g:'paid',ic:'search',t:'Readiness Audit',s:'One week. Credited against the build if you go ahead.',tag:'Founding offer: half price for the first three firms',hot:true},
      {g:'paid',ic:'hammer',t:'Build',s:'Fixed price, quoted from the audit.',tag:'Fixed price'},
      {g:'own',ic:'key',t:'You own it',own:[['The system','on the tools you already use'],['The IP','no licence fee to us'],['The know-how','a trained owner on your team']]}
    ]
  };
  function engPath(host, markup, data){
    var P=data||PATH; host.innerHTML=''; var root=el('div','sfp',host), w=el('div','pp-wrap',root);
    var gs=el('div','pp-groups',w); P.groups.forEach(function(g){ el('div','pp-g '+g[0],gs,'<b>'+esc(g[1])+'</b><span>'+esc(g[2])+'</span>'); });
    var tr=el('div','pp-track',w), rail=el('div','pp-rail',tr,'<i></i>');
    var gl={}; P.groups.forEach(function(g){gl[g[0]]=g;}); var lastG=null;
    var ns=P.nodes.map(function(N){ if(N.g!==lastG){ lastG=N.g; el('div','pp-gh '+N.g,tr,esc(gl[N.g][1])+'<span>'+esc(gl[N.g][2])+'</span>'); } var n=el('div','pp-n on',tr);
      var h='<div class="pp-c">'+ico(N.ic)+'</div><div><h5>'+esc(N.t)+'</h5>';
      if(N.s) h+='<p>'+esc(N.s)+'</p>';
      if(N.tag) h+='<span class="pp-tag'+(N.hot?' hot':'')+'">'+esc(N.tag)+'</span>';
      if(N.own){ h+='<div class="pp-own">'+N.own.map(function(o){return '<div><svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-10"/></svg><span><b>'+esc(o[0])+'</b>, '+esc(o[1])+'</span></div>';}).join('')+'</div>'; }
      n.innerHTML=h+'</div>'; return n; });
    var i=0, timer=null, inner=rail.firstChild;
    function step(k){ var tw=tr.getBoundingClientRect(), c=ns[k].querySelector('.pp-c').getBoundingClientRect();
      var rw=rail.getBoundingClientRect(); inner.style.setProperty('--p', Math.max(0,Math.min(1,(c.left+c.width/2-rw.left)/rw.width)));
      ns.forEach(function(n,j){ n.classList.toggle('on', j<=k); }); }
    var off=onView(root,function(){ if(RM){ step(ns.length-1); return; }
      i=0; step(0); timer=setInterval(function(){ i=(i+1)%(ns.length+2); step(Math.min(i,ns.length-1)); },1300); });
    var ro=typeof ResizeObserver!=='undefined'?new ResizeObserver(function(){ step(Math.min(i,ns.length-1)); }):null; if(ro)ro.observe(tr);
    return function(){ if(timer)clearInterval(timer); if(ro)ro.disconnect(); off(); host.innerHTML=''; };
  }

  var base=_e.length; _e.push(engDates, engReady, engPath);
  We["property-dates"]={root:"sfp-root",css:"__prop",markup:"",fn:base};
  We["property-ready"]={root:"sfp-root",css:"__prop",markup:"",fn:base+1};
  We["property-path"]={root:"sfp-root",css:"__prop",markup:"",fn:base+2};
})();
