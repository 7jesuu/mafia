import{S as G,a as k,U as i,V as c,W as s,a5 as l,aq as M,ap as u,a6 as r,Z as d,X as f,E as m,a1 as Q,ab as y,aa as R,an as S,am as w,Y as x,ao as B,aZ as q}from"./index-DmMcwZC0.js";import{P as e,A as h,B as A,E as b,D as E}from"./UseTheme.Composable-BcudcliF.js";import{Q as N}from"./Player.Utilities-n-CCluD1.js";import{u as U}from"./vue-i18n-DyxYMKFe.js";import{u as p}from"./use-dialog-plugin-component-Ak68DcOJ.js";import{_ as H}from"./PlayerRoleIcon.vue_vue_type_script_setup_true_lang-Cr00yf2s.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Z={class:"col"},j={class:"text-subtitle1"},z={class:"col-auto"},F=G({__name:"RoleSelectDialog",props:{restrictedRoles:{type:Array,required:!1,default:()=>[]}},emits:[...p.emits],setup(_){const P=_,{dialogRef:D,onDialogOK:V,onDialogHide:g}=p(),{t:a}=U({});e.PossibleCivilian,e.PossibleDetective,e.PossibleDoctor,e.PossibleMafia,e.PossibleMurderer;const v=[{Value:e.Civilian,Label:a("Game.Civilian")},{Value:e.Doctor,Label:a("Game.Doctor")},{Value:e.Detective,Label:a("Game.Detective")},{Value:e.Mafia,Label:a("Game.Mafia")},{Value:e.Murderer,Label:a("Game.Murderer")},{Value:e.PossibleCivilian,Label:a("Game.PossibleCivilian")},{Value:e.PossibleDoctor,Label:a("Game.PossibleDoctor")},{Value:e.PossibleDetective,Label:a("Game.PossibleDetective")},{Value:e.PossibleMafia,Label:a("Game.PossibleMafia")},{Value:e.PossibleMurderer,Label:a("Game.PossibleMurderer")},{Value:e.Unknown,Label:a("General.Unknown")}],L=k(()=>v.filter(o=>!P.restrictedRoles.includes(o.Value)));function C(o){V(o)}return(o,n)=>(i(),c(q,{ref_key:"dialogRef",ref:D,onHide:n[0]||(n[0]=()=>f(g)())},{default:s(()=>[l(M,{class:"q-dialog-plugin dialog-card column no-wrap","non-square":""},{default:s(()=>[l(u,{class:"col-auto row items-center justify-between"},{default:s(()=>[r("div",Z,[r("div",j,d(f(a)("Game.SetRole")),1)]),r("div",z,[m(l(Q,{icon:"s_close",round:"",flat:""},null,512),[[h]])])]),_:1}),l(y),l(u,{class:"col grid scroll fit q-pa-none"},{default:s(()=>[l(N,{class:"scroll",separator:""},{default:s(()=>[(i(!0),R(S,null,w(L.value,t=>m((i(),c(A,{key:t.Value,onClick:()=>C(t.Value),clickable:""},{default:s(()=>[l(b,{side:""},{default:s(()=>[l(H,{role:t.Value,size:"lg",color:"black"},null,8,["role"])]),_:2},1024),l(b,null,{default:s(()=>[l(E,null,{default:s(()=>[x(d(t.Label),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[B]])),128))]),_:1})]),_:1})]),_:1})]),_:1},512))}}),J=I(F,[["__scopeId","data-v-3567abb3"]]);export{J as default};
