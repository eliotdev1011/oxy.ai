import{u as l,b as d,a as o,l as g,m as u,n as w,o as h,p as k,q as y,r as p,s as S,t as T,C as n,v as I}from"./index-Dg322SbI.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new s.Error().stack;a&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[a]="e420b572-4b64-42b2-82e8-0de45ec4a5ac",s._sentryDebugIdIdentifier="sentry-dbid-e420b572-4b64-42b2-82e8-0de45ec4a5ac")}catch{}})();const P=()=>{const s=new URLSearchParams(T().search),a=s.get("pool"),e=s.get("type");if(a==="eth")return n.ETH_LST;if(a==="olm"&&e==="flexible")return n.OLM_FLEXIBLE;if(a==="olm"&&e==="locked")return n.OLM_LOCKED;if(a==="usd")return n.USD},f=()=>{const s=l(),a=P(),e=d(I,s);return{stakeInfoGetter:o(t=>g(t)),stakeInfoByCollectionGetter:o(t=>u(t,a)),stakeStatusGetter:o(t=>w(t)),isStakingTXGetter:o(t=>h(t)),isApprovingTXGetter:o(t=>k(t)),isInitiatingWithdrawTXGetter:o(t=>y(t)),isCompletingWithdrawTXGetter:o(t=>p(t)),isChangingPoolTXGetter:o(t=>S(t)),checkIsPauseStake:async(t=a)=>await e.checkIsPauseStake(t),checkIsPauseWithdraw:async()=>await e.checkIsPauseWithdraw(a),checkIsPoolPauseStake:async(t,i=a)=>await e.checkIsPoolPauseStake({collection:i,pool:t}),checkIsPoolPauseWithdraw:async t=>await e.checkIsPoolPauseWithdraw({collection:a,pool:t}),checkRequireApprove:async(t,i,c,r)=>await e.checkRequireApprove({collection:a,pool:t,amount:i,stakeMethod:c,resetTxInfo:r}),getAvailableToStake:async t=>await e.getAvailableToStake({collection:a,token:t}),getAvailableToWithdraw:async t=>await e.getAvailableToWithdraw({collection:a,pool:t}),getWithdrawQueue:async t=>await e.getWithdrawQueue({collection:a,pool:t}),getPoolsWithdrawList:async()=>await e.getPoolsWithdrawList(),getPoolsStakedList:async()=>await e.getPoolsStakedList(),stake:async(t,i,c)=>await e.stake({collection:a,pool:t,amount:i,stakeMethod:c}),initiateWithdraw:async(t,i)=>await e.initiateWithdraw({collection:a,pool:t,amount:i}),completeWithdraw:async t=>await e.completeWithdraw({collection:a,pool:t}),changePool:async(t,i)=>await e.changePool({collection:a,pool:t,amount:i}),getStakedAmount:async()=>await e.getStakedAmount(a),getTotalStakedAmount:async()=>await e.getTotalStakedAmount(),getTVL:async(t=a)=>await e.getTVL(t),getTotalTVL:async()=>await e.getTotalTVL(),getNumberOfNodes:async()=>await e.getNumberOfNodes(),resetTXResult:()=>e.resetTXResult(),resetPoolsWithdrawList:()=>e.resetPoolsWithdrawList(),resetPoolsStakedList:()=>e.resetPoolsStakedList()}};export{f as u};