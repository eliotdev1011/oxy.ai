import{ah as p,ai as y,aj as m,ak as b,al as k,am as E,an as O,ao as L,ap as h,aq as x}from"./index-Dg322SbI.js";(function(){try{var a=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s=new a.Error().stack;s&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[s]="ae01d0f9-8036-4fd9-94dd-80066aeeb0a7",a._sentryDebugIdIdentifier="sentry-dbid-ae01d0f9-8036-4fd9-94dd-80066aeeb0a7")}catch{}})();class M extends p{constructor({callbackSelector:s,cause:t,data:o,extraData:d,sender:i,urls:r}){var c;super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],(c=t.metaMessages)!=null&&c.length?"":[],"Offchain Gateway Call:",r&&["  Gateway URL(s):",...r.map(f=>`    ${y(f)}`)],`  Sender: ${i}`,`  Data: ${o}`,`  Callback selector: ${s}`,`  Extra data: ${d}`].flat(),name:"OffchainLookupError"})}}class R extends p{constructor({result:s,url:t}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${y(t)}`,`Response: ${m(s)}`],name:"OffchainLookupResponseMalformedError"})}}class D extends p{constructor({sender:s,to:t}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${t}`,`OffchainLookup sender address: ${s}`],name:"OffchainLookupSenderMismatchError"})}}const T="0x556f1830",S={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function I(a,{blockNumber:s,blockTag:t,data:o,to:d}){const{args:i}=b({data:o,abi:[S]}),[r,c,f,u,n]=i,{ccipRead:e}=a,g=e&&typeof(e==null?void 0:e.request)=="function"?e.request:$;try{if(!k(d,r))throw new D({sender:r,to:d});const l=await g({data:f,sender:r,urls:c}),{data:w}=await E(a,{blockNumber:s,blockTag:t,data:O([u,L([{type:"bytes"},{type:"bytes"}],[l,n])]),to:d});return w}catch(l){throw new M({callbackSelector:u,cause:l,data:o,extraData:n,sender:r,urls:c})}}async function $({data:a,sender:s,urls:t}){var d;let o=new Error("An unknown error occurred.");for(let i=0;i<t.length;i++){const r=t[i],c=r.includes("{data}")?"GET":"POST",f=c==="POST"?{data:a,sender:s}:void 0,u=c==="POST"?{"Content-Type":"application/json"}:{};try{const n=await fetch(r.replace("{sender}",s).replace("{data}",a),{body:JSON.stringify(f),headers:u,method:c});let e;if((d=n.headers.get("Content-Type"))!=null&&d.startsWith("application/json")?e=(await n.json()).data:e=await n.text(),!n.ok){o=new h({body:f,details:e!=null&&e.error?m(e.error):n.statusText,headers:n.headers,status:n.status,url:r});continue}if(!x(e)){o=new R({result:e,url:r});continue}return e}catch(n){o=new h({body:f,details:n.message,url:r})}}throw o}export{$ as ccipRequest,I as offchainLookup,S as offchainLookupAbiItem,T as offchainLookupSignature};