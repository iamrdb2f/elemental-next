"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(n),c=i,f=p["".concat(s,".").concat(c)]||p[c]||m[c]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={title:"How to Export Tests from Selenium IDE",slug:"6-export-from-selenium-ide",number:6,publish_date:new Date("2015-10-20T00:00:00.000Z"),tags:["selenium ide","exporting"],level:1,category:"tools"},l=void 0,a={unversionedId:"non-updated-tips/export-from-selenium-ide/readme",id:"non-updated-tips/export-from-selenium-ide/readme",title:"How to Export Tests from Selenium IDE",description:"The Problem",source:"@site/docs/non-updated-tips/6-export-from-selenium-ide/readme.md",sourceDirName:"non-updated-tips/6-export-from-selenium-ide",slug:"/non-updated-tips/export-from-selenium-ide/6-export-from-selenium-ide",permalink:"/docs/non-updated-tips/export-from-selenium-ide/6-export-from-selenium-ide",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/6-export-from-selenium-ide/readme.md",tags:[{label:"selenium ide",permalink:"/docs/tags/selenium-ide"},{label:"exporting",permalink:"/docs/tags/exporting"}],version:"current",frontMatter:{title:"How to Export Tests from Selenium IDE",slug:"6-export-from-selenium-ide",number:6,publish_date:"2015-10-20T00:00:00.000Z",tags:["selenium ide","exporting"],level:1,category:"tools"},sidebar:"tutorialSidebar",previous:{title:"How To Work with Multiple Windows",permalink:"/docs/non-updated-tips/work-with-multiple-windows/java/4-work-with-multiple-windows"},next:{title:"How To Download a File Without a Browser",permalink:"/docs/non-updated-tips/download-a-file-revisited/java/8-download-a-file-revisited"}},s={},u=[{value:"The Problem",id:"the-problem",level:2},{value:"An Example",id:"an-example",level:2},{value:"A Better Example",id:"a-better-example",level:2},{value:"Expected Outcome",id:"expected-outcome",level:2},{value:"Outro",id:"outro",level:2}],d={toc:u},p="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"the-problem"},"The Problem"),(0,i.kt)("p",null,"Selenium IDE is a useful tool if you're new to Selenium. While it enables you to quickly record and playback test cases that you can save and re-use later, it's not a good long-term solution for several reasons."),(0,i.kt)("p",null,"The biggest is that the Selenium Community advocates and helps support a much more reliable and robust approach. And the first step in getting there is to export your tests from Selenium IDE (or Selenium Builder)."),(0,i.kt)("p",null,"Let's dig in with an example."),(0,i.kt)("h2",{id:"an-example"},"An Example"),(0,i.kt)("p",null,"With a simple test case set up in Selenium IDE we're ready to get started."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Selenium IDE Script",src:n(9239).Z,width:"1438",height:"1158"})),(0,i.kt)("p",null,"It does the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Loads Google"),(0,i.kt)("li",{parentName:"ul"},"Searches ",(0,i.kt)("inlineCode",{parentName:"li"},"element selenium tips")),(0,i.kt)("li",{parentName:"ul"},"Asserts that the page contains the text we expect")),(0,i.kt)("p",null,"Exporting a test is just a couple of clicks away. The best option given our preference (Ruby and WebDriver) is to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ruby / RSpec / WebDriver")," option from the menu."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Exporting Selenium IDE Script",src:n(5541).Z,width:"717",height:"411"})),(0,i.kt)("p",null,"After saving this Ruby file to somewhere on disk we open it up and behold the massive amount of code that was just generated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'# filename: search.rb\n\nrequire "json"\nrequire "selenium-webdriver"\nrequire "rspec"\ninclude RSpec::Expectations\n\ndescribe "Search" do\n\n  before(:each) do\n    @driver = Selenium::WebDriver.for :firefox\n    @base_url = "https://www.google.com/"\n    @accept_next_alert = true\n    @driver.manage.timeouts.implicit_wait = 30\n    @verification_errors = []\n  end\n\n  after(:each) do\n    @driver.quit\n    @verification_errors.should == []\n  end\n\n  it "test_search" do\n    @driver.get(@base_url + "/?gws_rd=ssl")\n    @driver.find_element(:id, "lst-ib").clear\n    @driver.find_element(:id, "lst-ib").send_keys "elemental selenium tips"\n    # ERROR: Caught exception [ERROR: Unsupported command [selectWindow | null | ]]\n    (@driver.find_element(:link, "Tip Archive - Elemental Selenium").text).should == "Tip Archive - Elemental Selenium"\n  end\n\n  def element_present?(how, what)\n    ${receiver}.find_element(how, what)\n    true\n  rescue Selenium::WebDriver::Error::NoSuchElementError\n    false\n  end\n\n  def alert_present?()\n    ${receiver}.switch_to.alert\n    true\n  rescue Selenium::WebDriver::Error::NoAlertPresentError\n    false\n  end\n\n  def verify(&blk)\n    yield\n  rescue ExpectationNotMetError => ex\n    @verification_errors << ex\n  end\n\n  def close_alert_and_get_its_text(how, what)\n    alert = ${receiver}.switch_to().alert()\n    alert_text = alert.text\n    if (@accept_next_alert) then\n      alert.accept()\n    else\n      alert.dismiss()\n    end\n    alert_text\n  ensure\n    @accept_next_alert = true\n  end\nend\n')),(0,i.kt)("p",null,"This code will work if you run it, but a lot of it is not being used in this example. And there are some things going on that are not very efficient or effective."),(0,i.kt)("p",null,"So let's rework it and wrap it in a leaner shell."),(0,i.kt)("h2",{id:"a-better-example"},"A Better Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'# filename: search.rb\n\nrequire \'selenium-webdriver\'\n\ndescribe \'Search\' do\n\n  before(:each) do\n    @driver = Selenium::WebDriver.for :firefox\n    @driver.manage.timeouts.implicit_wait = 30\n  end\n\n  after(:each) do\n    @driver.quit\n  end\n\n  it "works" do\n    @driver.get("http://google.com")\n    @driver.find_element(:id, "lst-ib").clear\n    @driver.find_element(:id, "lst-ib").send_keys "elemental selenium tips"\n    expect(@driver.find_element(:link, "Tip Archive - Elemental Selenium").text).to eql(\n      "Tip Archive - Elemental Selenium")\n  end\n\nend\n')),(0,i.kt)("p",null,"We're left with the basics required to make our test work. By removing the unused helper methods from the generated code we are left with a much leaner and cleaner test. We'll eventually need some of the things we removed, but that's for a later time. If you're just getting started then what we ended up with is sufficient."),(0,i.kt)("h2",{id:"expected-outcome"},"Expected Outcome"),(0,i.kt)("p",null,"If you save this file and run it (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"rspec search.rb")," from the command line) here is what will happen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open the browser"),(0,i.kt)("li",{parentName:"ul"},"Visit Google"),(0,i.kt)("li",{parentName:"ul"},"Search for ",(0,i.kt)("inlineCode",{parentName:"li"},"elemental selenium tips")),(0,i.kt)("li",{parentName:"ul"},"Wait for the first search result to render"),(0,i.kt)("li",{parentName:"ul"},"Grab the text from it"),(0,i.kt)("li",{parentName:"ul"},"Assert that the text for it is what we expect")),(0,i.kt)("h2",{id:"outro"},"Outro"),(0,i.kt)("p",null,"If you see a lot of Selenium IDE exporting in your future then I recommend adding your own formatter to Selenium IDE and using that to instead of the built in ones. This can be done from the Options menu within Selenium IDE (e.g., click ",(0,i.kt)("inlineCode",{parentName:"p"},"Options")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"Options"),", select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Formats")," tab, and click ",(0,i.kt)("inlineCode",{parentName:"p"},"Add"),"). It should be pretty straight-forward to wire one up and customize it after you look at the other formatters as examples."),(0,i.kt)("p",null,"But ideally, with enough practice and proper abstractions in place you'll be able to write your tests quickly and without the need for Selenium IDE. If you want a complete guide on how to do this, be sure to check out ",(0,i.kt)("a",{parentName:"p",href:"https://seleniumguidebook.com/"},"The Selenium Guidebook"),"."),(0,i.kt)("p",null,"Happy Testing!"))}m.isMDXComponent=!0},5541:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/se-ide-script-export-fb03ba5f17f18828a480806474d5a8a8.png"},9239:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/se-ide-script-e692eea416ed5889990f32352b1e7fde.png"}}]);