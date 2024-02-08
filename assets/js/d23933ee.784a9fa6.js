"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},65940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:5},o="Python",l={unversionedId:"client/python",id:"client/python",title:"Python",description:"Overview",source:"@site/docs/client/python.md",sourceDirName:"client",slug:"/client/python",permalink:"/docs/client/python",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/client/python.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/docs/client/java"},next:{title:"OpenLineage Integrations",permalink:"/docs/integrations/about"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Built-in Transport Types",id:"built-in-transport-types",level:3},{value:"HTTP",id:"http",level:5},{value:"Console",id:"console",level:5},{value:"Kafka",id:"kafka",level:5},{value:"File",id:"file",level:4},{value:"Custom Transport Type",id:"custom-transport-type",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install OpenLineage and Marquez",id:"install-openlineage-and-marquez",level:3},{value:"Install the Python client",id:"install-the-python-client",level:3},{value:"Start Docker and Marquez",id:"start-docker-and-marquez",level:3},{value:"Full Example Source Code",id:"full-example-source-code",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"python"},"Python"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Python client is the basis of existing OpenLineage integrations such as Airflow and dbt."),(0,i.kt)("p",null,"The client enables the creation of lineage metadata events with Python code. The core data structures currently offered by the client are the ",(0,i.kt)("inlineCode",{parentName:"p"},"RunEvent"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"RunState"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Run"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Job"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Dataset"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Transport")," classes. These either configure or collect data for the emission of lineage events."),(0,i.kt)("p",null,"You can use the client to create your own custom integrations."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Download the package using ",(0,i.kt)("inlineCode",{parentName:"p"},"pip")," with "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pip install openlineage-python\n")),(0,i.kt)("p",null,"To install the package from source, use "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python setup.py install\n")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"We recommend configuring the client with an ",(0,i.kt)("inlineCode",{parentName:"p"},"openlineage.yml")," file that tells the client how to connect to an OpenLineage backend."),(0,i.kt)("p",null,"You can make this file available to the client three ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set an environment variable to a file path: ",(0,i.kt)("inlineCode",{parentName:"li"},"OPENLINEAGE_CONFIG=path/to/openlineage.yml"),"."),(0,i.kt)("li",{parentName:"ol"},"Put the file in the working directory."),(0,i.kt)("li",{parentName:"ol"},"Put the file in ",(0,i.kt)("inlineCode",{parentName:"li"},"$HOME/.openlineage"),".")),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"openlineage.yml"),", use a standard transport interface to specify the transport type (",(0,i.kt)("inlineCode",{parentName:"p"},"http"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"console"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"file"),", or custom) and authorization parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'transport:\n  type: "http"\n  url: "https://backend:5000"\n  auth:\n    type: "api_key"\n    api_key: "f048521b-dfe8-47cd-9c65-0cb07d57591e"\n')),(0,i.kt)("p",null,"The type property (required) is a fully qualified class name that can be imported."),(0,i.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,i.kt)("p",null,"The list of available environment varaibles can be found ",(0,i.kt)("a",{parentName:"p",href:"../development/developing#environment-variables"},"here"),"."),(0,i.kt)("h3",{id:"built-in-transport-types"},"Built-in Transport Types"),(0,i.kt)("h5",{id:"http"},"HTTP"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type - string (required)"),(0,i.kt)("li",{parentName:"ul"},"url - string (required)"),(0,i.kt)("li",{parentName:"ul"},"endpoint - string specifying the endpoint to which events are sent. Default: api/v1/lineage (optional)"),(0,i.kt)("li",{parentName:"ul"},"timeout - float specifying a timeout value when sending an event. Default: 5 seconds. (optional)"),(0,i.kt)("li",{parentName:"ul"},"verify - boolean specifying whether the client should verify TLS certificates from the backend. Default: true. (optional)"),(0,i.kt)("li",{parentName:"ul"},"auth - dictionary specifying authentication options. Requires the type property. (optional)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'type - string specifying the "api_key" or the fully qualified class name of your TokenProvider. (required if ',(0,i.kt)("inlineCode",{parentName:"li"},"auth")," is provided)"),(0,i.kt)("li",{parentName:"ul"},"api_key - string setting the Authentication HTTP header as the Bearer. (required if ",(0,i.kt)("inlineCode",{parentName:"li"},"api_key")," is set)")))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"transport:\n  type: http\n  url: https://backend:5000\n  endpoint: events/receive\n  auth:\n    type: api_key\n    api_key: f048521b-dfe8-47cd-9c65-0cb07d57591e\n")),(0,i.kt)("h5",{id:"console"},"Console"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type - string (required)")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"transport:\n  type: console\n")),(0,i.kt)("h5",{id:"kafka"},"Kafka"),(0,i.kt)("p",null,"Kafka transport requires ",(0,i.kt)("inlineCode",{parentName:"p"},"confluent-kafka")," package to be additionally installed.\nIt can be installed also by specifying kafka client extension: ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install openlineage-python[kafka]")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type - string (required)"),(0,i.kt)("li",{parentName:"ul"},"config - string containing a Kafka producer config (required)"),(0,i.kt)("li",{parentName:"ul"},"topic - string specifying the topic (required)"),(0,i.kt)("li",{parentName:"ul"},"flush - boolean specifying whether Kafka should flush after each event. Default: true. (optional)")),(0,i.kt)("p",null,"There's a caveat for using ",(0,i.kt)("inlineCode",{parentName:"p"},"KafkaTransport")," with Airflow integration. In this integration, a Kafka producer needs to be created\nfor each OpenLineage event.\nIt happens due to the Airflow execution and plugin model, which requires us to send messages from worker processes.\nThese are created dynamically for each task execution."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"transport:\n  type: kafka\n  config:\n    bootstrap.servers: mybroker\n    acks: all\n    retries: 3\n  topic: my_topic\n  flush: true\n")),(0,i.kt)("h4",{id:"file"},"File"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"log_file_path - string specifying the path of the file (if append is true, a file path is expected, otherwise a file prefix is expected).  (required)"),(0,i.kt)("li",{parentName:"ul"},"append - boolean . If set to True, each event will be appended to a single file (log_file_path); otherwise, all events will be written separately in distinct files suffixed by a timestring. Default: false. (optional)")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"transport:\n  type: file\n  log_file_path: ol_events_\n  append: false\n")),(0,i.kt)("h3",{id:"custom-transport-type"},"Custom Transport Type"),(0,i.kt)("p",null,"To implement a custom transport, follow the instructions in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/blob/main/client/python/openlineage/client/transport/transport.py"},(0,i.kt)("inlineCode",{parentName:"a"},"transport.py")),"."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"To try out the client, follow the steps below to install and explore OpenLineage, Marquez (the reference implementation of OpenLineage), and the client itself. Then, the instructions will show you how to use these tools to add a run event and datasets to an existing namespace."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Docker 17.05+"),(0,i.kt)("li",{parentName:"ul"},"Docker Compose 1.29.1+"),(0,i.kt)("li",{parentName:"ul"},"Git (preinstalled on most versions of MacOS; verify your version with ",(0,i.kt)("inlineCode",{parentName:"li"},"git version"),")"),(0,i.kt)("li",{parentName:"ul"},"4 GB of available memory (the minimum for Docker \u2014 more is strongly recommended)")),(0,i.kt)("h3",{id:"install-openlineage-and-marquez"},"Install OpenLineage and Marquez"),(0,i.kt)("p",null,"Clone the Marquez Github repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/MarquezProject/marquez.git\n")),(0,i.kt)("h3",{id:"install-the-python-client"},"Install the Python client"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pip install openlineage-python\n")),(0,i.kt)("h3",{id:"start-docker-and-marquez"},"Start Docker and Marquez"),(0,i.kt)("p",null,"Start Docker Desktop\nRun Marquez with preloaded data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd marquez\n./docker/up.sh --seed\n")),(0,i.kt)("p",null,"Marquez should be up and running at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,i.kt)("p",null,"Take a moment to explore Marquez to get a sense of how metadata is displayed in the UI. Namespaces \u2013 the global contexts for runs and datasets \u2013 can be found in the top right corner, and icons for jobs and runs can be found in a tray along the left side."),(0,i.kt)("p",null,"Next, configure OpenLineage and add a script to your project that will generate a new job and new datasets within an existing namespace (here we\u2019re using the ",(0,i.kt)("inlineCode",{parentName:"p"},"food_delivery")," namespace that got passed to Marquez with the ",(0,i.kt)("inlineCode",{parentName:"p"},"\u2013seed")," argument we used earlier)."),(0,i.kt)("p",null,"Create a directory for your script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"..\nmkdir python_scripts && cd python_scripts\n")),(0,i.kt)("p",null,"In the python_scripts directory, create a Python script (we used the name ",(0,i.kt)("inlineCode",{parentName:"p"},"generate_events.py")," for ours) and an ",(0,i.kt)("inlineCode",{parentName:"p"},"openlineage.yml")," file."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"openlineage.yml"),", define a transport type and URL to tell OpenLineage where and how to send metadata:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"transport:\n  type: http\n  url: http://localhost:5000\n")),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"generate_events.py"),", import the Python client and the methods needed to create a job and datasets. Also required (to create a run): the ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid")," packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"from openlineage.client.run import RunEvent, RunState, Run, Job, Dataset\nfrom openlineage.client import OpenLineageClient\nfrom datetime import datetime\nfrom uuid import uuid4\n")),(0,i.kt)("p",null,"Then, in the same file, initialize the Python client:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"client = OpenLineageClient.from_environment()\n")),(0,i.kt)("p",null,"It is also possible to specify parameters such as URL for client to connect to, without using environment variables or ",(0,i.kt)("inlineCode",{parentName:"p"},"openlineage.yaml")," file, by directly setting it up when instantiating OpenLineageClient:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'client = OpenLineageClient(url="http://localhost:5000")\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For more details about options to setup OpenLineageClient such as API tokens or HTTP transport settings, please refer to the following ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/blob/main/client/python/tests/test_http.py"},"example"))),(0,i.kt)("p",null,"Specify the producer of the new lineage metadata with a string:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"producer = \u201cOpenLineage.io/website/blog\u201d\n")),(0,i.kt)("p",null,"Now you can create some basic dataset objects. These require a namespace and name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"inventory = Dataset(namespace=\u201cfood_delivery\u201d, name=\u201cpublic.inventory\u201d)\nmenus = Dataset(namespace=\u201cfood_delivery\u201d, name=\u201cpublic.menus_1\u201d)\norders = Dataset(namespace=\u201cfood_delivery\u201d, name=\u201cpublic.orders_1\u201d)\n")),(0,i.kt)("p",null,"You can also create a job object (we\u2019ve borrowed this one from the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"food_delivery")," namespace):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"job = Job(namespace=\u201cfood_delivery\u201d, name=\u201cexample.order_data\u201d)\n")),(0,i.kt)("p",null,"To create a run object you\u2019ll need to specify a unique ID:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"run = Run(str(uuid4()))\n")),(0,i.kt)("p",null,"a START run event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"client.emit(\n    RunEvent(\n        RunState.START,\n        datetime.now().isoformat(),\n        run, job, producer\n    )\n)\n")),(0,i.kt)("p",null,"and, finally, a COMPLETE run event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"client.emit(\n    RunEvent(\n        RunState.COMPLETE,\n        datetime.now().isoformat(),\n        run, job, producer,\n        inputs=[inventory],\n        outputs=[menus, orders],\n    )\n)\n")),(0,i.kt)("p",null,"Now you have a complete script for creating datasets and a run event! Execute it in the terminal to send the metadata to Marquez:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python3 generate_scripts.py\n")),(0,i.kt)("p",null,"Marquez will update itself automatically, so the new job and datasets should now be visible in the UI. Clicking on the jobs icon (the icon with the three interlocking gears), will make the ",(0,i.kt)("inlineCode",{parentName:"p"},"example.order_data")," job appear in the list of jobs:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"the Marquez jobs list",src:n(42763).Z,width:"1909",height:"849"})),(0,i.kt)("p",null,"When you click on the job, you will see a new map displaying the job, input and outputs we created with our script:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"the Marquez graph",src:n(62388).Z,width:"1909",height:"849"})),(0,i.kt)("h2",{id:"full-example-source-code"},"Full Example Source Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/env python3\nfrom openlineage.client.run import (\n    RunEvent,\n    RunState,\n    Run,\n    Job,\n    Dataset,\n    OutputDataset,\n    InputDataset,\n)\nfrom openlineage.client.client import OpenLineageClient, OpenLineageClientOptions\nfrom openlineage.client.facet import (\n    SqlJobFacet,\n    SchemaDatasetFacet,\n    SchemaField,\n    OutputStatisticsOutputDatasetFacet,\n    SourceCodeLocationJobFacet,\n    NominalTimeRunFacet,\n    DataQualityMetricsInputDatasetFacet,\n    ColumnMetric,\n)\nimport uuid\nfrom datetime import datetime, timezone, timedelta\nimport time\nfrom random import random\n\nPRODUCER = f"https://github.com/openlineage-user"\nnamespace = "python_client"\ndag_name = "user_trends"\n\nurl = "http://mymarquez.host:5000"\napi_key = "1234567890ckcu028rzu5l"\n\nclient = OpenLineageClient(\n    url=url,\n    # optional api key in case marquez requires it. When running marquez in\n    # your local environment, you usually do not need this.\n    options=OpenLineageClientOptions(api_key=api_key),\n)\n\n# generates job facet\ndef job(job_name, sql, location):\n    facets = {"sql": SqlJobFacet(sql)}\n    if location != None:\n        facets.update(\n            {"sourceCodeLocation": SourceCodeLocationJobFacet("git", location)}\n        )\n    return Job(namespace=namespace, name=job_name, facets=facets)\n\n\n# geneartes run racet\ndef run(run_id, hour):\n    return Run(\n        runId=run_id,\n        facets={\n            "nominalTime": NominalTimeRunFacet(\n                nominalStartTime=f"2022-04-14T{twoDigits(hour)}:12:00Z"\n            )\n        },\n    )\n\n\n# generates dataset\ndef dataset(name, schema=None, ns=namespace):\n    if schema == None:\n        facets = {}\n    else:\n        facets = {"schema": schema}\n    return Dataset(namespace, name, facets)\n\n\n# generates output dataset\ndef outputDataset(dataset, stats):\n    output_facets = {"stats": stats, "outputStatistics": stats}\n    return OutputDataset(dataset.namespace, dataset.name, dataset.facets, output_facets)\n\n\n# generates input dataset\ndef inputDataset(dataset, dq):\n    input_facets = {\n        "dataQuality": dq,\n    }\n    return InputDataset(dataset.namespace, dataset.name, dataset.facets, input_facets)\n\n\ndef twoDigits(n):\n    if n < 10:\n        result = f"0{n}"\n    elif n < 100:\n        result = f"{n}"\n    else:\n        raise f"error: {n}"\n    return result\n\n\nnow = datetime.now(timezone.utc)\n\n\n# generates run Event\ndef runEvents(job_name, sql, inputs, outputs, hour, min, location, duration):\n    run_id = str(uuid.uuid4())\n    myjob = job(job_name, sql, location)\n    myrun = run(run_id, hour)\n    st = now + timedelta(hours=hour, minutes=min, seconds=20 + round(random() * 10))\n    end = st + timedelta(minutes=duration, seconds=20 + round(random() * 10))\n    started_at = st.isoformat()\n    ended_at = end.isoformat()\n    return (\n        RunEvent(\n            eventType=RunState.START,\n            eventTime=started_at,\n            run=myrun,\n            job=myjob,\n            producer=PRODUCER,\n            inputs=inputs,\n            outputs=outputs,\n        ),\n        RunEvent(\n            eventType=RunState.COMPLETE,\n            eventTime=ended_at,\n            run=myrun,\n            job=myjob,\n            producer=PRODUCER,\n            inputs=inputs,\n            outputs=outputs,\n        ),\n    )\n\n\n# add run event to the events list\ndef addRunEvents(\n    events, job_name, sql, inputs, outputs, hour, minutes, location=None, duration=2\n):\n    (start, complete) = runEvents(\n        job_name, sql, inputs, outputs, hour, minutes, location, duration\n    )\n    events.append(start)\n    events.append(complete)\n\n\nevents = []\n\n# create dataset data\nfor i in range(0, 5):\n\n    user_counts = dataset("tmp_demo.user_counts")\n    user_history = dataset(\n        "temp_demo.user_history",\n        SchemaDatasetFacet(\n            fields=[\n                SchemaField(name="id", type="BIGINT", description="the user id"),\n                SchemaField(\n                    name="email_domain", type="VARCHAR", description="the user id"\n                ),\n                SchemaField(name="status", type="BIGINT", description="the user id"),\n                SchemaField(\n                    name="created_at",\n                    type="DATETIME",\n                    description="date and time of creation of the user",\n                ),\n                SchemaField(\n                    name="updated_at",\n                    type="DATETIME",\n                    description="the last time this row was updated",\n                ),\n                SchemaField(\n                    name="fetch_time_utc",\n                    type="DATETIME",\n                    description="the time the data was fetched",\n                ),\n                SchemaField(\n                    name="load_filename",\n                    type="VARCHAR",\n                    description="the original file this data was ingested from",\n                ),\n                SchemaField(\n                    name="load_filerow",\n                    type="INT",\n                    description="the row number in the original file",\n                ),\n                SchemaField(\n                    name="load_timestamp",\n                    type="DATETIME",\n                    description="the time the data was ingested",\n                ),\n            ]\n        ),\n        "snowflake://",\n    )\n\n    create_user_counts_sql = """CREATE OR REPLACE TABLE TMP_DEMO.USER_COUNTS AS (\n            SELECT DATE_TRUNC(DAY, created_at) date, COUNT(id) as user_count\n            FROM TMP_DEMO.USER_HISTORY\n            GROUP BY date\n            )"""\n\n    # location of the source code\n    location = "https://github.com/some/airflow/dags/example/user_trends.py"\n\n    # run simulating Airflow DAG with snowflake operator\n    addRunEvents(\n        events,\n        dag_name + ".create_user_counts",\n        create_user_counts_sql,\n        [user_history],\n        [user_counts],\n        i,\n        11,\n        location,\n    )\n\n\nfor event in events:\n    from openlineage.client.serde import Serde\n\n    print(event)\n    print(Serde.to_json(event))\n    # time.sleep(1)\n    client.emit(event)\n')),(0,i.kt)("p",null,"The resulting lineage events received by Marquez would look like this."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"the Marquez graph",src:n(5163).Z,width:"1455",height:"749"})))}d.isMDXComponent=!0},62388:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mqz_graph-8048abda4ecb6c1abee90c15d06904a8.png"},5163:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mqz_graph_example-2f26a5af6b710669500c53d8d52bedb2.png"},42763:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mqz_jobs-5f06571e8de1b089c5af43efa55d5a41.png"}}]);