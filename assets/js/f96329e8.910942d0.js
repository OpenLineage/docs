"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5798],{3905:(e,i,t)=>{t.d(i,{Zo:()=>g,kt:()=>b});var I=t(7294);function M(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function n(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(e);i&&(I=I.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,I)}return t}function a(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?n(Object(t),!0).forEach((function(i){M(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function N(e,i){if(null==e)return{};var t,I,M=function(e,i){if(null==e)return{};var t,I,M={},n=Object.keys(e);for(I=0;I<n.length;I++)t=n[I],i.indexOf(t)>=0||(M[t]=e[t]);return M}(e,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(I=0;I<n.length;I++)t=n[I],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(M[t]=e[t])}return M}var j=I.createContext({}),u=function(e){var i=I.useContext(j),t=i;return e&&(t="function"==typeof e?e(i):a(a({},i),e)),t},g=function(e){var i=u(e.components);return I.createElement(j.Provider,{value:i},e.children)},c={inlineCode:"code",wrapper:function(e){var i=e.children;return I.createElement(I.Fragment,{},i)}},m=I.forwardRef((function(e,i){var t=e.components,M=e.mdxType,n=e.originalType,j=e.parentName,g=N(e,["components","mdxType","originalType","parentName"]),m=u(t),b=M,l=m["".concat(j,".").concat(b)]||m[b]||c[b]||n;return t?I.createElement(l,a(a({ref:i},g),{},{components:t})):I.createElement(l,a({ref:i},g))}));function b(e,i){var t=arguments,M=i&&i.mdxType;if("string"==typeof e||M){var n=t.length,a=new Array(n);a[0]=m;var N={};for(var j in i)hasOwnProperty.call(i,j)&&(N[j]=i[j]);N.originalType=e,N.mdxType="string"==typeof e?e:M,a[1]=N;for(var u=2;u<n;u++)a[u]=t[u];return I.createElement.apply(null,a)}return I.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7281:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>j,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>N,toc:()=>u});var I=t(7462),M=(t(7294),t(3905));const n={title:"The Python Client -- the Foundation of OpenLineage Integrations",date:new Date("2022-07-29T00:00:00.000Z"),authors:[{name:"Michael Robinson",title:"OpenLineage Committer",url:"https://www.github.com/merobi-hub"}],image:"./image.svg",banner:"./banner.svg",description:"The Python client enables users to create custom integrations."},a=void 0,N={permalink:"/blog/python-client",source:"@site/blog/python-client/index.mdx",title:"The Python Client -- the Foundation of OpenLineage Integrations",description:"The Python client enables users to create custom integrations.",date:"2022-07-29T00:00:00.000Z",formattedDate:"July 29, 2022",tags:[],readingTime:3.385,hasTruncateMarker:!0,authors:[{name:"Michael Robinson",title:"OpenLineage Committer",url:"https://www.github.com/merobi-hub"}],frontMatter:{title:"The Python Client -- the Foundation of OpenLineage Integrations",date:"2022-07-29T00:00:00.000Z",authors:[{name:"Michael Robinson",title:"OpenLineage Committer",url:"https://www.github.com/merobi-hub"}],image:"./image.svg",banner:"./banner.svg",description:"The Python client enables users to create custom integrations."},prevItem:{title:"The Current State of Column-level Lineage",permalink:"/blog/column-lineage"},nextItem:{title:"Microsoft Purview Accelerates Lineage Extraction from Azure Databricks",permalink:"/blog/openlineage-microsoft-purview"}},j={image:t(9734).Z,authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:3},{value:"Python Client Data Structures",id:"python-client-data-structures",level:3},{value:"The OpenLineage-dbt Integration",id:"the-openlineage-dbt-integration",level:3},{value:"Additional Resources",id:"additional-resources",level:3}],g={toc:u};function c(e){let{components:i,...n}=e;return(0,M.kt)("wrapper",(0,I.Z)({},g,n,{components:i,mdxType:"MDXLayout"}),(0,M.kt)("p",null,"The Python client enables users to create custom integrations."),(0,M.kt)("p",null,(0,M.kt)("img",{src:t(5149).Z+"#banner",width:"844",height:"216"})),(0,M.kt)("h3",{id:"introduction"},"Introduction"),(0,M.kt)("p",null,"Thanks to the ",(0,M.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage"},"OpenLineage")," community\u2019s active work on ",(0,M.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/tree/main/integration"},"integrations"),", the pursuit of lineage is getting more efficient and effective all the time. And our growing list of partners and adapters makes OpenLineage plenty powerful out of the box. At the same time, the nature of the data engineering field means that lineage capture is an ongoing process \u2013 simply put, the work of lineage is never done."),(0,M.kt)("p",null,"Hence, as lineage capture becomes integral to your pipelines, situations can arise that require new custom integrations. Enter the ",(0,M.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/tree/main/client/python"},"Python client"),", one of two built-in clients included in the project (the other being the ",(0,M.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/tree/main/client/java"},"Java client"),"). The OpenLineage spec is defined using JSON schema, but we have created these clients so that new integrations do not have to reinvent the wheel. "),(0,M.kt)("p",null,"OpenLineage\u2019s Python client enables the creation of lineage metadata events with Python code. The core data structures currently offered by the client include the ",(0,M.kt)("inlineCode",{parentName:"p"},"RunEvent"),", ",(0,M.kt)("inlineCode",{parentName:"p"},"RunState"),", ",(0,M.kt)("inlineCode",{parentName:"p"},"Run"),", ",(0,M.kt)("inlineCode",{parentName:"p"},"Job"),", ",(0,M.kt)("inlineCode",{parentName:"p"},"Dataset"),", and ",(0,M.kt)("inlineCode",{parentName:"p"},"Transport")," classes. These either configure or collect data for the emission of lineage events."),(0,M.kt)("p",null,"In the history of the project, the client has been useful in helping us avoid unnecessary duplication of code. It is also integral to OpenLineage\u2019s existing integrations, serving as the basis of the Airflow and dbt integrations, for example. It could also act as the foundation of your own custom integration should you need to write one. (Another use case: tests for a new Airflow extractor.)"),(0,M.kt)("p",null,"For this reason, an existing integration can serve as a useful example of how to use the client to write a new integration (and, hopefully, ",(0,M.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/blob/main/CONTRIBUTING.md"},"contribute it")," back to the project!). What follows is an overview of the Python client and the dbt integration, which uses the Python client. You\u2019ll see how the client receives metadata from dbt to make it available to a consumer of OpenLineage such as Microsoft Purview, Amundsen, Astronomer, Egeria or Marquez."),(0,M.kt)("h3",{id:"python-client-data-structures"},"Python Client Data Structures"),(0,M.kt)("p",null,"The core structures of the client organize metadata about the foundational objects of the OpenLineage spec: runs, jobs and datasets."),(0,M.kt)("p",null,"A ",(0,M.kt)("inlineCode",{parentName:"p"},"dataset")," is a class consisting of a ",(0,M.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,M.kt)("inlineCode",{parentName:"p"},"namespace")," and, optionally, ",(0,M.kt)("inlineCode",{parentName:"p"},"facets")," array:"),(0,M.kt)("pre",null,(0,M.kt)("code",{parentName:"pre"},"@attr.s\nclass Dataset:\n    namespace: str = attr.ib()\n    name: str - attr.ib()\n    Facets: Dict = attr.ib(factory=dict)\n")),(0,M.kt)("p",null,"The same goes for a ",(0,M.kt)("inlineCode",{parentName:"p"},"job"),":"),(0,M.kt)("pre",null,(0,M.kt)("code",{parentName:"pre"},"@attr.s\nclass Job:\n    namespace: str = attr.ib()\n    name: str - attr.ib()\n    Facets: Dict = attr.ib(factory=dict)\n")),(0,M.kt)("p",null,"A ",(0,M.kt)("inlineCode",{parentName:"p"},"RunEvent")," sends the time, state, job, run, producer, input and output information needed to construct an OpenLineage job run event:"),(0,M.kt)("pre",null,(0,M.kt)("code",{parentName:"pre"},"@attr.s \nclass RunEvent:\n    eventType: RunState = attr.ib(validator=attr.validators.in_(RunState))\n    eventTime: str = attr.ib()\n    run: Run = attr.ib()\n    job: Job = attr.ib()\n    producer: str = attr.ib()\n    inputs: Optional[List[Dataset]] = attr.ib(factory=list)\n    outputs: Optional[List[Dataset]] = attr.ib(factory=list)\n")),(0,M.kt)("h3",{id:"the-openlineage-dbt-integration"},"The OpenLineage-dbt Integration"),(0,M.kt)("p",null,"At a high level, the ",(0,M.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/tree/main/integration/dbt"},"dbt integration")," uses the Python client to push metadata to the OpenLineage backend. The metadata it makes available comprises the run lifecycle, including any dataset inputs and outputs accessed during a job run."),(0,M.kt)("p",null,"In the ",(0,M.kt)("inlineCode",{parentName:"p"},"dbt-ol")," ",(0,M.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/blob/main/integration/dbt/scripts/dbt-ol"},"script"),", the integration uses the project\u2019s ",(0,M.kt)("inlineCode",{parentName:"p"},"ParentRunMetadata")," and ",(0,M.kt)("inlineCode",{parentName:"p"},"DbtArtifactProcessor")," classes, both of which can be found in the OpenLineage common integration, to parse metadata from the dbt ",(0,M.kt)("inlineCode",{parentName:"p"},"manifest")," and ",(0,M.kt)("inlineCode",{parentName:"p"},"run_result")," in order to produce OpenLineage events:  "),(0,M.kt)("pre",null,(0,M.kt)("code",{parentName:"pre"},"from openlineage.common.provider.dbt import DbtArtifactProcessor, ParentRunMetadata\n\n#\u2026\n\nif parent_id:\n    parent_namespace, parent_job_name, parent_run_id = parent_id.split(\u2018/\u2019)\n    parent_run_metadata = ParentRunMetadata(\n        run_id=parent_run_id,\n        job_name=parent_job_name,\n        job_namespace=parent_namespace\n    )\n\nprocessor = DbtArtifactProcessor(\n    producer=PRODUCER,\n    target=target,\n    job_namespace=job_namespace,\n    project_dir=project_dir,\n    profile_name=profile_name,\n    logger=logger\n)\n")),(0,M.kt)("p",null,"The integration uses a wrapper for dbt runs because start and complete events are not emitted until execution concludes:"),(0,M.kt)("pre",null,(0,M.kt)("code",{parentName:"pre"},"dbt_run_event = dbt_run_event_start(\n    job_name=f\u201cdbt-run-{processor.project[\u2018name\u2019]}\u201d,\n    job_namespace=job_namespace,\n    parent_run_metadata=parent_run_metadata\n)\n\ndbt_run_metadata = ParentRunMetadata(\n    run_id=dbt_run_event.run.runId,\n    job_name=dbt_run_event.job.name,\n    job_namespace=dbt_run_event.job.namespace\n)\n\nprocessor.dbt_run_metadata = dbt_run_metadata\n")),(0,M.kt)("p",null,"After executing dbt, the script parses the metadata using the processor and emits a run event:"),(0,M.kt)("pre",null,(0,M.kt)("code",{parentName:"pre"},'events = processor.parse().events()\n\nclient.emit(dbt_run_event_end(\n    run_id=dbt_run_metadata.run_id,\n    job_namespace=dbt_run_metadata.job_namespace,\n    job_name=dbt_run_metadata.job_name,\n    parent_run_metadata=parent_run_metadata\n    ))\nlogger.info(f"Emitted {len(events) + 2} openlineage events")\n')),(0,M.kt)("h3",{id:"additional-resources"},"Additional Resources"),(0,M.kt)("p",null,"Check out the source code here: ",(0,M.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/tree/main/client/python"},"https://github.com/OpenLineage/OpenLineage/tree/main/client/python"),"."),(0,M.kt)("p",null,"Interested in contributing to the project? Read our guide for new contributors: ",(0,M.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/blob/main/CONTRIBUTING.md"},"https://github.com/OpenLineage/OpenLineage/blob/main/CONTRIBUTING.md"),"."),(0,M.kt)("p",null,"Join us on Slack: ",(0,M.kt)("a",{parentName:"p",href:"http://bit.ly/OpenLineageSlack"},"http://bit.ly/OpenLineageSlack"),"."),(0,M.kt)("p",null,"Attend a community meeting: ",(0,M.kt)("a",{parentName:"p",href:"https://bit.ly/OLwikitsc"},"https://bit.ly/OLwikitsc"),"."))}c.isMDXComponent=!0},5149:(e,i,t)=>{t.d(i,{Z:()=>I});const I="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDg0My41IDIxNS41IiB3aWR0aD0iMTAwJSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp2ZWN0b3JuYXRvcj0iaHR0cDovL3ZlY3Rvcm5hdG9yLmlvIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxkZWZzLz4KPGNsaXBQYXRoIGlkPSJBcnRib2FyZEZyYW1lIj4KPHJlY3QgaGVpZ2h0PSIyMTUuNSIgd2lkdGg9Ijg0My41IiB4PSIwIiB5PSIwIi8+CjwvY2xpcFBhdGg+CjxnIGNsaXAtcGF0aD0idXJsKCNBcnRib2FyZEZyYW1lKSIgaWQ9IlVudGl0bGVkIiB2ZWN0b3JuYXRvcjpsYXllck5hbWU9IlVudGl0bGVkIj4KPHBhdGggZD0iTTAgMEwxMTAwLjMgMEwxMTAwLjMgMEwxMTAwLjMgMjE1LjVMMTEwMC4zIDIxNS41TDAgMjE1LjVMMCAyMTUuNUwwIDBMMCAwWiIgZmlsbD0iIzNjNDAyYiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTM0Ny45IDQ4LjVMMzQ3LjkgMTEzLjlMNzU5LjIgMTA5LjdMNzU5LjIgNDQuM0wzNDcuOSA0OC41WiIgZmlsbD0iI2NiOTE1YiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjUiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDEzLjMgMTE2TDE4NS42IDI2OS45TDQwMi44IDU5Mi42TDYzMC41IDQzOC42TDQxMy4zIDExNloiIGZpbGw9IiNhYjljOWIiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMC41IiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTYxMy42IDYuM0w0NDkuMiA3MTdMNTU4LjkgNzQyLjNMNzIzLjMgMzEuNkw2MTMuNiA2LjNaIiBmaWxsPSIjMTEwYzBjIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTIyNS42IDczLjhMMjU5LjMgMzk4LjVMMzY2LjggMzg1LjhMMzMzLjIgNjEuMkwyMjUuNiA3My44WiIgZmlsbD0iIzAwMGEwZSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01MTYuNiA0NC4zTDQ2MS44IDU3TDU3My42IDUyOS40TDYyOC40IDUxNi43TDUxNi42IDQ0LjNaIiBmaWxsPSIjYzhhMzY1IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQyNiAxMi43TDgwNS42IDE4MS40TDg1Ni4yIDY1LjRMNDc2LjYtMTAxLjJMNDI2IDEyLjdaIiBmaWxsPSIjNzQ3YjUwIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTM0MS42IDE3Ny4xTDM4My44IDE4NS41TDUzMS40LTQ2OC4yTDQ4OS4yLTQ3Ni42TDM0MS42IDE3Ny4xWiIgZmlsbD0iI2QwODM3NSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01NjcuMyA5N0w0NDAuOCAyNTNMOTAwLjUgNjI2LjJMMTAyNyA0NzAuMkw1NjcuMyA5N1oiIGZpbGw9IiMxNzBiMGUiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjY1LjcgMjUuM0w0NDkuMiA5MC43TDUwNi4xLTY1LjRMMzIyLjYtMTMwLjdMMjY1LjcgMjUuM1oiIGZpbGw9IiM1YjZmM2MiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMC41IiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTcxMC42IDIuMUw2OTMuNyAyNjUuN0w3MzEuNyAyNjcuOEw3NDguNiA0LjJMNzEwLjYgMi4xWiIgZmlsbD0iI2MxY2RhMyIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik03NTAuNyAxODEuNEw3ODguNyA0MzAuMkwxMjA4LjMgMzYwLjZMMTE3MC4zIDExMS44TDc1MC43IDE4MS40WiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yMjMuNSA0Ni40TDM1LjggMTE4LjFMMjE5LjMgNTgyTDQwNyA1MTAuM0wyMjMuNSA0Ni40WiIgZmlsbD0iIzNhMWExNCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjUiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNzQ4LjYgNTIuN0w5OTMuMiAyNjEuNUwxMjQyLjEtMzMuN0w5OTcuNC0yNDIuNUw3NDguNiA1Mi43WiIgZmlsbD0iIzA2MTMwZSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjUiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjU3LjMgMjcuNEwyNjkuOSA1Mi43TDQ5Ny43LTYzLjNMNDg1LTg4LjZMMjU3LjMgMjcuNFoiIGZpbGw9IiM3OWI5NjYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMC41IiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQxNy41IDgyLjJMNjEzLjYgNTY3LjJMNjQ3LjMgNTUyLjRMNDUxLjIgNjcuNEw0MTcuNSA4Mi4yWiIgZmlsbD0iIzJhMDkxMiIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01MC42IDE4My41TC0xOSAyOTUuMkwxOTQgNDMyLjNMMjYzLjYgMzIwLjVMNTAuNiAxODMuNVoiIGZpbGw9IiNkYzZmNTIiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTA3LjUgMTgxLjRMMjE1LjEgMjE5LjNMMjkxIDIuMUwxODMuNS0zMy43TDEwNy41IDE4MS40WiIgZmlsbD0iIzM2MjUxYiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwLjUiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzEyLjEgMTY2LjZMNDUzLjQgMzE4LjRMNTEyLjQgMjYxLjVMMzcxLjEgMTA5LjdMMzEyLjEgMTY2LjZaIiBmaWxsPSIjYWFhMDk0IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTY1NS44IDIzLjJMNjcyLjcgMTM5LjJMNzI3LjUgMTMwLjhMNzEwLjYgMTQuOEw2NTUuOCAyMy4yWiIgZmlsbD0iIzE5MTYxMSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xMjYuNSAzMy43TDY5LjYgNDQuM0w3NS45IDc4TDEzMi44IDY3LjVMMTI2LjUgMzMuN1oiIGZpbGw9IiNlYTg5NDMiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTY1LjEgNTAuNkw2NzQuOCAxNzAuOEw3NDIuMyAxMDcuNUw2MzIuNi0xMC41TDU2NS4xIDUwLjZaIiBmaWxsPSIjM2IyODFjIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjAuNSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xNDMuNCAxODUuNkwxNzIuOSAyMDQuNkw0NjMuOS0yNzJMNDM0LjQtMjkxTDE0My40IDE4NS42WiIgZmlsbD0iIzI4MTkxNSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00MzguNiAxMjguNkwtMTAuNSA3OTIuOUwxMi43IDgwNy43TDQ2MS45IDE0My40TDQzOC42IDEyOC42WiIgZmlsbD0iIzFhMTAxMCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik03MTAuNiA5OS4xTDc0Mi4yIDEwMy4zTDc5OS4xLTI0NC42TDc2Ny41LTI0OC44TDcxMC42IDk5LjFaIiBmaWxsPSIjYzRjZjk3IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQ2My43NTEgOTIuNjY2NUM0NTkuNDE3IDc1Ljc2MDYgNDgxLjQ5MyA1NS40OTY3IDUxMy4wNTggNDcuNDA1OUM1NDQuNjIzIDM5LjMxNTEgNTczLjcyNCA0Ni40NjEyIDU3OC4wNTcgNjMuMzY3MUM1ODIuMzkxIDgwLjI3MzEgNTYwLjMxNSAxMDAuNTM3IDUyOC43NSAxMDguNjI4QzQ5Ny4xODYgMTE2LjcxOSA0NjguMDg0IDEwOS41NzIgNDYzLjc1MSA5Mi42NjY1WiIgZmlsbD0iI2ZmZjE3ZiIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik02NTMuNTAxIDg4LjMwOTFDNjQwLjczMSA3MC4yMTUzIDYzNC4yMiA1Mi44MzY4IDYzOC45NTcgNDkuNDkzMUM2NDMuNjk1IDQ2LjE0OTQgNjU3Ljg4OCA1OC4xMDY3IDY3MC42NTggNzYuMjAwNUM2ODMuNDI3IDk0LjI5NDMgNjg5LjkzOSAxMTEuNjczIDY4NS4yMDEgMTE1LjAxN0M2ODAuNDYzIDExOC4zNiA2NjYuMjcgMTA2LjQwMyA2NTMuNTAxIDg4LjMwOTFaIiBmaWxsPSIjZmFjNzdmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjAuNSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00MDYuOTU1IDc0Ljk0MTFDNDA1LjE4NiA1NS4yNDg0IDQwOS40MTUgMzguNzc1NSA0MTYuNDAxIDM4LjE0NzhDNDIzLjM4NyAzNy41MjAxIDQzMC40ODUgNTIuOTc1NCA0MzIuMjU0IDcyLjY2ODFDNDM0LjAyMyA5Mi4zNjA4IDQyOS43OTQgMTA4LjgzNCA0MjIuODA4IDEwOS40NjFDNDE1LjgyMiAxMTAuMDg5IDQwOC43MjUgOTQuNjMzOCA0MDYuOTU1IDc0Ljk0MTFaIiBmaWxsPSIjM2QwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjAuNSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik03NzAuNTcxIDE2My4wMTNDNzY3LjU5NCAxNTEuNzQ2IDc3Ny4wNDIgMTM5LjQ4IDc5MS42NzIgMTM1LjYxNUM4MDYuMzAyIDEzMS43NSA4MjAuNTc1IDEzNy43NSA4MjMuNTUxIDE0OS4wMTdDODI2LjUyNyAxNjAuMjgzIDgxNy4wOCAxNzIuNTQ5IDgwMi40NSAxNzYuNDE0Qzc4Ny44MiAxODAuMjc5IDc3My41NDcgMTc0LjI3OSA3NzAuNTcxIDE2My4wMTNaIiBmaWxsPSIjZGVkMTkyIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE1My45MSA2Mi41MTgxQzE0Ny40ODYgNTQuMjIxIDE1Ni40NzQgMzYuNTAzNyAxNzMuOTg2IDIyLjk0NTZDMTkxLjQ5NyA5LjM4NzQxIDIxMC45IDUuMTIyNTEgMjE3LjMyNCAxMy40MTk3QzIyMy43NDggMjEuNzE2OCAyMTQuNzYgMzkuNDM0IDE5Ny4yNDkgNTIuOTkyMkMxNzkuNzM4IDY2LjU1MDMgMTYwLjMzNCA3MC44MTUyIDE1My45MSA2Mi41MTgxWiIgZmlsbD0iIzk4Nzg0OCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjwvZz4KPC9zdmc+Cg=="},9734:(e,i,t)=>{t.d(i,{Z:()=>I});const I="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM1MCAyNTAiIHdpZHRoPSIxMDAlIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnZlY3Rvcm5hdG9yPSJodHRwOi8vdmVjdG9ybmF0b3IuaW8iIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPGRlZnMvPgo8Y2xpcFBhdGggaWQ9IkFydGJvYXJkRnJhbWUiPgo8cmVjdCBoZWlnaHQ9IjI1MCIgd2lkdGg9IjM1MCIgeD0iMCIgeT0iMCIvPgo8L2NsaXBQYXRoPgo8ZyBjbGlwLXBhdGg9InVybCgjQXJ0Ym9hcmRGcmFtZSkiIGlkPSJVbnRpdGxlZCIgdmVjdG9ybmF0b3I6bGF5ZXJOYW1lPSJVbnRpdGxlZCI+CjxwYXRoIGQ9Ik0tMTcuMTIxNy05LjE4OTg1TDM2MC4zODktOS4xODk4NUwzNjAuMzg5LTkuMTg5ODVMMzYwLjM4OSAyNzEuMTRMMzYwLjM4OSAyNzEuMTRMLTE3LjEyMTcgMjcxLjE0TC0xNy4xMjE3IDI3MS4xNEwtMTcuMTIxNy05LjE4OTg1TC0xNy4xMjE3LTkuMTg5ODVaIiBmaWxsPSIjM2M0MDJiIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjAwLjkxMiAxODAuMTg4TDM1Ni42NTEgMTk4Ljg3N0wzNzAuMzU2IDg5LjIzN0wyMTQuNjE3IDcwLjU0ODRMMjAwLjkxMiAxODAuMTg4WiIgZmlsbD0iI2ZmZjU4NyIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xMTMuNjk5IDIwNS4xMDdMMzUuMjA2NSAyMjMuNzk1TDczLjgyOTcgMzc4LjI4OEwxNTIuMzIyIDM1OS41OTlMMTEzLjY5OSAyMDUuMTA3WiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00Ni40MTk3IDM2LjkwODhMMTUyLjMyMiAzNi45MDg4TDE1Mi4zMjIgMjU4LjY4MUw0Ni40MTk3IDI1OC42ODFMNDYuNDE5NyAzNi45MDg4WiIgZmlsbD0iI2Y3ODM2YyIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xNDguNTg0IDExNi42NDdMMjUxLjk5NSAxMTYuNjQ3TDI1MS45OTUgMjQxLjIzOEwxNDguNTg0IDI0MS4yMzhMMTQ4LjU4NCAxMTYuNjQ3WiIgZmlsbD0iIzQ1MDAwMyIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yMzkuNTM2IDE1MS41MzJMMzMwLjQ4NyAyNzQuODc4TDQzMS40MDYgMTk4Ljg3N0wzNDAuNDU0IDc1LjUzMkwyMzkuNTM2IDE1MS41MzJaIiBmaWxsPSIjZmZjYTc2IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTS05NC4zNjgxIDQzLjEzODRMLTI0LjU5NzItMTIuOTI3NkwyOC45NzctMjQuMTQwOEw2NS4xMDgzIDY4LjA1NjVMLTk0LjM2ODEgNDMuMTM4NFoiIGZpbGw9IiNlMGZmOWIiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjM1Ljc5OCAxMDEuNjk2TDM3NC4wOTQgMzAuNjc5M0wxNjMuNTM1LTM4Ny45NDZMMjUuMjM5Mi0zMTYuOTNMMjM1Ljc5OCAxMDEuNjk2WiIgZmlsbD0iIzViYTE1MiIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yODUuNjM0IDM0LjQxN0wzNDUuNDM4IDUxLjg1OTdMMzc2LjU4Ni00Ny44MTMxTDMxNi43ODItNjUuMjU1OEwyODUuNjM0IDM0LjQxN1oiIGZpbGw9IiM5NmQ1NzMiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNzcuNTY3NCAyMjcuNTMzTDMwLjIyMjkgMjU3LjQzNUwyMjIuMDkzIDU1MS40NjlMMjY5LjQzOCA1MjEuNTY4TDc3LjU2NzQgMjI3LjUzM1oiIGZpbGw9IiNmOWZmZWMiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjEwLjg4IDExMC40MTdMMjE3LjEwOSAxMzcuODI3TDMzMC40ODcgMTExLjY2M0wzMjQuMjU4IDg0LjI1MzRMMjEwLjg4IDExMC40MTdaIiBmaWxsPSIjZmZkZTg4IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI2NC40NTQgMjE1LjA3NEwxNDIuMzU1IDk3Ljk1ODRMMTk0LjY4MyA1OC4wODkzTDI0MC43ODIgMTM1LjMzNkwyNjQuNDU0IDIxNS4wNzRaIiBmaWxsPSIjMzQwMjAzIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTYyLjYxNjUtMTQuMTczNUwyNzUuNjY3LTE0LjE3MzVMMjc1LjY2NyA4NS40OTkzTDYyLjYxNjUgODUuNDk5M0w2Mi42MTY1LTE0LjE3MzVaIiBmaWxsPSIjNDM1NDMyIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTExNC45NDUgMjA2LjM1M0w5Ni4yNTYxIDE0MS41NjVMMTMyLjM4NyA0OS4zNjc5TDE2Ny4yNzMgMTU3Ljc2MkwxMTQuOTQ1IDIwNi4zNTNaIiBmaWxsPSIjZmY3MDY5IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTM1LjIwNjUgMTAwLjQ1TC0yMTIuNzMgMTIwLjM4NUwtMjAwLjI3IDI1OS45MjdMNDYuNDE5NyAyMzkuOTkyTDM1LjIwNjUgMTAwLjQ1WiIgZmlsbD0iIzAwMDMwOSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xMzMuNjMzIDI5Mi4zMkw4MS4zMDUyIDI1MS4yMDVMOTUuMDEwMiAxOTAuMTU2TDE1NC44MTQgMjM2LjI1NEwxMzMuNjMzIDI5Mi4zMloiIGZpbGw9IiM4OTgyOWYiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNLTIyLjEwNTMgNjQuMzE4OEwtOC40MDAzMyAzMC42NzkzTDEyLjc4MDEgMjkuNDMzM0wwLjMyMTAzOSA1NC4zNTE1TC0yMi4xMDUzIDY0LjMxODhaIiBmaWxsPSIjMDAxNjAwIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTExOS45MjggNTUuNTk3NUwxNzUuOTk0IDI5LjQzMzNMMjA0LjY1IDQxLjg5MjRMMTQ3LjMzOCA4MS43NjE2TDExOS45MjggNTUuNTk3NVoiIGZpbGw9IiNiNDg4NTYiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNzcuNTY3NCA4Ni43NDUyTDEwMS4yNCA4Ni43NDUyTDEwMS4yNCAyMDMuODYxTDc3LjU2NzQgMjAzLjg2MUw3Ny41Njc0IDg2Ljc0NTJaIiBmaWxsPSIjNjIwOTAwIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTQxNS4yMDkgMzM0LjY4MUwxMzguNjE3IDIyOC43NzlMMTEzLjY5OSAxMzUuMzM2TDE0Mi4zNTUgMTc3LjY5N0w0MTUuMjA5IDMzNC42ODFaIiBmaWxsPSIjMWYwYzE0IiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTS0xNS44NzU4IDExNS40MDFMMzcuNjk4MyA4OS4yMzdMOTEuMjcyNCA4NS40OTkzTDU3LjYzMjkgMTM5LjA3M0wtMTUuODc1OCAxMTUuNDAxWiIgZmlsbD0iIzMyNzYzOCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xODcuMjA3IDEzMS41OThMMjA0LjY1IDEzMS41OThMMjA0LjY1IDIxOC44MTJMMTg3LjIwNyAyMTguODEyTDE4Ny4yMDcgMTMxLjU5OFoiIGZpbGw9IiNiMTQxM2YiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTQ5LjgwNy0zNy4xNjI1QzE2Ni4zOC00MS43NzE1IDE4Mi4wNTctMzcuNDQ2NSAxODQuODIzLTI3LjUwMjRDMTg3LjU4OS0xNy41NTgzIDE3Ni4zOTQtNS43NjA3MSAxNTkuODIxLTEuMTUxNzVDMTQzLjI0OCAzLjQ1NzI1IDEyNy41NzEtMC44Njc3NjEgMTI0LjgwNS0xMC44MTE5QzEyMi4wMzktMjAuNzU2IDEzMy4yMzMtMzIuNTUzNSAxNDkuODA3LTM3LjE2MjVaIiBmaWxsPSIjODhlZDhiIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI4My4xNDMgMTgzLjkyNkwyOTguMDkzIDM3NC41NUw3MjcuOTMyIDM0MC45MTFMNzEyLjk4MSAxNTAuMjg3TDI4My4xNDMgMTgzLjkyNloiIGZpbGw9IiM4NTZjNTIiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTYuOTQ4NiAyMzMuMjExQzMxLjEzMjMgMjI2LjE5IDQ2LjM0MjIgMjI3Ljk5NiA1MC45MjEgMjM3LjI0N0M1NS40OTk5IDI0Ni40OTcgNDcuNzEzNiAyNTkuNjg3IDMzLjUyOTkgMjY2LjcwOEMxOS4zNDYyIDI3My43MjkgNC4xMzYyNiAyNzEuOTIyLTAuNDQyNTc5IDI2Mi42NzFDLTUuMDIxNDIgMjUzLjQyMiAyLjc2NDg5IDI0MC4yMzEgMTYuOTQ4NiAyMzMuMjExWiIgZmlsbD0iIzM0NWM0NCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yNTUuNzMzIDE2Ni40ODNMMzc5LjA3OCAxODEuNDM0TDM4Mi44MTUgMTUxLjUzMkwyNTkuNDcgMTM2LjU4MkwyNTUuNzMzIDE2Ni40ODNaIiBmaWxsPSIjZmZlMjdmIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTE2LjUxNzkgMTIyLjg3N0wtMjguMzM0OSAxNDAuMzE5TDAuMzIxMDM5IDIxMy44MjhMNDUuMTczOCAxOTYuMzg1TDE2LjUxNzkgMTIyLjg3N1oiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC41IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjI0LjU4NSAyMTguODEyTDIzLjk5MzMgNDE0LjQxOUwxNTYuMDYgNTUwLjIyNEwzNTYuNjUxIDM1NC42MTZMMjI0LjU4NSAyMTguODEyWiIgZmlsbD0iIzAzMGUxNCIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00OC45MTE1IDE1NC4wMjRMNjUuMTA4MyAxNjYuNDgzTDkwLjAyNjUgMTMxLjU5OEw3My44Mjk3IDExOS4xMzlMNDguOTExNSAxNTQuMDI0WiIgZmlsbD0iI2ZmYjM1MSIgZmlsbC1vcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yMTkuNjAxIDE0OS4wNDFMMjIwLjg0NyAxNTkuMDA4TDQxMi43MTcgMTE2LjY0N0w0MTEuNDcxIDEwNi42OEwyMTkuNjAxIDE0OS4wNDFaIiBmaWxsPSIjNmU0YTFkIiBmaWxsLW9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPC9nPgo8L3N2Zz4K"}}]);