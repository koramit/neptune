import{u as v,l as y,o as i,c as u,F as b,r as V,e as d,g as t,a as g,i as k,m as q,n as x}from"./app.2b06c1f7.js";import{_ as F,u as _}from"./useResolveComponent.eab57baa.js";import{_ as C}from"./FormTextarea.290747b4.js";const B={class:"space-y-6"},U=["disabled"],j={__name:"ShowForm",props:{questions:{type:Array,required:!0},division:{type:[String,null],required:!0},routes:{type:Object,required:!0}},setup(l){const n=l;let a={division:n.division,confirmed:!1};n.questions.forEach(r=>a[r.title]=null);const s=v({...a}),m=y(()=>{let r=n.questions.map(e=>e.title);r.push("division"),r.push("confirmed");let o=!1;for(let e in r)o=o||!s[r[e]];return o}),{resolveControlComponent:p}=_();return(r,o)=>(i(),u("div",B,[(i(!0),u(b,null,V(l.questions,(e,c)=>(i(),k(x(t(p)(e.type)),q({key:c,modelValue:t(s)[e.title],"onUpdate:modelValue":f=>t(s)[e.title]=f},e.props),null,16,["modelValue","onUpdate:modelValue"]))),128)),d(C,{modelValue:t(s).division,"onUpdate:modelValue":o[0]||(o[0]=e=>t(s).division=e),label:"\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E15\u0E2D\u0E1A","auto-fill":!0},null,8,["modelValue"]),d(F,{class:"mt-8",label:"\u0E09\u0E31\u0E19\u0E23\u0E31\u0E1A\u0E17\u0E23\u0E32\u0E1A\u0E27\u0E48\u0E32\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E19\u0E35\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E1C\u0E22\u0E15\u0E31\u0E27\u0E15\u0E19\u0E1C\u0E39\u0E49\u0E15\u0E2D\u0E1A \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E17\u0E33\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E15\u0E2D\u0E1A\u0E41\u0E25\u0E49\u0E27\u0E08\u0E30\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E01\u0E49\u0E44\u0E02\u0E2B\u0E23\u0E37\u0E2D\u0E17\u0E33\u0E43\u0E2B\u0E21\u0E48\u0E44\u0E14\u0E49\u0E2D\u0E35\u0E01",modelValue:t(s).confirmed,"onUpdate:modelValue":o[1]||(o[1]=e=>t(s).confirmed=e),name:"confirmed"},null,8,["modelValue"]),g("button",{class:"mt-4 group relative flex w-full justify-center rounded-md border border-transparent bg-sky-600 disabled:bg-sky-600/40 py-2 px-4 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors duration-200",disabled:t(m),onClick:o[2]||(o[2]=e=>t(s).post(l.routes.store))}," \u0E2A\u0E48\u0E07\u0E04\u0E33\u0E15\u0E2D\u0E1A ",8,U)]))}};export{j as default};
