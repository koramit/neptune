import{u as m,o as a,c as u,a as e,d as n,v as r,e as l,F as _,r as b}from"./app.298e40a5.js";const h={class:"m-4 p-4 border rounded space-x-2"},v=e("label",null,"\u0E0A\u0E37\u0E48\u0E2D\u0E1F\u0E2D\u0E23\u0E4C\u0E21",-1),x={class:"m-4 p-4 border rounded space-x-2"},f=e("label",null,"\u0E1C\u0E39\u0E49\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21",-1),V={class:"m-4 p-4 border rounded space-x-2"},U=e("label",null,"\u0E04\u0E33\u0E16\u0E32\u0E21",-1),k=["onUpdate:modelValue"],y={class:"m-4 p-4 border rounded space-x-2"},F=e("label",null,"\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01",-1),B=["onUpdate:modelValue"],D=e("br",null,null,-1),E={__name:"EditForm",props:{routes:{type:Object,required:!0},formData:{type:Object,required:!0}},setup(i){const s=m({...i.formData}),c=()=>{s.questions.push({title:null,choices:null})};return(w,o)=>(a(),u("div",null,[e("div",h,[v,n(e("input",{class:"border p-2",type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>l(s).title=t)},null,512),[[r,l(s).title]])]),e("div",x,[f,n(e("textarea",{class:"border p-2","onUpdate:modelValue":o[1]||(o[1]=t=>l(s).invitees=t)},null,512),[[r,l(s).invitees]])]),(a(!0),u(_,null,b(l(s).questions,(t,p)=>(a(),u("div",{key:p,class:"m-4 p-4 border rounded space-x-2"},[e("div",V,[U,n(e("input",{class:"border p-2",type:"text","onUpdate:modelValue":d=>t.title=d},null,8,k),[[r,t.title]])]),e("div",y,[F,n(e("textarea",{class:"border p-2","onUpdate:modelValue":d=>t.choices=d},null,8,B),[[r,t.choices]])])]))),128)),e("button",{onClick:c}," \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E33\u0E16\u0E32\u0E21 "),D,e("button",{class:"mt-4",onClick:o[2]||(o[2]=t=>l(s).patch(i.routes.update))}," \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 ")]))}};export{E as default};