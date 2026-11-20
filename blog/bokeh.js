/* =========================================================
   blog/bokeh.js — rozostřená světla místo obrázků na kartách blogu (verze 1)
   Platí celý rok. Každá karta má vlastní kombinaci barev, velikostí,
   směru a rychlosti, odvozenou z adresy článku, takže je pokaždé stejná.
   Hýbou se jen karty, které jsou vidět; při „omezit pohyb“ zůstane
   jeden klidný snímek. Bez JavaScriptu zůstane původní obrázek (SVG).
   ========================================================= */
(function(){
'use strict';
var thumbs=document.querySelectorAll('.card .thumb');if(!thumbs.length)return;
var RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var TAU=Math.PI*2;
var PAL={gold:'#e0a93c',mint:'#7fb5a8',teal:'#157a7f',cream:'#f4f0e4',sage:'#9dc2b6'};
/* sady barev: první barva převažuje */
var SETS=[['gold','mint','cream'],['mint','teal','gold'],['teal','sage','gold'],['gold','cream','teal'],['sage','gold','mint'],['cream','mint','teal']];
var BG=['#14302f','#122a29','#163230','#0f2726'];

function hash(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
function rnd(seed){var a=seed||1;return function(){a|=0;a=a+0x6D2B79F5|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function rgba(hex,a){var n=parseInt(hex.slice(1),16);return 'rgba('+(n>>16)+','+(n>>8&255)+','+(n&255)+','+a+')';}

var items=[];
Array.prototype.forEach.call(thumbs,function(th,idx){
  var a=th.closest('a'),key=(a&&a.getAttribute('href'))||String(idx),R=rnd(hash(key));
  var set=SETS[Math.floor(R()*SETS.length)],bg=BG[Math.floor(R()*BG.length)];
  var n=11+Math.floor(R()*8);                       /* 11–18 světel */
  var big=.7+R()*.7;                                 /* celková velikost */
  var dir=R()*TAU;                                   /* směr unášení */
  var drift=(R()<.65)?-1:1;                          /* většinou stoupají */
  var speed=.55+R()*.75;
  var L=[];
  for(var i=0;i<n;i++){
    var c=i<n*.5?set[0]:i<n*.82?set[1]:set[2];
    L.push({x:R(),y:R(),r:(.06+R()*.16)*big,c:PAL[c],ph:R()*TAU,v:(.006+R()*.014)*speed,
      soft:R()<.45,                                   /* část světel jemně rozmazaná */
      a0:.12+R()*.1,a1:.26+R()*.2,f:.4+R()*.8});
  }
  var cv=document.createElement('canvas');cv.setAttribute('aria-hidden','true');
  cv.style.cssText='position:absolute;inset:0;width:100%;height:100%;display:block';
  var svg=th.querySelector('svg');th.insertBefore(cv,svg||th.firstChild);
  items.push({th:th,cv:cv,g:cv.getContext('2d'),svg:svg,L:L,bg:bg,dir:dir,drift:drift,w:0,h:0,on:false,first:true});
});

function size(it){
  var r=it.th.getBoundingClientRect(),d=Math.min(window.devicePixelRatio||1,2);
  it.w=r.width;it.h=r.height;if(!it.w||!it.h)return;
  it.cv.width=Math.round(it.w*d);it.cv.height=Math.round(it.h*d);it.g.setTransform(d,0,0,d,0,0);
}
function draw(it,t){
  var g=it.g,W=it.w,H=it.h;if(!W||!H)return;
  var M=Math.min(W,H)*1.25,dx=Math.cos(it.dir)*.25,dy=it.drift;
  g.fillStyle=it.bg;g.fillRect(0,0,W,H);
  for(var i=0;i<it.L.length;i++){var b=it.L[i];
    var y=((b.y+dy*b.v*t)%1+1)%1,x=((b.x+dx*b.v*t+Math.sin(t*.25*b.f+b.ph)*.02)%1+1)%1;
    var r=b.r*M,px=x*(W+2*r)-r,py=y*(H+2*r)-r;
    var a=b.a0+(b.a1-b.a0)*(.5+.5*Math.sin(t*.7*b.f+b.ph));
    if(b.soft){var gr=g.createRadialGradient(px,py,0,px,py,r);gr.addColorStop(0,rgba(b.c,a*1.5));gr.addColorStop(.55,rgba(b.c,a));gr.addColorStop(1,rgba(b.c,0));g.fillStyle=gr;g.beginPath();g.arc(px,py,r,0,TAU);g.fill();}
    else{g.fillStyle=rgba(b.c,a);g.beginPath();g.arc(px,py,r,0,TAU);g.fill();g.strokeStyle=rgba(b.c,a*.9);g.lineWidth=1;g.stroke();}
  }
  if(it.first){it.first=false;if(it.svg)it.svg.style.visibility='hidden';}
}

var raf=0,T0=performance.now();
function tick(ms){raf=0;var t=(ms-T0)/1000+40,any=false;
  for(var i=0;i<items.length;i++)if(items[i].on){draw(items[i],t);any=true;}
  if(any&&!document.hidden)raf=requestAnimationFrame(tick);}
function wake(){if(!raf&&!RM)raf=requestAnimationFrame(tick);}

items.forEach(function(it){size(it);draw(it,40);});
if('ResizeObserver' in window){var ro=new ResizeObserver(function(es){es.forEach(function(e){var it=e.target._bk;if(it){size(it);draw(it,(performance.now()-T0)/1000+40);}});});items.forEach(function(it){it.th._bk=it;ro.observe(it.th);});}
if(RM)return;
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){e.target._bk.on=e.isIntersecting;});wake();},{rootMargin:'60px'});
  items.forEach(function(it){it.th._bk=it;io.observe(it.th);});
}else{items.forEach(function(it){it.on=true;});wake();}
document.addEventListener('visibilitychange',function(){if(!document.hidden)wake();});
})();
