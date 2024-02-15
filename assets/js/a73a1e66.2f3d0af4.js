"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6815],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,y=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8797:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:5,title:"Job Hierarchy"},a=void 0,s={unversionedId:"integrations/airflow/job-hierarchy",id:"integrations/airflow/job-hierarchy",title:"Job Hierarchy",description:"This page is about Airflow's external integration that works mainly for Airflow versions <2.7.",source:"@site/docs/integrations/airflow/job-hierarchy.md",sourceDirName:"integrations/airflow",slug:"/integrations/airflow/job-hierarchy",permalink:"/docs/integrations/airflow/job-hierarchy",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/integrations/airflow/job-hierarchy.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Job Hierarchy"},sidebar:"tutorialSidebar",previous:{title:"Testing Custom Extractors",permalink:"/docs/integrations/airflow/extractors/extractor-testing"},next:{title:"Apache Flink",permalink:"/docs/integrations/flink"}},c={},l=[{value:"Job Hierarchy",id:"job-hierarchy",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This page is about Airflow's external integration that works mainly for Airflow versions <2.7.\n",(0,o.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow-providers-openlineage/stable/index.html"},"If you're using Airflow 2.7+, look at native Airflow OpenLineage provider documentation."))),(0,o.kt)("h2",{id:"job-hierarchy"},"Job Hierarchy"),(0,o.kt)("p",null,"Apache Airflow features an inherent job hierarchy: DAGs, large and independently schedulable units, comprise smaller, executable tasks."),(0,o.kt)("p",null,"OpenLineage reflects this structure in its Job Hierarchy model.\nUpon DAG scheduling, a START event is emitted.\nSubsequently, each task triggers START events at TaskInstance start and COMPLETE/FAILED events upon completion, following Airflow's task order.\nFinally, upon DAG termination, a completion event (COMPLETE or FAILED) is emitted.\nTaskInstance events' ParentRunFacet references the originating DAG run."))}u.isMDXComponent=!0}}]);