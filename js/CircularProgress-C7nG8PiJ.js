import{K as M,J as I,aa as C,ab as P,N as h,O as n,P as S,S as R,M as j,U as N,j as m,V as U,W as E}from"./index-Dg322SbI.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="e7f8a650-7e8d-4e7e-adb2-c950ac6be03e",e._sentryDebugIdIdentifier="sentry-dbid-e7f8a650-7e8d-4e7e-adb2-c950ac6be03e")}catch{}})();function _(e){return M("MuiCircularProgress",e)}I("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const t=44,y=C`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,g=C`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,F=typeof y!="string"?P`
        animation: ${y} 1.4s linear infinite;
      `:null,K=typeof g!="string"?P`
        animation: ${g} 1.4s ease-in-out infinite;
      `:null,V=e=>{const{classes:r,variant:s,color:a,disableShrink:c}=e,l={root:["root",s,`color${n(a)}`],svg:["svg"],circle:["circle",`circle${n(s)}`,c&&"circleDisableShrink"]};return E(l,_,r)},z=h("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,r[s.variant],r[`color${n(s.color)}`]]}})(S(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:F||{animation:`${y} 1.4s linear infinite`}},...Object.entries(e.palette).filter(R()).map(([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}}))]}))),A=h("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),O=h("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.circle,r[`circle${n(s.variant)}`],s.disableShrink&&r.circleDisableShrink]}})(S(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink,style:K||{animation:`${g} 1.4s ease-in-out infinite`}}]}))),B=j.forwardRef(function(r,s){const a=N({props:r,name:"MuiCircularProgress"}),{className:c,color:l="primary",disableShrink:D=!1,size:d=40,style:$,thickness:i=3.6,value:p=0,variant:v="indeterminate",...w}=a,o={...a,color:l,disableShrink:D,size:d,thickness:i,value:p,variant:v},u=V(o),f={},k={},b={};if(v==="determinate"){const x=2*Math.PI*((t-i)/2);f.strokeDasharray=x.toFixed(3),b["aria-valuenow"]=Math.round(p),f.strokeDashoffset=`${((100-p)/100*x).toFixed(3)}px`,k.transform="rotate(-90deg)"}return m.jsx(z,{className:U(u.root,c),style:{width:d,height:d,...k,...$},ownerState:o,ref:s,role:"progressbar",...b,...w,children:m.jsx(A,{className:u.svg,ownerState:o,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:m.jsx(O,{className:u.circle,style:f,ownerState:o,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})})});export{B as C};
