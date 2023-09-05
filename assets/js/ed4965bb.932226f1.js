"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4285],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9652:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={title:"0.14.1",sidebar_position:21},o="0.14.1 - 2022-09-07",l={unversionedId:"releases/0_14_1",id:"releases/0_14_1",title:"0.14.1",description:"Fixed",source:"@site/docs/releases/0_14_1.md",sourceDirName:"releases",slug:"/releases/0_14_1",permalink:"/docs/releases/0_14_1",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/0_14_1.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"0.14.1",sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"0.15.1",permalink:"/docs/releases/0_15_1"},next:{title:"0.14.0",permalink:"/docs/releases/0_14_0"}},s={},p=[{value:"Fixed",id:"fixed",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0141---2022-09-07"},"0.14.1 - 2022-09-07"),(0,i.kt)("h3",{id:"fixed"},"Fixed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix Spark integration issues including error when no ",(0,i.kt)("inlineCode",{parentName:"li"},"openlineage.timeout")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1069"},(0,i.kt)("inlineCode",{parentName:"a"},"#1069"))," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,i.kt)("br",{parentName:"li"}),"",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"OpenlineageSparkListener")," was failing when no ",(0,i.kt)("inlineCode",{parentName:"em"},"openlineage.timeout")," was provided."))))}u.isMDXComponent=!0}}]);