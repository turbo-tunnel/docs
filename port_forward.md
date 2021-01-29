# 端口转发

## 功能

用于将远程端口映射到本地，支持通过多层代理来映射表目标服务。

## 直接映射端口

```bash
$ turbo-tunnel -l tcp://127.0.0.1:3344 -t tcp://www.qq.com:80
```

这样可以将`www.qq.com:80`映射到本地的`127.0.0.1:3344`。因此，可以使用`curl http://127.0.0.1:3344/ -H "Host: www.qq.com"`来访问QQ首页。

## 通过隧道映射端口

```bash
$ turbo-tunnel -l tcp://127.0.0.1:3344 -t http://web-proxy.com:8080 -t tcp://www.qq.com:80
```

这里是通过https代理隧道来映射端口，一般用于需要通过代理服务器访问外网的场景。

## 通过多层嵌套代理映射端口

```bash
$ turbo-tunnel -l tcp://127.0.0.1:3344 -t http://web-proxy.com:8080 -t ssh://1.1.1.1:2222/ -t tcp://192.168.1.1:80
```

这样可以通过`https`和`ssh`两层嵌套代理来映射端口。这种情况一般是`ssh`服务器上部署了一个跳板机服务，需要通过该跳板机才能访问目标网络，例如这里的：`192.168.1.1`；而访问ssh服务又需要通过https代理。

## 映射SSL端口

```bash
$ turbo-tunnel -l tcp://127.0.0.1:3344 -t ssl://www.qq.com:443
```

这样可以在本地直接访问明文服务，隧道会自动进行SSL加密。例如，这里可以使用`curl http://127.0.0.1:3344/ -H "Host: www.qq.com"`访问`www.qq.com:443`的https服务。

对于域名解析非预期的场景，可以使用`ssl://1.1.1.1:443/?server_hostname=www.qq.com`来指定证书域名。对于自签名证书，可以使用`ssl://1.1.1.1:443/?verify_ssl=false`来禁用证书校验。

> 端口映射时，最后一个tunnel一定是`tcp://`或`ssl://`类型的。
