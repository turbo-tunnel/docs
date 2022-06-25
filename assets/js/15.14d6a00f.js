(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{454:function(t,s,a){"use strict";a.r(s);var e=a(24),c=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"端口转发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#端口转发"}},[t._v("#")]),t._v(" 端口转发")]),t._v(" "),a("h2",{attrs:{id:"功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[t._v("#")]),t._v(" 功能")]),t._v(" "),a("p",[t._v("用于将远程端口映射到本地，支持通过多层代理来映射表目标服务。")]),t._v(" "),a("h2",{attrs:{id:"直接映射端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接映射端口"}},[t._v("#")]),t._v(" 直接映射端口")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ turbo-tunnel -l tcp://127.0.0.1:3344 -t tcp://www.qq.com:80\n")])])]),a("p",[t._v("这样可以将"),a("code",[t._v("www.qq.com:80")]),t._v("映射到本地的"),a("code",[t._v("127.0.0.1:3344")]),t._v("。因此，可以使用"),a("code",[t._v('curl http://127.0.0.1:3344/ -H "Host: www.qq.com"')]),t._v("来访问QQ首页。")]),t._v(" "),a("h2",{attrs:{id:"通过隧道映射端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过隧道映射端口"}},[t._v("#")]),t._v(" 通过隧道映射端口")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ turbo-tunnel -l tcp://127.0.0.1:3344 -t http://web-proxy.com:8080 -t tcp://www.qq.com:80\n")])])]),a("p",[t._v("这里是通过https代理隧道来映射端口，一般用于需要通过代理服务器访问外网的场景。")]),t._v(" "),a("h2",{attrs:{id:"通过多层嵌套代理映射端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过多层嵌套代理映射端口"}},[t._v("#")]),t._v(" 通过多层嵌套代理映射端口")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ turbo-tunnel -l tcp://127.0.0.1:3344 -t http://web-proxy.com:8080 -t ssh://1.1.1.1:2222/ -t tcp://192.168.1.1:80\n")])])]),a("p",[t._v("这样可以通过"),a("code",[t._v("https")]),t._v("和"),a("code",[t._v("ssh")]),t._v("两层嵌套代理来映射端口。这种情况一般是"),a("code",[t._v("ssh")]),t._v("服务器上部署了一个跳板机服务，需要通过该跳板机才能访问目标网络，例如这里的："),a("code",[t._v("192.168.1.1")]),t._v("；而访问ssh服务又需要通过https代理。")]),t._v(" "),a("h2",{attrs:{id:"映射ssl端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#映射ssl端口"}},[t._v("#")]),t._v(" 映射SSL端口")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ turbo-tunnel -l tcp://127.0.0.1:3344 -t ssl://www.qq.com:443\n")])])]),a("p",[t._v("这样可以在本地直接访问明文服务，隧道会自动进行SSL加密。例如，这里可以使用"),a("code",[t._v('curl http://127.0.0.1:3344/ -H "Host: www.qq.com"')]),t._v("访问"),a("code",[t._v("www.qq.com:443")]),t._v("的https服务。")]),t._v(" "),a("p",[t._v("对于域名解析非预期的场景，可以使用"),a("code",[t._v("ssl://1.1.1.1:443/?server_hostname=www.qq.com")]),t._v("来指定证书域名。对于自签名证书，可以使用"),a("code",[t._v("ssl://1.1.1.1:443/?verify_ssl=false")]),t._v("来禁用证书校验。")]),t._v(" "),a("blockquote",[a("p",[t._v("端口映射时，最后一个tunnel一定是"),a("code",[t._v("tcp://")]),t._v("或"),a("code",[t._v("ssl://")]),t._v("类型的。")])])])}),[],!1,null,null,null);s.default=c.exports}}]);