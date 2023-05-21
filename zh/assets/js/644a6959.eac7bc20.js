"use strict";(self.webpackChunkqcefviewdoc=self.webpackChunkqcefviewdoc||[]).push([[789],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=o(n),s=r,k=m["".concat(d,".").concat(s)]||m[s]||f[s]||l;return n?a.createElement(k,c(c({ref:t},p),{},{components:n})):a.createElement(k,c({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var o=2;o<l;o++)c[o]=n[o];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9745:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),c=["components"],i={title:"QCefEvent"},d="class `QCefEvent`",o={unversionedId:"reference/QCefEvent",id:"reference/QCefEvent",title:"QCefEvent",description:"classqcef_event}",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference/QCefEvent.md",sourceDirName:"reference",slug:"/reference/QCefEvent",permalink:"/QCefView/zh/docs/reference/QCefEvent",editUrl:"https://github.com/CefView/QCefViewDoc/tree/master/i18n/zh/docusaurus-plugin-content-docs/current/reference/QCefEvent.md",tags:[],version:"current",frontMatter:{title:"QCefEvent"},sidebar:"default",previous:{title:"QCefDownloadItem",permalink:"/QCefView/zh/docs/reference/QCefDownloadItem"},next:{title:"QCefQuery",permalink:"/QCefView/zh/docs/reference/QCefQuery"}},p=[{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2},{value:"Members",id:"members",children:[{value:"<code>public  </code>QCefEvent<code>()</code>",id:"class_q_cef_event_1ab444dcc856db38dcc679db326ef22bf5",children:[],level:3},{value:"<code>public  </code>QCefEvent<code>(const QString &amp; name)</code>",id:"class_q_cef_event_1a2b2b8bacbfebefe302cd1fab91cd5e8c",children:[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[],level:4}],level:3},{value:"<code>public  </code>QCefEvent<code>(const </code>QCefEvent<code> &amp; other)</code>",id:"class_q_cef_event_1a357d5cb242977682523e69d501c673d4",children:[{value:"\u53c2\u6570",id:"\u53c2\u6570-1",children:[],level:4}],level:3},{value:"<code>public </code>QCefEvent<code>&amp;</code>operator=<code>(const </code>QCefEvent<code> &amp; other)</code>",id:"class_q_cef_event_1a95e2f8c582270de0f9501945a6e063ee",children:[{value:"\u53c2\u6570",id:"\u53c2\u6570-2",children:[],level:4}],level:3},{value:"<code>public  </code>~QCefEvent<code>()</code>",id:"class_q_cef_event_1a5c0e38242fa1ba823f1664232966787c",children:[],level:3},{value:"<code>public void </code>setEventName<code>(const QString &amp; name)</code>",id:"class_q_cef_event_1a5db1273fdda416900f5b7b26a119c85a",children:[{value:"\u53c2\u6570",id:"\u53c2\u6570-3",children:[],level:4}],level:3},{value:"<code>public const QString </code>eventName<code>() const</code>",id:"class_q_cef_event_1a5a970c76a348788b15a040c8c405a103",children:[{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",children:[],level:4}],level:3},{value:"<code>public void </code>setArguments<code>(const QVariantList &amp; args)</code>",id:"class_q_cef_event_1ac84ba1292bcf56abdc5c6c4245aa6c04",children:[{value:"\u53c2\u6570",id:"\u53c2\u6570-4",children:[],level:4}],level:3},{value:"<code>public QVariantList &amp; </code>arguments<code>()</code>",id:"class_q_cef_event_1a4cf70fa60235d723b9e578cded919327",children:[{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-1",children:[],level:4}],level:3},{value:"<code>private QScopedPointer&lt; QCefEventPrivate &gt; </code>d_ptr",id:"class_q_cef_event_1aa4e043ac8c5d7c5d75ca878ca75ab017",children:[],level:3}],level:2}],f={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"class_q_cef_event"},"class ",(0,l.kt)("inlineCode",{parentName:"h1"},"QCefEvent")),(0,l.kt)("p",null,"\u8868\u793a\u4ece\u672c\u673a\u4e0a\u4e0b\u6587\uff08C/C++ \u4ee3\u7801\uff09\u53d1\u9001\u5230 Web \u4e0a\u4e0b\u6587\uff08javascript\uff09\u7684\u4e8b\u4ef6"),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6210\u5458"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public  "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_event_1ab444dcc856db38dcc679db326ef22bf5"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,l.kt)("inlineCode",{parentName:"td"},"()")),(0,l.kt)("td",{parentName:"tr",align:null},"QCefEvent \u6784\u9020\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public  "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a2b2b8bacbfebefe302cd1fab91cd5e8c"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,l.kt)("inlineCode",{parentName:"td"},"(const QString & name)")),(0,l.kt)("td",{parentName:"tr",align:null},"QCefEvent \u6709\u53c2\u6784\u9020\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public  "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a357d5cb242977682523e69d501c673d4"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,l.kt)("inlineCode",{parentName:"td"},"(const "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_event"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,l.kt)("inlineCode",{parentName:"td"}," & other)")),(0,l.kt)("td",{parentName:"tr",align:null},"QCefEvent \u62f7\u8d1d\u6784\u9020\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_event"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,l.kt)("inlineCode",{parentName:"td"},"&"),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a95e2f8c582270de0f9501945a6e063ee"},(0,l.kt)("inlineCode",{parentName:"a"},"operator=")),(0,l.kt)("inlineCode",{parentName:"td"},"(const "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_event"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,l.kt)("inlineCode",{parentName:"td"}," & other)")),(0,l.kt)("td",{parentName:"tr",align:null},"QCefEvent \u62f7\u8d1d\u8d4b\u503c\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public  "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a5c0e38242fa1ba823f1664232966787c"},(0,l.kt)("inlineCode",{parentName:"a"},"~QCefEvent")),(0,l.kt)("inlineCode",{parentName:"td"},"()")),(0,l.kt)("td",{parentName:"tr",align:null},"QCefEvent \u6790\u6784\u51fd\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public void "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a5db1273fdda416900f5b7b26a119c85a"},(0,l.kt)("inlineCode",{parentName:"a"},"setEventName")),(0,l.kt)("inlineCode",{parentName:"td"},"(const QString & name)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u4e8b\u4ef6\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public const QString "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a5a970c76a348788b15a040c8c405a103"},(0,l.kt)("inlineCode",{parentName:"a"},"eventName")),(0,l.kt)("inlineCode",{parentName:"td"},"() const")),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u4e8b\u4ef6\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public void "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_event_1ac84ba1292bcf56abdc5c6c4245aa6c04"},(0,l.kt)("inlineCode",{parentName:"a"},"setArguments")),(0,l.kt)("inlineCode",{parentName:"td"},"(const QVariantList & args)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u53c2\u6570\u5217\u8868")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"public QVariantList & "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_event_1a4cf70fa60235d723b9e578cded919327"},(0,l.kt)("inlineCode",{parentName:"a"},"arguments")),(0,l.kt)("inlineCode",{parentName:"td"},"()")),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u53c2\u6570\u5217\u8868")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"private QScopedPointer< QCefEventPrivate > "),(0,l.kt)("a",{parentName:"td",href:"#class_q_cef_event_1aa4e043ac8c5d7c5d75ca878ca75ab017"},(0,l.kt)("inlineCode",{parentName:"a"},"d_ptr"))),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"members"},"Members"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_event_1ab444dcc856db38dcc679db326ef22bf5"},(0,l.kt)("inlineCode",{parentName:"h3"},"public  "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1ab444dcc856db38dcc679db326ef22bf5"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,l.kt)("inlineCode",{parentName:"h3"},"()")),(0,l.kt)("p",null,"QCefEvent \u6784\u9020\u51fd\u6570"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_event_1a2b2b8bacbfebefe302cd1fab91cd5e8c"},(0,l.kt)("inlineCode",{parentName:"h3"},"public  "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a2b2b8bacbfebefe302cd1fab91cd5e8c"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,l.kt)("inlineCode",{parentName:"h3"},"(const QString & name)")),(0,l.kt)("p",null,"QCefEvent \u6709\u53c2\u6784\u9020\u51fd\u6570"),(0,l.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," \u4e8b\u4ef6\u540d\u79f0")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_event_1a357d5cb242977682523e69d501c673d4"},(0,l.kt)("inlineCode",{parentName:"h3"},"public  "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a357d5cb242977682523e69d501c673d4"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,l.kt)("inlineCode",{parentName:"h3"},"(const "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_event"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,l.kt)("inlineCode",{parentName:"h3"}," & other)")),(0,l.kt)("p",null,"QCefEvent \u62f7\u8d1d\u6784\u9020\u51fd\u6570"),(0,l.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"other")," \u53e6\u4e00\u4e2a QCefEvent \u5b9e\u4f8b")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_event_1a95e2f8c582270de0f9501945a6e063ee"},(0,l.kt)("inlineCode",{parentName:"h3"},"public "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_event"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,l.kt)("inlineCode",{parentName:"h3"},"&"),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a95e2f8c582270de0f9501945a6e063ee"},(0,l.kt)("inlineCode",{parentName:"a"},"operator=")),(0,l.kt)("inlineCode",{parentName:"h3"},"(const "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_event"},(0,l.kt)("inlineCode",{parentName:"a"},"QCefEvent")),(0,l.kt)("inlineCode",{parentName:"h3"}," & other)")),(0,l.kt)("p",null,"QCefEvent \u62f7\u8d1d\u8d4b\u503c\u51fd\u6570"),(0,l.kt)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"other")," \u53e6\u4e00\u4e2a QCefEvent \u5b9e\u4f8b")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_event_1a5c0e38242fa1ba823f1664232966787c"},(0,l.kt)("inlineCode",{parentName:"h3"},"public  "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a5c0e38242fa1ba823f1664232966787c"},(0,l.kt)("inlineCode",{parentName:"a"},"~QCefEvent")),(0,l.kt)("inlineCode",{parentName:"h3"},"()")),(0,l.kt)("p",null,"QCefEvent \u6790\u6784\u51fd\u6570"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_event_1a5db1273fdda416900f5b7b26a119c85a"},(0,l.kt)("inlineCode",{parentName:"h3"},"public void "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a5db1273fdda416900f5b7b26a119c85a"},(0,l.kt)("inlineCode",{parentName:"a"},"setEventName")),(0,l.kt)("inlineCode",{parentName:"h3"},"(const QString & name)")),(0,l.kt)("p",null,"\u8bbe\u7f6e\u4e8b\u4ef6\u540d\u79f0"),(0,l.kt)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," \u8981\u8bbe\u7f6e\u7684\u540d\u79f0")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_event_1a5a970c76a348788b15a040c8c405a103"},(0,l.kt)("inlineCode",{parentName:"h3"},"public const QString "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a5a970c76a348788b15a040c8c405a103"},(0,l.kt)("inlineCode",{parentName:"a"},"eventName")),(0,l.kt)("inlineCode",{parentName:"h3"},"() const")),(0,l.kt)("p",null,"\u83b7\u53d6\u4e8b\u4ef6\u540d\u79f0"),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,l.kt)("p",null,"\u4e8b\u4ef6\u540d\u79f0"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_event_1ac84ba1292bcf56abdc5c6c4245aa6c04"},(0,l.kt)("inlineCode",{parentName:"h3"},"public void "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1ac84ba1292bcf56abdc5c6c4245aa6c04"},(0,l.kt)("inlineCode",{parentName:"a"},"setArguments")),(0,l.kt)("inlineCode",{parentName:"h3"},"(const QVariantList & args)")),(0,l.kt)("p",null,"\u8bbe\u7f6e\u53c2\u6570\u5217\u8868"),(0,l.kt)("h4",{id:"\u53c2\u6570-4"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"args")," \u53c2\u6570\u5217\u8868")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_event_1a4cf70fa60235d723b9e578cded919327"},(0,l.kt)("inlineCode",{parentName:"h3"},"public QVariantList & "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1a4cf70fa60235d723b9e578cded919327"},(0,l.kt)("inlineCode",{parentName:"a"},"arguments")),(0,l.kt)("inlineCode",{parentName:"h3"},"()")),(0,l.kt)("p",null,"\u83b7\u53d6\u53c2\u6570\u5217\u8868"),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,l.kt)("p",null,"\u53c2\u6570\u5217\u8868"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"class_q_cef_event_1aa4e043ac8c5d7c5d75ca878ca75ab017"},(0,l.kt)("inlineCode",{parentName:"h3"},"private QScopedPointer< QCefEventPrivate > "),(0,l.kt)("a",{parentName:"h3",href:"#class_q_cef_event_1aa4e043ac8c5d7c5d75ca878ca75ab017"},(0,l.kt)("inlineCode",{parentName:"a"},"d_ptr"))))}m.isMDXComponent=!0}}]);