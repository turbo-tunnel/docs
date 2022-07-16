# TurboTunnel使用文档

## 环境要求

* 操作系统： `Windows`、`Linux`、`MacOS`
* Python: `>=3.5`

## 安装方法

```bash
python3 -m pip install turbo-tunnel
```

使用`turbo-tunnel`命令测试安装是否成功。如果提示没有找到程序，可以使用`python3 -m turbo_tunnel`来执行命令。

```bash
turbo-tunnel

 _____            _          _____                        _
/__   \_   _ _ __| |__   ___/__   \_   _ _ __  _ __   ___| |
  / /\/ | | | '__| '_ \ / _ \ / /\/ | | | '_ \| '_ \ / _ \ |
 / /  | |_| | |  | |_) | (_) / /  | |_| | | | | | | |  __/ |
 \/    \__,_|_|  |_.__/ \___/\/    \__,_|_| |_|_| |_|\___|_|

usage: turbo-tunnel [-h] [-c CONFIG] [-l LISTEN] [-t TUNNEL]
                    [--log-level {verbose,debug,info,warn,error}]
                    [--log-file LOG_FILE] [--retry RETRY] [--auto-reload] [-d]
                    [-p PLUGIN] [-V]

TurboTunnel cmdline tool v0.16.2

optional arguments:
  -h, --help            show this help message and exit
  -c CONFIG, --config CONFIG
                        config yaml file path
  -l LISTEN, --listen LISTEN
                        listen url
  -t TUNNEL, --tunnel TUNNEL
                        tunnel url
  --log-level {verbose,debug,info,warn,error}
                        log level, default is info
  --log-file LOG_FILE   log file save path
  --retry RETRY         retry connect count
  --auto-reload         auto reload config file
  -d, --daemon          run as daemon
  -p PLUGIN, --plugin PLUGIN
                        load plugin
  -V, --version         show current version
```

## 基本功能

在turbo-tunnel中每种类型的隧道服务都会定义一个URI，例如：`http://1.1.1.1:8080/`、`ssh://2.2.2.2:2222/`等。不同服务通过URL中的`协议`区分。用户也可以定义自己的隧道协议。

基本上每种类型的隧道都会实现一个`TunnelServer`和`Tunnel`类。在命令行中，使用`-l/--listen`参数可指定要监听服务的相关信息；而使用`-t/--tunnel`参数可以指定后续要穿越的隧道。

监听服务时，如果指定了IP地址，表示会使用该地址进行监听；如果不指定，例如`http://:8080/`，则表示监听在全局地址：`0.0.0.0`。

## 主要功能

* [端口转发](./port_forward.md)
* [HTTPS代理隧道](./https.md)
* [SSH隧道](./ssh.md)
* [WebSocket隧道](./websocket.md)
* [Socks代理隧道](./socks.md)
* [ICMP隧道](./icmp.md)
* [K8S隧道](./k8s.md)
* [嵌套隧道](./nested_tunnel.md)
* [配置文件](./config.md)
* [扩展插件](./plugin.md)
