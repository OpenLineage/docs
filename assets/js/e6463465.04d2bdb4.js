"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2359],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>d});var s=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,s,n=function(t,e){if(null==t)return{};var a,s,n={},r=Object.keys(t);for(s=0;s<r.length;s++)a=r[s],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)a=r[s],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=s.createContext({}),p=function(t){var e=s.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},u=function(t){var e=p(t.components);return s.createElement(i.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},l=s.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,i=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),l=p(a),d=n,m=l["".concat(i,".").concat(d)]||l[d]||f[d]||r;return a?s.createElement(m,c(c({ref:e},u),{},{components:a})):s.createElement(m,c({ref:e},u))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,c=new Array(r);c[0]=l;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:n,c[1]=o;for(var p=2;p<r;p++)c[p]=a[p];return s.createElement.apply(null,c)}return s.createElement.apply(null,a)}l.displayName="MDXCreateElement"},9109:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var s=a(7462),n=(a(7294),a(3905));const r={sidebar_position:1},c="Output Statistics Facet",o={unversionedId:"spec/facets/dataset-facets/output-dataset-facets/output_statistics",id:"spec/facets/dataset-facets/output-dataset-facets/output_statistics",title:"Output Statistics Facet",description:"Example:",source:"@site/docs/spec/facets/dataset-facets/output-dataset-facets/output_statistics.md",sourceDirName:"spec/facets/dataset-facets/output-dataset-facets",slug:"/spec/facets/dataset-facets/output-dataset-facets/output_statistics",permalink:"/docs/spec/facets/dataset-facets/output-dataset-facets/output_statistics",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/spec/facets/dataset-facets/output-dataset-facets/output_statistics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Data Quality Metrics Facet",permalink:"/docs/spec/facets/dataset-facets/input-dataset-facets/data_quality_metrics"},next:{title:"Custom Facets",permalink:"/docs/spec/facets/custom-facets"}},i={},p=[],u={toc:p};function f(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,s.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"output-statistics-facet"},"Output Statistics Facet"),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "inputs": {\n        "outputFacets": {\n            "outputStatistics": {\n                "_producer": "https://some.producer.com/version/1.0",\n                "_schemaURL": "https://openlineage.io/spec/facets/1-0-0/OutputStatisticsOutputDatasetFacet.json",\n                "rowCount": 123,\n                "size": 35602\n            }\n        }\n    }\n    ...\n}\n')),(0,n.kt)("p",null,"The facet specification can be found ",(0,n.kt)("a",{parentName:"p",href:"https://openlineage.io/spec/facets/1-0-0/OutputStatisticsOutputDatasetFacet.json"},"here"),"."))}f.isMDXComponent=!0}}]);