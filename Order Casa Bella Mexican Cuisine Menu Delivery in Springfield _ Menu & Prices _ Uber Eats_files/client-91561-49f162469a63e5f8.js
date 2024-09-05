"use strict";(self.webpackChunkFusion=self.webpackChunkFusion||[]).push([[91561],{62851:(e,t,n)=>{n.d(t,{U:()=>i});const i=(0,n(91931).zo)("div",(e=>({...e.$theme.typography.ParagraphMedium,padding:"12px 16px",border:"none",backgroundColor:e.$theme.colors.inputFill,color:e.$theme.colors.inputText,minWidth:"100%",boxSizing:"border-box",boxShadow:e.$hasError?`inset 0px -1px 0px ${e.$theme.colors.negative}`:e.$theme.shadows.unfocusedInput,transition:"box-shadow 0.3s ease-in-out"})))},41497:(e,t,n)=>{n.d(t,{Z:()=>ee});var i=n(36151),r=n(14016),o=n(68093),u=n(71076),s=n(89073),a=n(7283),l=n(89638),c=n.n(l);function d(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function h(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function g(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return h(n.overflowY,t)||h(n.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function f(e,t,n,i,r,o,u,s){return o<e&&u>t||o>e&&u<t?0:o<=e&&s<=n||u>=t&&s>=n?o-e-i:u>t&&s<n||o<e&&s>n?u-t+r:0}function p(e,t){null!==e&&function(e,t){var n=window,i=t.scrollMode,r=t.block,o=t.inline,u=t.boundary,s=t.skipOverflowHiddenElements,a="function"==typeof u?u:function(e){return e!==u};if(!d(e))throw new TypeError("Invalid target");for(var l=document.scrollingElement||document.documentElement,c=[],h=e;d(h)&&a(h);){if((h=h.parentElement)===l){c.push(h);break}null!=h&&h===document.body&&g(h)&&!g(document.documentElement)||null!=h&&g(h,s)&&c.push(h)}for(var p=n.visualViewport?n.visualViewport.width:innerWidth,m=n.visualViewport?n.visualViewport.height:innerHeight,v=window.scrollX||pageXOffset,I=window.scrollY||pageYOffset,y=e.getBoundingClientRect(),b=y.height,x=y.width,w=y.top,E=y.right,O=y.bottom,M=y.left,k="start"===r||"nearest"===r?w:"end"===r?O:w+b/2,C="center"===o?M+x/2:"end"===o?E:M,S=[],T=0;T<c.length;T++){var V=c[T],L=V.getBoundingClientRect(),D=L.height,R=L.width,K=L.top,A=L.right,Z=L.bottom,F=L.left;if("if-needed"===i&&w>=0&&M>=0&&O<=m&&E<=p&&w>=K&&O<=Z&&M>=F&&E<=A)return S;var P=getComputedStyle(V),N=parseInt(P.borderLeftWidth,10),H=parseInt(P.borderTopWidth,10),B=parseInt(P.borderRightWidth,10),W=parseInt(P.borderBottomWidth,10),$=0,Q=0,q="offsetWidth"in V?V.offsetWidth-V.clientWidth-N-B:0,j="offsetHeight"in V?V.offsetHeight-V.clientHeight-H-W:0;if(l===V)$="start"===r?k:"end"===r?k-m:"nearest"===r?f(I,I+m,m,H,W,I+k,I+k+b,b):k-m/2,Q="start"===o?C:"center"===o?C-p/2:"end"===o?C-p:f(v,v+p,p,N,B,v+C,v+C+x,x),$=Math.max(0,$+I),Q=Math.max(0,Q+v);else{$="start"===r?k-K-H:"end"===r?k-Z+W+j:"nearest"===r?f(K,Z,D,H,W+j,k,k+b,b):k-(K+D/2)+j/2,Q="start"===o?C-F-N:"center"===o?C-(F+R/2)+q/2:"end"===o?C-A+B+q:f(F,A,R,N,B+q,C,C+x,x);var U=V.scrollLeft,_=V.scrollTop;k+=_-($=Math.max(0,Math.min(_+$,V.scrollHeight-D+j))),C+=U-(Q=Math.max(0,Math.min(U+Q,V.scrollWidth-R+q)))}S.push({el:V,top:$,left:Q})}return S}(e,{boundary:t,block:"nearest",scrollMode:"if-needed"}).forEach((function(e){var t=e.el,n=e.top,i=e.left;t.scrollTop=n,t.scrollLeft=i}))}function m(e,t){return e===t||e.contains&&e.contains(t)}function v(e,t){var n;function i(){n&&clearTimeout(n)}function r(){for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];i(),n=setTimeout((function(){n=null,e.apply(void 0,o)}),t)}return r.cancel=i,r}function I(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return t.some((function(t){return t&&t.apply(void 0,[e].concat(i)),e.preventDownshiftDefault||e.hasOwnProperty("nativeEvent")&&e.nativeEvent.preventDownshiftDefault}))}}function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){"function"==typeof t?t(e):t&&(t.current=e)}))}}function b(e,t){return Object.keys(e).reduce((function(n,i){return n[i]=x(t,i)?t[i]:e[i],n}),{})}function x(e,t){return void 0!==e[t]}function w(e){var t=e.key,n=e.keyCode;return n>=37&&n<=40&&0!==t.indexOf("Arrow")?"Arrow"+t:t}function E(e,t,n,i,r){void 0===r&&(r=!0);var o=n-1;("number"!=typeof t||t<0||t>=n)&&(t=e>0?-1:o+1);var u=t+e;u<0?u=r?o:0:u>o&&(u=r?0:o);var s=O(e,u,n,i,r);return-1===s?t:s}function O(e,t,n,i,r){var o=i(t);if(!o||!o.hasAttribute("disabled"))return t;if(e>0){for(var u=t+1;u<n;u++)if(!i(u).hasAttribute("disabled"))return u}else for(var s=t-1;s>=0;s--)if(!i(s).hasAttribute("disabled"))return s;return r?e>0?O(1,0,n,i,!1):O(-1,n-1,n,i,!1):-1}function M(e,t,n,i,r){return void 0===r&&(r=!0),[t,n].some((function(t){return t&&(m(t,e)||r&&m(t,i.activeElement))}))}var k=v((function(){S().textContent=""}),500);function C(e,t){var n=S(t);e&&(n.textContent=e,k())}function S(e){void 0===e&&(e=document);var t=e.getElementById("a11y-status-message");return t||((t=e.createElement("div")).setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}var T={highlightedIndex:-1,isOpen:!1,selectedItem:null};function V(e,t){var n=void 0===t?{}:t,i=n.id,r=n.labelId,o=n.menuId,u=n.getItemId,s=n.toggleButtonId,a=void 0===i?"downshift-"+e():i;return{labelId:r||a+"-label",menuId:o||a+"-menu",getItemId:u||function(e){return a+"-item-"+e},toggleButtonId:s||a+"-toggle-button"}}function L(e,t,n){return void 0!==e?e:0===n.length?-1:n.indexOf(t)}function D(e){return""+e.slice(0,1).toUpperCase()+e.slice(1)}function R(e,t,n){Object.keys(t).forEach((function(i){!function(e,t,n,i){var r="on"+D(e)+"Change";t[r]&&void 0!==i[e]&&i[e]!==n[e]&&t[r](i)}(i,e,t,n)})),e.onStateChange&&void 0!==n&&e.onStateChange(n)}function K(e,t,n){var r=(0,i.useCallback)((function(t,n){t=b(t,n.props);var i=n.props.stateReducer,r=e(t,n),o=i(t,(0,a.Z)({},n,{changes:r}));return R(n.props,t,o),o}),[e]),o=(0,i.useReducer)(r,t),u=o[0],s=o[1];return[b(u,n),s]}var A=0;function Z(){var e=(0,i.useState)(null),t=e[0],n=e[1];return(0,i.useEffect)((function(){return n(++A)}),[]),t}function F(e,t){return!!t&&(e.relatedTarget===t||e.nativeEvent&&(t===e.nativeEvent.explicitOriginalTarget||t.contains(e.nativeEvent.explicitOriginalTarget)))}var P={itemToString:function(e){return e?String(e):""},stateReducer:function(e,t){return t.changes},getA11yStatusMessage:function(e){var t=e.isOpen,n=e.items;if(!n)return"";var i=n.length;return t?0===i?"No results are available":i+" result"+(1===i?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":""},getA11ySelectionMessage:function(e){var t=e.selectedItem;return(0,e.itemToString)(t)+" has been selected."},scrollIntoView:p,circularNavigation:!1,environment:"undefined"==typeof window?{}:window};function N(e,t,n){var i="default"+D(t);return i in e?e[i]:(0,a.Z)({},T,{},n)[t]}function H(e,t,n){if(t in e)return e[t];var i="initial"+D(t);return i in e?e[i]:N(e,t,n)}function B(e,t,n,i){var r=e.items,o=e.initialHighlightedIndex,u=e.defaultHighlightedIndex,s=t.selectedItem,a=t.highlightedIndex;return void 0!==o&&a===o?o:void 0!==u?u:s?0===n?r.indexOf(s):E(n,r.indexOf(s),r.length,i,!1):0===n?-1:n<0?r.length-1:0}c().array.isRequired,c().func,c().func,c().func,c().bool,c().number,c().number,c().number,c().bool,c().bool,c().bool,c().any,c().any,c().any,c().string,c().string,c().string,c().func,c().string,c().func,c().func,c().func,c().func,c().func,c().shape({addEventListener:c().func,removeEventListener:c().func,document:c().shape({getElementById:c().func,activeElement:c().any,body:c().any})});var W={inputValue:""};function $(e,t){return N(e,t,W)}function Q(e,t){return H(e,t,W)}c().array.isRequired,c().func,c().func,c().func,c().bool,c().number,c().number,c().number,c().bool,c().bool,c().bool,c().any,c().any,c().any,c().string,c().string,c().string,c().string,c().string,c().string,c().func,c().string,c().string,c().func,c().func,c().func,c().func,c().func,c().func,c().shape({addEventListener:c().func,removeEventListener:c().func,document:c().shape({getElementById:c().func,activeElement:c().any,body:c().any})});var q=(0,a.Z)({},P,{circularNavigation:!0}),j=Object.freeze({__proto__:null,InputKeyDownArrowDown:0,InputKeyDownArrowUp:1,InputKeyDownEscape:2,InputKeyDownHome:3,InputKeyDownEnd:4,InputKeyDownEnter:5,InputChange:6,InputBlur:7,MenuMouseLeave:8,ItemMouseMove:9,ItemClick:10,ToggleButtonClick:11,FunctionToggleMenu:12,FunctionOpenMenu:13,FunctionCloseMenu:14,FunctionSetHighlightedIndex:15,FunctionSelectItem:16,FunctionSetInputValue:17,FunctionReset:18});function U(e,t){var n,i=t.type,r=t.props,o=t.shiftKey;switch(i){case 9:n={highlightedIndex:t.index};break;case 10:n={isOpen:$(r,"isOpen"),highlightedIndex:$(r,"highlightedIndex"),selectedItem:r.items[t.index],inputValue:r.itemToString(r.items[t.index])};break;case 0:n=e.isOpen?{highlightedIndex:E(o?5:1,e.highlightedIndex,r.items.length,t.getItemNodeFromIndex,r.circularNavigation)}:{highlightedIndex:B(r,e,1,t.getItemNodeFromIndex),isOpen:!0};break;case 1:n=e.isOpen?{highlightedIndex:E(o?-5:-1,e.highlightedIndex,r.items.length,t.getItemNodeFromIndex,r.circularNavigation)}:{highlightedIndex:B(r,e,-1,t.getItemNodeFromIndex),isOpen:!0};break;case 5:n=(0,a.Z)({},e.highlightedIndex>=0&&{selectedItem:r.items[e.highlightedIndex],isOpen:$(r,"isOpen"),highlightedIndex:$(r,"highlightedIndex"),inputValue:r.itemToString(r.items[e.highlightedIndex])});break;case 2:n={isOpen:!1,selectedItem:null,highlightedIndex:-1,inputValue:""};break;case 3:n={highlightedIndex:O(1,0,r.items.length,t.getItemNodeFromIndex,!1)};break;case 4:n={highlightedIndex:O(-1,r.items.length-1,r.items.length,t.getItemNodeFromIndex,!1)};break;case 7:n=(0,a.Z)({isOpen:!1},e.highlightedIndex>=0&&{selectedItem:r.items[e.highlightedIndex],inputValue:r.itemToString(r.items[e.highlightedIndex]),highlightedIndex:-1});break;case 6:n={isOpen:!0,highlightedIndex:$(r,"highlightedIndex"),inputValue:t.inputValue};break;case 8:n={highlightedIndex:-1};break;case 11:case 12:n={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:B(r,e,0)};break;case 13:n={isOpen:!0,highlightedIndex:B(r,e,0)};break;case 14:n={isOpen:!1};break;case 15:n={highlightedIndex:t.highlightedIndex};break;case 16:n={selectedItem:t.selectedItem};break;case 17:n={inputValue:t.inputValue};break;case 18:n={highlightedIndex:$(r,"highlightedIndex"),isOpen:$(r,"isOpen"),selectedItem:$(r,"selectedItem"),inputValue:$(r,"inputValue")};break;default:throw new Error("Reducer called without proper action type.")}return(0,a.Z)({},e,{},n)}function _(e){void 0===e&&(e={});var t=(0,a.Z)({},q,{},e),n=t.initialIsOpen,r=t.defaultIsOpen,o=t.items,u=t.scrollIntoView,l=t.getA11ySelectionMessage,c=t.getA11yStatusMessage,d=t.itemToString,h=t.environment,g=K(U,function(e){var t=Q(e,"selectedItem"),n=Q(e,"isOpen"),i=Q(e,"highlightedIndex"),r=Q(e,"inputValue");return""===r&&t&&void 0===e.defaultInputValue&&void 0===e.initialInputValue&&void 0===e.inputValue&&(r=e.itemToString(t)),{highlightedIndex:i<0&&t?e.items.indexOf(t):i,isOpen:n,selectedItem:t,inputValue:r}}(t),t),f=g[0],p=f.isOpen,m=f.highlightedIndex,v=f.selectedItem,b=f.inputValue,x=g[1],E=function(e){return x((0,a.Z)({props:t},e))},O=function(e,t){var n=void 0===t?{}:t,i=n.id,r=n.inputId,o=(0,s.Z)(n,["id","inputId"]),u=void 0===i?"downshift-"+e():i;return(0,a.Z)({inputId:r||u+"-input"},V(e,(0,a.Z)({id:i},o)))}(Z,t),k=O.labelId,S=O.getItemId,T=O.menuId,D=O.toggleButtonId,R=O.inputId,A=(0,i.useRef)(null),P=(0,i.useRef)(),N=(0,i.useRef)(null),H=(0,i.useRef)(null),B=(0,i.useRef)(null);P.current=[];var W=(0,i.useRef)(!0),$=(0,i.useRef)(!0),j=(0,i.useRef)({isMouseDown:!1,isTouchMove:!1});(0,i.useEffect)((function(){$.current||C(c({isOpen:p,items:o,selectedItem:v,itemToString:d,inputValue:b}),h.document)}),[p]),(0,i.useEffect)((function(){$.current||C(l({isOpen:p,items:o,selectedItem:v,itemToString:d,inputValue:b}),h.document)}),[v]),(0,i.useEffect)((function(){m<0||!p||!P.current.length||(!1===W.current?W.current=!0:u(P.current[m],A.current))}),[m]),(0,i.useEffect)((function(){$.current?(n||r||p)&&N.current.focus():p&&N.current.focus()}),[p]),(0,i.useEffect)((function(){$.current=!1}),[]),(0,i.useEffect)((function(){var e=function(){j.current.isMouseDown=!0},t=function(e){j.current.isMouseDown=!1,p&&!M(e.target,B.current,A.current,h.document)&&E({type:7})},n=function(){j.current.isTouchMove=!1},i=function(){j.current.isTouchMove=!0},r=function(e){!p||j.current.isTouchMove||M(e.target,B.current,A.current,h.document,!1)||E({type:7})};return h.addEventListener("mousedown",e),h.addEventListener("mouseup",t),h.addEventListener("touchstart",n),h.addEventListener("touchmove",i),h.addEventListener("touchend",r),function(){h.removeEventListener("mousedown",e),h.removeEventListener("mouseup",t),h.removeEventListener("touchstart",n),h.removeEventListener("touchmove",i),h.removeEventListener("touchend",r)}}));var _=function(e){return P.current[e]},z={ArrowDown:function(e){e.preventDefault(),E({type:0,shiftKey:e.shiftKey,getItemNodeFromIndex:_})},ArrowUp:function(e){e.preventDefault(),E({type:1,shiftKey:e.shiftKey,getItemNodeFromIndex:_})},Home:function(e){e.preventDefault(),E({type:3,getItemNodeFromIndex:_})},End:function(e){e.preventDefault(),E({type:4,getItemNodeFromIndex:_})},Escape:function(){E({type:2})},Enter:function(e){e.preventDefault(),E({type:5,getItemNodeFromIndex:_})}},X=function(e){var t=w(e);t&&z[t]&&z[t](e)},Y=function(e){E({type:6,inputValue:e.target.value})},J=function(e){!(j.current.isMouseDown||F(e,H.current))&&E({type:7})},G=function(){E({type:8})},ee=function(){E({type:11})};return{getItemProps:function(e){var t,n,i=void 0===e?{}:e,r=i.item,u=i.index,l=i.refKey,c=void 0===l?"ref":l,d=i.ref,h=i.onMouseMove,g=i.onClick,f=(i.onPress,(0,s.Z)(i,["item","index","refKey","ref","onMouseMove","onClick","onPress"])),p=L(u,r,o);if(p<0)throw new Error("Pass either item or item index in getItemProps!");var v=g;return(0,a.Z)(((t={})[c]=y(d,(function(e){e&&P.current.push(e)})),t.role="option",t["aria-selected"]=""+(p===m),t.id=S(p),t),!f.disabled&&((n={onMouseMove:I(h,(function(){!function(e){e!==m&&(W.current=!1,E({type:9,index:e}))}(p)}))}).onClick=I(v,(function(){!function(e){E({type:10,index:e})}(p)})),n),{},f)},getLabelProps:function(e){return(0,a.Z)({id:k,htmlFor:R},e)},getMenuProps:function(e){var t,n=void 0===e?{}:e,i=n.onMouseLeave,r=n.refKey,o=void 0===r?"ref":r,u=n.ref,l=(0,s.Z)(n,["onMouseLeave","refKey","ref"]);return(0,a.Z)(((t={})[o]=y(u,(function(e){A.current=e})),t.id=T,t.role="listbox",t["aria-labelledby"]=k,t.onMouseLeave=I(i,G),t),l)},getInputProps:function(e){var t,n,i=void 0===e?{}:e,r=i.onKeyDown,o=i.onChange,u=i.onInput,l=i.onBlur,c=(i.onChangeText,i.refKey),d=void 0===c?"ref":c,h=i.ref,g=(0,s.Z)(i,["onKeyDown","onChange","onInput","onBlur","onChangeText","refKey","ref"]),f={};g.disabled||((n={}).onChange=I(o,u,Y),n.onKeyDown=I(r,X),n.onBlur=I(l,J),f=n);return(0,a.Z)(((t={})[d]=y(h,(function(e){N.current=e})),t.id=R,t["aria-autocomplete"]="list",t["aria-controls"]=T,t),m>-1&&{"aria-activedescendant":S(m)},{"aria-labelledby":k,autoComplete:"off",value:b},f,{},g)},getComboboxProps:function(e){var t,n=void 0===e?{}:e,i=n.refKey,r=void 0===i?"ref":i,o=n.ref,u=(0,s.Z)(n,["refKey","ref"]);return(0,a.Z)(((t={})[r]=y(o,(function(e){B.current=e})),t.role="combobox",t["aria-haspopup"]="listbox",t["aria-owns"]=T,t["aria-expanded"]=p,t),u)},getToggleButtonProps:function(e){var t,n=void 0===e?{}:e,i=n.onClick,r=(n.onPress,n.refKey),o=void 0===r?"ref":r,u=n.ref,l=(0,s.Z)(n,["onClick","onPress","refKey","ref"]);return(0,a.Z)(((t={})[o]=y(u,(function(e){H.current=e})),t.id=D,t.tabIndex=-1,t),!l.disabled&&(0,a.Z)({},{onClick:I(i,ee)}),{},l)},toggleMenu:function(){E({type:12})},openMenu:function(){E({type:13})},closeMenu:function(){E({type:14})},setHighlightedIndex:function(e){E({type:15,highlightedIndex:e})},setInputValue:function(e){E({type:17,inputValue:e})},selectItem:function(e){E({type:16,selectedItem:e})},reset:function(){E({type:18})},highlightedIndex:m,isOpen:p,selectedItem:v,inputValue:b}}_.stateChangeTypes=j;var z=n(46668),X=n(76498),Y=n(91377),J=n(94813);const G=_.stateChangeTypes,ee=e=>{const t=(0,J.TH)(),{fetchResults:n,getA11yStatusMessage:s}=e,a=(0,r.T)(),[l,c]=(0,i.useState)(e.initialQuery||""),[d,h]=(0,i.useState)({}),[g,f]=(0,i.useState)({timestamp:Date.now(),results:null,query:""}),p=e.shouldTrimQuery?l.trim():l,m=(0,o.Z)(p,300);const{items:v,itemsQuery:I}=function(){const t=`${p}-${String(e.fetchResultsTrigger)}`;return d[t]?.hasLoaded?{items:d[t],itemsQuery:l}:g.results?{items:{isLoading:!0,hasLoaded:!1,data:g.results,error:null},itemsQuery:g.query}:{items:{isLoading:!1,hasLoaded:!1,data:null,error:null},itemsQuery:""}}(),{getComboboxProps:y,getLabelProps:b,getInputProps:x,getMenuProps:w,getItemProps:E,reset:O,highlightedIndex:M,isOpen:k,openMenu:C,selectItem:S}=_({id:e.id,items:v?.data||[],itemToString:e.getQueryFromResult,initialIsOpen:!e.initialIsClosed,initialInputValue:e.initialQuery||"",onInputValueChange:t=>{let{inputValue:n=""}=t;c(n);const i=e.shouldTrimQuery?n.trim():n;0===i.length&&f({timestamp:Date.now(),results:null,query:i})},onSelectedItemChange:t=>{if(!t.selectedItem)return;const n=e.shouldTrimQuery?t.inputValue?.trim():t.inputValue;n&&h((t=>({...t,[`${n}-${String(e.fetchResultsTrigger)}`]:{isLoading:!1,hasLoaded:!0,data:g.results,error:null}}))),e.onResultSelected(t.selectedItem)},stateReducer:function(t,n){switch(n.type){case G.InputKeyDownEnter:return n.changes.inputValue&&e.onEnterKeyWithNoSelectedResult&&e.onEnterKeyWithNoSelectedResult(n.changes.inputValue,v?.data),e.clearOnSelection?{...n.changes,inputValue:""}:n.changes;case G.ItemClick:return e.clearOnSelection?{...n.changes,inputValue:""}:n.changes;case G.InputBlur:return t.selectedItem?{...n.changes,inputValue:t.inputValue,selectedItem:t.selectedItem}:n.changes;case G.FunctionSelectItem:return e.updateInputOnSelectedItemChange&&n?.changes?.selectedItem?{...n.changes,inputValue:n.changes.selectedItem,selectedItem:n.changes.selectedItem}:n.changes;default:return n.changes}},getA11yStatusMessage:()=>{},getA11ySelectionMessage:e=>{let{selectedItem:t,itemToString:n}=e;return a("shared.comboboxitemselected",{itemDescription:n(t)})}});const T=(0,i.useCallback)((t=>{const i=Date.now(),r=`${t}-${String(e.fetchResultsTrigger)}`;h((e=>({...e,[r]:{isLoading:!0,hasLoaded:!1,data:null,error:null}}))),n(t).then((e=>{h((t=>({...t,[r]:{isLoading:!1,hasLoaded:!0,data:e,error:null}}))),g.timestamp<i&&e.length>0&&f({timestamp:i,results:e,query:t})})).catch((e=>{e instanceof u.F||h((t=>({...t,[r]:{isLoading:!0,hasLoaded:!1,data:null,error:e}})))}))}),[n,g.timestamp,e.fetchResultsTrigger]),V=(0,i.useCallback)((()=>{h({}),T(m)}),[m,T]);(0,i.useEffect)((()=>{const t=`${m}-${String(e.fetchResultsTrigger)}`;d[t]?.isLoading||d[t]?.hasLoaded||T(m)}),[m,d,t.pathname,e.fetchResultsTrigger,T]);const{setA11yStatusMessage:L}=(0,i.useContext)(X.J);(0,i.useEffect)((()=>{k&&v?.hasLoaded&&v?.data&&s&&L(s({results:v.data,query:I}))}),[k,v?.data,v?.hasLoaded,I,L,s]);return{query:l,results:v||z.E,getLabelProps:b,getInputProps:function(){const e=y(),t=x(...arguments);return{...e,...t,ref:(0,Y.Z)(e.ref,t.ref),"aria-owns":void 0,"aria-haspopup":void 0}},getMenuProps:w,getItemProps:E,reset:O,highlightedIndex:M,isOpen:k,openMenu:C,clearCacheAndRefetchResults:V,selectItem:S}}}}]);