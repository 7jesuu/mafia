import{S as Z,al as ge,U as k,V as G,W as l,aa as j,an as K,am as be,a5 as t,X as n,Y as x,Z as m,a8 as V,r as b,a as r,C as ke,aq as Se,ap as E,a6 as o,E as ye,a1 as A,ab as F,_ as $,aY as Ce,aZ as Pe}from"./index-DmMcwZC0.js";import{a as Me,Q as P}from"./QTabPanels-B3HoE92V.js";import{U as O,B as Re,E as Q,D as L,P as _,A as Be,ab as v}from"./UseTheme.Composable-BcudcliF.js";import{u as W}from"./vue-i18n-DyxYMKFe.js";import{u as Y}from"./use-dialog-plugin-component-Ak68DcOJ.js";import{_ as M}from"./ParticipantList.vue_vue_type_script_setup_true_lang-XO-OIwk3.js";import{Q as Ge,a as Te,G as he,f as De,g as qe}from"./Player.Utilities-n-CCluD1.js";import{_ as Ie}from"./PlayerRoleIcon.vue_vue_type_script_setup_true_lang-Cr00yf2s.js";import{_ as we}from"./_plugin-vue_export-helper-DlAUqK2U.js";const xe=Z({__name:"RoundParticipantStatusList",props:{items:{type:Array,required:!0}},setup(T){const d=T,{t:g}=W();ge();const{PlainColor:h}=O();function D(c){return g(Te(c))}function f(c){return["text-"+he(c)]}function s(c){return g(De(c))}function S(c){return["text-"+qe(c)]}return(c,q)=>(k(),G(Ge,{separator:""},{default:l(()=>[(k(!0),j(K,null,be(d.items,u=>(k(),G(Re,{key:u.Participant.Id},{default:l(()=>[t(Q,{side:""},{default:l(()=>[t(Ie,{role:u.Participant.Role,size:"md",color:n(h)},null,8,["role","color"])]),_:2},1024),t(Q,null,{default:l(()=>[t(L,null,{default:l(()=>[x(m(n(g)("Game.PlayerLabel",{Number:u.Participant.ParticipantNumber})),1)]),_:2},1024),t(L,{class:V(u.Participant.Role!==void 0?f(u.Participant.Role):[]),caption:""},{default:l(()=>[x(m(u.Participant.Role!==void 0?D(u.Participant.Role):n(g)("General.Unknown")),1)]),_:2},1032,["class"])]),_:2},1024),t(Q,{side:""},{default:l(()=>[t(L,{class:V(S(u.Status)),caption:""},{default:l(()=>[x(m(s(u.Status)),1)]),_:2},1032,["class"])]),_:2},1024)]),_:2},1024))),128))]),_:1}))}}),Ae={class:"col"},Qe={class:"text-subtitle1"},Le={class:"col-auto"},Ve={class:"col-auto text-caption q-pa-sm"},He={class:"col fit"},Ne={class:"col-auto text-caption q-pa-sm"},Ue={class:"col fit"},ze={class:"col-auto text-caption q-pa-sm"},Ee={class:"col fit"},Fe={class:"col-auto text-caption q-pa-sm"},$e={class:"col fit"},Ye={class:"col-auto text-caption q-pa-sm"},Ze={class:"col-auto"},je={class:"col-auto text-caption q-pa-sm"},Ke={class:"col-auto"},Oe=Z({__name:"RoundDialog",props:{participants:{type:Array,required:!0}},emits:[...Y.emits],setup(T){const d=T,{dialogRef:g,onDialogOK:h,onDialogHide:D}=Y(),{t:f}=W({}),s=b("mafia"),S=b(void 0),c=b(void 0),q=b(void 0),u=b(void 0),p=b([]),y=r(()=>d.participants.filter(e=>e.Role==_.Mafia)),I=r(()=>d.participants.filter(e=>e.Role==_.Murderer)),X=r(()=>d.participants.filter(e=>e.Role==_.Detective)),J=r(()=>d.participants.filter(e=>e.Role==_.Doctor)),ee=r(()=>{let e=d.participants;return y.value.length<2&&(e=e.filter(a=>a.Role!==_.Mafia)),e}),ae=r(()=>{let e=d.participants;return I.value.length<2&&(e=e.filter(a=>a.Role!==_.Murderer)),e}),te=r(()=>d.participants),se=r(()=>I.value),le=r(()=>d.participants.filter(e=>e.Role!=_.Detective)),re=r(()=>y.value.length>0),C=r(()=>se.value.length>0),R=r(()=>J.value.length>0),H=r(()=>X.value.length>0),N=r(()=>d.participants.filter(e=>u.value!==void 0&&e.Id==u.value.Id)),ie=r(()=>{if(s.value=="mafia")return!1;switch(s.value){case"murderers":return re.value}return!0}),oe=r(()=>s.value=="murderers"?y.value.length<1:s.value=="mafia"),ne=r(()=>s.value=="summary"),ue=r(()=>(y.value.length<1||S.value!==void 0)&&(I.value.length<1||c.value!==void 0)),{IsDarkModeEnabled:U}=O();function ce(){let e="detectives";switch(s.value){case"murderers":e="mafia",S.value=void 0,c.value=void 0;break;case"doctors":C.value?e="murderers":e="mafia",c.value=void 0,q.value=void 0;break;case"detectives":R.value?e="doctors":C.value?e="murderers":e="mafia",u.value=void 0;break;case"summary":H.value?e="detectives":R.value?e="doctors":C.value?e="murderers":e="mafia";break}s.value=e}function B(){switch(s.value){case"mafia":if(!C.value){s.value="doctors";break}if(!C.value&&!R.value){s.value="summary";break}s.value="murderers";break;case"murderers":if(!R.value){s.value="summary";break}s.value="doctors";break;case"doctors":if(H.value){s.value="detectives";break}s.value="summary";break;case"detectives":s.value="summary";break}}function z(e,a){const i=p.value.find(_e=>_e.Participant.Id==e.Id);i!==void 0?i.Status=a:p.value.push({Participant:e,Status:a})}function w(e){p.value=p.value.filter(a=>a.Status!=e)}function de(e){S.value=e,w(v.TargetedByMafia),z(e,v.TargetedByMafia),B()}function fe(e){c.value=e,w(v.TargetedByMurderers),z(e,v.TargetedByMurderers),B()}function ve(e){q.value=e,w(v.SavedByDoctors);const a=p.value.find(i=>i.Participant.Id==e.Id&&(i.Status==v.TargetedByMafia||i.Status==v.TargetedByMurderers));a!==void 0&&(a.Status=v.SavedByDoctors),B()}function me(e){u.value=e,B()}function pe(){const e=p.value.filter(a=>a.Status==v.TargetedByMafia||a.Status==v.TargetedByMurderers);h({Participants:e.map(a=>a.Participant)})}return ke(()=>{y.value.length<1&&(s.value="murderers")}),(e,a)=>(k(),G(Pe,{ref_key:"dialogRef",ref:g,onHide:a[7]||(a[7]=()=>n(D)())},{default:l(()=>[t(Se,{class:"q-dialog-plugin dialog-card column no-wrap","non-square":""},{default:l(()=>[t(E,{class:"col-auto row items-center justify-between"},{default:l(()=>[o("div",Ae,[o("div",Qe,m(n(f)("Game.GameRound")),1)]),o("div",Le,[ye(t(A,{icon:"s_close",round:"",flat:""},null,512),[[Be]])])]),_:1}),t(F),t(E,{class:"col grid scroll fit q-pa-none"},{default:l(()=>[t(Me,{modelValue:s.value,"onUpdate:modelValue":a[4]||(a[4]=i=>s.value=i),class:"fit","keep-alive":"",animated:""},{default:l(()=>[t(P,{class:"column fit no-wrap q-pa-none",name:"mafia"},{default:l(()=>[o("div",Ve,m(n(f)("Game.MafiaTargetCaption")),1),o("div",He,[t(M,{class:"fit scroll",items:ee.value,onItemClick:a[0]||(a[0]=i=>de(i)),clickable:""},null,8,["items"])])]),_:1}),t(P,{class:"column fit no-wrap q-pa-none",name:"murderers"},{default:l(()=>[o("div",Ne,m(n(f)("Game.MurdererTargetCaption")),1),o("div",Ue,[t(M,{class:"fit scroll",items:ae.value,onItemClick:a[1]||(a[1]=i=>fe(i)),clickable:""},null,8,["items"])])]),_:1}),t(P,{class:"column fit no-wrap q-pa-none",name:"doctors"},{default:l(()=>[o("div",ze,m(n(f)("Game.DoctorSaveCaption")),1),o("div",Ee,[t(M,{class:"fit scroll",items:te.value,onItemClick:a[2]||(a[2]=i=>ve(i)),clickable:""},null,8,["items"])])]),_:1}),t(P,{class:"column fit no-wrap q-pa-none",name:"detectives"},{default:l(()=>[o("div",Fe,m(n(f)("Game.DetectiveInvestigateCaption")),1),o("div",$e,[t(M,{class:"fit scroll",items:le.value,onItemClick:a[3]||(a[3]=i=>me(i)),clickable:""},null,8,["items"])])]),_:1}),t(P,{class:"column fit no-wrap q-pa-none",name:"summary"},{default:l(()=>[o("div",Ye,m(n(f)("Game.RoundSummary")),1),o("div",Ze,[t(xe,{class:"fit",items:p.value},null,8,["items"])]),N.value.length>0?(k(),j(K,{key:0},[o("div",je,m(n(f)("Game.InvestigatedByDetectives")),1),o("div",Ke,[t(M,{class:"fit",items:N.value},null,8,["items"])])],64)):$("",!0)]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(F),t(Ce,{class:"col-auto",align:"between"},{default:l(()=>[t(A,{class:V({invisible:oe.value}),onClick:a[5]||(a[5]=()=>ce()),label:n(f)("General.Back"),disable:!ie.value,color:"primary",flat:"","no-caps":""},null,8,["class","label","disable"]),ne.value?(k(),G(A,{key:0,onClick:a[6]||(a[6]=()=>pe()),label:n(f)("General.Proceed"),disable:!ue.value,color:"primary",unelevated:!n(U),outline:n(U),"no-caps":""},null,8,["label","disable","unelevated","outline"])):$("",!0)]),_:1})]),_:1})]),_:1},512))}}),ia=we(Oe,[["__scopeId","data-v-4e015164"]]);export{ia as default};
