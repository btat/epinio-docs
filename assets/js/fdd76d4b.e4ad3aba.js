"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[61373],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,m=f["".concat(s,".").concat(d)]||f[d]||c[d]||o;return n?i.createElement(m,p(p({ref:t},u),{},{components:n})):i.createElement(m,p({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,p[1]=a;for(var l=2;l<o;l++)p[l]=n[l];return i.createElement.apply(null,p)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},21283:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var i=n(83117),r=n(80102),o=(n(67294),n(3905)),p=["components"],a={},s=void 0,l={unversionedId:"references/cli/epinio_app_update",id:"version-0.6.2/references/cli/epinio_app_update",title:"epinio_app_update",description:"epinio app update",source:"@site/versioned_docs/version-0.6.2/references/cli/epinio_app_update.md",sourceDirName:"references/cli",slug:"/references/cli/epinio_app_update",permalink:"/0.6.2/references/cli/epinio_app_update",draft:!1,editUrl:"https://github.com/epinio/docs/versioned_docs/version-0.6.2/references/cli/epinio_app_update.md",tags:[],version:"0.6.2",frontMatter:{},sidebar:"docs",previous:{title:"epinio_app_show",permalink:"/0.6.2/references/cli/epinio_app_show"},next:{title:"epinio_settings",permalink:"/0.6.2/references/cli/epinio_settings"}},u={},c=[{value:"epinio app update",id:"epinio-app-update",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio-app-update"},"epinio app update"),(0,o.kt)("p",null,"Update the named application"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Update the running application's attributes (e.g. instances)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio app update NAME [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -b, --bind strings      configurations to bind immediately\n  -e, --env strings       environment variables to be used\n  -h, --help              help for update\n  -i, --instances int32   The number of instances the application should have (default 1)\n  -r, --route strings     Custom route to use for the application (a subdomain of the default domain will be used if this is not set). Can be set multiple times to use multiple routes with the same application.\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/0.6.2/references/cli/epinio_app"},"epinio app"),"\t - Epinio application features")))}d.isMDXComponent=!0}}]);