"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4369],{3636:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010),s=a(5742);function o(){return(0,n.useEffect)((()=>{const e=$(".theme-changer button");e.off("click").on("click",(function(){if($(this).hasClass("active"))return;const t=$(this).data("theme");e.removeClass("active"),$(this).addClass("active"),$("link[data-theme]").remove();0===$("link[data-theme="+t+"]").length&&$("head").append(`<link data-theme="${t}" href="/css/selectize.${t}.css" rel="stylesheet">`)}))})),n.createElement(n.Fragment,null,n.createElement(s.Z,null,n.createElement("link",{rel:"stylesheet",href:"/css/selectize.css"}),n.createElement("link",{rel:"stylesheet","data-theme":"default",href:"/css/selectize.default.css"})),n.createElement("span",{className:(0,l.Z)("theme-changer","isolate inline-flex rounded-md shadow-sm mb-6")},[{src:"default",label:"Selectize",icon:"fak fa-selectize"},{src:"bootstrap2",label:"Bootstrap 2",icon:"fa-duotone fa-square-b"},{src:"bootstrap3",label:"Bootstrap 3",icon:"fa-duotone fa-square-b"},{src:"bootstrap4",label:"Bootstrap 4",icon:"fa-duotone fa-square-b"},{src:"bootstrap5",label:"Bootstrap 5",icon:"fa-duotone fa-square-b"}].map(((e,t)=>{const a=0===t?"active":"";return n.createElement("button",{className:(0,l.Z)(a,"relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"),key:t,type:"button","data-theme":e.src},n.createElement("span",{className:(0,l.Z)(e.icon,"pr-2")}),e.label)}))))}},7914:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>m,toc:()=>p});var n=a(7462),l=a(7294),s=a(3905),o=a(814),r=a(3636);function i(){return(0,l.useEffect)((()=>{$("#select-beast").selectize({create:!0,sortField:{field:"text",direction:"asc"}})})),l.createElement(l.Fragment,null,l.createElement("div",{style:{marginBottom:"1rem"}},l.createElement(r.Z,null),l.createElement("h4",null,"Required element"),l.createElement("div",{class:"control-group"},l.createElement("form",null,l.createElement("label",{for:"select-beast"},"Beast:"),l.createElement("select",{id:"select-beast",required:!0,class:"demo-default",placeholder:"Select a person...",name:"beast"},l.createElement("option",{value:""},"Select a person..."),l.createElement("option",{value:"4"},"Thomas Edison"),l.createElement("option",{value:"1"},"Nikola"),l.createElement("option",{value:"3"},"Nikola Tesla"),l.createElement("option",{value:"5"},"Arnold Schwarzenegger")),l.createElement("button",{style:{marginTop:"2em"},type:"submit"},"Submit")))),l.createElement(o.Z,{className:"language-html",title:"Html"},'<div class="control-group">\n<form>\n  <label for="select-beast">Beast:</label>\n  <select id="select-beast" required class="demo-default"\n    placeholder="Select a person..." name="beast">\n    <option value="">Select a person...</option>\n    <option value="4">Thomas Edison</option>\n    <option value="1">Nikola</option>\n    <option value="3">Nikola Tesla</option>\n    <option value="5">Arnold Schwarzenegger</option>\n  </select>\n    <button type="submit">Submit</button>\n</form>\n</div>'),l.createElement(o.Z,{className:"language-javascript",title:"Javascript"},"$('#select-beast').selectize({\n  create: true,\n  sortField: {\n    field: 'text',\n    direction: 'asc'\n  }\n});\n        "))}const c={id:"required",title:"Required Elements",description:"Examples of using a required element with selectize"},d=void 0,m={unversionedId:"demos/required",id:"demos/required",title:"Required Elements",description:"Examples of using a required element with selectize",source:"@site/docs/demos/required.mdx",sourceDirName:"demos",slug:"/demos/required",permalink:"/docs/demos/required",draft:!1,tags:[],version:"current",frontMatter:{id:"required",title:"Required Elements",description:"Examples of using a required element with selectize"},sidebar:"demoSidebar",previous:{title:"Performance and Scalability",permalink:"/docs/demos/performance"},next:{title:"Right-to-left Support",permalink:"/docs/demos/rtl"}},u={},p=[],f={toc:p};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i,{mdxType:"Required"}))}b.isMDXComponent=!0}}]);