import{h as _,k as b,o as c,c as d,u as y,e as u,g as r,a as m,F as h,r as U,i as V,l as $}from"./app.7720fea2.js";import{_ as F,a as g,b as k}from"./FormAutocompleteCreator.b2e67f49.js";import{_ as D,a as w,b as R}from"./FormTextarea.7f8df4e9.js";import{b as S}from"./browser.22ffe95e.js";function B(){return{resolveCreatorComponent:a=>{if(a==="FormSelectCreator")return F;if(a==="FormRadioGroupCardCreator")return g;if(a==="FormAutocompleteCreator")return k}}}const N=["src"],O={__name:"QRCode",props:{data:{type:String,required:!0}},setup(s){const a=s,o=_(null);return b(()=>a.data,i=>S.toDataURL(i,{errorCorrectionLevel:"H",margin:2,scale:8,color:{dark:"#0285c7",light:"#f8fafc"}}).then(l=>{o.value=l}),{immediate:!0}),(i,l)=>(c(),d("img",{class:"h-24 w-24 rounded border border-sky-600",src:o.value,alt:"qrcode"},null,8,N))}},q={class:"my-8 space-y-4"},x=m("br",null,null,-1),J={__name:"EditForm",props:{routes:{type:Object,required:!0},formData:{type:Object,required:!0}},setup(s){const a=s,o=y(JSON.parse(JSON.stringify(a.formData))),i=()=>{o.questions.push({title:null,type:l.value,choices:[]})},l=_(null),C=["FormSelect","FormRadioGroupCard","FormAutocomplete"],{resolveCreatorComponent:v}=B();return(L,t)=>{var p;return c(),d("div",null,[u(D,{name:"title",label:"\u0E0A\u0E37\u0E48\u0E2D\u0E1F\u0E2D\u0E23\u0E4C\u0E21",class:"border p-2",modelValue:r(o).title,"onUpdate:modelValue":t[0]||(t[0]=e=>r(o).title=e)},null,8,["modelValue"]),u(w,{label:"\u0E1C\u0E39\u0E49\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21",class:"border p-2",modelValue:r(o).invitees,"onUpdate:modelValue":t[1]||(t[1]=e=>r(o).invitees=e),mode:"array"},null,8,["modelValue"]),m("div",q,[(c(!0),d(h,null,U(r(o).questions,(e,f)=>(c(),V($(r(v)(`${e.type}Creator`)),{key:f,title:e.title,"onUpdate:title":n=>e.title=n,choices:e.choices,"onUpdate:choices":n=>e.choices=n,foo:e.foo,"onUpdate:foo":n=>e.foo=n,onDelete:n=>r(o).questions.splice(f,1)},null,40,["title","onUpdate:title","choices","onUpdate:choices","foo","onUpdate:foo","onDelete"]))),128))]),u(R,{name:"type",modelValue:l.value,"onUpdate:modelValue":t[2]||(t[2]=e=>l.value=e),options:C},null,8,["modelValue"]),m("button",{onClick:i}," \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E33\u0E16\u0E32\u0E21 "),x,m("button",{class:"mt-4",onClick:t[3]||(t[3]=e=>r(o).patch(s.routes.update))}," \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 "),u(O,{data:(p=s.routes.show)!=null?p:"https://google.com"},null,8,["data"])])}}};export{J as default};
