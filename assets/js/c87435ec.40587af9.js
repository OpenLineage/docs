"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[646],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,u=d["".concat(p,".").concat(m)]||d[m]||h[m]||o;return a?r.createElement(u,i(i({ref:t},l),{},{components:a})):r.createElement(u,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},12056:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"How Operators and Extractors Work Under-the-Hook",date:new Date("2022-09-07T00:00:00.000Z"),authors:["Lampel"],description:"A technical deep-dive on how the Airflow OSS and OpenLineage OSS projects interact."},i=void 0,s={permalink:"/blog/operators-and-extractors-technical-deep-dive",source:"@site/blog/operators-and-extractors-technical-deep-dive/index.mdx",title:"How Operators and Extractors Work Under-the-Hook",description:"A technical deep-dive on how the Airflow OSS and OpenLineage OSS projects interact.",date:"2022-09-07T00:00:00.000Z",formattedDate:"September 7, 2022",tags:[],readingTime:3.685,hasTruncateMarker:!0,authors:[{name:"Benji Lampel",title:"OpenLineage Committer",url:"https://www.github.com/denimalpaca",iamge_url:"https://www.github.com/denimalpaca.png",key:"Lampel"}],frontMatter:{title:"How Operators and Extractors Work Under-the-Hook",date:"2022-09-07T00:00:00.000Z",authors:["Lampel"],description:"A technical deep-dive on how the Airflow OSS and OpenLineage OSS projects interact."},prevItem:{title:"Pursuing Lineage from Airflow using Custom Extractors",permalink:"/blog/extractors"},nextItem:{title:"The Current State of Column-level Lineage",permalink:"/blog/column-lineage"}},p={authorsImageUrls:[void 0]},c=[{value:"Overview",id:"overview",level:2},{value:"Integration",id:"integration",level:2},{value:"The Operator and the Extractor",id:"the-operator-and-the-extractor",level:3},{value:"Interplay",id:"interplay",level:3},{value:"SQL Check Operators/Extractors",id:"sql-check-operatorsextractors",level:3}],l={toc:c};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A technical deep-dive on how the Airflow OSS and OpenLineage OSS projects interact. "),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Airflow Operators and OpenLineage Extractors have a specific, if quirky, way of working together. Recently, the way they work together has seen a bit of an overhaul, and the new SQL Check Extractors added a new and unique way that the extractors work and interact with operators. In this blog, we'll demystify these relationships."),(0,n.kt)("p",null,"Note: This blog post describes the relationships of the operators and extractors only for ",(0,n.kt)("inlineCode",{parentName:"p"},"Airflow>=2.3")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"OpenLineage>=0.12.0"),"."),(0,n.kt)("h2",{id:"integration"},"Integration"),(0,n.kt)("h3",{id:"the-operator-and-the-extractor"},"The Operator and the Extractor"),(0,n.kt)("p",null,"Some quick definitions are in order before we continue."),(0,n.kt)("p",null,"The Airflow Operator defines a task, which is the unit of work in Airflow. All operators inherit from the ",(0,n.kt)("inlineCode",{parentName:"p"},"BaseOperator"),", and in addition to taking the arguments of the ",(0,n.kt)("inlineCode",{parentName:"p"},"BaseOperator"),", they can take arguments specific to the kind of task they are going to perform, such as a specific ",(0,n.kt)("inlineCode",{parentName:"p"},"conn_id")," to connect to a datasource or a dictionary of checks to perform on that datasource."),(0,n.kt)("p",null,"The OpenLineage Extractor is somewhat analogous to the Airflow Operator: it is a unit of work in OpenLineage, which takes the relevant input and output data from an operator, creates OpenLineage data facets, and sends those facets to be displayed in Marquez or Datakin. Each extractor maps to a specific set of operators via the ",(0,n.kt)("inlineCode",{parentName:"p"},"get_operator_classnames()")," class method. The extractors all inherit from a ",(0,n.kt)("inlineCode",{parentName:"p"},"BaseExtractor"),", which defines a few abstract methods, importantly ",(0,n.kt)("inlineCode",{parentName:"p"},"execute()")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"execute_on_complete()"),"."),(0,n.kt)("p",null,"Briefly, the two other major OpenLineage constructs in this story are the ",(0,n.kt)("inlineCode",{parentName:"p"},"ExtractorManager"),", which is responsible for identifying the correct extractor to use, and the ",(0,n.kt)("inlineCode",{parentName:"p"},"Listener"),", which is the connecting piece between OpenLineage and Airflow."),(0,n.kt)("h3",{id:"interplay"},"Interplay"),(0,n.kt)("p",null,"Next, we'll walk through what happens when an Airflow instance with OpenLineage support runs a DAG, and how that operator data makes it to the Marquez or Datakin UI."),(0,n.kt)("p",null,"First, a DAG is born. When the DAG is run, the scheduler runs the operators in order by calling their ",(0,n.kt)("inlineCode",{parentName:"p"},"execute()")," method. This is the first time the OpenLineage ",(0,n.kt)("inlineCode",{parentName:"p"},"Listener")," responds. Triggered by the ",(0,n.kt)("inlineCode",{parentName:"p"},"execute()")," event, it calls the ",(0,n.kt)("inlineCode",{parentName:"p"},"Manager"),", which identifies the correct extractor based on the ",(0,n.kt)("inlineCode",{parentName:"p"},"task_id"),". Then the ",(0,n.kt)("inlineCode",{parentName:"p"},"Extractor"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"execute()")," method is run, potentially returning lineage data in the form of a metadata object. When the operator is done--either succeeded or failed--, the ",(0,n.kt)("inlineCode",{parentName:"p"},"Listener")," calls the ",(0,n.kt)("inlineCode",{parentName:"p"},"Manager")," again, and this time the ",(0,n.kt)("inlineCode",{parentName:"p"},"Manager")," triggers the ",(0,n.kt)("inlineCode",{parentName:"p"},"Extractor"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"execute_on_complete()")," method, which may also return metadata based on the result of the task. The metadata object is then sent to Marquez or Datakin, where the data is displayed."),(0,n.kt)("h3",{id:"sql-check-operatorsextractors"},"SQL Check Operators/Extractors"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"SQLCheckOperators")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"SQLCheckExtractors")," work slightly differently than the interplay outlined above. The biggest difference is that the ",(0,n.kt)("inlineCode",{parentName:"p"},"SQLCheckExtractors")," all inherit from a ",(0,n.kt)("inlineCode",{parentName:"p"},"BaseSqlCheckExtractor"),", which in turn ",(0,n.kt)("em",{parentName:"p"},"dynamically")," inherits from the appropriate extractor at run time. The appropriate extractor is always some existing SQL database extractor. The ",(0,n.kt)("inlineCode",{parentName:"p"},"BaseSqlCheckExtractor")," itself only implements the ",(0,n.kt)("inlineCode",{parentName:"p"},"extract_on_complete()")," method by determining whether the super class\u2019s ",(0,n.kt)("inlineCode",{parentName:"p"},"extract()")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"extract_on_complete()")," method should be run to gather metadata. The ",(0,n.kt)("inlineCode",{parentName:"p"},"_get_input_facets()")," methods are all implemented by the particular check extractors, and are called in the super class\u2019s ",(0,n.kt)("inlineCode",{parentName:"p"},"extract()")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"extract_on_complete()")," method."),(0,n.kt)("p",null,"The dynamic inheritance is done by defining the ",(0,n.kt)("inlineCode",{parentName:"p"},"SQLCheckExtractors")," inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"get_check_extractors()")," function that takes a class as a parameter and passes that class to the constructor of the ",(0,n.kt)("inlineCode",{parentName:"p"},"BaseSqlCheckExtractor"),". When a ",(0,n.kt)("inlineCode",{parentName:"p"},"SQLCheckOperator")," is run, and the ",(0,n.kt)("inlineCode",{parentName:"p"},"Manager")," searches for the correct extractor to use, it calls ",(0,n.kt)("inlineCode",{parentName:"p"},"instantiate_abstract_extractors()")," with the given task instance."),(0,n.kt)("p",null,"In this function, the task instance is used to find the correct extractor that will be the superclass of the ",(0,n.kt)("inlineCode",{parentName:"p"},"BaseSqlCheckOperator"),". To do this, the function uses a set of hard-coded operator names whose extractors will dynamically inherit from the found superclass. Currently, this list is the set of ",(0,n.kt)("inlineCode",{parentName:"p"},"SQLCheckOperator"),"s, which corresponds to a dictionary of extractor keys and ",(0,n.kt)("inlineCode",{parentName:"p"},"conn_type")," values. The given task\u2019s class name is checked against the set of operator names, and if it is in the set, a loop compares the existing extractor\u2019s corresponding ",(0,n.kt)("inlineCode",{parentName:"p"},"conn_type")," from the aforementioned dictionary to the given task instance\u2019s ",(0,n.kt)("inlineCode",{parentName:"p"},"conn_type")," retrieved from Airflow connections. If there\u2019s a match, the ",(0,n.kt)("inlineCode",{parentName:"p"},"get_check_extractors()")," method is called with the matched extractor, instantiating all the operators with the correct superclass."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"SQLCheckExtractors")," only rely on the ",(0,n.kt)("inlineCode",{parentName:"p"},"extract_on_complete()")," method, as the values needed from the operators, i.e. the results of the query and the success or failures of the checks, are only available after the operator completes."))}h.isMDXComponent=!0}}]);