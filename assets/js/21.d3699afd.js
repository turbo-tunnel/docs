(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{305:function(a,s,t){"use strict";t.r(s);var e=t(10),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"websocket隧道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#websocket隧道"}},[a._v("#")]),a._v(" WebSocket隧道")]),a._v(" "),s("h2",{attrs:{id:"功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[a._v("#")]),a._v(" 功能")]),a._v(" "),s("p",[a._v("提供WebSocket隧道服务端和客户端能力。")]),a._v(" "),s("h2",{attrs:{id:"代理模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代理模式"}},[a._v("#")]),a._v(" 代理模式")]),a._v(" "),s("h3",{attrs:{id:"websocket隧道服务端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#websocket隧道服务端"}},[a._v("#")]),a._v(" WebSocket隧道服务端")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ turbo-tunnel "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" ws://username:password@127.0.0.1/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("此命令可以创建WebSocket隧道服务端，其中"),s("code",[a._v("{addr}")]),a._v("和"),s("code",[a._v("{port}")]),a._v("在这里是变量占位符，用于指示目标地址和目标端口参数。")]),a._v(" "),s("blockquote",[s("p",[a._v("这是因为WebSocket协议本身并不是一种标准的隧道协议，因此需要使用特定的字段来指定目标地址信息。")])]),a._v(" "),s("p",[a._v("运行过程中，当需要访问"),s("code",[a._v("1.1.1.1:8888")]),a._v("服务时，客户端会动态生成请求路径："),s("code",[a._v("/1.1.1.1/8888")]),a._v("。")]),a._v(" "),s("p",[a._v("这里可以根据使用者的需要改成不同的格式，例如："),s("code",[a._v("/proxy-{addr}-{port}")]),a._v("或"),s("code",[a._v("/proxy?addr={addr}&port={port}")]),a._v("。但是，这里设置的格式需要与客户端指定的url格式保持一致。")]),a._v(" "),s("h3",{attrs:{id:"websocket隧道客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#websocket隧道客户端"}},[a._v("#")]),a._v(" WebSocket隧道客户端")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ turbo-tunnel "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" http://:8080/ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" ws://username:password@127.0.0.1/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("该命令会创建一个HTTPS代理服务端，并通过WebSocket隧道"),s("code",[a._v("ws://username:password@127.0.0.1/{addr}/{port}")]),a._v("转发所有流量。")]),a._v(" "),s("h2",{attrs:{id:"端口转发模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#端口转发模式"}},[a._v("#")]),a._v(" 端口转发模式")]),a._v(" "),s("h3",{attrs:{id:"websocket服务端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#websocket服务端"}},[a._v("#")]),a._v(" WebSocket服务端")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ turbo-tunnel "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" ws://username:password@proxy.com:8080/forward-path "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" tcp://10.0.0.1:8080\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"websocket客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#websocket客户端"}},[a._v("#")]),a._v(" WebSocket客户端")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ turbo-tunnel "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" tcp://127.0.0.1:8080 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" ws://username:password@proxy.com:8080/forward-path\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("这样可以把远程网络中的"),s("code",[a._v("10.0.0.1:8080")]),a._v("服务映射到本地的"),s("code",[a._v("8080")]),a._v("端口，这种方式与nginx反代类似，但优点是可以映射任意TCP服务，而不仅仅是HTTP服务。")]),a._v(" "),s("h2",{attrs:{id:"使用wss协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用wss协议"}},[a._v("#")]),a._v(" 使用WSS协议")]),a._v(" "),s("p",[a._v("turbo-tunnel本身没有提供SSL服务端支持，需要使用者在外面套一层"),s("code",[a._v("nginx")]),a._v("之类的Web容器来支持SSL，这也是推荐的使用方法。")])])}),[],!1,null,null,null);s.default=r.exports}}]);