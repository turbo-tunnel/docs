# ICMP隧道

## 功能

* ICMP隧道服务端
* ICMP隧道客户端
* 支持穿越NAT
* 支持多路复用

## 使用场景

通常使用的隧道协议一般都是基于`TCP`或`UDP`，但是这两种协议在某些特殊网络情况下可能无法使用（防火墙之类的限制）。而此时ICMP协议可能是放行的（除非是物理隔绝的网络），这种情况下可以考虑使用ICMP隧道。

但受限于`NAT`的限制，ICMP隧道没法实现真正意义上的全双工通信，因此在较大数据量的场景下稳定性可能会有些问题。如果对通信隧道有性能及稳定性要求的场景，建议优先考虑其它隧道类型（如：WebSocket隧道、SSH隧道等），只在其它协议都没法适用的场景下，才考虑使用ICMP隧道。

如果想了解ICMP隧道更多实现原理，可以参见：[https://www.drunkdream.com/2022/05/05/icmp-tunnel-through-nat/](https://www.drunkdream.com/2022/05/05/icmp-tunnel-through-nat/)。

## ICMP隧道服务端

```bash
$ sudo turbo-tunnel -l icmp://:8000/
```

ICMP协议本身并没有端口的概念，这里的`8000`是在隧道层协议中自己实现的，这样可以支持在一台主机上启动多个隧道服务端。

## ICMP隧道客户端

```bash
$ sudo turbo-tunnel -l http://127.0.0.1:8080 -t icmp://1.1.1.1:8000
```

`1.1.1.1`为ICMP隧道服务端IP。可以看出，客户端使用方法与其它隧道类型基本一致。

> 不过，ICMP隧道目前尚不支持与其它隧道嵌套使用