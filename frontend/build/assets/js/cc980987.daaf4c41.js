"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={title:"Ruby",id:"23-dynamic-pages-ruby",slug:"ruby/",number:23,publish_date:new Date("2015-10-13T00:00:00.000Z"),last_update:{date:new Date("2023-02-28T00:00:00.000Z")},tags:["dynamic pages","ajax","javascript","waiting","explicit waits"],level:2,category:["fundamentals"],language:"ruby"},l="How to Test Dynamic Pages",o={unversionedId:"updated-tips/dynamic-pages/23-dynamic-pages-ruby",id:"updated-tips/dynamic-pages/23-dynamic-pages-ruby",title:"Ruby",description:"Intro",source:"@site/docs/updated-tips/23-dynamic-pages/ruby.md",sourceDirName:"updated-tips/23-dynamic-pages",slug:"/updated-tips/dynamic-pages/ruby/",permalink:"/elemental-next/docs/updated-tips/dynamic-pages/ruby/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/23-dynamic-pages/ruby.md",tags:[{label:"dynamic pages",permalink:"/elemental-next/docs/tags/dynamic-pages"},{label:"ajax",permalink:"/elemental-next/docs/tags/ajax"},{label:"javascript",permalink:"/elemental-next/docs/tags/javascript"},{label:"waiting",permalink:"/elemental-next/docs/tags/waiting"},{label:"explicit waits",permalink:"/elemental-next/docs/tags/explicit-waits"}],version:"current",frontMatter:{title:"Ruby",id:"23-dynamic-pages-ruby",slug:"ruby/",number:23,publish_date:"2015-10-13T00:00:00.000Z",last_update:{date:"2023-02-28T00:00:00.000Z"},tags:["dynamic pages","ajax","javascript","waiting","explicit waits"],level:2,category:["fundamentals"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/updated-tips/locator-strategy/ruby/"},next:{title:"Ruby",permalink:"/elemental-next/docs/updated-tips/rest-apis/ruby/"}},s={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-test-dynamic-pages"},"How to Test Dynamic Pages"),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"This tip will go over how to implement explicit waits for testing dynamic web pages."),(0,i.kt)("p",null,"Let's say you want to test some functionality of a web application but it loads things dynamically. You might think about using a hard-coded sleep (that you constantly tweak due to test failures) or you use a blanket timeout (like an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/selenium/wiki/Ruby-Bindings#implicit-waits"},"Implicit Wait"),") that you likely bump up to address test instabilities as well."),(0,i.kt)("p",null,"This ",(0,i.kt)("em",{parentName:"p"},"may")," work in the short term, but your tests are now slower and leaving you (and your team) feeling like your test automation is on shaky ground -- uncertain of when the next break/fix cycle will happen."),(0,i.kt)("h2",{id:"a-solution"},"A Solution"),(0,i.kt)("p",null,"By using a flexible wait strategy you can easily meet the rigors of testing dynamic web applications."),(0,i.kt)("p",null,"Thankfully Selenium comes with one built in -- ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/selenium/wiki/Ruby-Bindings#explicit-waits"},"Explicit Waits"),". With them you specify a timeout and an action. Selenium will repeatedly try that action until it can either complete it successfully (at which point it will move onto the next step of the test), or it will throw a timeout exception (causing your test to error)."),(0,i.kt)("p",null,"Let's continue with an example."),(0,i.kt)("h2",{id:"example-1"},"Example 1"),(0,i.kt)("p",null,"Let's use from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tourdedave/the-internet"},"the-internet")," which load content dynamically (",(0,i.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/dynamic_loading"},"link"),"). On it there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"Start")," button that when clicked will trigger a loading bar to appear for 5 seconds. After that time it will disappear and a new element with the text ",(0,i.kt)("inlineCode",{parentName:"p"},"'Hello World!'")," will appear."),(0,i.kt)("p",null,"We'll start by requiring our dependent libraries (",(0,i.kt)("inlineCode",{parentName:"p"},"selenium-webriver")," to drive the browser and ",(0,i.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," to perform our assertions) and wiring up some ",(0,i.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," methods to handle our test configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: dynamic_loading.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,i.kt)("p",null,"Now we can create our first test. In it we'll visit the page, click the start button, wait for the finish text to appear, and assert that it appeared."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/2'\n  @driver.find_element(css: '#start button').click\n  Selenium::WebDriver::Wait.new(timeout: 6).until { @driver.find_element(id: 'finish').displayed? }\n  expect(@driver.find_element(id: 'finish').displayed?).to eql true\nend\n")),(0,i.kt)("p",null,"In the code above we are using an explicit wait with a timeout of ",(0,i.kt)("inlineCode",{parentName:"p"},"6")," seconds (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"Selenium::WebDriver::Wait.new(timeout: 6).until"),"), looking for the element with the finish text (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"@driver.find_element(id: 'finish')"),", and seeing if it's displayed (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},".displayed?"),")."),(0,i.kt)("p",null,"If we set the timeout too low (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"timeout: 2"),") Selenium won't wait long enough for the loading bar to finish, which will trigger the timeout threshold and throw an exception (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"until': timed out after 2 seconds (Selenium::WebDriver::Error::TimeOutError)"),")."),(0,i.kt)("p",null,"And if we didn't use an explicit wait at all, the test would have errored because Selenium would have tried to check for the finish text before it displayed and return a ",(0,i.kt)("inlineCode",{parentName:"p"},"NoSuchElement")," exception (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},'Unable to locate element: {"method":"css selector","selector":"#finish"} (Selenium::WebDriver::Error::NoSuchElementError)'),")."),(0,i.kt)("p",null,"For applications that already have the target element on the page but have it hidden, this approach will work as well (which we can see by pointing our test at the other dynamic loading example)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/1'\n  @driver.find_element(css: '#start button').click\n  Selenium::WebDriver::Wait.new(timeout: 6).until { @driver.find_element(id: 'finish').displayed? }\n  expect(@driver.find_element(id: 'finish').displayed?).to eql true\nend\n")),(0,i.kt)("h2",{id:"example-2"},"Example 2"),(0,i.kt)("p",null,"Explicit waits are a useful tool to have in your toolbelt since they enable you to finely tune your tests and avoid static sleeps and arbitrary timeouts. But rather than litter your test code with the verbose Selenium incantation, it's best to pull this code out into a method that accepts a timeout argument and the action you want to wait for as a block."),(0,i.kt)("p",null,"You can then clean up our test code and reuse this method whenever an explicit wait is needed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"def wait_for(seconds = 6)\n  Selenium::WebDriver::Wait.new(:timeout => seconds).until { yield }\nend\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/1'\n  @driver.find_element(css: '#start button').click\n  wait_for { @driver.find_element(id: 'finish').displayed? }\n  expect(@driver.find_element(id: 'finish').displayed?).to eql true\nend\n")),(0,i.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,i.kt)("p",null,"When you save the file and run it (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"ruby dynamic_loading.rb")," from the command-line) here is what will happen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the browser"),(0,i.kt)("li",{parentName:"ul"},"Visit the page"),(0,i.kt)("li",{parentName:"ul"},"Click the Start button"),(0,i.kt)("li",{parentName:"ul"},"Wait for the loading bar to disappear and display the finish text"),(0,i.kt)("li",{parentName:"ul"},"Assert that the finish text element is displayed"),(0,i.kt)("li",{parentName:"ul"},"Close the browser")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"Hopefully this tip will help you build more efficient and resilient tests when faced with dynamic pages that are constructed in various ways."),(0,i.kt)("p",null,"Happy Testing!"),(0,i.kt)("h2",{id:"about-the-author"},"About The Author"),(0,i.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,i.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}c.isMDXComponent=!0}}]);