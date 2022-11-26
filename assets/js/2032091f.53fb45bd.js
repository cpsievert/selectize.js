"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9193],{3636:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(7294),o=t(6010),r=t(5742);function s(){return(0,a.useEffect)((()=>{const e=$(".theme-changer button");e.off("click").on("click",(function(){if($(this).hasClass("active"))return;const n=$(this).data("theme");e.removeClass("active"),$(this).addClass("active"),$("link[data-theme]").remove();0===$("link[data-theme="+n+"]").length&&$("head").append(`<link data-theme="${n}" href="/css/selectize.${n}.css" rel="stylesheet">`)}))})),a.createElement(a.Fragment,null,a.createElement(r.Z,null,a.createElement("link",{rel:"stylesheet",href:"/css/selectize.css"}),a.createElement("link",{rel:"stylesheet","data-theme":"default",href:"/css/selectize.default.css"})),a.createElement("span",{className:(0,o.Z)("theme-changer","isolate inline-flex rounded-md shadow-sm mb-6")},[{src:"default",label:"Selectize",icon:"fak fa-selectize"},{src:"bootstrap2",label:"Bootstrap 2",icon:"fa-duotone fa-square-b"},{src:"bootstrap3",label:"Bootstrap 3",icon:"fa-duotone fa-square-b"},{src:"bootstrap4",label:"Bootstrap 4",icon:"fa-duotone fa-square-b"},{src:"bootstrap5",label:"Bootstrap 5",icon:"fa-duotone fa-square-b"}].map(((e,n)=>{const t=0===n?"active":"";return a.createElement("button",{className:(0,o.Z)(t,"relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"),key:n,type:"button","data-theme":e.src},a.createElement("span",{className:(0,o.Z)(e.icon,"pr-2")}),e.label)}))))}},8982:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>m,toc:()=>p});var a=t(7462),o=t(7294),r=t(3905),s=t(814),i=t(3636);function l(){return(0,o.useEffect)((()=>{$("#select-console").selectize({options:[{manufacturer:"nintendo",value:"nes",name:"Nintendo Entertainment System"},{manufacturer:"nintendo",value:"snes",name:"Super Nintendo Entertainment System"},{manufacturer:"nintendo",value:"n64",name:"Nintendo 64"},{manufacturer:"nintendo",value:"gamecube",name:"GameCube"},{manufacturer:"nintendo",value:"wii",name:"Wii"},{manufacturer:"microsoft",value:"xss",name:"Xbox Series S"},{manufacturer:"nintendo",value:"wiiu",name:"Wii U"},{manufacturer:"nintendo",value:"switch",name:"Switch"},{manufacturer:"sony",value:"ps1",name:"PlayStation"},{manufacturer:"sony",value:"ps2",name:"PlayStation 2"},{manufacturer:"sony",value:"ps3",name:"PlayStation 3"},{manufacturer:"sony",value:"ps4",name:"PlayStation 4"},{manufacturer:"sony",value:"ps5",name:"PlayStation 5"},{manufacturer:"microsoft",value:"xbox",name:"Xbox"},{manufacturer:"microsoft",value:"360",name:"Xbox 360"},{manufacturer:"microsoft",value:"xbone",name:"Xbox One"},{manufacturer:"microsoft",value:"xsx",name:"Xbox Series X"}],optionGroupRegister:function(e){var n={label:"Manufacturer: "+(e.charAt(0).toUpperCase()+e.substring(1))};return n[this.settings.optgroupValueField]=e,n},optgroupField:"manufacturer",labelField:"name",searchField:["name"],sortField:"name"})})),o.createElement("div",null,o.createElement("div",{style:{marginBottom:"1rem"}},o.createElement(i.Z,null),o.createElement("h4",{style:{textAlign:"left",marginBottom:"4rem"}},"Selectize provides the ability to group options together within the dropdown menu."),o.createElement("div",{class:"control-group"},o.createElement("label",{for:"select-console"},"Console:"),o.createElement("select",{id:"select-console",class:"demo-consoles",placeholder:"Select console..."}))),o.createElement(s.Z,{className:"language-html",title:"Html"},'<div class="control-group">\n  <label for="select-console">Console:</label>\n  <select id="select-console" class="demo-consoles" placeholder="Select console..."></select>\n</div>\n        '),o.createElement(s.Z,{className:"language-javascript",title:"Javascript"},"$('#select-console').selectize({\noptions: [\n  { manufacturer: 'nintendo', value: \"nes\", name: \"Nintendo Entertainment System\" },\n  { manufacturer: 'nintendo', value: \"snes\", name: \"Super Nintendo Entertainment System\" },\n  { manufacturer: 'nintendo', value: \"n64\", name: \"Nintendo 64\" },\n  { manufacturer: 'nintendo', value: \"gamecube\", name: \"GameCube\" },\n  { manufacturer: 'nintendo', value: \"wii\", name: \"Wii\" },\n  { manufacturer: 'microsoft', value: 'xss', name: 'Xbox Series S' },\n  { manufacturer: 'nintendo', value: \"wiiu\", name: \"Wii U\" },\n  { manufacturer: 'nintendo', value: \"switch\", name: \"Switch\" },\n  { manufacturer: 'sony', value: 'ps1', name: 'PlayStation' },\n  { manufacturer: 'sony', value: 'ps2', name: 'PlayStation 2' },\n  { manufacturer: 'sony', value: 'ps3', name: 'PlayStation 3' },\n  { manufacturer: 'sony', value: 'ps4', name: 'PlayStation 4' },\n  { manufacturer: 'sony', value: 'ps5', name: 'PlayStation 5' },\n  { manufacturer: 'microsoft', value: 'xbox', name: 'Xbox' },\n  { manufacturer: 'microsoft', value: '360', name: 'Xbox 360' },\n  { manufacturer: 'microsoft', value: 'xbone', name: 'Xbox One' },\n  { manufacturer: 'microsoft', value: 'xsx', name: 'Xbox Series X' }\n],\noptionGroupRegister: function (optgroup) {\n  var capitalised = optgroup.charAt(0).toUpperCase() + optgroup.substring(1);\n  var group = {\n    label: 'Manufacturer: ' + capitalised\n  };\n\n  group[this.settings.optgroupValueField] = optgroup;\n\n  return group;\n},\noptgroupField: 'manufacturer',\nlabelField: 'name',\nsearchField: ['name'],\nsortField: 'name'\n});\n        "))}const c={id:"dynamic-option-groups",title:"Dynamic Option Groups",description:"Selectize provides the ability to create option groups dynamically."},u=void 0,m={unversionedId:"demos/dynamic-option-groups",id:"demos/dynamic-option-groups",title:"Dynamic Option Groups",description:"Selectize provides the ability to create option groups dynamically.",source:"@site/docs/demos/dynamic-option-groups.mdx",sourceDirName:"demos",slug:"/demos/dynamic-option-groups",permalink:"/docs/demos/dynamic-option-groups",draft:!1,tags:[],version:"current",frontMatter:{id:"dynamic-option-groups",title:"Dynamic Option Groups",description:"Selectize provides the ability to create option groups dynamically."},sidebar:"demoSidebar",previous:{title:"Diacritics",permalink:"/docs/demos/diacritics"},next:{title:"Dynamic Options",permalink:"/docs/demos/dynamic-options"}},d={},p=[],f={toc:p};function v(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(l,{mdxType:"DynamicOptGroups"}))}v.isMDXComponent=!0}}]);