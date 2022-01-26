# SSH隧道

## 功能

提供了简易SSH服务端以及SSH转发隧道的能力。

## SSH服务端

```bash
$ turbo-tunnel -l ssh://name:password@:2222/
```

该命令创建了一个用户名为`name`，密码为`password`，监听端口为`2222`的SSH服务端。

> 该SSH服务端支持`Linux`、`Windows`、`MacOS`等系统，支持执行SHELL命令，支持PTY，支持端口转发，支持scp。

```bash
$ turbo-tunnel -l ssh://name:password@:2222/?private_key=/path/to/private-key
```

使用`private_key`参数可以指定服务端使用的私钥文件路径，不指定则会在当前路径下寻找名为`skey`的私钥文件，如果不存在则会新建一个新的秘钥文件。

```bash
$ turbo-tunnel -l ssh://:2222/?public_key=/path/to/public-key
```

使用`public_key`参数可以指定鉴权使用的公钥文件，允许用户使用公私钥方式登录SSH服务端。

## SSH隧道客户端

```bash
$ turbo-tunnel -l http://:8080/ -t ssh://1.1.1.1:2222/?private_key=/path/to/private-key
```

该命令会创建一个HTTPS代理服务端，并通过SSH服务端`1.1.1.1:2222`转发所有流量。这里的`private_key`表示使用公私钥方式进行鉴权时的私钥路径。

> 这里的SSH服务端需要开启`端口转发`能力，如果未开启端口转发，可以使用以下方法。

## 通过进程进行端口转发的SSH隧道客户端

```bash
$ turbo-tunnel -l http://:8080/ -t ssh+process://root:password@1.1.1.1:2222/usr/local/bin/go-telnet
```

`/usr/local/bin/go-telnet`是用于进行端口转发的程序路径（需要提前拷贝到ssh服务器上并设置好可执行权限），源码地址为：[https://github.com/turbo-tunnel/telnet-go](https://github.com/turbo-tunnel/telnet-go)。其基本原理是将进程的`stdin`和`stdout`转换为socket的读写操作，从而实现了端口转发。
