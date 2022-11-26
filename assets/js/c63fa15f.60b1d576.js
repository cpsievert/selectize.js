"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7311],{3636:(e,a,t)=>{t.d(a,{Z:()=>i});var o=t(7294),l=t(6010),n=t(5742);function i(){return(0,o.useEffect)((()=>{const e=$(".theme-changer button");e.off("click").on("click",(function(){if($(this).hasClass("active"))return;const a=$(this).data("theme");e.removeClass("active"),$(this).addClass("active"),$("link[data-theme]").remove();0===$("link[data-theme="+a+"]").length&&$("head").append(`<link data-theme="${a}" href="/css/selectize.${a}.css" rel="stylesheet">`)}))})),o.createElement(o.Fragment,null,o.createElement(n.Z,null,o.createElement("link",{rel:"stylesheet",href:"/css/selectize.css"}),o.createElement("link",{rel:"stylesheet","data-theme":"default",href:"/css/selectize.default.css"})),o.createElement("span",{className:(0,l.Z)("theme-changer","isolate inline-flex rounded-md shadow-sm mb-6")},[{src:"default",label:"Selectize",icon:"fak fa-selectize"},{src:"bootstrap2",label:"Bootstrap 2",icon:"fa-duotone fa-square-b"},{src:"bootstrap3",label:"Bootstrap 3",icon:"fa-duotone fa-square-b"},{src:"bootstrap4",label:"Bootstrap 4",icon:"fa-duotone fa-square-b"},{src:"bootstrap5",label:"Bootstrap 5",icon:"fa-duotone fa-square-b"}].map(((e,a)=>{const t=0===a?"active":"";return o.createElement("button",{className:(0,l.Z)(t,"relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"),key:a,type:"button","data-theme":e.src},o.createElement("span",{className:(0,l.Z)(e.icon,"pr-2")}),e.label)}))))}},8426:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>m,metadata:()=>c,toc:()=>p});var o=t(7462),l=t(7294),n=t(3905),i=t(814),d=t(3636);function r(){return(0,l.useEffect)((()=>{$("#selectCar").selectize({options:[{id:"avenger",make:"dodge",model:"Avenger"},{id:"caliber",make:"dodge",model:"Caliber"},{id:"caravan-grand-passenger",make:"dodge",model:"Caravan Grand Passenger"},{id:"challenger",make:"dodge",model:"Challenger"},{id:"ram-1500",make:"dodge",model:"Ram 1500"},{id:"viper",make:"dodge",model:"Viper"},{id:"a3",make:"audi",model:"A3"},{id:"a6",make:"audi",model:"A6"},{id:"r8",make:"audi",model:"R8"},{id:"rs-4",make:"audi",model:"RS 4"},{id:"s4",make:"audi",model:"S4"},{id:"s8",make:"audi",model:"S8"},{id:"tt",make:"audi",model:"TT"},{id:"avalanche",make:"chevrolet",model:"Avalanche"},{id:"aveo",make:"chevrolet",model:"Aveo"},{id:"cobalt",make:"chevrolet",model:"Cobalt"},{id:"silverado",make:"chevrolet",model:"Silverado"},{id:"suburban",make:"chevrolet",model:"Suburban"},{id:"tahoe",make:"chevrolet",model:"Tahoe"},{id:"trail-blazer",make:"chevrolet",model:"TrailBlazer"}],optgroups:[{id:"dodge",name:"Dodge"},{id:"audi",name:"Audi"},{id:"chevrolet",name:"Chevrolet"}],labelField:"model",valueField:"id",optgroupField:"make",optgroupLabelField:"name",optgroupValueField:"id",optgroupOrder:["chevrolet","dodge","audi"],searchField:["model"],plugins:["optgroup_columns"]})})),l.createElement("div",null,l.createElement("div",{style:{marginBottom:"1rem"}},l.createElement(d.Z,null),l.createElement("h4",{style:{textAlign:"left",marginBottom:"4rem"}},"A plugin by ",l.createElement("a",{href:"https://github.com/sjhewitt",target:"_blank"},"Simon Hewitt")," that renders option groups horizontally with convenient left/right keyboard navigation."),l.createElement("select",{id:"selectCar"})),l.createElement(i.Z,{className:"language-html",title:"Html"},'<select id="selectCar"></select>'),l.createElement(i.Z,{className:"language-javascript",title:"Javascript"},'$("#selectCar").selectize({\n  options: [\n    { id: "avenger", make: "dodge", model: "Avenger" },\n    { id: "caliber", make: "dodge", model: "Caliber" },\n    {\n        id: "caravan-grand-passenger",\n        make: "dodge",\n        model: "Caravan Grand Passenger",\n    },\n    { id: "challenger", make: "dodge", model: "Challenger" },\n    { id: "ram-1500", make: "dodge", model: "Ram 1500" },\n    { id: "viper", make: "dodge", model: "Viper" },\n    { id: "a3", make: "audi", model: "A3" },\n    { id: "a6", make: "audi", model: "A6" },\n    { id: "r8", make: "audi", model: "R8" },\n    { id: "rs-4", make: "audi", model: "RS 4" },\n    { id: "s4", make: "audi", model: "S4" },\n    { id: "s8", make: "audi", model: "S8" },\n    { id: "tt", make: "audi", model: "TT" },\n    { id: "avalanche", make: "chevrolet", model: "Avalanche" },\n    { id: "aveo", make: "chevrolet", model: "Aveo" },\n    { id: "cobalt", make: "chevrolet", model: "Cobalt" },\n    { id: "silverado", make: "chevrolet", model: "Silverado" },\n    { id: "suburban", make: "chevrolet", model: "Suburban" },\n    { id: "tahoe", make: "chevrolet", model: "Tahoe" },\n    { id: "trail-blazer", make: "chevrolet", model: "TrailBlazer" },\n  ],\n  optgroups: [\n    { id: "dodge", name: "Dodge" },\n    { id: "audi", name: "Audi" },\n    { id: "chevrolet", name: "Chevrolet" },\n  ],\n  labelField: "model",\n  valueField: "id",\n  optgroupField: "make",\n  optgroupLabelField: "name",\n  optgroupValueField: "id",\n  optgroupOrder: ["chevrolet", "dodge", "audi"],\n  searchField: ["model"],\n  plugins: ["optgroup_columns"],\n});'))}const m={id:"opt-group-col",title:"Option Group Columns",description:"A plugin by Simon Hewitt that renders option groups horizontally with convenient left/right keyboard navigation."},s=void 0,c={unversionedId:"plugins/opt-group-col",id:"plugins/opt-group-col",title:"Option Group Columns",description:"A plugin by Simon Hewitt that renders option groups horizontally with convenient left/right keyboard navigation.",source:"@site/docs/plugins/opt-group-col.mdx",sourceDirName:"plugins",slug:"/plugins/opt-group-col",permalink:"/docs/plugins/opt-group-col",draft:!1,tags:[],version:"current",frontMatter:{id:"opt-group-col",title:"Option Group Columns",description:"A plugin by Simon Hewitt that renders option groups horizontally with convenient left/right keyboard navigation."},sidebar:"demoSidebar",previous:{title:"Drag & Drop",permalink:"/docs/plugins/drag-drop"},next:{title:"Remove Button",permalink:"/docs/plugins/remove-button"}},u={},p=[],g={toc:p};function h(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)(r,{mdxType:"OptGroupCol"}))}h.isMDXComponent=!0}}]);