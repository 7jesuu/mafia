import{A as Fe,r as V,a as t,b3 as Re,b4 as K,o as ze,z as Pe,b5 as Ae,g as re,aF as De,h as f,F as Ee,b6 as je,c as Ue,b7 as Ke,w as Oe,y as Qe,S as Xe,U as We,aa as Ge,a6 as B,a5 as R,X as te,a1 as le,b8 as He}from"./index-DmMcwZC0.js";import{T as Je}from"./TouchPan-CKk620Sp.js";import{b as L}from"./QSelect-BFuEKhT7.js";import{U as Ye}from"./UseTheme.Composable-BcudcliF.js";import{_ as Ze}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ne="q-slider__marker-labels",ea=l=>({value:l}),aa=({marker:l})=>f("div",{key:l.value,style:l.style,class:l.classes},l.label),ue=[34,37,40,33,39,38],ta={...Pe,...Ae,min:{type:Number,default:0},max:{type:Number,default:100},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:l=>l>=0},snap:Boolean,vertical:Boolean,reverse:Boolean,color:String,markerLabelsClass:String,label:Boolean,labelColor:String,labelTextColor:String,labelAlways:Boolean,switchLabelSide:Boolean,markers:[Boolean,Number],markerLabels:[Boolean,Array,Object,Function],switchMarkerLabelsSide:Boolean,trackImg:String,trackColor:String,innerTrackImg:String,innerTrackColor:String,selectionColor:String,selectionImg:String,thumbSize:{type:String,default:"20px"},trackSize:{type:String,default:"4px"},disable:Boolean,readonly:Boolean,dense:Boolean,tabindex:[String,Number],thumbColor:String,thumbPath:{type:String,default:"M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"}},la=["pan","update:modelValue","change"];function na({updateValue:l,updatePosition:k,getDragging:u,formAttrs:r}){const{props:e,emit:h,slots:C,proxy:{$q:d}}=re(),q=Fe(e,d),w=je(r),p=V(!1),g=V(!1),b=V(!1),i=V(!1),v=t(()=>e.vertical===!0?"--v":"--h"),z=t(()=>"-"+(e.switchLabelSide===!0?"switched":"standard")),y=t(()=>e.vertical===!0?e.reverse===!0:e.reverse!==(d.lang.rtl===!0)),x=t(()=>isNaN(e.innerMin)===!0||e.innerMin<e.min?e.min:e.innerMin),S=t(()=>isNaN(e.innerMax)===!0||e.innerMax>e.max?e.max:e.innerMax),c=t(()=>e.disable!==!0&&e.readonly!==!0&&x.value<S.value),M=t(()=>{if(e.step===0)return n=>n;const a=(String(e.step).trim().split(".")[1]||"").length;return n=>parseFloat(n.toFixed(a))}),_=t(()=>e.step===0?1:e.step),se=t(()=>c.value===!0?e.tabindex||0:-1),T=t(()=>e.max-e.min),O=t(()=>S.value-x.value),I=t(()=>A(x.value)),P=t(()=>A(S.value)),N=t(()=>e.vertical===!0?y.value===!0?"bottom":"top":y.value===!0?"right":"left"),Q=t(()=>e.vertical===!0?"height":"width"),oe=t(()=>e.vertical===!0?"width":"height"),X=t(()=>e.vertical===!0?"vertical":"horizontal"),ie=t(()=>{const a={role:"slider","aria-valuemin":x.value,"aria-valuemax":S.value,"aria-orientation":X.value,"data-step":e.step};return e.disable===!0?a["aria-disabled"]="true":e.readonly===!0&&(a["aria-readonly"]="true"),a}),ce=t(()=>`q-slider q-slider${v.value} q-slider--${p.value===!0?"":"in"}active inline no-wrap `+(e.vertical===!0?"row":"column")+(e.disable===!0?" disabled":" q-slider--enabled"+(c.value===!0?" q-slider--editable":""))+(b.value==="both"?" q-slider--focus":"")+(e.label||e.labelAlways===!0?" q-slider--label":"")+(e.labelAlways===!0?" q-slider--label-always":"")+(q.value===!0?" q-slider--dark":"")+(e.dense===!0?" q-slider--dense q-slider--dense"+v.value:""));function F(a){const n="q-slider__"+a;return`${n} ${n}${v.value} ${n}${v.value}${z.value}`}function W(a){const n="q-slider__"+a;return`${n} ${n}${v.value}`}const de=t(()=>{const a=e.selectionColor||e.color;return"q-slider__selection absolute"+(a!==void 0?` text-${a}`:"")}),me=t(()=>W("markers")+" absolute overflow-hidden"),ve=t(()=>W("track-container")),fe=t(()=>F("pin")),be=t(()=>F("label")),pe=t(()=>F("text-container")),ke=t(()=>F("marker-labels-container")+(e.markerLabelsClass!==void 0?` ${e.markerLabelsClass}`:"")),Ce=t(()=>"q-slider__track relative-position no-outline"+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),ge=t(()=>{const a={[oe.value]:e.trackSize};return e.trackImg!==void 0&&(a.backgroundImage=`url(${e.trackImg}) !important`),a}),xe=t(()=>"q-slider__inner absolute"+(e.innerTrackColor!==void 0?` bg-${e.innerTrackColor}`:"")),G=t(()=>{const a=P.value-I.value,n={[N.value]:`${100*I.value}%`,[Q.value]:a===0?"2px":`${100*a}%`};return e.innerTrackImg!==void 0&&(n.backgroundImage=`url(${e.innerTrackImg}) !important`),n});function he(a){const{min:n,max:s,step:o}=e;let m=n+a*(s-n);if(o>0){const $=(m-x.value)%o;m+=(Math.abs($)>=o/2?($<0?-1:1)*o:0)-$}return m=M.value(m),L(m,x.value,S.value)}function A(a){return T.value===0?0:(a-e.min)/T.value}function ye(a,n){const s=De(a),o=e.vertical===!0?L((s.top-n.top)/n.height,0,1):L((s.left-n.left)/n.width,0,1);return L(y.value===!0?1-o:o,I.value,P.value)}const H=t(()=>Re(e.markers)===!0?e.markers:_.value),J=t(()=>{const a=[],n=H.value,s=e.max;let o=e.min;do a.push(o),o+=n;while(o<s);return a.push(s),a}),Y=t(()=>{const a=` ${ne}${v.value}-`;return ne+`${a}${e.switchMarkerLabelsSide===!0?"switched":"standard"}${a}${y.value===!0?"rtl":"ltr"}`}),D=t(()=>e.markerLabels===!1?null:Me(e.markerLabels).map((a,n)=>({index:n,value:a.value,label:a.label||a.value,classes:Y.value+(a.classes!==void 0?" "+a.classes:""),style:{...ee(a.value),...a.style||{}}}))),Z=t(()=>({markerList:D.value,markerMap:$e.value,classes:Y.value,getStyle:ee})),Se=t(()=>{const a=O.value===0?"2px":100*H.value/O.value;return{...G.value,backgroundSize:e.vertical===!0?`2px ${a}%`:`${a}% 2px`}});function Me(a){if(a===!1)return null;if(a===!0)return J.value.map(ea);if(typeof a=="function")return J.value.map(s=>{const o=a(s);return K(o)===!0?{...o,value:s}:{value:s,label:o}});const n=({value:s})=>s>=e.min&&s<=e.max;return Array.isArray(a)===!0?a.map(s=>K(s)===!0?s:{value:s}).filter(n):Object.keys(a).map(s=>{const o=a[s],m=Number(s);return K(o)===!0?{...o,value:m}:{value:m,label:o}}).filter(n)}function ee(a){return{[N.value]:`${100*(a-e.min)/T.value}%`}}const $e=t(()=>{if(e.markerLabels===!1)return null;const a={};return D.value.forEach(n=>{a[n.value]=n}),a});function _e(){if(C["marker-label-group"]!==void 0)return C["marker-label-group"](Z.value);const a=C["marker-label"]||aa;return D.value.map(n=>a({marker:n,...Z.value}))}const Ve=t(()=>[[Je,qe,void 0,{[X.value]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function qe(a){a.isFinal===!0?(i.value!==void 0&&(k(a.evt),a.touch===!0&&l(!0),i.value=void 0,h("pan","end")),p.value=!1,b.value=!1):a.isFirst===!0?(i.value=u(a.evt),k(a.evt),l(),p.value=!0,h("pan","start")):(k(a.evt),l())}function ae(){b.value=!1}function Le(a){k(a,u(a)),l(),g.value=!0,p.value=!0,document.addEventListener("mouseup",E,!0)}function E(){g.value=!1,p.value=!1,l(!0),ae(),document.removeEventListener("mouseup",E,!0)}function we(a){k(a,u(a)),l(!0)}function Be(a){ue.includes(a.keyCode)&&l(!0)}function Te(a){if(e.vertical===!0)return null;const n=d.lang.rtl!==e.reverse?1-a:a;return{transform:`translateX(calc(${2*n-1} * ${e.thumbSize} / 2 + ${50-100*n}%))`}}function Ie(a){const n=t(()=>g.value===!1&&(b.value===a.focusValue||b.value==="both")?" q-slider--focus":""),s=t(()=>`q-slider__thumb q-slider__thumb${v.value} q-slider__thumb${v.value}-${y.value===!0?"rtl":"ltr"} absolute non-selectable`+n.value+(a.thumbColor.value!==void 0?` text-${a.thumbColor.value}`:"")),o=t(()=>({width:e.thumbSize,height:e.thumbSize,[N.value]:`${100*a.ratio.value}%`,zIndex:b.value===a.focusValue?2:void 0})),m=t(()=>a.labelColor.value!==void 0?` text-${a.labelColor.value}`:""),$=t(()=>Te(a.ratio.value)),j=t(()=>"q-slider__text"+(a.labelTextColor.value!==void 0?` text-${a.labelTextColor.value}`:""));return()=>{const U=[f("svg",{class:"q-slider__thumb-shape absolute-full",viewBox:"0 0 20 20","aria-hidden":"true"},[f("path",{d:e.thumbPath})]),f("div",{class:"q-slider__focus-ring fit"})];return(e.label===!0||e.labelAlways===!0)&&(U.push(f("div",{class:fe.value+" absolute fit no-pointer-events"+m.value},[f("div",{class:be.value,style:{minWidth:e.thumbSize}},[f("div",{class:pe.value,style:$.value},[f("span",{class:j.value},a.label.value)])])])),e.name!==void 0&&e.disable!==!0&&w(U,"push")),f("div",{class:s.value,style:o.value,...a.getNodeData()},U)}}function Ne(a,n,s,o){const m=[];e.innerTrackColor!=="transparent"&&m.push(f("div",{key:"inner",class:xe.value,style:G.value})),e.selectionColor!=="transparent"&&m.push(f("div",{key:"selection",class:de.value,style:a.value})),e.markers!==!1&&m.push(f("div",{key:"marker",class:me.value,style:Se.value})),o(m);const $=[Ee("div",{key:"trackC",class:ve.value,tabindex:n.value,...s.value},[f("div",{class:Ce.value,style:ge.value},m)],"slide",c.value,()=>Ve.value)];if(e.markerLabels!==!1){const j=e.switchMarkerLabelsSide===!0?"unshift":"push";$[j](f("div",{key:"markerL",class:ke.value},_e()))}return $}return ze(()=>{document.removeEventListener("mouseup",E,!0)}),{state:{active:p,focus:b,preventFocus:g,dragging:i,editable:c,classes:ce,tabindex:se,attributes:ie,roundValueFn:M,keyStep:_,trackLen:T,innerMin:x,innerMinRatio:I,innerMax:S,innerMaxRatio:P,positionProp:N,sizeProp:Q,isReversed:y},methods:{onActivate:Le,onMobileClick:we,onBlur:ae,onKeyup:Be,getContent:Ne,getThumbRenderFn:Ie,convertRatioToModel:he,convertModelToRatio:A,getDraggingRatio:ye}}}const ra=()=>({}),ua=Ue({name:"QSlider",props:{...ta,modelValue:{required:!0,default:null,validator:l=>typeof l=="number"||l===null},labelValue:[String,Number]},emits:la,setup(l,{emit:k}){const{proxy:{$q:u}}=re(),{state:r,methods:e}=na({updateValue:v,updatePosition:y,getDragging:z,formAttrs:Ke(l)}),h=V(null),C=V(0),d=V(0);function q(){d.value=l.modelValue===null?r.innerMin.value:L(l.modelValue,r.innerMin.value,r.innerMax.value)}Oe(()=>`${l.modelValue}|${r.innerMin.value}|${r.innerMax.value}`,q),q();const w=t(()=>e.convertModelToRatio(d.value)),p=t(()=>r.active.value===!0?C.value:w.value),g=t(()=>{const c={[r.positionProp.value]:`${100*r.innerMinRatio.value}%`,[r.sizeProp.value]:`${100*(p.value-r.innerMinRatio.value)}%`};return l.selectionImg!==void 0&&(c.backgroundImage=`url(${l.selectionImg}) !important`),c}),b=e.getThumbRenderFn({focusValue:!0,getNodeData:ra,ratio:p,label:t(()=>l.labelValue!==void 0?l.labelValue:d.value),thumbColor:t(()=>l.thumbColor||l.color),labelColor:t(()=>l.labelColor),labelTextColor:t(()=>l.labelTextColor)}),i=t(()=>r.editable.value!==!0?{}:u.platform.is.mobile===!0?{onClick:e.onMobileClick}:{onMousedown:e.onActivate,onFocus:x,onBlur:e.onBlur,onKeydown:S,onKeyup:e.onKeyup});function v(c){d.value!==l.modelValue&&k("update:modelValue",d.value),c===!0&&k("change",d.value)}function z(){return h.value.getBoundingClientRect()}function y(c,M=r.dragging.value){const _=e.getDraggingRatio(c,M);d.value=e.convertRatioToModel(_),C.value=l.snap!==!0||l.step===0?_:e.convertModelToRatio(d.value)}function x(){r.focus.value=!0}function S(c){if(ue.includes(c.keyCode)===!1)return;Qe(c);const M=([34,33].includes(c.keyCode)?10:1)*r.keyStep.value,_=([34,37,40].includes(c.keyCode)?-1:1)*(r.isReversed.value===!0?-1:1)*(l.vertical===!0?-1:1)*M;d.value=L(r.roundValueFn.value(d.value+_),r.innerMin.value,r.innerMax.value),v()}return()=>{const c=e.getContent(g,r.tabindex,i,M=>{M.push(b())});return f("div",{ref:h,class:r.classes.value+(l.modelValue===null?" q-slider--no-value":""),...r.attributes.value,"aria-valuenow":l.modelValue},c)}}}),sa={class:"column q-col-gutter-y-sm"},oa={class:"col-auto row justify-center items-center q-col-gutter-x-sm"},ia={class:"col"},ca={class:"col"},da={class:"col"},ma={class:"col-auto"},va=Xe({__name:"PlayerCountInput",props:{modelValue:{type:Number,required:!0},minimum:{type:Number,required:!0},maximum:{type:Number,required:!0}},emits:["update:modelValue"],setup(l,{emit:k}){const u=l,r=k,e=t(()=>"#".repeat(String(Math.trunc(u.maximum)).length)),h=t(()=>u.modelValue<u.maximum),C=t(()=>u.modelValue>u.minimum),{PlainColor:d}=Ye();function q(){(u.modelValue<u.minimum||u.modelValue>u.maximum)&&r("update:modelValue",Math.min(Math.max(u.modelValue,u.minimum),u.maximum))}function w(){h.value&&r("update:modelValue",u.modelValue+1)}function p(){C.value&&r("update:modelValue",u.modelValue-1)}function g(b){const i=Number(b);i>=u.minimum&&i<=u.maximum&&r("update:modelValue",i)}return(b,i)=>(We(),Ge("div",sa,[B("div",oa,[B("div",ia,[R(le,{onClick:i[0]||(i[0]=()=>p()),disable:!C.value,icon:"sym_s_remove",size:"lg",color:te(d),flat:""},null,8,["disable","color"])]),B("div",ca,[R(He,{class:"player-count-input","model-value":u.modelValue,type:"text",mask:e.value,"onUpdate:modelValue":i[1]||(i[1]=v=>g(v)),onBlur:i[2]||(i[2]=()=>q()),"input-class":"text-center",maxlength:"2","unmasked-value":"",outlined:""},null,8,["model-value","mask"])]),B("div",da,[R(le,{onClick:i[3]||(i[3]=()=>w()),disable:!h.value,icon:"sym_s_add",size:"lg",color:te(d),flat:""},null,8,["disable","color"])])]),B("div",ma,[R(ua,{"model-value":u.modelValue,min:u.minimum,max:u.maximum,"onUpdate:modelValue":i[4]||(i[4]=v=>g(v))},null,8,["model-value","min","max"])])]))}}),ga=Ze(va,[["__scopeId","data-v-525a7f1e"]]);export{ga as P};
