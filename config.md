# 使用配置文件

## 配置文件可以做什么

配置文件可以简化命令行参数，允许配置多个隧道和路由规则，从而根据不同请求匹配不同的路由。

## 编写配置文件

配置文件使用`yaml`语法，基本格式如下：

```yaml
version: 1.0 # yaml文件版本，暂时没有用到，留作升级使用

listen: http://127.0.0.1:6666 # 配置监听地址
plugins:
  - relay_tunnel # 指定用到的插件

tunnels:
  - id: direct
    url: tcp://
    default: true # 默认使用直连策略
  
  - id: block
    url: block:// # 禁止访问策略

  - id: web
    url: http://web-proxy.com:8080
  
  - id: private
    url: wss://test:mypassword@ws-proxy.com/proxy/{addr}/{port}
    dependency: web # 配置隧道依赖关系

rules:
  - id: local
    priority: 100 # 优先级，1-100，策略冲突时会选择优先级最高的策略
    addr: 127.0.0.1
    tunnel: direct
  
  - id: internal
    priority: 99
    addr: "192.168.*"
    port: 1-65535
    tunnel: direct
  
  - id: public
    priority: 90
    addr: "*"
    port: 80;443;8080
    tunnel: web # 访问外网使用`web`隧道
  
  - id: private
    priority: 95
    addr: "*.private.com"
    port: 1-65535
    tunnel: private

  - id: test
    priority: 90
    addr: "*.baidu.com"
    port: 80;443
    tunnel: block # 不允许访问
```

```bash
$ turbo-tunnel -c tunnel.yml
```

使用`-c/--config`参数可以指定配置文件。
