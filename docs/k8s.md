# K8S隧道

## 功能

* 通过K8S接口连接到集群内指定的Pod，从而去访问集群内的其它服务

## 使用场景

这种方式是为了解决无法在K8S集群外部访问集群内尚未暴露出来的服务（内部服务）。

目前提供了两种支持方式：`端口转发模式`和`进程模式`。端口转发模式是利用了K8S的`portfoward`接口，其原理与`kubectl port-forward`命令一致；进程模式与SSH的进程模式基本一致，都是需要用户先在POD里安装好[telnet](https://github.com/turbo-tunnel/telnet-go)工具，然后通过K8S的`exec`通道去执行这个命令行，从而建立与其它服务的连接。

> 优先推荐使用`端口转发模式`，如果失败可以改用`进程模式`再试下。

## K8S隧道客户端

### 端口转发模式

```bash
$ turbo-tunnel -l http://127.0.0.1:8080 -t "k8s://1.1.1.1:8443/?namespace=test&kubeconfig=/root/kubeconfig"
```

* `namespace`: 要访问POD所在的命名空间，默认为`default`
* `kubeconfig`: kubeconfig文件路径
* `client_cert`: 客户端证书文件路径
* `client_key`: 客户端key文件路径
* `ca_cert`: CA证书文件路径

如果没有kubeconfig文件，也可以通过指定`client_cert` + `client_key` + `ca_cert`这三个参数来代替`kubeconfig`参数。

访问时需要将目标地址设置为`POD`名，`暂时还不支持指定ip访问`。

如果只是想把POD中的地址映射到本地，可以使用以下命令：

```bash
$ turbo-tunnel -l tcp://127.0.0.1:7777 -t "k8s://1.1.1.1:8443/?namespace=test&kubeconfig=/root/kubeconfig" -t tcp://pod-1:8080
```

该命令等价于以下k8s命令：`kubectl -n test port-forward pod-1 7777:8080`。

### 进程模式

```bash
$ turbo-tunnel -l http://127.0.0.1:8080 -t "k8s+process://1.1.1.1:8443/usr/local/bin/go-telnet?namespace=test&pod=pod-1&kubeconfig=/root/kubeconfig"
```

* `/usr/local/bin/telnet`是`telnet`工具在POD中的路径
* `namespace`: POD所在的命名空间，默认为`default`
* `pod`: POD的名字
* `kubeconfig`: kubeconfig文件路径
* `client_cert`: 客户端证书文件路径
* `client_key`: 客户端key文件路径
* `ca_cert`: CA证书文件路径

如果没有kubeconfig文件，也可以通过指定`client_cert` + `client_key` + `ca_cert`这三个参数来代替`kubeconfig`参数。
