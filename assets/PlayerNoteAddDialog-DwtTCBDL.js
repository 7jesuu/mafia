import{S as h,r as p,a as y,U as q,V as B,W as u,a5 as o,aq as I,ap as b,a6 as s,Z as w,X as r,E as U,a1 as v,ab as N,aY as k,a0 as x,aZ as O}from"./index-D_gqTrYC.js";import{Q as f}from"./QSelect-CBoO8Ede.js";import{a8 as l,a9 as F,U as H,B as R,aa as Z,_ as j}from"./_plugin-vue_export-helper-CJb4IBP4.js";import{u as E}from"./vue-i18n-90NKZck8.js";import{u as g}from"./use-dialog-plugin-component-4JkshwEf.js";import"./format-BvkBI9bc.js";const K={class:"col"},L={class:"text-subtitle1"},W={class:"col-auto"},X={class:"column fit q-col-gutter-y-sm"},Y={class:"col-auto"},z={class:"col-auto"},J=h({__name:"PlayerNoteAddDialog",props:{playerCount:{type:Number,required:!0},playerNumber:{type:Number,required:!0}},emits:[...g.emits],setup(_){const n=_,{dialogRef:A,onDialogOK:P,onDialogHide:S}=g(),{t:a}=E({}),G=[l.ActsNervous,l.StaysSilent],C=[{value:l.Accuses,label:a("Game.AccusesNote")},{value:l.ActsNervous,label:a("Game.ActsNervousNote")},{value:l.Agrees,label:a("Game.AgreesNote")},{value:l.Ignores,label:a("Game.IgnoresNote")},{value:l.StaysSilent,label:a("Game.StaysSilentNote")},{value:l.VotesAgainst,label:a("Game.VotesAgainstNote")}],i=p(l.Accuses),c=p(Q()),V=y(()=>F(n.playerCount,e=>({value:e+1,label:a("Game.PlayerLabel",{Number:e+1})})).filter(e=>e.value!=n.playerNumber)),m=y(()=>!G.includes(i.value)),{ButtonStyle:D}=H();function Q(){for(let e=1;e<=n.playerCount;e++)if(e!==n.playerNumber)return e;return 1}function T(){const e={Id:Z(),Type:i.value};m.value&&(e.PlayerNumber=c.value),P(e)}return(e,t)=>(q(),B(O,{ref_key:"dialogRef",ref:A,onHide:t[3]||(t[3]=()=>r(S)())},{default:u(()=>[o(I,{class:"q-dialog-plugin dialog-card column no-wrap","non-square":""},{default:u(()=>[o(b,{class:"col-auto row items-center justify-between"},{default:u(()=>[s("div",K,[s("div",L,w(r(a)("Game.AddNote")),1)]),s("div",W,[U(o(v,{icon:"s_close",round:"",flat:""},null,512),[[R]])])]),_:1}),o(N),o(b,{class:"col fit scroll"},{default:u(()=>[s("div",X,[s("div",Y,[o(f,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=d=>i.value=d),options:C,label:r(a)("Game.NoteType"),behavior:"menu","map-options":"","emit-value":"","hide-bottom-space":"",outlined:""},null,8,["modelValue","label"])]),s("div",z,[o(f,{modelValue:c.value,"onUpdate:modelValue":t[1]||(t[1]=d=>c.value=d),options:V.value,label:r(a)("Game.PlayerNumber"),disable:!m.value,behavior:"menu","map-options":"","emit-value":"","hide-bottom-space":"",outlined:""},null,8,["modelValue","options","label","disable"])])])]),_:1}),o(N),o(k,{class:"col-auto",align:"right"},{default:u(()=>[o(v,x({onClick:t[2]||(t[2]=()=>T()),label:r(a)("General.Add"),color:"primary"},r(D),{"no-caps":""}),null,16,["label"])]),_:1})]),_:1})]),_:1},512))}}),te=j(J,[["__scopeId","data-v-59885504"]]);export{te as default};
