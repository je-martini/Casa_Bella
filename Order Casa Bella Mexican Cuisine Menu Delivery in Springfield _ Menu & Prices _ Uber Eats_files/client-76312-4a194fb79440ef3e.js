"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[76312],{91972:(e,t,r)=>{r.d(t,{N:()=>o});const o={small:"small",medium:"medium",large:"large"}},72525:(e,t,r)=>{r.d(t,{Bd:()=>c,CN:()=>p,Fp:()=>s,Gi:()=>f,Xj:()=>b,ar:()=>h,bU:()=>k,d4:()=>d,ko:()=>u,sQ:()=>l});var o=r(79810),n=r(91972),i=r(33990);function a(e){return{[n.N.small]:"2px",[n.N.medium]:"4px",[n.N.large]:"8px"}[e]}const s=(0,o.zo)("div",(e=>({width:"100%"})));s.displayName="StyledRoot";const d=(0,o.zo)("div",(e=>{const{$theme:t}=e,{sizing:r}=t;return{display:"flex",marginLeft:r.scale500,marginRight:r.scale500,marginTop:r.scale500,marginBottom:r.scale500}}));d.displayName="StyledBarContainer";const l=(0,o.zo)("div",(e=>{const{$theme:t,$size:r,$steps:o}=e,{colors:n,sizing:i,borders:s}=t,d=s.useRoundedCorners?i.scale0:0;return{borderTopLeftRadius:d,borderTopRightRadius:d,borderBottomRightRadius:d,borderBottomLeftRadius:d,backgroundColor:n.backgroundTertiary,height:a(r),flex:1,overflow:"hidden",...o<2?{}:{marginLeft:i.scale300,":first-child":{marginLeft:"0"}}}}));l.displayName="StyledBar";const c=(0,o.zo)("div",(e=>{const{$theme:t,$value:r,$successValue:o,$steps:n,$index:i,$maxValue:a,$minValue:s=0}=e,d=a||o,{colors:l,sizing:c,borders:u}=t,h=100-100*(r-s)/(d-s)+"%",m="awaits",p="inProgress",g="completed";let f="default";if(n>1){const e=(d-s)/n,t=(r-s)/(d-s)*100,o=Math.floor(t/e);f=i<o?g:i===o?p:m}const y=u.useRoundedCorners?c.scale0:0,b={transform:`translateX(-${h})`},C=f===p?{animationDuration:"2.1s",animationIterationCount:"infinite",animationTimingFunction:t.animation.linearCurve,animationName:{"0%":{transform:"translateX(-102%)",opacity:1},"50%":{transform:"translateX(0%)",opacity:1},"100%":{transform:"translateX(0%)",opacity:0}}}:f===g?{transform:"translateX(0%)"}:{transform:"translateX(-102%)"};return{borderTopLeftRadius:y,borderTopRightRadius:y,borderBottomRightRadius:y,borderBottomLeftRadius:y,backgroundColor:l.backgroundAccent,height:"100%",width:"100%",transform:"translateX(-102%)",transition:"transform 0.5s",...n>1?C:b}}));c.displayName="StyledBarProgress";const u=(0,o.zo)("div",(e=>{const{$theme:t,$isLeft:r=!1,$size:o=n.N.medium}=e,{colors:i,sizing:s,borders:d}=t,l=d.useRoundedCorners?s.scale0:0;return{...r?{borderTopLeftRadius:l,borderBottomLeftRadius:l}:{borderTopRightRadius:l,borderBottomRightRadius:l},height:a(o),...{display:"inline-block",flex:1,marginLeft:"auto",marginRight:"auto",transitionProperty:"background-position",animationDuration:"1.5s",animationIterationCount:"infinite",animationTimingFunction:t.animation.linearCurve,backgroundSize:"300% auto",backgroundRepeat:"no-repeat",backgroundPositionX:r?"-50%":"150%",backgroundImage:`linear-gradient(${r?"90":"270"}deg, transparent 0%, ${i.backgroundAccent} 25%, ${i.backgroundAccent} 75%, transparent 100%)`,animationName:r?{"0%":{backgroundPositionX:"-50%"},"33%":{backgroundPositionX:"50%"},"66%":{backgroundPositionX:"50%"},"100%":{backgroundPositionX:"150%"}}:{"0%":{backgroundPositionX:"150%"},"33%":{backgroundPositionX:"50%"},"66%":{backgroundPositionX:"50%"},"100%":{backgroundPositionX:"-50%"}}}}}));u.displayName="StyledInfiniteBar";const h=(0,o.zo)("div",(e=>({textAlign:"center",...e.$theme.typography.font150,color:e.$theme.colors.contentTertiary})));h.displayName="StyledLabel";const m={[n.N.large]:{d:"M47.5 4H71.5529C82.2933 4 91 12.9543 91 24C91 35.0457 82.2933 44 71.5529 44H23.4471C12.7067 44 4 35.0457 4 24C4 12.9543 12.7067 4 23.4471 4H47.5195",width:95,height:48,strokeWidth:8,typography:"LabelLarge"},[n.N.medium]:{d:"M39 2H60.5833C69.0977 2 76 9.16344 76 18C76 26.8366 69.0977 34 60.5833 34H17.4167C8.90228 34 2 26.8366 2 18C2 9.16344 8.90228 2 17.4167 2H39.0195",width:78,height:36,strokeWidth:4,typography:"LabelMedium"},[n.N.small]:{d:"M32 1H51.6271C57.9082 1 63 6.37258 63 13C63 19.6274 57.9082 25 51.6271 25H12.3729C6.09181 25 1 19.6274 1 13C1 6.37258 6.09181 1 12.3729 1H32.0195",width:64,height:26,strokeWidth:2,typography:"LabelSmall"}},p=(0,o.zo)("div",(e=>{let{$size:t,$inline:r}=e;return{width:m[t].width+"px",height:m[t].height+"px",position:"relative",display:r?"inline-flex":"flex",alignItems:"center",justifyContent:"center"}}));p.displayName="StyledProgressBarRoundedRoot";const g=(0,o.zo)("svg",(e=>{let{$size:t}=e;return{width:m[t].width+"px",height:m[t].height+"px",position:"absolute",fill:"none"}}));g.displayName="_StyledProgressBarRoundedSvg";const f=(0,o.Le)(g,(e=>function(t){return(0,i.tZ)(e,{viewBox:`0 0 ${m[t.$size].width} ${m[t.$size].height}`,xmlns:"http://www.w3.org/2000/svg",...t})})),y=(0,o.zo)("path",(e=>{let{$theme:t,$size:r}=e;return{stroke:t.colors.backgroundTertiary,strokeWidth:m[r].strokeWidth+"px"}}));y.displayName="_StyledProgressBarRoundedTrackBackground";const b=(0,o.Le)(y,(e=>function(t){return(0,i.tZ)(e,{d:m[t.$size].d,...t})})),C=(0,o.zo)("path",(e=>{let{$theme:t,$size:r,$visible:o}=e;return{visibility:o?"visible":"hidden",stroke:t.colors.borderAccent,strokeWidth:m[r].strokeWidth+"px"}}));C.displayName="_StyledProgressBarRoundedTrackForeground";(0,o.Le)(C,(e=>function(t){return(0,i.tZ)(e,{d:m[t.$size].d,style:{strokeDasharray:t.$pathLength,strokeDashoffset:t.$pathLength*(1-t.$pathProgress)+""},...t})}));const k=(0,o.zo)("div",(e=>{let{$theme:t,$size:r}=e;return{color:t.colors.contentPrimary,...t.typography[m[r].typography]}}));k.displayName="StyledProgressBarRoundedText"},16389:(e,t,r)=>{r.d(t,{u:()=>L});var o=r(43193),n=r(36151),i=r(3948),a=r(91931),s=r(2458),d=r(91972),l=r(72525),c=r(33990);const u=(0,a.zo)("div",(e=>{let{$theme:t,$hasOnClick:r=!1}=e;return{cursor:r?"pointer":"auto",backgroundColor:t.colors.backgroundPrimary,borderRadius:t.borders.radiusFull}})),h=o.forwardRef((function(e,t){let{durationInSeconds:r,totalDurationInSeconds:n,onTimerEnd:i,onClick:h}=e;const[m,p]=o.useState(0),{minutesLabel:g,secondsLabel:f,secondsLeft:y}=(0,s.ZP)(r),b=o.useRef(null),[C,k]=o.useState(null),[$,v]=o.useState(!1),[z,S]=o.useState(!1),x=d.N.medium,[,R]=(0,a.hQ)();return o.useEffect((()=>{b.current&&b.current.getTotalLength&&p(b.current.getTotalLength())}),[]),o.useEffect((()=>{if(r>0&&(k(y/n),$?S(!0):v(!0)),0===y&&i){const e=setTimeout((()=>{i()}),1e3);return()=>clearTimeout(e)}}),[r,$,i,y,n]),r>0?(0,c.tZ)(u,{onClick:h,$hasOnClick:Boolean(h),ref:t,children:(0,c.BX)(l.CN,{"data-baseweb":"progressbar-rounded",role:"progressbar","aria-valuemin":0,"aria-valuemax":1,$inline:!0,$size:x,children:[(0,c.BX)(l.Gi,{$size:x,children:[(0,c.tZ)(l.Xj,{$size:x}),(0,c.tZ)("path",{ref:b,d:"M39 2H60.5833C69.0977 2 76 9.16344 76 18C76 26.8366 69.0977 34 60.5833 34H17.4167C8.90228 34 2 26.8366 2 18C2 9.16344 8.90228 2 17.4167 2H39.0195",style:{strokeDasharray:m,strokeDashoffset:C?String(m*(1-C)):m,stroke:R.colors.positive,strokeWidth:R.sizing.scale100,transition:z?"stroke-dashoffset 1s linear":"none"}})]}),(0,c.tZ)(l.bU,{$size:x,children:`${Number(g)}:${f}`})]})}):null}));var m=r(4661),p=r(58679),g=r(32857),f=r(68065),y=r(67801),b=r(46933),C=r(48566),k=r(24316),$=r(79851),v=r(91631),z=r(33535);const S=(0,a.zo)("div",(e=>{let{$theme:t}=e;return{padding:t.sizing.scale600}})),x=(0,a.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.HeadingMedium,color:t.colors.contentPrimary}})),R=(0,a.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.ParagraphLarge,color:t.colors.contentPrimary,marginTop:t.sizing.scale300}})),Z=e=>{let{isOpen:t,onClose:r,storeUUID:o,shouldRedirectToHomeAfterClearCart:i=!1,parentOrderUuid:a}=e;const s=(0,C.Z)("add-ons-timer-expired"),{totalOrders:d}=(0,k.Z)(),l=d>0,u=(0,v.k6)(),h=(0,$.Z)(),m=(0,z.ZP)();(0,n.useEffect)((()=>{t&&a&&m("eats:add_ons_expired_bottomsheet_impression",{primaryOrderUuid:a})}),[m,t,a]);const Z=(0,n.useCallback)((()=>{m("eats:add_ons_expired_bottomsheet_action_clicked",{primaryOrderUuid:a,action:"continue"}),r()}),[m,r,a]),w=(0,n.useCallback)((()=>{m("eats:add_ons_expired_bottomsheet_action_clicked",{primaryOrderUuid:a,storeUuid:o,action:"clear_cart"}),s(o),i&&u.push(h),r()}),[s,m,u,h,r,a,i,o]);return(0,c.BX)(p.R1,{onClose:r,isOpen:t,closeable:!1,children:[(0,c.BX)(S,{children:[(0,c.tZ)(x,{children:l?(0,c.tZ)(b.v,{id:"addOns.withCart.timerExpiredTitle"}):(0,c.tZ)(b.v,{id:"addOns.withoutCart.timerExpiredTitle"})}),(0,c.tZ)(R,{children:l?(0,c.tZ)(b.v,{id:"addOns.withCart.timerExpiredMessage"}):(0,c.tZ)(b.v,{id:"addOns.withoutCart.timerExpiredMessage"})})]}),(0,c.tZ)(y.Z,{primaryAction:(0,c.tZ)(g.Z,{onClick:Z,size:f.NO.large,children:(0,c.tZ)(b.v,{id:"shared.continue"})}),dismissiveAction:l?(0,c.tZ)(g.Z,{onClick:w,kind:f.TO.secondary,size:f.NO.large,children:(0,c.tZ)(b.v,{id:"shared.clearCart"})}):null})]})},w=(e,t)=>{let r=0;const o="perPayloadCountdown"===e?.countdownPayload?.type?e?.countdownPayload?.perPayloadCountdown?.countdown:null,n=o?.totalDurationInSeconds??0;if(!t)return r=o?.durationInSeconds??0,{durationInSeconds:r,totalDurationInSeconds:n};const i=e?.addOnOfferContextMap?e?.addOnOfferContextMap[t]:null;return r=i?.addOnOfferExpiryEpochSec?(e=>{if(!e||"number"!=typeof e)return 0;const t=Math.floor(Date.now()/1e3);return Math.max(e-t,0)})(i?.addOnOfferExpiryEpochSec):0,{durationInSeconds:r,totalDurationInSeconds:n}};var O=r(61127),P=r(68799);const _="uev2.addons.timer-expired-bottom-sheet.viewed",B=()=>{const e=(0,P.Z7)(_);return(0,O.Z)(e)?[]:e};var N=r(19912);const T=(0,a.zo)("div",(e=>{let{$style:t,$theme:r}=e;return{position:"fixed",bottom:r.sizing.scale600,display:"flex",justifyContent:"center",width:"100%",...t}})),L=e=>{let{storeUUID:t,styleOverrides:r,shouldRedirectToHomeAfterClearCart:a=!1}=e;const[s,d]=o.useState(!0),[l,u]=o.useState(!1),[p,g]=o.useState(!1),{addOnOffer:f,parentOrderUuid:y}=(0,i.J)(),{durationInSeconds:b,totalDurationInSeconds:C}=w(f,t),k=(0,N.Z)({eventName:"eats:add_ons_global_timer_impression",eventPayload:{primaryOrderUuid:y}}),$=(0,z.ZP)(),v=(0,n.useCallback)((()=>{$("eats:add_ons_global_timer_clicked",{primaryOrderUuid:y}),u(!0)}),[$,y]);return(0,c.BX)(c.HY,{children:[(0,c.tZ)(T,{$style:r,children:s&&C>0?(0,c.tZ)(h,{durationInSeconds:b,totalDurationInSeconds:C,onClick:v,onTimerEnd:()=>{y&&!(e=>{const t=B();return!!e&&t.includes(e)})(y)&&g(!0),d(!1)},ref:k}):null}),f?.infoBottomSheet?(0,c.tZ)(m.P,{bottomSheet:f.infoBottomSheet,isOpen:l,onClose:()=>u(!1)}):null,(0,c.tZ)(Z,{isOpen:p,onClose:()=>{y&&(e=>{const t=B();t.includes(e)||(t.push(e),(0,P.pc)(_,t,86400))})(y),g(!1)},storeUUID:t,parentOrderUuid:y,shouldRedirectToHomeAfterClearCart:a})]})}},14663:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(60849),n=r(44145),i=r(15070);const a=()=>{const e=(0,o.ip)({...n.A.xlb_consistent_cta_position,defaultValue:!1}),t=(0,i.v)((e=>{let{embeddedFeatures:t}=e;return t})).consistentContentInset;return e&&Boolean(t)}}}]);