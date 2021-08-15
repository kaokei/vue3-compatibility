# vue3-compatibility

## 测试 Vue3 的兼容性

访问链接：https://vue3-compatibility.vercel.app/  
测试环境：https://live.browserstack.com/dashboard

注意这里的测试环境似乎是需要收费的，应该是根据 ip 限额了。

## 测试结论

#### PC 端

现代浏览器基本没毛病。  
已知不支持的浏览器主要是 ie 系列，包括 ie11。

#### 移动端

经过测试安卓 5 时可以正常运行的，但是网上有人提问过为什么 vue3 不支持安卓 5，具体原因未知。

对于 iphone 手机，主要是看 ios 系统，经过测试最低支持的版本是 ios10，到 ios9 就已经不支持了。这个是符合预期的，因为 ios9 不支持 proxy 特性。

同时了解到 iphone7 的预装系统就是 ios10，所以对于 iphone7 以上的版本的手机是支持 vue3 的。

换一种说法就是不支持没有升级的 iphone6 系列，及以下版本的手机。当然如果 iphone6 的手机升级过系统，也是可以支持 vue3 的。

同时有注意到 iphone6 是 2015 年出的手机。

## 查看系统分布数据

查看 ios 版本分布：https://david-smith.org/iosversionstats/  
ios10 以下的用户比例可以忽略不计了。

查看 安卓 系统分布：https://tongji.baidu.com/research/app  
截止 2021-07-30，目前还有大约 2.11%的安卓 4.4 的用户，也就是不支持 Vue3 的用户。

查看 ios9 和 ios8 的比例：https://mixpanel.com/trends/#report/ios_9/from_date:-365,report_unit:week,to_date:0  
截止到 2021 年 8 月，大约还有 0.1%的用户。

https://kdocs.cn/l/seOhOmttkz2J  
[金山文档] ios_version-CN-monthly-201706-202108[副本].xlsx  
数据来源：https://gs.statcounter.com/ios-version-market-share/mobile-tablet/china/#monthly-201706-202108  
截止 2021 年 8 月份小于 ios10 比例约为 3.77%。

https://kdocs.cn/l/sv6hoDHpptzw  
[金山文档] android_version-CN-monthly-201706-202108[副本].xlsx  
数据来源：https://gs.statcounter.com/android-version-market-share/mobile-tablet/china/#monthly-201706-202108  
截止 2021 年 8 月份小于安卓 6.0 比例约为 3.81%。

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
