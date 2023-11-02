"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9137],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6232:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={title:"0.8.2",sidebar_position:9985},o="0.8.2 - 2022-05-19",l={unversionedId:"releases/0_8_2",id:"releases/0_8_2",title:"0.8.2",description:"Added",source:"@site/docs/releases/0_8_2.md",sourceDirName:"releases",slug:"/releases/0_8_2",permalink:"/docs/releases/0_8_2",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/0_8_2.md",tags:[],version:"current",sidebarPosition:9985,frontMatter:{title:"0.8.2",sidebar_position:9985},sidebar:"tutorialSidebar",previous:{title:"0.9.0",permalink:"/docs/releases/0_9_0"},next:{title:"0.8.1",permalink:"/docs/releases/0_8_1"}},s={},p=[{value:"Added",id:"added",level:3},{value:"Fixed",id:"fixed",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"082---2022-05-19"},"0.8.2 - 2022-05-19"),(0,a.kt)("h3",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"openlineage-airflow")," now supports getting credentials from ",(0,a.kt)("a",{parentName:"li",href:"https://airflow.apache.org/docs/apache-airflow/stable/security/secrets/secrets-backend/index.html"},"Airflows secrets backend")," (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/723"},"#723"),") ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"openlineage-spark")," now supports ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/databricks/security/credential-passthrough"},"Azure Databricks Credential Passthrough")," (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/595"},"#595"),") ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/wjohnson"},"@wjohnson")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"openlineage-spark")," detects datasets wrapped by ",(0,a.kt)("inlineCode",{parentName:"li"},"ExternalRDD"),"s (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/746"},"#746"),") ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/collado-mike"},"@collado-mike"))),(0,a.kt)("h3",{id:"fixed"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PostgresOperator")," fails to retrieve host and conn during extraction (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/705"},"#705"),") ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/sekikn"},"@sekikn")),(0,a.kt)("li",{parentName:"ul"},"SQL parser accepts lists of sql statements (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/issues/734"},"#734"),") ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")),(0,a.kt)("li",{parentName:"ul"},"Missing schema when writing to Delta tables in Databricks (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/748"},"#748"),") ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/collado-mike"},"@collado-mike"))))}u.isMDXComponent=!0}}]);