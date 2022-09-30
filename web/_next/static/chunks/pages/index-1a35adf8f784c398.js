(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6840)}])},6840:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var a=t(5893),r=t(7294),c=t(9008),s=t.n(c),i=t(9489),o=t.n(i);function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}function u(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,n)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e){var n=e.baseImage.installCommand.join(" "),t=["FROM ".concat(e.baseImage.name,":").concat(e.baseImage.version),"",];if(e.packages.length>0){var a=e.packages.slice(0,-1).map(function(e){return"    ".concat(e," \\")});a.push("    ".concat(e.packages.at(-1))),t.push("RUN ".concat(n," \\")),t.push.apply(t,u(a).concat([""]))}if(e.files.length>0){var r=e.files.map(function(e){return"COPY ".concat(e.src," ").concat(e.dest)});t.push.apply(t,u(r).concat([""]))}return t.join("\n")}var f=[{name:"fedora-toolbox",versions:["37","38"],installCommand:["dnf","install","-y",]},{name:"docker.io/akdev1l/ubuntu-toolbox",versions:["22.04","22.10"],installCommand:["apt-get","install","-y",]}];function h(e){var n=e.onBaseImageChange,t=(0,r.useState)("fedora-toolbox:37"),c=(t[0],t[1]),s=function(e){c(e);var t=f.find(function(n){return n.versions.some(function(t){return"".concat(n.name,":").concat(t)==e})}),a={name:t.name,version:e.split(":").at(-1),installCommand:t.installCommand};console.log("selected image ",a),n(a)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:o().cfFormField,children:[(0,a.jsx)("label",{className:o().cfLabel,children:"Base Image"}),(0,a.jsx)("br",{}),(0,a.jsx)("select",{className:o().cfDropdown,name:"cfData.baseImage",onChange:function(e){return s(e.target.value)},children:f.map(function(e){return e.versions.map(function(n){return(0,a.jsx)("option",{value:"".concat(e.name,":").concat(n),children:"".concat(e.name,":").concat(n)},"".concat(e.name,":").concat(n))})})})]})})}function m(e){var n=e.fileList,t=e.onFileListChange,c=(0,r.useState)(""),s=c[0],i=c[1],l=(0,r.useState)(""),u=l[0],d=l[1],f=(0,r.useState)(n),h=f[0],m=f[1],x=function(e){n.push({src:s,dest:u}),t(n),m(n),console.log(e)},p=function(e){t(n=n.filter(function(n){return!(n.src==e.src&&n.dest==e.dest)})),m(n)};return(0,a.jsxs)("div",{className:o().cfFormField,children:[(0,a.jsx)("label",{className:o().cfLabel,children:"Inject Files"}),(0,a.jsx)("br",{}),(0,a.jsxs)("table",{className:o().cfPackageTable,children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:o().cfFilePathInput,children:"Src Path"}),(0,a.jsx)("th",{className:o().cfFilePathInput,children:"Dest Path"}),(0,a.jsx)("th",{children:"#"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:o().cfFilePathInput,children:(0,a.jsx)("input",{type:"text",onChange:function(e){return i(e.target.value)},placeholder:"source path",value:s})}),(0,a.jsx)("td",{className:o().cfFilePathInput,children:(0,a.jsx)("input",{type:"text",onChange:function(e){return d(e.target.value)},placeholder:"destination path",value:u})}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#",className:o().undecoratedLink,onClick:x,children:"➕"})})]}),h.map(function(e){return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:e.src}),(0,a.jsx)("td",{children:e.dest}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#",className:o().undecoratedLink,onClick:function(){return p(e)},children:"❌"})})]},"".concat(e.src,":").concat(e.dest))})]}),(0,a.jsx)("tfoot",{})]})]})}function x(e){var n=e.packageList,t=e.onPackageListChange,c=(0,r.useState)(""),s=c[0],i=c[1],l=(0,r.useState)(n),u=l[0],d=l[1],f=function(e){n.push(s),d(n),t(n),i("")},h=function(e){d(n=n.filter(function(n){return n!=e})),t(n)};return(0,a.jsxs)("div",{className:o().cfFormField,children:[(0,a.jsx)("label",{className:o().cfLabel,children:"Install Packages"}),(0,a.jsx)("br",{}),(0,a.jsxs)("table",{className:o().cfPackageTable,children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Package Name"}),(0,a.jsx)("th",{children:"#"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("input",{type:"text",onChange:function(e){return i(e.target.value)},placeholder:"enter package name",value:s})}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#",className:o().undecoratedLink,onClick:f,children:"➕"})})]}),u.map(function(e){return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:e}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#",className:o().undecoratedLink,onClick:function(){return h(e)},children:"❌"})})]},e)})]}),(0,a.jsx)("tfoot",{})]})]})}function p(e){e.onFileListChange,e.onBaseImageChange,e.onPackageListChange;var n=(0,r.useRef)(),t=(0,r.useState)({baseImage:{name:"fedora-toolbox",version:"37",installCommand:["dnf","install","-y"]},packages:["tmux","zsh",],files:[{src:"./vimrc",dest:"/etc/vimrc"},]}),c=t[0],s=t[1],i=(0,r.useState)(d(c)),l=i[0],u=i[1],f=(0,r.useState)(c.packages);f[0],f[1];var p=(0,r.useState)(c.files);p[0],p[1];var j=(0,r.useState)(c.baseImage);j[0],j[1];var g=function(e){console.log("updating base image"),c.baseImage=e,s(c),u(d(c))},v=function(e){c.packages=e,s(c),u(d(c))},C=function(e){c.files=e,s(c),u(d(c))};return(0,a.jsxs)("div",{className:"content",children:[(0,a.jsx)("div",{className:o().formColumn,children:(0,a.jsxs)("form",{name:"cfData",children:[(0,a.jsx)(h,{onBaseImageChange:g}),(0,a.jsx)(x,{onPackageListChange:v,packageList:c.packages}),(0,a.jsx)(m,{onFileListChange:C,fileList:c.files})]})}),(0,a.jsxs)("div",{className:o().cfOutputViewer,children:[(0,a.jsx)("textarea",{className:o().cfOutput,value:l}),(0,a.jsx)("div",{className:o().cfOutputControls,children:(0,a.jsx)("a",{ref:n,children:(0,a.jsx)("button",{onClick:function(e){return downloadCF(c)},children:"Download File"})})})]})]})}function j(){return(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:"CFEditor"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)("main",{className:"main",children:(0,a.jsx)("div",{className:"content",children:(0,a.jsx)(p,{})})})]})}},9489:function(e){e.exports={formColumn:"CFEditor_formColumn__HUqwy",cfEditorLayout:"CFEditor_cfEditorLayout__ZXkfb",cfOutputViewer:"CFEditor_cfOutputViewer__ookM1",cfOutput:"CFEditor_cfOutput__20A_U",cfOutputControls:"CFEditor_cfOutputControls__HDbFx",cfFormField:"CFEditor_cfFormField__QmwUt",cfDropdown:"CFEditor_cfDropdown__aiwBn",cfLabel:"CFEditor_cfLabel__hMSS8",cfFilePathInput:"CFEditor_cfFilePathInput__rJ5oX",undecoratedLink:"CFEditor_undecoratedLink__BmOZX"}},9008:function(e,n,t){e.exports=t(5443)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);