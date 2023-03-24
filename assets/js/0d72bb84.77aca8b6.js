"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7110],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7760:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"How Operators and Extractors Work Under-the-Hook",date:new Date("2022-09-07T00:00:00.000Z"),author:"Benji Lampel",image:"./image.svg",banner:"./banner.svg",description:"A technical deep-dive on how the Airflow OSS and OpenLineage OSS projects interact."},i=void 0,c={permalink:"/blog/operators-and-extractors-technical-deep-dive",source:"@site/blog/operators-and-extractors-technical-deep-dive/index.mdx",title:"How Operators and Extractors Work Under-the-Hook",description:"A technical deep-dive on how the Airflow OSS and OpenLineage OSS projects interact.",date:"2022-09-07T00:00:00.000Z",formattedDate:"September 7, 2022",tags:[],readingTime:3.69,hasTruncateMarker:!0,authors:[{name:"Benji Lampel"}],frontMatter:{title:"How Operators and Extractors Work Under-the-Hook",date:"2022-09-07T00:00:00.000Z",author:"Benji Lampel",image:"./image.svg",banner:"./banner.svg",description:"A technical deep-dive on how the Airflow OSS and OpenLineage OSS projects interact."},prevItem:{title:"Pursuing Lineage from Airflow using Custom Extractors",permalink:"/blog/extractors"},nextItem:{title:"The Current State of Column-level Lineage",permalink:"/blog/column-lineage"}},l={image:r(8582).Z,authorsImageUrls:[void 0]},p=[],s={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A technical deep-dive on how the Airflow OSS and OpenLineage OSS projects interact. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(1744).Z+"#full-width",width:"770",height:"190"})))}d.isMDXComponent=!0},1744:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/banner-c5a21bc7ae7d024fdfae0b1e68502afb.svg"},8582:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-a2f9cc7ef0b794e59679837eef6c554a.svg"}}]);