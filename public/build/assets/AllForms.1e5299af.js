import{b as i}from"./browser.c3679021.js";import{o as r,c as t,F as p,r as _,a as s,b as o,t as c,d as u}from"./app.cb511904.js";const h={class:"mt-8"},m={class:"space-y-3"},b={key:0,class:"ml-3 italic"},y={class:"font-medium"},f={class:"text-sky-600"},k=["href"],g=["src"],F={__name:"AllForms",props:{forms:{type:Array,required:!0}},setup(n){return n.forms.forEach(a=>{i.toDataURL(a.url,{errorCorrectionLevel:"H",margin:2,scale:8,color:{dark:"#0285c7",light:"#f8fafc"}}).then(d=>{a.data=d})}),(a,d)=>(r(),t("div",h,[(r(!0),t(p,null,_(n.forms,(e,l)=>(r(),t("div",{key:l,class:"py-8 border-t-2 first:border-t-0 border-sky-600 border-dashed"},[s("div",m,[s("p",null,[o(c(e.title)+" ",1),e.responses?(r(),t("span",b,[o("\u0E15\u0E2D\u0E1A\u0E41\u0E25\u0E49\u0E27 "),s("span",y,c(e.responses),1),o(" \u0E17\u0E48\u0E32\u0E19")])):u("",!0)]),s("p",f,[s("a",{target:"_blank",href:e.url},c(e.url),9,k)]),s("img",{class:"h-24 w-24 rounded border border-sky-600",src:e.data,alt:"qrcode"},null,8,g)])]))),128))]))}};export{F as default};
