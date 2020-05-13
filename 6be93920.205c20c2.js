(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(1),r=a(9),o=(a(0),a(213)),i={id:"frequently-asked-questions",title:"Frequently asked questions",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"FAQ",description:"You asked! We Answered! We collected here the most frequent question about SAP Cloud SDK for Java.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},s={id:"java/frequently-asked-questions",title:"Frequently asked questions",description:"You asked! We Answered! We collected here the most frequent question about SAP Cloud SDK for Java.",source:"@site/docs/java/faq.md",permalink:"/cloud-sdk/docs/java/frequently-asked-questions",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1589395994,sidebar_label:"FAQ",sidebar:"someSidebar",previous:{title:"Java API reference",permalink:"/cloud-sdk/docs/java/api-reference-java"},next:{title:"Introduction - SDK for JavaScript",permalink:"/cloud-sdk/docs/js/introduction"}},l=[{value:"Generic questions",id:"generic-questions",children:[]},{value:"OData related questions",id:"odata-related-questions",children:[]},{value:"REST related questions",id:"rest-related-questions",children:[]}],c={rightToc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"generic-questions"},"Generic questions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"How often do you release a new SDK version?"))),Object(o.b)("p",null,"We release ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://search.maven.org/artifact/com.sap.cloud.sdk/sdk-bom"}),"bi-weekly"),". All the features that are in\n",Object(o.b)("em",{parentName:"p"},"Generally Available")," or ",Object(o.b)("em",{parentName:"p"},"Beta")," state get into the next release. You can find the latest SDK version and the list\nof previous releases ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../api-reference-java"}),"here")," or on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://search.maven.org/artifact/com.sap.cloud.sdk/sdk-bom"}),"Maven\nCentral"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Do you release hot fixes?"))),Object(o.b)("p",null,"Yes, we do. They usually have a higher ",Object(o.b)("inlineCode",{parentName:"p"},"patch")," number according to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://semver.org/"}),"semver"),", i.e: 3.19.1 instead of\n3.19.0. Check our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.sap.com/doc/6c02295dfa8f47cf9c08a19f2e172901/1.0/en-US/index.html"}),"release notes")," for\nmore details."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Should I update with every release?"))),Object(o.b)("p",null,"The general recommendation is ",Object(o.b)("em",{parentName:"p"},"YES"),". This way you'll reduce the effort to keep up with the fast pace of cloud\ndevelopment. We try to keep stable functionality consistent and explicitly notify about breaking changes. Be cautious\nabout using features annotated as ",Object(o.b)("em",{parentName:"p"},"Beta")," because their API can change with every release."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Can I use features annotated as Beta in production"))),Object(o.b)("p",null,"We ",Object(o.b)("strong",{parentName:"p"},"do not recommend")," using API that is marked unstable in productive code. We do not guarantee any API compatibility\nfor future updates and the features might be experimental. You can use these features to test cutting edge\nfunctionality, provide us feedback, and plan migration steps when ",Object(o.b)("em",{parentName:"p"},"Beta")," features are releases as ",Object(o.b)("em",{parentName:"p"},"General\nAvailability"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"I think I found a bug in the SDK, what should I do?"))),Object(o.b)("p",null,"Please, report it to us via any available channel. The preferred support channel is ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/tagged/sap-cloud-sdk"}),"Stack\nOverflow"),". You can also create an issue on the Cloud SDK\nexternal GitHub repository or use the internal one if you're SAP employee."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"I'm creating a BCP incident, what's your component name?"))),Object(o.b)("p",null,"Choose ",Object(o.b)("inlineCode",{parentName:"p"},"XX-S4C-SDK")," if you are reporting an issue via BCP."),Object(o.b)("h2",{id:"odata-related-questions"},"OData related questions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"What versions of OData protocol do you support?"))),Object(o.b)("p",null,"We support OData v2 and OData v4 services. You can use pre-generated client libraries supplied with SDK or generate your\nclient from the SDK specification. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"features/odata/overview"}),"Find more details here.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Do you support ALL OData features?"))),Object(o.b)("p",null,"We support most of the OData features that are exposed by SAP services. However, the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.odata.org/documentation/"}),"OData\nspecification")," is huge and contains many features that would see rare to no\nuse. If you found a feature that you need but it is not yet supported by Cloud SDK for Java, please, make a feature request\nvia email cloudsdk","[at]","sap.com or create an issue towards one of our repositories."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"I receive an OData error/exception when using Cloud SDK for Java"))),Object(o.b)("p",null,"It is highly possible that you'll see some errors while developing. These errors are not always caused by flaws in the SDK\nas we often see inconsistent OData protocol handling by different services. Some of them even have known flaws for which\nwe have workarounds. If you can't solve your issue via debugging and experimenting, please, report your incident via\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/tagged/sap-cloud-sdk"}),"Stack Overflow")," or our GitHub repositories."),Object(o.b)("h2",{id:"rest-related-questions"},"REST related questions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Do you support REST client libraries?"))),Object(o.b)("p",null,"Yes, we do. We do not release a public REST client generator as of yet. We have a set of libraries supplied together\nwith Cloud SDK for Java. Some of them are available only for SAP internal use, others like Workflow service on Cloud\nFoundry are released publicly. Check our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"rest/overview"}),"REST capabilities")," and let us know if you need a library for an\nSAP service that you use and know to be providing REST API."))}u.isMDXComponent=!0},213:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return a?r.a.createElement(f,s({ref:t},c,{components:a})):r.a.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);