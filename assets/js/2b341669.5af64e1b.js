"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[44717],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||s[c]||i;return n?a.createElement(k,l(l({ref:e},m),{},{components:n})):a.createElement(k,l({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35463:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],o={title:"",sidebar_label:"Application Charts"},p="Customization point: Application Charts",d={unversionedId:"references/customization/appcharts",id:"version-1.3.0/references/customization/appcharts",title:"",description:"Epinio uses Application charts as templates for the structure of deployed applications,",source:"@site/versioned_docs/version-1.3.0/references/customization/appcharts.md",sourceDirName:"references/customization",slug:"/references/customization/appcharts",permalink:"/references/customization/appcharts",draft:!1,editUrl:"https://github.com/epinio/docs/versioned_docs/version-1.3.0/references/customization/appcharts.md",tags:[],version:"1.3.0",frontMatter:{title:"",sidebar_label:"Application Charts"},sidebar:"docs",previous:{title:"epinio settings update-ca",permalink:"/references/commands/cli/settings/epinio_settings_update-ca"},next:{title:"Service Catalog",permalink:"/references/customization/catalog"}},m={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Pods",id:"pods",level:2}],u={toc:s};function c(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"customization-point-application-charts"},"Customization point: Application Charts"),(0,i.kt)("p",null,"Epinio uses Application charts as templates for the structure of deployed applications,\ni.e. of the kubernetes resources used to run an application image."),(0,i.kt)("p",null,"An installation of Epinio provides a single standard application chart."),(0,i.kt)("p",null,"If custom application charts adapted to the local environment are desired or needed please\nfollow the instructions on\n",(0,i.kt)("a",{parentName:"p",href:"/howtos/create_custom_appcharts"},"How To create custom application Helm charts"),"\nand\n",(0,i.kt)("a",{parentName:"p",href:"/howtos/using_custom_appcharts"},"How To use custom application Helm charts"),"."),(0,i.kt)("p",null,"Application charts are expected to create the following resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"StatefulSet"),", or similar main controller, specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"Pod")," and\nits containers running the application image.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," to route web requests to the application.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An ",(0,i.kt)("a",{parentName:"p",href:"/references/customization/lb"},"Ingress")," per specified route to front the ",(0,i.kt)("inlineCode",{parentName:"p"},"Service"),"."))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Up to version 1 Epinio allowed only ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment")," resources as the main controller of\napplications.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Read the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/epinio/helm-charts/tree/main/chart/application"},"contents of the standard application chart"),".")),(0,i.kt)("h1",{id:"further-expectations"},"Further Expectations"),(0,i.kt)("p",null,"Application Charts are expected to heed the following contraints to enable their use by\nEpinio:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It has to support all of the configuration values described in section\n",(0,i.kt)("a",{parentName:"p",href:"#configuration"},"Configuration")," below.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pod resources have to have a number of annotations and labels for Epinio to locate\nand use them, as described in section ",(0,i.kt)("a",{parentName:"p",href:"#pods"},"Pods")," below."))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"While a custom chart is free to support more configuration values Epinio will have no\nknowledge of them, and will not use them.")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"All configuration fields below are provied in the ",(0,i.kt)("inlineCode",{parentName:"p"},"epinio")," hierarchy:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Kind"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"appName")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The application's name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"configurations")),(0,i.kt)("td",{parentName:"tr",align:null},"sequence (string)"),(0,i.kt)("td",{parentName:"tr",align:null},"The names of the configurations to import into the application")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env")),(0,i.kt)("td",{parentName:"tr",align:null},"sequence (assignment)"),(0,i.kt)("td",{parentName:"tr",align:null},"The application's environment variables and their values")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"imageURL")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"A reference to the app image in Epinio's registry")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ingress")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The ingress class name to use, if any")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"replicaCount")),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The desired number of instances (pods) to deploy")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"routes")),(0,i.kt)("td",{parentName:"tr",align:null},"sequence (route)"),(0,i.kt)("td",{parentName:"tr",align:null},"The routes (= domain+path+id) the app has to be reachable at")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"stageID")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Id of the stage run which generated the app image")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"start")),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional. The time of deployment, in nanoseconds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tlsIssuer")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the cert issuer to use for route certs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"username")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the user deploying the application")))),(0,i.kt)("p",null,"Routes are maps composed of four keys:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Kind"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"domain")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The domain of the route")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"A unique id to name route ",(0,i.kt)("inlineCode",{parentName:"td"},"Ingress")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"Certificate")," resources with")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"path")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The sub-path of the route, if any")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"secret")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional. Name of a ",(0,i.kt)("inlineCode",{parentName:"td"},"Secret")," to directly use in securing the ",(0,i.kt)("inlineCode",{parentName:"td"},"Ingress"))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("a",{parentName:"p",href:"/references/customization/routing_secrets"},"Routing Secrets")," reference explains more about the ",(0,i.kt)("inlineCode",{parentName:"p"},"secrets")," field.")),(0,i.kt)("p",null,"Environment assigment are maps composed of two keys:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Kind"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the variable")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The value of the variable")))),(0,i.kt)("h2",{id:"pods"},"Pods"),(0,i.kt)("p",null,"Epinio adds the following annotations to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Pods"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Annotation"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"app.kubernetes.io/name")),(0,i.kt)("td",{parentName:"tr",align:null},"The application's name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"epinio.io/start")),(0,i.kt)("td",{parentName:"tr",align:null},"The time of deployment, in nanoseconds, if provided by Epinio")))),(0,i.kt)("p",null,"Epinio adds the following labels to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Pods"),":"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Label"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"app.kubernetes.io/component")),(0,i.kt)("td",{parentName:"tr",align:null},"Fixed: ",(0,i.kt)("inlineCode",{parentName:"td"},"application"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"app.kubernetes.io/created-by")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the user deploying the application")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"app.kubernetes.io/managed-by")),(0,i.kt)("td",{parentName:"tr",align:null},"Fixed: ",(0,i.kt)("inlineCode",{parentName:"td"},"epinio"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"app.kubernetes.io/name")),(0,i.kt)("td",{parentName:"tr",align:null},"The application's name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"app.kubernetes.io/part-of")),(0,i.kt)("td",{parentName:"tr",align:null},"The application's namespace")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"epinio.io/app-container")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the main Pod container, running the app image")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"epinio.io/stage-id")),(0,i.kt)("td",{parentName:"tr",align:null},"Id of the stage run which generated the app image")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"helm.sh/chart")),(0,i.kt)("td",{parentName:"tr",align:null},"Chart name and version used to deploy the application")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Read the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/epinio/helm-charts/tree/main/chart/application"},"contents of the standard application chart"),".")),(0,i.kt)("h1",{id:"related"},"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/references/customization/routing_secrets"},"Routing Secrets"))))}c.isMDXComponent=!0}}]);