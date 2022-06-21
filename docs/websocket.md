# WebSocket隧道

## 功能

提供WebSocket隧道服务端和客户端能力。

## WebSocket隧道服务端

```bash
$ turbo-tunnel -l ws://username:password@127.0.0.1/{addr}/{port}
```

此命令可以创建WebSocket隧道服务端，其中`{addr}`和`{port}`在这里是变量占位符，用于指示目标地址和目标端口参数。

> 这是因为WebSocket协议本身并不是一种标准的隧道协议，因此需要使用特定的字段来指定目标地址信息。

运行过程中，当需要访问`1.1.1.1:8888`服务时，客户端会动态生成请求路径：`/1.1.1.1/8888`。

这里可以根据使用者的需要改成不同的格式，例如：`/proxy-{addr}-{port}`或`/proxy?addr={addr}&port={port}`。但是，这里设置的格式需要与客户端指定的url格式保持一致。

## WebSocket隧道客户端

```bash
$ turbo-tunnel -l http://:8080/ -t ws://username:password@127.0.0.1/{addr}/{port}
```

该命令会创建一个HTTPS代理服务端，并通过WebSocket隧道`ws://username:password@127.0.0.1/{addr}/{port}`转发所有流量。

## 使用WSS协议

turbo-tunnel本身没有提供SSL服务端支持，需要使用者在外面套一层`nginx`之类的Web容器来支持SSL，这也是推荐的使用方法。
