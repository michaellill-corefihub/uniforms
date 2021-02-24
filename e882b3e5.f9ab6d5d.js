(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return p}));var o=n(3),i=n(7),a=(n(0),n(177)),r={id:"uth-autofield-algorithm",title:"AutoField algorithm"},l={unversionedId:"uth-autofield-algorithm",id:"uth-autofield-algorithm",isDocsHomePage:!1,title:"AutoField algorithm",description:"Background",source:"@site/../docs/uth-autofield-algorithm.md",slug:"/uth-autofield-algorithm",permalink:"/docs/uth-autofield-algorithm",version:"current",sidebar:"docs",previous:{title:"Helpers",permalink:"/docs/api-helpers"},next:{title:"Bridge concept",permalink:"/docs/uth-bridge-concept"}},d=[{value:"Background",id:"background",children:[]},{value:"Default <code>AutoField</code> implementation",id:"default-autofield-implementation",children:[]},{value:"Overriding <code>AutoField</code>",id:"overriding-autofield",children:[]}],c={toc:d};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"background"},"Background"),Object(a.b)("p",null,"Since the beginning, ",Object(a.b)("inlineCode",{parentName:"p"},"AutoField")," was an ordinary React component. Then, in ",Object(a.b)("a",{parentName:"p",href:"https://github.com/vazco/uniforms/issues/741"},"#","741"),", the ",Object(a.b)("inlineCode",{parentName:"p"},"kind")," parameter of ",Object(a.b)("inlineCode",{parentName:"p"},"connectField")," was introduced to make certain optimizations possible. To be exact, this parameter made it possible to reduce the overhead of ",Object(a.b)("inlineCode",{parentName:"p"},"AutoField")," to minimum. The problem is that it increased the complexity of custom themes (or at least keeping them performant)."),Object(a.b)("p",null,"In ",Object(a.b)("a",{parentName:"p",href:"https://github.com/vazco/uniforms/issues/800"},"#","800"),", a new way of creating ",Object(a.b)("inlineCode",{parentName:"p"},"AutoField")," was introduced. Now, instead of a React component, you only specify the component based on its props - the rest is handled in ",Object(a.b)("inlineCode",{parentName:"p"},"createAutoField"),"."),Object(a.b)("h2",{id:"default-autofield-implementation"},"Default ",Object(a.b)("inlineCode",{parentName:"h2"},"AutoField")," implementation"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"import { createAutoField } from 'uniforms';\n\nconst AutoField = createAutoField(props => {\n  if (props.allowedValues) {\n    return props.checkboxes && props.fieldType !== Array\n      ? RadioField\n      : SelectField;\n  }\n\n  switch (props.fieldType) {\n    case Array:\n      return ListField;\n    case Boolean:\n      return BoolField;\n    case Date:\n      return DateField;\n    case Number:\n      return NumField;\n    case Object:\n      return NestField;\n    case String:\n      return TextField;\n  }\n\n  return invariant(false, 'Unsupported field type: %s', props.fieldType);\n});\n")),Object(a.b)("h2",{id:"overriding-autofield"},"Overriding ",Object(a.b)("inlineCode",{parentName:"h2"},"AutoField")),Object(a.b)("p",null,"While specifying the ",Object(a.b)("inlineCode",{parentName:"p"},"autoField")," prop on your ",Object(a.b)("inlineCode",{parentName:"p"},"QuickForm")," or ",Object(a.b)("inlineCode",{parentName:"p"},"AutoForm")," components may cover a lot of cases, some fields - ",Object(a.b)("inlineCode",{parentName:"p"},"ListField")," and ",Object(a.b)("inlineCode",{parentName:"p"},"NestField")," - use ",Object(a.b)("inlineCode",{parentName:"p"},"AutoField")," directly. That means there's no easy way to let them know that you have a custom component defined."),Object(a.b)("p",null,"To make it possible, all ",Object(a.b)("inlineCode",{parentName:"p"},"AutoFields")," created with the ",Object(a.b)("inlineCode",{parentName:"p"},"createAutoField")," are configurable. To adjust the components, use the React context available in ",Object(a.b)("inlineCode",{parentName:"p"},"AutoField.componentDetectorContext"),". You can use it as often as needed - in most apps once will be enough. Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"<AutoField.componentDetectorContext.Provider value={(props, uniforms) => /* ... */}>\n  <Application />\n</AutoField.componentDetectorContext.Provider>\n")),Object(a.b)("p",null,"If you want to add an exception and then fallback to the existing algorithm, use ",Object(a.b)("inlineCode",{parentName:"p"},"AutoField.defaultComponentDetector"),". Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"<AutoField.componentDetectorContext.Provider\n  value={(props, uniforms) => {\n    if (props.useSpecialField) {\n      return SpecialField;\n    }\n\n    return AutoField.defaultComponentDetector(props, uniforms);\n  }}\n>\n  <Application />\n</AutoField.componentDetectorContext.Provider>\n")))}p.isMDXComponent=!0}}]);