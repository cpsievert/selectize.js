"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2272],{3905:(t,e,l)=>{l.d(e,{Zo:()=>u,kt:()=>s});var n=l(7294);function o(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function i(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function a(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?i(Object(l),!0).forEach((function(e){o(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function d(t,e){if(null==t)return{};var l,n,o=function(t,e){if(null==t)return{};var l,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)l=i[n],e.indexOf(l)>=0||(o[l]=t[l]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)l=i[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(o[l]=t[l])}return o}var r=n.createContext({}),p=function(t){var e=n.useContext(r),l=e;return t&&(l="function"==typeof t?t(e):a(a({},e),t)),l},u=function(t){var e=p(t.components);return n.createElement(r.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var l=t.components,o=t.mdxType,i=t.originalType,r=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),c=p(l),s=o,g=c["".concat(r,".").concat(s)]||c[s]||k[s]||i;return l?n.createElement(g,a(a({ref:e},u),{},{components:l})):n.createElement(g,a({ref:e},u))}));function s(t,e){var l=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=l.length,a=new Array(i);a[0]=c;var d={};for(var r in e)hasOwnProperty.call(e,r)&&(d[r]=e[r]);d.originalType=t,d.mdxType="string"==typeof t?t:o,a[1]=d;for(var p=2;p<i;p++)a[p]=l[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},3066:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=l(7462),o=(l(7294),l(3905));const i={title:"Usage",description:"Usage"},a=void 0,d={unversionedId:"usage",id:"usage",title:"Usage",description:"Usage",source:"@site/docs/usage.mdx",sourceDirName:".",slug:"/usage",permalink:"/docs/usage",draft:!1,tags:[],version:"current",frontMatter:{title:"Usage",description:"Usage"},sidebar:"docsSidebar",previous:{title:"Getting Started with Selectize",permalink:"/docs/intro"},next:{title:"Events",permalink:"/docs/events"}},r={},p=[{value:"Selectize \u2013 Usage",id:"selectize--usage",level:2},{value:"Glossary",id:"glossary",level:3},{value:"Configuration",id:"configuration",level:3}],u={toc:p};function k(t){let{components:e,...l}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"selectize--usage"},"Selectize \u2013 Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script type="text/javascript" src="selectize.js"><\/script>\n<link rel="stylesheet" type="text/css" href="selectize.css" />\n<script>\n  $(function () {\n    $("select").selectize(options);\n  });\n<\/script>\n')),(0,o.kt)("h3",{id:"glossary"},"Glossary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Config / configuration: the initial settings of Selectize, given at initialization."),(0,o.kt)("li",{parentName:"ul"},"Settings: the current settings of Selectize, might be updated. Accessible with the ",(0,o.kt)("inlineCode",{parentName:"li"},"setting")," property of the Selectize object."),(0,o.kt)("li",{parentName:"ul"},"Options: the list of objects to display.\nEach object must have a property with an unique ",(0,o.kt)("strong",{parentName:"li"},"value")," to identify the option; the property name is defined by the ",(0,o.kt)("inlineCode",{parentName:"li"},"valueField")," setting.\nOption objects must also have a property with the ",(0,o.kt)("strong",{parentName:"li"},"label")," to display (as tag, in the drop down, etc.); the property name is defined by the ",(0,o.kt)("inlineCode",{parentName:"li"},"labelField")," setting.\nThe options can have other properties, ignored, unless referenced by other settings, like ",(0,o.kt)("inlineCode",{parentName:"li"},"sortField")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"searchField"),"."),(0,o.kt)("li",{parentName:"ul"},"Items: the list of selected options. Or more exactly, the list of the values of the selected options.")),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("table",{width:"100%"},(0,o.kt)("tr",null,(0,o.kt)("th",{valign:"top",colspan:"4",align:"left"},(0,o.kt)("a",{href:"#general",name:"general"},"General"))),(0,o.kt)("tr",null,(0,o.kt)("th",{valign:"top",width:"120px",align:"left"},"Setting"),(0,o.kt)("th",{valign:"top",align:"left"},"Description"),(0,o.kt)("th",{valign:"top",width:"60px",align:"left"},"Type"),(0,o.kt)("th",{valign:"top",width:"60px",align:"left"},"Default")),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"options")),(0,o.kt)("td",{valign:"top"},"An array of the initial options available to select; array of objects. By default this is populated from the original input element.  If your element is a <select> with <option>s specified this property gets populated automatically. Setting this property is convenient if you have your data as an array and want to automatically generate the <option>s."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"array")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"[]"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"items")),(0,o.kt)("td",{valign:"top"},"An array of the initial selected values. By default this is populated from the original input element."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"array")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"[]"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"delimiter")),(0,o.kt)("td",{valign:"top"},"The string to separate items by. When typing an item in a multi-selection control allowing creation, then the delimiter, the item is added. If you paste delimiter-separated items in such control, the items are added at once. The delimiter is also used in the ",(0,o.kt)("code",null,"getValue")," API call on a text <input> tag to separate the multiple values."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"','"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"create")),(0,o.kt)("td",{valign:"top"},"Allows the user to create new items that aren't in the initial list of options. "),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"boolean/function")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"false"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"showAddOptionOnCreate")),(0,o.kt)("td",{valign:"top"},"Toggles whether to show 'Add ...option...' within the dropdown menu (if ",(0,o.kt)("code",null,"create")," setting is enabled). "),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"true"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"createOnBlur")),(0,o.kt)("td",{valign:"top"},"If true, when user exits the field (clicks outside of input), a new option is created and selected (if ",(0,o.kt)("code",null,"create")," setting is enabled)."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"false"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"createFilter")),(0,o.kt)("td",{valign:"top"},"Specifies a RegExp or a string containing a regular expression that the current search filter must match to be allowed to be created. May also be a predicate function that takes the filter text and returns whether it is allowed."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"RegExp|string|function")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"highlight")),(0,o.kt)("td",{valign:"top"},"Toggles match highlighting within the dropdown menu."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"true"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"persist")),(0,o.kt)("td",{valign:"top"},"If false, items created by the user will not show up as available options once they are unselected."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"true"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"openOnFocus")),(0,o.kt)("td",{valign:"top"},"Show the dropdown immediately when the control receives focus."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"true"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"maxOptions")),(0,o.kt)("td",{valign:"top"},"The max number of items to render at once in the dropdown list of options."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"int")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"1000"))),(0,o.kt)("tr",{name:"maxItems"},(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"maxItems")),(0,o.kt)("td",{valign:"top"},"The max number of items the user can select. 1 makes the control mono-selection, null allows an unlimited number of items."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"int")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"hideSelected")),(0,o.kt)("td",{valign:"top"},"If true, the items that are currently selected will not be shown in the dropdown list of available options. This defaults to ",(0,o.kt)("code",null,"true")," when in a multi-selection control, to ",(0,o.kt)("code",null,"false")," otherwise."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"closeAfterSelect")),(0,o.kt)("td",{valign:"top"},"If true, the dropdown will be closed after a selection is made."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"false"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"closeDropdownThreshold")),(0,o.kt)("td",{valign:"top"},"The number of milliseconds to throttle the opening of the dropdown after it is closed by clicking on the control. Setting this to 0 will reopen the dropdown after clicking on the control when the dropdown is open. This does not affect multi-selects."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"int")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"250"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"allowEmptyOption")),(0,o.kt)("td",{valign:"top"},'If true, Selectize will treat any options with a "" value like normal. This defaults to false to accomodate the common <select> practice of having the first empty option to act as a placeholder.'),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"false"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"showEmptyOptionInDropdown")),(0,o.kt)("td",{valign:"top"},'If true, Selectize will show an option with value `""` in dropdown, if one does not exist; which is required when you want to select a empty option via `selectOnTab`. This requires `allowEmptyOption: true`.'),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"false"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"emptyOptionLabel")),(0,o.kt)("td",{valign:"top"},'If `showEmptyOptionInDropdown: true` and an option with value `""` in dropdown does not exist, an option with `""` value is created, the label/text of the option can be set via this option, this requires `showEmptyOptionInDropdown: true`.'),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"'--'"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"scrollDuration")),(0,o.kt)("td",{valign:"top"},"The animation duration (in milliseconds) of the scroll animation triggered when going [up] and [down] in the options dropdown."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"int")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"60"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"deselectBehavior")),(0,o.kt)("td",{valign:"top"},"If an option is selected, the same option is highlighted/marked active in the dropdown, pressing backspace on the input control removes the option and in dropdown the previous element is highlight. When this option is set to `top` it shifts the highlight to the topmost option. Valid options are `top` and `previous`."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"previous"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"loadThrottle")),(0,o.kt)("td",{valign:"top"},"The number of milliseconds to wait before requesting options from the server or null. If null, throttling is disabled. Useful when loading options dynamically while the user types a search / filter expression."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"int")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"300"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"loadingClass")),(0,o.kt)("td",{valign:"top"},"The class name added to the wrapper element while awaiting the fulfillment of load requests."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"'loading'"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"placeholder")),(0,o.kt)("td",{valign:"top"},"The placeholder of the control (displayed when nothing is selected / typed). Defaults to input element's placeholder, unless this one is specified."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"undefined"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"preload")),(0,o.kt)("td",{valign:"top"},"If true, the ",(0,o.kt)("code",null,"load")," function will be called upon control initialization (with an empty search). Alternatively it can be set to ",(0,o.kt)("code",null,"'focus'")," to call the ",(0,o.kt)("code",null,"load")," function when control receives focus."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"boolean/string")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"false"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"dropdownParent")),(0,o.kt)("td",{valign:"top"},"The element the dropdown menu is appended to. This should be ",(0,o.kt)("code",null,"'body'")," or ",(0,o.kt)("code",null,"null"),". If null, the dropdown will be appended as a child of the Selectize control."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"addPrecedence")),(0,o.kt)("td",{valign:"top"},'If true, the "Add..." option is the default selection in the dropdown.'),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"false"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"selectOnTab")),(0,o.kt)("td",{valign:"top"},"If true, the tab key will choose the currently selected item."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"false"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"diacritics")),(0,o.kt)("td",{valign:"top"},"Enable or disable international character support."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"true"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"setFirstOptionActive")),(0,o.kt)("td",{valign:"top"},"Enable setting the first option in the list as active."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"false"))),(0,o.kt)("tr",null,(0,o.kt)("th",{valign:"top",colspan:"4",align:"left"},(0,o.kt)("a",{href:"#data_searching",name:"data_searching"},"Data / Searching"))),(0,o.kt)("tr",null,(0,o.kt)("th",{valign:"top",align:"left"},"Setting"),(0,o.kt)("th",{valign:"top",align:"left"},"Description"),(0,o.kt)("th",{valign:"top",align:"left"},"Type"),(0,o.kt)("th",{valign:"top",align:"left"},"Default")),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"options")),(0,o.kt)("td",{valign:"top"},"See above"),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"array")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"[]"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"optgroups")),(0,o.kt)("td",{valign:"top"},"Option groups that options will be bucketed into. If your element is a <select> with <optgroup>s this property gets populated automatically. Make sure each object in the array has a property named whatever",(0,o.kt)("code",null,"optgroupValueField")," is set to."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"array")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"[]"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"dataAttr")),(0,o.kt)("td",{valign:"top"},"The <option> attribute from which to read JSON data about the option."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"'data-data'"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"valueField")),(0,o.kt)("td",{valign:"top"},"The name of the property to use as the ",(0,o.kt)("code",null,"value")," when an item is selected."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"'value'"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"optgroupValueField")),(0,o.kt)("td",{valign:"top"},"The name of the option group property that serves as its unique identifier."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"'value'"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"labelField")),(0,o.kt)("td",{valign:"top"},"The name of the property to render as an option / item label (not needed when custom rendering functions are defined)."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"'text'"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"optgroupLabelField")),(0,o.kt)("td",{valign:"top"},"The name of the property to render as an option group label (not needed when custom rendering functions are defined)."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"'label'"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"optgroupField")),(0,o.kt)("td",{valign:"top"},"The name of the property to group items by."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"'optgroup'"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"disabledField")),(0,o.kt)("td",{valign:"top"},"The name of the property to disabled option and optgroup."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"'disabled'"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"sortField")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("p",null,"A single field or an array of fields to sort by. Each item in the array should be an object containing at least a field property. Optionally, direction can be set to 'asc' or 'desc'. The order of the array defines the sort precedence."),(0,o.kt)("p",null,"Unless present, a special `$score` field will be automatically added to the beginning of the sort list. This will make results sorted primarily by match quality (descending)."),(0,o.kt)("p",null,"You can override the `$score` function. For more information, see the ",(0,o.kt)("a",{href:"https://github.com/brianreavis/sifter.js#sifterjs"},"sifter documentation"),".")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"string|array")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"'$order'"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"searchField")),(0,o.kt)("td",{valign:"top"},"An array of property names to analyze when filtering options."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"array")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"['text']"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"searchConjunction")),(0,o.kt)("td",{valign:"top"},"When searching for multiple terms (separated by space), this is the operator used. Can be ",(0,o.kt)("code",null,"'and'")," or ",(0,o.kt)("code",null,"'or'")," ."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"'and'"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"nesting")),(0,o.kt)("td",{valign:"top"},"If true, nested fields will be available for search using dot-notation to reference them (e.g. nested.property). *Warning: can reduce performance.*"),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"false"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"lockOptgroupOrder")),(0,o.kt)("td",{valign:"top"},"If truthy, Selectize will make all optgroups be in the same order as they were added (by the `$order` property). Otherwise, it will order based on the score of the results in each."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"false"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"copyClassesToDropdown")),(0,o.kt)("td",{valign:"top"},"Copy the original input classes to the dropdown element."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"boolean")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"true"))),(0,o.kt)("tr",null,(0,o.kt)("th",{valign:"top",colspan:"4",align:"left"},(0,o.kt)("a",{href:"#callbacks",name:"callbacks"},"Callbacks"))),(0,o.kt)("tr",null,(0,o.kt)("th",{valign:"top",align:"left"},"Setting"),(0,o.kt)("th",{valign:"top",align:"left"},"Description"),(0,o.kt)("th",{valign:"top",align:"left"},"Type"),(0,o.kt)("th",{valign:"top",align:"left"},"Default")),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"load(query, callback)")),(0,o.kt)("td",{valign:"top"},"Invoked when new options should be loaded from the server. Called with the current query string and a callback function to call with the results when they are loaded (or nothing when an error arises)."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"function")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"score(search)")),(0,o.kt)("td",{valign:"top"},"Overrides the scoring function used to sort available options. The provided function should return a ",(0,o.kt)("strong",null,"function")," that returns a number greater than or equal to zero to represent the ",(0,o.kt)("code",null,"score")," of an item (the function's first argument). If 0, the option is declared not a match. The ",(0,o.kt)("code",null,"search")," argument is a ",(0,o.kt)("a",{href:"#search"},"Search")," object. For an example, see the ",(0,o.kt)("a",{href:"https://github.com/brianreavis/selectize.js/blob/master/examples/github.html"},'"GitHub" example'),"."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"function")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"formatValueToKey(key)")),(0,o.kt)("td",{valign:"top"},"Function to generate ",(0,o.kt)("strong",null,"key")," for a new item created from input when create is set to true, to generate a `'key' => 'value'` combination. Without using this function, it will result in `'value' => 'value'` combination. The provided function should return a ",(0,o.kt)("strong",null,"key")," that is not object or function."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"string")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"onInitialize()")),(0,o.kt)("td",{valign:"top"},"Invoked once the control is completely initialized."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"function")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"onFocus()")),(0,o.kt)("td",{valign:"top"},"Invoked when the control gains focus."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"function")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"onBlur()")),(0,o.kt)("td",{valign:"top"},"Invoked when the control loses focus."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"function")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"onChange(value)")),(0,o.kt)("td",{valign:"top"},"Invoked when the value of the control changes."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"function")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"onItemAdd(value, $item)")),(0,o.kt)("td",{valign:"top"},"Invoked when an item is selected."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"function")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"onItemRemove(value)")),(0,o.kt)("td",{valign:"top"},"Invoked when an item is deselected."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"function")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"onClear()")),(0,o.kt)("td",{valign:"top"},"Invoked when the control is manually cleared via the clear() method."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"function")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"onDelete(values)")),(0,o.kt)("td",{valign:"top"},"Invoked when the user attempts to delete the current selection."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"function")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"onOptionAdd(value, data)")),(0,o.kt)("td",{valign:"top"},"Invoked when a new option is added to the available options list."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"function")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"onOptionRemove(value)")),(0,o.kt)("td",{valign:"top"},"Invoked when an option is removed from the available options."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"function")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"onDropdownOpen($dropdown)")),(0,o.kt)("td",{valign:"top"},"Invoked when the dropdown opens."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"function")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"onDropdownClose($dropdown)")),(0,o.kt)("td",{valign:"top"},"Invoked when the dropdown closes."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"function")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"onType(str)")),(0,o.kt)("td",{valign:"top"},"Invoked when the user types while filtering options."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"function")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"onLoad(data)")),(0,o.kt)("td",{valign:"top"},"Invoked when new options have been loaded and added to the control (via the ",(0,o.kt)("code",null,"load")," option or ",(0,o.kt)("code",null,"load")," API method)."),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"function")),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"null"))),(0,o.kt)("tr",null,(0,o.kt)("th",{valign:"top",colspan:"4",align:"left"},(0,o.kt)("a",{href:"#rendering",name:"rendering"},"Rendering"))),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"render")),(0,o.kt)("td",{valign:"top"},"Custom rendering functions. Each function should accept two arguments: ",(0,o.kt)("code",null,"data")," and ",(0,o.kt)("code",null,"escape")," and return HTML (string or DOM element) with a single root element. The ",(0,o.kt)("code",null,"escape")," argument is a function that takes a string and escapes all special HTML characters. This is very important to use to prevent XSS vulnerabilities.",(0,o.kt)("table",{width:"100%"},(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"option")),(0,o.kt)("td",{valign:"top"},"An option in the ",(0,o.kt)("br",null),"dropdown list of ",(0,o.kt)("br",null),"available options.")),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"item")),(0,o.kt)("td",{valign:"top"},"An item the user has ",(0,o.kt)("br",null),"selected.")),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"option_create")),(0,o.kt)("td",{valign:"top"},'The "create new" option ',(0,o.kt)("br",null),"at the bottom of the ",(0,o.kt)("br",null),"dropdown. The data ",(0,o.kt)("br",null),"contains one property :",(0,o.kt)("br",null)," ",(0,o.kt)("code",null,"input")," (which is ",(0,o.kt)("br",null),"what the  user has ",(0,o.kt)("br",null),"typed).")),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"optgroup_header")),(0,o.kt)("td",{valign:"top"},"The header of an option ",(0,o.kt)("br",null),"group.")),(0,o.kt)("tr",null,(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"optgroup")),(0,o.kt)("td",{valign:"top"},"The wrapper for an ",(0,o.kt)("br",null),"optgroup. The ",(0,o.kt)("code",null,"html"),(0,o.kt)("br",null)," property in the data ",(0,o.kt)("br",null)," will be the raw ",(0,o.kt)("br",null),"html of the optgroup ",(0,o.kt)("br",null),"header and options.")))),(0,o.kt)("td",{valign:"top"},(0,o.kt)("code",null,"object")),(0,o.kt)("td",{valign:"top"}))))}k.isMDXComponent=!0}}]);