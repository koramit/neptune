import{_ as d,a as U}from"./FormTextarea.572cdef1.js";import{j as $,k as c,o as p,c as V,e as r,a as h,F as v,r as q}from"./app.58eae5be.js";const g={class:"border-b border-slate-300 pb-4"},C={__name:"FormRadioGroupCardCreator",props:{title:{type:[String,null],required:!0},choices:{type:Array,required:!0}},emits:["update:title","update:choices"],setup(o,{emit:s}){const i=o,u=s,e=$({title:i.title,choices:[...i.choices]});c(()=>e.title,t=>u("update:title",t)),c(()=>e.choices,t=>u("update:choices",t),{deep:!0});const l=()=>{e.choices.push({title:null,description:null,image:null,value:null})};return(t,a)=>(p(),V("div",g,[r(d,{name:`${o.title}-title`,label:"\u0E04\u0E33\u0E16\u0E32\u0E21",modelValue:e.title,"onUpdate:modelValue":a[0]||(a[0]=n=>e.title=n)},null,8,["name","modelValue"]),h("div",null,[(p(!0),V(v,null,q(e.choices,(n,b)=>(p(),V("div",{class:"m-4 p-4 border rounded space-y-2",key:b},[r(d,{name:`${o.title}-choice-${b}-title`,label:"title",modelValue:n.title,"onUpdate:modelValue":m=>n.title=m},null,8,["name","modelValue","onUpdate:modelValue"]),r(d,{name:`${o.title}-choice-${b}-description`,label:"description",modelValue:n.description,"onUpdate:modelValue":m=>n.description=m},null,8,["name","modelValue","onUpdate:modelValue"]),r(d,{name:`${o.title}-choice-${b}-image`,label:"image",modelValue:n.image,"onUpdate:modelValue":m=>n.image=m},null,8,["name","modelValue","onUpdate:modelValue"]),r(d,{name:`${o.title}-choice-${b}-value`,label:"value",modelValue:n.value,"onUpdate:modelValue":m=>n.value=m},null,8,["name","modelValue","onUpdate:modelValue"])]))),128))]),h("button",{class:"mt-4",onClick:l}," \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01 ")]))}},_={__name:"FormSelectCreator",props:{title:{type:[String,null],required:!0},choices:{type:Array,required:!0}},emits:["update:title","update:choices","delete"],setup(o,{emit:s}){const i=o,u=s,e=$({title:i.title,choices:[...i.choices]});return c(()=>e.title,l=>u("update:title",l)),c(()=>e.choices,l=>u("update:choices",l),{deep:!0}),(l,t)=>(p(),V("div",null,[r(d,{label:"\u0E04\u0E33\u0E16\u0E32\u0E21",modelValue:e.title,"onUpdate:modelValue":t[0]||(t[0]=a=>e.title=a),name:"title"},null,8,["modelValue"]),r(U,{label:"\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01",class:"border p-2",modelValue:e.choices,"onUpdate:modelValue":t[1]||(t[1]=a=>e.choices=a),mode:"array"},null,8,["modelValue"]),h("button",{class:"text-red-500 underline",onClick:t[2]||(t[2]=a=>l.$emit("delete"))},"\u0E25\u0E1A")]))}},F={__name:"FormAutocompleteCreator",props:{title:{type:[String,null],required:!0},choices:{type:Array,required:!0}},emits:["update:title","update:choices"],setup(o,{emit:s}){const i=o,u=s,e=$({title:i.title,choices:[...i.choices]});return c(()=>e.title,l=>u("update:title",l)),c(()=>e.choices,l=>u("update:choices",l),{deep:!0}),(l,t)=>(p(),V("div",null,[r(d,{label:"\u0E04\u0E33\u0E16\u0E32\u0E21",modelValue:e.title,"onUpdate:modelValue":t[0]||(t[0]=a=>e.title=a),name:"title"},null,8,["modelValue"]),r(U,{label:"\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01",class:"border p-2",modelValue:e.choices,"onUpdate:modelValue":t[1]||(t[1]=a=>e.choices=a),mode:"array"},null,8,["modelValue"])]))}},x={__name:"FormInputCreator",props:{title:{type:[String,null],required:!0}},emits:["update:title"],setup(o,{emit:s}){const i=o,u=s,e=$({title:i.title});return c(()=>e.title,l=>u("update:title",l)),(l,t)=>(p(),V("div",null,[r(d,{label:"\u0E04\u0E33\u0E16\u0E32\u0E21",modelValue:e.title,"onUpdate:modelValue":t[0]||(t[0]=a=>e.title=a),name:"title"},null,8,["modelValue"])]))}};export{_,C as a,F as b,x as c};
