# Socks代理隧道

## 功能

提供Socks4代理隧道服务端和客户端能力。

> Socks5代理隧道正在支持中……

## Socks4代理隧道服务端

```bash
$ turbo-tunnel -l socks4://userid@127.0.0.1:1080
```

该命令可以创建一个Socks4代理隧道服务端，userid参数用于鉴权，不指定则无需鉴权。

`socks4://`也可以写成`socks://`，表示默认使用socks4协议。

## Socks4代理隧道客户端

```bash
$ turbo-tunnel -l http://:8080/ -t socks4://userid@127.0.0.1:1080
```

该命令会创建一个HTTPS代理服务端，并通过Socks4代理隧道转发所有流量。
