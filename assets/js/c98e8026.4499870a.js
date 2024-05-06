"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,g=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"1.12.0",sidebar_position:9945},l="1.12.0 - 2024-04-09",o={unversionedId:"releases/1_12_0",id:"releases/1_12_0",title:"1.12.0",description:"Added",source:"@site/docs/releases/1_12_0.md",sourceDirName:"releases",slug:"/releases/1_12_0",permalink:"/docs/releases/1_12_0",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/1_12_0.md",tags:[],version:"current",sidebarPosition:9945,frontMatter:{title:"1.12.0",sidebar_position:9945},sidebar:"tutorialSidebar",previous:{title:"1.13.1",permalink:"/docs/releases/1_13_1"},next:{title:"1.11.3",permalink:"/docs/releases/1_11_3"}},p={},s=[{value:"Added",id:"added",level:3},{value:"Fixed",id:"fixed",level:3}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1120---2024-04-09"},"1.12.0 - 2024-04-09"),(0,r.kt)("h3",{id:"added"},"Added"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Airflow: add ",(0,r.kt)("inlineCode",{parentName:"strong"},"lineage_job_namespace")," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"lineage_job_name")," macros")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2582"},(0,r.kt)("inlineCode",{parentName:"a"},"#2582"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dolfinus"},"@dolfinus"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds new Airflow macros ",(0,r.kt)("inlineCode",{parentName:"em"},"lineage_job_namespace()"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"lineage_job_name(task)")," that return an Airflow namespace and Airflow job name, respectively.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spec: Allow nested struct fields in ",(0,r.kt)("inlineCode",{parentName:"strong"},"SchemaDatasetFacet"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2548"},(0,r.kt)("inlineCode",{parentName:"a"},"#2548"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dolfinus"},"@dolfinus"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Allows nested fields support to ",(0,r.kt)("inlineCode",{parentName:"em"},"SchemaDatasetFacet"),"."))),(0,r.kt)("h3",{id:"fixed"},"Fixed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: fix PMD for test")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2588"},(0,r.kt)("inlineCode",{parentName:"a"},"#2588"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Clears ",(0,r.kt)("inlineCode",{parentName:"em"},"pmdTestScala212")," from warnings that clutter the logs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dbt: propagate the dbt return code also when no OpenLineage events are emitted")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2591"},(0,r.kt)("inlineCode",{parentName:"a"},"#2591"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/blacklight"},"@blacklight"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"dbt-ol")," now propagates the exit code of the underlying dbt process even if no lineage events are emitted.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Java: make sure string isn't empty to prevent going out of bounds")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2585"},(0,r.kt)("inlineCode",{parentName:"a"},"#2585"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/harels"},"@harels"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"String lookup was not accounting for empty strings and causing a ",(0,r.kt)("inlineCode",{parentName:"em"},"java.lang.StringIndexOutOfBoundsException"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: use ",(0,r.kt)("inlineCode",{parentName:"strong"},"HashSet")," in column-level lineage instead of iterating through ",(0,r.kt)("inlineCode",{parentName:"strong"},"LinkedList"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2584"},(0,r.kt)("inlineCode",{parentName:"a"},"#2584"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mobuchowski"},"@mobuchowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Takes advantage of performance gains available from using ",(0,r.kt)("inlineCode",{parentName:"em"},"HashSet")," for collection.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Python: fix missing pkg_resources module on Python 3.12")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2572"},(0,r.kt)("inlineCode",{parentName:"a"},"#2572"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dolfinus"},"@dolfinus"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Removes ",(0,r.kt)("inlineCode",{parentName:"em"},"pkg_resources")," dependency and replaces it with the ",(0,r.kt)("a",{parentName:"em",href:"https://packaging.pypa.io/en/latest/version.html"},"packaging")," lib.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Airflow: fix format returned by ",(0,r.kt)("inlineCode",{parentName:"strong"},"airflow.macros.lineage_parent_id"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2578"},(0,r.kt)("inlineCode",{parentName:"a"},"#2578"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/blacklight"},"@blacklight"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Fixes the run format returned by the ",(0,r.kt)("inlineCode",{parentName:"em"},"lineage_parent_id")," Airflow macro and simplifies the format of the ",(0,r.kt)("inlineCode",{parentName:"em"},"lineage_parent_id")," and ",(0,r.kt)("inlineCode",{parentName:"em"},"lineage_run_id")," macros.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dagster: limit Dagster version to 1.6.9")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2579"},(0,r.kt)("inlineCode",{parentName:"a"},"#2579"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JDarDagran"},"@JDarDagran"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds an upper limit on supported versions of Dagster as the integration is no longer actively maintained and recent releases introduce breaking changes."))))}c.isMDXComponent=!0}}]);