"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4401],{3905:(I,M,i)=>{i.d(M,{Zo:()=>m,kt:()=>c});var e=i(7294);function N(I,M,i){return M in I?Object.defineProperty(I,M,{value:i,enumerable:!0,configurable:!0,writable:!0}):I[M]=i,I}function t(I,M){var i=Object.keys(I);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(I);M&&(e=e.filter((function(M){return Object.getOwnPropertyDescriptor(I,M).enumerable}))),i.push.apply(i,e)}return i}function a(I){for(var M=1;M<arguments.length;M++){var i=null!=arguments[M]?arguments[M]:{};M%2?t(Object(i),!0).forEach((function(M){N(I,M,i[M])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(M){Object.defineProperty(I,M,Object.getOwnPropertyDescriptor(i,M))}))}return I}function j(I,M){if(null==I)return{};var i,e,N=function(I,M){if(null==I)return{};var i,e,N={},t=Object.keys(I);for(e=0;e<t.length;e++)i=t[e],M.indexOf(i)>=0||(N[i]=I[i]);return N}(I,M);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(I);for(e=0;e<t.length;e++)i=t[e],M.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(I,i)&&(N[i]=I[i])}return N}var T=e.createContext({}),g=function(I){var M=e.useContext(T),i=M;return I&&(i="function"==typeof I?I(M):a(a({},M),I)),i},m=function(I){var M=g(I.components);return e.createElement(T.Provider,{value:M},I.children)},n={inlineCode:"code",wrapper:function(I){var M=I.children;return e.createElement(e.Fragment,{},M)}},u=e.forwardRef((function(I,M){var i=I.components,N=I.mdxType,t=I.originalType,T=I.parentName,m=j(I,["components","mdxType","originalType","parentName"]),u=g(i),c=N,l=u["".concat(T,".").concat(c)]||u[c]||n[c]||t;return i?e.createElement(l,a(a({ref:M},m),{},{components:i})):e.createElement(l,a({ref:M},m))}));function c(I,M){var i=arguments,N=M&&M.mdxType;if("string"==typeof I||N){var t=i.length,a=new Array(t);a[0]=u;var j={};for(var T in M)hasOwnProperty.call(M,T)&&(j[T]=M[T]);j.originalType=I,j.mdxType="string"==typeof I?I:N,a[1]=j;for(var g=2;g<t;g++)a[g]=i[g];return e.createElement.apply(null,a)}return e.createElement.apply(null,i)}u.displayName="MDXCreateElement"},2812:(I,M,i)=>{i.r(M),i.d(M,{assets:()=>T,contentTitle:()=>a,default:()=>n,frontMatter:()=>t,metadata:()=>j,toc:()=>g});var e=i(7462),N=(i(7294),i(3905));const t={title:"Introducing OpenLineage 0.1.0",date:new Date("2021-09-03T00:00:00.000Z"),authors:[{name:"Julien Le Dem",title:"OpenLineage Project Lead",url:"https://www.github.com/julienledem/"}],image:"./image.svg",banner:"./banner.svg",description:"We are pleased to announce the initial release of OpenLineage. This release includes the core specification, data model, clients, and integrations with common data tools."},a=void 0,j={permalink:"/blog/0.1-release",source:"@site/blog/0.1-release/index.mdx",title:"Introducing OpenLineage 0.1.0",description:"We are pleased to announce the initial release of OpenLineage. This release includes the core specification, data model, clients, and integrations with common data tools.",date:"2021-09-03T00:00:00.000Z",formattedDate:"September 3, 2021",tags:[],readingTime:1.155,hasTruncateMarker:!0,authors:[{name:"Julien Le Dem",title:"OpenLineage Project Lead",url:"https://www.github.com/julienledem/"}],frontMatter:{title:"Introducing OpenLineage 0.1.0",date:"2021-09-03T00:00:00.000Z",authors:[{name:"Julien Le Dem",title:"OpenLineage Project Lead",url:"https://www.github.com/julienledem/"}],image:"./image.svg",banner:"./banner.svg",description:"We are pleased to announce the initial release of OpenLineage. This release includes the core specification, data model, clients, and integrations with common data tools."},prevItem:{title:"Using Marquez to Visualize dbt Models",permalink:"/blog/dbt-with-marquez"},nextItem:{title:"Expecting Great Quality with OpenLineage Facets",permalink:"/blog/dataquality_expectations_facet"}},T={image:i(5752).Z,authorsImageUrls:[void 0]},g=[],m={toc:g};function n(I){let{components:M,...t}=I;return(0,N.kt)("wrapper",(0,e.Z)({},m,t,{components:M,mdxType:"MDXLayout"}),(0,N.kt)("p",null,"We are pleased to announce the initial release of OpenLineage. This release includes the core specification, data model, clients, and integrations with common data tools."),(0,N.kt)("p",null,(0,N.kt)("img",{src:i(7975).Z+"#banner",width:"770",height:"190"})),(0,N.kt)("p",null,"We are pleased to announce the initial release of OpenLineage. This is the culmination of a broad community effort, and establishes a common framework for data lineage collection and analysis."),(0,N.kt)("p",null,"We want to thank ",(0,N.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/graphs/contributors"},"all the contributors")," as well all the projects and companies involved in the design (in alphabetical order): ",(0,N.kt)("a",{parentName:"p",href:"https://airflow.apache.org"},"Airflow"),", ",(0,N.kt)("a",{parentName:"p",href:"https://www.astronomer.io"},"Astronomer"),", ",(0,N.kt)("a",{parentName:"p",href:"https://datakin.com"},"Datakin"),", ",(0,N.kt)("a",{parentName:"p",href:"https://datameshlearning.com"},"Data Mesh"),", ",(0,N.kt)("a",{parentName:"p",href:"https://www.getdbt.com"},"dbt"),", ",(0,N.kt)("a",{parentName:"p",href:"https://egeria.odpi.org"},"Egeria"),", ",(0,N.kt)("a",{parentName:"p",href:"https://getindata.com"},"GetInData"),", ",(0,N.kt)("a",{parentName:"p",href:"https://greatexpectations.io"},"Great Expectations"),", ",(0,N.kt)("a",{parentName:"p",href:"https://iceberg.apache.org"},"Iceberg")," (and others that I am probably forgetting)."),(0,N.kt)("p",null,"This release includes:"),(0,N.kt)("ul",null,(0,N.kt)("li",{parentName:"ul"},"The initial 1-0-0 release of the ",(0,N.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/blob/main/spec/OpenLineage.md"},"OpenLineage specification")),(0,N.kt)("li",{parentName:"ul"},"A core lineage model of Jobs, Runs and Datasets",(0,N.kt)("ul",{parentName:"li"},(0,N.kt)("li",{parentName:"ul"},"Core facets"),(0,N.kt)("li",{parentName:"ul"},"Data Quality Metrics and statistics"),(0,N.kt)("li",{parentName:"ul"},"Dataset schema"),(0,N.kt)("li",{parentName:"ul"},"Source code location"),(0,N.kt)("li",{parentName:"ul"},"SQL"))),(0,N.kt)("li",{parentName:"ul"},"Clients that send OpenLineage events to an HTTP backend",(0,N.kt)("ul",{parentName:"li"},(0,N.kt)("li",{parentName:"ul"},"Java"),(0,N.kt)("li",{parentName:"ul"},"Python"))),(0,N.kt)("li",{parentName:"ul"},(0,N.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/tree/main/integration"},"Integrations")," that collect lineage metadata as OpenLineage events",(0,N.kt)("ul",{parentName:"li"},(0,N.kt)("li",{parentName:"ul"},"Apache Airflow with support for BigQuery, Great Expectations, Postgres, Redshift, Snowflake"),(0,N.kt)("li",{parentName:"ul"},"Apache Spark"),(0,N.kt)("li",{parentName:"ul"},"dbt")))),(0,N.kt)("p",null,"This is only the beginning. We invite everyone interested to ",(0,N.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/projects"},"consult and contribute to the roadmap"),". The roadmap currently contains, among other things: adding support for ",(0,N.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/issues/152"},"Kafka"),", ",(0,N.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/issues/207"},"BI dashboards"),", and ",(0,N.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/issues/148"},"column level lineage"),"...but you can influence it by participating!"),(0,N.kt)("p",null,"Follow the ",(0,N.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage"},"repo")," to stay updated. And, as always, you can ",(0,N.kt)("a",{parentName:"p",href:"http://bit.ly/OpenLineageSlack"},"join the conversation")," on Slack."))}n.isMDXComponent=!0},7975:(I,M,i)=>{i.d(M,{Z:()=>e});const e="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc3MCAxOTAiIHdpZHRoPSIxMDAlIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnZlY3Rvcm5hdG9yPSJodHRwOi8vdmVjdG9ybmF0b3IuaW8iIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPGRlZnMvPgo8Y2xpcFBhdGggaWQ9IkFydGJvYXJkRnJhbWUiPgo8cmVjdCBoZWlnaHQ9IjE5MCIgd2lkdGg9Ijc3MCIgeD0iMCIgeT0iMCIvPgo8L2NsaXBQYXRoPgo8ZyBjbGlwLXBhdGg9InVybCgjQXJ0Ym9hcmRGcmFtZSkiIGlkPSJVbnRpdGxlZCIgdmVjdG9ybmF0b3I6bGF5ZXJOYW1lPSJVbnRpdGxlZCI+CjxwYXRoIGQ9Ik0tMTE1LjA5MS0xMC4wNzk0TDYzOC4wMjQtMTAuMDc5NEw2MzguMDI0LTEwLjA3OTRMNjM4LjAyNCAxNTIuNzgyTDYzOC4wMjQgMTUyLjc4MkwtMTE1LjA5MSAxNTIuNzgyTC0xMTUuMDkxIDE1Mi43ODJMLTExNS4wOTEtMTAuMDc5NEwtMTE1LjA5MS0xMC4wNzk0WiIgZmlsbD0iIzhmNmU1ZiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTM0OS45NTggNTUuODE4MUwzNDYuMTkyIDE1MS44NEw2ODYuOTc3IDE1Ny40ODlMNjkwLjc0MiA2MS40NjY1TDM0OS45NTggNTUuODE4MVoiIGZpbGw9IiMwMDA3MTgiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik03OC44MzY0IDUyLjA1MjZMMjgyLjE3OCA2MS40NjY1TDI5NS4zNTctMjIwLjk1Mkw5Mi4wMTU5LTIzMC4zNjZMNzguODM2NCA1Mi4wNTI2WiIgZmlsbD0iI2ZmYWQ1ZiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTYxLjg5MTMgMTE0LjE4NUwxNzEuMDkzIDU2Ni4wNTRMNDUzLjUxMSA0OTYuMzlMMzQ0LjMwOSA0NC41MjE0TDYxLjg5MTMgMTE0LjE4NVoiIGZpbGw9IiM1NDI3MzciIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0tOTguMTQ1NiA5MS41OTExTC0yNC43MTY5IDE2My4xMzdMMTM1LjMyLTAuNjY1NDk0TDYxLjg5MTMtNzAuMzI4NkwtOTguMTQ1NiA5MS41OTExWiIgZmlsbD0iI2NhOWU5MCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTUzNi4zNTQgMzYuOTkwM0w4NjcuNzI1IDQwNC4xMzRMMTIwMC45OCAxMDEuMDA1TDg2OS42MDctMjY0LjI1Nkw1MzYuMzU0IDM2Ljk5MDNaIiBmaWxsPSIjNWMzZjJmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDg1LjUxOSA1OS41ODM3TC01NC44NDE1IDI2NC44MDhMMjkuODgzOSA0ODguODU5TDU3MC4yNDQgMjgzLjYzNUw0ODUuNTE5IDU5LjU4MzdaIiBmaWxsPSIjMTgxYTIyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNLTM2LjAxMzYgNzguNDExNkwtMzIuMjQ4IDIyNy4xNTJMMTcxLjA5MyAyMjEuNTAzTDE2Ny4zMjcgNzIuNzYzMkwtMzYuMDEzNiA3OC40MTE2WiIgZmlsbD0iI2EzNGQzYyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTS0xMS41Mzc0IDQ2LjQwNDJMNDEuMTgwNyA4Ny44MjU1TDI3NC42NDYtMjEzLjQyMUwyMjEuOTI4LTI1NC44NDJMLTExLjUzNzQgNDYuNDA0MloiIGZpbGw9IiNmM2M2YTAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01MDQuMzQ2IDU3LjcwMDlMNDg5LjI4NCA1MzkuNjk1TDYwOS43ODMgNTQzLjQ2TDYyNC44NDUgNjEuNDY2NUw1MDQuMzQ2IDU3LjcwMDlaIiBmaWxsPSIjNjk1ZjVkIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjc4LjQxMiAzNi45OTAzTDQyOS4wMzUgNzQuNjQ2TDQ0NC4wOTcgOC43NDg0NEwyOTMuNDc0LTI3LjAyNDVMMjc4LjQxMiAzNi45OTAzWiIgZmlsbD0iI2I0OTY0YSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTS0zMi4yNDggNDguMjg3TC0xOS4wNjg1IDU1LjgxODFMLTAuMjQwNjYxIDE2LjI3OTZMLTEzLjQyMDIgOC43NDg0NEwtMzIuMjQ4IDQ4LjI4N1oiIGZpbGw9IiMyNjE0MWIiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0tNjYuMTM4MiAzLjEwMDA4TC01Mi45NTg3IDQyNC44NDVMLTIuMTIzNDQgNDIyLjk2MkwtMTUuMzAzIDEuMjE3MjlMLTY2LjEzODIgMy4xMDAwOFoiIGZpbGw9IiM3NTYwNjYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00MzIuODAxLTAuNjY1NDk0TDUxNS42NDMgNjEuNDY2NUw4OTAuMzE4LTQzMy43MDdMODA3LjQ3NS00OTUuODM5TDQzMi44MDEtMC42NjU0OTRaIiBmaWxsPSIjYmE4ZTUwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTA4Ljk2MS0yLjU0ODI4TDY5LjQyMjUgMjkuNDU5MUwxODkuOTIxIDE2Ni45MDNMMjI5LjQ1OSAxMzQuODk1TDEwOC45NjEtMi41NDgyOFoiIGZpbGw9IiM5MTVlNTkiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yODQuMDYgNjEuNDY2NUw3NS4wNzA4IDE3NC40MzRMMjI3LjU3NyA0NTYuODUyTDQzNi41NjYgMzQzLjg4NUwyODQuMDYgNjEuNDY2NVoiIGZpbGw9IiM3MDUzNjAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0tMTAxLjkxMSAxLjIxNzI5TC0yNjMuODMxIDEyLjUxNEwtMjQ1LjAwMyAyNDkuNzQ1TC04NC45NjYxIDIzOC40NDlMLTEwMS45MTEgMS4yMTcyOVoiIGZpbGw9IiNhMTg3OGYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01ODMuNDI0IDY1LjIzMjFMNjM0LjI1OSA3MC44ODA0TDY0OS4zMjEtNzUuOTc3TDU5OC40ODYtODEuNjI1NEw1ODMuNDI0IDY1LjIzMjFaIiBmaWxsPSIjNTIyZjFmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNjEzLjU0OCAxMTAuNDE5TDg5Ny44NDkgNDM4LjAyNEwxMDkxLjc4IDI3MC40NTZMODA3LjQ3NS01NS4yNjYzTDYxMy41NDggMTEwLjQxOVoiIGZpbGw9IiM4NTdiN2IiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zNDkuOTU4IDY3LjExNDlMMjEyLjUxNCAyNzAuNDU2TDQ3MC40NTYgNDM5LjkwN0w2MDcuOSAyMzYuNTY2TDM0OS45NTggNjcuMTE0OVoiIGZpbGw9IiMyYTI1MmMiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xMjIuMTQxLTIuNTQ4MjhMMjYzLjM1IDg5LjcwODNMMzc0LjQzNC04My41MDgyTDIzMy4yMjUtMTc1Ljc2NUwxMjIuMTQxLTIuNTQ4MjhaIiBmaWxsPSIjZGY4YTRiIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzI1LjQ4MiA3MC44ODA0TDI5MS41OTEgNjcuMTE0OUwyNDQuNTIyIDUwMy45MjJMMjc4LjQxMiA1MDcuNjg3TDMyNS40ODIgNzAuODgwNFoiIGZpbGw9IiM4NzY4NmQiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zNzAuNjY5IDEwNi42NTNMMzgzLjg0OCAxMTIuMzAyTDQ4MS43NTMtMTM5Ljk5Mkw0NjguNTczLTE0NS42NEwzNzAuNjY5IDEwNi42NTNaIiBmaWxsPSIjNDk0NTJmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNLTEwNy41NiAxNDQuMzA5TC0xMTguODU2IDE0OC4wNzVMLTg2Ljg0ODkgMjIxLjUwM0wtNzUuNTUyMiAyMTcuNzM4TC0xMDcuNTYgMTQ0LjMwOVoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01MTMuNzYgMTI5LjI0N0w0ODUuNTE5IDE2MS4yNTRMNjk2LjM5MSAzNDUuNzY3TDcyNC42MzMgMzEzLjc2TDUxMy43NiAxMjkuMjQ3WiIgZmlsbD0iI2Q2YjZhYyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTS0yMi44MzQxIDQ4LjI4N0wtMjA1LjQ2NSAzMDAuNTgxTC0xODYuNjM3IDMxMS44NzdMLTUuODg5MDIgNTkuNTgzN0wtMjIuODM0MSA0OC4yODdaIiBmaWxsPSIjYjA5MDhlIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTM5LjA4NiA4Ny44MjU1TC0xNjAuMjc4IDQxOS4xOTZMLTEyOC4yNyA0NDUuNTU1TDE2OS4yMSAxMTQuMTg1TDEzOS4wODYgODcuODI1NVoiIGZpbGw9IiM3MTJmMjEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00NTUuMzk0IDM1LjEwNzVMNDYxLjA0MiAxNTcuNDg5TDQ5Ni44MTUgMTUzLjcyM0w0OTEuMTY3IDMxLjM0MTlMNDU1LjM5NCAzNS4xMDc1WiIgZmlsbD0iIzI0MjAxYiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTU5MC45NTUgMTM0Ljg5NUw3MDcuNjg4IDczNy4zODdMMTEyNS42NyA2NTYuNDI3TDEwMDguOTMgNTMuOTM1M0w1OTAuOTU1IDEzNC44OTVaIiBmaWxsPSIjMTYxMTEzIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNLTI0LjcxNjkgMTguMTYyNEwtODc3LjYyIDIwLjA0NTJMLTg3NS43MzcgNjguOTk3N0wtMjQuNzE2OSA2Ny4xMTQ5TC0yNC43MTY5IDE4LjE2MjRaIiBmaWxsPSIjNWE0MDQ2IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTYuNzA0NC0xMC4wNzk0TDE2MS42NzkgMjEuOTI4TDIwMy4xLTE3NS43NjVMNTguMTI1OC0yMDcuNzcyTDE2LjcwNDQtMTAuMDc5NFoiIGZpbGw9IiNkMWIxOTUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01NDMuODg1IDEzOC42NjFMMzcyLjU1MSAzMzIuNTg4TDUxNS42NDMgNDU0Ljk2OUw2ODYuOTc3IDI2MS4wNDJMNTQzLjg4NSAxMzguNjYxWiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTS03Ljc3MTgxIDU5LjU4MzdMMTAzLjMxMyA3NC42NDZMMTAzLjMxMyA2MS40NjY1TC03Ljc3MTgxIDQ2LjQwNDJMLTcuNzcxODEgNTkuNTgzN1oiIGZpbGw9IiNmYmRkYzQiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01MTUuNjQzIDE4LjE2MjRMNTQyLjAwMiA1Ny43MDA5TDYzNi4xNDItNC40MzEwN0w2MDkuNzgzLTQyLjA4NjhMNTE1LjY0MyAxOC4xNjI0WiIgZmlsbD0iI2E2NjY0MiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI4LjAwMTIgMTEwLjQxOUwtMjguNDgyNSAxNTEuODRMMTA1LjE5NSAzMTkuNDA4TDE2MS42NzkgMjc3Ljk4N0wyOC4wMDEyIDExMC40MTlaIiBmaWxsPSIjY2I3OTY0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8L2c+Cjwvc3ZnPgo="},5752:(I,M,i)=>{i.d(M,{Z:()=>e});const e="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDYwMCA0MzUiIHdpZHRoPSIxMDAlIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnZlY3Rvcm5hdG9yPSJodHRwOi8vdmVjdG9ybmF0b3IuaW8iIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPGRlZnMvPgo8Y2xpcFBhdGggaWQ9IkFydGJvYXJkRnJhbWUiPgo8cmVjdCBoZWlnaHQ9IjQzNSIgd2lkdGg9IjYwMCIgeD0iMCIgeT0iMCIvPgo8L2NsaXBQYXRoPgo8ZyBjbGlwLXBhdGg9InVybCgjQXJ0Ym9hcmRGcmFtZSkiIGlkPSJVbnRpdGxlZCIgdmVjdG9ybmF0b3I6bGF5ZXJOYW1lPSJVbnRpdGxlZCI+CjxwYXRoIGQ9Ik0wIDBMNjgwIDBMNjgwIDBMNjgwIDQ1OUw2ODAgNDU5TDAgNDU5TDAgNDU5TDAgMEwwIDBaIiBmaWxsPSIjZDZkMGNiIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNjMwLjcgMTEuOUwtMTA3LjEgMTI5LjJMLTIzLjggNjM1LjhMNzEyLjMgNTE4LjVMNjMwLjcgMTEuOVoiIGZpbGw9IiMzNjAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zNDUuMSAyOTkuMkw3NjEuNiA1MTEuN0w5NjkgMTAzLjdMNTUyLjUtMTA3LjFMMzQ1LjEgMjk5LjJaIiBmaWxsPSIjMzcyMzBlIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTMuNiA4LjVMOTAuMSAyNjEuOEw4MDUuOCA0Mi41TDcyOS4zLTIwOS4xTDEzLjYgOC41WiIgZmlsbD0iI2M2ODI0NiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTUuMSAzNTAuMkwxMC4yIDgyNC41TDQ5MS4zIDgxNy43TDQ4Ni4yIDM0My40TDUuMSAzNTAuMloiIGZpbGw9IiNkY2FhODQiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yNzMuNyAyODIuMkw1NTIuNSAzMjguMUw1NzIuOSAyMDAuNkwyOTQuMSAxNTQuN0wyNzMuNyAyODIuMloiIGZpbGw9IiMxYTE2MmQiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yMC40IDI0MS40TDY0LjYgMzkyLjdMNDE2LjUgMjg1LjZMMzcyLjMgMTM0LjNMMjAuNCAyNDEuNFoiIGZpbGw9IiM3ZjNmM2IiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xNDkuNiA1NC40TDQ1LjktNjIuOUwtMzQwIDI2Ni45TC0yMzYuMyAzODQuMkwxNDkuNiA1NC40WiIgZmlsbD0iIzYyNGI1NyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTExMi4yIDE3TDI0OS45IDE3OC41TDQxNC44IDM1LjdMMjc3LjEtMTI0LjFMMTEyLjIgMTdaIiBmaWxsPSIjZWJhMjVmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNjQ3LjcgMzkuMUw0MzUuMiA1NDRMNzI3LjYgNjY0LjdMOTQwLjEgMTU5LjhMNjQ3LjcgMzkuMVoiIGZpbGw9IiM2MDNkMzQiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yNzIgOTMuNUw2MjcuMyAxNDkuNkw2NDkuNCAwTDI5NC4xLTU0LjRMMjcyIDkzLjVaIiBmaWxsPSIjYmE5NTVlIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTcwIDM5NC40TDM2Ny4yIDk2MC41TDU2NC40IDg4OS4xTDM2Ny4yIDMyM0wxNzAgMzk0LjRaIiBmaWxsPSIjY2RiN2E5IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjQ4LjIgMzY4LjlMLTEwLjIgNDY0LjFMODUgNzE3LjRMMzQzLjQgNjIyLjJMMjQ4LjIgMzY4LjlaIiBmaWxsPSIjOGY1YzQzIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNOTYuOSAxNjMuMkwxODMuNiAxNjYuNkwxOTIuMS0yMy44TDEwNS40LTI3LjJMOTYuOSAxNjMuMloiIGZpbGw9IiNmMGQzYzEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik05MC4xIDEwMkwtNjQuNiAxMTlMLTYuOCA1ODYuNUwxNDYuMiA1NjkuNUw5MC4xIDEwMloiIGZpbGw9IiM5MjY5NWYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01ODguMiAzMTkuNkwzODAuOCA0MzMuNUw1NzIuOSA3NzUuMkw3ODAuMyA2NjEuM0w1ODguMiAzMTkuNloiIGZpbGw9IiM5MzViM2UiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zMzQuOSAzMjNMNjY5LjggMzYzLjhMNjkxLjkgMTc2LjhMMzU3IDEzNkwzMzQuOSAzMjNaIiBmaWxsPSIjMzAyZTM4IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTQ5LjEgMTY4LjNMNjY2LjQgODE3LjdMNzE5LjEgODA3LjVMNjAxLjggMTU4LjFMNTQ5LjEgMTY4LjNaIiBmaWxsPSIjN2E1ODRmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjA3LjQgMzM0LjlMLTExLjkgNjkwLjJMMzkuMSA3MjAuOEwyNTguNCAzNjUuNUwyMDcuNCAzMzQuOVoiIGZpbGw9IiNjZWFhOGQiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01Mi43IDEzNC4zTC01MSAyMjQuNEwtMTUuMyAyNjMuNUw4Ni43IDE3My40TDUyLjcgMTM0LjNaIiBmaWxsPSIjYWY5NTk1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTMuNiAyNDQuOEw4NSAyNDguMkwxMDguOC0xNDcuOUwzNy40LTE1MS4zTDEzLjYgMjQ0LjhaIiBmaWxsPSIjNzU1YzYwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTI3LjUgMjc1LjRMMTQ0LjUgMzY1LjVMNDA0LjYgMzE0LjVMMzg3LjYgMjI0LjRMMTI3LjUgMjc1LjRaIiBmaWxsPSIjNjczNDMyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjI2LjEgMTA1LjRMMTQyLjggMTY4LjNMMjQ2LjUgMjk5LjJMMzI5LjggMjM2LjNMMjI2LjEgMTA1LjRaIiBmaWxsPSIjN2Y0YjRmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzcwLjYgMjQzLjFMMzYwLjQgMzM0LjlMNTgxLjQgMzU4LjdMNTkxLjYgMjY2LjlMMzcwLjYgMjQzLjFaIiBmaWxsPSIjMjcyMDI2IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTc4IDQyMS42TDYzNS44IDU4OC4yTDc1My4xIDU0Ny40TDY5NS4zIDM4MC44TDU3OCA0MjEuNloiIGZpbGw9IiM1NTFmMTIiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xMzIuNiA0MDQuNkwtMjQ4LjIgNDIxLjZMLTIzMi45IDcxNy40TDE0Ni4yIDcwMC40TDEzMi42IDQwNC42WiIgZmlsbD0iIzg2NGEzMyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI3NS40IDE1Ni40TDM1NyAxNjguM0wzODkuMy00MC44TDMwNy43LTUyLjdMMjc1LjQgMTU2LjRaIiBmaWxsPSIjZTg5MTUwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTExLjcgMzAuNkw1ODQuOCA3NC44TDc0Mi45LTE4NS4zTDY2OS44LTIyOS41TDUxMS43IDMwLjZaIiBmaWxsPSIjY2M5NTc0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzgwLjggMzQwTDI3MiAzNjcuMkwyODkgNDMzLjVMMzk3LjggNDA2LjNMMzgwLjggMzQwWiIgZmlsbD0iI2YwZTJkOSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTU5OC40IDE1Ni40TDcxMi4zIDI5Mi40TDkyNC44IDExMy45TDgxMC45LTIwLjRMNTk4LjQgMTU2LjRaIiBmaWxsPSIjNGM0MDNlIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjQ0LjggMzI0LjdMNDE0LjggMjk3LjVMMzkxIDE0NC41TDIyMSAxNzEuN0wyNDQuOCAzMjQuN1oiIGZpbGw9IiM2ODRiNTYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01MzguOSAzNTUuM0w2MDguNiA1OTEuNkw3ODIgNTM4LjlMNzEyLjMgMzAyLjZMNTM4LjkgMzU1LjNaIiBmaWxsPSIjODI0ODM0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzYwLjQgMTE5TDQ4OS42IDE2MS41TDUzMy44IDI1LjVMNDA0LjYtMTUuM0wzNjAuNCAxMTlaIiBmaWxsPSIjOTA4ZDVhIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDAuOCAxMjIuNEw0NS45IDEzNy43TDI0Ni41IDY0LjZMMjQxLjQgNDkuM0w0MC44IDEyMi40WiIgZmlsbD0iIzlhNmI1OCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTM2MC40IDM1LjdMMzU4LjcgMTM0LjNMMzkyLjcgMTM0LjNMMzk0LjQgMzUuN0wzNjAuNCAzNS43WiIgZmlsbD0iI2M4NTMxOCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPC9nPgo8L3N2Zz4K"}}]);