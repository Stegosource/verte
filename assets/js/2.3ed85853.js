(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{184:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"color-history"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#color-history","aria-hidden":"true"}},[t._v("#")]),t._v(" Color History")]),a("p",[t._v("Verte offers a couple of ways to maintain the list of recent colors picked using the picker.")]),a("h2",{attrs:{id:"internal-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#internal-store","aria-hidden":"true"}},[t._v("#")]),t._v(" Internal Store")]),a("p",[t._v("By default all Verte pickers share the same color history, which can be configured when first configuring verte.")]),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[t._v("import Vue from 'vue';\nimport Verte from 'verte';\n\nVue.use(Verte, {\n  recentColors: JSON.parse(localStorage.getItem('colors'))\n});\n")])])]),a("p",[t._v("You can subscribe to the changes of the recent colors by passing an "),a("code",[t._v("onRecentColorsChange")]),t._v(" handler to the config object:")]),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[t._v("// fetch and save the recent colors to the localstorage.\nVue.use(Verte, {\n  recentColors: JSON.parse(localStorage.getItem('colors')),\n  onRecentColorsChange (colors) {\n    localStorage.setItem('colors', JSON.stringify(colors));\n  }\n});\n")])])]),a("h2",{attrs:{id:"using-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-props","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Props")]),a("p",[t._v("Verte accepts a "),a("code",[t._v("colorHistory")]),t._v(" prop which is an array of color strings, this will disable sharing between verte components and each one will have its own history.")]),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Verte")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v(":showHistory")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v(":colorHistory")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("list"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Verte")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("You could allow sharing between some verte components using "),a("code",[t._v(".sync")]),t._v(" modifier:")]),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Verte")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v(":showHistory")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v(":colorHistory.sync")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("list"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Verte")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Verte")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v(":showHistory")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v(":colorHistory.sync")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("list"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Verte")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("When providing the "),a("code",[t._v("colorHistory")]),t._v(" prop, the Vete store does not handle any changes to the history, also the "),a("code",[t._v("onRecentColorsChange")]),t._v(" handler will no longer fire. So you might need to handle persisting the color histroy using "),a("code",[t._v("watch")]),t._v(" and conventional Vue patterns.")])])])}],!1,null,null,null);s.default=e.exports}}]);