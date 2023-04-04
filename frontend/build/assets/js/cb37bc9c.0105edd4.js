"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={title:"CSharp",id:"5-select-from-a-dropdown-csharp",slug:"csharp/",number:5,publish_date:new Date("2015-07-06T00:00:00.000Z"),last_update:{date:new Date("2023-03-29T00:00:00.000Z")},tags:["dropdown","forms"],level:1,category:["fundamentals"],language:"csharp"},i="How to Select from a Dropdown List",l={unversionedId:"updated-tips/select-from-a-dropdown/5-select-from-a-dropdown-csharp",id:"updated-tips/select-from-a-dropdown/5-select-from-a-dropdown-csharp",title:"CSharp",description:"Intro",source:"@site/docs/updated-tips/5-select-from-a-dropdown/csharp.md",sourceDirName:"updated-tips/5-select-from-a-dropdown",slug:"/updated-tips/select-from-a-dropdown/csharp/",permalink:"/docs/updated-tips/select-from-a-dropdown/csharp/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/5-select-from-a-dropdown/csharp.md",tags:[{label:"dropdown",permalink:"/docs/tags/dropdown"},{label:"forms",permalink:"/docs/tags/forms"}],version:"current",frontMatter:{title:"CSharp",id:"5-select-from-a-dropdown-csharp",slug:"csharp/",number:5,publish_date:"2015-07-06T00:00:00.000Z",last_update:{date:"2023-03-29T00:00:00.000Z"},tags:["dropdown","forms"],level:1,category:["fundamentals"],language:"csharp"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/docs/updated-tips/work-with-multiple-windows/ruby/"},next:{title:"Java",permalink:"/docs/updated-tips/select-from-a-dropdown/java/"}},p={},s=[{value:"Intro",id:"intro",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-select-from-a-dropdown-list"},"How to Select from a Dropdown List"),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"Some common use cases for selecting from a dropdown list might be selecting sizes or styles from a dropdown menu while online shopping, or selecting your method of payment. And, while selecting from a dropdown list might ",(0,r.kt)("em",{parentName:"p"},"seem")," straightforward -- just grab the list by its element and select an item within it, based on the text you want -- there's a bit more skill to it."),(0,r.kt)("p",null,"Let's take a look at a couple of different approaches."),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("p",null,"First let's include our requisite classes for our test framework (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"NUnit.Framework"),"), driving the browser with Selenium (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenQA.Selenium"),", etc.), access to C# collections (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Collections.Generic"),"), and start our class off with some setup and teardown methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// filename: Dropdown.cs\nusing NUnit.Framework;\nusing OpenQA.Selenium;\nusing OpenQA.Selenium.Firefox;\nusing OpenQA.Selenium.Support.UI;\nusing System.Collections.Generic;\n\npublic class Dropdown\n{\n    IWebDriver Driver;\n\n    [SetUp]\n    public void SetUp()\n    {\n        Driver = new FirefoxDriver();\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n        Driver.Quit();\n    }\n// ...\n")),(0,r.kt)("p",null,"Now let's wire up our test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Dropdown.cs\n// ...\n    [Test]\n    public void SelectFromDropdownTheHardWay()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/dropdown");\n        IWebElement Dropdown = Driver.FindElement(By.Id("dropdown"));\n        IReadOnlyCollection<IWebElement> DropdownOptions = Dropdown.FindElements(By.TagName("option"));\n        foreach(IWebElement Option in DropdownOptions)\n        {\n            if(Option.Text.Equals("Option 1"))\n                Option.Click();\n        }\n        string SelectedOption = "";\n        foreach (IWebElement Option in DropdownOptions)\n        {\n            if (Option.Selected)\n                SelectedOption = Option.Text;\n        }\n        Assert.That(SelectedOption.Equals("Option 1"));\n    }\n// ...\n')),(0,r.kt)("p",null,"After visiting ",(0,r.kt)("a",{parentName:"p",href:"http://the-internet.herokuapp.com/dropdown"},"the example application")," we find the dropdown list by its ID and store it in a variable. We then find each element in the dropdown list (e.g., each element with an ",(0,r.kt)("inlineCode",{parentName:"p"},"option")," tag) with ",(0,r.kt)("inlineCode",{parentName:"p"},"FindElements")," (note the plural)."),(0,r.kt)("p",null,"Grabbing all of the options with ",(0,r.kt)("inlineCode",{parentName:"p"},"FindElements")," returns a collection that we iterate over. When the text matches what we want (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'"Option 1"'),") we click on it."),(0,r.kt)("p",null,"We finish the test by performing a check to see that our selection was made correctly. This is done by iterating over the dropdown options collection once more. This time we're getting the text of the item that was selected, storing it in a variable, and making an assertion against it."),(0,r.kt)("p",null,"While this works, there is a simpler, built-in way to do this with Selenium. Let's give that a go."),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// filename: Dropdown.cs\n// ...\n    [Test]\n    public void SelectFromDropdownTheEasyWay()\n    {\n        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/dropdown");\n        SelectElement Dropdown = new SelectElement(Driver.FindElement(By.Id("dropdown")));\n        Dropdown.SelectByText("Option 1");\n        Assert.That(Dropdown.SelectedOption.Text.Equals("Option 1"));\n    }\n\n}\n')),(0,r.kt)("p",null,"Similar to the first example, we are finding the dropdown list by its ID. But instead of iterating over its option elements and clicking based on a conditional we are leveraging a built-in helper function of Selenium. With ",(0,r.kt)("a",{parentName:"p",href:"http://seleniumhq.github.io/selenium/docs/api/dotnet/html/T_OpenQA_Selenium_Support_UI_SelectElement.htm"},(0,r.kt)("inlineCode",{parentName:"a"},"SelectElement"))," and its ",(0,r.kt)("inlineCode",{parentName:"p"},"SelectBy")," methods (e.g., ",(0,r.kt)("a",{parentName:"p",href:"http://seleniumhq.github.io/selenium/docs/api/dotnet/html/M_OpenQA_Selenium_Support_UI_SelectElement_SelectByText.htm"},(0,r.kt)("inlineCode",{parentName:"a"},"SelectByText")),") we're able to easily choose the item we want."),(0,r.kt)("p",null,"We then perform our assertion against the text of the currently selected option (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'Dropdown.SelectedOption.Text.Equals("Option 1")'),")."),(0,r.kt)("p",null,"As an aside, in addition to selecting by text you can also select by value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'        Dropdown.SelectByValue("1");\n')),(0,r.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,r.kt)("p",null,"When you save this file and run it (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"nunit3-console.exe .\\Dropdown.sln")," from the command-line) here is what will happen for either example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the browser"),(0,r.kt)("li",{parentName:"ul"},"Visit the example application"),(0,r.kt)("li",{parentName:"ul"},"Find the dropdown list"),(0,r.kt)("li",{parentName:"ul"},"Select the specified item from the dropdown list"),(0,r.kt)("li",{parentName:"ul"},"Assert that the selected option is what you expect "),(0,r.kt)("li",{parentName:"ul"},"Close the browser")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Hopefully this tip will help you breeze through selecting items from a dropdown list."),(0,r.kt)("p",null,"Thanks to Jonathan Taylor for contributing the initial C# code for this tip!"),(0,r.kt)("p",null,"Happy Testing!"),(0,r.kt)("h2",{id:"about-the-author"},"About The Author"),(0,r.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,r.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}u.isMDXComponent=!0}}]);