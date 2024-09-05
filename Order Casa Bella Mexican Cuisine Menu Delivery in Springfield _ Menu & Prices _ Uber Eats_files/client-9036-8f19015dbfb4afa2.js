(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[9036,50026],{92292:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var i=r(54706),n=r(33990);const a=()=>(0,n.tZ)(i.lk,{})},62027:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var i=r(91931),n=r(62091),a=r(71110),s=r(33990);const o=(0,i.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexDirection:"column",flexBasis:"50%",position:"relative",height:"auto",boxSizing:"border-box",cursor:"pointer",padding:t.sizing.scale300}})),l=(0,i.zo)("h2",(e=>{let{$theme:t}=e;return{...t.typography.ParagraphSmall,color:t.colors.primary600}})),d=(0,i.zo)("span",(e=>{let{$theme:t}=e;return{...t.typography.LabelSmall}})),c=(0,i.zo)(n.Z,{objectFit:"contain"}),u=(0,i.zo)("div",{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.02)"}),p=(0,i.zo)("div",(e=>{let{$theme:t}=e;return{position:"relative",borderRadius:t.borders.radius400,overflow:"hidden",display:"flex",justifyContent:"center"}})),h=(0,a.pZ)(r(19702)),g="148px",f=e=>{let{item:t,onProductSelect:r}=e;if(!t)return null;const i=t.imageURL||h;return(0,s.BX)(o,{onClick:r,children:[(0,s.BX)(p,{children:[(0,s.tZ)(c,{src:i,loading:"lazy",height:g,width:g}),(0,s.tZ)(u,{})]}),(0,s.tZ)(d,{children:t.formattedPrice}),(0,s.tZ)(l,{children:t.title})]})}},38349:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var i=r(91931),n=r(62091),a=r(89400),s=r(33990);const o=(0,i.zo)("div",{width:"100%"}),l=(0,i.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.HeadingSmall,marginBottom:t.sizing.scale550}})),d=(0,i.zo)("div",(e=>{let{$theme:t}=e;return{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",boxSizing:"border-box",cursor:"pointer",marginBottom:t.sizing.scale300}})),c=(0,i.zo)("div",{display:"flex",minWidth:0,width:"100%",flexWrap:"wrap"}),u=(0,i.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.ParagraphSmall,color:t.colors.contentSecondary,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",flexBasis:"100%"}})),p=(0,i.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.LabelMedium,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",flexBasis:"100%"}})),h=(0,i.zo)("div",(e=>{let{$theme:t}=e;return{width:"100%",minWidth:0,display:"flex",flexDirection:"column",alignItems:"start",flex:"1 1",marginRight:t.sizing.scale400}})),g=e=>{let{items:t,title:r,onProductSelect:g}=e;const[,f]=(0,i.hQ)();return(0,s.BX)(o,{children:[(0,s.tZ)(l,{children:r?.text}),t?.map((e=>(0,s.BX)(d,{onClick:()=>(e=>{const t={itemUUID:e.uuid,sectionUUID:e.sectionUuid,subsectionUUID:e.subsectionUuid,title:e.title,description:e.itemDescription,imageURL:e.imageUrl,price:e.price,formattedPrice:e.priceTagline?.text,...e};g(t)})(e),children:[(0,s.BX)(h,{children:[(0,s.tZ)(c,{children:(0,s.tZ)(p,{children:e.title})}),e.priceTagline?(0,s.tZ)(a.Z,{badge:e.priceTagline,baseFont:"ParagraphSmall"}):null,e.itemDescriptionBadge?(0,s.tZ)(c,{children:(0,s.tZ)(u,{children:e.itemDescription})}):null]}),e?.imageUrl?(0,s.tZ)(n.Z,{src:e.imageUrl,height:f.sizing.scale2400,width:f.sizing.scale2400}):null]},e.uuid)))]})}},22717:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var i=r(43193),n=r(62851),a=r("__fusion__914"),s=r(91931),o=r(36278),l=r(36151),d=r(73518),c=r(33990);function u(e,t){return(0,c.tZ)(d.Z,{viewBox:"0 0 20 20",ref:t,...e,children:(0,c.tZ)("path",{d:"M9.999.833A9.14 9.14 0 00.832 10a9.14 9.14 0 009.167 9.166A9.14 9.14 0 0019.165 10 9.14 9.14 0 0010 .833zm5 12.5L13.332 15l-3.333-3.334L6.665 15 5 13.333 8.332 10 4.999 6.666 6.665 5 10 8.333 13.332 5l1.667 1.666L11.665 10 15 13.333z"})})}const p=l.forwardRef(u);var h=r(14016),g=r(70401);const f=(0,s.w1)(n.U,(e=>{let{$theme:t}=e;return{display:"flex",alignItems:"center",borderRadius:t.borders.pillButtonBorderRadius,boxShadow:"none"}})),m=(0,s.zo)("input",(e=>({background:"transparent",flex:1,height:"100%",outline:"none","::placeholder":{...e.$theme.typography.ParagraphMedium,color:e.$theme.colors.contentSecondary,flex:1,textAlign:"left"}}))),y=e=>{let{setUserQuery:t}=e;const r=(0,h.T)(),n=i.useRef(null),s=(0,g.Z)((e=>{t(e.target.value)}),500);return(0,c.BX)(f,{children:[(0,c.tZ)(a.default,{size:"22px"}),(0,c.tZ)(o.Tr,{}),(0,c.tZ)(m,{placeholder:r("out_of_items.search_substitutes"),onChange:e=>s(e),"data-testid":"search-substitutions-input",maxLength:100,ref:n}),n?.current?(0,c.tZ)(p,{size:18,onClick:()=>(null!==n.current&&(n.current.value=""),void t(""))}):null]})}},48566:(e,t,r)=>{"use strict";r.d(t,{Z:()=>z});var i=r(36151),n=r(33535),a=r(58984),s=r(87696),o=r(21410),l=r(6703),d=r(92431),c=r(70605),u=r(24316),p=r(69630),h=r(50026),g=r(83960),f=r(74622),m=r(81219),y=r(53811),v=r(62459);var b=r(70247),Z=r(60239),x=r(38777),U=r(72179),O=r(64388);function z(e){const t=(0,n.ZP)(),r=(0,d.Z)(),{draftOrderUUID:z,bundleGroupUUID:I,mealPlanUUID:w,storeUUID:D=""}=(0,b.Dz)(),S=(0,a.I0)(),{discardDraftOrder:B}=(0,h.Z)(),{discardBundleGroup:R}=(()=>{const e="discardBundleGroup",t=(0,v.Z)(e),r=(0,f.useQueryClient)(),i=(0,a.I0)();return{discardBundleGroup:(0,f.useMutation)((r=>t.request(e,r)),{onMutate:async e=>{let{bundleGroupUUID:t,shouldRemoveDraftOrders:i}=e;i&&(await r.fetchQuery(y.x),r.setQueryData(y.x,(e=>({...e,...e.carts&&{carts:e.carts.filter((e=>e.metadata?.openCheckoutMetadata?.bundleGroupMetadata?.bundleGroupUUID!==t))}}))),r.removeQueries([,t]))},onSuccess:e=>{let{discardedDraftOrderUUIDs:t}=e;r.invalidateQueries(["getFeedDraftOrderItemsUpdateV1"]),t?.forEach((e=>i((0,m.yR)(e))))}}).mutateAsync}})(),{setActiveDraftOrder:$}=(0,u.Z)(),M=(0,p.Z)(),{isDraftOrderParticipant:P}=(0,g.Z)(),{isDelegatedBooking:C,firePostMessage:T}=(0,x.W)(),{isCartDrafting:_}=(0,U.Z)(),{store:Q}=(0,O.ZP)(D),k=Q?.data?.location?.locationType;return(0,i.useCallback)((async function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,n=arguments.length>1?arguments[1]:void 0;t("eats:clear_cart",{draftOrderUuid:z||"",source:e,isDrafting:_,locationType:k}),P?t("eats:invalid_clear_cart_participant_attempt",{draftOrderUuid:z||"",source:e}):(C&&T({type:Z.Mp.CART_REMOVED,payload:{draftOrderUuid:z}}),i&&S((0,l.e7)(i)),M&&z?(I?R({bundleGroupUUID:I,shouldRemoveDraftOrders:!0}):B({draftOrderUUIDs:[z],repeatOrderTemplateUUID:n,mealPlanUUID:w,storeUUID:i}),$()):(B({draftOrderUUIDs:[z],storeUUID:i}),(0,s.cX)(r),S((0,c.zc)()),S((0,o.B9)())))}),[t,z,e,_,M,S,P,I,$,R,B,w,r,C,T,D,k])}},75161:(e,t,r)=>{"use strict";r.d(t,{u_:()=>m});var i=r(36151),n=r(56899),a=r(84089),s=r(92300),o=r(37771),l=r(12675),d=r(91931),c=r(15070),u=r(26034),p=r(87444),h=r(5639),g=r(33990);const f=s.aO;function m(e){const[,t]=(0,d.hQ)(),r=(0,p.Z)("modal_dialog_redesign_enabled"),{isMobile:m}=(0,h.hU)(),{children:y,...v}=function(e,t,r){const{overrides:i,...a}=e,o=a;let l={};return l=f(l,{Dialog:{style:{display:"flex",flexDirection:"column",alignItems:"stretch",marginTop:o.size===n.NO.full?0:"80px",marginBottom:o.size===n.NO.full?0:"80px",marginLeft:0,marginRight:0,...r?.isModalV2&&!r?.isMobile?{contain:"paint"}:{borderTopLeftRadius:0,borderTopRightRadius:0,borderBottomRightRadius:0,borderBottomLeftRadius:0},background:o.$isBackgroundTransparent?"transparent":t.colors.backgroundPrimary}},Close:{style:{display:"none"}}}),i&&(l=(0,s.aO)(l,i)),{...o,overrides:l}}(e,t,{isModalV2:r,isMobile:m}),b=(0,c.v)((e=>{let{embeddedFeatures:t}=e;return t})),{sentinelHidden:Z,sentinelRef:x}=(0,o.U)(),U=i.useMemo((()=>({isModalTitleHidden:Z,modalTitleRef:x})),[Z,x]);return(0,g.tZ)(l.t.Provider,{value:U,children:(0,g.tZ)(a.Z,{...v,children:(0,g.BX)(g.HY,{children:[b.xlbHeaderBridge?(0,g.tZ)(u.Z,{}):null,y]})})})}m.defaultProps={...a.Z.defaultProps,isOpen:!0,autoFocus:!1}},12675:(e,t,r)=>{"use strict";r.d(t,{t:()=>n,v:()=>a});var i=r(36151);const n=(0,i.createContext)({isModalTitleHidden:!1,modalTitleRef:null});function a(){const e=(0,i.useContext)(n);if(null!==e)return e;throw Error("You should use useModalContext only within components wrapped within <Modal>")}},4909:(e,t,r)=>{"use strict";r.d(t,{V:()=>s});var i=r(86695),n=r(68065),a=r(33990);function s(e){return(0,a.tZ)(i.zx,{size:n.NO.large,isFullWidth:!0,...e})}},33259:(e,t,r)=>{"use strict";r.d(t,{_Z:()=>d,ay:()=>u,hQ:()=>c});var i=r(86695),n=r(68065),a=r("__fusion__567"),s=r("__fusion__1019"),o=r(14016),l=r(33990);function d(e){const{overrides:t,...r}=e;return(0,l.tZ)(i.zx,{shape:n.X3.circle,kind:i.TO.monochromatic,...r,children:e.children})}function c(e){const t=(0,o.T)();return(0,l.tZ)(d,{"aria-label":t("close"),title:t("close"),...e,children:(0,l.tZ)(s.default,{size:16,title:t("close")})})}function u(e){const t=(0,o.T)();return(0,l.tZ)(d,{"aria-label":t("back"),title:t("shared.goBack"),...e,children:(0,l.tZ)(a.default,{size:16,title:t("back")})})}},91086:(e,t,r)=>{"use strict";r.d(t,{Cx:()=>h,P8:()=>m,iQ:()=>d,rY:()=>l,sQ:()=>p,xB:()=>v});var i=r(36151),n=r(91931),a=r(15070),s=r(12675),o=r(33990);const l={floatingOnceScrolled:"floatingOnceScrolled",floating:"floating",static:"static"},d=(0,n.zo)("div",(e=>{let{$floatingMode:t}=e;return t===l.floatingOnceScrolled||t===l.floating?{position:"sticky",top:0,zIndex:1}:{position:"relative"}})),c=(0,n.zo)("div",{position:"absolute",width:"100%"}),u=(0,n.zo)("div",(e=>{let{$isExpanded:t,$showHeaderShadowOnExpanded:r,$theme:i}=e;return{position:"absolute",top:0,bottom:0,width:"100%",display:"flex",alignItems:"center",backgroundColor:i.colors.backgroundPrimary,boxShadow:t&&r?i.shadows.divider:void 0,transition:"transform 300ms ease, opacity 300ms ease",transform:t?"scale(1, 1)":"scale(1, 0)",transformOrigin:"top",opacity:t?1:0}})),p=(0,n.zo)("div",(e=>{let{$theme:t}=e;return{position:"relative",display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"center",justifyContent:"space-between",width:"100%",paddingLeft:t.sizing.scale300,paddingRight:t.sizing.scale300,paddingTop:t.sizing.scale300,paddingBottom:t.sizing.scale300,boxSizing:"border-box"}})),h=(0,n.zo)("div",(e=>{let{$isExpanded:t,$theme:r}=e;return{...r.typography.LabelLarge,flex:1,textAlign:"center",marginLeft:r.sizing.scale200,marginRight:r.sizing.scale200,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",transition:"transform 300ms ease, opacity 300ms ease",transform:t?"translateY(0)":`translateY(-${r.sizing.scale100})`,opacity:t?1:0}})),g=h,f=(0,n.zo)("div",{display:"grid",gridTemplateAreas:"\n  'title'\n  'subtitle'"}),m=(0,n.zo)("div",{justifySelf:"left"}),y=(0,n.zo)("div",{justifySelf:"right"});function v(e){const{canExpand:t=!0,showHeaderShadowOnExpanded:r=!0,hideHeaderOnEmbeddedApp:n=!0,floatingMode:v="floatingOnceScrolled",children:b,title:Z,subtitle:x}=e,{isModalTitleHidden:U}=(0,s.v)();let O;O=void 0!==e.isExpanded?e.isExpanded:U;const z=v===l.floating?c:i.Fragment,I=(0,a.v)((e=>{let{embeddedFeatures:t}=e;return t}));if(n&&I.xlbHeaderBridge)return null;const w=!!t&&O;return(0,o.tZ)(d,{$floatingMode:v,children:(0,o.BX)(z,{children:[t?(0,o.tZ)(u,{$isExpanded:O,$showHeaderShadowOnExpanded:r}):null,(0,o.tZ)(p,{children:b||(0,o.BX)(o.HY,{children:[(0,o.tZ)(m,{children:e.leftButton}),(0,o.BX)(f,{children:[(0,o.tZ)(h,{$isExpanded:w,children:Z}),(0,o.tZ)(g,{$isExpanded:w,children:x})]}),(0,o.tZ)(y,{children:e.rightButton})]})})]})})}},37771:(e,t,r)=>{"use strict";r.d(t,{P:()=>o,U:()=>l});var i=r(75514),n=r(36151);const a=r(14628).G2.test(i.Z?.navigator.userAgent||""),s=()=>!a&&i.Z?.IntersectionObserver,o={above:"above",below:"below",either:"either"};function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{detectionMode:t=o.above}=e,r=n.useRef(null),[a,l]=n.useState(!1),d=e=>{if(s())if(e){if(r.current&&r.current.disconnect(),!i.Z)return;r.current=new i.Z.IntersectionObserver((e=>{let[r]=e;t===o.above?l(!r.isIntersecting&&r.boundingClientRect.top<0):t===o.below?l(!r.isIntersecting&&r.boundingClientRect.top>0):l(!r.isIntersecting)}),{threshold:[1]}),r.current&&r.current.observe(e)}else r.current&&r.current.disconnect()};return{sentinelHidden:a,sentinelRef:d}}},50026:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var i=r(74622),n=r(53811),a=r(38172),s=r(594),o=r(33535),l=r(71576),d=r(19759),c=r(87750),u=r(27871),p=r(24316),h=r(81219),g=r(15070),f=r(58984),m=r(70605),y=r(6703),v=r(96729),b=r(73472),Z=r(65014);function x(){const{notifyDiscardedOrder:e}=(0,v.F)(),{setActiveDraftOrder:t,activeDraftOrderUUID:r}=(0,p.Z)(),x=(0,g.v)((e=>e.draftOrders.draftOrders)),U=(0,c.B)(),{dataKey:O}=(0,u.CK)(),z="discardDraftOrdersV1",I=(0,l.Z)(z),w=(0,d.m6)(z),D=(0,i.useQueryClient)(),S=(0,f.I0)(),B=(0,o.ZP)(),R=(0,s.M)(),{stopTiming:$}=(0,b.K3)();return{discardDraftOrder:(0,i.useMutation)({mutationFn:I,onMutate:e=>{let{draftOrderUUIDs:t,bundleGroupUUID:i}=e;D.cancelQueries(n.x);const a=D.getQueryData(n.x);if(a&&D.setQueryData(n.x,{...a,carts:a.carts.filter((e=>!t.includes(e.draftOrderUUID)))}),t.forEach((e=>D.removeQueries([,e]))),i&&D.setQueryData(O,(e=>{const r=e?.checkoutPayloads?.cartItems;return r?.cartItemsGroups&&(r.cartItemsGroups=r.cartItemsGroups.filter((e=>{let{draftOrderUUID:r}=e;return r&&!t.includes(r)}))),e})),t.forEach((e=>S((0,h.yR)(e)))),t.includes(r)){const e=x.data?.[r];S((0,m.zc)()),S((0,y.e7)(e?.data?.draftOrder?.storeUuid||""))}},onSuccess:(r,i)=>{let{draftOrders:n}=r,{repeatOrderTemplateUUID:s,bundleGroupUUID:o,mealPlanUUID:l,storeUUID:d}=i;if($(`${Z.B.CLEAR_CART}_${d}`,{shouldEmitTiming:!0,overrideLabelFn:()=>Z.B.CLEAR_CART}),e({storeId:d??""}),o){const e=1===n?.length?n?.[0]:n?.find((e=>"PRIMARY"===e.bundleGroupInfo?.bundleGroupRole));e&&t(e.uuid),U({cartViews:!0,checkoutPresentation:!0})}B(w,R),D.invalidateQueries(["getFeedDraftOrderItemsUpdateV1"]),s&&D.invalidateQueries((0,a.NK)(s),{refetchInactive:!0}),l&&(D.invalidateQueries(["getMealPlanOrdersViewV1",{mealPlanUUID:l}]),U({cartViews:!0}))},onError:e=>{B(w,{...R,error:e})}}).mutateAsync}}},30110:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var i=r(71110),n=r(46933),a=r(91931),s=r(34567),o=r(62091),l=r(33990);const d=(0,a.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexDirection:"column",padding:`${t.sizing.scale1400} ${t.sizing.scale600} ${t.sizing.scale1600}`,alignItems:"center",maxWidth:"624px",margin:"0 auto"}})),c=(0,a.zo)("div",(e=>{let{$theme:t}=e;return{width:"226px",paddingBottom:t.sizing.scale1400,transition:"transform 50ms ease-in-out"}})),u=(0,a.zo)(o.Z,{width:"100%",height:"100%"}),p=(0,a.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.DisplayXSmall,textAlign:"center",paddingBottom:t.sizing.scale300}})),h=(0,a.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.ParagraphMedium,paddingBottom:t.sizing.scale800,textAlign:"center"}})),g=e=>{let{refetch:t}=e;return(0,l.BX)(d,{children:[(0,l.tZ)(c,{children:(0,l.tZ)(u,{src:(0,i.pZ)(r(11731))})}),(0,l.tZ)(p,{children:(0,l.tZ)(n.v,{id:"components.feedtryagain.error"})}),(0,l.tZ)(h,{children:(0,l.tZ)(n.v,{id:"shared.somethingWentWrong"})}),(0,l.tZ)(s.Z,{onClick:t,children:(0,l.tZ)(n.v,{id:"shared.retry"})})]})}},1636:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var i=r(71110),n=r(46933),a=r(91931),s=r(62091),o=r(33990);const l=(0,a.zo)("div",(e=>{let{$theme:t}=e;return{display:"flex",flexDirection:"column",padding:`${t.sizing.scale1400} ${t.sizing.scale600} ${t.sizing.scale1600}`,alignItems:"center",maxWidth:"624px",margin:"0 auto"}})),d=(0,a.zo)("div",(e=>{let{$theme:t}=e;return{width:"226px",paddingBottom:t.sizing.scale1400,transition:"transform 50ms ease-in-out"}})),c=(0,a.zo)(s.Z,{width:"100%",height:"100%"}),u=(0,a.zo)("div",(e=>{let{$theme:t}=e;return{...t.typography.HeadingXSmall,textAlign:"center",paddingBottom:t.sizing.scale300}})),p=e=>{let{userQuery:t}=e;return(0,o.BX)(l,{children:[(0,o.tZ)(d,{children:(0,o.tZ)(c,{src:(0,i.pZ)(r(44764))})}),(0,o.tZ)(u,{children:(0,o.tZ)(n.v,{id:"component.feedEmptyState.search.title",data:{userQuery:t}})})]})}},25598:(e,t,r)=>{"use strict";r.d(t,{o:()=>s});var i=r(74622),n=r(2237),a=r(62459);function s(e,t){const r=(0,a.Z)("getSearchSubstitutionsV1"),s={queryKey:(0,n.H)("getSearchSubstitutionsV1",e),queryFn:e=>{let{queryKey:t}=e;return r.request("getSearchSubstitutionsV1",t[1])}};t&&t.queryObserverOptions&&Object.assign(s,t.queryObserverOptions);const o=(0,i.useQuery)(s);let l=null,d=!1;const c=[];if(o.isSuccess&&o?.data?.catalogSectionsMap){const e=Object.keys(o?.data?.catalogSectionsMap);d=e.length>0,d&&(l=e.flatMap((e=>o?.data?.catalogSectionsMap?.[e])),l.forEach((e=>{const t=e.payload;"standardItemsPayload"===t.type&&c.push({items:t.standardItemsPayload?.catalogItems,title:t.standardItemsPayload?.title})})))}return{isLoading:o.isLoading,isError:o.isError,catalogSections:c,hasResults:d,refetch:o.refetch}}},38172:(e,t,r)=>{"use strict";r.d(t,{NK:()=>c,IG:()=>d,ci:()=>u});var i=r(74622),n=r(2237),a=r(62459),s=r(81436);function o(e,t){return!e.isFetched&&(t?.enabled??!0)}var l=r(34626);const d=["getRepeatOrderViewV1"],c=e=>[...d,{repeatOrderTemplateUUIDs:[e]}],u=(e,t)=>{const{refetchInterval:r,...d}=t??{},{user:c}=(0,l.Z)();return function(e,t){const r=(0,a.Z)("getRepeatOrderViewV1"),l=(0,i.useQueryClient)(),d=(0,n.H)("getRepeatOrderViewV1",e),c=(0,i.useQuery)({queryKey:d,queryFn:e=>{let{queryKey:t}=e;return r.request("getRepeatOrderViewV1",t[1])},...t?.queryObserverOptions});return(0,s.Z)((()=>(t.ssrPredicate||o)(c,t.queryObserverOptions)?l.prefetchQuery({queryKey:d,queryFn:e=>{let{queryKey:t}=e;return r.request("getRepeatOrderViewV1",t[1])}}):null),[c,r,d,l,t.queryObserverOptions,t.ssrPredicate],t.preparedId,(0,i.hashQueryKey)(d)),c}(e,{preparedId:"get-repeat-order-view",queryObserverOptions:{refetchOnMount:"always",enabled:Boolean(e.repeatOrderTemplateUUIDs.length)&&c.data?.isLoggedIn,refetchInterval:(e,t)=>"401"!==t.state?.error?.code&&(e?.loadingState?.isLoading?e?.loadingState.reloadInMs.low:r||!1),...d}})}},47162:(e,t,r)=>{"use strict";r.d(t,{v:()=>s});var i=r(74622),n=r(2237),a=r(62459);function s(e,t){const r=(0,a.Z)("getItemSubstitutionsV1"),s=(0,n.H)("getItemSubstitutionsV1",e);return(0,i.useQuery)({queryKey:s,queryFn:e=>{let{queryKey:t}=e;return r.request("getItemSubstitutionsV1",t[1])},...t?.queryObserverOptions})}},44764:(e,t,r)=>{e.exports=r.p+"f601b8be1064c30a.svg"}}]);