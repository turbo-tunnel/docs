# HTTPS代理隧道

## 功能

提供HTTPS代理隧道服务端和客户端的能力。

## 创建HTTPS代理服务

```bash
$ turbo-tunnel -l http://test:123@0.0.0.0:8080/
```

该命令创建了一个监听在本地`8080`端口的HTTPS代理服务，用户名和密码为：`test`和`123`，所有代理请求会使用当前机器网络进行转发。

## 指定HTTPS代理隧道

```bash
$ turbo-tunnel -l http://:8080/ -t http://name:password@web-proxy.com:8080
```

该命令会创建一个HTTPS代理服务器，并通过另一个HTTPS代理服务`web-proxy.com:8080`转发所有流量，该代理服务器使用`name`和`password`进行鉴权。
