# 透明代理

## 什么是透明代理

透明代理是指不需要应用主动配置代理就可以自动通过代理访问服务的代理技术，这种情况下代理对应用完全透明，应用不会感知到代理的存在。相比于普通代理方式，这种方式不需要应用主动支持代理即可使用，因此应用范围更加广泛。

## 常见的透明代理方案

常见的透明代理方案有：

* 修改路由表
* 修改iptables
* Hook socket函数

前两种方案会影响所有应用，因此也称作全局代理。第三种方案只会影响指定的应用，影响范围相对可控。Windows和Macos上常用的透明代理工具是`Proxifier`，Linux上常用的工具是`tun2socks`。

透明代理很好地解决了许多应用不支持配置代理，导致在部分网络环境下无法正常使用的问题。

`Proxifier`除了支持`HTTPS`、`SOCKS`等代理协议，还支持配置多个代理服务器和路由规则，这在复杂网络环境下是非常有用的。turbo-tunnel也提供了类似的能力，并且支持更多的隧道类型。

`tun2socks`主要原理是通过创建一个虚拟网卡，配置路由规则后将流量导到虚拟网卡，然后转发给一个socks5代理服务。因此，可以通过`turbo-tunnel`创建好socks5代理服务器与路由规则，然后使用`tun2socks`进行流量转发。

还有一种常见的代理方案是：`proxychains`，它通过向目标进程中注入一个so来hook socket相关函数，来拦截网络请求，并转发给配置的代理服务器。不过它不支持配置规则，进程产生的所有请求都必须通过指定的代理进行访问。因此，通过将proxychains与turbo-tunnel结合起来使用，可以满足动态代理的需求。而且这种方式的优点是可以人工指定进程是否走代理逻辑，比较灵活一些。

## 结合proxychains使用

proxychains的使用方式这里不做过多的介绍，可以直接`Google`或参考[这篇文章](https://www.drunkdream.com/2017/02/24/ubuntu-install-proxychains/)。

* 启动turbo-tunnel

```bash
$ turbo-tunnel -c ~/tunnel.yaml --auto-reload
```

`~/tunnel.yaml`中指定代理服务监听在`http://127.0.0.1:9999`地址。

* 配置/etc/proxychains4.conf

```conf
[ProxyList]
# add proxy here ...
# meanwile
# defaults set to "tor"
# socks4        127.0.0.1 9050
http 127.0.0.1 9999
```

* 通过proxychains访问目标服务

```bash
$ proxychains curl http://www.google.com/
```

通过`tunnel.yaml`进行路由规则的管理，使得`proxychains`命令变得更加通用，降低了使用成本。

## 结合tun2socks使用

如果解决执行命令前需要手动加上`proxychains`比较麻烦，可以考虑使用`tun2socks`。