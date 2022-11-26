"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2217],{3636:(e,t,a)=>{a.d(t,{Z:()=>s});var o=a(7294),l=a(6010),n=a(5742);function s(){return(0,o.useEffect)((()=>{const e=$(".theme-changer button");e.off("click").on("click",(function(){if($(this).hasClass("active"))return;const t=$(this).data("theme");e.removeClass("active"),$(this).addClass("active"),$("link[data-theme]").remove();0===$("link[data-theme="+t+"]").length&&$("head").append(`<link data-theme="${t}" href="/css/selectize.${t}.css" rel="stylesheet">`)}))})),o.createElement(o.Fragment,null,o.createElement(n.Z,null,o.createElement("link",{rel:"stylesheet",href:"/css/selectize.css"}),o.createElement("link",{rel:"stylesheet","data-theme":"default",href:"/css/selectize.default.css"})),o.createElement("span",{className:(0,l.Z)("theme-changer","isolate inline-flex rounded-md shadow-sm mb-6")},[{src:"default",label:"Selectize",icon:"fak fa-selectize"},{src:"bootstrap2",label:"Bootstrap 2",icon:"fa-duotone fa-square-b"},{src:"bootstrap3",label:"Bootstrap 3",icon:"fa-duotone fa-square-b"},{src:"bootstrap4",label:"Bootstrap 4",icon:"fa-duotone fa-square-b"},{src:"bootstrap5",label:"Bootstrap 5",icon:"fa-duotone fa-square-b"}].map(((e,t)=>{const a=0===t?"active":"";return o.createElement("button",{className:(0,l.Z)(a,"relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"),key:t,type:"button","data-theme":e.src},o.createElement("span",{className:(0,l.Z)(e.icon,"pr-2")}),e.label)}))))}},1670:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>v,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var o=a(7462),l=a(7294),n=a(3905),s=a(814),i=a(3636);function c(){return(0,l.useEffect)((()=>{$("#normalize").selectize()})),l.createElement(l.Fragment,null,l.createElement("div",{style:{marginBottom:"1rem"}},l.createElement(i.Z,null),l.createElement("h4",null,"The most vanilla of examples."),l.createElement("select",{id:"normalize"},l.createElement("option",{value:""}),l.createElement("option",{value:"1"},"Awesome"),l.createElement("option",{value:"2"},"Beast"),l.createElement("option",{value:"3"},"Compatible"),l.createElement("option",{value:"4"},"Thomas Edison"),l.createElement("option",{value:"5"},"Nikola"),l.createElement("option",{value:"6"},"Selectize"),l.createElement("option",{value:"7"},"Javascript"))),l.createElement(s.Z,{className:"language-html",title:"Html"},'<select id="normalize">\n  <option value=""></option>\n  <option value="1">Awesome</option>\n  <option value="2">Beast</option>\n  <option value="3">Compatible</option>\n  <option value="4">Thomas Edison</option>\n  <option value="5">Nikola</option>\n  <option value="6">Selectize</option>\n  <option value="7">Javascript</option>\n</select>'),l.createElement(s.Z,{className:"language-javascript",title:"Javascript"},"$('#normalize').selectize();"))}const r={id:"single-item-select",title:"Single item select",description:"The most vanilla of examples."},m=void 0,p={unversionedId:"demos/single-item-select",id:"demos/single-item-select",title:"Single item select",description:"The most vanilla of examples.",source:"@site/docs/demos/basic.mdx",sourceDirName:"demos",slug:"/demos/single-item-select",permalink:"/docs/demos/single-item-select",draft:!1,tags:[],version:"current",frontMatter:{id:"single-item-select",title:"Single item select",description:"The most vanilla of examples."},sidebar:"demoSidebar",previous:{title:"Right-to-left Support",permalink:"/docs/demos/rtl"},next:{title:"Tagging",permalink:"/docs/demos/tagging"}},u={},d=[],f={toc:d};function v(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(c,{mdxType:"Basic"}))}v.isMDXComponent=!0}}]);