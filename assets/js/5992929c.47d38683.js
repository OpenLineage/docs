"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4665],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=r,g=d["".concat(s,".").concat(f)]||d[f]||c[f]||o;return t?i.createElement(g,a(a({ref:n},u),{},{components:t})):i.createElement(g,a({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61608:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=t(87462),r=(t(67294),t(3905));const o={sidebar_position:7,title:"Trino"},a=void 0,l={unversionedId:"integrations/trino",id:"integrations/trino",title:"Trino",description:"This integration is known to work with Trino 450 and later.",source:"@site/docs/integrations/trino.md",sourceDirName:"integrations",slug:"/integrations/trino",permalink:"/docs/integrations/trino",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/integrations/trino.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Trino"},sidebar:"tutorialSidebar",previous:{title:"Great Expectations",permalink:"/docs/integrations/great-expectations"},next:{title:"About These Guides",permalink:"/docs/guides/about"}},s={},p=[{value:"How does Trino work with OpenLineage?",id:"how-does-trino-work-with-openlineage",level:2},{value:"Configuring Trino OpenLineage plugin",id:"configuring-trino-openlineage-plugin",level:2},{value:"Official documentation",id:"official-documentation",level:3},{value:"Feedback",id:"feedback",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This integration is known to work with Trino 450 and later.")),(0,r.kt)("p",null,"Trino is a distributed SQL query engine targeted for big data analytical workloads. Trino queries are typically run on\nTrino ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster"),", where distributed set of Trino ",(0,r.kt)("inlineCode",{parentName:"p"},"workers")," provides compute power and Trino ",(0,r.kt)("inlineCode",{parentName:"p"},"coordinator")," is responsible\nfor query submission. By a rich set of available connectors, you can use Trino to execute SQL queries with the same exact\nsyntax ",(0,r.kt)("a",{parentName:"p",href:"https://trino.io/docs/current/connector.html"},"on different underlying systems")," - such as RDBMs databases, hive metastore, s3 and others."),(0,r.kt)("p",null,"Trino enables running queries for fetching the data as well as creating new structures - such as tables, views or materialized views."),(0,r.kt)("p",null,"To learn more about Trino, visit their ",(0,r.kt)("a",{parentName:"p",href:"https://trino.io/docs/current/"},"documentation site"),"."),(0,r.kt)("h2",{id:"how-does-trino-work-with-openlineage"},"How does Trino work with OpenLineage?"),(0,r.kt)("p",null,"Collecting lineage in Trino requires configuring a ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin"),", which will use ",(0,r.kt)("inlineCode",{parentName:"p"},"EventListener")," interface of Trino to extract\nlineage information from metadata available for this interface."),(0,r.kt)("p",null,"Trino OpenLineage Event Listener plugin will yield 2 events for each executed query - one for STARTED and one for\nSUCCEEDED/FAILED query. While first one already provides us with new job information, actual lineage information\n(inlets/outlets) will be available in the latter event."),(0,r.kt)("p",null,"This plugin supports both table and column level lineage."),(0,r.kt)("h2",{id:"configuring-trino-openlineage-plugin"},"Configuring Trino OpenLineage plugin"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create configuration file named ",(0,r.kt)("inlineCode",{parentName:"li"},"openlineage-event-listener.properties"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"event-listener.name=openlineage\nopenlineage-event-listener.transport.type=HTTP\nopenlineage-event-listener.transport.url=__OPENLINEAGE_URL__\nopenlineage-event-listener.trino.uri=__TRINO_URI__\n")),(0,r.kt)("p",null,"Make sure to set:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"__OPENLINEAGE_URL__")," - address where OpenLineage API is reachable so plugin can post lineage information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"__TRINO_URI__")," - address (preferably DNS) of a Trino cluster. It will be used for rendering dataset namespace.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Extend properties file used to configure Trino ",(0,r.kt)("strong",{parentName:"li"},"coordinator")," with following line:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"event-listener.config-files=etc/openlineage-event-listener.properties\n")),(0,r.kt)("p",null,"Make sure that the path to ",(0,r.kt)("inlineCode",{parentName:"p"},"event-listener.config-files")," is recognizable by Trino coordinator."),(0,r.kt)("h3",{id:"official-documentation"},"Official documentation"),(0,r.kt)("p",null,"Current documentation on Trino OpenLineage Event Listener with full list of available configuration options\n",(0,r.kt)("a",{parentName:"p",href:"https://trino.io/docs/current/admin/event-listeners-openlineage.html"},"is maintained here"),"."),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"What did you think of this guide? You can reach out to us on ",(0,r.kt)("a",{parentName:"p",href:"http://bit.ly/OpenLineageSlack"},"slack")," and leave us feedback!"))}c.isMDXComponent=!0}}]);