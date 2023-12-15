"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[355],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=o,g=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return a?n.createElement(g,r(r({ref:t},p),{},{components:a})):n.createElement(g,r({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58602:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const i={title:"Tracing Data Lineage with OpenLineage and Apache Spark",date:new Date("2021-11-05T00:00:00.000Z"),authors:["Collado"],description:"Spark ushered in a brand new age of data democratization... and left us with a mess of hidden dependencies, stale datasets, and failed jobs."},r=void 0,s={permalink:"/blog/openlineage-spark",source:"@site/blog/openlineage-spark/index.mdx",title:"Tracing Data Lineage with OpenLineage and Apache Spark",description:"Spark ushered in a brand new age of data democratization... and left us with a mess of hidden dependencies, stale datasets, and failed jobs.",date:"2021-11-05T00:00:00.000Z",formattedDate:"November 5, 2021",tags:[],readingTime:12.26,hasTruncateMarker:!0,authors:[{name:"Michael Collado",title:"OpenLineage Committer",url:"https://www.github.com/collado-mike",imageURL:"https://www.github.com/collado-mike.png",key:"Collado"}],frontMatter:{title:"Tracing Data Lineage with OpenLineage and Apache Spark",date:"2021-11-05T00:00:00.000Z",authors:["Collado"],description:"Spark ushered in a brand new age of data democratization... and left us with a mess of hidden dependencies, stale datasets, and failed jobs."},prevItem:{title:"Video - OpenLineage at Data Agility Day",permalink:"/blog/data-agility-day"},nextItem:{title:"How Northwestern Mutual Simplified Data Observability with OpenLineage & Marquez",permalink:"/blog/openlineage-at-northwestern-mutual"}},l={authorsImageUrls:[void 0]},d=[{value:"The Age of Data Democratization",id:"the-age-of-data-democratization",level:2},{value:"A Colossal Mess",id:"a-colossal-mess",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"The Demo",id:"the-demo",level:2}],p={toc:d};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Spark ushered in a brand new age of data democratization... and left us with a mess of hidden dependencies, stale datasets, and failed jobs."),(0,o.kt)("h2",{id:"the-age-of-data-democratization"},"The Age of Data Democratization"),(0,o.kt)("p",null,'In 2015, Apache Spark seemed to be taking over the world. Many of us had spent the prior few years moving our large\ndatasets out of the Data Warehouse into "Data Lakes"- repositories of structured and unstructured data in\ndistributed file systems or object stores, like HDFS or S3. This enabled us to build analytic systems that could\nhandle traditional, table-structured data alongside flexible, unstructured JSON blobs, giving us access to more data\nand allowing us to move much faster than we\u2019d previously been able to.'),(0,o.kt)("p",null,"The problem was that taking the data out of Data Warehouses meant that the people who really needed access to the\ndata, analysts and statisticians, could no longer use the tools they were comfortable with in order to read that data.\nWhere previously, SQL and Python were all that was needed to start exploring and analyzing a dataset, now people needed\nto write Java or use specialized scripting languages, like Pig, to get at the data. Systems that did support SQL, such\nas Hive, were unbearably slow for any but the most basic operations. In many places, the statisticians were dependent on\nsoftware engineers to build custom tools for access, meaning the bottleneck had moved from the systems that\nneeded to store and process the data to the humans who were supposed to tell us what systems to build."),(0,o.kt)("p",null,"Then along came Apache Spark, which gave back to analysts the ability to use their beloved Python (and eventually SQL)\ntools to process raw data in object stores without the dependency on software engineers. While others were\nattracted to its ability to perform multiple operations on data without the I/O overhead of alternatives, like Pig or\nHive, data scientists were thrilled to start piping that data through their NumPy and Pandas scripts. "),(0,o.kt)("h2",{id:"a-colossal-mess"},"A Colossal Mess"),(0,o.kt)("p",null,"Of course, the natural consequence of this data democratization is that it becomes difficult to keep track of who is\nusing the data and for what purpose. Hidden dependencies and Hyrum\u2019s Law suddenly meant that changes to the data schema\nwould inadvertently break downstream processes or that stale, deprecated datasets were still being consumed, and that\ncorrupted datasets would leak into unknown processes making recovery difficult or even impossible."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://xkcd.com/1172/"},(0,o.kt)("img",{alt:"XKCD 1172",src:a(94437).Z,width:"278",height:"386"}))),(0,o.kt)("p",null,"The goal of OpenLineage is to reduce issues and speed up recovery by exposing those hidden dependencies and informing\nboth producers and consumers of data about the state of that data and the potential blast radius of changes and software\nbugs. Naturally, support for Apache Spark seemed like a good idea and, while the Spark 2.4 branch has been supported for\nsome time, the recent OpenLineage 0.3 release has explicit support for Spark 3.1. \ud83c\udf89 "),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Our approach to integrating with Spark is not super novel nor is it complicated to integrate into your own system. Spark\nhas had a SparkListener interface since before the 1.x days. If you're a heavy Spark user, it's likely you're already\nfamiliar with it and how it's used in Spark applications. OpenLineage integrates with Spark by implementing that\ninterface and collecting information about jobs that are executed inside a Spark application. To activate the\nlistener, add the following properties to your Spark configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"spark.jars.packages     io.openlineage:openlineage-spark:0.3.+\nspark.extraListeners    io.openlineage.spark.agent.OpenLineageSparkListener\n")),(0,o.kt)("p",null,"This can be added to your cluster\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"spark-defaults.conf")," file, in which case it will record lineage for every job executed on the cluster, or added to specific jobs on submission via the ",(0,o.kt)("inlineCode",{parentName:"p"},"spark-submit")," command. Once the listener is activated, it needs to know where to report lineage events, as well as the namespace of your jobs. Add the following additional configuration lines to your ",(0,o.kt)("inlineCode",{parentName:"p"},"spark-defaults.conf")," file or your Spark submission script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"spark.openlineage.host      {your.openlineage.host}\nspark.openlineage.namespace {your.openlineage.namespace}\n")),(0,o.kt)("h2",{id:"the-demo"},"The Demo"),(0,o.kt)("p",null,"Trying out the Spark integration is super easy if you already have Docker Desktop and git installed. To follow along\nwith this demo, you\u2019ll also need a Google Cloud account and a Service Account JSON key file for an account that has\naccess to BigQuery and read/write access to your GCS bucket. I added mine to a file called bq-spark-demo.json."),(0,o.kt)("p",null,"Note: If you're on macOS Monterey (macOS 12) you'll have to release port 5000 before beginning by ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/forums/thread/682332"},"disabling the AirPlay Receiver"),"."),(0,o.kt)("p",null,"Check out the OpenLineage project into your workspace with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/OpenLineage/OpenLineage\n")),(0,o.kt)("p",null,"Then cd into the integration/spark directory. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"mkdir -p docker/notebooks/gcs")," and copy your service account credentials\nfile into that directory. Then run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,o.kt)("p",null,"This launches a Jupyter notebook with Spark already installed as well as a Marquez API endpoint to report lineage. Once the notebook server is up and running, you should see something like the following text in the logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"notebook_1  | [I 21:43:39.014 NotebookApp] Jupyter Notebook 6.4.4 is running at:\nnotebook_1  | [I 21:43:39.014 NotebookApp] http://082cb836f1ec:8888/?token=507af3cf9c22f627f6c5211d6861fe0804d9f7b19a93ca48\nnotebook_1  | [I 21:43:39.014 NotebookApp]  or http://127.0.0.1:8888/?token=507af3cf9c22f627f6c5211d6861fe0804d9f7b19a93ca48\nnotebook_1  | [I 21:43:39.015 NotebookApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).\n")),(0,o.kt)("p",null,"Copy the URL with 127.0.0.1 as the hostname from your own log (the token will be different from mine) and paste it into\nyour browser window. You should have a blank Jupyter notebook environment ready to go."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Jupyter home screen",src:a(76761).Z,width:"1226",height:"377"})),(0,o.kt)("p",null,"Once your notebook environment is ready, click on the notebooks directory, then click on the New button to create a new\nPython 3 notebook."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Jupyter create new notebook",src:a(64562).Z,width:"1214",height:"365"})),(0,o.kt)("p",null,"In the first cell in the window paste the following text. Update the GCP project and bucket names and the\nservice account credentials file, then run the code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.sql import SparkSession\nimport urllib.request\n\n# download dependencies for BigQuery and GCS\ngc_jars = ['https://repo1.maven.org/maven2/com/google/cloud/bigdataoss/gcs-connector/hadoop3-2.1.1/gcs-connector-hadoop3-2.1.1-shaded.jar',\n          'https://repo1.maven.org/maven2/com/google/cloud/bigdataoss/bigquery-connector/hadoop3-1.2.0/bigquery-connector-hadoop3-1.2.0-shaded.jar',\n          'https://repo1.maven.org/maven2/com/google/cloud/spark/spark-bigquery-with-dependencies_2.12/0.22.2/spark-bigquery-with-dependencies_2.12-0.22.2.jar']\n\nfiles = [urllib.request.urlretrieve(url)[0] for url in gc_jars]\n\n\n# Set these to your own project and bucket\nproject_id = 'bq-openlineage-spark-demo'\ngcs_bucket = 'bq-openlineage-spark-demo-bucket'\ncredentials_file = '/home/jovyan/notebooks/gcs/bq-spark-demo.json'\n\nspark = (SparkSession.builder.master('local').appName('openlineage_spark_test')\n             .config('spark.jars', \",\".join(files))\n             \n             # Install and set up the OpenLineage listener\n             .config('spark.jars.packages', 'io.openlineage:openlineage-spark:0.3.+')\n             .config('spark.extraListeners', 'io.openlineage.spark.agent.OpenLineageSparkListener')\n             .config('spark.openlineage.host', 'http://marquez-api:5000')\n             .config('spark.openlineage.namespace', 'spark_integration')\n             \n             # Configure the Google credentials and project id\n             .config('spark.executorEnv.GCS_PROJECT_ID', project_id)\n             .config('spark.executorEnv.GOOGLE_APPLICATION_CREDENTIALS', '/home/jovyan/notebooks/gcs/bq-spark-demo.json')\n             .config('spark.hadoop.google.cloud.auth.service.account.enable', 'true')\n             .config('spark.hadoop.google.cloud.auth.service.account.json.keyfile', credentials_file)\n             .config('spark.hadoop.fs.gs.impl', 'com.google.cloud.hadoop.fs.gcs.GoogleHadoopFileSystem')\n             .config('spark.hadoop.fs.AbstractFileSystem.gs.impl', 'com.google.cloud.hadoop.fs.gcs.GoogleHadoopFS')\n             .config(\"spark.hadoop.fs.gs.project.id\", project_id)\n             .getOrCreate())\n")),(0,o.kt)("p",null,"Most of this is boilerplate- we need the BigQuery and GCS libraries installed in the notebook environment, then we need\nto set the configuration parameters to tell the libraries what GCP project we want to use and how to authenticate with\nGoogle. The parameters specific to OpenLineage are the four we already covered- ",(0,o.kt)("inlineCode",{parentName:"p"},"spark.jars.packages"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"spark.extraListeners"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"spark.openlineage.host"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"spark.openlineage.namespace"),". Here, we\u2019ve configured the host to be\nthe marquez-api container started by Docker."),(0,o.kt)("p",null,"Google has a wealth of information available as public datasets in BigQuery. If you\u2019re ever bored one Saturday night,\nbrowse the datasets available- you\u2019ll find census data, crime data, liquor sales, and even a black hole database. For\nthe demo, I thought I\u2019d browse some of the Covid19 related datasets they have. Specifically, there\u2019s a dataset that\nreports the likelihood of people in a given county to wear masks (broken up into five categories: ",(0,o.kt)("inlineCode",{parentName:"p"},"always"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"frequently"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"sometimes"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"rarely"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"never"),"). There\u2019s also a giant dataset called ",(0,o.kt)("inlineCode",{parentName:"p"},"covid19_open_data")," that contains things like\nvaccination rates, current totals of confirmed cases, hospitalizations, deaths, population breakdowns, and policies on\nmask-wearing, contact tracing, and vaccination-mandates. Both datasets contain the county FIPS code for US counties,\nmeaning we can join the two datasets and start exploring."),(0,o.kt)("p",null,"Create a new cell in the notebook and paste the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.sql.functions import expr, col\n\nmask_use = spark.read.format('bigquery') \\\n    .option('parentProject', project_id) \\\n    .option('table', 'bigquery-public-data:covid19_nyt.mask_use_by_county') \\\n    .load() \\\n    .select(expr(\"always + frequently\").alias(\"frequent\"),\n            expr(\"never + rarely\").alias(\"rare\"),\n            \"county_fips_code\")\n\nopendata = spark.read.format('bigquery') \\\n    .option('parentProject', project_id) \\\n    .option('table', 'bigquery-public-data.covid19_open_data.covid19_open_data') \\\n    .load() \\\n    .filter(\"country_name == 'United States of America'\") \\\n    .filter(\"date == '2021-10-31'\") \\\n    .select(\"location_key\",\n            expr('cumulative_deceased/(population/100000)').alias('deaths_per_100k'),\n            expr('cumulative_persons_fully_vaccinated/(population - population_age_00_09)').alias('vaccination_rate'),\n            col('subregion2_code').alias('county_fips_code'))\njoined = mask_use.join(opendata, 'county_fips_code')\n\njoined.write.mode('overwrite').parquet(f'gs://{gcs_bucket}/demodata/covid_deaths_and_mask_usage/')\n")),(0,o.kt)("p",null,"Again, this is standard Spark DataFrame usage. The particulars are completely irrelevant to the OpenLineage data\ncollection- we don\u2019t need to call any new APIs or change our code in any way. Here, I\u2019ve filtered\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"covid19_open_data")," table to include only U.S. data and to include the data for Halloween 2021. That dataset has a\nlarge number of columns, but for my own purposes, I\u2019m only interested in a few of them. I calculate ",(0,o.kt)("inlineCode",{parentName:"p"},"deaths_per_100k"),"\nusing the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"cumulative_deceased")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"population")," columns and I calculate the ",(0,o.kt)("inlineCode",{parentName:"p"},"vaccination_rate")," using the total\npopulation, subtracting the 0-9 year olds, since they weren\u2019t eligible for vaccination at the time. For\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"mask_use_by_county")," data, I don't really care about the difference between ",(0,o.kt)("inlineCode",{parentName:"p"},"rarely")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"never"),", so I combine them\ninto a single number. I do the same for ",(0,o.kt)("inlineCode",{parentName:"p"},"frequently")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"always"),". I join the few columns I want from the two datasets\nand store the combined result in GCS."),(0,o.kt)("p",null,"Add one more cell to the notebook and paste the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"spark.read.parquet(f'gs://{gcs_bucket}/demodata/covid_deaths_and_mask_usage/').count()\n")),(0,o.kt)("p",null,"The notebook will likely spit out a warning and a stacktrace (it should probably be a debug statement), then give you a\ntotal of 3142 records."),(0,o.kt)("p",null,"So far, so good. Now what? If this was a data science blog, we might start generating some scatter plots or doing a\nlinear regression to determine whether frequent mask usage was a predictor of high death rates or vaccination rates.\nBut since we're really focused on lineage collection, I'll leave the rest of the analysis up to those with the time and\ninclination to dig further. Instead, let's switch to exploring the lineage records we just created."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file that ships with the OpenLineage repo includes only the Jupyter notebook and the Marquez API.\nFor exploring visually, we\u2019ll also want to start up the Marquez web project. Without terminating the existing docker\ncontainers, run the following command in a new terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --network spark_default -p 3000:3000 -e MARQUEZ_HOST=marquez-api -e MARQUEZ_PORT=5000 --link marquez-api:marquez-api marquezproject/marquez-web:0.19.1\n")),(0,o.kt)("p",null,"Now open a new browser tab and navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),". You should see a screen like the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Marquez home page",src:a(40225).Z,width:"1688",height:"1308"})),(0,o.kt)("p",null,"Note the spark_integration namespace was found for us and automatically chosen, since there are no other namespaces\navailable. We can see three jobs listed on the jobs page of the UI. They all start with ",(0,o.kt)("inlineCode",{parentName:"p"},"openlineage_spark_test"),", which\nis the ",(0,o.kt)("inlineCode",{parentName:"p"},"appName")," we passed to the SparkSession we were building in the first cell of the notebook. Each query execution\nor RDD action is represented as a distinct job and the name of the action is appended to the application name to form\nthe name of the job. Clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"openlineage_spark_test.execute_insert_into_hadoop_fs_relation_command")," node, we\ncan see the lineage graph for our notebook:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Marquez job lineage",src:a(60737).Z,width:"1687",height:"1307"})),(0,o.kt)("p",null,"The graph shows the ",(0,o.kt)("inlineCode",{parentName:"p"},"openlineage_spark_test.execute_insert_into_hadoop_fs_relation_command")," job reads from two input\ndatasets, ",(0,o.kt)("inlineCode",{parentName:"p"},"bigquery-public-data.covid19_nyt.mask_use_by_county"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"bigquery-public-data.covid19_open_data.covid19_open_data"),", and writes to a third dataset,\n",(0,o.kt)("inlineCode",{parentName:"p"},"/demodata/covid_deaths_and_mask_usage"),". The namespace is missing from that third dataset- the fully qualified name is\n",(0,o.kt)("inlineCode",{parentName:"p"},"gs://<your_bucket>/demodata/covid_deaths_and_mask_usage"),"."),(0,o.kt)("p",null,"Before clicking on the datasets, though, the bottom bar shows some really interesting data that was collected from the\nSpark job. Dragging the bar up expands the view so we can get a better look at that data."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Marquez job facets",src:a(81930).Z,width:"1687",height:"1307"})),(0,o.kt)("p",null,"Two ",(0,o.kt)("a",{parentName:"p",href:"https://openlineage.io/blog/extending-with-facets/"},"facets")," that are always collected from Spark jobs are\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"spark_version")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"spark.logicalPlan"),". The first simply reports what version of Spark was executing, as well\nas the version of the ",(0,o.kt)("inlineCode",{parentName:"p"},"openlineage-spark")," library. This is helpful information to collect when trying to debug a job\nrun."),(0,o.kt)("p",null,"The second facet is the serialized optimized ",(0,o.kt)("inlineCode",{parentName:"p"},"LogicalPlan")," Spark reports when the job runs. Spark\u2019s query optimization\ncan have dramatic effects on the execution time and efficiency of the query job. Tracking how query plans change over\ntime can significantly aid in debugging slow queries or OutOfMemory errors in production."),(0,o.kt)("p",null,"Clicking on the first BigQuery dataset gives us information about the data we read:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Marquez dataset latest facet",src:a(51207).Z,width:"1686",height:"1307"})),(0,o.kt)("p",null,"Here, we can see the schema of the dataset as well as the datasource \u2014 namely BigQuery."),(0,o.kt)("p",null,"We can get similar information about the dataset written to in GCS:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Marquez output dataset latest facet",src:a(52015).Z,width:"1688",height:"1307"})),(0,o.kt)("p",null,"As in the BigQuery dataset, we can see the output schema and the datasource \u2014 here, the ",(0,o.kt)("inlineCode",{parentName:"p"},"gs://")," scheme and the name of\nthe bucket we wrote to. "),(0,o.kt)("p",null,"In addition to the schema, we also see a ",(0,o.kt)("inlineCode",{parentName:"p"},"stats")," facet, reporting the number of output records and bytes as -1. A\nsomewhat recent change to the OpenLineage schema resulted in output facets being recorded in a new field- one that\nMarquez is not yet reading from. The old, deprecated facet reports the output stats incorrectly. An upcoming bugfix\nshould correct the stats view so that we can see the number of rows written as well as the number of output bytes (the\nstatistics are actually recorded correctly- the API simply needs to start returning the correct values)."),(0,o.kt)("p",null,"You may have noticed the ",(0,o.kt)("inlineCode",{parentName:"p"},"VERSIONS")," tab on the bottom bar. We can click it, but since the job has only ever run once,\nwe\u2019ll only see one version. Clicking on the version, we\u2019ll see the same schema and statistics facets, but specific\nto the version we clicked."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Marquez output dataset version info",src:a(76543).Z,width:"1687",height:"1308"})),(0,o.kt)("p",null,"In production, this dataset would have many versions, as each time the job runs a new version of the dataset is created.\nThis allows us to track changes to the statistics and schema over time, again aiding in debugging slow jobs (suddenly,\nwe started writing 50% more records!) or data quality issues (suddenly, we\u2019re only writing half as many records as\nnormal!) and job failures (somebody changed the output schema and downstream jobs are failing!)."),(0,o.kt)("p",null,"The final job in the UI is a HashAggregate job- this represents the ",(0,o.kt)("inlineCode",{parentName:"p"},"count()")," method we called at the end to show the\nnumber of records in the dataset. Rather than a ",(0,o.kt)("inlineCode",{parentName:"p"},"count()"),", this could easily be a ",(0,o.kt)("inlineCode",{parentName:"p"},"toPandas()")," call or some other job\nthat reads and processes that data- perhaps storing output back into GCS or updating a Postgres database or publishing a\nnew model, etc. Regardless of where the output gets stored, the OpenLineage integration allows you to see the entire\nlineage graph, unifying datasets in object stores, relational databases, and more traditional data warehouses."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://xkcd.com/2347/"},(0,o.kt)("img",{alt:"XKCD 2347",src:a(46854).Z,width:"385",height:"489"}))),(0,o.kt)("p",null,"The Spark integration is still a work in progress, but users are already getting insights into their graphs of datasets\nstored in object stores like S3, GCS, and Azure Blob Storage, as well as BigQuery and relational databases like\nPostgres. Now with Spark 3.1 supported, we can gain visibility into more environments, like Databricks, EMR, and\nDataproc clusters."),(0,o.kt)("p",null,"Data lineage gives visibility to the (hopefully) high quality, (hopefully) regularly updated datasets that everyone\ndepends on, maybe without even realizing it. Spark helped usher in a welcome age of data democratization. Now data\nobservability can help ensure we\u2019re making the best possible use of the data available."))}c.isMDXComponent=!0},46854:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dependency-b50296d079052156d1cfd4981de70a44.png"},76761:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jupyter_home-2dc86f82e68de8e5f562af14a2352627.png"},64562:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jupyter_new_notebook-615ec352aa7c69dc98d86b73fd5485e9.png"},51207:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/marquez_bigquery_dataset_latest-ea115c38a4b88b4aad16f7c742d199ef.png"},40225:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/marquez_home-a520b9086c3cb2d2d471bb97f5300c69.png"},81930:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/marquez_job_facets-cb90b68c176111b854130c8608daff7d.png"},60737:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/marquez_job_graph-737ca012d1735f9d01e32b806164f824.png"},52015:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/marquez_output_dataset_latest-16f47904a2fc669b208e409d9278ecf9.png"},76543:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/marquez_output_dataset_version-63ed3dec122baf4d59e4a66cf8a3b461.png"},94437:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/workflow-60bcdebaee424553b3c757b62de0a1fe.png"}}]);