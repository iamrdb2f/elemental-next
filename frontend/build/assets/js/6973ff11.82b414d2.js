"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5891],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||n;return r?i.createElement(h,o(o({ref:t},d),{},{components:r})):i.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<n;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7051:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var i=r(7462),a=(r(7294),r(3905));const n={title:"How To Use Selenium Grid Reliably",slug:"70-grid-extras",number:70,publish_date:new Date("2015-08-25T00:00:00.000Z"),tags:["grid","grid extras","selenium grid"],level:2,category:"infrastructure"},o=void 0,s={unversionedId:"non-updated-tips/grid-extras/readme",id:"non-updated-tips/grid-extras/readme",title:"How To Use Selenium Grid Reliably",description:"NOTE: This is a guest post from Dima Kovalenko. He's a core committer to the Selenium project and Selenium-Grid-Extras. You can find him at @dimacus on Twitter or on the Selenium IRC chat channel as dimacus. You can also check out his testing blog or his book on Selenium.",source:"@site/docs/non-updated-tips/70-grid-extras/readme.md",sourceDirName:"non-updated-tips/70-grid-extras",slug:"/non-updated-tips/grid-extras/70-grid-extras",permalink:"/docs/non-updated-tips/grid-extras/70-grid-extras",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/70-grid-extras/readme.md",tags:[{label:"grid",permalink:"/docs/tags/grid"},{label:"grid extras",permalink:"/docs/tags/grid-extras"},{label:"selenium grid",permalink:"/docs/tags/selenium-grid"}],version:"current",frontMatter:{title:"How To Use Selenium Grid Reliably",slug:"70-grid-extras",number:70,publish_date:"2015-08-25T00:00:00.000Z",tags:["grid","grid extras","selenium grid"],level:2,category:"infrastructure"},sidebar:"tutorialSidebar",previous:{title:"How To Use Safari",permalink:"/docs/non-updated-tips/safari/java/69-safari"},next:{title:"CSharp",permalink:"/docs/updated-tips/template/csharp/"}},l={},u=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"A Selenium Grid Extras Primer",id:"a-selenium-grid-extras-primer",level:2},{value:"Explicitly kill web browser after each test",id:"explicitly-kill-web-browser-after-each-test",level:3},{value:"Modify settings for Internet Explorer",id:"modify-settings-for-internet-explorer",level:3},{value:"Periodically restart Grid Nodes",id:"periodically-restart-grid-nodes",level:3},{value:"Restart the OS after several test runs",id:"restart-the-os-after-several-test-runs",level:3},{value:"Put Into Practice",id:"put-into-practice",level:2},{value:"Another Advantage",id:"another-advantage",level:2},{value:"Outro",id:"outro",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE: This is a guest post from Dima Kovalenko. He's a core committer to the Selenium project and ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/groupon/Selenium-Grid-Extras"},"Selenium-Grid-Extras"),". You can find him at ",(0,a.kt)("a",{parentName:"strong",href:"https://twitter.com/dimacus"},"@dimacus on Twitter")," or on ",(0,a.kt)("a",{parentName:"strong",href:"http://elementalselenium.com/tips/20-irc-chat"},"the Selenium IRC chat channel")," as ",(0,a.kt)("inlineCode",{parentName:"strong"},"dimacus"),". You can also check out ",(0,a.kt)("a",{parentName:"strong",href:"http://agilesoftwaretesting.com/"},"his testing blog")," or ",(0,a.kt)("a",{parentName:"strong",href:"http://www.amazon.com/Selenium-Design-Patterns-Best-Practices-ebook/dp/B00NVDAWXI/"},"his book on Selenium"),".")),(0,a.kt)("h2",{id:"the-problem"},"The Problem"),(0,a.kt)("p",null,"When I first encountered Selenium Grid, I was extremely happy and impressed by the possibilities. The idea of testing multiple browsers and computers at the same time is great! By using the Grid, we were able to collect all of the obsolete computers that were collecting dust in IT closets and make them do some work."),(0,a.kt)("p",null,"Shortly after setting up the first Grid at work, we started to see some odd behaviors. Windows computers would start running extremely slow, doubling and tripling the execution time."),(0,a.kt)("p",null,"From time to time Internet Explorer would crash and not close properly, which would lead to all subsequent Internet Explorer to not close after the test is complete; after 20 or 30 test runs, the computer would have dozens of Internet Explorer instances open. This lead to an all familiar crashing sight."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"an all familiar Windows crashing sight",src:r(8240).Z,width:"499",height:"373"})),(0,a.kt)("p",null,"At this point the computer would become unresponsive, and all subsequent tests running on the node would crash with strange errors. Dozens of similar errors occurred during the execution of a test suite on Windows, Linux, and OSX nodes. After a while I had to give up and run our tests without the Grid."),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"A couple of years after that Selenium Grid 2.0 came out. It had many of the previous issues fixed. However, the fixes only applied to stabilizing ",(0,a.kt)("em",{parentName:"p"},"the web browser"),", some of the OS level problems still persisted. But the advantages of Grid 2.0 outweighed the short falls, so we decided to invest some time in setting up the Grid once more."),(0,a.kt)("p",null,"This time around I decided to supplement the Selenium Grid with some helper scripts, giving birth to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/groupon/Selenium-Grid-Extras"},"the Selenium Grid Extras project"),"."),(0,a.kt)("h2",{id:"a-selenium-grid-extras-primer"},"A Selenium Grid Extras Primer"),(0,a.kt)("p",null,"The idea behind the project was to fix some of the issues that come up outside of the web browser. Cleaning up the node before and after each test at the Operating System level has improved the stability of our testing dramatically."),(0,a.kt)("p",null,"Lets take a look at some of the clean up tasks that Selenium Grid Extras performs to give stability to the Grid Node."),(0,a.kt)("h3",{id:"explicitly-kill-web-browser-after-each-test"},"Explicitly kill web browser after each test"),(0,a.kt)("p",null,"After a test run is complete, Selenium Grid Extras tries to kill any remaining or crashed instances of the browser used. Unlike the kill command that comes from within WebDriver, this kill command is an OS level one, which is a ",(0,a.kt)("inlineCode",{parentName:"p"},"taskkill firefox")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"kill -9 firefox"),") equivalent. This guarantees that the node is still in a good working condition before each test starts."),(0,a.kt)("h3",{id:"modify-settings-for-internet-explorer"},"Modify settings for Internet Explorer"),(0,a.kt)("p",null,"There are multiple settings that need to be tweaked to allow IE tests to run properly. These include setting the Protected Mode and Mixed Content Modes on and off. When Selenium Grid Extras is launched, it modifies all of these settings for a hassle free test execution."),(0,a.kt)("h3",{id:"periodically-restart-grid-nodes"},"Periodically restart Grid Nodes"),(0,a.kt)("p",null,'No matter how well an application is written, it will have some memory leaks and issues. We found that restarting the Java process from time to time is the fastest and most reliable to "clear the air". So when the Grid Node is not in use Selenium Grid Extras restarts the Java process to clear up the JVM of any remaining memory leaks that can cause instability.'),(0,a.kt)("h3",{id:"restart-the-os-after-several-test-runs"},"Restart the OS after several test runs"),(0,a.kt)("p",null,"To add one more level of clean up, we restart the whole Operating System after certain amount of test runs. This helps to clear up any remaining items that might have crashed in the Operating System. Restarting the whole machine every 10 to 20 test runs is a huge boost in stability."),(0,a.kt)("h2",{id:"put-into-practice"},"Put Into Practice"),(0,a.kt)("p",null,"Because of these clean up measures, we were able to run close to ",(0,a.kt)("strong",{parentName:"p"},"180,000 test sessions")," on a Grid of 15 machines in one month, with only ",(0,a.kt)("strong",{parentName:"p"},"2% failure rate")," due to node instability."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE: A single session can execute more than a single test. A failure due to instability applies to the browser not opening up or some other unrelated crash on the Operating System. This does not include failures of tests because the website itself was broken or due to test flakiness.")),(0,a.kt)("h2",{id:"another-advantage"},"Another Advantage"),(0,a.kt)("p",null,"Stability isn't the only advantage of using Selenium Grid Extras; one of the most exciting features is the ability to ",(0,a.kt)("em",{parentName:"p"},"automatically record the video of the running test session"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screencap of video recording",src:r(9269).Z,width:"640",height:"517"})),(0,a.kt)("p",null,"The video recording happens at the OS level and ",(0,a.kt)("strong",{parentName:"p"},"records not only the browser but also some information about the current node")," (shown in the bottom left corner). Recording at the OS level allows us to review a test failure more effectively."),(0,a.kt)("p",null,"Sometimes a test fails without an obvious reason, but after reviewing the video we will discover that a system update or a pop-up blocker is to blame for the test failure."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"example failure due to pop-up being blocked",src:r(9506).Z,width:"640",height:"480"})),(0,a.kt)("h2",{id:"outro"},"Outro"),(0,a.kt)("p",null,"I hope that using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/groupon/Selenium-Grid-Extras"},"Selenium Grid Extras")," will assist you at your job and save you some of the confusion you might run in from time to time when using Selenium Grid."),(0,a.kt)("p",null,"Happy Testing!"))}c.isMDXComponent=!0},8240:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/crash-05fac47a745bc1d288979dc3c1421e8e.png"},9506:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/popup-b1f59f8daf19f54ee45a4081fdb8903b.gif"},9269:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/video-7c323aedc35af4d95f59408fd3ffdd01.png"}}]);