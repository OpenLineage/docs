"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[427],{3905:(e,t,a)=>{a.d(t,{Zo:()=>I,kt:()=>d});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r=i.createContext({}),u=function(e){var t=i.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},I=function(e){var t=u(e.components);return i.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,I=l(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,M=c["".concat(r,".").concat(d)]||c[d]||m[d]||o;return a?i.createElement(M,s(s({ref:t},I),{},{components:a})):i.createElement(M,s({ref:t},I))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=c;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=a[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1162:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=a(7462),n=(a(7294),a(3905));const o={title:"Using Marquez to Visualize dbt Models",date:new Date("2021-09-21T00:00:00.000Z"),authors:[{name:"Ross Turk",title:"OpenLineage Committer",url:"https://www.github.com/rossturk"}],image:"./image.svg",banner:"./banner.svg",description:"Each time dbt runs, it generates a trove of metadata about datasets and the work it performs with them. In this post, I\u2019d like to show you how to harvest this metadata and put it to good use."},s=void 0,l={permalink:"/blog/dbt-with-marquez",source:"@site/blog/dbt-with-marquez/index.mdx",title:"Using Marquez to Visualize dbt Models",description:"Each time dbt runs, it generates a trove of metadata about datasets and the work it performs with them. In this post, I\u2019d like to show you how to harvest this metadata and put it to good use.",date:"2021-09-21T00:00:00.000Z",formattedDate:"September 21, 2021",tags:[],readingTime:10.1,hasTruncateMarker:!0,authors:[{name:"Ross Turk",title:"OpenLineage Committer",url:"https://www.github.com/rossturk"}],frontMatter:{title:"Using Marquez to Visualize dbt Models",date:"2021-09-21T00:00:00.000Z",authors:[{name:"Ross Turk",title:"OpenLineage Committer",url:"https://www.github.com/rossturk"}],image:"./image.svg",banner:"./banner.svg",description:"Each time dbt runs, it generates a trove of metadata about datasets and the work it performs with them. In this post, I\u2019d like to show you how to harvest this metadata and put it to good use."},prevItem:{title:"How Northwestern Mutual Simplified Data Observability with OpenLineage & Marquez",permalink:"/blog/openlineage-at-northwestern-mutual"},nextItem:{title:"Introducing OpenLineage 0.1.0",permalink:"/blog/0.1-release"}},r={image:a(7142).Z,authorsImageUrls:[void 0]},u=[],I={toc:u};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},I,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Each time dbt runs, it generates a trove of metadata about datasets and the work it performs with them. In this post, I\u2019d like to show you how to harvest this metadata and put it to good use."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(9868).Z+"#banner",width:"770",height:"190"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toc"},"")),(0,n.kt)("p",null,"The first time I built a data warehouse was in a completely different era, even though it wasn\u2019t all that long ago. It was a few dozen tables + a collection of loader scripts and an ETL tool. If I\u2019m honest, calling the whole thing a \u201cdata warehouse\u201d is a bit grandiose, but it worked."),(0,n.kt)("p",null,"At the time, my defining question was \u201chow can I make all of my most important data available for study without spending more than it\u2019s worth?\u201d Because my database capacity wasn\u2019t infinite, I couldn\u2019t keep all of my data forever. The jobs I wrote would pull data from operational data stores, perform a bunch of slicing and aggregation, and load summary data into the warehouse. They shoveled bits every night from one server to another, performing calculations in between - and that meant they had to run on a beefy server with close proximity to my data."),(0,n.kt)("p",null,"Skip forward to the current day and here I am, building and running models from a cafe over pretty shaky wifi. ",(0,n.kt)("strong",{parentName:"p"},"My, how things have changed.")),(0,n.kt)("p",null,"Cloud data warehouses like ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/"},"Google BigQuery"),", ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/redshift/"},"Amazon Redshift"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://www.snowflake.com"},"Snowflake")," have created a new economic and technological possibility: we can now pretty much just load everything - including our entire operational data stores - into a single warehouse. Once everything is in one place, data can be sliced up and analyzed much more quickly. This is where ",(0,n.kt)("a",{parentName:"p",href:"https://www.getdbt.com"},"dbt")," shines, at making transformations within a cloud data warehouse easy. And we all know what happens when you make something easy: it finds a way to happen a lot. People are doing more complex transformations than ever before, and the need for lineage context is becoming greater than ever."),(0,n.kt)("p",null,"Fortunately, each time dbt runs it generates a trove of metadata about datasets and the work it performs with them. In this post, I\u2019d like to show you how to harvest this metadata and put it to good use."),(0,n.kt)("h1",{id:"our-example"},"Our Example"),(0,n.kt)("p",null,"For our example, let\u2019s choose the kind of experiment that I might run in my day-to-day life. I\u2019m the head of marketing at ",(0,n.kt)("a",{parentName:"p",href:"https://datakin.com"},"Datakin"),", which means the metrics I\u2019m most interested in are usually about some sort of human behavior."),(0,n.kt)("p",null,"I ask questions like:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Does ","[x]"," technology space matter, and to whom? Is it waxing or waning?"),(0,n.kt)("li",{parentName:"ul"},"Are there adjacent ecosystems we should be collaborating with?"),(0,n.kt)("li",{parentName:"ul"},"Who are the influencers in this space? Who are the major contributors?"),(0,n.kt)("li",{parentName:"ul"},"What challenges are users facing? What does successful adoption look like?")),(0,n.kt)("p",null,"There are a lot of ways to try to answer these questions. None of them are any more reliable than human behavior itself, and every resulting metric requires analysis and judgment. But there are still some pretty fun things to discover. And what better data source to mine to understand technical audiences than ",(0,n.kt)("a",{parentName:"p",href:"https://www.stackoverflow.com"},"Stack Overflow"),"?"),(0,n.kt)("p",null,"So let\u2019s see what we can learn from the Stack Overflow ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/blog/topics/public-datasets/google-bigquery-public-datasets-now-include-stack-overflow-q-a"},"public data set in BigQuery"),". But not the whole thing; it is very large, so let\u2019s study just a part of it. I created a ",(0,n.kt)("a",{parentName:"p",href:"http://github.com/rossturk/stackostudy/"},"sample dbt project")," that contains a handful of models to study all of the questions and answers we can find about the topic of ELT. These models:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create slices of the key Stack Overflow tables, pulling them into a separate BigQuery project. These slices only contain the rows that are related to questions tagged with \u201celt\u201d. That way, we can query them tortuously all day long without scanning through gobs of partitions and running up our bill."),(0,n.kt)("li",{parentName:"ul"},"Augment these slices by performing some helpful calculations - in this case, the number of upvotes/downvotes per question."),(0,n.kt)("li",{parentName:"ul"},"Populate two summary tables for consumption by a BI system of some sort: a daily summary table that can be used to study trends and a user summary table that can be used to learn about the most influential contributors.")),(0,n.kt)("p",null,"This is exactly the kind of experiment I have run multiple times over the years, across numerous stacks. It\u2019s usually pretty messy. But this time, after running all of these models, we will be rewarded with a gorgeous ",(0,n.kt)("a",{parentName:"p",href:"https://marquezproject.ai/"},"Marquez")," lineage graph. We\u2019ll be able to see how everything fits together."),(0,n.kt)("h1",{id:"setting-everything-up"},"Setting Everything Up"),(0,n.kt)("p",null,"First, if you haven\u2019t already, run through the excellent ",(0,n.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/tutorial/setting-up"},"dbt tutorial"),". It will show you how to create a BigQuery project, provision a service account, download a JSON key, and set up your local dbt environment. The rest of this example assumes that you have created a BigQuery project where our models can be run, and you know how to properly configure dbt to connect to it."),(0,n.kt)("p",null,"Next, let\u2019s start a local Marquez instance to store our lineage metadata. Make sure you have Docker running, and then:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/MarquezProject/marquez.git && cd marquez\n./docker/up.sh\n")),(0,n.kt)("p",null,"Check to make sure Marquez is up by visiting ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),". You should see an empty Marquez instance with a message saying there isn\u2019t any data. Also, you should be able to see the server output from your requests in the terminal window where Marquez is running. Keep this window open until we\u2019re done."),(0,n.kt)("p",null,"Now, let\u2019s open a new terminal window/pane and clone the GitHub project containing our models:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/rossturk/stackostudy.git && cd stackostudy\n")),(0,n.kt)("p",null,"Next we need to install dbt and its integration with OpenLineage. I like to do this in a Python virtual environment because I make mistakes - as we all do - and I enjoy knowing that I can burn everything down and start over quickly if I need to. Virtual environments make this easy. To create one and install everything we need, run the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"python -m venv virtualenv\nsource virtualenv/bin/activate\npip install dbt dbt-openlineage\n")),(0,n.kt)("p",null,"dbt learns how to connect to your BigQuery project by looking for a matching profile in ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.dbt/profiles.yml"),". Create or edit this file so it contains a section with your BigQuery connection details. You will need to point to the location of a file containing the JSON key for your service account. If you aren\u2019t sure, you can follow ",(0,n.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/tutorial/create-a-project-dbt-cli#connect-to-bigquery"},"this section")," in the dbt documentation. My ",(0,n.kt)("inlineCode",{parentName:"p"},"profiles.yml")," looked like this when I was done:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"stackostudy:\n  target: dev\n  outputs:\n    dev:\n      type: bigquery\n      method: service-account\n      keyfile: /Users/rturk/.dbt/dbt-example.json\n      project: dbt-example\n      dataset: stackostudy\n      threads: 1\n      timeout_seconds: 300\n      location: US\n      priority: interactive\n")),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"dbt debug")," to make sure that you have everything configured correctly."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"% dbt debug\nRunning with dbt=0.20.1\ndbt version: 0.20.1\npython version: 3.8.12\npython path: /opt/homebrew/Cellar/dbt/0.20.1_1/libexec/bin/python3\nos info: macOS-11.5.2-arm64-arm-64bit\nUsing profiles.yml file at /Users/rturk/.dbt/profiles.yml\nUsing dbt_project.yml file at /Users/rturk/projects/stackostudy/dbt_project.yml\n\nConfiguration:\n  profiles.yml file [OK found and valid]\n  dbt_project.yml file [OK found and valid]\n\nRequired dependencies:\n - git [OK found]\n\nConnection:\n  method: service-account\n  database: stacko-study\n  schema: stackostudy\n  location: US\n  priority: interactive\n  timeout_seconds: 300\n  maximum_bytes_billed: None\n  Connection test: OK connection ok\n")),(0,n.kt)("h1",{id:"a-few-important-details"},"A Few Important Details"),(0,n.kt)("p",null,"There are a couple of considerations to make when designing dbt models for use with OpenLineage. By following these conventions, you can help OpenLineage collect the most complete metadata possible."),(0,n.kt)("p",null,"First, when working with datasets outside of your dbt project, define them in a schema YAML file inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"models/")," directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 2\n\nsources:\n  - name: stackoverflow\n    database: bigquery-public-data\n    schema: stackoverflow\n    tables:\n      - name: posts_questions\n      - name: posts_answers\n      - name: users\n      - name: votes\n")),(0,n.kt)("p",null,"This contains the name of the external dataset - in this case, ",(0,n.kt)("inlineCode",{parentName:"p"},"bigquery-public-datasets"),", and lists the tables that are used by the models in this project. It doesn\u2019t matter what the file is named, as long as it ends with ",(0,n.kt)("inlineCode",{parentName:"p"},".yml")," and is inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"models/")," directory, so I called mine ",(0,n.kt)("inlineCode",{parentName:"p"},"schema.yml")," \ud83e\udd37\u200d\u2642\ufe0f If you hardcode dataset and table names into your queries instead, dbt will likely run successfully but dataset metadata will be incompletely collected."),(0,n.kt)("p",null,"When writing queries, be sure to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"{{ ref() }}")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"{{ source() }}")," jinja functions when referring to data sources. The ",(0,n.kt)("inlineCode",{parentName:"p"},"{{ ref() }}")," function can be used to refer to tables within the same model, and the ",(0,n.kt)("inlineCode",{parentName:"p"},"{{ source() }}")," function refers to tables we have defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"schema.yml"),". That way, dbt will properly keep track of the relationships between datasets. For example, to select from both an external dataset and one in this model:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"select * from {{ source('stackoverflow', 'posts_answers') }}\nwhere parent_id in (select id from {{ ref('filtered_questions') }} )\n")),(0,n.kt)("h1",{id:"performing-a-run"},"Performing a Run"),(0,n.kt)("p",null,"Okay! We are ready to perform a run. Before we do, though, there\u2019s one last step we need to take."),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"dbt docs generate"),". This will cause dbt to create a ",(0,n.kt)("inlineCode",{parentName:"p"},"target/catalog.json")," file containing the schemas of each dataset referred to in the models. This file will be parsed by the dbt OpenLineage integration and sent to our Marquez server. If it doesn\u2019t exist, a lineage graph will still be generated but schema details won\u2019t be available in Marquez."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dbt docs generate\nRunning with dbt=0.20.1\nFound 8 models, 0 tests, 0 snapshots, 0 analyses, 164 macros, 0 operations, 0 seed files, 4 sources, 0 exposures\n\n12:15:10 | Concurrency: 1 threads (target='dev')\n12:15:10 |\n12:15:10 | Done.\n12:15:10 | Building catalog\n12:15:26 | Catalog written to /Users/rturk/projects/stackostudy/target/catalog.json\n")),(0,n.kt)("p",null,"The OpenLineage integration for dbt is implemented as a wrapper, ",(0,n.kt)("inlineCode",{parentName:"p"},"dbt-ol"),". This wrapper runs dbt and, after it completes, analyzes the ",(0,n.kt)("inlineCode",{parentName:"p"},"target/catalog.json"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"target/run_results.json")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"target/manifest.json")," files. It sends corresponding OpenLineage events to the endpoint specified in the ",(0,n.kt)("inlineCode",{parentName:"p"},"OPENLINEAGE_URL")," environment variable."),(0,n.kt)("p",null,"To run the models: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"% OPENLINEAGE_URL=http://localhost:5000 dbt-ol run\nRunning with dbt=0.20.1\nFound 8 models, 0 tests, 0 snapshots, 0 analyses, 164 macros, 0 operations, 0 seed files, 4 sources, 0 exposures\n\n12:35:41 | Concurrency: 1 threads (target='dev')\n12:35:41 |\n12:35:41 | 1 of 8 START incremental model stackostudy.filtered_questions........ [RUN]\n12:35:46 | 1 of 8 OK created incremental model stackostudy.filtered_questions... [MERGE (0.0 rows, 34.6 GB processed) in 4.52s]\n12:35:46 | 2 of 8 START incremental model stackostudy.filtered_answers.......... [RUN]\n12:35:51 | 2 of 8 OK created incremental model stackostudy.filtered_answers..... [MERGE (0.0 rows, 26.8 GB processed) in 5.22s]\n12:35:51 | 3 of 8 START incremental model stackostudy.filtered_votes............ [RUN]\n12:36:05 | 3 of 8 OK created incremental model stackostudy.filtered_votes....... [MERGE (0.0 rows, 6.5 GB processed) in 14.58s]\n12:36:05 | 4 of 8 START incremental model stackostudy.filtered_users............ [RUN]\n12:36:21 | 4 of 8 OK created incremental model stackostudy.filtered_users....... [MERGE (0.0 rows, 2.5 GB processed) in 16.09s]\n12:36:21 | 5 of 8 START view model stackostudy.summary_daily.................... [RUN]\n12:36:23 | 5 of 8 OK created view model stackostudy.summary_daily............... [OK in 1.01s]\n12:36:23 | 6 of 8 START view model stackostudy.answer_stats..................... [RUN]\n12:36:23 | 6 of 8 OK created view model stackostudy.answer_stats................ [OK in 0.96s]\n12:36:23 | 7 of 8 START view model stackostudy.question_stats................... [RUN]\n12:36:24 | 7 of 8 OK created view model stackostudy.question_stats.............. [OK in 0.88s]\n12:36:24 | 8 of 8 START view model stackostudy.user_stats....................... [RUN]\n12:36:26 | 8 of 8 OK created view model stackostudy.user_stats.................. [OK in 1.21s]\n12:36:26 |\n12:36:26 | Finished running 4 incremental models, 4 view models in 45.39s.\n\nCompleted successfully\n\nDone. PASS=8 WARN=0 ERROR=0 SKIP=0 TOTAL=8\nEmitted 16 openlineage events\n")),(0,n.kt)("p",null,"Note the output showing the number of OpenLineage events emitted to Marquez."),(0,n.kt)("h1",{id:"reviewing-the-output"},"Reviewing the Output"),(0,n.kt)("p",null,"If everything ran successfully you should be able to see a list of jobs when you navigate to http://localhost:3000. Upon clicking a job, you will see a lineage graph that looks similar to this:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The stackostudy Marquez lineage graph",src:a(7317).Z,width:"2274",height:"1204"})),(0,n.kt)("p",null,"Our set of models, previously represented by SQL inside text files, has become more easily digestible. The dependencies between datasets are now completely obvious. Data engineers can throw away their remaining whiteboards, hooray!"),(0,n.kt)("p",null,"There\u2019s something satisfying about seeing models represented in two-dimensional space. But more importantly, this integration allows us to capture the state of a dbt pipeline as it runs. Using a long-running instance of Marquez (or another OpenLineage-compatible metadata repository) this information can be studied as it changes over time."),(0,n.kt)("p",null,"To see how the OpenLineage dbt integration works, visit its ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/tree/main/integration/dbt"},"GitHub repository"),"."))}m.isMDXComponent=!0},9868:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc3MCAxOTAiIHdpZHRoPSIxMDAlIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnZlY3Rvcm5hdG9yPSJodHRwOi8vdmVjdG9ybmF0b3IuaW8iIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPGRlZnMvPgo8Y2xpcFBhdGggaWQ9IkFydGJvYXJkRnJhbWUiPgo8cmVjdCBoZWlnaHQ9IjE5MCIgd2lkdGg9Ijc3MCIgeD0iMCIgeT0iMCIvPgo8L2NsaXBQYXRoPgo8ZyBjbGlwLXBhdGg9InVybCgjQXJ0Ym9hcmRGcmFtZSkiIGlkPSJVbnRpdGxlZCIgdmVjdG9ybmF0b3I6bGF5ZXJOYW1lPSJVbnRpdGxlZCI+CjxwYXRoIGQ9Ik0tNy42LTE1MS4zMUw2NzIuNC0xNTEuMzFMNjcyLjQtMTUxLjMxTDY3Mi40IDI5NC42NEw2NzIuNCAyOTQuNjRMLTcuNiAyOTQuNjRMLTcuNiAyOTQuNjRMLTcuNi0xNTEuMzFMLTcuNi0xNTEuMzFaIiBmaWxsPSIjY2ZjOGMwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjg5LjkgMjU4LjM5TDc4NC42IDE4OC42OUw3MjMuNC0yMzQuNjFMMjI4LjctMTY0LjkxTDI4OS45IDI1OC4zOVoiIGZpbGw9IiMwMTAxMDEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik04Ny42IDI1OC4zOUw4MjguOCA0MTQuNzlMOTMyLjUtODVMMTkxLjMtMjM5LjcxTDg3LjYgMjU4LjM5WiIgZmlsbD0iIzJhMzExNyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTEyOC40LTE0NC41MUwtMjM4LjggODguMzlMOS40IDQ3Ny42OUwzNzYuNiAyNDQuNzlMMTI4LjQtMTQ0LjUxWiIgZmlsbD0iIzc2N2U0NiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTM5My42IDIxMi40OUw0NTMuMSA0MzAuMDlMNzE4LjMgMzU3TDY1OC44IDEzOS40TDM5My42IDIxMi40OVoiIGZpbGw9IiMxZTJhMTYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xMDIuOS01Mi43MUwyMS4zIDI3MC4yOUwxMjYuNyAyOTUuNzlMMjA4LjMtMjcuMjFMMTAyLjktNTIuNzFaIiBmaWxsPSIjYzNkMWE2IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTUzLjktOTEuODFMMTM4LjYgMjIuMDlMNjk5LjYgOTAuMDlMNzE0LjktMjMuODFMMTUzLjktOTEuODFaIiBmaWxsPSIjNTE2NDdjIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNy43IDE3TDIuNiA1Ni4wOUwzMTIgODYuNjlMMzE3LjEgNDcuNTlMNy43IDE3WiIgZmlsbD0iIzAzODU4ZSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTS0yLjUgNTcuNzlMLTIyLjkgMTM5LjM5TDE3OS40IDE5MC4zOUwxOTkuOCAxMDguNzlMLTIuNSA1Ny43OVoiIGZpbGw9IiNmZmUyODQiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik05Mi43LTE0MS4xMUwtMTgxIDQ5LjI5TC0xMTguMSAxMzUuOTlMMTUzLjktNTQuNDFMOTIuNy0xNDEuMTFaIiBmaWxsPSIjZDU5MTY0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTcyLjEtOTUuMjFMODI3LjEgMzU3TDk5OC44IDI2MC4xTDc0My44LTE5MC40TDU3Mi4xLTk1LjIxWiIgZmlsbD0iIzA4MjAyNyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI5Ni43IDE4LjY5TDMxMy43IDE4MS44OUw4MzUuNiAxMjQuMDlMODE4LjYtMzkuMTFMMjk2LjcgMTguNjlaIiBmaWxsPSIjNzk2MTNlIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjQwLjYgMTMyLjU5TDU3IDM2My43OUwxMTkuOSA0MTMuMDlMMzAzLjUgMTgxLjg5TDI0MC42IDEzMi41OVoiIGZpbGw9IiMwMTAxMDEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik02NTcuMSA5Ni44OUwyOTEuNiAxMTIuMTlMMjkxLjYgMTI1Ljc5TDY1Ny4xIDExMC40OUw2NTcuMSA5Ni44OVoiIGZpbGw9IiNmM2M5MTUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yMTguNSAxMjUuNzlMNzUyLjMgMTMwLjg5TDc1Mi4zIDEyNC4wOUwyMTguNSAxMTlMMjE4LjUgMTI1Ljc5WiIgZmlsbD0iIzAxMDEwMSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTU1MS43IDkwLjA5TDc0NS41IDk4LjU5TDc0NS41IDg1TDU1MS43IDc2LjVMNTUxLjcgOTAuMDlaIiBmaWxsPSIjZWQyMjI0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMTA2LjMgNDIuNDlMMTA0LjYgNTkuNDlMMTE1My41IDgzLjI5TDExNTUuMiA2Ni4yOUwxMDYuMyA0Mi40OVoiIGZpbGw9IiMyYjk5ZDUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01NDYuNiA3NC43OUwtMTIxLjUgODEuNTlMLTExOS44IDk2Ljg5TDU0Ni42IDkwLjA5TDU0Ni42IDc0Ljc5WiIgZmlsbD0iI2VkMjIyNCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI2LjQgMTguNjlMMTQ4LjggNTQuMzlMMTY3LjUtOC41MUw0NS4xLTQ0LjIxTDI2LjQgMTguNjlaIiBmaWxsPSIjZjJkMGFkIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8L2c+Cjwvc3ZnPgo="},7317:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/graph-3c5ae5c92d39d6f5756806a69afd2809.png"},7142:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjwhLS0gQ3JlYXRlZCB3aXRoIFZlY3Rvcm5hdG9yIChodHRwOi8vdmVjdG9ybmF0b3IuaW8vKSAtLT4KPHN2ZyBoZWlnaHQ9IjEwMCUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3R5bGU9ImZpbGwtcnVsZTpub256ZXJvO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDYwMCA0MzUiIHdpZHRoPSIxMDAlIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnZlY3Rvcm5hdG9yPSJodHRwOi8vdmVjdG9ybmF0b3IuaW8iIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPGRlZnMvPgo8Y2xpcFBhdGggaWQ9IkFydGJvYXJkRnJhbWUiPgo8cmVjdCBoZWlnaHQ9IjQzNSIgd2lkdGg9IjYwMCIgeD0iMCIgeT0iMCIvPgo8L2NsaXBQYXRoPgo8ZyBjbGlwLXBhdGg9InVybCgjQXJ0Ym9hcmRGcmFtZSkiIGlkPSJVbnRpdGxlZCIgdmVjdG9ybmF0b3I6bGF5ZXJOYW1lPSJVbnRpdGxlZCI+CjxwYXRoIGQ9Ik0tNDAuOC0xNC44MUw2MzkuMi0xNC44MUw2MzkuMi0xNC44MUw2MzkuMiA0MzEuMTRMNjM5LjIgNDMxLjE0TC00MC44IDQzMS4xNEwtNDAuOCA0MzEuMTRMLTQwLjgtMTQuODFMLTQwLjgtMTQuODFaIiBmaWxsPSIjY2ZjOGMwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjU2LjcgMzk0Ljg5TDc1MS40IDMyNS4xOUw2OTAuMi05OC4xMUwxOTUuNS0yOC40MUwyNTYuNyAzOTQuODlaIiBmaWxsPSIjMDEwMTAxIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNLTgyLjQ1IDM5NS40N0w2NTguNzUgNTUxLjg3TDc2Mi40NSA1Mi4wN0wyMS4yNS0xMDIuNjNMLTgyLjQ1IDM5NS40N1oiIGZpbGw9IiMyYTMxMTciIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik05NS4yLThMLTI3MiAyMjQuODlMLTIzLjggNjE0LjE5TDM0My40IDM4MS4yOUw5NS4yLThaIiBmaWxsPSIjNzY3ZTQ2IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjAwLjYgMjkxLjE5TDEwLjIgNDY2LjI5TDY5LjcgNTI5LjE5TDI2MC4xIDM1NC4wOUwyMDAuNiAyOTEuMTlaIiBmaWxsPSIjMDEwMTAxIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzYwLjQgMzQ5TDQxOS45IDU2Ni42TDY4NS4xIDQ5My41TDYyNS42IDI3NS45TDM2MC40IDM0OVoiIGZpbGw9IiMxZTJhMTYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik02OS43IDgzLjc5TC0xMS45IDQwNi43OUw5My41IDQzMi4yOUwxNzUuMSAxMDkuMjlMNjkuNyA4My43OVoiIGZpbGw9IiNjM2QxYTYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xMjAuNyA0NC42OUwxMDUuNCAxNTguNTlMNjY2LjQgMjI2LjU5TDY4MS43IDExMi42OUwxMjAuNyA0NC42OVoiIGZpbGw9IiM1MTY0N2MiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yODAuNSAzNDUuNTlMMjc4LjggMzYwLjg5TDEwODYuMyAzNjQuMjlMMTA4OCAzNDlMMjgwLjUgMzQ1LjU5WiIgZmlsbD0iI2Y2ZWMxYiIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI4OSAzNTQuMDlMOTYuOSA2MDUuNjlMMjU2LjcgNzI0LjY5TDQ0OC44IDQ3My4wOUwyODkgMzU0LjA5WiIgZmlsbD0iI2JiZTBjOCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTS0yNS41IDE1My40OUwtMzAuNiAxOTIuNTlMMjc4LjggMjIzLjE5TDI4My45IDE4NC4wOUwtMjUuNSAxNTMuNDlaIiBmaWxsPSIjMDM4NThlIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNLTkwLjk1IDI4Mi42OUwtMTExLjM1IDM2NC4yOUw5MC45NSA0MTUuMjlMMTExLjM1IDMzMy42OUwtOTAuOTUgMjgyLjY5WiIgZmlsbD0iI2ZmZTI4NCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTc4LjIgMzcyLjc5TC00NS45IDM5Ni41OUwzNS43IDgxOC4xOUwxNTkuOCA3OTQuMzlMNzguMiAzNzIuNzlaIiBmaWxsPSIjNGFiOTcwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTkuNS00LjYxTC0yMTQuMiAxODUuNzlMLTE1MS4zIDI3Mi40OUwxMjAuNyA4Mi4wOUw1OS41LTQuNjFaIiBmaWxsPSIjZDU5MTY0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDE5LjkgMzg5Ljc5TDQxOC4yIDQyNy4xOUw2NzguMyA0MjcuMTlMNjgwIDM4OS43OUw0MTkuOSAzODkuNzlaIiBmaWxsPSIjMTIxMzQ1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMzAuNi0xMS40MUw0ODYuMiAwLjQ5TDQ4Ni4yLTE0LjgxTDMwLjYtMjVMMzAuNi0xMS40MVoiIGZpbGw9IiNlMjEyNmYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik01MzguOSA0MS4yOUw3OTMuOSA0OTMuNDlMOTY1LjYgMzk2LjU5TDcxMC42LTUzLjkxTDUzOC45IDQxLjI5WiIgZmlsbD0iIzA4MjAyNyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTI2My41IDE1NS4xOUwyODAuNSAzMTguMzlMODAyLjQgMjYwLjU5TDc4NS40IDk3LjM5TDI2My41IDE1NS4xOVoiIGZpbGw9IiM3OTYxM2UiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0yMDcuNCAyNjkuMDlMMjMuOCA1MDAuMjlMODYuNyA1NDkuNTlMMjcwLjMgMzE4LjM5TDIwNy40IDI2OS4wOVoiIGZpbGw9IiMwMTAxMDEiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xNDIuOCA0M0wxNDEuMSA2MEw0NDIgODAuMzlMNDQzLjcgNjMuMzlMMTQyLjggNDNaIiBmaWxsPSIjZjQ5MjFmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNzgzLjcgMzk3LjQ0TDQxOC4yIDQxMi43NEw0MTguMiA0MjYuMzRMNzgzLjcgNDExTDc4My43IDM5Ny40NFoiIGZpbGw9IiNmM2M5MTUiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0zMTcuOSAzOTQuODlMNTIuNyA0MjAuMzlMNTkuNSA0OTAuMDlMMzI0LjcgNDY0LjU5TDMxNy45IDM5NC44OVoiIGZpbGw9IiM2YWNiZGIiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0xODUuMyAyNjIuMjlMNzE5LjEgMjY3LjM5TDcxOS4xIDI2MC41OUwxODUuMyAyNTUuNDlMMTg1LjMgMjYyLjI5WiIgZmlsbD0iIzAxMDEwMSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTTUxOC41IDIyNi41OUw3MTIuMyAyMzUuMDlMNzEyLjMgMjIxLjQ5TDUxOC41IDIxM0w1MTguNSAyMjYuNTlaIiBmaWxsPSIjZWQyMjI0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNDk5LjggMy44OUw4ODQgNzAuMTlMODk0LjIgMy44OUw1MTAtNjAuNzFMNDk5LjggMy44OVoiIGZpbGw9IiNjNTRjMjciIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik00OS4zIDk3LjM5TDYxLjIgMTI2LjI5TDE3My40IDgwLjM5TDE2MS41IDUxLjQ5TDQ5LjMgOTcuMzlaIiBmaWxsPSIjMjUwZTE0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNMjE5LjMgMTIuMzlMMjE3LjYgMzkuNTlMNjM1LjggNjBMNjM3LjUgMzIuOEwyMTkuMyAxMi4zOVoiIGZpbGw9IiMwNTVlODIiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik05My41IDE3LjQ5TDE3MS43IDM2LjE5TDE4OC43LTM2LjkxTDExMC41LTU1LjYxTDkzLjUgMTcuNDlaIiBmaWxsPSIjZmRmNmFiIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNNTkuNSA3My41OUwtNDM1LjItMTMuMTFMLTQ0MiAyNy42OUw1MSAxMTQuMzlMNTkuNSA3My41OVoiIGZpbGw9IiNiMDUwMjYiIGZpbGwtcnVsZT0ibm9uemVybyIgb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIi8+CjxwYXRoIGQ9Ik0tNi44IDE1NS4xOUwxMTUuNiAxOTAuODlMMTM0LjMgMTI4TDExLjkgOTIuMjlMLTYuOCAxNTUuMTlaIiBmaWxsPSIjZjJkMGFkIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNLTExLjktNC42MUwtMTEuOSAzMi43OUwxOTMuOCAzMS4wOUwxOTMuOC02LjMxTC0xMS45LTQuNjFaIiBmaWxsPSIjZmJmNWFiIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG9wYWNpdHk9IjEiIHN0cm9rZT0ibm9uZSIvPgo8cGF0aCBkPSJNOC41IDQxMS44OUwtMTI3LjUgNTI3LjQ5TC01LjEgNjY4LjU5TDEzMC45IDU1M0w4LjUgNDExLjg5WiIgZmlsbD0iIzAxMDEwMSIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPHBhdGggZD0iTS0zNS43IDQwMEwxMDAuMyA0MDBMMTAwLjMgMzQ3LjNMLTM1LjcgMzQ3LjNMLTM1LjcgNDAwWiIgZmlsbD0iI2Y3ZWU1NyIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiLz4KPC9nPgo8L3N2Zz4K"}}]);