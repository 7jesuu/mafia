import{c as l,z as d,A as b,a as t,h as g,b as m,g as G}from"./index-DmMcwZC0.js";import{P as e,a0 as a,ab as s}from"./UseTheme.Composable-BcudcliF.js";const v=["ul","ol"],f=l({name:"QList",props:{...d,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(r,{slots:n}){const o=G(),c=b(r,o.proxy.$q),i=t(()=>v.includes(r.tag)?null:"list"),u=t(()=>"q-list"+(r.bordered===!0?" q-list--bordered":"")+(r.dense===!0?" q-list--dense":"")+(r.separator===!0?" q-list--separator":"")+(c.value===!0?" q-list--dark":"")+(r.padding===!0?" q-list--padding":""));return()=>g(r.tag,{class:u.value,role:i.value},m(n.default))}});function D(r){switch(r){case e.Civilian:case e.PossibleCivilian:return"las la-user-tie";case e.Detective:case e.PossibleDetective:return"las la-user-secret";case e.Doctor:case e.PossibleDoctor:return"las la-user-nurse";case e.Mafia:case e.PossibleMafia:return"las la-mask";case e.Murderer:case e.PossibleMurderer:return"las la-skull-crossbones"}return"las la-question"}function M(r){switch(r){case e.Civilian:return"Game.Civilian";case e.Detective:return"Game.Detective";case e.Doctor:return"Game.Doctor";case e.Mafia:return"Game.Mafia";case e.Murderer:return"Game.Murderer";case e.PossibleCivilian:return"Game.PossibleCivilian";case e.PossibleDetective:return"Game.PossibleDetective";case e.PossibleDoctor:return"Game.PossibleDoctor";case e.PossibleMafia:return"Game.PossibleMafia";case e.PossibleMurderer:return"Game.PossibleMurderer"}return"General.Unknown"}function A(r){switch(r){case e.Civilian:return"blue";case e.Detective:return"teal";case e.Doctor:return"cyan";case e.Mafia:return"red";case e.Murderer:return"pink";case e.PossibleCivilian:return"blue-3";case e.PossibleDetective:return"teal-3";case e.PossibleDoctor:return"cyan-3";case e.PossibleMafia:return"red-3";case e.PossibleMurderer:return"pink-3"}return""}function k(r){switch(r){case a.Accuses:return"Game.AccusesNote";case a.ActsNervous:return"Game.ActsNervousNote";case a.Agrees:return"Game.AgreesNote";case a.Ignores:return"Game.IgnoresNote";case a.StaysSilent:return"Game.StaysSilentNote";case a.VotesAgainst:return"Game.VotesAgainstNote"}return"General.Unknown"}function S(r){switch(r){case a.Accuses:return"red";case a.ActsNervous:return"pink";case a.Agrees:return"green";case a.Ignores:return"blue-grey";case a.StaysSilent:return"grey";case a.VotesAgainst:return"orange"}return""}function B(r){switch(r){case a.Accuses:return"las la-angry";case a.ActsNervous:return"las la-grin-beam-sweat";case a.Agrees:return"las la-smile-beam";case a.Ignores:return"las la-meh";case a.StaysSilent:return"las la-meh-blank";case a.VotesAgainst:return"las la-hand-point-up"}return""}function N(r){switch(r){case s.Active:return"Game.Active";case s.SavedByDoctors:return"Game.SavedByDoctors";case s.TargetedByMafia:return"Game.TargetedByMafia";case s.TargetedByMurderers:return"Game.TargetedByMurderers"}return"General.Unknown"}function h(r){switch(r){case s.Active:return"blue";case s.SavedByDoctors:return"cyan";case s.TargetedByMafia:return"red";case s.TargetedByMurderers:return"pink"}return"General.Unknown"}export{A as G,f as Q,M as a,B as b,k as c,S as d,D as e,N as f,h as g};
