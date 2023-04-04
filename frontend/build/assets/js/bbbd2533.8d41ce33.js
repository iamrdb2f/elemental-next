"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8747],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),c=o,b=d["".concat(s,".").concat(c)]||d[c]||m[c]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4363:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"How To Simulate Slow Connections",slug:"64-limit-bandwidth",number:64,publish_date:new Date("2015-10-16T00:00:00.000Z"),tags:["browsermob-proxy"],level:3,category:"tools"},i=void 0,l={unversionedId:"non-updated-tips/limit-bandwidth/readme",id:"non-updated-tips/limit-bandwidth/readme",title:"How To Simulate Slow Connections",description:"The Problem",source:"@site/docs/non-updated-tips/64-limit-bandwidth/readme.md",sourceDirName:"non-updated-tips/64-limit-bandwidth",slug:"/non-updated-tips/limit-bandwidth/64-limit-bandwidth",permalink:"/docs/non-updated-tips/limit-bandwidth/64-limit-bandwidth",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/64-limit-bandwidth/readme.md",tags:[{label:"browsermob-proxy",permalink:"/docs/tags/browsermob-proxy"}],version:"current",frontMatter:{title:"How To Simulate Slow Connections",slug:"64-limit-bandwidth",number:64,publish_date:"2015-10-16T00:00:00.000Z",tags:["browsermob-proxy"],level:3,category:"tools"},sidebar:"tutorialSidebar",previous:{title:"How To Right-click",permalink:"/docs/non-updated-tips/right-click/java/63-right-click"},next:{title:"How To Visually Verify Your Locators",permalink:"/docs/non-updated-tips/highlight-elements/java/65-highlight-elements"}},s={},p=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"A Brief Primer on BrowserMob Proxy",id:"a-brief-primer-on-browsermob-proxy",level:2},{value:"An Example",id:"an-example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Outro",id:"outro",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-problem"},"The Problem"),(0,o.kt)("p",null,"With Selenium you have the luxury of cross browser testing. But what happens when you also need to test how your application behaves on a ",(0,o.kt)("em",{parentName:"p"},"slow")," connection?"),(0,o.kt)("h2",{id:"a-solution"},"A Solution"),(0,o.kt)("p",null,"With the help of a proxy server like ",(0,o.kt)("a",{parentName:"p",href:"http://bmp.lightbody.net/"},"BrowserMob Proxy")," we can simulate bandwidth limitations and run our tests to see if they fall down. In order to do this we'll also need to adjust our Selenium's default timeout."),(0,o.kt)("h2",{id:"a-brief-primer-on-browsermob-proxy"},"A Brief Primer on BrowserMob Proxy"),(0,o.kt)("p",null,"BrowserMob Proxy is a server which sits between your browser and the application you're testing. You connect to it by configuring a browser profile to pass through it. As listed on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lightbody/browsermob-proxy#features-and-usage"},"the BrowserMob Proxy GitHub page"),", here are some of the benefits it offers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"blacklisting and whitelisting certain URL patterns"),(0,o.kt)("li",{parentName:"ul"},"simulating various bandwidth and latency"),(0,o.kt)("li",{parentName:"ul"},"remapping DNS lookups"),(0,o.kt)("li",{parentName:"ul"},"flushing DNS caching"),(0,o.kt)("li",{parentName:"ul"},"controlling DNS and request timeouts"),(0,o.kt)("li",{parentName:"ul"},"automatic BASIC authorization")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE: You can also capture HTTP status codes with it as well. See ",(0,o.kt)("a",{parentName:"strong",href:"/tips/17-retrieve-http-status-codes"},"tip 17")," for details on how to do that.")),(0,o.kt)("p",null,"Let's dig in with an example."),(0,o.kt)("h2",{id:"an-example"},"An Example"),(0,o.kt)("p",null,"First we'll need to download BrowserMob Proxy from ",(0,o.kt)("a",{parentName:"p",href:"http://bmp.lightbody.net/"},"here"),"."),(0,o.kt)("p",null,"Then we can wire up our test script to pull in our requisite libraries (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to drive the browser, ",(0,o.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," and it's matchers for our assertion, and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jarib/browsermob-proxy-rb"},(0,o.kt)("inlineCode",{parentName:"a"},"browsermob/proxy"))," to control the proxy server)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: bandwidth_limit.rb\n\nrequire 'browsermob/proxy'\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n")),(0,o.kt)("p",null,"Now let's configure the proxy server and bind it to a Selenium browser profile."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"def configure_proxy\n  server = BrowserMob::Proxy::Server.new('./browsermob-proxy-2.1.0-beta-3/bin/browsermob-proxy')\n  server.start\n  @proxy = server.create_proxy\n  profile = Selenium::WebDriver::Firefox::Profile.new\n  profile.proxy = @proxy.selenium_proxy\n  profile\nend\n")),(0,o.kt)("p",null,"Now we can create ",(0,o.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," methods to handle our test configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"def setup\n  @driver = Selenium::WebDriver.for :firefox, profile: configure_proxy\n  @driver.manage.timeouts.page_load = 300 # seconds\n  @proxy.limit(upstream_kbps: 20, downstream_kbps: 30)\nend\n\ndef teardown\n  @driver.quit\n  @proxy.close\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"setup")," we set the default timeout for Selenium to 5 minutes (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"300")," seconds) and specify an upload limit of ",(0,o.kt)("inlineCode",{parentName:"p"},"20")," kilobits per second and a download limit of ",(0,o.kt)("inlineCode",{parentName:"p"},"30")," kilobits per second (which is similar to a dial-up connection)."),(0,o.kt)("p",null,"Now let's write our test. A simple page load and copy assertion will suffice (to make sure the page actually loaded)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com'\n  expect(@driver.find_element(class: 'heading').text).to eql('Welcome to the Internet')\nend\n")),(0,o.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,o.kt)("p",null,"If you save this file and run it (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"ruby bandwidth_limit.rb")," from the command-line) here is what will happen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Proxy server starts"),(0,o.kt)("li",{parentName:"ul"},"Proxy server session created"),(0,o.kt)("li",{parentName:"ul"},"Browser opens (connecting to the proxy server session with a large default timeout)"),(0,o.kt)("li",{parentName:"ul"},"Proxy bandwidth constraints applied"),(0,o.kt)("li",{parentName:"ul"},"Visit the page (which loads slowly)"),(0,o.kt)("li",{parentName:"ul"},"Page eventually loads"),(0,o.kt)("li",{parentName:"ul"},"Grab the text from the page heading"),(0,o.kt)("li",{parentName:"ul"},"Perform an assertion against the text to make sure it loaded"),(0,o.kt)("li",{parentName:"ul"},"Browser closes"),(0,o.kt)("li",{parentName:"ul"},"Proxy session closes")),(0,o.kt)("h2",{id:"outro"},"Outro"),(0,o.kt)("p",null,"It may not be clear in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jarib/browsermob-proxy-rb"},(0,o.kt)("inlineCode",{parentName:"a"},"browsermob-proxy-rb"))," what options and functionality are available since the library is light on documentation. But the code is easy to read and has good comments. It's worth looking at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jarib/browsermob-proxy-rb/blob/master/lib/browsermob/proxy/client.rb"},"the client class")," to see what's available."),(0,o.kt)("p",null,"Alternatively, you can BrowserMob Proxy through it's Rest API. You can find out more about that on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lightbody/browsermob-proxy#rest-api"},"the BrowserMob Proxy GitHub page"),"."),(0,o.kt)("p",null,"Happy Testing!"))}m.isMDXComponent=!0}}]);