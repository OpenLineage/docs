"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4299],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,w=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return n?r.createElement(w,a(a({ref:t},f),{},{components:n})):r.createElement(w,a({ref:t},f))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:2,title:"Supported Airflow versions"},a=void 0,l={unversionedId:"integrations/airflow/older",id:"integrations/airflow/older",title:"Supported Airflow versions",description:"This page is about Airflow's external integration that works mainly for Airflow versions <2.7.",source:"@site/docs/integrations/airflow/older.md",sourceDirName:"integrations/airflow",slug:"/integrations/airflow/older",permalink:"/docs/integrations/airflow/older",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/integrations/airflow/older.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Supported Airflow versions"},sidebar:"tutorialSidebar",previous:{title:"Using the Airflow Integration",permalink:"/docs/integrations/airflow/usage"},next:{title:"Exposing Lineage in Airflow Operators",permalink:"/docs/integrations/airflow/default-extractors"}},s={},p=[{value:"SUPPORTED AIRFLOW VERSIONS",id:"supported-airflow-versions",level:4},{value:"Airflow 2.7+",id:"airflow-27",level:5},{value:"Airflow 2.3 - 2.6",id:"airflow-23---26",level:5},{value:"Airflow 2.1 - 2.2",id:"airflow-21---22",level:5},{value:"Airflow &lt;2.1",id:"airflow-21",level:5}],f={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This page is about Airflow's external integration that works mainly for Airflow versions <2.7.\n",(0,o.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow-providers-openlineage/stable/index.html"},"If you're using Airflow 2.7+, look at native Airflow OpenLineage provider documentation."),"  ",(0,o.kt)("br",null),(0,o.kt)("br",null)," "),(0,o.kt)("p",{parentName:"admonition"},"The ongoing development and enhancements will be focused on the ",(0,o.kt)("inlineCode",{parentName:"p"},"apache-airflow-providers-openlineage")," package,\nwhile the ",(0,o.kt)("inlineCode",{parentName:"p"},"openlineage-airflow")," will primarily be updated for bug fixes.")),(0,o.kt)("h4",{id:"supported-airflow-versions"},"SUPPORTED AIRFLOW VERSIONS"),(0,o.kt)("h5",{id:"airflow-27"},"Airflow 2.7+"),(0,o.kt)("p",null,"This package ",(0,o.kt)("strong",{parentName:"p"},"should not")," be used starting with Airflow 2.7.0 and ",(0,o.kt)("strong",{parentName:"p"},"can not")," be used with Airflow 2.8+.\nIt was designed as Airflow's external integration that works mainly for Airflow versions <2.7.\nFor Airflow 2.7+ use the native Airflow OpenLineage provider\n",(0,o.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow-providers-openlineage"},"package")," ",(0,o.kt)("inlineCode",{parentName:"p"},"apache-airflow-providers-openlineage"),"."),(0,o.kt)("h5",{id:"airflow-23---26"},"Airflow 2.3 - 2.6"),(0,o.kt)("p",null,"The integration automatically registers itself starting from Airflow 2.3 if it's installed on the Airflow worker's Python.\nThis means you don't have to do anything besides configuring where the events are sent, which is described in the ",(0,o.kt)("a",{parentName:"p",href:"#configuration"},"configuration")," section."),(0,o.kt)("h5",{id:"airflow-21---22"},"Airflow 2.1 - 2.2"),(0,o.kt)("p",null,"Integration for those versions has limitations: it does not support tracking failed jobs,\nand job starts are registered only when a job ends (a ",(0,o.kt)("inlineCode",{parentName:"p"},"LineageBackend"),"-based approach collects all metadata\nfor a task on each task's completion)."),(0,o.kt)("p",null,"To make OpenLineage work, in addition to installing ",(0,o.kt)("inlineCode",{parentName:"p"},"openlineage-airflow")," you need to set your ",(0,o.kt)("inlineCode",{parentName:"p"},"LineageBackend"),"\nin your ",(0,o.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/howto/set-config.html"},"airflow.cfg")," or via environmental variable ",(0,o.kt)("inlineCode",{parentName:"p"},"AIRFLOW__LINEAGE__BACKEND")," to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openlineage.lineage_backend.OpenLineageBackend\n")),(0,o.kt)("p",null,"The OpenLineageBackend does not take into account manually configured inlets and outlets. "),(0,o.kt)("h5",{id:"airflow-21"},"Airflow <2.1"),(0,o.kt)("p",null,"OpenLineage does not work with versions older than Airflow 2.1."))}c.isMDXComponent=!0}}]);