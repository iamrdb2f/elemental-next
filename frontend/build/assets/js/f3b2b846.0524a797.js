"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),c=a,d=h["".concat(s,".").concat(c)]||h[c]||m[c]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"How To Visually Verify Your Locators",slug:"65-highlight-elements",number:65,publish_date:new Date("2015-11-11T00:00:00.000Z"),tags:["guest post","highlight","javascript","locators"],level:2,category:"testing"},o=void 0,l={unversionedId:"non-updated-tips/highlight-elements/java/readme",id:"non-updated-tips/highlight-elements/java/readme",title:"How To Visually Verify Your Locators",description:"This is a pseudo guest post from Brian Goad. I've adapted a blog post of his with permission. You can see the original here. Brian is a Test Engineer at Digitalsmiths. You can follow him on Twitter at @bbbco and check out his testing blog here.",source:"@site/docs/non-updated-tips/65-highlight-elements/java/readme.md",sourceDirName:"non-updated-tips/65-highlight-elements/java",slug:"/non-updated-tips/highlight-elements/java/65-highlight-elements",permalink:"/docs/non-updated-tips/highlight-elements/java/65-highlight-elements",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/non-updated-tips/65-highlight-elements/java/readme.md",tags:[{label:"guest post",permalink:"/docs/tags/guest-post"},{label:"highlight",permalink:"/docs/tags/highlight"},{label:"javascript",permalink:"/docs/tags/javascript"},{label:"locators",permalink:"/docs/tags/locators"}],version:"current",frontMatter:{title:"How To Visually Verify Your Locators",slug:"65-highlight-elements",number:65,publish_date:"2015-11-11T00:00:00.000Z",tags:["guest post","highlight","javascript","locators"],level:2,category:"testing"},sidebar:"tutorialSidebar",previous:{title:"How To Simulate Slow Connections",permalink:"/docs/non-updated-tips/limit-bandwidth/64-limit-bandwidth"},next:{title:"How To Remove Third-party Resources",permalink:"/docs/non-updated-tips/blacklist/66-blacklist"}},s={},p=[{value:"The Problem",id:"the-problem",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"An Example",id:"an-example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Outro",id:"outro",level:2}],u={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is a pseudo guest post from Brian Goad. I've adapted a blog post of his with permission. You can see the original ",(0,a.kt)("a",{parentName:"p",href:"http://swdandruby.wordpress.com/2013/07/19/did-i-select-the-right-element/"},"here"),". Brian is a Test Engineer at ",(0,a.kt)("a",{parentName:"p",href:"http://www.digitalsmiths.com/"},"Digitalsmiths"),". You can follow him on Twitter at ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/bbbco"},"@bbbco")," and check out his testing blog ",(0,a.kt)("a",{parentName:"p",href:"http://swdandruby.wordpress.com/"},"here"),"."),(0,a.kt)("h2",{id:"the-problem"},"The Problem"),(0,a.kt)("p",null,"It's likely that you'll run into odd test behavior that makes you question the locators you're using in a test. But how do you interrogate your locators to make sure they are doing what you expect?"),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"By leveraging some simple JavaScript and CSS styling, you can highlight a targeted element on the page so you can visually inspect it to make sure it's the one you want."),(0,a.kt)("p",null,"Let's take a look at an example."),(0,a.kt)("h2",{id:"an-example"},"An Example"),(0,a.kt)("p",null,"First let's import our requisite classes (for annotations (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.junit.After"),", etc.), driving the browser with Selenium (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.openqa.selenium.WebDriver"),", etc.), and matchers for our assertions (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"org.hamcrest.CoreMatchers"),", etc.)) and start our class with some setup and teardown methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// filename: HighlightElement.java\nimport org.junit.After;\nimport org.junit.Before;\nimport org.junit.Test;\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.By;\nimport org.openqa.selenium.JavascriptExecutor;\nimport org.openqa.selenium.WebElement;\nimport org.openqa.selenium.firefox.FirefoxDriver;\n\npublic class HighlightElement {\n    WebDriver driver;\n    JavascriptExecutor js;\n\n    @Before\n    public void setUp() throws Exception {\n        driver = new FirefoxDriver();\n        js = (JavascriptExecutor) driver;\n    }\n\n    @After\n    public void tearDown() throws Exception {\n        driver.quit();\n    }\n// ...\n")),(0,a.kt)("p",null,"Now let's create a ",(0,a.kt)("inlineCode",{parentName:"p"},"highlightElement")," helper method that will accept a Selenium WebDriver ",(0,a.kt)("inlineCode",{parentName:"p"},"element")," and a time to wait (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"duration"),") as arguments."),(0,a.kt)("p",null,"By setting a duration, we can control how long to highlight an element on the page before reverting the styling back. And we can make this an optional argument by setting a sensible default (e.g., 3 seconds)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// filename: HighlightElement.java\n// ...\n    private void highlightElement(WebElement element, int duration) throws InterruptedException {\n        String original_style = element.getAttribute("style");\n\n        js.executeScript(\n                "arguments[0].setAttribute(arguments[1], arguments[2])",\n                element,\n                "style",\n                "border: 2px solid red; border-style: dashed;");\n\n        if (duration > 0) {\n            Thread.sleep(duration * 1000);\n            js.executeScript(\n                    "arguments[0].setAttribute(arguments[1], arguments[2])",\n                    element,\n                    "style",\n                    original_style);\n        }\n    }\n')),(0,a.kt)("p",null,"There are three things going on here."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We store the style of the element so we can revert it back when we're done"),(0,a.kt)("li",{parentName:"ul"},"We change the style of the element so it visually stands out (e.g., a red dashed border)"),(0,a.kt)("li",{parentName:"ul"},"We revert the style of the element back after 3 seconds (or longer if specified)")),(0,a.kt)("p",null,"We're accomplishing the style change through JavaScript's ",(0,a.kt)("inlineCode",{parentName:"p"},"setAttribute")," function. And we're executing it with Selenium's ",(0,a.kt)("inlineCode",{parentName:"p"},"executeScript")," command."),(0,a.kt)("p",null,"To use this in our test is simple, we just need to find an element and then pass it to ",(0,a.kt)("inlineCode",{parentName:"p"},"highlightElement"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// filename: HighlightElement.java\n// ...\n    @Test\n    public void highlightElementTest() throws InterruptedException {\n        driver.get("http://the-internet.herokuapp.com/large");\n        WebElement element = driver.findElement(By.id("sibling-2.3"));\n        highlightElement(element, 3);\n    }\n\n}\n')),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("p",null,"When you save this file and run it (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean test")," from the command-line) here is what will happen."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the browser"),(0,a.kt)("li",{parentName:"ul"},"Load the page"),(0,a.kt)("li",{parentName:"ul"},"Find the element to highlight"),(0,a.kt)("li",{parentName:"ul"},"Change the styling of the element so it has a red dashed-line border"),(0,a.kt)("li",{parentName:"ul"},"Wait 3 seconds"),(0,a.kt)("li",{parentName:"ul"},"Revert the styling of the element back (removing the red border)"),(0,a.kt)("li",{parentName:"ul"},"Close the browser")),(0,a.kt)("h2",{id:"outro"},"Outro"),(0,a.kt)("p",null,"This approach can be handy when trying to debug your test. Alternatively, you could verify your locators by using a browser plugin like FireFinder. You can read more about how to do that in ",(0,a.kt)("a",{parentName:"p",href:"/tips/verifying-locators"},"tip 35"),"."),(0,a.kt)("p",null,"Thanks to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RomanIsko"},"Roman Isko")," for contributing the initial Java code for this tip! Want me to cover more tips in Java or other programming languages? Send me a pull request for an existing tip and I will! All code examples are open source and available ",(0,a.kt)("a",{parentName:"p",href:"http://github.com/tourdedave/elemental-selenium-tips"},"here"),"."),(0,a.kt)("p",null,"Happy Testing!"))}m.isMDXComponent=!0}}]);