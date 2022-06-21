(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{457:function(t,e,v){"use strict";v.r(e);var a=v(24),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"嵌套隧道"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#嵌套隧道"}},[t._v("#")]),t._v(" 嵌套隧道")]),t._v(" "),v("h2",{attrs:{id:"什么是嵌套隧道"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是嵌套隧道"}},[t._v("#")]),t._v(" 什么是嵌套隧道")]),t._v(" "),v("p",[t._v("嵌套隧道是指某些情况下，需要依次穿越多个同种类型或不同类型的隧道，以访问目标服务的情况。例如：有些内网环境下需要先通过一个"),v("code",[t._v("HTTPS")]),t._v("代理访问外网，然后再通过一个"),v("code",[t._v("SSH")]),t._v("堡垒机访问目标服务。")]),t._v(" "),v("h2",{attrs:{id:"使用turbo-tunnel建立嵌套隧道"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用turbo-tunnel建立嵌套隧道"}},[t._v("#")]),t._v(" 使用turbo-tunnel建立嵌套隧道")]),t._v(" "),v("p",[t._v("在通常使用场景下，对于这种情况，需要先使用"),v("code",[t._v("proxifier")]),t._v("之类的软件让SSH客户端通过"),v("code",[t._v("HTTPS")]),t._v("代理访问"),v("code",[t._v("SSH")]),t._v("服务器，进去后再使用"),v("code",[t._v("ssh")]),t._v("命令进入目标机器，使用相对较为繁琐。")]),t._v(" "),v("p",[t._v("通过在turbo-tunnel命令行中使用"),v("code",[t._v("-t/--tunnel")]),t._v("参数配置多个隧道，形成"),v("code",[t._v("嵌套隧道")]),t._v("。隧道的嵌套顺序由"),v("code",[t._v("-t/--tunnel")]),t._v("参数的顺序决定。")]),t._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v("$ turbo-tunnel -l http://127.0.0.1:8888/ -t http://web-proxy.internal.com:8080/ -t ssh://username:password@1.1.1.1/\n")])])]),v("p",[t._v("该命令可以在本地创建一个"),v("code",[t._v("HTTPS")]),t._v("代理服务，通过该服务可以直接建立与堡垒机内部机器的网络连接。")]),t._v(" "),v("p",[t._v("对于嵌套层数越多的场景，使用turbo-tunnel的优势就越明显，因为所有的访问都会收敛到本地的"),v("code",[t._v("HTTPS")]),t._v("服务中。")]),t._v(" "),v("p",[t._v("turbo-tunnel支持任意层数的隧道嵌套，包括插件中提供的隧道。")])])}),[],!1,null,null,null);e.default=s.exports}}]);