"use strict";(self.webpackChunkqcefviewdoc=self.webpackChunkqcefviewdoc||[]).push([[332],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,u=p["".concat(l,".").concat(m)]||p[m]||f[m]||i;return a?n.createElement(u,c(c({ref:t},s),{},{components:a})):n.createElement(u,c({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,c[1]=o;for(var d=2;d<i;d++)c[d]=a[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2266:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={title:"QCefContext"},c="class QCefContext",o={unversionedId:"reference/QCefContext",id:"reference/QCefContext",title:"QCefContext",description:"classqcef_context}",source:"@site/docs/reference/QCefContext.md",sourceDirName:"reference",slug:"/reference/QCefContext",permalink:"/QCefView/docs/reference/QCefContext",draft:!1,editUrl:"https://github.com/CefView/QCefViewDoc/tree/master/docs/reference/QCefContext.md",tags:[],version:"current",frontMatter:{title:"QCefContext"},sidebar:"default",previous:{title:"QCefConfig",permalink:"/QCefView/docs/reference/QCefConfig"},next:{title:"QCefDownloadItem",permalink:"/QCefView/docs/reference/QCefDownloadItem"}},l={},d=[{value:"Summary",id:"summary",level:2},{value:"Members",id:"members",level:2},{value:"<code>public  </code><code>QCefContext</code><code>(QCoreApplication * app, int argc, char ** argv, const </code><code>QCefConfig</code><code> * config)</code>",id:"class_q_cef_context_1aa2b8af8d2d806ba8b5110e868d314c8c",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>public  </code><code>~QCefContext</code><code>()</code>",id:"class_q_cef_context_1a91de7d9c36aafdaca390a355d6da5c6d",level:3},{value:"<code>public void </code><code>addLocalFolderResource</code><code>(const QString &amp; path, const QString &amp; url, int priority)</code>",id:"class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>public void </code><code>addArchiveResource</code><code>(const QString &amp; path, const QString &amp; url, const QString &amp; password, int priority)</code>",id:"class_q_cef_context_1aba9c70a84379190d151bdc4b634367e6",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>public bool </code><code>addCookie</code><code>(const QString &amp; name, const QString &amp; value, const QString &amp; domain, const QString &amp; url)</code>",id:"class_q_cef_context_1a6d2e90de7fb5fcf2b7e7a6581d26e62c",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>public bool </code><code>deleteAllCookies</code><code>()</code>",id:"class_q_cef_context_1a794e41a74ddabc503bed5e8c47fe3dd0",level:3},{value:"Returns",id:"returns-1",level:4},{value:"<code>public bool </code><code>addCrossOriginWhitelistEntry</code><code>(const QString &amp; sourceOrigin, const QString &amp; targetSchema, const QString &amp; targetDomain, bool allowTargetSubdomains)</code>",id:"class_q_cef_context_1aaba077228a77f5e7d7491eda3ce10267",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-2",level:4},{value:"<code>public bool </code><code>removeCrossOriginWhitelistEntry</code><code>(const QString &amp; sourceOrigin, const QString &amp; targetSchema, const QString &amp; targetDomain, bool allowTargetSubdomains)</code>",id:"class_q_cef_context_1af04aefeea503031f5a8fbdabf05bc5e8",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-3",level:4},{value:"<code>public bool </code><code>clearCrossOriginWhitelistEntry</code><code>()</code>",id:"class_q_cef_context_1a95d71c83fef34e8218a8ce559f173ab4",level:3},{value:"<code>public const </code><code>QCefConfig</code><code>*</code><code>cefConfig</code><code>() const</code>",id:"class_q_cef_context_1acfd6416ebc0a8df5cf8961dadeff960e",level:3},{value:"Returns",id:"returns-4",level:4},{value:"<code>protected bool </code><code>init</code><code>(const </code><code>QCefConfig</code><code> * config)</code>",id:"class_q_cef_context_1a78836c8d4d2bdf4970a256d8d29c80c6",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-5",level:4},{value:"<code>protected void </code><code>uninit</code><code>()</code>",id:"class_q_cef_context_1aee74a7460786ddc17f8f9c0f68eaab6b",level:3},{value:"<code>private QScopedPointer&lt; QCefContextPrivate &gt; </code><code>d_ptr</code>",id:"class_q_cef_context_1a502cdbb18c3abae014e6b8ee42948645",level:3},{value:"<code>public static </code><code>QCefContext</code><code>*</code><code>instance</code><code>()</code>",id:"class_q_cef_context_1a3e6491f837fdd72c7b4fefed5569853b",level:3},{value:"Returns",id:"returns-6",level:4}],s={toc:d},p="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class_q_cef_context"},"class ",(0,r.kt)("inlineCode",{parentName:"h1"},"QCefContext")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"class QCefContext\n  : public QObject\n")),(0,r.kt)("p",null,"Represents the CEF context."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Members"),(0,r.kt)("th",{parentName:"tr",align:null},"Descriptions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public  "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_context_1aa2b8af8d2d806ba8b5110e868d314c8c"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefContext")),(0,r.kt)("inlineCode",{parentName:"td"},"(QCoreApplication * app, int argc, char ** argv, const "),(0,r.kt)("a",{parentName:"td",href:"/QCefView/docs/reference/QCefConfig#class_q_cef_config"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefConfig")),(0,r.kt)("inlineCode",{parentName:"td"}," * config)")),(0,r.kt)("td",{parentName:"tr",align:null},"Constructs the CEF context.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public  "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_context_1a91de7d9c36aafdaca390a355d6da5c6d"},(0,r.kt)("inlineCode",{parentName:"a"},"~QCefContext")),(0,r.kt)("inlineCode",{parentName:"td"},"()")),(0,r.kt)("td",{parentName:"tr",align:null},"Destructs the CEF context.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public void "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454"},(0,r.kt)("inlineCode",{parentName:"a"},"addLocalFolderResource")),(0,r.kt)("inlineCode",{parentName:"td"},"(const QString & path, const QString & url, int priority)")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds a url mapping item with local web resource directory. This works for all  instances created subsequently.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public void "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_context_1aba9c70a84379190d151bdc4b634367e6"},(0,r.kt)("inlineCode",{parentName:"a"},"addArchiveResource")),(0,r.kt)("inlineCode",{parentName:"td"},"(const QString & path, const QString & url, const QString & password, int priority)")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds a url mapping item with local archive (.zip) file which contains the web resource. This works for all  instances created subsequently.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public bool "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_context_1a6d2e90de7fb5fcf2b7e7a6581d26e62c"},(0,r.kt)("inlineCode",{parentName:"a"},"addCookie")),(0,r.kt)("inlineCode",{parentName:"td"},"(const QString & name, const QString & value, const QString & domain, const QString & url)")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds a cookie to the CEF context, this cookie is accessible from all browsers created with this context.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public bool "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_context_1a794e41a74ddabc503bed5e8c47fe3dd0"},(0,r.kt)("inlineCode",{parentName:"a"},"deleteAllCookies")),(0,r.kt)("inlineCode",{parentName:"td"},"()")),(0,r.kt)("td",{parentName:"tr",align:null},"Deletes all cookies from the CEF context.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public bool "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_context_1aaba077228a77f5e7d7491eda3ce10267"},(0,r.kt)("inlineCode",{parentName:"a"},"addCrossOriginWhitelistEntry")),(0,r.kt)("inlineCode",{parentName:"td"},"(const QString & sourceOrigin, const QString & targetSchema, const QString & targetDomain, bool allowTargetSubdomains)")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds an entry to the cross-origin access whitelist. For details please refer to: ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/chromiumembedded/cef/blob/605c2bac86415dcec1e2902cdc46dc11c1ad026a/include/cef_origin_whitelist.h#L81C23-L81C23"},"https://github.com/chromiumembedded/cef/blob/605c2bac86415dcec1e2902cdc46dc11c1ad026a/include/cef_origin_whitelist.h#L81C23-L81C23"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public bool "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_context_1af04aefeea503031f5a8fbdabf05bc5e8"},(0,r.kt)("inlineCode",{parentName:"a"},"removeCrossOriginWhitelistEntry")),(0,r.kt)("inlineCode",{parentName:"td"},"(const QString & sourceOrigin, const QString & targetSchema, const QString & targetDomain, bool allowTargetSubdomains)")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes an entry from the cross-origin access whitelist. For details please refer to: ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/chromiumembedded/cef/blob/605c2bac86415dcec1e2902cdc46dc11c1ad026a/include/cef_origin_whitelist.h#L91C12-L91C12"},"https://github.com/chromiumembedded/cef/blob/605c2bac86415dcec1e2902cdc46dc11c1ad026a/include/cef_origin_whitelist.h#L91C12-L91C12"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public bool "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_context_1a95d71c83fef34e8218a8ce559f173ab4"},(0,r.kt)("inlineCode",{parentName:"a"},"clearCrossOriginWhitelistEntry")),(0,r.kt)("inlineCode",{parentName:"td"},"()")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes all entries from the cross-origin access whitelist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public const "),(0,r.kt)("a",{parentName:"td",href:"/QCefView/docs/reference/QCefConfig#class_q_cef_config"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefConfig")),(0,r.kt)("inlineCode",{parentName:"td"},"*"),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_context_1acfd6416ebc0a8df5cf8961dadeff960e"},(0,r.kt)("inlineCode",{parentName:"a"},"cefConfig")),(0,r.kt)("inlineCode",{parentName:"td"},"() const")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the ",(0,r.kt)("a",{parentName:"td",href:"/QCefView/docs/reference/QCefConfig#class_q_cef_config"},"QCefConfig"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"protected bool "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_context_1a78836c8d4d2bdf4970a256d8d29c80c6"},(0,r.kt)("inlineCode",{parentName:"a"},"init")),(0,r.kt)("inlineCode",{parentName:"td"},"(const "),(0,r.kt)("a",{parentName:"td",href:"/QCefView/docs/reference/QCefConfig#class_q_cef_config"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefConfig")),(0,r.kt)("inlineCode",{parentName:"td"}," * config)")),(0,r.kt)("td",{parentName:"tr",align:null},"Initialize the CEF context.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"protected void "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_context_1aee74a7460786ddc17f8f9c0f68eaab6b"},(0,r.kt)("inlineCode",{parentName:"a"},"uninit")),(0,r.kt)("inlineCode",{parentName:"td"},"()")),(0,r.kt)("td",{parentName:"tr",align:null},"Uninitialize the CEF context.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"private QScopedPointer< QCefContextPrivate > "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_context_1a502cdbb18c3abae014e6b8ee42948645"},(0,r.kt)("inlineCode",{parentName:"a"},"d_ptr"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public static "),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_context"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefContext")),(0,r.kt)("inlineCode",{parentName:"td"},"*"),(0,r.kt)("a",{parentName:"td",href:"#class_q_cef_context_1a3e6491f837fdd72c7b4fefed5569853b"},(0,r.kt)("inlineCode",{parentName:"a"},"instance")),(0,r.kt)("inlineCode",{parentName:"td"},"()")),(0,r.kt)("td",{parentName:"tr",align:null},"Gets the unique default instance.")))),(0,r.kt)("h2",{id:"members"},"Members"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_context_1aa2b8af8d2d806ba8b5110e868d314c8c"},(0,r.kt)("inlineCode",{parentName:"h3"},"public  "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1aa2b8af8d2d806ba8b5110e868d314c8c"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefContext")),(0,r.kt)("inlineCode",{parentName:"h3"},"(QCoreApplication * app, int argc, char ** argv, const "),(0,r.kt)("a",{parentName:"h3",href:"/QCefView/docs/reference/QCefConfig#class_q_cef_config"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefConfig")),(0,r.kt)("inlineCode",{parentName:"h3"}," * config)")),(0,r.kt)("p",null,"Constructs the CEF context."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"app")," The application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"argc")," The argument count")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"argv")," The argument list pointer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"config")," The ",(0,r.kt)("a",{parentName:"p",href:"/QCefView/docs/reference/QCefConfig#class_q_cef_config"},"QCefConfig")," instance"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_context_1a91de7d9c36aafdaca390a355d6da5c6d"},(0,r.kt)("inlineCode",{parentName:"h3"},"public  "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1a91de7d9c36aafdaca390a355d6da5c6d"},(0,r.kt)("inlineCode",{parentName:"a"},"~QCefContext")),(0,r.kt)("inlineCode",{parentName:"h3"},"()")),(0,r.kt)("p",null,"Destructs the CEF context."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454"},(0,r.kt)("inlineCode",{parentName:"h3"},"public void "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1aecc6f7ee9d296bcf8d2ba470e0c0e454"},(0,r.kt)("inlineCode",{parentName:"a"},"addLocalFolderResource")),(0,r.kt)("inlineCode",{parentName:"h3"},"(const QString & path, const QString & url, int priority)")),(0,r.kt)("p",null,"Adds a url mapping item with local web resource directory. This works for all  instances created subsequently."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"path")," The path to the local resource directory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"url")," The url to be mapped to")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"priority")," The priority"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_context_1aba9c70a84379190d151bdc4b634367e6"},(0,r.kt)("inlineCode",{parentName:"h3"},"public void "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1aba9c70a84379190d151bdc4b634367e6"},(0,r.kt)("inlineCode",{parentName:"a"},"addArchiveResource")),(0,r.kt)("inlineCode",{parentName:"h3"},"(const QString & path, const QString & url, const QString & password, int priority)")),(0,r.kt)("p",null,"Adds a url mapping item with local archive (.zip) file which contains the web resource. This works for all  instances created subsequently."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"path")," The path to the local archive file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"url")," The url to be mapped to")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"password")," The password of the archive")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"priority")," The priority"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_context_1a6d2e90de7fb5fcf2b7e7a6581d26e62c"},(0,r.kt)("inlineCode",{parentName:"h3"},"public bool "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1a6d2e90de7fb5fcf2b7e7a6581d26e62c"},(0,r.kt)("inlineCode",{parentName:"a"},"addCookie")),(0,r.kt)("inlineCode",{parentName:"h3"},"(const QString & name, const QString & value, const QString & domain, const QString & url)")),(0,r.kt)("p",null,"Adds a cookie to the CEF context, this cookie is accessible from all browsers created with this context."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name")," The cookie item name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"value")," The cookie item value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"domain")," The applicable domain name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"url")," The applicable url"))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,"True on success; otherwise false"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_context_1a794e41a74ddabc503bed5e8c47fe3dd0"},(0,r.kt)("inlineCode",{parentName:"h3"},"public bool "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1a794e41a74ddabc503bed5e8c47fe3dd0"},(0,r.kt)("inlineCode",{parentName:"a"},"deleteAllCookies")),(0,r.kt)("inlineCode",{parentName:"h3"},"()")),(0,r.kt)("p",null,"Deletes all cookies from the CEF context."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"True on success; otherwise false"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_context_1aaba077228a77f5e7d7491eda3ce10267"},(0,r.kt)("inlineCode",{parentName:"h3"},"public bool "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1aaba077228a77f5e7d7491eda3ce10267"},(0,r.kt)("inlineCode",{parentName:"a"},"addCrossOriginWhitelistEntry")),(0,r.kt)("inlineCode",{parentName:"h3"},"(const QString & sourceOrigin, const QString & targetSchema, const QString & targetDomain, bool allowTargetSubdomains)")),(0,r.kt)("p",null,"Adds an entry to the cross-origin access whitelist. For details please refer to: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chromiumembedded/cef/blob/605c2bac86415dcec1e2902cdc46dc11c1ad026a/include/cef_origin_whitelist.h#L81C23-L81C23"},"https://github.com/chromiumembedded/cef/blob/605c2bac86415dcec1e2902cdc46dc11c1ad026a/include/cef_origin_whitelist.h#L81C23-L81C23"),"."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sourceOrigin")," The source origin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"targetSchema")," The target schema")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"targetDomain")," The target domain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"allowTargetSubdomains")," Whether to allow subdomain or not"))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,"True on success; otherwise false"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_context_1af04aefeea503031f5a8fbdabf05bc5e8"},(0,r.kt)("inlineCode",{parentName:"h3"},"public bool "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1af04aefeea503031f5a8fbdabf05bc5e8"},(0,r.kt)("inlineCode",{parentName:"a"},"removeCrossOriginWhitelistEntry")),(0,r.kt)("inlineCode",{parentName:"h3"},"(const QString & sourceOrigin, const QString & targetSchema, const QString & targetDomain, bool allowTargetSubdomains)")),(0,r.kt)("p",null,"Removes an entry from the cross-origin access whitelist. For details please refer to: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chromiumembedded/cef/blob/605c2bac86415dcec1e2902cdc46dc11c1ad026a/include/cef_origin_whitelist.h#L91C12-L91C12"},"https://github.com/chromiumembedded/cef/blob/605c2bac86415dcec1e2902cdc46dc11c1ad026a/include/cef_origin_whitelist.h#L91C12-L91C12"),"."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sourceOrigin")," The source origin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"targetSchema")," The target schema")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"targetDomain")," The target domain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"allowTargetSubdomains")," Whether to allow subdomain or not"))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,"True on success; otherwise false"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_context_1a95d71c83fef34e8218a8ce559f173ab4"},(0,r.kt)("inlineCode",{parentName:"h3"},"public bool "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1a95d71c83fef34e8218a8ce559f173ab4"},(0,r.kt)("inlineCode",{parentName:"a"},"clearCrossOriginWhitelistEntry")),(0,r.kt)("inlineCode",{parentName:"h3"},"()")),(0,r.kt)("p",null,"Removes all entries from the cross-origin access whitelist."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_context_1acfd6416ebc0a8df5cf8961dadeff960e"},(0,r.kt)("inlineCode",{parentName:"h3"},"public const "),(0,r.kt)("a",{parentName:"h3",href:"/QCefView/docs/reference/QCefConfig#class_q_cef_config"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefConfig")),(0,r.kt)("inlineCode",{parentName:"h3"},"*"),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1acfd6416ebc0a8df5cf8961dadeff960e"},(0,r.kt)("inlineCode",{parentName:"a"},"cefConfig")),(0,r.kt)("inlineCode",{parentName:"h3"},"() const")),(0,r.kt)("p",null,"Gets the ",(0,r.kt)("a",{parentName:"p",href:"/QCefView/docs/reference/QCefConfig#class_q_cef_config"},"QCefConfig"),"."),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/QCefView/docs/reference/QCefConfig#class_q_cef_config"},"QCefConfig")," instance"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_context_1a78836c8d4d2bdf4970a256d8d29c80c6"},(0,r.kt)("inlineCode",{parentName:"h3"},"protected bool "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1a78836c8d4d2bdf4970a256d8d29c80c6"},(0,r.kt)("inlineCode",{parentName:"a"},"init")),(0,r.kt)("inlineCode",{parentName:"h3"},"(const "),(0,r.kt)("a",{parentName:"h3",href:"/QCefView/docs/reference/QCefConfig#class_q_cef_config"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefConfig")),(0,r.kt)("inlineCode",{parentName:"h3"}," * config)")),(0,r.kt)("p",null,"Initialize the CEF context."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config")," The ",(0,r.kt)("a",{parentName:"li",href:"/QCefView/docs/reference/QCefConfig#class_q_cef_config"},"QCefConfig")," instance")),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,"True on success; otherwise false"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_context_1aee74a7460786ddc17f8f9c0f68eaab6b"},(0,r.kt)("inlineCode",{parentName:"h3"},"protected void "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1aee74a7460786ddc17f8f9c0f68eaab6b"},(0,r.kt)("inlineCode",{parentName:"a"},"uninit")),(0,r.kt)("inlineCode",{parentName:"h3"},"()")),(0,r.kt)("p",null,"Uninitialize the CEF context."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_context_1a502cdbb18c3abae014e6b8ee42948645"},(0,r.kt)("inlineCode",{parentName:"h3"},"private QScopedPointer< QCefContextPrivate > "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1a502cdbb18c3abae014e6b8ee42948645"},(0,r.kt)("inlineCode",{parentName:"a"},"d_ptr"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"class_q_cef_context_1a3e6491f837fdd72c7b4fefed5569853b"},(0,r.kt)("inlineCode",{parentName:"h3"},"public static "),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_context"},(0,r.kt)("inlineCode",{parentName:"a"},"QCefContext")),(0,r.kt)("inlineCode",{parentName:"h3"},"*"),(0,r.kt)("a",{parentName:"h3",href:"#class_q_cef_context_1a3e6491f837fdd72c7b4fefed5569853b"},(0,r.kt)("inlineCode",{parentName:"a"},"instance")),(0,r.kt)("inlineCode",{parentName:"h3"},"()")),(0,r.kt)("p",null,"Gets the unique default instance."),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,"The default instance"))}f.isMDXComponent=!0}}]);