"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9217],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),h=r,d=u["".concat(p,".").concat(h)]||u[h]||c[h]||i;return a?n.createElement(d,l(l({ref:t},m),{},{components:a})):n.createElement(d,l({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},39313:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"1.8.0",sidebar_position:9949},l="1.8.0 - 2024-01-22",o={unversionedId:"releases/1_8_0",id:"releases/1_8_0",title:"1.8.0",description:"Added",source:"@site/docs/releases/1_8_0.md",sourceDirName:"releases",slug:"/releases/1_8_0",permalink:"/docs/releases/1_8_0",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/releases/1_8_0.md",tags:[],version:"current",sidebarPosition:9949,frontMatter:{title:"1.8.0",sidebar_position:9949},sidebar:"tutorialSidebar",previous:{title:"OpenLineage Proxy",permalink:"/docs/development/ol-proxy"},next:{title:"1.7.0",permalink:"/docs/releases/1_7_0"}},p={},s=[{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"Fixed",id:"fixed",level:3}],m={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"180---2024-01-22"},"1.8.0 - 2024-01-22"),(0,r.kt)("h3",{id:"added"},"Added"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flink: support Flink 1.18")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2366"},(0,r.kt)("inlineCode",{parentName:"a"},"#2366"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/HuangZhenQiu"},"@HuangZhenQiu"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds support for the latest Flink version with 1.17 used for Iceberg Flink runtime and Cassandra Connector as these do not yet support 1.18.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: add Gradle plugins to simplify the build process to support Scala 2.13")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2376"},(0,r.kt)("inlineCode",{parentName:"a"},"#2376"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/d-m-h"},"@d-m-h"),(0,r.kt)("br",{parentName:"li"}),"*Defines a set of Gradle plugins to configure the modules and reduce duplication."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: support multiple Scala versions ",(0,r.kt)("inlineCode",{parentName:"strong"},"LogicalPlan")," implementation")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2361"},(0,r.kt)("inlineCode",{parentName:"a"},"#2361"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mattiabertorello"},"@mattiabertorello"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"In the LogicalPlanSerializerTest class, the implementation of the LogicalPlan interface is different between Scala 2.12 and Scala 2.13. In detail, the IndexedSeq changes package from the scala.collection to scala.collection.immutable. This implements both of the methods necessary in the two versions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: Use ScalaConversionUtils to convert Scala and Java collections")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2357"},(0,r.kt)("inlineCode",{parentName:"a"},"#2357"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mattiabertorello"},"@mattiabertorello"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"This initial step is to start supporting compilation for Scala 2.13 in the 3.2+ Spark versions. Scala 2.13 changed the default collection to immutable, the methods to create an empty collection, and the conversion between Java and Scala. This causes the code to not compile between 2.12 and 2.13. This replaces the usage of direct Scala collection methods (like creating an empty object) and conversions utils with ",(0,r.kt)("inlineCode",{parentName:"em"},"ScalaConversionUtils")," methods that will support cross-compilation.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: support ",(0,r.kt)("inlineCode",{parentName:"strong"},"MERGE INTO")," queries on Databricks")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2348"},(0,r.kt)("inlineCode",{parentName:"a"},"#2348"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Supports custom plan nodes used when running ",(0,r.kt)("inlineCode",{parentName:"em"},"MERGE INTO")," queries on Databricks runtime.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: Support Glue catalog in iceberg")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2283"},(0,r.kt)("inlineCode",{parentName:"a"},"#2283"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nataliezeller1"},"@nataliezeller1"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Adds support for the Glue catalog based on the 'catalog-impl' property (in this case we will not have a 'type' property)."))),(0,r.kt)("h3",{id:"changed"},"Changed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: Move Spark 3.1 code from the spark3 project")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2365"},(0,r.kt)("inlineCode",{parentName:"a"},"#2365"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mattiabertorello"},"@mattiabertorello"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Moves the Spark 3.1-related code to a specific project, spark31, so the spark3 project can be compiled with any Spark 3.x version."))),(0,r.kt)("h3",{id:"fixed"},"Fixed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Airflow: add database information to SnowflakeExtractor")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2364"},(0,r.kt)("inlineCode",{parentName:"a"},"#2364"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kacpermuda"},"@kacpermuda"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Fixes missing database information in SnowflakeExtractor.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Airflow: add dag_id to task_run_id to avoid duplicates")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2358"},(0,r.kt)("inlineCode",{parentName:"a"},"#2358"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kacpermuda"},"@kacpermuda"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"The lack of dag_id in task_run_id can cause duplicates in run_id across different dags.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Airflow: Add tests for column lineage facet and sql parser")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2373"},(0,r.kt)("inlineCode",{parentName:"a"},"#2373"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kacpermuda"},"@kacpermuda"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Improves naming (database.schema.table) in SQLExtractor's column lineage facet and adds some unit tests.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: fix removePathPattern behaviour")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2350"},(0,r.kt)("inlineCode",{parentName:"a"},"#2350"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"The removepath pattern feature is not applied all the time. The method is called when constructing DatasetIdentifier through PathUtils which is not the case all the time. This moves removePattern to another place in the codebase that is always run.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: fix a type incompatibility in RddExecutionContext between Scala 2.12 and 2.13")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2360"},(0,r.kt)("inlineCode",{parentName:"a"},"#2360"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mattiabertorello"},"@mattiabertorello"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"The function from the ResultStage.func() object change type in Spark between Scala 2.12 and 2.13 makes the compilation fail. This avoids getting the function with an explicit type; instead, it gets it every time it is needed from the ResultStage object. This PR is part of the effort to support Scala 2.13 in the Spark integration.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: Fix ",(0,r.kt)("inlineCode",{parentName:"strong"},"removePathPattern")," feature")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2350"},(0,r.kt)("inlineCode",{parentName:"a"},"#2350"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pawel-big-lebowski"},"@pawel-big-lebowski"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Refactors code to make sure that all datasets sent are processed through ",(0,r.kt)("inlineCode",{parentName:"em"},"removePathPattern")," if configured to do so.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: Clean up the individual build.gradle files in preparation for Scala 2.13 support")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2377"},(0,r.kt)("inlineCode",{parentName:"a"},"#2377"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/d-m-h"},"@d-m-h"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"Cleans up the build.gradle files, consolidating the custom plugin and removing unused and unnecessary configuration.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spark: refactor the Gradle plugins to make it easier to define Scala variants per module")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/pull/2383"},(0,r.kt)("inlineCode",{parentName:"a"},"#2383"))," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/d-m-h"},"@d-m-h"),(0,r.kt)("br",{parentName:"li"}),"",(0,r.kt)("em",{parentName:"li"},"The third of several PRs to support producing Scala 2.12 and Scala 2.13 variants of the OpenLineage Spark integration. This PR refactors the custom Gradle plugins in order to make supporting multiple variants per module easier. This is necessary because the shared module fails its tests when consuming the Scala 2.13 variants of Apache Spark."))))}c.isMDXComponent=!0}}]);