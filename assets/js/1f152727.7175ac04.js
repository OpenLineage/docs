"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[233],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),h=r,d=c["".concat(p,".").concat(h)]||c[h]||m[h]||i;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7461:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={title:"0.7.1",sidebar_position:27},o="0.7.1 - 2022-04-19",l={unversionedId:"releases/0_7_1",id:"releases/0_7_1",title:"0.7.1",description:"Added",source:"@site/docs/releases/0_7_1.md",sourceDirName:"releases",slug:"/releases/0_7_1",permalink:"/docs/releases/0_7_1",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/0_7_1.md",tags:[],version:"current",sidebarPosition:27,frontMatter:{title:"0.7.1",sidebar_position:27},sidebar:"tutorialSidebar",previous:{title:"0.8.1",permalink:"/docs/releases/0_8_1"},next:{title:"0.6.2",permalink:"/docs/releases/0_6_2"}},p={},s=[{value:"Added",id:"added",level:3},{value:"Fixed",id:"fixed",level:3}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"071---2022-04-19"},"0.7.1 - 2022-04-19"),(0,r.kt)("h3",{id:"added"},"Added"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Python implements Transport interface - HTTP and Kafka transports are available (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/530"},"#530"),") ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")),(0,r.kt)("li",{parentName:"ul"},"Add UnknownOperatorAttributeRunFacet and support in lineage backend (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/547"},"#547"),") ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/collado-mike"},"@collado-mike")),(0,r.kt)("li",{parentName:"ul"},"Support Spark 3.2.1 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/607"},"#607"),") ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski")),(0,r.kt)("li",{parentName:"ul"},"Add StorageDatasetFacet to spec (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/620"},"#620"),") ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski")),(0,r.kt)("li",{parentName:"ul"},"Airflow: custom extractors lookup uses only get_operator_classnames method (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/656"},"#656"),") ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")),(0,r.kt)("li",{parentName:"ul"},"README.md created at OpenLineage/integrations for compatibility matrix (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/663"},"#663"),") ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/howardyoo"},"@howardyoo"))),(0,r.kt)("h3",{id:"fixed"},"Fixed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dagster: handle updated PipelineRun in OpenLineage sensor unit test (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/624"},"#624"),") ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dominiquetipton"},"@dominiquetipton")),(0,r.kt)("li",{parentName:"ul"},"Delta improvements (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/626"},"#626"),") ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/collado-mike"},"@collado-mike")),(0,r.kt)("li",{parentName:"ul"},"Fix SqlDwDatabricksVisitor for Spark2 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/630"},"#630"),") ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wjohnson"},"@wjohnson")),(0,r.kt)("li",{parentName:"ul"},"Airflow: remove redundant logging from GE import (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/657"},"#657"),") ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")),(0,r.kt)("li",{parentName:"ul"},"Fix Shebang issue in Spark's wait-for-it.sh (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/658"},"#658"),") ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski")),(0,r.kt)("li",{parentName:"ul"},"Update parent_run_id to be a uuid from the dag name and run_id (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/664"},"#664"),") ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/collado-mike"},"@collado-mike")),(0,r.kt)("li",{parentName:"ul"},"Spark: fix time zone inconsistency in testSerializeRunEvent (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/681"},"#681"),") ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/sekikn"},"@sekikn"))))}m.isMDXComponent=!0}}]);