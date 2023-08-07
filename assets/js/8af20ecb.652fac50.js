"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9065],{3905:(I,M,i)=>{i.d(M,{Zo:()=>u,kt:()=>c});var N=i(7294);function j(I,M,i){return M in I?Object.defineProperty(I,M,{value:i,enumerable:!0,configurable:!0,writable:!0}):I[M]=i,I}function T(I,M){var i=Object.keys(I);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(I);M&&(N=N.filter((function(M){return Object.getOwnPropertyDescriptor(I,M).enumerable}))),i.push.apply(i,N)}return i}function D(I){for(var M=1;M<arguments.length;M++){var i=null!=arguments[M]?arguments[M]:{};M%2?T(Object(i),!0).forEach((function(M){j(I,M,i[M])})):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(i)):T(Object(i)).forEach((function(M){Object.defineProperty(I,M,Object.getOwnPropertyDescriptor(i,M))}))}return I}function g(I,M){if(null==I)return{};var i,N,j=function(I,M){if(null==I)return{};var i,N,j={},T=Object.keys(I);for(N=0;N<T.length;N++)i=T[N],M.indexOf(i)>=0||(j[i]=I[i]);return j}(I,M);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(I);for(N=0;N<T.length;N++)i=T[N],M.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(I,i)&&(j[i]=I[i])}return j}var m=N.createContext({}),b=function(I){var M=N.useContext(m),i=M;return I&&(i="function"==typeof I?I(M):D(D({},M),I)),i},u=function(I){var M=b(I.components);return N.createElement(m.Provider,{value:M},I.children)},e={inlineCode:"code",wrapper:function(I){var M=I.children;return N.createElement(N.Fragment,{},M)}},y=N.forwardRef((function(I,M){var i=I.components,j=I.mdxType,T=I.originalType,m=I.parentName,u=g(I,["components","mdxType","originalType","parentName"]),y=b(i),c=j,w=y["".concat(m,".").concat(c)]||y[c]||e[c]||T;return i?N.createElement(w,D(D({ref:M},u),{},{components:i})):N.createElement(w,D({ref:M},u))}));function c(I,M){var i=arguments,j=M&&M.mdxType;if("string"==typeof I||j){var T=i.length,D=new Array(T);D[0]=y;var g={};for(var m in M)hasOwnProperty.call(M,m)&&(g[m]=M[m]);g.originalType=I,g.mdxType="string"==typeof I?I:j,D[1]=g;for(var b=2;b<T;b++)D[b]=i[b];return N.createElement.apply(null,D)}return N.createElement.apply(null,i)}y.displayName="MDXCreateElement"},719:(I,M,i)=>{i.r(M),i.d(M,{assets:()=>m,contentTitle:()=>D,default:()=>e,frontMatter:()=>T,metadata:()=>g,toc:()=>b});var N=i(7462),j=(i(7294),i(3905));const T={title:"How OpenLineage takes inspiration from OpenTelemetry",date:new Date("2021-06-20T00:00:00.000Z"),authors:[{name:"Julien Le Dem",title:"OpenLineage Project Lead",url:"https://www.github.com/julienledem/"}],image:"./image.svg",banner:"./banner.svg",description:"The data world and the service world have many similarities but also a few crucial differences."},D=void 0,g={permalink:"/blog/openlineage-takes-inspiration-from-opentelemetry",source:"@site/blog/openlineage-takes-inspiration-from-opentelemetry/index.mdx",title:"How OpenLineage takes inspiration from OpenTelemetry",description:"The data world and the service world have many similarities but also a few crucial differences.",date:"2021-06-20T00:00:00.000Z",formattedDate:"June 20, 2021",tags:[],readingTime:7.265,hasTruncateMarker:!0,authors:[{name:"Julien Le Dem",title:"OpenLineage Project Lead",url:"https://www.github.com/julienledem/"}],frontMatter:{title:"How OpenLineage takes inspiration from OpenTelemetry",date:"2021-06-20T00:00:00.000Z",authors:[{name:"Julien Le Dem",title:"OpenLineage Project Lead",url:"https://www.github.com/julienledem/"}],image:"./image.svg",banner:"./banner.svg",description:"The data world and the service world have many similarities but also a few crucial differences."},prevItem:{title:"Backfilling Airflow DAGs using Marquez",permalink:"/blog/backfilling-airflow-dags-using-marquez"}},m={image:i(7084).Z,authorsImageUrls:[void 0]},b=[],u={toc:b};function e(I){let{components:M,...T}=I;return(0,j.kt)("wrapper",(0,N.Z)({},u,T,{components:M,mdxType:"MDXLayout"}),(0,j.kt)("p",null,"The data world and the service world have many similarities but also a few crucial differences. "),(0,j.kt)("p",null,(0,j.kt)("img",{src:i(9094).Z+"#banner",width:"691",height:"147"})))}e.isMDXComponent=!0},9094:(I,M,i)=>{i.d(M,{Z:()=>N});const N="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY5MC41IDE0NyIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6dmVjdG9ybmF0b3I9Imh0dHA6Ly92ZWN0b3JuYXRvci5pbyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8ZGVmcy8+CjxjbGlwUGF0aCBpZD0iQXJ0Ym9hcmRGcmFtZSI+CjxyZWN0IGhlaWdodD0iMTQ3IiB3aWR0aD0iNjkwLjUiIHg9IjAiIHk9IjAiLz4KPC9jbGlwUGF0aD4KPGcgY2xpcC1wYXRoPSJ1cmwoI0FydGJvYXJkRnJhbWUpIiBpZD0iVW50aXRsZWQiIHZlY3Rvcm5hdG9yOmxheWVyTmFtZT0iVW50aXRsZWQiPgo8cGF0aCBkPSJNMCAwTDY5MC41IDBMNjkwLjUgMEw2OTAuNSAxNDdMNjkwLjUgMTQ3TDAgMTQ3TDAgMTQ3TDAgMEwwIDBaIiBmaWxsPSIjOWQxNTI0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjUuODkgNzIuNUwxMTIuMjEgNzUuOTVMMTE3LjM5LTgxLjEzTDMxLjA3LTg0LjU5TDI1Ljg5IDcyLjVaIiBmaWxsPSIjMDAwYjAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDI2LjM4IDYzLjg3TDYxMS4wOSAzMjcuOTlMOTI3IDEwNS4zTDc0Mi4yOS0xNTcuMDlMNDI2LjM4IDYzLjg3WiIgZmlsbD0iIzYxMDgxNiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTM4OC40MSAwTDExNy4zOSA4Mi44NkwxMjcuNzQgMTE1LjY2TDM5OC43NiAzMi44TDM4OC40MSAwWiIgZmlsbD0iIzVmMGEwYSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI1MC4zMSA1NS4yNEwxNzYuMDggMzg1TDIxMC42IDM5MS45MUwyODQuODMgNjIuMTVMMjUwLjMxIDU1LjI0WiIgZmlsbD0iIzM2MGIwNiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI3MS4wMiAzLjQ1TDI1OC45NCA1MC4wNkw0NTQgMTAwLjEyTDQ2Ni4wOSA1My41MUwyNzEuMDIgMy40NVoiIGZpbGw9IiNiMDAyMWEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yNjkuMjk1IDQzOC40NzlMNDc4LjE3NCA0Ni42MjQyTDQ3OC4xNzQgNDYuNjI0Mkw1MDQuMDc0IDYwLjQzMDRMNTA0LjA3NCA2MC40MzA0TDI5NS4xOTUgNDUyLjI4NUwyOTUuMTk1IDQ1Mi4yODVMMjY5LjI5NSA0MzguNDc5TDI2OS4yOTUgNDM4LjQ3OVoiIGZpbGw9IiMzMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zMS4wNyA0OC4zNEwtMTguOTkgNzIuNUwxOC45OSAxNTAuMThMNjkuMDUgMTI2LjAyTDMxLjA3IDQ4LjM0WiIgZmlsbD0iIzQ1MDkxMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTg4LjA0IDYyLjE1TDQ0Ljg4IDIwOC44OEwzNjcuNjkgMzAyLjA5TDQxMC44NSAxNTUuMzZMODguMDQgNjIuMTVaIiBmaWxsPSIjYmEyMTMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTE2LjE1IDBMMjc0LjQ3IDM2Ny42OUwzNDEuOCA0MTAuODVMNTgzLjQ3IDQzLjE2TDUxNi4xNSAwWiIgZmlsbD0iIzRkMDgwOCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTU2Ny45NCA4MS4xM0wxNjkuMTcgMTA4Ljc1TDE3MC45IDEzNC42NUw1NjkuNjYgMTA3LjAzTDU2Ny45NCA4MS4xM1oiIGZpbGw9IiNjMDEyMjciIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01NjcuOTQgOC42M0w4MTEuMzQgNDMuMTZMODY2LjU4LTM0My41Mkw2MjMuMTgtMzc4TDU2Ny45NCA4LjYzWiIgZmlsbD0iI2M3MGUzMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTM4NC45NSAzNy45OEwzMjEuMDggNzIuNUwzNDEuOCAxMTIuMjFMNDA1LjY3IDc3LjY4TDM4NC45NSAzNy45OFoiIGZpbGw9IiMzNDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik02MDUuOTEgNzcuNjhMODI2Ljg3IDgxLjEzTDgyNi44NyA2NS42TDYwNS45MSA2Mi4xNUw2MDUuOTEgNzcuNjhaIiBmaWxsPSIjZGMyMjM4IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNzQuMjMgMTMuODFMMTY1LjcyIDUwLjA2TDIyMi42OS05NC45NEwxMzEuMTktMTMxLjE5TDc0LjIzIDEzLjgxWiIgZmlsbD0iI2Q5NTM1YyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI4MS4zOCAzMS4wN0wyMzYuNSAyNy42MkwyMjkuNTkgMTk4LjUyTDI3NC40NyAyMDEuOTdMMjgxLjM4IDMxLjA3WiIgZmlsbD0iIzQzMDgwNCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI5NS4xOSA4MS4xM0wxMzguMSAxODguMTZMMjM2LjUgMzM0Ljg5TDM5My41OCAyMjcuODdMMjk1LjE5IDgxLjEzWiIgZmlsbD0iI2MxMjEzNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTUzNi44NiAxOUw1MzYuODYgMzYuMjVMNjQyLjE3IDMyLjhMNjQyLjE3IDE1LjU0TDUzNi44NiAxOVoiIGZpbGw9IiNkYjM1NGUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01MzguNTkgMTIwLjg0TDM3OS43NyA2NDMuODlMNTgxLjc1IDcwNC4zMUw3NDAuNTYgMTgxLjI2TDUzOC41OSAxMjAuODRaIiBmaWxsPSIjY2QzZTU2IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDg2LjggNTUuMjRMNDkwLjI1IDc5LjQxTDg4OS4wMiAyMC43MUw4ODUuNTctMS43M0w0ODYuOCA1NS4yNFoiIGZpbGw9IiMxYzAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik02NzMuMjQgMTE3LjM5TDc1MC45MiAzNzIuODdMODQ1Ljg2IDM0MS44TDc2OC4xOCA4Ni4zMUw2NzMuMjQgMTE3LjM5WiIgZmlsbD0iI2ZjNWM3OCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTEzNC42NSAxMDEuODVMLTE5IDU2Ny45NEwyMDguODcgNjQyLjE3TDM2Mi41MSAxNzYuMDhMMTM0LjY1IDEwMS44NVoiIGZpbGw9IiM3MzE3MGYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00NTkuMTggNTUuMjRMMzQ2Ljk4IDE3OS41M0wzNTkuMDYgMTkxLjYxTDQ3MS4yNyA2Ny4zMkw0NTkuMTggNTUuMjRaIiBmaWxsPSIjZmYyMTRlIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNjYxLjE1IDQ2LjYxTDgyNi44NyAyMDcuMTVMODUxIDE4MS4yNkw2ODUuMzIgMjAuNzJMNjYxLjE1IDQ2LjYxWiIgZmlsbD0iIzExMDMwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI5OC42NCA2OS4wNUwyMC43MSAzMDUuNTVMMjcuNjIgMzEyLjQ1TDMwNS41NSA3NS45NUwyOTguNjQgNjkuMDVaIiBmaWxsPSIjZTU0OTYyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMS43MyA0My4xNkwyMC43MyA4OS43N0wxMjcuNzMgNDQuODhMMTA4Ljc1IDBMMS43MyA0My4xNloiIGZpbGw9IiMyMDA5MDEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xOC45OSA0MS40M0wwIDM3Ljk4TC0xNS41NCAxMzYuMzdMMS43MyAxMzkuODNMMTguOTkgNDEuNDNaIiBmaWxsPSIjYWQzNDQ1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTk2Ljc5IDMxLjA3TDMzMS40NCAyNy42MkwzMjYuMjYtMTgxLjI2TDE5MS42MS0xNzcuOEwxOTYuNzkgMzEuMDdaIiBmaWxsPSIjY2IwMDA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjE0LjA2IDExOS4xMUwyMzEuMzIgMTI0LjI5TDI4OC4yOC01Ni45N0wyNzEuMDItNjIuMTVMMjE0LjA2IDExOS4xMVoiIGZpbGw9IiM0ODAzMDMiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00OTMuNzEgMjUuODlMNjUwLjggMzA5TDY2Ni4zMyAzMDAuMzdMNTA5LjI0IDE3LjI2TDQ5My43MSAyNS44OVoiIGZpbGw9IiM0ODE2MTUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01NzguMjkgMTIuMDhMNTkyLjEgMTlMNzI4LjQ4LTI1Mkw3MTQuNjctMjU4LjkxTDU3OC4yOSAxMi4wOFoiIGZpbGw9IiMxZDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yODYuNTYgNDguMzRMMjU3LjIxIDIzM0wzMDIuMDkgMjM4LjE4TDMzMS40NCA1My41MUwyODYuNTYgNDguMzRaIiBmaWxsPSIjY2IwYzI0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTM0LjY1IDkxLjQ5TDEyMC44NCA5OC40TDE3OS41MyAyMDEuOTdMMTkzLjM0IDE5NS4wN0wxMzQuNjUgOTEuNDlaIiBmaWxsPSIjMWEwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTgxLjI2IDEyNC4yOUwtMTIyLjU2IDE2Ny40NUwtNzQuMjMgNDg2LjhMMjI3Ljg3IDQ0My42NUwxODEuMjYgMTI0LjI5WiIgZmlsbD0iI2M2MDQxNyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTU4OC42NSA3Ny42OEw2MTIuODIgODkuNzdMODMzLjc4LTMyNC41NEw4MDkuNjEtMzM2LjYyTDU4OC42NSA3Ny42OFoiIGZpbGw9IiNiYTBkMmMiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjwvZz4KPC9zdmc+Cg=="},7084:(I,M,i)=>{i.d(M,{Z:()=>N});const N="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY5MC41IDQ2OC42NSIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6dmVjdG9ybmF0b3I9Imh0dHA6Ly92ZWN0b3JuYXRvci5pbyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8ZGVmcy8+CjxjbGlwUGF0aCBpZD0iQXJ0Ym9hcmRGcmFtZSI+CjxyZWN0IGhlaWdodD0iNDY4LjY1IiB3aWR0aD0iNjkwLjUiIHg9IjAiIHk9IjAiLz4KPC9jbGlwUGF0aD4KPGcgY2xpcC1wYXRoPSJ1cmwoI0FydGJvYXJkRnJhbWUpIiBpZD0iVW50aXRsZWQiIHZlY3Rvcm5hdG9yOmxheWVyTmFtZT0iVW50aXRsZWQiPgo8cGF0aCBkPSJNMCAwTDY5MC41IDBMNjkwLjUgMEw2OTAuNSA0NjguNjVMNjkwLjUgNDY4LjY1TDAgNDY4LjY1TDAgNDY4LjY1TDAgMEwwIDBaIiBmaWxsPSIjODkxODI2IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNjA0LjE5IDM0N0w3MDcuNzYgNTU3LjZMMTQ1MC4wNSAxOTUuMDlMMTM0Ni40OC0xMy44MUw2MDQuMTkgMzQ3WiIgZmlsbD0iI2VlNWU2YyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTU3Ni41NyAzMjQuNTRMODQ1Ljg2IDM1My44OEw4NTIuNzcgMjgxLjM4TDU4My40NyAyNTJMNTc2LjU3IDMyNC41NFoiIGZpbGw9IiMwMDA1MDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01MS43OSAyMTcuNTFMMzI0LjU0IDM4MS41MUw3MTkuODUtMjc2LjJMNDQ3LjEtNDQwLjJMNTEuNzkgMjE3LjUxWiIgZmlsbD0iI2I0MTcyNyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQ4Ni44IDMzMS40NEw0OTMuNzEgMzY5LjQ0TDc2MyAzMTcuNjNMNzU2LjEgMjc5LjYzTDQ4Ni44IDMzMS40NFoiIGZpbGw9IiMyMDAyMDQiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xODMgMjI2LjE0TDc3LjY4IDIyMUw2NS42IDUyMy4wNUwxNzAuOSA1MjguMjNMMTgzIDIyNi4xNFoiIGZpbGw9IiM1NDA1MDgiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zNjYgMjc5LjY1TDQyMyAzMzEuNDRMNTA3LjU5IDIzNC43N0w0NTAuNTkgMTgyLjk4TDM2NiAyNzkuNjVaIiBmaWxsPSIjMmUwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTM4LjEgNi45MUwtMTg2LjQ0LTUwLjA5TC0yMTIuMzMgOTguNEwxMTAuNDggMTU1LjRMMTM4LjEgNi45MVoiIGZpbGw9IiMyYjA2MDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01NjEgNjcuMzJMNzc2Ljc4IDEyMC44NEw3OTUuNzggNDEuNDNMNTgwLTEwLjM2TDU2MSA2Ny4zMloiIGZpbGw9IiNlYTBlMzYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik05NC45NCAxNzcuOEwyNDAgNDQ3LjFMMjUzLjgxIDQzOC40N0wxMDguODEgMTY5LjE3TDk0Ljk0IDE3Ny44WiIgZmlsbD0iI2Q2NTY0ZSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE4OS44OSAyNDEuNjhMMTY3LjQ1IDI3Ni4yTDQ3NC43MiA0NTkuMkw0OTcuMTYgNDI0LjY4TDE4OS44OSAyNDEuNjhaIiBmaWxsPSIjZGQxYzNiIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTUzLjY0IDE1Ny4wOUwyMTcuNTEgMjEwLjZMMzI0LjUxIDc5LjQxTDI2MC42NiAyNS44OUwxNTMuNjQgMTU3LjA5WiIgZmlsbD0iIzYzMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQ2Ni4wOSA4OEw0NTIuMjggMTk1TDY4MC4xNCAyMjFMNjkzLjk1IDExNEw0NjYuMDkgODhaIiBmaWxsPSIjNWQwMjBiIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMCA0MjQuNjZMNDYuNjEgNDYwLjkxTDEyOS40NyAzNTIuMTZMODIuODYgMzE1LjlMMCA0MjQuNjZaIiBmaWxsPSIjZTIxNzM3IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTkyLjEgMzYwLjc5TDU5NS41NiA0MDkuMTJMMTA1OS45MiAzNzQuNkwxMDU2LjQ3IDMyNi4yNkw1OTIuMSAzNjAuNzlaIiBmaWxsPSIjZTY1MTVlIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDIyLjkzIDMwMC4zN0wyODQuODMgMzEyLjQ1TDMyNi4yNiA3NTIuNjVMNDY0LjM2IDc0MC41Nkw0MjIuOTMgMzAwLjM3WiIgZmlsbD0iI2I0MDYxYSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTIyMSAzOTguNzZMMjkzLjUgNDA1LjY3TDI5OC42NCAzNDdMMjI2LjE0IDM0MC4wOUwyMjEgMzk4Ljc2WiIgZmlsbD0iIzAwMTUwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI2Ny41NyA3OS40MUwzMTQuMTggMTEwLjQ4TDYwNS45MS0zMjkuNzFMNTU5LjMxLTM2MC43OUwyNjcuNTcgNzkuNDFaIiBmaWxsPSIjZWIzZjQyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTguNjkgMjEwLjZMNjkuMDUgMjQzLjRMMjI3Ljg3IDE5MS42MUwyMTcuNTEgMTU4LjgyTDU4LjY5IDIxMC42WiIgZmlsbD0iI2M5MjUzMSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE0NSA5MS40OUwxOTguNTEgODEuMTNMMTI0LjI5LTM3Ni4zMkw3MC43OC0zNjZMMTQ1IDkxLjQ5WiIgZmlsbD0iI2ZmNTA1ZCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI0LjE3IDguNjNMLTE1OC44MyAyNTIuMDNMLTEyMi41NyAyNzYuMkw1OC42OSAzMi44TDI0LjE3IDguNjNaIiBmaWxsPSIjYzkwNDFiIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjcyLjc1IDIwLjcyTDMwNS41NSAzMi44TDM0MS44LTY3LjMyTDMwOS03OS40MUwyNzIuNzUgMjAuNzJaIiBmaWxsPSIjZTdlZTk0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTU4LjgyIDI0NS4xM0wtMTQxLjU1IDI4Ni41NkwtMTMxLjIgMzQ3TDE2Ny40NSAzMDUuNTdMMTU4LjgyIDI0NS4xM1oiIGZpbGw9IiMzOTBjMGQiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xMzQuNjUgMTIuMDhMMTEzLjkzIDEwMy41OEwxNDguNDYgMTEwLjQ4TDE2OS4xNyAxOUwxMzQuNjUgMTIuMDhaIiBmaWxsPSIjZmY2NDdjIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTgzIDEzLjgxTDI2Ny41OSA0MS40M0wzNjYtMjYwLjY2TDI4MS40MS0yODguMjhMMTgzIDEzLjgxWiIgZmlsbD0iIzAzMmUwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTMwOSAxNjAuNTRMMzQzLjUyIDE5NS4wN0w0MDAuNTIgMTM4LjA3TDM2NiAxMDMuNThMMzA5IDE2MC41NFoiIGZpbGw9IiM0MTAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik02MjguMzYgMzkzLjU5TDkwMS4xIDcwNy43NkwxMDUxLjI5IDU3Ni41N0w3NzguNTQgMjYyLjM5TDYyOC4zNiAzOTMuNTlaIiBmaWxsPSIjZmY0ZjcwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNzQuMjMgMjMxLjMyTC03MC43NyA0NjIuNjRMLTQzLjE1IDQ3OC4xN0wxMDAuMTIgMjQ2Ljg1TDc0LjIzIDIzMS4zMloiIGZpbGw9IiNiZTFkMmYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zNTMuODggMjU1LjQ5TDM1NS42MSAyODguMjhMNDIyLjkzIDI3OS42NUw0MjEuMjEgMjQ2Ljg1TDM1My44OCAyNTUuNDlaIiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjEyLjMzIDIwOC44OEwyNTcuMjEgMjI0LjQxTDI5NS4yMSAxMTAuNDhMMjUwLjMxIDk0Ljk0TDIxMi4zMyAyMDguODhaIiBmaWxsPSIjNDEwYzBhIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzQ4LjcgNjAuNDJMNDMzLjI5IDg2LjMxTDU1OS4yOS0zMTQuMThMNDc0LjctMzQwLjA3TDM0OC43IDYwLjQyWiIgZmlsbD0iIzVkMTAxYSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTYyMS40NSAxMjAuODRMNjE0LjU1IDE0My4yOEw4ODAuMzkgMjE1Ljc4TDg4Ny4yOSAxOTMuMzRMNjIxLjQ1IDEyMC44NFoiIGZpbGw9IiNkZjI2NDEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xODQuNzEgMjg4LjI4TDIwMy43MSAyOTUuMTlMMjM2LjUgMjAyTDIxNy41IDE5NS4xTDE4NC43MSAyODguMjhaIiBmaWxsPSIjZmY4OWEzIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjE1Ljc4IDM4NUwxNDMuMjggNTYyLjgxTDE3Ni4wOCA1NzYuNjJMMjQ4LjU4IDM5OC44MUwyMTUuNzggMzg1WiIgZmlsbD0iI2Q4NGU0YyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTUzNi44NiAyNzQuNDdMNTE2LjE1IDM0N0w2MjguMzYgMzc4LjA3TDY0OS4wNyAzMDUuNTdMNTM2Ljg2IDI3NC40N1oiIGZpbGw9IiMzMDA5MDYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjwvZz4KPC9zdmc+Cg=="}}]);