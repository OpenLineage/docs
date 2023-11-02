"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"1.0.0",sidebar_position:9957},o="1.0.0 - 2023-08-01",l={unversionedId:"releases/1_0_0",id:"releases/1_0_0",title:"1.0.0",description:"Added",source:"@site/docs/releases/1_0_0.md",sourceDirName:"releases",slug:"/releases/1_0_0",permalink:"/docs/releases/1_0_0",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/1_0_0.md",tags:[],version:"current",sidebarPosition:9957,frontMatter:{title:"1.0.0",sidebar_position:9957},sidebar:"tutorialSidebar",previous:{title:"1.1.0",permalink:"/docs/releases/1_1_0"},next:{title:"0.30.1",permalink:"/docs/releases/0_30_1"}},p={},s=[{value:"Added",id:"added",level:3},{value:"Removed",id:"removed",level:3},{value:"Changed",id:"changed",level:3},{value:"Fixed",id:"fixed",level:3}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"100---2023-08-01"},"1.0.0 - 2023-08-01"),(0,a.kt)("h3",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Airflow: convert lineage from legacy ",(0,a.kt)("inlineCode",{parentName:"strong"},"File")," definition")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2006"},(0,a.kt)("inlineCode",{parentName:"a"},"#2006"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Adds coverage for ",(0,a.kt)("inlineCode",{parentName:"em"},"File")," entity definition to enhance backwards compatibility."))),(0,a.kt)("h3",{id:"removed"},"Removed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Spec: remove facet ref from core")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1997"},(0,a.kt)("inlineCode",{parentName:"a"},"#1997"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Removes references to facets from the core spec that broke compatibility with JSON schema specification."))),(0,a.kt)("h3",{id:"changed"},"Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Airflow: change log level to ",(0,a.kt)("inlineCode",{parentName:"strong"},"DEBUG")," when extractor isn't found")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2012"},(0,a.kt)("inlineCode",{parentName:"a"},"#2012"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kaxil"},"@kaxil"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Changes log level from ",(0,a.kt)("inlineCode",{parentName:"em"},"WARNING")," to ",(0,a.kt)("inlineCode",{parentName:"em"},"DEBUG")," when an extractor is not available.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Airflow: make sure we cannot fail in thread despite direct execution")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2010"},(0,a.kt)("inlineCode",{parentName:"a"},"#2010"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Ensures the listener is not failing tasks, even in unlikely scenarios."))),(0,a.kt)("h3",{id:"fixed"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Airflow: stop using reusable session by default, do not send full event on Snowflake complete")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2025"},(0,a.kt)("inlineCode",{parentName:"a"},"#2025"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Fixes the issue of the Snowflake connector clashing with ",(0,a.kt)("inlineCode",{parentName:"em"},"HttpTransport")," by disabling automatic ",(0,a.kt)("inlineCode",{parentName:"em"},"requests")," session reuse and not running ",(0,a.kt)("inlineCode",{parentName:"em"},"SnowflakeExtractor")," again on job completion.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Client: fix error message to avoid confusion")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2001"},(0,a.kt)("inlineCode",{parentName:"a"},"#2001"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mars-lan"},"@mars-lan"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Fixes the error message in ",(0,a.kt)("inlineCode",{parentName:"em"},"HttpTransport")," in the case of a null URL."))))}c.isMDXComponent=!0}}]);