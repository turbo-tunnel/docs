
module.exports = {
  title: 'Turbo Tunnel',
  description: '🚀 Fast tcp/https/websocket/socks4/socks5/ssh/icmp/k8s tunnel serving as unified proxy server.',
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
      ['/nested_tunnel', '嵌套隧道'],
      ['/config', '配置文件'],
      ['/transparent_proxy', '透明代理'],
      ['/plugin', '扩展插件']
    ]
  },
  plugins: [
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
        content: "复制成功"
      }
    }]
  ]
}