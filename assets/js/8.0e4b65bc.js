(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{285:function(s,t,n){s.exports=n.p+"assets/img/terminal.9c28ef06.png"},300:function(s,t,n){"use strict";n.r(t);var a=n(10),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"插件支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件支持"}},[s._v("#")]),s._v(" 插件支持")]),s._v(" "),t("h2",{attrs:{id:"插件是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件是什么"}},[s._v("#")]),s._v(" 插件是什么")]),s._v(" "),t("p",[s._v("turbo-tunnel插件主要用于对turbo-tunnel能力的扩展，例如：支持更多的第三方/自定义隧道协议；提供流量分析、流量劫持等功能。")]),s._v(" "),t("h2",{attrs:{id:"如何使用插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何使用插件"}},[s._v("#")]),s._v(" 如何使用插件")]),s._v(" "),t("p",[s._v("turbo-tunnel插件本质上就是一个python库，在turbo-tunnel命令行中可以使用"),t("code",[s._v("-p/--plugin")]),s._v("参数加载指定的插件包名。")]),s._v(" "),t("p",[s._v("例如，对于内置插件"),t("code",[s._v("terminal")]),s._v("，可以使用以下命令加载：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ turbo-tunnel "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" http://127.0.0.1:8888/ "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" terminal\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("此时，界面展示会变成实时状态模式（默认为日志模式）：")]),s._v(" "),t("p",[t("img",{attrs:{src:n(285),alt:""}})]),s._v(" "),t("h2",{attrs:{id:"如何实现插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何实现插件"}},[s._v("#")]),s._v(" 如何实现插件")]),s._v(" "),t("p",[s._v("由于turbo-tunnel是基于"),t("code",[s._v("asyncio")]),s._v("、"),t("code",[s._v("tornado")]),s._v("等库开发，因此，插件也必须使用"),t("code",[s._v("asyncio")]),s._v("，以保证整体的兼容。")]),s._v(" "),t("h3",{attrs:{id:"支持第三方隧道-自定义隧道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#支持第三方隧道-自定义隧道"}},[s._v("#")]),s._v(" 支持第三方隧道/自定义隧道")]),s._v(" "),t("p",[s._v("1、 实现"),t("code",[s._v("隧道客户端")]),s._v("（继承自"),t("code",[s._v("turbo_tunnel.tunnel.Tunnel")]),s._v("或其子类），并且将其注册到turbo-tunnel中。下面以SSH隧道为例：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("turbo_tunnel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("registry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tunnel_registry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("register"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ssh"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" SSHTunnel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在代码顶层执行以上代码，即可注册SSH隧道。这里的"),t("code",[s._v("ssh")]),s._v("表示使用的协议，不同的隧道类型应当使用不同的协议。")]),s._v(" "),t("blockquote",[t("p",[s._v("这里需要在代码顶层执行以上代码，是为了在加载插件时自动注册，否则会导致无法使用指定的隧道。")])]),s._v(" "),t("p",[s._v("2、 实现"),t("code",[s._v("隧道服务端")])]),s._v(" "),t("p",[s._v("隧道服务端不是必需的，因为有些隧道服务已经有很好的实现了，例如"),t("code",[s._v("SSH Server")]),s._v("。对于这种情况，可以不提供隧道服务端。")]),s._v(" "),t("p",[s._v("对于自定义隧道，就需要自己实现隧道服务端了，它一般是继承自"),t("code",[s._v("turbo_tunnel.server.TunnelServer")]),s._v("，并且实现了"),t("code",[s._v("start")]),s._v("方法，用于开启服务。在接收到请求后，会根据指定的路由或策略配置动态选择路由，并进行请求的转发。")]),s._v(" "),t("h3",{attrs:{id:"提供流量分析、处理能力"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提供流量分析、处理能力"}},[s._v("#")]),s._v(" 提供流量分析、处理能力")]),s._v(" "),t("p",[s._v("插件定义了如下一些回调接口，在特定事件发生时通知到插件：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Plugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("on_load")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("on_unload")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("on_tunnel_selected")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tunnel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("on_new_connection")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("on_tunnel_address_updated")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tunnel_address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("on_data_recevied")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("buffer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("on_data_sent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("buffer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("on_connection_closed")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("p",[s._v("插件可以基于这些接口执行一些操作，例如抓包、分析流量等工作；目前尚不支持修改数据包，等后面支持了，就可以执行流量修改等操作了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);