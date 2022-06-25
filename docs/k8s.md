# K8S隧道

## 功能

* 通过K8S接口连接到集群内指定的Pod，从而去访问集群内的其它服务

## 使用场景

这种方式是为了解决无法在K8S集群外部访问集群内尚未暴露出来的服务（内部服务）。

其实现原理与SSH的进程模式基本一致，都是需要用户先在POD里安装好[telnet](https://github.com/turbo-tunnel/telnet-go)工具，然后通过K8S的`exec`通道去执行这个命令行，从而建立与其它服务的连接。

虽然相比于`port-forward`方式需要额外部署一个工具，但使用这种方式的通用性更好，不需要在POD里单独部署其它的隧道服务，相对来说更安全一些。

## K8S隧道客户端

```bash
$ turbo-tunnel -l http://127.0.0.1:8080 -t "k8s://1.1.1.1:8443/usr/local/bin/go-telnet?namespace=test&pod=turbo-tunnel&kubeconfig=/root/kubeconfig"
```

* `/usr/local/bin/telnet`是`telnet`工具在POD中的路径
* `namespace`: POD所在的命名空间，默认值为`default`
* `pod`: POD的名字
* `kubeconfig`: kubeconfig文件路径
* `client_cert`: 客户端证书文件路径
* `client_key`: 客户端key文件路径
* `ca_cert`: CA证书文件路径

如果没有kubeconfig文件，也可以通过指定`client_cert` + `client_key` + `ca_cert`这三个参数来代替`kubeconfig`参数。
