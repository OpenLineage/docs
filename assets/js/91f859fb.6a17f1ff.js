"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"0.27.1",sidebar_position:10},o="0.27.1 - 2023-06-05",l={unversionedId:"releases/0_27_1",id:"releases/0_27_1",title:"0.27.1",description:"Added",source:"@site/docs/releases/0_27_1.md",sourceDirName:"releases",slug:"/releases/0_27_1",permalink:"/docs/releases/0_27_1",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/0_27_1.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"0.27.1",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"0.27.2",permalink:"/docs/releases/0_27_2"},next:{title:"0.26.0",permalink:"/docs/releases/0_26_0"}},s={},p=[{value:"Added",id:"added",level:3},{value:"Fixed",id:"fixed",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0271---2023-06-05"},"0.27.1 - 2023-06-05"),(0,a.kt)("h3",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Python client: add emission filtering mechanism and exact, regex filters")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1878"},(0,a.kt)("inlineCode",{parentName:"a"},"#1878"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Adds configurable job-name filtering to the Python client. Filters can be exact-match- or regex-based. Events will not be sent in the case of matches."))),(0,a.kt)("h3",{id:"fixed"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Spark: fix column lineage for aggregate queries on databricks")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1867"},(0,a.kt)("inlineCode",{parentName:"a"},"#1867"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Aggregate queries on databricks did not return column lineage.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Airflow: fix unquoted ",(0,a.kt)("inlineCode",{parentName:"strong"},"[")," and ",(0,a.kt)("inlineCode",{parentName:"strong"},"]")," in Snowflake URIs")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/1883"},(0,a.kt)("inlineCode",{parentName:"a"},"#1883"))," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,a.kt)("br",{parentName:"li"}),"",(0,a.kt)("em",{parentName:"li"},"Snowflake connections containing one of ",(0,a.kt)("inlineCode",{parentName:"em"},"[")," or ",(0,a.kt)("inlineCode",{parentName:"em"},"]")," were causing ",(0,a.kt)("inlineCode",{parentName:"em"},"urllib.parse.urlparse")," to fail."))))}u.isMDXComponent=!0}}]);