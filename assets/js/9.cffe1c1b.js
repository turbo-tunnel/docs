(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{265:function(t,n,e){"use strict";e.r(n);e(257);var o=e(258),i=e.n(o),a={name:"comment",mounted(){this.loadGitalk(),this.$router.afterEach((t,n)=>{this.$nextTick((function(){t.path!=n.path&&this.loadGitalk()}))})},methods:{encode(t){let n="";for(let e of t)n+=String.fromCharCode(8224^e.charCodeAt());return n},loadGitalk(){console.log("load gitalk in "+location.href);const t={clientID:this.encode("⁩⁖‑‎⁂⁄’‑‘—–‐–⁁⁁⁆—⁁―‗"),clientSecret:this.encode("⁄‘‘⁆⁂‐—‐‘—⁅’‗⁆⁆⁁⁆‒⁄—⁆‒–⁄⁃‐‑⁂‖’‑‐―⁆’–‒–‑‘"),repo:"docs",owner:"turbo-tunnel",admin:["drunkdream"],id:location.pathname,proxy:"https://corsproxy.io/?https://github.com/login/oauth/access_token"};document.getElementById("gitalk-container").innerHTML="";new i.a(t).render("gitalk-container")}}},r=e(10),c=Object(r.a)(a,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"theme-default-content gitalk-container"},[t("div",{attrs:{id:"gitalk-container"}})])}],!1,null,null,null);n.default=c.exports}}]);