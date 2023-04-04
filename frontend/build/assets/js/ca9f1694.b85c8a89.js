"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={title:"Ruby",id:"15-download-secure-files-ruby",slug:"ruby/",number:15,publish_date:new Date("2015-08-20T00:00:00.000Z"),last_update:{date:new Date("2023-03-27T00:00:00.000Z")},tags:["files","downloading","authentication"],level:3,category:"fundamentals",language:"ruby"},i="How to Download Secure Files",l={unversionedId:"updated-tips/download-secure-files/15-download-secure-files-ruby",id:"updated-tips/download-secure-files/15-download-secure-files-ruby",title:"Ruby",description:"Intro",source:"@site/docs/updated-tips/15-download-secure-files/ruby.md",sourceDirName:"updated-tips/15-download-secure-files",slug:"/updated-tips/download-secure-files/ruby/",permalink:"/docs/updated-tips/download-secure-files/ruby/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/15-download-secure-files/ruby.md",tags:[{label:"files",permalink:"/docs/tags/files"},{label:"downloading",permalink:"/docs/tags/downloading"},{label:"authentication",permalink:"/docs/tags/authentication"}],version:"current",frontMatter:{title:"Ruby",id:"15-download-secure-files-ruby",slug:"ruby/",number:15,publish_date:"2015-08-20T00:00:00.000Z",last_update:{date:"2023-03-27T00:00:00.000Z"},tags:["files","downloading","authentication"],level:3,category:"fundamentals",language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/docs/updated-tips/how-to-access-basic-auth/ruby/"},next:{title:"CSharp",permalink:"/docs/updated-tips/take-screenshot-on-failure/csharp/"}},s={},d=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-download-secure-files"},"How to Download Secure Files"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"Previously, we've gone over how to test file downloads without a browser by leveraging Selenium Webdriver and an HTTP library in tandem."),(0,r.kt)("p",null,"This approach is great for testing general file downloads, but what if the file you want to download is behind authentication?"),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"To access secure files with our HTTP library we'll need to pull the authenticated session information out of Selenium's cookie store and pass it into the HTTP library when we perform the request."),(0,r.kt)("p",null,"Let's continue with some examples."),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"First let's require our libraries (",(0,r.kt)("inlineCode",{parentName:"p"},"selenium-webdriver")," to drive the browser, ",(0,r.kt)("inlineCode",{parentName:"p"},"rspec/expectations")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"RSpec::Matchers")," for our assertions, and ",(0,r.kt)("inlineCode",{parentName:"p"},"rest-client")," for our HTTP requests) and wire up some simple ",(0,r.kt)("inlineCode",{parentName:"p"},"setup"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"teardown"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: secure_download.rb\n\nrequire 'selenium-webdriver'\nrequire 'rspec/expectations'\nrequire 'rest-client'\ninclude RSpec::Matchers\n\ndef setup\n  @driver = Selenium::WebDriver.for :firefox\nend\n\ndef teardown\n  @driver.quit\nend\n\ndef run\n  setup\n  yield\n  teardown\nend\n")),(0,r.kt)("p",null,"Next we'll write our test. In it we'll want to access a page of download links that is behind some form of authentication (Basic HTTP Authentication in this case)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://admin:admin@the-internet.herokuapp.com/download_secure'\n  cookie = @driver.manage.cookie_named 'rack.session'\n  link = @driver.find_element(css: '.example a').attribute('href')\n  response = RestClient.head link, cookie: { cookie[:name] => cookie[:value] }\n  expect(response.headers[:content_type]).to eql('application/octet-stream')\n  expect(response.headers[:content_length].to_i).to be > 0\nend\n")),(0,r.kt)("p",null,"Once the page loads, we grab the authentication session cookie from Selenium along with the URL for the first file listed. Then we fire up our HTTP library and perform a ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD")," request using both the download link and the session cookie. We then check the response headers to make sure the file is the correct type and that it's not empty."),(0,r.kt)("p",null,"If we run this script, it will pass. But, it's only limited to the first download link, and it assumes that the file will always be whatever we declared (in this case 'application/octet-stream')."),(0,r.kt)("p",null,"In the next example, let's update the script to remedy these issues."),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("p",null,"Here, we will update our previous example code to make the script more robust, by adding a helper method just before our test code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"def content_type(file)\n  file = File.basename(file)\n  if file.include? '.txt'\n    'application/octet-stream'\n  elsif file.include? '.pdf'\n    'application/pdf'\n  else\n    raise 'Unknown file type'\n  end\nend\n")),(0,r.kt)("p",null,"With this new helper method added, we can tease out the filename from a given URL and return the correct content type. If the file type isn't recognized, then we'll stop the test and raise an exception."),(0,r.kt)("p",null,"Now we can update our test code to use this method in addition to grabbing all download links from the page and iterating through them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://admin:admin@the-internet.herokuapp.com/download_secure'\n  cookie = @driver.manage.cookie_named 'rack.session'\n  links = @driver.find_elements(css: '.example a')\n  links.map! { |link| link.attribute('href') }\n  links.each do |link|\n    response = RestClient.head link, cookie: { cookie[:name] => cookie[:value] }\n    expect(response.headers[:content_type]).to eql(content_type(link))\n    expect(response.headers[:content_length].to_i).to be > 0\n  end\nend\n")),(0,r.kt)("p",null,"By using ",(0,r.kt)("inlineCode",{parentName:"p"},"find_elements")," (plural) we get ",(0,r.kt)("em",{parentName:"p"},"all")," of the download links (returned in an array). We then use ",(0,r.kt)("inlineCode",{parentName:"p"},"map!")," to update the array of download links to give us ",(0,r.kt)("em",{parentName:"p"},"just")," the URLs (instead of a collection of Selenium objects which contain URLs). After that, we're able to iterate over the array of URLs, performing a ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD")," request and assertions for each one (but this time, we're using our new ",(0,r.kt)("inlineCode",{parentName:"p"},"content_type")," helper method)."),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"If we save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"ruby secure_download.rb")," from the command-line), here is what will happen."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Browser opens"),(0,r.kt)("li",{parentName:"ul"},"The secure file downloads page loads"),(0,r.kt)("li",{parentName:"ul"},"The authenticated cookie information is retrieved"),(0,r.kt)("li",{parentName:"ul"},"All download URLs on the page are found"),(0,r.kt)("li",{parentName:"ul"},"HTTP library performs a HEAD request against the download link using the retrieved cookie information"),(0,r.kt)("li",{parentName:"ul"},"The response headers are checked to make sure the file is the correct type and not empty"),(0,r.kt)("li",{parentName:"ul"},"The previous two steps are repeated until all download links are verified"),(0,r.kt)("li",{parentName:"ul"},"Browser closes")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"From here, it's simple enough to add in additional content types and file types. And while this example demonstrates accessing files behind Basic HTTP Authentication it should also work with files behind form-based authentication."),(0,r.kt)("p",null,"Hopefully this helps save you some time, enabling you to build a more lean and fast set of download tests."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}c.isMDXComponent=!0}}]);