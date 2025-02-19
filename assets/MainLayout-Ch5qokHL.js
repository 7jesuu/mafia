import{c as F,a as o,h as q,b as re,i as $e,e as R,r as B,w as p,o as ie,d as vt,g as Y,l as he,u as je,f as Te,s as Ke,j as Xe,k as mt,m as Je,n as ht,p as Ye,q as gt,t as He,v as Oe,x as Ze,T as bt,y as yt,z as wt,A as pt,B as St,C as Le,D as ze,E as ne,F as Be,G as Tt,H as et,I as Ct,J as kt,K as Pt,L as xt,M as qt,N as _t,O as Ce,P as de,Q as $t,R as Lt,S as tt,U as K,V as J,W as V,X as c,Y as at,Z as me,_ as qe,$ as Dt,a0 as Ht,a1 as oe,a2 as Ot,a3 as zt,a4 as Bt,a5 as D,a6 as E,a7 as Me,a8 as Qe,a9 as Mt,aa as Qt,ab as At,ac as Ae,ad as Et,ae as Vt}from"./index-DmMcwZC0.js";import{Q as _e,u as Gt,v as Ee,a as It,p as Ve,b as Wt,c as Rt,r as Ge,s as Ft,d as Ie,e as Nt,C as lt,f as Ut,g as ke,U as jt,$ as Kt,h as Xt,i as We,j as Jt,S as Yt,k as Zt,l as Pe,m as ea,n as ta,o as Re,q as aa,t as la,w as na,x as oa,y as ia,z as ra,A as fe}from"./UseTheme.Composable-BcudcliF.js";import{b as ve,Q as sa}from"./QSelect-BFuEKhT7.js";import{T as xe}from"./TouchPan-CKk620Sp.js";import{u as ua}from"./vue-i18n-DyxYMKFe.js";import{A as ca}from"./ApplicationInfo-Br-p8REO.js";import{_ as da}from"./_plugin-vue_export-helper-DlAUqK2U.js";const fa=F({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:m}){const a=o(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>q("div",{class:a.value},re(m.default))}}),va=F({name:"QSpace",setup(){const e=q("div",{class:"q-space"});return()=>e}}),ma=F({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:m}){const a=o(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>q("div",{class:a.value,role:"toolbar"},re(m.default))}}),ha=F({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:m,emit:a}){const{proxy:{$q:i}}=Y(),n=$e(he,R);if(n===R)return console.error("QHeader needs to be child of QLayout"),R;const u=B(parseInt(e.heightHint,10)),T=B(!0),S=o(()=>e.reveal===!0||n.view.value.indexOf("H")!==-1||i.platform.is.ios&&n.isContainer.value===!0),k=o(()=>{if(e.modelValue!==!0)return 0;if(S.value===!0)return T.value===!0?u.value:0;const r=u.value-n.scroll.value.position;return r>0?r:0}),w=o(()=>e.modelValue!==!0||S.value===!0&&T.value!==!0),l=o(()=>e.modelValue===!0&&w.value===!0&&e.reveal===!0),O=o(()=>"q-header q-layout__section--marginal "+(S.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(w.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),C=o(()=>{const r=n.rows.value.top,$={};return r[0]==="l"&&n.left.space===!0&&($[i.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),r[2]==="r"&&n.right.space===!0&&($[i.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),$});function s(r,$){n.update("header",r,$)}function f(r,$){r.value!==$&&(r.value=$)}function _({height:r}){f(u,r),s("size",r)}function P(r){l.value===!0&&f(T,!0),a("focusin",r)}p(()=>e.modelValue,r=>{s("space",r),f(T,!0),n.animate()}),p(k,r=>{s("offset",r)}),p(()=>e.reveal,r=>{r===!1&&f(T,e.modelValue)}),p(T,r=>{n.animate(),a("reveal",r)}),p(n.scroll,r=>{e.reveal===!0&&f(T,r.direction==="up"||r.position<=e.revealOffset||r.position-r.inflectionPoint<100)});const h={};return n.instances.header=h,e.modelValue===!0&&s("size",u.value),s("space",e.modelValue),s("offset",k.value),ie(()=>{n.instances.header===h&&(n.instances.header=void 0,s("size",0),s("offset",0),s("space",!1))}),()=>{const r=vt(m.default,[]);return e.elevated===!0&&r.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(q(_e,{debounce:0,onResize:_})),q("header",{class:O.value,style:C.value,onFocusin:P},r)}}}),nt=F({name:"QTooltip",inheritAttrs:!1,props:{...Gt,...je,...Te,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...Te.transitionShow,default:"jump-down"},transitionHide:{...Te.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:Ee},self:{type:String,default:"top middle",validator:Ee},offset:{type:Array,default:()=>[14,14],validator:It},scrollTarget:Ke,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...Xe],setup(e,{slots:m,emit:a,attrs:i}){let n,u;const T=Y(),{proxy:{$q:S}}=T,k=B(null),w=B(!1),l=o(()=>Ve(e.anchor,S.lang.rtl)),O=o(()=>Ve(e.self,S.lang.rtl)),C=o(()=>e.persistent!==!0),{registerTick:s,removeTick:f}=mt(),{registerTimeout:_}=Je(),{transitionProps:P,transitionStyle:h}=ht(e),{localScrollTarget:r,changeScrollEvent:$,unconfigureScrollTarget:g}=Wt(e,se),{anchorEl:b,canShow:L,anchorEvents:x}=Rt({showing:w,configureAnchorEl:j}),{show:I,hide:Q}=Ye({showing:w,canShow:L,handleShow:z,handleHide:Z,hideOnRouteChange:C,processOnMount:!0});Object.assign(x,{delayShow:te,delayHide:ae});const{showPortal:y,hidePortal:d,renderPortal:X}=gt(T,k,be,"tooltip");if(S.platform.is.mobile===!0){const H={anchorEl:b,innerRef:k,onClickOutside(W){return Q(W),W.target.classList.contains("q-dialog__backdrop")&&yt(W),!0}},le=o(()=>e.modelValue===null&&e.persistent!==!0&&w.value===!0);p(le,W=>{(W===!0?Nt:Ge)(H)}),ie(()=>{Ge(H)})}function z(H){y(),s(()=>{u=new MutationObserver(()=>G()),u.observe(k.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),G(),se()}),n===void 0&&(n=p(()=>S.screen.width+"|"+S.screen.height+"|"+e.self+"|"+e.anchor+"|"+S.lang.rtl,G)),_(()=>{y(!0),a("show",H)},e.transitionDuration)}function Z(H){f(),d(),ee(),_(()=>{d(!0),a("hide",H)},e.transitionDuration)}function ee(){u!==void 0&&(u.disconnect(),u=void 0),n!==void 0&&(n(),n=void 0),g(),He(x,"tooltipTemp")}function G(){Ft({targetEl:k.value,offset:e.offset,anchorEl:b.value,anchorOrigin:l.value,selfOrigin:O.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function te(H){if(S.platform.is.mobile===!0){Ie(),document.body.classList.add("non-selectable");const le=b.value,W=["touchmove","touchcancel","touchend","click"].map(ue=>[le,ue,"delayHide","passiveCapture"]);Oe(x,"tooltipTemp",W)}_(()=>{I(H)},e.delay)}function ae(H){S.platform.is.mobile===!0&&(He(x,"tooltipTemp"),Ie(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),_(()=>{Q(H)},e.hideDelay)}function j(){if(e.noParentEvent===!0||b.value===null)return;const H=S.platform.is.mobile===!0?[[b.value,"touchstart","delayShow","passive"]]:[[b.value,"mouseenter","delayShow","passive"],[b.value,"mouseleave","delayHide","passive"]];Oe(x,"anchor",H)}function se(){if(b.value!==null||e.scrollTarget!==void 0){r.value=Ze(b.value,e.scrollTarget);const H=e.noParentEvent===!0?G:Q;$(r.value,H)}}function ge(){return w.value===!0?q("div",{...i,ref:k,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",i.class],style:[i.style,h.value],role:"tooltip"},re(m.default)):null}function be(){return q(bt,P.value,ge)}return ie(ee),Object.assign(T.proxy,{updatePosition:G}),X}}),Fe=150,ga=F({name:"QDrawer",inheritAttrs:!1,props:{...je,...wt,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Xe,"onLayout","miniState"],setup(e,{slots:m,emit:a,attrs:i}){const n=Y(),{proxy:{$q:u}}=n,T=pt(e,u),{preventBodyScroll:S}=Tt(),{registerTimeout:k,removeTimeout:w}=Je(),l=$e(he,R);if(l===R)return console.error("QDrawer needs to be child of QLayout"),R;let O,C=null,s;const f=B(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),_=o(()=>e.mini===!0&&f.value!==!0),P=o(()=>_.value===!0?e.miniWidth:e.width),h=B(e.showIfAbove===!0&&f.value===!1?!0:e.modelValue===!0),r=o(()=>e.persistent!==!0&&(f.value===!0||se.value===!0));function $(t,v){if(x(),t!==!1&&l.animate(),A(0),f.value===!0){const M=l.instances[G.value];M!==void 0&&M.belowBreakpoint===!0&&M.hide(!1),N(1),l.isContainer.value!==!0&&S(!0)}else N(0),t!==!1&&we(!1);k(()=>{t!==!1&&we(!0),v!==!0&&a("show",t)},Fe)}function g(t,v){I(),t!==!1&&l.animate(),N(0),A(d.value*P.value),pe(),v!==!0?k(()=>{a("hide",t)},Fe):w()}const{show:b,hide:L}=Ye({showing:h,hideOnRouteChange:r,handleShow:$,handleHide:g}),{addToHistory:x,removeFromHistory:I}=St(h,L,r),Q={belowBreakpoint:f,hide:L},y=o(()=>e.side==="right"),d=o(()=>(u.lang.rtl===!0?-1:1)*(y.value===!0?1:-1)),X=B(0),z=B(!1),Z=B(!1),ee=B(P.value*d.value),G=o(()=>y.value===!0?"left":"right"),te=o(()=>h.value===!0&&f.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:P.value:0),ae=o(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(y.value?"R":"L")!==-1||u.platform.is.ios===!0&&l.isContainer.value===!0),j=o(()=>e.overlay===!1&&h.value===!0&&f.value===!1),se=o(()=>e.overlay===!0&&h.value===!0&&f.value===!1),ge=o(()=>"fullscreen q-drawer__backdrop"+(h.value===!1&&z.value===!1?" hidden":"")),be=o(()=>({backgroundColor:`rgba(0,0,0,${X.value*.4})`})),H=o(()=>y.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),le=o(()=>y.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),W=o(()=>{const t={};return l.header.space===!0&&H.value===!1&&(ae.value===!0?t.top=`${l.header.offset}px`:l.header.space===!0&&(t.top=`${l.header.size}px`)),l.footer.space===!0&&le.value===!1&&(ae.value===!0?t.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(t.bottom=`${l.footer.size}px`)),t}),ue=o(()=>{const t={width:`${P.value}px`,transform:`translateX(${ee.value}px)`};return f.value===!0?t:Object.assign(t,W.value)}),ot=o(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),it=o(()=>`q-drawer q-drawer--${e.side}`+(Z.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(T.value===!0?" q-drawer--dark q-dark":"")+(z.value===!0?" no-transition":h.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${_.value===!0?"mini":"standard"}`+(ae.value===!0||j.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(H.value===!0?" q-drawer--top-padding":""))),rt=o(()=>{const t=u.lang.rtl===!0?e.side:G.value;return[[xe,dt,void 0,{[t]:!0,mouse:!0}]]}),st=o(()=>{const t=u.lang.rtl===!0?G.value:e.side;return[[xe,De,void 0,{[t]:!0,mouse:!0}]]}),ut=o(()=>{const t=u.lang.rtl===!0?G.value:e.side;return[[xe,De,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function ye(){ft(f,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}p(f,t=>{t===!0?(O=h.value,h.value===!0&&L(!1)):e.overlay===!1&&e.behavior!=="mobile"&&O!==!1&&(h.value===!0?(A(0),N(0),pe()):b(!1))}),p(()=>e.side,(t,v)=>{l.instances[v]===Q&&(l.instances[v]=void 0,l[v].space=!1,l[v].offset=0),l.instances[t]=Q,l[t].size=P.value,l[t].space=j.value,l[t].offset=te.value}),p(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&ye()}),p(()=>e.behavior+e.breakpoint,ye),p(l.isContainer,t=>{h.value===!0&&S(t!==!0),t===!0&&ye()}),p(l.scrollbarWidth,()=>{A(h.value===!0?0:void 0)}),p(te,t=>{U("offset",t)}),p(j,t=>{a("onLayout",t),U("space",t)}),p(y,()=>{A()}),p(P,t=>{A(),Se(e.miniToOverlay,t)}),p(()=>e.miniToOverlay,t=>{Se(t,P.value)}),p(()=>u.lang.rtl,()=>{A()}),p(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(ct(),l.animate())}),p(_,t=>{a("miniState",t)});function A(t){t===void 0?ze(()=>{t=h.value===!0?0:P.value,A(d.value*t)}):(l.isContainer.value===!0&&y.value===!0&&(f.value===!0||Math.abs(t)===P.value)&&(t+=d.value*l.scrollbarWidth.value),ee.value=t)}function N(t){X.value=t}function we(t){const v=t===!0?"remove":l.isContainer.value!==!0?"add":"";v!==""&&document.body.classList[v]("q-body--drawer-toggle")}function ct(){C!==null&&clearTimeout(C),n.proxy&&n.proxy.$el&&n.proxy.$el.classList.add("q-drawer--mini-animate"),Z.value=!0,C=setTimeout(()=>{C=null,Z.value=!1,n&&n.proxy&&n.proxy.$el&&n.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function dt(t){if(h.value!==!1)return;const v=P.value,M=ve(t.distance.x,0,v);if(t.isFinal===!0){M>=Math.min(75,v)===!0?b():(l.animate(),N(0),A(d.value*v)),z.value=!1;return}A((u.lang.rtl===!0?y.value!==!0:y.value)?Math.max(v-M,0):Math.min(0,M-v)),N(ve(M/v,0,1)),t.isFirst===!0&&(z.value=!0)}function De(t){if(h.value!==!0)return;const v=P.value,M=t.direction===e.side,ce=(u.lang.rtl===!0?M!==!0:M)?ve(t.distance.x,0,v):0;if(t.isFinal===!0){Math.abs(ce)<Math.min(75,v)===!0?(l.animate(),N(1),A(0)):L(),z.value=!1;return}A(d.value*ce),N(ve(1-ce/v,0,1)),t.isFirst===!0&&(z.value=!0)}function pe(){S(!1),we(!0)}function U(t,v){l.update(e.side,t,v)}function ft(t,v){t.value!==v&&(t.value=v)}function Se(t,v){U("size",t===!0?e.miniWidth:v)}return l.instances[e.side]=Q,Se(e.miniToOverlay,P.value),U("space",j.value),U("offset",te.value),e.showIfAbove===!0&&e.modelValue!==!0&&h.value===!0&&e["onUpdate:modelValue"]!==void 0&&a("update:modelValue",!0),Le(()=>{a("onLayout",j.value),a("miniState",_.value),O=e.showIfAbove===!0;const t=()=>{(h.value===!0?$:g)(!1,!0)};if(l.totalWidth.value!==0){ze(t);return}s=p(l.totalWidth,()=>{s(),s=void 0,h.value===!1&&e.showIfAbove===!0&&f.value===!1?b(!1):t()})}),ie(()=>{s!==void 0&&s(),C!==null&&(clearTimeout(C),C=null),h.value===!0&&pe(),l.instances[e.side]===Q&&(l.instances[e.side]=void 0,U("size",0),U("offset",0),U("space",!1))}),()=>{const t=[];f.value===!0&&(e.noSwipeOpen===!1&&t.push(ne(q("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),rt.value)),t.push(Be("div",{ref:"backdrop",class:ge.value,style:be.value,"aria-hidden":"true",onClick:L},void 0,"backdrop",e.noSwipeBackdrop!==!0&&h.value===!0,()=>ut.value)));const v=_.value===!0&&m.mini!==void 0,M=[q("div",{...i,key:""+v,class:[ot.value,i.class]},v===!0?m.mini():re(m.default))];return e.elevated===!0&&h.value===!0&&M.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(Be("aside",{ref:"content",class:it.value,style:ue.value},M,"contentclose",e.noSwipeClose!==!0&&f.value===!0,()=>st.value)),q("div",{class:"q-drawer-container"},t)}}}),ba=F({name:"QPageContainer",setup(e,{slots:m}){const{proxy:{$q:a}}=Y(),i=$e(he,R);if(i===R)return console.error("QPageContainer needs to be child of QLayout"),R;et(Ct,!0);const n=o(()=>{const u={};return i.header.space===!0&&(u.paddingTop=`${i.header.size}px`),i.right.space===!0&&(u[`padding${a.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(u.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(u[`padding${a.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),u});return()=>q("div",{class:"q-page-container",style:n.value},re(m.default))}}),{passive:Ne}=Pt,ya=["both","horizontal","vertical"],wa=F({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ya.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Ke},emits:["scroll"],setup(e,{emit:m}){const a={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,n,u;p(()=>e.scrollTarget,()=>{k(),S()});function T(){i!==null&&i();const O=Math.max(0,xt(n)),C=qt(n),s={top:O-a.position.top,left:C-a.position.left};if(e.axis==="vertical"&&s.top===0||e.axis==="horizontal"&&s.left===0)return;const f=Math.abs(s.top)>=Math.abs(s.left)?s.top<0?"up":"down":s.left<0?"left":"right";a.position={top:O,left:C},a.directionChanged=a.direction!==f,a.delta=s,a.directionChanged===!0&&(a.direction=f,a.inflectionPoint=a.position),m("scroll",{...a})}function S(){n=Ze(u,e.scrollTarget),n.addEventListener("scroll",w,Ne),w(!0)}function k(){n!==void 0&&(n.removeEventListener("scroll",w,Ne),n=void 0)}function w(O){if(O===!0||e.debounce===0||e.debounce==="0")T();else if(i===null){const[C,s]=e.debounce?[setTimeout(T,e.debounce),clearTimeout]:[requestAnimationFrame(T),cancelAnimationFrame];i=()=>{s(C),i=null}}}const{proxy:l}=Y();return p(()=>l.$q.lang.rtl,T),Le(()=>{u=l.$el.parentNode,S()}),ie(()=>{i!==null&&i(),k()}),Object.assign(l,{trigger:w,getPosition:()=>a}),kt}}),pa=F({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:m,emit:a}){const{proxy:{$q:i}}=Y(),n=B(null),u=B(i.screen.height),T=B(e.container===!0?0:i.screen.width),S=B({position:0,direction:"down",inflectionPoint:0}),k=B(0),w=B(_t.value===!0?0:Ce()),l=o(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),O=o(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),C=o(()=>w.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${w.value}px`}:null),s=o(()=>w.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${w.value}px`,width:`calc(100% + ${w.value}px)`}:null);function f(g){if(e.container===!0||document.qScrollPrevented!==!0){const b={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};S.value=b,e.onScroll!==void 0&&a("scroll",b)}}function _(g){const{height:b,width:L}=g;let x=!1;u.value!==b&&(x=!0,u.value=b,e.onScrollHeight!==void 0&&a("scrollHeight",b),h()),T.value!==L&&(x=!0,T.value=L),x===!0&&e.onResize!==void 0&&a("resize",g)}function P({height:g}){k.value!==g&&(k.value=g,h())}function h(){if(e.container===!0){const g=u.value>k.value?Ce():0;w.value!==g&&(w.value=g)}}let r=null;const $={instances:{},view:o(()=>e.view),isContainer:o(()=>e.container),rootRef:n,height:u,containerHeight:k,scrollbarWidth:w,totalWidth:o(()=>T.value+w.value),rows:o(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:de({size:0,offset:0,space:!1}),right:de({size:300,offset:0,space:!1}),footer:de({size:0,offset:0,space:!1}),left:de({size:300,offset:0,space:!1}),scroll:S,animate(){r!==null?clearTimeout(r):document.body.classList.add("q-body--layout-animate"),r=setTimeout(()=>{r=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,b,L){$[g][b]=L}};if(et(he,$),Ce()>0){let g=function(){x=null,I.classList.remove("hide-scrollbar")},b=function(){if(x===null){if(I.scrollHeight>i.screen.height)return;I.classList.add("hide-scrollbar")}else clearTimeout(x);x=setTimeout(g,300)},L=function(Q){x!==null&&Q==="remove"&&(clearTimeout(x),g()),window[`${Q}EventListener`]("resize",b)},x=null;const I=document.body;p(()=>e.container!==!0?"add":"remove",L),e.container!==!0&&L("add"),$t(()=>{L("remove")})}return()=>{const g=Lt(m.default,[q(wa,{onScroll:f}),q(_e,{onResize:_})]),b=q("div",{class:l.value,style:O.value,ref:e.container===!0?void 0:n,tabindex:-1},g);return e.container===!0?q("div",{class:"q-layout-container overflow-hidden",ref:n},[q(_e,{onResize:P}),q("div",{class:"absolute-full",style:C.value},[q("div",{class:"scroll",style:s.value},[b])])]):b}}}),Ue=tt({__name:"TooltipButton",props:{label:{type:String,required:!1,default:void 0},showLabel:{type:Boolean,required:!1,default:!1},toggled:{type:Boolean,required:!1,default:!1},disable:{type:Boolean,required:!1,default:!1}},setup(e){const m=e,a=o(()=>!m.disable&&!m.showLabel&&m.label!==void 0&&String(m.label).length>0),i=o(()=>{if(m.label!==void 0&&String(m.label).length>0)return String(m.label)});return(n,u)=>(K(),J(c(oe),Ht(m,{class:{"q-btn--toggled q-btn--outline":m.toggled},label:m.showLabel?i.value:void 0,disable:m.disable}),{default:V(()=>[a.value?(K(),J(nt,{key:0,delay:c(lt).General.TooltipDelay},{default:V(()=>[at(me(i.value),1)]),_:1},8,["delay"])):qe("",!0),Dt(n.$slots,"default")]),_:3},16,["class","label","disable"]))}}),Sa={class:"app-title row items-center q-col-gutter-x-sm",href:"/#/"},Ta={class:"column fit no-wrap q-col-gutter-y-sm q-pa-sm"},Ca={class:"col-auto row justify-between items-center"},ka={class:"col-auto"},Pa={class:"col-auto"},xa={class:"col-auto"},qa={class:"col-auto"},_a={key:0,class:"col-auto"},$a={class:"col-auto"},La={class:"col-auto"},Da={class:"col-auto"},Ha=tt({__name:"MainLayout",setup(e){const m=Ut(),{t:a,locale:i}=ua({}),n=Ot(),u=[{value:"en-US",label:"English"},{value:"ru-RU",label:"Русский"}],T=ke(Kt),S=ke(Xt),k=ke(We),{Value:w,Disable:l,Toggle:O}=zt(!1),{PlainColor:C,IsDarkModeEnabled:s,SetDarkMode:f}=jt(),_=o(()=>T.value!==void 0),P=o(()=>S.value!==void 0),h=o(()=>_.value||P.value);p(i,y=>{Yt(y)});function r(){i.value=Jt.get()}function $(){const y=m.localStorage.getItem("IsDarkModeEnabled");f(!!(y!==null&&y))}function g(){Zt(!We.get())}async function b(){if(h.value&&await Pe(a("General.Warning"),a("Game.EndGameConfirmation"))!==!0)return;const y=await ea();if(y===void 0)return;const d=ta(y.PlayerCount,y.PlayerNumber,y.PlayerRole);if(d===void 0){await Re(a("General.Error"),a("Game.CreatePlayerSessionError"));return}aa(d)}async function L(){if(h.value&&await Pe(a("General.Warning"),a("Game.EndGameConfirmation"))!==!0)return;const y=await la();if(y===void 0)return;const d=na(y.Participants);if(d===void 0){await Re(a("General.Error"),a("Game.CreatePlayerSessionError"));return}oa(d)}async function x(){await Pe(a("General.Warning"),a("Game.EndGameConfirmation"))===!0&&ia()}async function I(){l(),await ra()}function Q(y){f(y),m.localStorage.set("IsDarkModeEnabled",y)}return Le(()=>{r(),$()}),(y,d)=>{const X=Bt("router-view");return K(),J(pa,{view:"lHh Lpr lFf",class:"no-selection"},{default:V(()=>[D(ha,{class:Qe({"bg-dark":c(s),"bg-white":!c(s)}),bordered:""},{default:V(()=>[D(ma,null,{default:V(()=>[D(Ue,{onClick:d[0]||(d[0]=()=>c(O)()),label:c(a)("General.Menu"),"show-label":!1,icon:"s_menu",color:c(C),round:"",flat:"","no-caps":""},null,8,["label","color"]),D(fa,{shrink:""},{default:V(()=>[E("a",Sa,[D(Me,{name:"las la-mask",color:c(C),size:"lg"},null,8,["color"]),E("div",{class:Qe(["col-auto text-weight-medium toolbar-title",["text-"+c(C)]])},me(c(ca).Title),3)])]),_:1}),D(va),_.value?(K(),J(Ue,{key:0,label:c(k)?c(a)("General.Show"):c(a)("General.Hide"),onClick:d[1]||(d[1]=()=>g()),icon:c(k)?"sym_s_visibility":"sym_s_visibility_off",color:c(C),round:"",flat:"","no-caps":""},null,8,["label","icon","color"])):qe("",!0)]),_:1})]),_:1},8,["class"]),D(ga,{modelValue:c(w),"onUpdate:modelValue":d[8]||(d[8]=z=>Ae(w)?w.value=z:null),side:"left",behavior:"mobile","no-swipe-open":""},{default:V(()=>[E("div",Ta,[E("div",Ca,[E("div",ka,me(c(a)("General.Menu")),1),E("div",Pa,[D(Me,{name:"s_dark_mode",color:"primary",size:"xs"}),D(Mt,{"model-value":c(s),"onUpdate:modelValue":d[2]||(d[2]=z=>Q(z)),color:"grey","keep-color":!c(s)},{default:V(()=>[D(nt,{delay:c(lt).General.TooltipDelay},{default:V(()=>[at(me(c(a)("General.ToggleDarkMode")),1)]),_:1},8,["delay"])]),_:1},8,["model-value","keep-color"])])]),E("div",xa,[ne(D(oe,{class:"full-width",label:c(a)("Game.ParticipateInGame"),onClick:d[3]||(d[3]=()=>b()),color:"primary",unelevated:!c(s),outline:c(s),"no-caps":""},null,8,["label","unelevated","outline"]),[[fe]])]),E("div",qa,[ne(D(oe,{class:"full-width",label:c(a)("Game.HostGame"),onClick:d[4]||(d[4]=()=>L()),color:"primary",unelevated:!c(s),outline:c(s),"no-caps":""},null,8,["label","unelevated","outline"]),[[fe]])]),_.value||P.value?(K(),Qt("div",_a,[ne(D(oe,{class:"full-width",label:c(a)("Game.EndGame"),onClick:d[5]||(d[5]=()=>x()),color:"negative",unelevated:!c(s),outline:c(s),"no-caps":""},null,8,["label","unelevated","outline"]),[[fe]])])):qe("",!0),E("div",$a,[D(At)]),E("div",La,[D(sa,{modelValue:c(i),"onUpdate:modelValue":d[6]||(d[6]=z=>Ae(i)?i.value=z:null),options:u,label:c(a)("General.Language"),behavior:"menu","map-options":"","emit-value":"","hide-bottom-space":"",outlined:""},null,8,["modelValue","label"])]),E("div",Da,[ne(D(oe,{class:"full-width",label:c(a)("About.Title"),onClick:d[7]||(d[7]=()=>I()),color:"primary",unelevated:!c(s),outline:c(s),"no-caps":""},null,8,["label","unelevated","outline"]),[[fe]])])])]),_:1},8,["modelValue"]),D(ba,null,{default:V(()=>[D(X,null,{default:V(({Component:z})=>[(K(),J(Et,null,[(K(),J(Vt(z),{key:c(n).fullPath}))],1024))]),_:1})]),_:1})]),_:1})}}}),Ga=da(Ha,[["__scopeId","data-v-bb647054"]]);export{Ga as default};
