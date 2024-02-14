"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=i,c=m["".concat(p,".").concat(k)]||m[k]||u[k]||r;return n?a.createElement(c,l(l({ref:t},d),{},{components:n})):a.createElement(c,l({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:4,title:"Apache Flink"},l=void 0,o={unversionedId:"integrations/flink",id:"integrations/flink",title:"Apache Flink",description:"This integration is considered experimental: only specific workflows and use cases are supported.",source:"@site/docs/integrations/flink.md",sourceDirName:"integrations",slug:"/integrations/flink",permalink:"/docs/integrations/flink",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/integrations/flink.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Apache Flink"},sidebar:"tutorialSidebar",previous:{title:"Job Hierarchy",permalink:"/docs/integrations/airflow/job-hierarchy"},next:{title:"dbt",permalink:"/docs/integrations/dbt"}},p={},s=[{value:"Getting lineage from Flink",id:"getting-lineage-from-flink",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuring Openlineage connector",id:"configuring-openlineage-connector",level:2},{value:"Flink Configuration parameters",id:"flink-configuration-parameters",level:3},{value:"HTTP",id:"http",level:5},{value:"URL",id:"url",level:6},{value:"Kinesis",id:"kinesis",level:5},{value:"Kafka",id:"kafka",level:5}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This integration is considered experimental: only specific workflows and use cases are supported.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Apache Flink")," is one of the most popular stream processing frameworks. Apache Flink jobs run on clusters,\nwhich are composed of two types of nodes: ",(0,i.kt)("inlineCode",{parentName:"p"},"TaskManagers")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"JobManagers"),". While clusters typically consists of\nmultiple ",(0,i.kt)("inlineCode",{parentName:"p"},"TaskManagers"),", only reason to run multiple JobManagers is high availability. The jobs are ",(0,i.kt)("em",{parentName:"p"},"submitted"),"\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"JobManager")," by ",(0,i.kt)("inlineCode",{parentName:"p"},"JobClient"),", that compiles user application into dataflow graph which is understandable by ",(0,i.kt)("inlineCode",{parentName:"p"},"JobManager"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"JobManager")," then coordinates job execution: it splits the parallel units of a job\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"TaskManagers"),", manages heartbeats, triggers checkpoints, reacts to failures and much more."),(0,i.kt)("p",null,"Apache Flink has multiple deployment modes - Session Mode, Application Mode and Per-Job mode. The most popular\nare Session Mode and Application Mode. Session Mode consists of a ",(0,i.kt)("inlineCode",{parentName:"p"},"JobManager")," managing multiple jobs sharing single\nFlink cluster. In this mode, ",(0,i.kt)("inlineCode",{parentName:"p"},"JobClient")," is executed on a machine that submits the job to the cluster."),(0,i.kt)("p",null,"Application Mode is used where cluster is utilized for a single job. In this mode, ",(0,i.kt)("inlineCode",{parentName:"p"},"JobClient"),", where the main method runs,\nis executed on the ",(0,i.kt)("inlineCode",{parentName:"p"},"JobManager"),"."),(0,i.kt)("p",null,"Flink jobs read data from ",(0,i.kt)("inlineCode",{parentName:"p"},"Sources")," and write data to ",(0,i.kt)("inlineCode",{parentName:"p"},"Sinks"),". In contrast to systems like Apache Spark, Flink jobs can write\ndata to multiple places - they can have multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"Sinks"),"."),(0,i.kt)("h2",{id:"getting-lineage-from-flink"},"Getting lineage from Flink"),(0,i.kt)("p",null,"OpenLineage utilizes Flink's ",(0,i.kt)("inlineCode",{parentName:"p"},"JobListener")," interface. This interface is used by Flink to notify user of job submission,\nsuccessful finish of job, or job failure. Implementations of this interface are executed on ",(0,i.kt)("inlineCode",{parentName:"p"},"JobClient"),". "),(0,i.kt)("p",null,"When OpenLineage listener receives information that job was submitted, it extracts ",(0,i.kt)("inlineCode",{parentName:"p"},"Transformations")," from job's\n",(0,i.kt)("inlineCode",{parentName:"p"},"ExecutionEnvironment"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"Transformations")," represent logical operations in the dataflow graph; they are composed\nof both Flink's build-in operators, but also user-provided ",(0,i.kt)("inlineCode",{parentName:"p"},"Sources"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Sinks")," and functions. To get the lineage,\nOpenLineage integration processes dataflow graph. Currently, OpenLineage is interested only in information contained\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"Sources")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Sinks"),", as they are the places where Flink interacts with external systems. "),(0,i.kt)("p",null,"After job submission, OpenLineage integration starts actively listening to checkpoints - this gives insight into\nwhether the job runs properly."),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"Currently OpenLineage's Flink integration is limited to getting information from jobs running in Application Mode."),(0,i.kt)("p",null,"OpenLineage integration extracts lineage only from following ",(0,i.kt)("inlineCode",{parentName:"p"},"Sources")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Sinks"),":"),(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Sources"),(0,i.kt)("th",null,"Sinks")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"KafkaSource"),(0,i.kt)("td",null,"KafkaSink (1)")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"FlinkKafkaConsumer"),(0,i.kt)("td",null,"FlinkKafkaProducer")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"IcebergFlinkSource"),(0,i.kt)("td",null,"IcebergFlinkSink")))),(0,i.kt)("p",null,"We expect this list to grow as we add support for more connectors."),(0,i.kt)("p",null,"(1) KafkaSink supports sinks that write to a single topic as well as multi topic sinks. The\nlimitation for multi topic sink is that: topics need to have the same schema and implementation\nof ",(0,i.kt)("inlineCode",{parentName:"p"},"KafkaRecordSerializationSchema")," must extend ",(0,i.kt)("inlineCode",{parentName:"p"},"KafkaTopicsDescriptor"),".\nMethods ",(0,i.kt)("inlineCode",{parentName:"p"},"isFixedTopics")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getFixedTopics")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"KafkaTopicsDescriptor")," are used to extract multiple topics\nfrom a sink. "),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"In your job, you need to set up ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenLineageFlinkJobListener"),"."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    JobListener listener = JobListener listener = OpenLineageFlinkJobListener.builder()\n        .executionEnvironment(streamExecutionEnvironment)\n        .build();\n    streamExecutionEnvironment.registerJobListener(listener);\n")),(0,i.kt)("p",null,"Also, OpenLineage needs certain parameters to be set in ",(0,i.kt)("inlineCode",{parentName:"p"},"flink-conf.yaml"),":"),(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Configuration Key"),(0,i.kt)("th",null,"Description"),(0,i.kt)("th",null,"Expected Value"),(0,i.kt)("th",null,"Default")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"execution.attached"),(0,i.kt)("td",null,"This setting needs to be true if OpenLineage is to detect job start and failure"),(0,i.kt)("td",null,"true"),(0,i.kt)("td",null,"false")))),(0,i.kt)("p",null,"OpenLineage jar needs to be present on ",(0,i.kt)("inlineCode",{parentName:"p"},"JobManager"),"."),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"JobListener")," is configured, you need to point the OpenLineage integration where the events should end up.\nIf you're using ",(0,i.kt)("inlineCode",{parentName:"p"},"Marquez"),", simplest way to do that is to set up ",(0,i.kt)("inlineCode",{parentName:"p"},"OPENLINEAGE_URL")," environment\nvariable to ",(0,i.kt)("inlineCode",{parentName:"p"},"Marquez")," URL. More advanced settings are ",(0,i.kt)("a",{parentName:"p",href:"/docs/client/java"},"in the client documentation."),"."),(0,i.kt)("h2",{id:"configuring-openlineage-connector"},"Configuring Openlineage connector"),(0,i.kt)("p",null,"Flink Openlineage connector utilizes standard ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/tree/main/client/java"},"Java client for Openlineage"),"\nand allows all the configuration features present there to be used. The configuration can be passed with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"openlineage.yml")," file with a environment property ",(0,i.kt)("inlineCode",{parentName:"li"},"OPENLINEAGE_CONFIG")," being set and pointing to configuration file. File structure and allowed options are described ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OpenLineage/OpenLineage/tree/main/client/java#configuration"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"Standard Flink configuration with the parameters defined below.")),(0,i.kt)("h3",{id:"flink-configuration-parameters"},"Flink Configuration parameters"),(0,i.kt)("p",null,"The following parameters can be specified:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Definition"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"openlineage.transport.type"),(0,i.kt)("td",{parentName:"tr",align:null},"The transport type used for event emit, default type is ",(0,i.kt)("inlineCode",{parentName:"td"},"console")),(0,i.kt)("td",{parentName:"tr",align:null},"http")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"openlineage.facets.disabled"),(0,i.kt)("td",{parentName:"tr",align:null},"List of facets to disable, enclosed in ",(0,i.kt)("inlineCode",{parentName:"td"},"[]")," (required from 0.21.x) and separated by ",(0,i.kt)("inlineCode",{parentName:"td"},";")),(0,i.kt)("td",{parentName:"tr",align:null},"[","some_facet1;some_facet1","]")))),(0,i.kt)("h5",{id:"http"},"HTTP"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Definition"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"openlineage.transport.endpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"Path to resource"),(0,i.kt)("td",{parentName:"tr",align:null},"/api/v1/lineage")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"openlineage.transport.apiKey"),(0,i.kt)("td",{parentName:"tr",align:null},"An API key to be used when sending events to the OpenLineage server"),(0,i.kt)("td",{parentName:"tr",align:null},"abcdefghijk")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"openlineage.transport.timeout"),(0,i.kt)("td",{parentName:"tr",align:null},"Timeout for sending OpenLineage info in milliseconds"),(0,i.kt)("td",{parentName:"tr",align:null},"5000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"openlineage.transport.urlParams.xyz"),(0,i.kt)("td",{parentName:"tr",align:null},"A URL parameter (replace xyz) and value to be included in requests to the OpenLineage API server"),(0,i.kt)("td",{parentName:"tr",align:null},"abcdefghijk")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"openlineage.transport.url"),(0,i.kt)("td",{parentName:"tr",align:null},"The hostname of the OpenLineage API server where events should be reported, it can have other properties embeded"),(0,i.kt)("td",{parentName:"tr",align:null},"http://localhost:5000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"openlineage.transport.headers.xyz"),(0,i.kt)("td",{parentName:"tr",align:null},"Request headers (replace xyz) and value to be included in requests to the OpenLineage API server"),(0,i.kt)("td",{parentName:"tr",align:null},"abcdefghijk")))),(0,i.kt)("h6",{id:"url"},"URL"),(0,i.kt)("p",null,"You can supply http parameters using values in url, the parsed ",(0,i.kt)("inlineCode",{parentName:"p"},"openlineage.*")," properties are located in url as follows:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{transport.url}/{transport.endpoint}/namespaces/{namespace}/jobs/{parentJobName}/runs/{parentRunId}?app_name={appName}&api_key={transport.apiKey}&timeout={transport.timeout}&xxx={transport.urlParams.xxx}")),(0,i.kt)("p",null,"example:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/api/v1/namespaces/ns_name/jobs/job_name/runs/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx?app_name=app&api_key=abc&timeout=5000&xxx=xxx")),(0,i.kt)("h5",{id:"kinesis"},"Kinesis"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"openlineage.transport.type")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"kinesis"),", then the below parameters would be read and used when building KinesisProducer.\nAlso, KinesisTransport depends on you to provide artifact ",(0,i.kt)("inlineCode",{parentName:"p"},"com.amazonaws:amazon-kinesis-producer:0.14.0")," or compatible on your classpath."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Definition"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"openlineage.transport.streamName"),(0,i.kt)("td",{parentName:"tr",align:null},"Required, the streamName of the Kinesis Stream"),(0,i.kt)("td",{parentName:"tr",align:null},"some-stream-name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"openlineage.transport.region"),(0,i.kt)("td",{parentName:"tr",align:null},"Required, the region of the stream"),(0,i.kt)("td",{parentName:"tr",align:null},"us-east-2")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"openlineage.transport.roleArn"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional, the roleArn which is allowed to read/write to Kinesis stream"),(0,i.kt)("td",{parentName:"tr",align:null},"some-role-arn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"openlineage.transport.properties.","[xxx]"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional, the ","[xxx]"," is property of ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/awslabs/amazon-kinesis-producer/blob/master/java/amazon-kinesis-producer-sample/default_config.properties"},"Kinesis allowd properties")),(0,i.kt)("td",{parentName:"tr",align:null},"1")))),(0,i.kt)("h5",{id:"kafka"},"Kafka"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"openlineage.transport.type")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka"),", then the below parameters would be read and used when building KafkaProducer."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Definition"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"openlineage.transport.topicName"),(0,i.kt)("td",{parentName:"tr",align:null},"Required, name of the topic"),(0,i.kt)("td",{parentName:"tr",align:null},"topic-name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"openlineage.transport.localServerId"),(0,i.kt)("td",{parentName:"tr",align:null},"Required, id of local server"),(0,i.kt)("td",{parentName:"tr",align:null},"xxxxxxxx")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"openlineage.transport.properties.","[xxx]"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional, the ","[xxx]"," is property of Kafka client"),(0,i.kt)("td",{parentName:"tr",align:null},"1")))),(0,i.kt)("p",null,"Please note that configuration parameters provided via standard Flink configuration are translated\nto Openlineage Java client config entries and whenever new configuration feature is added\nto a Java client, it will be available for Flink users out of the box with no changes required."))}u.isMDXComponent=!0}}]);