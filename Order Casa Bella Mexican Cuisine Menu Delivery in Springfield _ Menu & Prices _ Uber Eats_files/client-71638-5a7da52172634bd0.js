(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[71638],{16932:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s,y:()=>l});var n=r(91931),i=r(33497),o=r(57444),a=r(58814);const l=e=>{let{$theme:t,disabled:r}=e;return{color:t.colors.contentInversePrimary,background:t.colors.backgroundInversePrimary,...r?(0,o.Z)(t):{":hover":{background:t.colors.buttonPrimaryHover},":active":{background:t.colors.buttonPrimaryActive},...(0,a.Z)(t)}}},s=(0,n.zo)("button",(e=>{let{$theme:t,disabled:r,radius:n}=e;return{...(0,i.Z)({$theme:t,radius:n}),...l({$theme:t,disabled:r})}}))},26786:(e,t,r)=>{"use strict";r.d(t,{U:()=>l,Z:()=>s});var n=r(91931),i=r(33497),o=r(57444),a=r(58814);const l=e=>{let{$theme:t,disabled:r}=e;return{color:t.colors.contentPrimary,background:t.colors.backgroundPrimary,...r?(0,o.Z)(t):{":hover":{background:t.colors.whiteHover},":active":{background:t.colors.whiteActive},...(0,a.Z)(t)}}},s=(0,n.zo)("button",(e=>{let{$theme:t,disabled:r,radius:n}=e;return{...(0,i.Z)({$theme:t,radius:n}),...l({$theme:t,disabled:r})}}))},47734:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(14016),i=r(62091),o=r(33990);const a=e=>{let{logoURL:t}=e;const r=(0,n.T)();return(0,o.tZ)(i.Z,{alt:r("online_ordering.logo.alt_text"),src:t,style:{objectFit:"scale-down",maxHeight:"48px",maxWidth:"176px"}})}},__fusion__336:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P});var n=r(43193),i=r(15070),o=r(14016),a=r(91931),l=r(84015),s=r(52246),d=r(47986),c=r(82817),u=r(40606),h=r(79908),p=r(94579),g=r(87444),m=r(32650),Z=r(34832),v=r(94813),f=r(34626),b=r(33990);const y=(0,a.zo)("div",(e=>{let{$scrollable:t,$theme:r}=e;return t?{overflowX:"scroll",overflowY:"hidden",padding:"16px 0",display:"flex",flexDirection:"row",backgroundColor:r.colors.backgroundSecondary,alignItems:"flex-start",WebkitOverflowScrolling:"touch"}:{}})),x=(0,a.zo)(s.rU,(e=>{let{$theme:t}=e;return{flexGrow:0,flexShrink:0,flexBasis:"calc(85vw - 32px)",backgroundColor:t.colors.positive,padding:"8px 16px 12px",display:"block",boxShadow:t.shadows.box}})),k=(0,a.zo)("div",{display:"flex",alignItems:"center"}),w=(0,a.zo)("div",{flex:1}),_=(0,a.zo)("div",{flex:"0 0 16px",minHeight:"1px"}),C=(0,a.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.HeadingLarge,marginLeft:"16px",color:t.colors.onPositive,letterSpacing:"normal"}})),$=(0,a.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.ParagraphSmall,color:t.colors.onPositive,marginLeft:"40px"}})),I=(0,a.zo)("span",p.E2),P=()=>{const e=(0,v.TH)(),t=(0,i.v)((e=>{let{activeOrders:t}=e;return t})),r=(0,o.T)(),a=(0,g.Z)("eater_message_service_banner"),s=(0,g.Z)("active_order_banner_for_guest_users_enabled"),{eaterMessage:p}=(0,m.Z)("FEED_ANNOUNCEMENTS_TOP"),{user:P,isUnregisteredUser:z}=(0,f.Z)();return a&&!(s&&!P?.data?.isLoggedIn&&z)?p?(0,b.tZ)(Z.Z,{eaterMessage:p}):null:(0,b.tZ)(u.Z,{source:t,error:()=>null,loaded:t=>{const i=Array.isArray(t.orders)?t.orders.filter((e=>e.inAppNotification)):[];if(!i.length)return null;const o=i.length>1;return(0,b.BX)(y,{$scrollable:o,children:[i.map((t=>(0,b.BX)(n.Fragment,{children:[o?(0,b.tZ)(_,{}):null,(0,b.BX)(l.Z,{eventName:"eats:header_orders_global",eventPayload:{orderUuid:t.uuid||""},$as:x,to:(0,d._u3)(e,{uuid:t.uuid||""}),children:[(0,b.BX)(k,{children:[(0,b.tZ)(c.Z,{$color:"white"}),(0,b.BX)(C,{children:[(0,b.tZ)(I,{children:r("shared.estimatedDeliveryTime")}),t.inAppNotification?.title||(0,b.tZ)(b.HY,{children:" "})]}),(0,b.tZ)(w,{}),(0,b.tZ)(h.Z,{type:"ArrowLeft",color:"onPositive",width:"20px",height:"20px",rotate:180})]}),(0,b.tZ)($,{children:t.inAppNotification?.subtitle||(0,b.tZ)(b.HY,{children:" "})})]})]},t.uuid))),o?(0,b.tZ)(_,{}):null]})},loading:()=>null})}},98464:(e,t,r)=>{"use strict";r.d(t,{Z:()=>B});var n=r(91931),i=r(82090),o=r(34626),a=r(28222),l=r(20464),s=r(93866),d=r(94579),c=r(83563),u=r(52419),h=r(36278),p=r(42554),g=r(15070),m=r(26034),Z=r(73448),v=r(47734),f=r(10231),b=r(60582),y=r(82794),x=r(69630),k=r(29200),w=r(46857),_=r(54146),C=r(33990);const $=(0,n.zo)("div",(e=>{let{$theme:t,$isAbsolutePositioned:r,$isTransparent:n,$headerContentColor:i}=e;return{background:n?"transparent":t.colors.backgroundPrimary,color:t.colors[i],padding:`0 ${d.jA}`,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",height:d.ZQ,...r?{position:"absolute",top:0,left:0,right:0,zIndex:d.I_.surface}:{}}})),I=(0,n.zo)("div",{flex:1}),P=(0,n.zo)("div",{width:"100%",display:"flex",justifyContent:"center",position:"absolute",margin:"0 -16px",pointerEvents:"none"}),z=(0,n.zo)("div",{pointerEvents:"all"}),S=e=>{const{user:t}=(0,o.Z)(),r=(0,a.Z)(),n=(0,y.d1)()?.customization,{enterAddressBackground:d,enterAddressContentColor:S}=(0,p.Z)(),B=e.isOverCoiFeedEnterAddress,O=(0,g.v)((e=>{let{embeddedFeatures:t}=e;return t})).xlbHeaderBridge,L=(0,x.Z)(),T=(0,_.Z)(),A=(0,l.Z)();return O?(0,C.tZ)(m.Z,{}):A?(0,C.tZ)($,{$headerContentColor:"onHeader",children:(0,C.tZ)(P,{children:(0,C.tZ)(c.Z,{small:!0})})}):(0,C.tZ)(C.HY,{children:(0,C.tZ)(i.Z,{hideFor:["xlb","appleMapsAppClip","orchid"],children:(0,C.BX)($,{$isAbsolutePositioned:B,$isTransparent:B,$headerContentColor:B?S:"onHeader",children:[T?null:e.customLeftButton??(0,C.tZ)(u.Z,{}),r&&n?.links?(0,C.tZ)(f.Z,{drawerLinks:n.links}):null,T?null:(0,C.tZ)(h.ZP,{$width:"24px"}),r?n?.logoURL?(0,C.tZ)(P,{children:(0,C.tZ)(v.Z,{logoURL:n.logoURL})}):null:(0,C.tZ)(Z.Z,{condition:Boolean(t.data?.isLoggedIn),wrapper:e=>(0,C.tZ)(P,{children:(0,C.tZ)(z,{children:e})}),children:(0,C.tZ)(c.Z,{background:B?d.backgroundColor:"header",small:!0})}),(0,C.tZ)(I,{}),t.data?.isLoggedIn?(0,C.tZ)(s.Z,{}):null,t.data?.isLoggedIn||e.suppressAuthXP?null:(0,C.tZ)(b.m,{campaign:e.campaign,showSigninUniversalLink:e.showSigninUniversalLink,isMobile:!0,isHomePage:B}),!t.data?.isLoggedIn&&e.suppressAuthXP?(0,C.tZ)(w.Z,{campaign:e.campaign,beforeClick:()=>{e.logSignInSignUpClick&&e.logSignInSignUpClick("signin","header")}}):null,L&&!e.isCheckout?(0,C.BX)(C.HY,{children:[(0,C.tZ)(h.ZP,{$width:"8px"}),(0,C.tZ)(k.Z,{})]}):null]})})})};S.displayName="HeaderMobile";const B=S},93866:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(1798),i=r(52949),o=r(33990);const a=()=>null,l=(0,i.V)({chunkId:"haeder-shared-admin",load:()=>Object.defineProperties(Promise.all([r.e(69890),r.e(89407),r.e(50109),r.e(69911),r.e(63866),r.e(97636),r.e(53890),r.e(76246),r.e(54510),r.e(78422),r.e(94464),r.e(51747)]).then(r.bind(r,"__fusion__490")),{__CHUNK_IDS:{value:[50109,51747,53890,54510,63866,69890,69911,76246,78422,89407,94464,97636]},__MODULE_ID:{value:"__fusion__490"},__I18N_KEYS:{value:["checkout.fare_breakdown.estimated_total_label","checkout.fare_breakdown.total_label","go.spending_limit_exceeded","item_quantity_limits.limit_reached","loading","shared.estimated_subtotal","shared.genericServerError","shared.notAvailable.dateAndTimeRange","shared.subtotal","store.bundle_store.bundle_order_created"]}}),LoadingComponent:a,ErrorComponent:a}),s=e=>{let{size:t}=e;return(0,n.Z)()?(0,o.tZ)(l,{size:t}):null}},83563:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(36151),i=r(14016),o=r(52246),a=r(91931),l=r(63232),s=r(20464),d=r(79851),c=r(15070),u=r(3565),h=r(38777),p=r(33990);const g=(0,a.w1)(u.Z,{display:"block"});function m(e){const[t,r]=(0,a.hQ)(),u=(0,d.Z)(),m=(0,i.T)(),{validCountryLangPair:Z}=(0,c.v)((e=>e.i18n)),v=e.background||"header",f=(0,l.Z)(),b=(0,s.Z)(),{isDelegatedBooking:y}=(0,h.W)(),x=(0,n.useMemo)((()=>"small"===e.size?r.sizing.scale600:e.small?r.sizing.scale700:r.sizing.scale800),[e.size,e.small,r.sizing.scale600,r.sizing.scale700,r.sizing.scale800]);if(y)return null;const k=m("shared.ubereatshome",{appVariantName:f}),w=(0,p.tZ)(g,{background:v,alt:k,height:x});return b?w:Z?(0,p.tZ)(o.OL,{to:u,children:w}):(0,p.tZ)("a",{href:"/",children:w})}},52927:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(91931),i=r(22787),o=r(94579),a=r(26786),l=r(16932);const s=(0,n.zo)("a",(e=>{let t,{$theme:r,$isWhite:n,$isBlack:s,$isTransparent:d,$isCircle:c}=e;return t=s?{...(0,l.y)({$theme:r}),boxShadow:r.shadows.floatingButton}:n?{...(0,a.U)({$theme:r}),boxShadow:r.shadows.floatingButton}:d?{...(0,a.U)({$theme:r}),backgroundColor:"transparent"}:(0,i.y)({$theme:r}),{...r.typography.LabelSmall,borderRadius:r.borders.pillButtonBorderRadius,display:"inline-flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box",whiteSpace:"nowrap",padding:c?void 0:`${r.sizing.scale300} ${r.sizing.scale500}`,height:o.GC,width:c?o.GC:void 0,...t}}))},46857:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(91931),i=r(55186),o=r(46933),a=r(33497),l=r(94579),s=r(67905),d=r(36278),c=r(52927),u=r(33990);function h(e){let{isWhite:t,isTransparent:r,beforeClick:h,prominent:p,textKey:g="signin",showIcon:m=!1,hideText:Z=!1,isBlack:v=!1,campaign:f,isCircle:b,style:y}=e;const[x,k]=(0,n.hQ)(),w=p?{...(0,a.Z)({$theme:k,radius:"pillButtonBorderRadius"}),...k.typography.LabelMedium,minHeight:l.vK,width:"auto"}:{padding:k.sizing.scale500};return(0,u.tZ)(i.Z,{type:"login",campaign:f,children:e=>{let{onClick:n,href:i}=e;return(0,u.BX)(c.Z,{rel:"nofollow",tabIndex:0,href:i,onClick:async e=>{h&&await h(),n(e)},"data-test":"header-sign-in",$isWhite:t,$isBlack:v,$isTransparent:r,$isCircle:b,$style:{...w,...y},children:[m?(0,u.BX)(u.HY,{children:[(0,u.tZ)(s.Z,{size:p?20:16}),Z?null:(0,u.tZ)(d.ZP,{$width:"4px"})]}):null,Z||"signin"!==g?null:(0,u.tZ)(o.v,{id:"components.SignIn.header"}),Z||"login"!==g?null:(0,u.tZ)(o.v,{id:"components.LogIn.header"}),Z||"signup"!==g?null:(0,u.tZ)(o.v,{id:"components.SignUp.header"})]})}})}},60582:(e,t,r)=>{"use strict";r.d(t,{m:()=>f});var n=r(36151),i=r(91931),o=r(46857),a=r(12335),l=r(46933),s=r(67905),d=r(36278),c=r(52927),u=r(94579),h=r(33990);const p="cro_signin_cta_universal_link";function g(e){let{isWhite:t,isTransparent:r,beforeClick:n,prominent:o,textKey:g="signin",showIcon:m=!1,hideText:Z=!1,isBlack:v=!1,campaign:f,isCircle:b,style:y}=e;const[x,k]=(0,i.hQ)(),w=o?{...k.typography.LabelMedium,padding:"12px 16px",height:u.vK}:{};return(0,h.tZ)(a.Z,{type:"login",campaign:f||p,children:e=>{let{onClick:i,href:a}=e;return(0,h.BX)(c.Z,{rel:"nofollow",tabIndex:0,href:a,onClick:async e=>{n&&await n(),i(e)},"data-test":"header-sign-in",$isWhite:t,$isBlack:v,$isTransparent:r,$isCircle:b,$style:{...w,...y},children:[m?(0,h.BX)(h.HY,{children:[(0,h.tZ)(s.Z,{size:o?20:16}),Z?null:(0,h.tZ)(d.ZP,{$width:"4px"})]}):null,Z||"signin"!==g?null:(0,h.tZ)(l.v,{id:"components.SignIn.header"}),Z||"login"!==g?null:(0,h.tZ)(l.v,{id:"components.LogIn.header"}),Z||"signup"!==g?null:(0,h.tZ)(l.v,{id:"components.SignUp.header"})]})}})}var m=r(33535),Z=r(55811),v=r(20464);const f=e=>{let{isHomePage:t,prominent:r=!1,isMobile:a=!1,showSigninUniversalLink:l=!1,campaign:s,hideIcon:d=!1,signInButtonColor:c="default",signUpButtonColor:u="default",buttonSpacing:f}=e;const[b,y]=(0,i.hQ)(),x=(0,m.ZP)(),k="postmates"===(0,Z.Z)(),w=l&&!k?g:o.Z,_="header",C=l?p:s,$=(0,n.useCallback)(((e,t)=>{x("eats:signin_signup_click",{type:e,eventSource:t})}),[x]);return(0,v.Z)()?null:(0,h.BX)(h.HY,{children:[(0,h.tZ)(w,{beforeClick:async()=>{$("signin",_)},textKey:"login",showIcon:!d,hideText:a,isBlack:"black"===c,isWhite:t||"white"===c,isTransparent:"transparent"===c,prominent:r,campaign:C,isCircle:a,style:{marginRight:f??y.sizing.scale600}}),(0,h.tZ)(w,{textKey:"signup",beforeClick:async()=>{$("signup",_)},isBlack:t||"black"===u,isWhite:"white"===u,isTransparent:"transparent"===u,prominent:r,campaign:C})]})}},31854:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(36151),i=r(73518),o=r(33990);function a(e,t){return(0,o.tZ)(i.Z,{viewBox:"0 0 16 16",ref:t,...e,children:(0,o.tZ)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.666 11.333h10.333l1.334-8h-11l-.267-2h-3.4v2h1.667l1.333 8zm1.333 3.334A1.333 1.333 0 105 12a1.333 1.333 0 000 2.667zm9.334-1.334a1.333 1.333 0 11-2.667 0 1.333 1.333 0 012.667 0z"})})}const l=n.forwardRef(a)},67905:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(36151),i=r(73518),o=r(33990);function a(e,t){return(0,o.tZ)(i.Z,{viewBox:"0 0 26 26",ref:t,...e,children:(0,o.tZ)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.958 7.042a5.958 5.958 0 11-11.916 0 5.958 5.958 0 0111.916 0zM3.25 21.667c0-3.575 2.925-6.5 6.5-6.5h6.5c3.575 0 6.5 2.925 6.5 6.5v3.25H3.25v-3.25z"})})}const l=n.forwardRef(a)},60696:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(36151),i=r(73518),o=r(33990);function a(e,t){return(0,o.tZ)(i.Z,{viewBox:"0 0 20 20",ref:t,...e,children:(0,o.tZ)("path",{d:"M19.167 3.333H.833v2.5h18.334v-2.5zm0 5.834H.833v2.5h18.334v-2.5zM.833 15h18.334v2.5H.833V15z"})})}const l=n.forwardRef(a)},73764:(e,t,r)=>{"use strict";r.d(t,{E$:()=>c,Ns:()=>u,Th:()=>l,q6:()=>d,wP:()=>a});var n=r(43193),i=r(91931),o=r(33990);const a=e=>(0,o.tZ)("header",{...e}),l="main-content",s=(0,i.zo)("main",{display:"block"}),d=(0,i.Le)(s,(e=>function(t){return(0,o.tZ)(e,{id:l,tabIndex:-1,...t})})),c=n.forwardRef((function(e,t){return(0,o.tZ)("footer",{ref:t,...e})})),u=e=>(0,o.tZ)("nav",{role:"navigation",...e})},3565:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(91931),i=r(8639),o=r(62091),a=r(3954),l=r(57910),s=r(33990);const d=(0,n.zo)(o.Z,(e=>{let t,r,{$width:n,$height:i,$invertColor:o}=e;return n||i?n?(t=n,r="auto"):i&&(t="auto",r=i):(t="auto",r="24px"),{...{filter:o?"invert(1)":"unset"},width:t,height:r}})),c=(0,n.Le)(d,(e=>function(t){const{alt:r,background:o="backgroundPrimary",...d}=t;let c,u;d.width&&(c=d.width),d.height&&(u=d.height);const[,h]=(0,n.hQ)(),p=(0,i.RQ)(h.colors[o]||o),g=p?h.assets.logo:h.assets.logoOnDarkBg,{logoUrl:m}=(0,a.Q)(),[Z,v]=h.assets.logoAspectRatio,f=null!==m&&!1===p,b=m??g;return(0,s.BX)(s.HY,{children:[(0,s.tZ)(l.Z,{preloadList:[{href:b,contentType:"image"}]}),(0,s.tZ)(e,{src:b,alt:r,width:Z,height:v,$width:c,$height:u,$invertColor:f})]})}))},81567:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(36151),i=r(94813),o=r(72843),a=r(47986),l=r(28463),s=r(33535),d=r(33990);const c=e=>{let{modalName:t,component:r,children:c}=e;const u=(0,i.TH)(),h=o.parse(u.search),p=h[a.FSm.modalContext]??"",g=(0,l.h)(),m=(0,s.I0)();if(h[a.FSm.modalName]===t||h[a.FSm.popoverName]===t){if(c)return n.Children.map(c,(e=>n.cloneElement(e,{modalContext:p})));const e=r;if(e)return g&&m("shell:modal_impression_event",{eventName:"webview_modal_impression",payload:{modalName:t}},`webview_modal_impression_${t}`),(0,d.tZ)(e,{modalContext:p})}return null}},36925:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>Z,h7:()=>g,sO:()=>h,zD:()=>m});var n=r(36151),i=r(91631),o=r(91931),a=r(17593),l=r(94579),s=r(53213),d=r(39141),c=r(69845),u=r(33990);const h=(0,o.zo)("div",(e=>{let{$theme:t,$isFullPopOver:r}=e;return{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:l.I_.modal,color:t.colors.contentPrimary,...r?t.overlays.full:{}}})),p=(0,o.zo)("div",(e=>{let{$theme:t,$rounded:r}=e;return{position:"absolute",left:0,right:0,bottom:0,maxHeight:"100%",overflowY:"auto",background:t.colors.backgroundPrimary,borderRadius:r?"16px 16px 0 0":0,overscrollBehaviorY:"contain"}})),g=(0,o.zo)("div",(e=>{let{$theme:t}=e;return{background:t.colors.backgroundPrimary,padding:"24px 16px 32px"}})),m=(0,o.zo)("div",(e=>{let{$theme:t}=e;return{background:t.colors.backgroundPrimary,padding:"24px 16px 32px",display:"flex",alignItems:"center",flexDirection:"column"}})),Z=e=>{const t=(0,n.useRef)(null),r=(0,i.k6)(),o="boolean"!=typeof e.isFullPopOver||e.isFullPopOver;(0,a.Z)(o);const l=e.handleClick,g=(0,n.useCallback)((e=>{if(e.target===e.currentTarget)return l?l():void r.goBack()}),[l,r]);(0,s.Z)(t,(()=>{e.onOutsideClick&&e.onOutsideClick()}),!0);const m=(0,n.useContext)(d.w);return(0,n.useEffect)((()=>{m?.isTakeOverModal,0}),[m?.isTakeOverModal]),(0,u.tZ)(h,{onClick:e=>g(e),$isFullPopOver:o,children:(0,u.tZ)(c.y,{meta:{popover_id:e.sceneId},children:(0,u.tZ)(p,{$rounded:e.rounded,ref:t,children:e.children})})})}},75907:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(39987),i=r(20924),o=r(54146),a=r(38777);const l=e=>{let{children:t,showFor:r}=e;const l=(0,n.Z)(),s=(0,o.Z)(),d=(0,i.Z)(),{isDelegatedBooking:c}=(0,a.W)(),u=Array.isArray(r)?r:[r].filter(Boolean);if(Boolean(l)&&0===u.length)return t;return u.some((e=>{switch(e){case"paypay":return d;case"appleMapsAppClip":return s;case"delegatedBooking":return c;default:return l===e}}))?t:null}},39141:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u,w:()=>c});var n=r(43193),i=r(47986),o=r(72843),a=r(94813),l=r(28463),s=r(33535),d=r(33990);const c=n.createContext(null);function u(e){let{modals:t,children:r}=e;const n=(0,a.TH)(),u=o.parse(n.search),h=u[i.FSm.modalName],p=String(h),g=u[i.FSm.modalContext]??"",m=h&&t[p]||null,Z=(0,l.h)(),v=(0,s.I0)();return m?(Z&&v("shell:modal_impression_event",{eventName:"webview_modal_impression",payload:{modalName:p}},`webview_modal_impression_${p}`),(0,d.tZ)(c.Provider,{value:{isTakeOverModal:!0},children:(0,d.tZ)(m,{modalContext:g})})):(0,d.tZ)(d.HY,{children:r})}},34832:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var n=r(94131),i=r(49235),o=r(60613),a=r(73489),l=r(98569),s=r(50291),d=r(79313),c=r(7695),u=r(33990);const h=e=>{let{cardCarousel:t,surface:r,verticalPosition:h,carouselItemsAnalyticsPayloads:p}=e;const g=t.template||"",{filteredItems:m,initialIndex:Z,onSlidesDisplayed:v,filteredAnalyticsPayloads:f}=(0,l.Z)(t.carouselItems||[],r,g,h,p);if(!m.length)return null;const b=(0,d.N)(t),y=(0,d.f)(b),x=1===m.length,k=x?0:i.yf,w=x?0:t.shouldAutoScroll&&r===n.cx.HOME_FEED_ITEM?y||4e3:0;return(0,u.tZ)(s.K2,{children:(0,u.tZ)(s.qY,{$centerPadding:i.Ub,children:(0,u.tZ)(o.Z,{autoScrollInterval:w,initialIndex:Z,slides:m,renderSlide:e=>{let{slide:t,carouselSlideProps:n}=e;return(0,u.tZ)(a.Z,{slides:m,template:g,slide:t,surface:r,verticalPosition:h,carouselSlideProps:n,eaterMessageStyles:(0,c.fG)(r,g),analyticsPayload:f[n.index]})},onSlidesDisplayed:v,margin:k,dotsType:"disabled",overflowVisible:!0,width:g===n._u.SMALL?i.Dg:100})})})};var p=r(36151),g=r(33535),m=r(88448),Z=r(97666),v=r(70327),f=r(44997);const b=e=>{let{cardItem:t,surface:r,verticalPosition:n}=e;const[i,o]=(0,p.useState)(!1),a=(0,g.ZP)(),{isLiveOrder:l}=(0,f.W)(),s=(0,p.useMemo)((()=>({uuid:t.uuid||"",trackingID:t.metadata?.trackingID||"",itemType:"cardItemPayload",verticalPosition:n})),[t.uuid,t.metadata?.trackingID,n]),d=(0,p.useMemo)((()=>({eaterMessage:{...s,surface:r}})),[s,r]);(0,p.useEffect)((()=>{a("eats:eater_message_view",d)}),[a,d]);const h=t.cardItem,b=e=>{e.stopPropagation(),e.preventDefault(),o(!0),a("eats:eater_message_dismiss",d)};switch(h?.type){case"systemBanner":{if(i||l)return null;const{systemBanner:e}=h,t=()=>(0,u.tZ)(Z.Z,{dismissAction:b,systemBanner:e,systemBannerStyles:(0,c.NI)().SYSTEM_BANNER});return(0,u.tZ)(v.Z,{messageKey:"system-banner",children:e.cta?.action?(0,u.tZ)(m.ZP,{linkStyleType:m.co.BANNER,action:e.cta.action,actionTrackingID:e.cta.trackingID||"",surface:r,analytics:s,onClick:null,children:t()}):t()})}}return null};var y=r(66292);const x=e=>{const{eaterMessage:{payload:t,surfaceId:r},feedIndex:n=0}=e,{impressionRef:i,carouselItemsAnalyticsPayloads:o}=(0,y.p)(e);if(!t)return null;let a=null;switch(t.type){case"cardCarousel":a=(0,u.tZ)(h,{cardCarousel:t.cardCarousel,surface:r||"",verticalPosition:n,carouselItemsAnalyticsPayloads:o});break;case"cardItemPayload":a=(0,u.tZ)(b,{cardItem:t.cardItemPayload,surface:r||"",verticalPosition:n})}return a?(0,u.tZ)("div",{ref:i,children:a}):null}},28463:(e,t,r)=>{"use strict";r.d(t,{h:()=>s});var n=r(94813),i=r(55758),o=r(68739),a=r(36151),l=r(61514);function s(){const e=(0,a.useContext)(o.GM),t=(0,o.G2)(l.rQ).from(e),r=t.getState().isEatsWebviewFeedEnabled,s=(0,i.d)(),d=(0,n.TH)(),c=t.isInWebviewScreen({pathname:d.pathname,diningMode:s});return r&&c}},52419:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(14016),i=r(91931),o=r(79908),a=r(60696),l=r(33535),s=r(28222),d=r(20464),c=r(34626),u=r(54669),h=r(51143),p=r(79857),g=r(14362),m=r(38777),Z=r(33990);const v=(0,i.zo)("button",{display:"flex",alignItems:"center",height:"24px",width:"24px",cursor:"pointer"}),f=()=>{const{isOpen:e,setIsOpen:t}=(0,h.qi)(),r=(0,n.T)(),i=(0,l.ZP)(),f=(0,p.Z)(),b=(0,s.Z)(),y=(0,d.Z)(),{user:x}=(0,c.Z)(),k=x.data?.isLoggedIn,w=(0,u.Z)(),_=!k&&!w,{isDelegatedBooking:C}=(0,m.W)(),$=(0,g.Z)();return b||y||C||$?null:(0,Z.tZ)(v,{"data-testid":"menu-button",onClick:()=>{t(!e),i(_?"eats:navigation_menu_seo_click":"eats:navigation_menu_click")},"aria-label":r("shared.main_navigation_menu"),children:f?(0,Z.tZ)(o.Z,{type:"Person"}):(0,Z.tZ)(a.Z,{size:20})})}},3954:(e,t,r)=>{"use strict";r.d(t,{E:()=>a,Q:()=>l});var n=r(71110),i=r(55811),o=r(91931);const a="#F2CA2F",l=e=>{const t=(0,i.Z)(),[,a]=(0,o.hQ)(),l="postmates"!==t&&!1!==a.miscellaneous.enableRebrand,s=e?{bgImage:(0,n.pZ)(r(9410)),backgroundColor:"#E2A257",trackingCode:"rebrand-mobile"}:{bgImage:(0,n.pZ)(r(19001)),backgroundColor:"#E2A257",trackingCode:"rebrand-desktop"};return{backgroundProps:l?s:null,logoUrl:l?(0,n.pZ)(r(96301)):null}}},29200:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var n=r(36151),i=r(91931),o=r(67206),a=r(24316),l=r(52246),s=r(94813),d=r(47986),c=r(31854),u=r(36278),h=r(83960),p=r(8690),g=r(29194),m=r(97415),Z=r(33535),v=r(32518),f=r(38777),b=r(70247),y=r(49373),x=r(34626),k=r(73472),w=r(65014),_=r(72179),C=r(33990);const $=(0,i.zo)("div",{display:"flex",alignItems:"center"}),I=(0,i.zo)(l.rU,(e=>{let{$theme:t,$isLoading:r}=e;return{...r?{...(0,o.Z)({$theme:t}),backgroundSize:"100vw 100%"}:{backgroundColor:t.colors.buttonPrimaryFill,padding:"10px 12px"},display:"flex",flexDirection:"row",alignItems:"center",cursor:"pointer",boxSizing:"border-box",height:"36px",borderRadius:t.borders.pillButtonBorderRadius,...t.typography.LabelSmall,lineHeight:"16px",color:t.colors.buttonPrimaryText}})),P=(0,i.zo)("div",(e=>{let{$theme:t,$direction:r}=e;return{width:"18px",height:"36px",background:`radial-gradient(circle at ${"ltr"===r?"100%":"0%"}, transparent 18px, ${t.colors.backgroundPrimary} 18px)`}})),z=(0,i.zo)("div",(e=>{let{$theme:t,$direction:r}=e;return{width:"18px",height:"36px",background:`radial-gradient(circle at ${"ltr"===r?"0%":"100%"}, transparent 18px, ${t.colors.backgroundPrimary} 18px)`}})),S=()=>{const{draftOrders:e,totalOrders:t,cartViews:r}=(0,a.Z)(),{isRepeatOrderCartView:i}=(0,p.Z)(),o=(0,s.TH)(),{isEditOrder:l}=(0,h.Z)(),S=(0,g.gm)(),B=(0,Z.ZP)(),{isDelegatedBooking:O}=(0,f.W)(),{user:L}=(0,x.Z)(),{serverCart:T}=(0,b.iQ)(),A=T.data?.items||[],R=(0,y.dH)(A),{startTiming:H}=(0,k.K3)(),{inCartSwitcherDraft:E}=(0,_.Z)(),D=(0,n.useCallback)((()=>{H(w.B.CART_PILL_CLICK),B("eats:cart_cta_click")}),[H,B]);if(l)return null;const N=1===t&&!(i(r[0])||(0,v.ed)(r[0])),M=0!==t&&!N&&!O||E?(0,d.vN_)(o,"multicartMobileSwitcher"):(0,d.nQQ)(o),U=L.data?.isLoggedIn?t:R;return(0,C.tZ)($,{children:(0,C.tZ)(I,{to:e.hasLoaded?M:"",$isLoading:!e.hasLoaded,"data-test-id":"view-carts-btn","data-test":"cart-btn",onClick:D,children:e.hasLoaded?(0,C.BX)(C.HY,{children:[(0,C.tZ)(c.Z,{size:16}),(0,C.tZ)(u.ZP,{$width:"8px"}),e.hasLoaded?U:null]}):(0,C.BX)(C.HY,{children:[(0,C.tZ)(P,{$direction:S}),(0,C.tZ)(m.CB,{$width:"24px"}),(0,C.tZ)(z,{$direction:S})]})})})}},82794:(e,t,r)=>{"use strict";r.d(t,{dD:()=>m,ZP:()=>v,d1:()=>Z});var n=r(43193),i=r(36151),o=r(91631),a=r(94813),l=r(74622),s=r(2237),d=r(62459),c=r(81436);var u=r(47986),h=r(40606),p=r(86255),g=r(33990);const m=n.createContext(null),Z=()=>(0,i.useContext)(m),v=e=>{let{children:t}=e;const r=(0,a.TH)(),{store:n}=(0,u.RAN)(r,["store"]),i=((0,o.LX)(r.pathname,"/:languageCountryPair?/brand/:slugName")||(0,o.LX)(r.pathname,"/:languageCountryPair?/closest/:slugName"))?.params?.slugName||"",Z=(0,o.LX)(r.pathname,u.Wif)?.params?.encodedStoreUuid||"",v=function(e,t){const r=(0,d.Z)("getOnlineOrderingCustomizationV1"),n=(0,l.useQueryClient)(),i=(0,s.H)("getOnlineOrderingCustomizationV1",e),o=(0,l.useQuery)({queryKey:i,queryFn:e=>{let{queryKey:t}=e;return r.request("getOnlineOrderingCustomizationV1",t[1])},...t?.queryObserverOptions}),a=Boolean(t.queryObserverOptions?.enabled??!0);return(0,c.Z)((()=>!o.isFetched&&a?n.prefetchQuery({queryKey:i,queryFn:e=>{let{queryKey:t}=e;return r.request("getOnlineOrderingCustomizationV1",t[1])}}):null),[o,r,i,n,a],t.preparedId,(0,l.hashQueryKey)(i)),o}({uuid:(0,p.Z)({encodedStoreUuid:Z})||n,brandSlug:i},{preparedId:"online-ordering-customization"});return(0,g.tZ)(h.a,{source:v,error:()=>(0,g.tZ)(m.Provider,{value:{customization:null},children:t}),loaded:e=>(0,g.tZ)(m.Provider,{value:{customization:e},children:t}),loading:()=>null})}},8690:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(94813),i=r(72843),o=r(12545),a=r(64282),l=r(58984),s=r(81219),d=r(47986),c=r(99233);const u=()=>{const e=(0,l.I0)(),t=(0,n.TH)(),r=(0,a._)(),u=i.parse(t.search);return{setActiveCartViewForRepeatOrder:e=>{const t=e?.metadata?.openRepeatOrderViewMetadata?.repeatOrderTemplateUUIDs||[];r.set("uev2.rgo",t)},isRepeatOrderCartView:e=>e?.action===o.DP.OPEN_REPEAT_ORDER_VIEW,repeatOrderTemplateUUIDs:r.get("uev2.rgo")||[],clearRepeatOrder:t=>{t&&e((0,s.uA)(t))},isRepeatGroupOrderEditing:u[d.FSm.goIntent]===c.$s.EDIT}}},57910:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(76792),i=r(33990);const o=e=>{const{preloadList:t}=e;return(0,i.tZ)(n.ql,{children:t.map((e=>(0,i.tZ)("link",{rel:"preload",href:e.href,as:e.contentType},e.href)))})}},10231:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(36151),i=r(91931),o=r(91631),a=r(14016),l=r(29194),s=r(94579),d=r(17593),c=r(19889),u=r(60696),h=r(33990);const p=(0,i.zo)("div",(e=>{let{$theme:t,$isOpen:r,$reverseDirection:n}=e;return{...t.overlays.full,width:r?"100%":0,height:r?"100%":0,flexDirection:n?"row-reverse":"row",position:"fixed",top:0,left:0,zIndex:s.I_.modal,display:"flex",overflowY:"hidden",WebkitOverflowScrolling:"touch",opacity:r?1:0,transition:r?"opacity 0.40s ease-in-out":"opacity 0.40s ease-in-out, width 0s 0.40s, height 0s 0.40s"}})),g=(0,i.zo)("div",(e=>{let{$theme:t,$isOpen:r,$slideRight:n}=e;return{...n?{transform:r?"translateX(0)":`translateX(calc(100vw + ${s.Ng}))`}:{transform:r?"translateX(0)":`translateX(-${s.Ng})`},opacity:r?1:0,backgroundColor:t.colors.backgroundPrimary,color:t.colors.onHeader,maxWidth:"80%",width:s.Ng,boxSizing:"border-box",boxShadow:"0px 0px 25px rgba(0, 0, 0, 0.1)",padding:"24px",flexDirection:"column",overflowY:"auto",overflowX:"hidden",transition:"all 0.40s ease-in-out"}})),m=(0,i.zo)("button",(e=>{let{$theme:t}=e;return{display:"flex",alignItems:"center",height:"24px",width:"24px",padding:"4px",cursor:"pointer",backgroundColor:t.colors.backgroundPrimary,color:t.colors.onHeader}})),Z=(0,i.zo)("a",(e=>{let{$theme:t}=e;return{...t.typography.LabelMedium,display:"block",paddingBottom:"24px"}})),v=e=>{let{drawerLinks:t}=e;const r=(0,o.k6)(),[i,s]=(0,n.useState)(!1);(0,d.Z)(i),(0,c.Z)((()=>s(!1))),(0,n.useEffect)((()=>r.listen((()=>{i&&s(!1)}))),[r,s,i]);const v=(0,l.gm)(),f=(0,a.T)();return 0===t.length?null:(0,h.BX)("div",{children:[(0,h.tZ)(m,{onClick:()=>s((e=>!e)),children:(0,h.tZ)(u.Z,{size:20})}),(0,h.tZ)(p,{onClick:e=>{e.target===e.currentTarget&&s(!1)},$isOpen:i,$reverseDirection:"rtl"===v,children:(0,h.tZ)(g,{$isOpen:i,$slideRight:"rtl"===v,children:i?(0,h.tZ)("div",{children:t.map(((e,t)=>(0,h.tZ)(Z,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.titleRosettaKey?f(`online_ordering.customization.nav_links.${e.titleRosettaKey}`):e.title},t)))}):null})})]})}},1798:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(97763),i=r(60849);function o(){return"enabled"===(0,i.qp)({...n.J.eats_web_admin_menu,defaultValue:"disabled"})}},42554:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(36151),i=r(15070),o=r(54669),a=r(33535),l=r(8639);function s(){const e=(0,o.Z)(),t=(0,i.v)((e=>{let{assets:t}=e;return t.enterAddressBackground})),r=t.trackingCode,s=(0,a.ZP)();return(0,n.useEffect)((()=>{e||s("eats:feed_enter_address_view",{backgroundTrackingCode:r})}),[s,e,r]),{shouldShowFeedEnterAddress:!e,enterAddressBackground:t,enterAddressContentColor:(0,l.RQ)(t.backgroundColor)?"black":"white"}}},91377:(e,t,r)=>{"use strict";function n(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>{t.forEach((t=>{"function"==typeof t?t(e):"object"==typeof t&&null!==t&&(t.current=e)}))}}r.d(t,{Z:()=>n})},96301:(e,t,r)=>{e.exports=r.p+"97c43f8974e6c876.svg"},19001:(e,t,r)=>{e.exports=r.p+"c413f20400e04805.webp"},9410:(e,t,r)=>{e.exports=r.p+"d8ceaf24a3164759.webp"}}]);