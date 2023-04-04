"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2454],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8492:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={title:"Ruby",id:"55-wrapper-ruby",slug:"ruby/",number:55,publish_date:new Date("2014-06-17T00:00:00.000Z"),last_update:{date:new Date("2023-03-06T00:00:00.000Z")},tags:["wrapper","growl","growl notifications"],level:2,category:["troubleshooting"],language:"ruby"},o="How to Add a Wrapper to Your Selenium Tests",l={unversionedId:"updated-tips/wrapper/55-wrapper-ruby",id:"updated-tips/wrapper/55-wrapper-ruby",title:"Ruby",description:"Intro",source:"@site/docs/updated-tips/55-wrapper/ruby.md",sourceDirName:"updated-tips/55-wrapper",slug:"/updated-tips/wrapper/ruby/",permalink:"/docs/updated-tips/wrapper/ruby/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/55-wrapper/ruby.md",tags:[{label:"wrapper",permalink:"/docs/tags/wrapper"},{label:"growl",permalink:"/docs/tags/growl"},{label:"growl notifications",permalink:"/docs/tags/growl-notifications"}],version:"current",frontMatter:{title:"Ruby",id:"55-wrapper-ruby",slug:"ruby/",number:55,publish_date:"2014-06-17T00:00:00.000Z",last_update:{date:"2023-03-06T00:00:00.000Z"},tags:["wrapper","growl","growl notifications"],level:2,category:["troubleshooting"],language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/docs/updated-tips/growl/ruby/"},next:{title:"Ruby",permalink:"/docs/updated-tips/junit-xml/ruby/"}},p={},s=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-add-a-wrapper-to-your-selenium-tests"},"How to Add a Wrapper to Your Selenium Tests"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"There may come a time where you want to access Selenium logs in real time. Although there is a way to do this where you have to explicitly request the logs after each test action (fine for one-offs), what if we wanted information for ",(0,a.kt)("strong",{parentName:"p"},"every")," test action?"),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"Instead of hard-coding logging requests all over the place, we can leverage an event listener to give us the information we want -- automatically and for each Selenium action."),(0,a.kt)("p",null,"This functionality is built in to Selenium in what's called the ",(0,a.kt)("a",{parentName:"p",href:"https://code.google.com/p/selenium/source/browse/rb/lib/selenium/webdriver/support/abstract_event_listener.rb"},"AbstractEventListener"),". This is a class which comes preloaded with helper methods that enable us to add behavior before and after common Selenium actions -- here's a list of the available methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"before_navigate_to")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"after_navigate_to")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"before_navigate_back")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"after_navigate_back")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"before_navigate_forward")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"after_navigate_forward")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"before_find")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"after_find")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"before_click")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"after_click")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"before_change_value_of")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"after_change_value_of")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"before_execute_script")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"after_execute_script")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"before_quit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"after_quit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"before_close")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"after_close"))),(0,a.kt)("p",null,"We can pick and choose from each of these methods and specify the additional behavior we want to occur. After that, it's just a simple matter of passing this information to Selenium when creating a browser instance."),(0,a.kt)("p",null,"Here is an example."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"To start, let's create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Wrapper")," class that inherits from ",(0,a.kt)("inlineCode",{parentName:"p"},"AbstractEventListener")," and add our behavior there."),(0,a.kt)("p",null,"The helper methods we're interested in are ",(0,a.kt)("inlineCode",{parentName:"p"},"after_navigate_to"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"before_find"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"after_find"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"before_click"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"after_click")," and they each require different arguments to be specified. See ",(0,a.kt)("a",{parentName:"p",href:"https://code.google.com/p/selenium/source/browse/rb/lib/selenium/webdriver/support/abstract_event_listener.rb#30"},"here")," for details."),(0,a.kt)("p",null,"And to make things interesting, let's wire up ",(0,a.kt)("a",{parentName:"p",href:"http://elementalselenium.com/tips/53-growl"},"jQuery Growl notifications"),"==",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"!! Link needs replacing !!")),"==."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'# filename: wrapper.rb\n\nclass Wrapper < Selenium::WebDriver::Support::AbstractEventListener\n\n  def after_navigate_to(url, driver)\n    add_growl(driver)\n    display_growl(driver, "Navigated to #{url}")\n  end\n\n  def before_find(by, what, driver)\n    display_growl(driver, "Finding element #{what}")\n  end\n\n  def after_find(by, what, driver)\n    display_growl(driver, "Found element #{what}")\n  end\n\n  def before_click(element, driver)\n    display_growl(driver, "Clicking on #{element.text}")\n    @pre_click_url = driver.current_url\n  end\n\n  def after_click(element, driver)\n    unless @pre_click_url == driver.current_url\n      add_growl(driver)\n      display_growl(driver, "URL changed to #{driver.current_url}")\n    end\n  end\n\n  private\n\n  def add_growl(driver)\n     driver.execute_script("if (!window.jQuery) {\n        var jquery = document.createElement(\'script\'); jquery.type = \'text/javascript\';\n        jquery.src = \'https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js\';\n        document.getElementsByTagName(\'head\')[0].appendChild(jquery);\n      }")\n\n    driver.execute_script("$.getScript(\'http://the-internet.herokuapp.com/js/vendor/jquery.growl.js\')")\n\n    driver.execute_script("$(\'head\').append(\'<link rel=\\"stylesheet\\" href=\\"http://the-internet.herokuapp.com/css/jquery.growl.css\\" type=\\"text/css\\" />\');")\n\n    sleep 1\n  end\n\n  def display_growl(driver, message)\n    driver.execute_script("$.growl({ title: \'Selenium\', message: \'#{message}\' });")\n    sleep 0.5\n  end\n\nend\n')),(0,a.kt)("p",null,"Our Event Listener helper methods give us access to the driver object at the precise moments we want in our test steps, and by wiring up growl notifications (see ",(0,a.kt)("inlineCode",{parentName:"p"},"add_growl")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"display_growl"),") we can now display notification messages in the browser window automatically without any additional work in our test code."),(0,a.kt)("p",null,"Let's go ahead and wire up our test code to use this new wrapper."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: wrapper_test.rb\n\nrequire 'selenium-webdriver'\nrequire_relative 'wrapper'\nrequire 'rspec/expectations'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox, listener: Wrapper.new\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n\nrun do\n  @driver.get 'http://the-internet.herokuapp.com'\n  @driver.find_elements(css: 'a').last.click\nend\n")),(0,a.kt)("p",null,"Everything here is pretty standard with the exception of two small changes to handle our wrapper. We first need to include the file (",(0,a.kt)("inlineCode",{parentName:"p"},"require_relative 'wrapper'"),") and then pass in an instance of the wrapper to Selenium (",(0,a.kt)("inlineCode",{parentName:"p"},"listener: Wrapper.new"),")."),(0,a.kt)("p",null,"Now if we run our test (",(0,a.kt)("inlineCode",{parentName:"p"},"ruby wrapper_test.rb"),") then we will see notification messages appear around each of the test actions as they occur."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Load the browser"),(0,a.kt)("li",{parentName:"ul"},"Load jQuery if it's not already loaded"),(0,a.kt)("li",{parentName:"ul"},"Load jQuery Growl and it's styles"),(0,a.kt)("li",{parentName:"ul"},"Display notifications in the browser window for each of the test actions")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"To see a video demo of this test, ",(0,a.kt)("a",{parentName:"p",href:"https://vimeo.com/98736887"},"click here"),"."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}c.isMDXComponent=!0}}]);