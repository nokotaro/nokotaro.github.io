(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{184:function(t,e,n){var content=n(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("f9427856",content,!0,{sourceMap:!1})},185:function(t,e,n){"use strict";var r=n(184);n.n(r).a},186:function(t,e,n){(e=n(39)(!1)).push([t.i,".author[data-v-3213f3f0]{display:flex;justify-content:space-between}.author-container[data-v-3213f3f0]{display:flex;align-items:flex-start}.avatar[data-v-3213f3f0]{width:72px;height:72px;margin-right:1rem;border-radius:20%}.author-title[data-v-3213f3f0]{display:flex;align-items:flex-start;flex-direction:column}.author-title .namerepo[data-v-3213f3f0]{display:flex;align-items:center;font-size:1.5rem;line-height:2}.author-title .namerepo .slash[data-v-3213f3f0]{padding:0 .2em;font-weight:200}.anchor[data-v-3213f3f0]{display:flex;align-items:center;font-size:.8rem;color:inherit}.anchor i[data-v-3213f3f0]{display:flex;margin-right:.5em}.anchor span[data-v-3213f3f0]{padding-top:2px}",""]),t.exports=e},187:function(t,e,n){"use strict";var r=n(7).default.extend({props:["arg"]}),o=(n(185),n(40)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"author"},[e("div",{staticClass:"author-container"},[this._m(0),e("div",{staticClass:"author-title"},[this._m(1),e("div",{staticClass:"github-link"},[e("a",{staticClass:"anchor",attrs:{href:"https://github.com/nokotaro",target:"_blank"}},[e("i",[e("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),e("span",[this._v("GitHub")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"author-avatar"},[e("img",{staticClass:"avatar",attrs:{src:"/images/icon.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"namerepo"},[e("div",{staticClass:"author-name"},[this._v("Nokotaro Takeda")]),e("div",{staticClass:"slash"}),e("div",{staticClass:"repo"})])}],!1,null,"3213f3f0",null);e.a=component.exports},188:function(t,e,n){"use strict";var r=n(7).default.extend({props:{now:String}}),o=n(40),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("header",[e("nav",{staticClass:"navbar fixed-top navbar-expand-sm bg-dark navbar-dark"},[e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("img",{attrs:{src:"/images/icon.png",width:"30",height:"30",alt:""}}),this._v("\nPortfolio")]),e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"},[e("nuxt-link",{class:["top"===this.now?"nav-link active":"nav-link"],attrs:{to:"/"}},[this._v("Top")])],1),e("li",{staticClass:"nav-item"},[e("nuxt-link",{class:["about"===this.now?"nav-link active":"nav-link"],attrs:{to:"/about"}},[this._v("About")])],1),e("li",{staticClass:"nav-item"},[e("nuxt-link",{class:["project"===this.now?"nav-link active":"nav-link"],attrs:{to:"/project"}},[this._v("Project")])],1)])],1)])])}),[],!1,null,null,null);e.a=component.exports},191:function(t,e,n){var content=n(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("6faec184",content,!0,{sourceMap:!1})},192:function(t,e,n){var content=n(201);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("bb2868e2",content,!0,{sourceMap:!1})},197:function(t,e,n){"use strict";var r=n(191);n.n(r).a},198:function(t,e,n){(e=n(39)(!1)).push([t.i,".card[data-v-193d6985]{position:relative;display:flex;width:350px;height:300px;margin:.5rem;box-shadow:0 3px 8px rgba(0,0,0,.1);text-decoration:none;border:0;background:hsla(0,0%,39.2%,.03)}.card img[data-v-193d6985]{position:absolute;z-index:0;flex:1;width:100%;height:100%;border-radius:10px}.card .card-content[data-v-193d6985]{z-index:1;width:100%;margin-top:164px;display:flex;flex-direction:column;align-items:flex-start;color:#fff;padding:1rem}.card .card-title[data-v-193d6985]{font-size:24px;font-weight:700;margin:0 0 .5em}",""]),t.exports=e},199:function(t){t.exports=JSON.parse('{"products":[{"id":"01","title":"Misskey","desc":"@takenoko@misskey.nokotaro.com","link":"https://misskey.nokotaro.com/@takenoko"},{"id":"02","title":"Twitter","desc":"@takenoko_0714","link":"https://twitter.com/takenoko_0714"},{"id":"03","title":"GitHub","desc":"@nokotaro","link":"https://github.com/nokotaro"}]}')},200:function(t,e,n){"use strict";var r=n(192);n.n(r).a},201:function(t,e,n){(e=n(39)(!1)).push([t.i,".site-header[data-v-256dfed8]{margin:6rem 0 2rem}.cards[data-v-256dfed8]{padding:2rem 0;background-color:#f6f9fc}.card-list[data-v-256dfed8]{display:flex;flex-wrap:wrap}",""]),t.exports=e},202:function(t,e,n){"use strict";n.r(e);var r=n(7),o=n(187),l=r.default.extend({props:["arg"]}),c=(n(197),n(40)),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"card",attrs:{href:t.arg.link,target:"_blank"}},[n("img",{attrs:{src:"images/card-"+t.arg.id+".jpg"}}),n("div",{staticClass:"card-content"},[n("div",{staticClass:"card-title"},[t._v(t._s(t.arg.title))]),n("div",{staticClass:"card-desc"},[t._v(t._s(t.arg.desc))])])])}),[],!1,null,"193d6985",null).exports,data=n(199),f=n(188),h=r.default.extend({components:{AppLogo:o.a,CardItem:d,Navbar:f.a},asyncData:function(t){return{products:data.products}}}),v=(n(200),Object(c.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("Navbar",{attrs:{now:"top"}}),e("header",{staticClass:"site-header"},[e("div",{staticClass:"container"},[e("app-logo")],1)]),e("section",{staticClass:"cards"},[e("div",{staticClass:"container"},[e("div",{staticClass:"card-list"},this._l(this.products,(function(p){return e("card-item",{key:p.title,attrs:{arg:p}})})),1)])])],1)}),[],!1,null,"256dfed8",null));e.default=v.exports}}]);