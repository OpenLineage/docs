"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6519],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=i,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return t?a.createElement(f,o(o({ref:n},p),{},{components:t})):a.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6219:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const r={sidebar_position:1},o="Column Level Lineage Dataset Facet",l={unversionedId:"spec/facets/dataset-facets/column_lineage_facet",id:"spec/facets/dataset-facets/column_lineage_facet",title:"Column Level Lineage Dataset Facet",description:"Column level lineage provides fine grained information on datasets' dependencies.",source:"@site/docs/spec/facets/dataset-facets/column_lineage_facet.md",sourceDirName:"spec/facets/dataset-facets",slug:"/spec/facets/dataset-facets/column_lineage_facet",permalink:"/docs/spec/facets/dataset-facets/column_lineage_facet",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/spec/facets/dataset-facets/column_lineage_facet.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Dataset Facets",permalink:"/docs/spec/facets/dataset-facets/"},next:{title:"Datasource Facet",permalink:"/docs/spec/facets/dataset-facets/data_source"}},s={},d=[{value:"Transformation Type",id:"transformation-type",level:2},{value:"Type",id:"type",level:4},{value:"Subtype",id:"subtype",level:4},{value:"Masking",id:"masking",level:4}],p={toc:d};function u(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"column-level-lineage-dataset-facet"},"Column Level Lineage Dataset Facet"),(0,i.kt)("p",null,"Column level lineage provides fine grained information on datasets' dependencies.\nNot only we know the dependency exist, but we are also able to understand\nwhich input columns are used to produce which output columns and in what way.\nThis allows answering questions like ",(0,i.kt)("em",{parentName:"p"},"Which root input columns are used to construct column x?")," "),(0,i.kt)("p",null,"For example, a Job might executes the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO top_delivery_times (\n    order_id,\n    order_placed_on,\n    order_delivered_on,\n    order_delivery_time\n)\nSELECT\n    order_id,\n    order_placed_on,\n    order_delivered_on,\n    DATEDIFF(minute, order_placed_on, order_delivered_on) AS order_delivery_time,\nFROM delivery_7_days\nORDER BY order_delivery_time DESC\nLIMIT 1;\n")),(0,i.kt)("p",null,"This would establish the following relationships between the ",(0,i.kt)("inlineCode",{parentName:"p"},"delivery_7_days")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"top_delivery_times")," tables:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:t(389).Z,width:"716",height:"287"})),(0,i.kt)("p",null,"An OpenLinage run state update that represent this query using column-level lineage facets might look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "eventType": "START",\n    "eventTime": "2020-02-22T22:42:42.000Z",\n    "run": ...,\n    "job": ...,\n    "inputs": [\n        {\n          "namespace": "food_delivery",\n          "name": "public.delivery_7_days"\n        }\n    ],\n    "outputs": [\n        {\n            "namespace": "food_delivery",\n            "name": "public.top_delivery_times",\n            "facets": {\n                "columnLineage": {\n                    "_producer": "https://github.com/MarquezProject/marquez/blob/main/docker/metadata.json",\n                    "_schemaURL": "https://openlineage.io/spec/facets/1-0-1/ColumnLineageDatasetFacet.json",\n                    "fields": {\n                        "order_id": {\n                            "inputFields": [\n                                {\n                                    "namespace": "food_delivery",\n                                    "name": "public.delivery_7_days",\n                                    "field": "order_id",\n                                    "transformations": [\n                                        {\n                                            "type": "DIRECT",\n                                            "subtype": "IDENTITY",\n                                            "description": "",\n                                            "masking": false\n                                        }\n                                    ]\n                                },\n                                {\n                                    "namespace": "food_delivery",\n                                    "name": "public.delivery_7_days",\n                                    "field": "order_placed_on",\n                                    "transformations": [\n                                        {\n                                            "type": "INDIRECT",\n                                            "subtype": "SORT",\n                                            "description": "",\n                                            "masking": false\n                                        }\n                                    ]\n                                },\n                                {\n                                    "namespace": "food_delivery",\n                                    "name": "public.delivery_7_days",\n                                    "field": "order_delivered_on",\n                                    "transformations": [\n                                        {\n                                            "type": "INDIRECT",\n                                            "subtype": "SORT",\n                                            "description": "",\n                                            "masking": false\n                                        }\n                                    ]\n                                }\n                            ]\n                        },\n                        "order_placed_on": {\n                            "inputFields": [\n                                {\n                                    "namespace": "food_delivery",\n                                    "name": "public.delivery_7_days",\n                                    "field": "order_placed_on",\n                                    "transformations": [\n                                        {\n                                            "type": "DIRECT",\n                                            "subtype": "IDENTITY",\n                                            "description": "",\n                                            "masking": false\n                                        },\n                                        {\n                                            "type": "INDIRECT",\n                                            "subtype": "SORT",\n                                            "description": "",\n                                            "masking": false\n                                        }\n                                    ]                                  \n                                },\n                                {\n                                    "namespace": "food_delivery",\n                                    "name": "public.delivery_7_days",\n                                    "field": "order_delivered_on",\n                                    "transformations": [\n                                        {\n                                            "type": "INDIRECT",\n                                            "subtype": "SORT",\n                                            "description": "",\n                                            "masking": false\n                                        }\n                                    ]\n                                }\n                            ]\n                        },\n                        "order_delivered_on": {\n                            "inputFields": [\n                                {\n                                    "namespace": "food_delivery",\n                                    "name": "public.delivery_7_days",\n                                    "field": "order_delivered_on",\n                                    "transformations": [\n                                        {\n                                            "type": "DIRECT",\n                                            "subtype": "IDENTITY",\n                                            "description": "",\n                                            "masking": false\n                                        },\n                                        {\n                                            "type": "INDIRECT",\n                                            "subtype": "SORT",\n                                            "description": "",\n                                            "masking": false\n                                        }\n                                    ]\n                                },\n                                {\n                                    "namespace": "food_delivery",\n                                    "name": "public.delivery_7_days",\n                                    "field": "order_placed_on",\n                                    "transformations": [\n                                        {\n                                            "type": "INDIRECT",\n                                            "subtype": "SORT",\n                                            "description": "",\n                                            "masking": false\n                                        }\n                                    ]\n                                }\n                            ]\n                        },\n                        "order_delivery_time": {\n                            "inputFields": [\n                                {\n                                    "namespace": "food_delivery",\n                                    "name": "public.delivery_7_days",\n                                    "field": "order_placed_on",\n                                    "transformations": [\n                                        {\n                                            "type": "DIRECT",\n                                            "subtype": "TRANSFORMATION",\n                                            "description": "",\n                                            "masking": false\n                                        },\n                                        {\n                                          "type": "INDIRECT",\n                                          "subtype": "SORT",\n                                          "description": "",\n                                          "masking": false\n                                        }\n                                    ]\n                                },\n                                {\n                                    "namespace": "food_delivery",\n                                    "name": "public.delivery_7_days",\n                                    "field": "order_delivered_on",\n                                    "transformations": [\n                                        {\n                                            "type": "DIRECT",\n                                            "subtype": "TRANSFORMATION",\n                                            "description": "",\n                                            "masking": false\n                                        },\n                                        {\n                                          "type": "INDIRECT",\n                                          "subtype": "SORT",\n                                          "description": "",\n                                          "masking": false\n                                        }\n                                    ]\n                                }\n                            ]\n                        }\n                    }\n                }\n            }\n        }\n    ],\n    ...\n}\n')),(0,i.kt)("p",null,"The facet specification can be found ",(0,i.kt)("a",{parentName:"p",href:"https://openlineage.io/spec/facets/1-1-0/ColumnLineageDatasetFacet.json"},"here"),"."),(0,i.kt)("h2",{id:"transformation-type"},"Transformation Type"),(0,i.kt)("p",null,"To provide the best information about each field lineage, each ",(0,i.kt)("inlineCode",{parentName:"p"},"inputField")," of an output can contain\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"transformations")," field. This field describes what is the nature of relation between the input and the output columns.\nEach transformation is described by 4 fields: ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"subtype"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"masking"),". "),(0,i.kt)("h4",{id:"type"},"Type"),(0,i.kt)("p",null,"Indicates how direct is the relationship e.g. in query "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-roomsql"},"SELECT \n    source AS result \nFROM TAB \nWHERE pred = true;\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"DIRECT")," - output column value was somehow derived from ",(0,i.kt)("inlineCode",{parentName:"li"},"inputField")," value. In example ",(0,i.kt)("inlineCode",{parentName:"li"},"result")," value is derived from ",(0,i.kt)("inlineCode",{parentName:"li"},"source")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"INDIRECT")," - output column value is impacted by the value of ",(0,i.kt)("inlineCode",{parentName:"li"},"inputField")," column, but it's not derived from it. In example no part ",(0,i.kt)("inlineCode",{parentName:"li"},"result")," value is derived from ",(0,i.kt)("inlineCode",{parentName:"li"},"pred")," but ",(0,i.kt)("inlineCode",{parentName:"li"},"pred")," has impact on the values of ",(0,i.kt)("inlineCode",{parentName:"li"},"result")," in the output dataset ")),(0,i.kt)("h4",{id:"subtype"},"Subtype"),(0,i.kt)("p",null,"Contains more specific information about the transformation\nDirect"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Identity - output value is taken as is from the input"),(0,i.kt)("li",{parentName:"ul"},"Transformation - output value is transformed source value from input row "),(0,i.kt)("li",{parentName:"ul"},"Aggregation - output value is aggregation of source values from multiple input rows\nIndirect"),(0,i.kt)("li",{parentName:"ul"},"Join - input used in join condition"),(0,i.kt)("li",{parentName:"ul"},"GroupBy - output is aggregated based on input (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"GROUP BY")," clause)"),(0,i.kt)("li",{parentName:"ul"},"Filter - input used as a filtering condition (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"WHERE")," clause)"),(0,i.kt)("li",{parentName:"ul"},"Order - output is sorted based on input field"),(0,i.kt)("li",{parentName:"ul"},"Window - output is windowed based on input field"),(0,i.kt)("li",{parentName:"ul"},"Conditional - input value is used in ",(0,i.kt)("inlineCode",{parentName:"li"},"IF")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"CASE WHEN")," statements")),(0,i.kt)("h4",{id:"masking"},"Masking"),(0,i.kt)("p",null,"Boolean value indicating if the input value was obfuscated during the transformation.\nThe examples are: ",(0,i.kt)("inlineCode",{parentName:"p"},"hash")," for Transformation and ",(0,i.kt)("inlineCode",{parentName:"p"},"count")," for Aggregation.\nList of available methods that are considered masking is dependent on the source system."))}u.isMDXComponent=!0},389:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/column_lineage_facet-76961a507e1d14d6972995d33283d7f5.svg"}}]);