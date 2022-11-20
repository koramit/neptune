import{o as s,c as d,a as l,r as V,f as x,t as f,F as p,i as c,j as C,b as m,k as q,m as h,l as k,e as S}from"./app.5a3cf92c.js";import{a as b,_ as y}from"./FormCheckbox.ff9c18a4.js";const U=["type","value"],v={__name:"FormInput",props:{type:{type:String,default:"text"},modelValue:{type:[String,Number,null],required:!0}},emits:["update:modelValue"],setup(e){return(o,n)=>(s(),d("div",null,[l("input",{class:"border border-slate-800 rounded px-2 py-1",type:e.type,value:e.modelValue,onInput:n[0]||(n[0]=a=>o.$emit("update:modelValue",a.target.value))},null,40,U)]))}},I=["for"],N=["id","name","value","checked"],B={__name:"FormRadio",props:{name:{type:String,required:!0},options:{type:Array,required:!0},modelValue:{type:[String,Number,null],required:!0}},emits:["update:modelValue"],setup(e){return(o,n)=>(s(!0),d(p,null,V(e.options,(a,t)=>(s(),d("div",{for:`${e.name}:${t}`,key:t},[l("label",null,[l("input",{type:"radio",id:`${e.name}:${t}`,name:e.name,value:a,onChange:n[0]||(n[0]=i=>o.$emit("update:modelValue",i.target.value)),checked:e.modelValue===a},null,40,N),x(f(a),1)])],8,I))),128))}},D=["value"],_={__name:"FormTextarea",props:{modelValue:{type:[String,null],required:!0}},emits:["update:modelValue"],setup(e){return(o,n)=>(s(),d("div",null,[l("textarea",{value:e.modelValue,onInput:n[0]||(n[0]=a=>o.$emit("update:modelValue",a.target.value))},f(e.modelValue),41,D)]))}};function R(){return{resolveControlComponent:o=>{if(o==="FormInput")return v;if(o==="FormRadio")return B;if(o==="FormSelect")return b;if(o==="FormCheckbox")return y;if(o==="FormTextarea")return _}}}const T=l("h1",{class:"text-amber-400 text-2xl"}," Welcome ",-1),j={class:"my-10 border-2 border-sky-700"},A=l("h2",null,"dynamic component",-1),L={class:"my-10 border-2 border-sky-700"},P=l("h2",null,"form designer",-1),E=l("label",null,"label",-1),O=l("label",null,"component",-1),W=l("label",null,"choices",-1),H={__name:"LandingPage",props:{formData:{type:Object,required:!0},formConfigs:{type:Array,required:!0}},setup(e){const n=c({...e.formData}),{resolveControlComponent:a}=R(),t=c({name:null,label:null,component:null,options:null,required:!1,props:{}}),i=C([]),$=()=>{i.value.push(t)};return(w,u)=>(s(),d(p,null,[T,l("div",j,[A,(s(!0),d(p,null,V(e.formConfigs,(r,F)=>(s(),q(k(S(a)(r.component)),h({key:F},r.props,{modelValue:n[r.props.name],"onUpdate:modelValue":g=>n[r.props.name]=g}),null,16,["modelValue","onUpdate:modelValue"]))),128))]),l("div",L,[P,l("div",null,[E,m(v,{modelValue:t.label,"onUpdate:modelValue":u[0]||(u[0]=r=>t.label=r)},null,8,["modelValue"]),O,m(b,{modelValue:t.component,"onUpdate:modelValue":u[1]||(u[1]=r=>t.component=r),options:["FormInput","FormSelect","FormRadio","FormTextarea"]},null,8,["modelValue"]),W,m(_,{modelValue:t.options,"onUpdate:modelValue":u[2]||(u[2]=r=>t.options=r)},null,8,["modelValue"]),m(y,{name:"required",modelValue:t.required,"onUpdate:modelValue":u[3]||(u[3]=r=>t.required=r),label:"required"},null,8,["modelValue"])]),l("button",{class:"p-2 border",onClick:$}," add ")])],64))}};export{H as default};
