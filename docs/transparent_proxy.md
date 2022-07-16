# 透明代理

## 什么是透明代理

透明代理是指不需要应用主动配置代理就可以自动通过代理访问服务的代理技术，这种情况下代理对应用完全透明，应用不会感知到代理的存在。相比于普通代理方式，这种方式不需要应用主动支持代理即可使用，因此应用范围更加广泛。

透明代理分为全局透明代理和进程级透明代理，全局透明代理是指所有进程都会通过这个代理访问网络，一般是通过修改路由表或iptables之类的方式实现的（VPN就是一种最为常见的全局透明代理）；而进程级透明代理只对特定的进程生效，一般使用Hook Socket函数之类的方式实现。前者在使用上更加方便，使用时不需要对进程进行特殊处理；而后者则更加灵活，也更加安全一些（相当于访问网络有白名单机制）。

透明代理很好地解决了许多应用不支持配置代理，导致在部分网络环境下无法正常使用的问题。

## 常见的透明代理方案

常见的透明代理实现原理：

* 修改路由表
* 修改iptables
* Hook socket函数

下面介绍几种常见的透明代理工具：

### Proxifier

`Proxifier`是一款跨平台的可视化全局透明代理管理工具，在Windows端主要是通过LSP自动在每个进程中注入DLL，然后Hook Socket函数来实现的。它支持`HTTP`、`Socks4`、`Socks5`等协议，并且可以配置路由规则，在使用上还是比较方便的。详细使用文档可以参考：[电脑全面变IP神器之：Proxifier使用指南](https://www.xiequ.cn/httpproxy/contents/4/68.html)。

但它不支持`WSL`，因此WSL里的程序是无法通过Proxifier访问网络的。而且它对Mac端的兼容性不是很好，因此Mac端不太推荐使用该工具。

### proxychains

proxychains是一款Linux和MacOS上使用的命令行工具，将代理地址配置到配置文件后，在命令行前面加上`proxychains`就可以通过Hook socket函数进行透明代理。具体实现原理与使用方法可以参考[这篇文章](https://www.drunkdream.com/2017/02/24/ubuntu-install-proxychains/)。

但是proxychains不支持策略路由，这种情况下可以借助`turbo-tunnel`达到这样的效果。

* 安装proxychains

Debian

```bash
sudo apt install proxychains4
```

CentOS

```bash
git clone https://github.com/rofl0r/proxychains-ng
cd proxychains
./configure
make
sudo make install
```

* 启动turbo-tunnel

```bash
turbo-tunnel -c ~/tunnel.yaml -d --auto-reload
```

`~/tunnel.yaml`是配置文件，在里面指定代理服务监听在`http://127.0.0.1:9999`地址。

* 配置/etc/proxychains4.conf

```conf
strict_chain
proxy_dns 
# Some timeouts in milliseconds
tcp_read_time_out 15000
tcp_connect_time_out 8000

[ProxyList]
# add proxy here ...
# meanwile
# defaults set to "tor"
# socks4        127.0.0.1 9050
http 127.0.0.1 9999
```

* 通过proxychains访问目标服务

```bash
proxychains curl http://www.google.com/
```

通过`tunnel.yaml`进行路由规则的管理，使得`proxychains`命令变得更加通用，降低了使用成本。

> 在Windows上如果想同时支持普通Windows应用以及WSL应用，可以通过`turbo-tunnel`先创建一个通用的本地代理，并配置好策略文件，然后Windows应用使用Proxifier进行代理，WSL应用使用proxychains进行代理。这种情况下，路由策略统一由turbo-tunnel进行管理，Proxifier仅用作透明代理。

### tun2socks

tun2socks是一款跨平台的命令行工具，可以将网卡接收到的数据转发给socks5代理，因此可以通过这个工具实现全局透明代理。目前常见的实现有[go-tun2socks](https://github.com/eycorsican/go-tun2socks)和[tun2socks](https://github.com/xjasonlyu/tun2sockshttps://github.com/xjasonlyu/tun2socks)。

下面介绍在Linux系统上的使用方法：

```bash
turbo-tunel -l socks5://127.0.0.1:9999 -t http://192.168.0.1:8080/ -d --auto-reload
 
ip tuntap add mode tun dev tun1
ip addr add 240.0.0.1 dev tun1
ip link set dev tun1 up

ip route del default
ip route add default via 240.0.0.1
ip route add 192.168.0.0/16 via $myip

./tun2socks -proxyServer 127.0.0.1:9999 -loglevel debug -tunName tun1 -tunAddr 240.0.0.2 -tunGw 240.0.0.1 -proxyType socks -tunDns 10.28.0.12
```

首先使用`turbo-tunnel`创建一个`socks5`代理服务器，并转发给`192.168.0.1:8080`地址的`http`代理服务器。

然后使用`ip tuntap add mode tun dev tun1`命令创建一个虚拟网卡，并通过`ip route add default via 240.0.0.1`命令将虚拟网卡设置为默认网卡，这样所有的流量都会发送到这个网卡；如果有部分地址必须直连，可以通过`ip route add 192.168.0.0/16 via $myip`的方式配置直连规则，`$myip`是真正连接网络的网卡ip。

在`tun2socks`命令行中，`-tunName`参数指定刚才创建的虚拟网卡作为输入端，`-proxyServer`参数指定了上游代理服务器地址，代理服务器类型由`-proxyType`参数决定。

tun2socks有一个问题，就是域名解析完全依赖本地的域名解析，无法使用服务端域名解析。这样，如果某些域名受到污染，就会导致访问受到影响。此时需要使用其它方案来解决域名污染问题。

## 总结

借助于透明代理工具和turbo-tunnel路由规则管理的能力，可以实现较为灵活的全局/进程级透明代理。具体使用哪款透明代理工具，取决于具体使用场景。全局透明代理在使用上更加方便，而进程级透明代理则更加灵活可控。
