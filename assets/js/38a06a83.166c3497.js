"use strict";(self.webpackChunkqcefviewdoc=self.webpackChunkqcefviewdoc||[]).push([[14],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=o(a),f=r,k=p["".concat(s,".").concat(f)]||p[f]||u[f]||c;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,l=new Array(c);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<c;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3656:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return d},default:function(){return p}});var n=a(7462),r=a(3366),c=(a(7294),a(3905)),l=["components"],i={title:"QCefQuery"},s='class `QCefQuery` <a id="class_q_cef_query" class="anchor"></a>',o={unversionedId:"reference/QCefQuery",id:"reference/QCefQuery",title:"QCefQuery",description:"Represents the query request sent from the web content(Javascript)",source:"@site/docs/reference/QCefQuery.md",sourceDirName:"reference",slug:"/reference/QCefQuery",permalink:"/QCefView/docs/reference/QCefQuery",editUrl:"https://github.com/CefView/QCefViewDoc/tree/master/docs/reference/QCefQuery.md",tags:[],version:"current",frontMatter:{title:"QCefQuery"},sidebar:"default",previous:{title:"QCefEvent",permalink:"/QCefView/docs/reference/QCefEvent"},next:{title:"QCefSetting",permalink:"/QCefView/docs/reference/QCefSetting"}},d=[{value:"Summary",id:"summary",children:[],level:2},{value:"Members",id:"members",children:[{value:'<code>public  </code>QCefQuery<code>()</code> <a id="class_q_cef_query_1a22d9fddcadce7a6e0259c691634c4d7a" class="anchor"></a>',id:"public--qcefquery-",children:[],level:3},{value:'<code>public  </code>QCefQuery<code>(const QString &amp; req,const int64_t query)</code> <a id="class_q_cef_query_1a4371b3245657bf41312aead3a88cbe33" class="anchor"></a>',id:"public--qcefqueryconst-qstring--reqconst-int64_t-query-",children:[{value:"Parameters",id:"parameters",children:[],level:4}],level:3},{value:'<code>public  </code>QCefQuery<code>(const </code>QCefQuery<code> &amp; other)</code> <a id="class_q_cef_query_1a15297bbfd653f64aa48cec2347562b9e" class="anchor"></a>',id:"public--qcefqueryconst-qcefquery--other-",children:[{value:"Parameters",id:"parameters-1",children:[],level:4}],level:3},{value:'<code>public </code>QCefQuery<code>&amp;</code>operator=<code>(const </code>QCefQuery<code> &amp; other)</code> <a id="class_q_cef_query_1adb304235ed62a9cac92338a415bfb058" class="anchor"></a>',id:"public-qcefqueryoperatorconst-qcefquery--other-",children:[{value:"Parameters",id:"parameters-2",children:[],level:4}],level:3},{value:'<code>public  </code>~QCefQuery<code>()</code> <a id="class_q_cef_query_1a402d117cbd2d37681394f86d31ed11a3" class="anchor"></a>',id:"public--qcefquery--1",children:[],level:3},{value:'<code>public const QString </code>request<code>() const</code> <a id="class_q_cef_query_1a16d137bcc1bf2ef9bc8969ff1bd091e7" class="anchor"></a>',id:"public-const-qstring-request-const-",children:[{value:"Returns",id:"returns",children:[],level:4}],level:3},{value:'<code>public const int64_t </code>id<code>() const</code> <a id="class_q_cef_query_1afa08eaa6e1957219028db0256edd5d46" class="anchor"></a>',id:"public-const-int64_t-id-const-",children:[{value:"Returns",id:"returns-1",children:[],level:4}],level:3},{value:'<code>public const QString </code>response<code>() const</code> <a id="class_q_cef_query_1a663d5945146bebe69a0a3c5448bb9280" class="anchor"></a>',id:"public-const-qstring-response-const-",children:[{value:"Returns",id:"returns-2",children:[],level:4}],level:3},{value:'<code>public const bool </code>result<code>() const</code> <a id="class_q_cef_query_1a8c2d78e19628d8066570338d659bc9b2" class="anchor"></a>',id:"public-const-bool-result-const-",children:[{value:"Returns",id:"returns-3",children:[],level:4}],level:3},{value:'<code>public const int </code>error<code>() const</code> <a id="class_q_cef_query_1ab35201ac89d89f1445538f82a12f8fa8" class="anchor"></a>',id:"public-const-int-error-const-",children:[{value:"Returns",id:"returns-4",children:[],level:4}],level:3},{value:'<code>public void </code>setResponseResult<code>(bool success,const QString &amp; response,int error) const</code> <a id="class_q_cef_query_1aa86db4e257e3dc4e29c7906d80e06f28" class="anchor"></a>',id:"public-void-setresponseresultbool-successconst-qstring--responseint-error-const-",children:[{value:"Parameters",id:"parameters-3",children:[],level:4}],level:3},{value:'<a id="class_q_cef_query_1a3e84c15339bbf841b91a541222aed4e6" class="anchor"></a>',id:"a-idclass_q_cef_query_1a3e84c15339bbf841b91a541222aed4e6-classanchora",children:[],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,a=(0,r.Z)(e,l);return(0,c.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"class-qcefquery-"},"class ",(0,c.kt)("inlineCode",{parentName:"h1"},"QCefQuery")," ",(0,c.kt)("a",{id:"class_q_cef_query",class:"anchor"})),(0,c.kt)("p",null,"Represents the query request sent from the web content(Javascript)"),(0,c.kt)("h2",{id:"summary"},"Summary"),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Members"),(0,c.kt)("th",{parentName:"tr",align:null},"Descriptions"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"public  "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_query_1a22d9fddcadce7a6e0259c691634c4d7a"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefQuery")),(0,c.kt)("inlineCode",{parentName:"td"},"()")),(0,c.kt)("td",{parentName:"tr",align:null},"Constructs a query instance")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"public  "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_query_1a4371b3245657bf41312aead3a88cbe33"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefQuery")),(0,c.kt)("inlineCode",{parentName:"td"},"(const QString & req,const int64_t query)")),(0,c.kt)("td",{parentName:"tr",align:null},"Constructs a query instance with request context and query id")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"public  "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_query_1a15297bbfd653f64aa48cec2347562b9e"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefQuery")),(0,c.kt)("inlineCode",{parentName:"td"},"(const "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_query"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefQuery")),(0,c.kt)("inlineCode",{parentName:"td"}," & other)")),(0,c.kt)("td",{parentName:"tr",align:null},"Constructs a query instance from existing one")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"public "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_query"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefQuery")),(0,c.kt)("inlineCode",{parentName:"td"},"&"),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_query_1adb304235ed62a9cac92338a415bfb058"},(0,c.kt)("inlineCode",{parentName:"a"},"operator=")),(0,c.kt)("inlineCode",{parentName:"td"},"(const "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_query"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefQuery")),(0,c.kt)("inlineCode",{parentName:"td"}," & other)")),(0,c.kt)("td",{parentName:"tr",align:null},"Assigns an existing query instance to current")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"public  "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_query_1a402d117cbd2d37681394f86d31ed11a3"},(0,c.kt)("inlineCode",{parentName:"a"},"~QCefQuery")),(0,c.kt)("inlineCode",{parentName:"td"},"()")),(0,c.kt)("td",{parentName:"tr",align:null},"Destructs a query instance")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"public const QString "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_query_1a16d137bcc1bf2ef9bc8969ff1bd091e7"},(0,c.kt)("inlineCode",{parentName:"a"},"request")),(0,c.kt)("inlineCode",{parentName:"td"},"() const")),(0,c.kt)("td",{parentName:"tr",align:null},"Gets the query content")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"public const int64_t "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_query_1afa08eaa6e1957219028db0256edd5d46"},(0,c.kt)("inlineCode",{parentName:"a"},"id")),(0,c.kt)("inlineCode",{parentName:"td"},"() const")),(0,c.kt)("td",{parentName:"tr",align:null},"Gets the query id")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"public const QString "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_query_1a663d5945146bebe69a0a3c5448bb9280"},(0,c.kt)("inlineCode",{parentName:"a"},"response")),(0,c.kt)("inlineCode",{parentName:"td"},"() const")),(0,c.kt)("td",{parentName:"tr",align:null},"Gets the response content string")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"public const bool "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_query_1a8c2d78e19628d8066570338d659bc9b2"},(0,c.kt)("inlineCode",{parentName:"a"},"result")),(0,c.kt)("inlineCode",{parentName:"td"},"() const")),(0,c.kt)("td",{parentName:"tr",align:null},"Gets the response result")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"public const int "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_query_1ab35201ac89d89f1445538f82a12f8fa8"},(0,c.kt)("inlineCode",{parentName:"a"},"error")),(0,c.kt)("inlineCode",{parentName:"td"},"() const")),(0,c.kt)("td",{parentName:"tr",align:null},"Gets the response error")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("inlineCode",{parentName:"td"},"public void "),(0,c.kt)("a",{parentName:"td",href:"#class_q_cef_query_1aa86db4e257e3dc4e29c7906d80e06f28"},(0,c.kt)("inlineCode",{parentName:"a"},"setResponseResult")),(0,c.kt)("inlineCode",{parentName:"td"},"(bool success,const QString & response,int error) const")),(0,c.kt)("td",{parentName:"tr",align:null},"Sets the response")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null}),(0,c.kt)("td",{parentName:"tr",align:null})))),(0,c.kt)("h2",{id:"members"},"Members"),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"public--qcefquery-"},(0,c.kt)("inlineCode",{parentName:"h3"},"public  "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_query_1a22d9fddcadce7a6e0259c691634c4d7a"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefQuery")),(0,c.kt)("inlineCode",{parentName:"h3"},"()")," ",(0,c.kt)("a",{id:"class_q_cef_query_1a22d9fddcadce7a6e0259c691634c4d7a",class:"anchor"})),(0,c.kt)("p",null,"Constructs a query instance"),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"public--qcefqueryconst-qstring--reqconst-int64_t-query-"},(0,c.kt)("inlineCode",{parentName:"h3"},"public  "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_query_1a4371b3245657bf41312aead3a88cbe33"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefQuery")),(0,c.kt)("inlineCode",{parentName:"h3"},"(const QString & req,const int64_t query)")," ",(0,c.kt)("a",{id:"class_q_cef_query_1a4371b3245657bf41312aead3a88cbe33",class:"anchor"})),(0,c.kt)("p",null,"Constructs a query instance with request context and query id"),(0,c.kt)("h4",{id:"parameters"},"Parameters"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("inlineCode",{parentName:"p"},"req")," The request context")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("inlineCode",{parentName:"p"},"query")," The query id"))),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"public--qcefqueryconst-qcefquery--other-"},(0,c.kt)("inlineCode",{parentName:"h3"},"public  "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_query_1a15297bbfd653f64aa48cec2347562b9e"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefQuery")),(0,c.kt)("inlineCode",{parentName:"h3"},"(const "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_query"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefQuery")),(0,c.kt)("inlineCode",{parentName:"h3"}," & other)")," ",(0,c.kt)("a",{id:"class_q_cef_query_1a15297bbfd653f64aa48cec2347562b9e",class:"anchor"})),(0,c.kt)("p",null,"Constructs a query instance from existing one"),(0,c.kt)("h4",{id:"parameters-1"},"Parameters"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"other")," The other query instance")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"public-qcefqueryoperatorconst-qcefquery--other-"},(0,c.kt)("inlineCode",{parentName:"h3"},"public "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_query"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefQuery")),(0,c.kt)("inlineCode",{parentName:"h3"},"&"),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_query_1adb304235ed62a9cac92338a415bfb058"},(0,c.kt)("inlineCode",{parentName:"a"},"operator=")),(0,c.kt)("inlineCode",{parentName:"h3"},"(const "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_query"},(0,c.kt)("inlineCode",{parentName:"a"},"QCefQuery")),(0,c.kt)("inlineCode",{parentName:"h3"}," & other)")," ",(0,c.kt)("a",{id:"class_q_cef_query_1adb304235ed62a9cac92338a415bfb058",class:"anchor"})),(0,c.kt)("p",null,"Assigns an existing query instance to current"),(0,c.kt)("h4",{id:"parameters-2"},"Parameters"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"other")," The other query instance")),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"public--qcefquery--1"},(0,c.kt)("inlineCode",{parentName:"h3"},"public  "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_query_1a402d117cbd2d37681394f86d31ed11a3"},(0,c.kt)("inlineCode",{parentName:"a"},"~QCefQuery")),(0,c.kt)("inlineCode",{parentName:"h3"},"()")," ",(0,c.kt)("a",{id:"class_q_cef_query_1a402d117cbd2d37681394f86d31ed11a3",class:"anchor"})),(0,c.kt)("p",null,"Destructs a query instance"),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"public-const-qstring-request-const-"},(0,c.kt)("inlineCode",{parentName:"h3"},"public const QString "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_query_1a16d137bcc1bf2ef9bc8969ff1bd091e7"},(0,c.kt)("inlineCode",{parentName:"a"},"request")),(0,c.kt)("inlineCode",{parentName:"h3"},"() const")," ",(0,c.kt)("a",{id:"class_q_cef_query_1a16d137bcc1bf2ef9bc8969ff1bd091e7",class:"anchor"})),(0,c.kt)("p",null,"Gets the query content"),(0,c.kt)("h4",{id:"returns"},"Returns"),(0,c.kt)("p",null,"The content string"),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"public-const-int64_t-id-const-"},(0,c.kt)("inlineCode",{parentName:"h3"},"public const int64_t "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_query_1afa08eaa6e1957219028db0256edd5d46"},(0,c.kt)("inlineCode",{parentName:"a"},"id")),(0,c.kt)("inlineCode",{parentName:"h3"},"() const")," ",(0,c.kt)("a",{id:"class_q_cef_query_1afa08eaa6e1957219028db0256edd5d46",class:"anchor"})),(0,c.kt)("p",null,"Gets the query id"),(0,c.kt)("h4",{id:"returns-1"},"Returns"),(0,c.kt)("p",null,"The query id"),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"public-const-qstring-response-const-"},(0,c.kt)("inlineCode",{parentName:"h3"},"public const QString "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_query_1a663d5945146bebe69a0a3c5448bb9280"},(0,c.kt)("inlineCode",{parentName:"a"},"response")),(0,c.kt)("inlineCode",{parentName:"h3"},"() const")," ",(0,c.kt)("a",{id:"class_q_cef_query_1a663d5945146bebe69a0a3c5448bb9280",class:"anchor"})),(0,c.kt)("p",null,"Gets the response content string"),(0,c.kt)("h4",{id:"returns-2"},"Returns"),(0,c.kt)("p",null,"The response content string"),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"public-const-bool-result-const-"},(0,c.kt)("inlineCode",{parentName:"h3"},"public const bool "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_query_1a8c2d78e19628d8066570338d659bc9b2"},(0,c.kt)("inlineCode",{parentName:"a"},"result")),(0,c.kt)("inlineCode",{parentName:"h3"},"() const")," ",(0,c.kt)("a",{id:"class_q_cef_query_1a8c2d78e19628d8066570338d659bc9b2",class:"anchor"})),(0,c.kt)("p",null,"Gets the response result"),(0,c.kt)("h4",{id:"returns-3"},"Returns"),(0,c.kt)("p",null,"The respone result"),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"public-const-int-error-const-"},(0,c.kt)("inlineCode",{parentName:"h3"},"public const int "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_query_1ab35201ac89d89f1445538f82a12f8fa8"},(0,c.kt)("inlineCode",{parentName:"a"},"error")),(0,c.kt)("inlineCode",{parentName:"h3"},"() const")," ",(0,c.kt)("a",{id:"class_q_cef_query_1ab35201ac89d89f1445538f82a12f8fa8",class:"anchor"})),(0,c.kt)("p",null,"Gets the response error"),(0,c.kt)("h4",{id:"returns-4"},"Returns"),(0,c.kt)("p",null,"The response error"),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"public-void-setresponseresultbool-successconst-qstring--responseint-error-const-"},(0,c.kt)("inlineCode",{parentName:"h3"},"public void "),(0,c.kt)("a",{parentName:"h3",href:"#class_q_cef_query_1aa86db4e257e3dc4e29c7906d80e06f28"},(0,c.kt)("inlineCode",{parentName:"a"},"setResponseResult")),(0,c.kt)("inlineCode",{parentName:"h3"},"(bool success,const QString & response,int error) const")," ",(0,c.kt)("a",{id:"class_q_cef_query_1aa86db4e257e3dc4e29c7906d80e06f28",class:"anchor"})),(0,c.kt)("p",null,"Sets the response"),(0,c.kt)("h4",{id:"parameters-3"},"Parameters"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("inlineCode",{parentName:"p"},"success")," True if the query is successful; otherwise false")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("inlineCode",{parentName:"p"},"response")," The response content string")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},(0,c.kt)("inlineCode",{parentName:"p"},"error")," The response error"))),(0,c.kt)("hr",null),(0,c.kt)("h3",{id:"a-idclass_q_cef_query_1a3e84c15339bbf841b91a541222aed4e6-classanchora"},(0,c.kt)("a",{id:"class_q_cef_query_1a3e84c15339bbf841b91a541222aed4e6",class:"anchor"})))}p.isMDXComponent=!0}}]);