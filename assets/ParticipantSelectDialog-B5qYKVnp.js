import{S as D,r as P,a as V,U as p,V as q,W as t,a5 as e,aq as A,ap as d,a6 as r,Z as Q,X as l,E as w,a1 as m,ab as f,aa as x,an as I,aY as U,a0 as N,_ as E,aZ as G}from"./index-D_gqTrYC.js";import{U as H,B as O,_ as R}from"./_plugin-vue_export-helper-CJb4IBP4.js";import{u as Z}from"./vue-i18n-90NKZck8.js";import{u as _}from"./use-dialog-plugin-component-4JkshwEf.js";import{_ as h}from"./ParticipantList.vue_vue_type_script_setup_true_lang-Dik7nqtR.js";import"./Player.Utilities-Dy5UdHDb.js";import"./PlayerRoleIcon.vue_vue_type_script_setup_true_lang-C27E6ABn.js";const j={class:"col"},F={class:"text-subtitle1"},K={class:"col-auto"},T=D({__name:"ParticipantSelectDialog",props:{participants:{type:Array,required:!0},multiple:{type:Boolean,required:!1,default:!1}},emits:[..._.emits],setup(g){const i=g,{dialogRef:C,onDialogOK:v,onDialogHide:S}=_(),{t:c}=Z({}),o=P([]),k=V(()=>o.value.length>0),{ButtonStyle:y}=H();function b(){u(o.value)}function u(s){v({Participants:s})}function B(s){u([s])}return(s,a)=>(p(),q(G,{ref_key:"dialogRef",ref:C,onHide:a[3]||(a[3]=()=>l(S)()),persistent:""},{default:t(()=>[e(A,{class:"q-dialog-plugin dialog-card column no-wrap","non-square":""},{default:t(()=>[e(d,{class:"col-auto row items-center justify-between"},{default:t(()=>[r("div",j,[r("div",F,Q(l(c)("Game.SelectParticipants")),1)]),r("div",K,[w(e(m,{icon:"s_close",round:"",flat:""},null,512),[[O]])])]),_:1}),e(f),e(d,{class:"col grid fit q-pa-none"},{default:t(()=>[e(h,{class:"fit scroll",modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=n=>o.value=n),items:i.participants,selection:i.multiple,onItemClick:a[1]||(a[1]=n=>B(n)),clickable:""},null,8,["modelValue","items","selection"])]),_:1}),i.multiple?(p(),x(I,{key:0},[e(f),e(U,{class:"col-auto",align:"right"},{default:t(()=>[e(m,N({onClick:a[2]||(a[2]=()=>b()),label:l(c)("General.Accept"),disable:!k.value},l(y),{color:"primary","no-caps":""}),null,16,["label","disable"])]),_:1})],64)):E("",!0)]),_:1})]),_:1},512))}}),M=R(T,[["__scopeId","data-v-7dce44e2"]]);export{M as default};
