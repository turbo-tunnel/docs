# turbo-tunnel文档源码

## gitbook方式

### 安装gitbook & 初始化

```bash
$ nvm use 10
$ yarn
$ node_modules/.bin/gitbook install
```

### 本地运行

```bash
$ node_modules/.bin/gitbook serve
```

### 编译

```bash
$ node_modules/.bin/gitbook build
```

编译完成后静态文件保存在`_book`目录下

## vuepress方式

### 安装vuepress & 初始化

```bash
$ nvm use 12
$ yarn
```

### 本地运行

```bash
$ yarn docs:dev
```

### 编译

```bash
$ yarn docs:build
```

编译完成后静态文件保存在`docs/.vuepress/dist`目录下