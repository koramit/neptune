import{u as y,m as v,o as a,c as u,F as b,r as g,e as k,g as r,a as d,i as V,n as x,l as q}from"./app.ae305b03.js";import{_ as C,u as F}from"./useResolveControlComponent.cb796fb7.js";import"./FormTextarea.21aaec40.js";const _={class:"space-y-6 md:space-y-10 xl:space-y-12"},h=["disabled"],j={__name:"ShowForm",props:{questions:{type:Array,required:!0},division:{type:[String,null],required:!0},routes:{type:Object,required:!0}},setup(n){const l=n;let i={division:l.division,confirmed:!1};l.questions.forEach(s=>i[s.title]=null);const t=y({...i}),m=v(()=>{let s=l.questions.map(e=>e.title);s.push("confirmed");let o=!1;for(let e in s)o=o||!t[s[e]];return o}),{resolveControlComponent:c}=F();return(s,o)=>(a(),u("div",_,[(a(!0),u(b,null,g(n.questions,(e,p)=>(a(),V(q(r(c)(e.type)),x({key:p,modelValue:r(t)[e.title],"onUpdate:modelValue":f=>r(t)[e.title]=f},e.props),null,16,["modelValue","onUpdate:modelValue"]))),128)),k(C,{class:"mt-8",label:"\u0E09\u0E31\u0E19\u0E23\u0E31\u0E1A\u0E17\u0E23\u0E32\u0E1A\u0E27\u0E48\u0E32\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E19\u0E35\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E1C\u0E22\u0E15\u0E31\u0E27\u0E15\u0E19\u0E1C\u0E39\u0E49\u0E15\u0E2D\u0E1A \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E17\u0E33\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E15\u0E2D\u0E1A\u0E41\u0E25\u0E49\u0E27\u0E08\u0E30\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E01\u0E49\u0E44\u0E02\u0E2B\u0E23\u0E37\u0E2D\u0E17\u0E33\u0E43\u0E2B\u0E21\u0E48\u0E44\u0E14\u0E49\u0E2D\u0E35\u0E01",modelValue:r(t).confirmed,"onUpdate:modelValue":o[0]||(o[0]=e=>r(t).confirmed=e),name:"confirmed"},null,8,["modelValue"]),d("div",null,[d("button",{class:"mt-4 group relative flex w-full justify-center rounded-md border border-transparent bg-sky-600 disabled:bg-sky-600/40 py-2 px-4 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors duration-200",disabled:m.value,onClick:o[1]||(o[1]=e=>r(t).post(n.routes.store))}," \u0E2A\u0E48\u0E07\u0E04\u0E33\u0E15\u0E2D\u0E1A ",8,h)])]))}};export{j as default};
