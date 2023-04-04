"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[8812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={title:"CSharp",id:"16-take-screenshot-on-failure-csharp",slug:"csharp/",number:16,publish_date:new Date("2015-07-08T00:00:00.000Z"),last_update:{date:new Date("2023-03-30T00:00:00.000Z")},tags:["reporting","screenshot"],level:2,category:["troubleshooting"],language:"csharp"},o="How to Take A Screenshot on Failure",s={unversionedId:"updated-tips/take-screenshot-on-failure/16-take-screenshot-on-failure-csharp",id:"updated-tips/take-screenshot-on-failure/16-take-screenshot-on-failure-csharp",title:"CSharp",description:"Intro",source:"@site/docs/updated-tips/16-take-screenshot-on-failure/csharp.md",sourceDirName:"updated-tips/16-take-screenshot-on-failure",slug:"/updated-tips/take-screenshot-on-failure/csharp/",permalink:"/docs/updated-tips/take-screenshot-on-failure/csharp/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/16-take-screenshot-on-failure/csharp.md",tags:[{label:"reporting",permalink:"/docs/tags/reporting"},{label:"screenshot",permalink:"/docs/tags/screenshot"}],version:"current",frontMatter:{title:"CSharp",id:"16-take-screenshot-on-failure-csharp",slug:"csharp/",number:16,publish_date:"2015-07-08T00:00:00.000Z",last_update:{date:"2023-03-30T00:00:00.000Z"},tags:["reporting","screenshot"],level:2,category:["troubleshooting"],language:"csharp"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/docs/updated-tips/download-secure-files/ruby/"},next:{title:"Javascript",permalink:"/docs/updated-tips/take-screenshot-on-failure/javascript/"}},l={},u=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],c={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-take-a-screenshot-on-failure"},"How to Take A Screenshot on Failure"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"With browser tests it can often be challenging to track down the issue that caused a failure."),(0,r.kt)("p",null,"By itself, a failure message along with a stack trace is hardly enough to go on, especially when you run the test again and it passes. You may or may not be able to recreate that initial error message, and might be left wondering what it was, and whether or not it will cause issues in the future."),(0,r.kt)("h2",{id:"a-solution"},"A Solution"),(0,r.kt)("p",null,"A simple way to gain insight into your test failures is to capture screenshots at the moment of failure. This is something that is fairly quick to add to your tests, and allows you to review these error messages."),(0,r.kt)("p",null,"Here is an example."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's start by including our requisite classes for our test framework (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenQA.Selenium"),", etc.), accessing C#'s image functionality (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Drawing.Imaging"),"), and start our class off with some setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: Screenshot.cs\nusing NUnit.Framework;\nusing NUnit.Framework.Interfaces;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing System.Drawing.Imaging;\n\npublic class Screenshot\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        if (TestContext.CurrentContext.Result.Outcome.Status.Equals(TestStatus.Failed))\n            TakeScreenshot();\n\n        Driver.Quit();\n    }\n// ...\n")),(0,r.kt)("p",null,"Notice in the teardown we have a conditional statement before we call ",(0,r.kt)("inlineCode",{parentName:"p"},"Driver.Quit();"),". It's checking to see if the test failed, if it has then it will take a screenshot. Right now the method we're referencing isn't declared. Let's add it now."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Screenshot.cs\n// ...\n    private void TakeScreenshot()\n    {\n        string SaveLocation = @"C:\\Temp\\" +\n                               "failshot_" +\n                               TestContext.CurrentContext.Test.FullName +\n                               ".png";\n        ITakesScreenshot ScreenshotDriver = (ITakesScreenshot) Driver;\n        ScreenshotDriver.GetScreenshot().SaveAsFile(SaveLocation, ScreenshotImageFormat.Png);\n    }\n// ...\n')),(0,r.kt)("p",null,"There are numerous ways to make the filename unique for the screenshot (e.g., unique ID, timestamp, etc.). The simplest way to get started is with the full test name (e.g., test class name and test method name), which we've done. We also specified the save location on disk using a string literal (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'@"C:\\Temp"'),"), feel free to change it to suit your needs."),(0,r.kt)("p",null,"The rest is a simple matter of casting the ",(0,r.kt)("inlineCode",{parentName:"p"},"Driver")," as an ",(0,r.kt)("inlineCode",{parentName:"p"},"ITakeScreenshot")," object and calling ",(0,r.kt)("inlineCode",{parentName:"p"},"GetScreenshot().SaveAsFile")," (specifying the save location and image format -- which is PNG in this case)."),(0,r.kt)("p",null,"Now let's wire up our test with a forced failure."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Screenshot.cs\n// ...\n    [Test]\n    public void ScreenShotOnFailure()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com");\n        Assert.That(false.Equals(true));\n    }\n}\n')),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When you save this file and run it (",(0,r.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\Screenshot.sln")," from the command-line) here is what will happen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the page"),(0,r.kt)("li",{parentName:"ul"},"Test Fails"),(0,r.kt)("li",{parentName:"ul"},"Selenium Captures a screenshot in ",(0,r.kt)("inlineCode",{parentName:"li"},"C:\\Temp")," with the name ",(0,r.kt)("inlineCode",{parentName:"li"},"failshot_Screenshot.ScreenShotOnFailure.png")),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Having a screenshot to aid in troubleshooting failing tests along with a stack trace helps in having more insight."),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}h.isMDXComponent=!0}}]);