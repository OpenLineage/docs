"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5560],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"0.29.2",sidebar_position:9959},o="0.29.2 - 2023-06-30",l={unversionedId:"releases/0_29_2",id:"releases/0_29_2",title:"0.29.2",description:"Added",source:"@site/docs/releases/0_29_2.md",sourceDirName:"releases",slug:"/releases/0_29_2",permalink:"/docs/releases/0_29_2",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/0_29_2.md",tags:[],version:"current",sidebarPosition:9959,frontMatter:{title:"0.29.2",sidebar_position:9959},sidebar:"tutorialSidebar",previous:{title:"0.30.1",permalink:"/docs/releases/0_30_1"},next:{title:"0.28.0",permalink:"/docs/releases/0_28_0"}},p={},s=[{value:"Added",id:"added",level:3},{value:"Removed",id:"removed",level:3}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0292---2023-06-30"},"0.29.2 - 2023-06-30"),(0,a.kt)("h3",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Flink: support Flink version 1.17.1")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1947"},(0,a.kt)("inlineCode",{parentName:"a"},"#1947"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Support Flink versions: 1.15.4, 1.16.2 and 1.17.1.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Spark: support Spark 3.4")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1790"},(0,a.kt)("inlineCode",{parentName:"a"},"#1790"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Introduce support for latest Spark version 3.4.0, along with 3.2.4 and 3.3.2.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Spark: add Databricks platform integration test")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1928"},(0,a.kt)("inlineCode",{parentName:"a"},"#1928"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Spark integration test to verify behaviour on databricks platform to be run manually in CircleCI when needed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Spec: add static lineage event types")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1880"},(0,a.kt)("inlineCode",{parentName:"a"},"#1880"))," @pawel-big-lebowski",(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"As a first step in implementing static lineage, this adds new ",(0,a.kt)("inlineCode",{parentName:"em"},"DatasetEvent")," and ",(0,a.kt)("inlineCode",{parentName:"em"},"JobEvent")," types to the spec, along with support for the new types in the Python client."))),(0,a.kt)("h3",{id:"removed"},"Removed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Proxy: remove unused Golang client approach")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1926"},(0,a.kt)("inlineCode",{parentName:"a"},"#1926"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Removes the unused Golang proxy, rendered redundant by the fluentd proxy.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Req: bump minimum supported Python version to 3.8")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1950"},(0,a.kt)("inlineCode",{parentName:"a"},"#1950"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Python 3.7 is at EOL. This bumps the minimum supported version to 3.8 to keep the project aligned with the Python EOL schedule."))))}u.isMDXComponent=!0}}]);