import{u as V,h as _,o as a,c as n,e as i,g as s,F as U,r as b,a as c,i as u,d}from"./app.cb511904.js";import{_ as h,a as v,b as k}from"./FormTextarea.e38b9b97.js";import{_ as F,a as C}from"./FormSelectCreator.130c3fef.js";const $=c("br",null,null,-1),G={__name:"CreateForm",props:{routes:{type:Object,required:!0}},setup(m){const l=V({title:null,invitees:null,questions:[]}),p=()=>{l.questions.push({title:null,type:r.value,choices:[]})},r=_(null),f=["FormSelect","FormRadioGroupCard"];return(B,t)=>(a(),n("div",null,[i(h,{label:"\u0E0A\u0E37\u0E48\u0E2D\u0E1F\u0E2D\u0E23\u0E4C\u0E21",class:"border p-2",modelValue:s(l).title,"onUpdate:modelValue":t[0]||(t[0]=e=>s(l).title=e)},null,8,["modelValue"]),i(v,{label:"\u0E1C\u0E39\u0E49\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21",class:"border p-2",modelValue:s(l).invitees,"onUpdate:modelValue":t[1]||(t[1]=e=>s(l).invitees=e),mode:"array"},null,8,["modelValue"]),(a(!0),n(U,null,b(s(l).questions,(e,y)=>(a(),n("div",{key:y,class:"m-4 p-4 border rounded space-y-2"},[e.type==="FormSelect"?(a(),u(F,{key:0,title:e.title,"onUpdate:title":o=>e.title=o,choices:e.choices,"onUpdate:choices":o=>e.choices=o},null,8,["title","onUpdate:title","choices","onUpdate:choices"])):d("",!0),e.type==="FormRadioGroupCard"?(a(),u(C,{key:1,title:e.title,"onUpdate:title":o=>e.title=o,choices:e.choices,"onUpdate:choices":o=>e.choices=o},null,8,["title","onUpdate:title","choices","onUpdate:choices"])):d("",!0)]))),128)),i(k,{name:"type",modelValue:r.value,"onUpdate:modelValue":t[2]||(t[2]=e=>r.value=e),options:f},null,8,["modelValue"]),c("button",{onClick:p}," \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E33\u0E16\u0E32\u0E21 "),$,c("button",{class:"mt-4",onClick:t[3]||(t[3]=e=>s(l).post(m.routes.store))}," \u0E2A\u0E23\u0E49\u0E32\u0E07 ")]))}};export{G as default};