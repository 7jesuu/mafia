import{S as T,r as p,a as b,U as h,V as I,W as r,a5 as o,ap as q,ao as y,a6 as s,Z as w,X as u,E as k,a1 as f,ab as v,aY as x,aZ as B}from"./index-TjxL4W8f.js";import{Q as N}from"./QSelect-ChMtpbZF.js";import{a0 as l,a1 as O,A as U,a2 as F}from"./UseTheme.Composable-BsRr30zk.js";import{u as H}from"./vue-i18n-C0NjH_3s.js";import{u as g}from"./use-dialog-plugin-component-6iuMv6BO.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Z={class:"col"},j={class:"text-subtitle1"},E={class:"col-auto"},K={class:"column fit q-col-gutter-y-sm"},L={class:"col-auto"},W={class:"col-auto"},X=T({__name:"PlayerNoteAddDialog",props:{playerCount:{type:Number,required:!0},playerNumber:{type:Number,required:!0}},emits:[...g.emits],setup(_){const n=_,{dialogRef:A,onDialogOK:P,onDialogHide:G}=g(),{t:a}=H({}),S=[l.ActsNervous,l.StaysSilent],C=[{value:l.Accuses,label:a("Game.AccusesNote")},{value:l.ActsNervous,label:a("Game.ActsNervousNote")},{value:l.Agrees,label:a("Game.AgreesNote")},{value:l.Ignores,label:a("Game.IgnoresNote")},{value:l.StaysSilent,label:a("Game.StaysSilentNote")},{value:l.VotesAgainst,label:a("Game.VotesAgainstNote")}],i=p(l.Accuses),c=p(D()),V=b(()=>O(n.playerCount,e=>({value:e+1,label:a("Game.PlayerLabel",{Number:e+1})})).filter(e=>e.value!=n.playerNumber)),m=b(()=>!S.includes(i.value));function D(){for(let e=1;e<=n.playerCount;e++)if(e!==n.playerNumber)return e;return 1}function Q(){const e={Id:F(),Type:i.value};m.value&&(e.PlayerNumber=c.value),P(e)}return(e,t)=>(h(),I(B,{ref_key:"dialogRef",ref:A,onHide:t[3]||(t[3]=()=>u(G)())},{default:r(()=>[o(q,{class:"q-dialog-plugin dialog-card column no-wrap","non-square":""},{default:r(()=>[o(y,{class:"col-auto row items-center justify-between"},{default:r(()=>[s("div",Z,[s("div",j,w(u(a)("Game.AddNote")),1)]),s("div",E,[k(o(f,{icon:"s_close",round:"",flat:""},null,512),[[U]])])]),_:1}),o(v),o(y,{class:"col fit scroll"},{default:r(()=>[s("div",K,[s("div",L,[o(N,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=d=>i.value=d),options:C,label:u(a)("Game.NoteType"),behavior:"menu","map-options":"","emit-value":"","hide-bottom-space":"",outlined:""},null,8,["modelValue","label"])]),s("div",W,[o(N,{modelValue:c.value,"onUpdate:modelValue":t[1]||(t[1]=d=>c.value=d),options:V.value,label:u(a)("Game.PlayerNumber"),disable:!m.value,behavior:"menu","map-options":"","emit-value":"","hide-bottom-space":"",outlined:""},null,8,["modelValue","options","label","disable"])])])]),_:1}),o(v),o(x,{class:"col-auto",align:"right"},{default:r(()=>[o(f,{onClick:t[2]||(t[2]=()=>Q()),label:u(a)("General.Add"),color:"primary",flat:"","no-caps":""},null,8,["label"])]),_:1})]),_:1})]),_:1},512))}}),ae=R(X,[["__scopeId","data-v-c107aaf6"]]);export{ae as default};
