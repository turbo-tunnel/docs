
module.exports = {
  title: 'Turbo Tunnel',
  description: '🚀 Fast tcp/https/websocket/socks4/socks5/ssh/icmp/k8s tunnel serving as unified proxy server.',
  patterns: ['*.md', '!SUMMARY.md'],
  themeConfig: {
    repo: 'https://github.com/drunkdream/turbo-tunnel',
    docsRepo: 'https://github.com/turbo-tunnel/docs',
    editLinks: true,
    lastUpdated: 'Last Updated',
    sidebar: [
      ['/', '使用说明'],
      ['/port_forward', '端口转发'],
      ['/https', 'HTTPS代理隧道'],
      ['/socks', 'Socks代理隧道'],
      ['/websocket', 'WebSocket隧道'],
      ['/ssh', 'SSH隧道'],
      ['/icmp', 'ICMP隧道'],
      ['/k8s', 'K8S隧道'],
      ['/nested_tunnel', '嵌套隧道'],
      ['/config', '配置文件'],
      ['/transparent_proxy', '透明代理'],
      ['/plugin', '扩展插件']
    ]
  },
  head:[[ 'script', {}, `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?6561463a45403780bdaed0b365f935a4";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
    `
  ]],
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ["vuepress-plugin-code-copy", {
      color: '#999999',
      align: 'top',
      staticIcon: true,
      successText: "复制成功",
    }]
  ]
}
