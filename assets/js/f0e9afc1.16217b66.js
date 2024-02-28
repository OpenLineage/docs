"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=p(r),d=o,y=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},92799:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:5,title:"Job Hierarchy"},a=void 0,c={unversionedId:"integrations/spark/job-hierarchy",id:"integrations/spark/job-hierarchy",title:"Job Hierarchy",description:"Job Hierarchy",source:"@site/docs/integrations/spark/job-hierarchy.md",sourceDirName:"integrations/spark",slug:"/integrations/spark/job-hierarchy",permalink:"/docs/integrations/spark/job-hierarchy",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/integrations/spark/job-hierarchy.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Job Hierarchy"},sidebar:"tutorialSidebar",previous:{title:"Extending",permalink:"/docs/integrations/spark/extending"},next:{title:"Apache Airflow",permalink:"/docs/integrations/airflow/"}},s={},p=[{value:"Job Hierarchy",id:"job-hierarchy",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"job-hierarchy"},"Job Hierarchy"),(0,o.kt)("p",null,'In contrast to some other systems, Spark\'s job hierarchy is more opaque.\nWhile you might schedule "Spark jobs" through code or notebooks, these represent an entirely different concept than what Spark sees internally.\nFor Spark, the true job is an action, a single computation unit initiated by the driver.\nThese actions materialize data only when you, the user, instruct them to write to a data sink or visualize it.\nThis means what you perceive as a single job can, in reality, be multiple execution units within Spark.\nOpenLineage follows Spark execution model, and emits START/COMPLETE (and RUNNING) events\nfor each action. However, those are not the only events we emit.'),(0,o.kt)("p",null,"Recognizing the disconnect between your understanding and Spark's internal workings,\nOpenLineage introduces application-level events that mark the start and end of a Spark application.\nEach action-level run then points its ParentRunFacet to the corresponding Spark application run, providing a complete picture of the lineage."))}u.isMDXComponent=!0}}]);