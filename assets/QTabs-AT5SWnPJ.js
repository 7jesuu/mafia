import{i as Ae,e as Z,r as h,a as f,o as ce,C as Be,a$ as fe,E as $e,ao as xe,h as v,aw as Me,b0 as De,y as Ee,a7 as O,R as Qe,g as de,c as ve,k as p,m as se,w as H,H as Fe,b1 as je,b2 as Ke,b as Ve}from"./index-DmMcwZC0.js";import{a8 as We,Q as He}from"./UseTheme.Composable-BcudcliF.js";let Oe=0;const ze=["click","keydown"],Ne={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Oe++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Ue(e,P,y,g){const i=Ae(fe,Z);if(i===Z)return console.error("QTab/QRouteTab component needs to be child of QTabs"),Z;const{proxy:z}=de(),x=h(null),E=h(null),Q=h(null),N=f(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),k=f(()=>i.currentModel.value===e.name),U=f(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(k.value===!0?" q-tab--active"+(i.tabProps.value.activeClass?" "+i.tabProps.value.activeClass:"")+(i.tabProps.value.activeColor?` text-${i.tabProps.value.activeColor}`:"")+(i.tabProps.value.activeBgColor?` bg-${i.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&i.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||i.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")),q=f(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(i.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),b=f(()=>e.disable===!0||i.hasFocus.value===!0||k.value===!1&&i.hasActiveTab.value===!0?-1:e.tabindex||0);function m(r,d){if(d!==!0&&x.value!==null&&x.value.focus(),e.disable!==!0){i.updateModel({name:e.name}),y("click",r);return}}function _(r){Me(r,[13,32])?m(r,!0):De(r)!==!0&&r.keyCode>=35&&r.keyCode<=40&&r.altKey!==!0&&r.metaKey!==!0&&i.onKbdNavigate(r.keyCode,z.$el)===!0&&Ee(r),y("keydown",r)}function M(){const r=i.tabProps.value.narrowIndicator,d=[],w=v("div",{ref:Q,class:["q-tab__indicator",i.tabProps.value.indicatorClass]});e.icon!==void 0&&d.push(v(O,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&d.push(v("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&d.push(e.alertIcon!==void 0?v(O,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):v("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),r===!0&&d.push(w);const T=[v("div",{class:"q-focus-helper",tabindex:-1,ref:x}),v("div",{class:q.value},Qe(P.default,d))];return r===!1&&T.push(w),T}const I={name:f(()=>e.name),rootRef:E,tabIndicatorRef:Q,routeData:g};ce(()=>{i.unregisterTab(I)}),Be(()=>{i.registerTab(I)});function F(r,d){const w={ref:E,class:U.value,tabindex:b.value,role:"tab","aria-selected":k.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:m,onKeydown:_,...d};return $e(v(r,w,M()),[[xe,N.value]])}return{renderTab:F,$tabs:i}}const Ze=ve({name:"QTab",props:Ne,emits:ze,setup(e,{slots:P,emit:y}){const{renderTab:g}=Ue(e,P,y);return()=>g("div")}});function Ge(e,P,y){const g=y===!0?["left","right"]:["top","bottom"];return`absolute-${P===!0?g[0]:g[1]}${e?` text-${e}`:""}`}const Xe=["left","center","right","justify"],pe=ve({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Xe.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:P,emit:y}){const{proxy:g}=de(),{$q:i}=g,{registerTick:z}=p(),{registerTick:x}=p(),{registerTick:E}=p(),{registerTimeout:Q,removeTimeout:N}=se(),{registerTimeout:k,removeTimeout:U}=se(),q=h(null),b=h(null),m=h(e.modelValue),_=h(!1),M=h(!0),I=h(!1),F=h(!1),r=[],d=h(0),w=h(!1);let T=null,A=null,S;const be=f(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Ge(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),he=f(()=>{const t=d.value,n=m.value;for(let a=0;a<t;a++)if(r[a].name.value===n)return!0;return!1}),ge=f(()=>`q-tabs__content--align-${_.value===!0?"left":F.value===!0?"justify":e.align}`),me=f(()=>`q-tabs row no-wrap items-center q-tabs--${_.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Te=f(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+ge.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),j=f(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),K=f(()=>e.vertical!==!0&&i.lang.rtl===!0),G=f(()=>We===!1&&K.value===!0);H(K,$),H(()=>e.modelValue,t=>{X({name:t,setCurrent:!0,skipEmit:!0})}),H(()=>e.outsideArrows,V);function X({name:t,setCurrent:n,skipEmit:a}){m.value!==t&&(a!==!0&&e["onUpdate:modelValue"]!==void 0&&y("update:modelValue",t),(n===!0||e["onUpdate:modelValue"]===void 0)&&(we(m.value,t),m.value=t))}function V(){z(()=>{q.value&&ee({width:q.value.offsetWidth,height:q.value.offsetHeight})})}function ee(t){if(j.value===void 0||b.value===null)return;const n=t[j.value.container],a=Math.min(b.value[j.value.scroll],Array.prototype.reduce.call(b.value.children,(s,o)=>s+(o[j.value.content]||0),0)),u=n>0&&a>n;_.value=u,u===!0&&x($),F.value=n<parseInt(e.breakpoint,10)}function we(t,n){const a=t!=null&&t!==""?r.find(s=>s.name.value===t):null,u=n!=null&&n!==""?r.find(s=>s.name.value===n):null;if(W===!0)W=!1;else if(a&&u){const s=a.tabIndicatorRef.value,o=u.tabIndicatorRef.value;T!==null&&(clearTimeout(T),T=null),s.style.transition="none",s.style.transform="none",o.style.transition="none",o.style.transform="none";const l=s.getBoundingClientRect(),c=o.getBoundingClientRect();o.style.transform=e.vertical===!0?`translate3d(0,${l.top-c.top}px,0) scale3d(1,${c.height?l.height/c.height:1},1)`:`translate3d(${l.left-c.left}px,0,0) scale3d(${c.width?l.width/c.width:1},1,1)`,E(()=>{T=setTimeout(()=>{T=null,o.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",o.style.transform="none"},70)})}u&&_.value===!0&&B(u.rootRef.value)}function B(t){const{left:n,width:a,top:u,height:s}=b.value.getBoundingClientRect(),o=t.getBoundingClientRect();let l=e.vertical===!0?o.top-u:o.left-n;if(l<0){b.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(l),$();return}l+=e.vertical===!0?o.height-s:o.width-a,l>0&&(b.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(l),$())}function $(){const t=b.value;if(t===null)return;const n=t.getBoundingClientRect(),a=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);K.value===!0?(M.value=Math.ceil(a+n.width)<t.scrollWidth-1,I.value=a>0):(M.value=a>0,I.value=e.vertical===!0?Math.ceil(a+n.height)<t.scrollHeight:Math.ceil(a+n.width)<t.scrollWidth)}function te(t){A!==null&&clearInterval(A),A=setInterval(()=>{qe(t)===!0&&R()},5)}function ne(){te(G.value===!0?Number.MAX_SAFE_INTEGER:0)}function ae(){te(G.value===!0?0:Number.MAX_SAFE_INTEGER)}function R(){A!==null&&(clearInterval(A),A=null)}function Ce(t,n){const a=Array.prototype.filter.call(b.value.children,c=>c===n||c.matches&&c.matches(".q-tab.q-focusable")===!0),u=a.length;if(u===0)return;if(t===36)return B(a[0]),a[0].focus(),!0;if(t===35)return B(a[u-1]),a[u-1].focus(),!0;const s=t===(e.vertical===!0?38:37),o=t===(e.vertical===!0?40:39),l=s===!0?-1:o===!0?1:void 0;if(l!==void 0){const c=K.value===!0?-1:1,C=a.indexOf(n)+l*c;return C>=0&&C<u&&(B(a[C]),a[C].focus({preventScroll:!0})),!0}}const ye=f(()=>G.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,n)=>{t.scrollLeft=-n}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,n)=>{t.scrollTop=n}}:{get:t=>t.scrollLeft,set:(t,n)=>{t.scrollLeft=n}});function qe(t){const n=b.value,{get:a,set:u}=ye.value;let s=!1,o=a(n);const l=t<o?-1:1;return o+=l*5,o<0?(s=!0,o=0):(l===-1&&o<=t||l===1&&o>=t)&&(s=!0,o=t),u(n,o),$(),s}function le(t,n){for(const a in t)if(t[a]!==n[a])return!1;return!0}function _e(){let t=null,n={matchedLen:0,queryDiff:9999,hrefLen:0};const a=r.filter(l=>l.routeData!==void 0&&l.routeData.hasRouterLink.value===!0),{hash:u,query:s}=g.$route,o=Object.keys(s).length;for(const l of a){const c=l.routeData.exact.value===!0;if(l.routeData[c===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:C,query:J,matched:ke,href:Ie}=l.routeData.resolvedLink.value,Y=Object.keys(J).length;if(c===!0){if(C!==u||Y!==o||le(s,J)===!1)continue;t=l.name.value;break}if(C!==""&&C!==u||Y!==0&&le(J,s)===!1)continue;const L={matchedLen:ke.length,queryDiff:o-Y,hrefLen:Ie.length-C.length};if(L.matchedLen>n.matchedLen){t=l.name.value,n=L;continue}else if(L.matchedLen!==n.matchedLen)continue;if(L.queryDiff<n.queryDiff)t=l.name.value,n=L;else if(L.queryDiff!==n.queryDiff)continue;L.hrefLen>n.hrefLen&&(t=l.name.value,n=L)}if(t===null&&r.some(l=>l.routeData===void 0&&l.name.value===m.value)===!0){W=!1;return}X({name:t,setCurrent:!0})}function Se(t){if(N(),w.value!==!0&&q.value!==null&&t.target&&typeof t.target.closest=="function"){const n=t.target.closest(".q-tab");n&&q.value.contains(n)===!0&&(w.value=!0,_.value===!0&&B(n))}}function Re(){Q(()=>{w.value=!1},30)}function D(){oe.avoidRouteWatcher===!1?k(_e):U()}function re(){if(S===void 0){const t=H(()=>g.$route.fullPath,D);S=()=>{t(),S=void 0}}}function Le(t){r.push(t),d.value++,V(),t.routeData===void 0||g.$route===void 0?k(()=>{if(_.value===!0){const n=m.value,a=n!=null&&n!==""?r.find(u=>u.name.value===n):null;a&&B(a.rootRef.value)}}):(re(),t.routeData.hasRouterLink.value===!0&&D())}function Pe(t){r.splice(r.indexOf(t),1),d.value--,V(),S!==void 0&&t.routeData!==void 0&&(r.every(n=>n.routeData===void 0)===!0&&S(),D())}const oe={currentModel:m,tabProps:be,hasFocus:w,hasActiveTab:he,registerTab:Le,unregisterTab:Pe,verifyRouteModel:D,updateModel:X,onKbdNavigate:Ce,avoidRouteWatcher:!1};Fe(fe,oe);function ie(){T!==null&&clearTimeout(T),R(),S!==void 0&&S()}let ue,W;return ce(ie),je(()=>{ue=S!==void 0,ie()}),Ke(()=>{ue===!0&&(re(),W=!0,D()),V()}),()=>v("div",{ref:q,class:me.value,role:"tablist",onFocusin:Se,onFocusout:Re},[v(He,{onResize:ee}),v("div",{ref:b,class:Te.value,onScroll:$},Ve(P.default)),v(O,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(M.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||i.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ne,onTouchstartPassive:ne,onMouseupPassive:R,onMouseleavePassive:R,onTouchendPassive:R}),v(O,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(I.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||i.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:ae,onTouchstartPassive:ae,onMouseupPassive:R,onMouseleavePassive:R,onTouchendPassive:R})])}});export{Ze as Q,pe as a};
