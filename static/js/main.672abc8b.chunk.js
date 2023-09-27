(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),c=t.n(r),o=(t(13),t(1));t(15);var s=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),style:{margin:"0px"}},l.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type))," : ",e.alert.msg)};function m(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode,"  bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:e.link},e.linkName)),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Dropdown"),l.a.createElement("ul",{className:"dropdown-menu"},l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"#"},"Action 1")),l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"#"},"Another action 2")),l.a.createElement("li",null,l.a.createElement("hr",{className:"dropdown-divider"})),l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"#"},"Something else here")))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link disabled","aria-disabled":"true"},"Disabled"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"Dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode "))))))}function i(e){var a=Object(n.useState)("Enter Your Text"),t=Object(o.a)(a,2),r=t[0],c=t[1],s=r.replaceAll(" ","").length,m=r.trim(),i=m.split(" ").length;return i=0===m.length?"0":r.split(/[ ]+/).length,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{backgroundColor:"dark"===e.mode?"#212529":"white"}},l.a.createElement("div",{className:" container mb-3",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,e.heading),l.a.createElement("h1",{className:"form-label"},"Text Box:"),l.a.createElement("textarea",{className:"exampletextarea",value:r,onChange:function(e){c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#2b2e31":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8",cols:"100"}),l.a.createElement("div",{className:"mt-4"},l.a.createElement("button",{onClick:function(){var a=r.toUpperCase();c(a),e.showAlert("Converted to Uppercase!","success")},className:"mx-2 btn btn-".concat("dark"===e.mode?"secondary":"primary")},"Convert to Uppercase"),l.a.createElement("button",{onClick:function(){var a=r.toLowerCase();c(a),e.showAlert("Converted to Lowercase!","success")},className:"mx-2 btn btn-".concat("dark"===e.mode?"secondary":"primary")},"Convert to Lowercase"),l.a.createElement("button",{onClick:function(){c(""),e.showAlert("Text Cleared!","success")},className:"mx-2 btn btn-".concat("dark"===e.mode?"secondary":"primary")},"Clear Click"),l.a.createElement("button",{onClick:function(){var a=r.split(/[ ]+/);c(a.join(" ")),e.showAlert("Extra Space Cleared!","success")},className:"mx-2 btn btn-".concat("dark"===e.mode?"secondary":"primary")},"Clear Extra Space"),l.a.createElement("button",{className:"mx-2 btn btn-".concat("dark"===e.mode?"secondary":"primary"),onClick:function(){var a=document.getElementById("myBox");a.select(),a.setSelectionRange(0,9999),navigator.clipboard.writeText(a.value),e.showAlert("Copied to clipboard!","success")}},"Copy Text"))),l.a.createElement("div",{className:"container mb-3",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h2",null,"Your Text Summary:"),l.a.createElement("p",null,i," words , ",s," characters (excluding the space) and ",r.length," (including the space)."),l.a.createElement("p",null,.008*r.split(" ").length," Minutes read")),l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter something in the above textbox to preview it here"))))}m.defaultProps={link:"https://facebook.com",linkName:"facebook"};var d=function(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],r=a[1],c=function(e,a){r({msg:e,type:a}),setTimeout(function(){r(null)},1500)},d=Object(n.useState)("light"),u=Object(o.a)(d,2),b=u[0],h=u[1],p=function(){"light"===b?(h("dark"),document.body.style.backgroundColor="#212529",c("Dark mode has been enable","success"),document.title="TextUtils - Dark Mode"):(h("light"),document.body.style.backgroundColor="white",c("Light mode has been enable","success"),document.title="TextUtils - LightMode")};return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{title:"TextUtils",mode:b,toggleMode:p}),l.a.createElement(s,{alert:t}),l.a.createElement("div",null,l.a.createElement(i,{showAlert:c,heading:"Enter the text to analyze below",mode:b,toggleMode:p})))},u=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,18)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null))),u()},4:function(e,a,t){e.exports=t(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.672abc8b.chunk.js.map