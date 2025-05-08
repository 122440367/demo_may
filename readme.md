# 修改点

## main.ts

``` JavaScript
import 'element-plus/dist/index.css'        //第五行
import './style/reset.scss'                 //第七行
```

引入了一个重置表用于消除html本身的样式（比如超链接的颜色之类的），因为是一个scss文件 所以你需要安装对应依赖`npm install -D sass-embedded`  
第五行引入了element-plus的样式表，这是必备操作，昨晚忘记带你做了，不引入的话不好看（导致了当时页面的的大黑团子）

## api/user/index.ts&&type.ts

限定了请求返回的数据类型，你以后会知道这么做的好处的（让你后续很多内容不用自己敲）

## utils/request.ts

重写了baseurl 配合viteconfig做跨域配置

## vite.config.ts

``` JavaScript
server: {
      proxy: {
        '/api': {
          target: 'http://1.92.112.182:8080',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
```

这么做是为了解决跨域的问题，跨域问题是怎么回事之后再讲（你也可以去b站找到相关视频，有很短很简洁的梳理）  
简单地说，你的网页发送的请求(以当前的登录请求为例)的目标url会是这样的：`/api/user/login`   这里的`/api`来自request.ts的`baseurl`，`/user/login`来自`src/api/user/index.ts`的`API.LOGIN_URL`,两者拼起来形成`/api/user/login`，然后vite会对这个url做处理，把里面的/api去掉，再和target拼在一起形成`http://1.92.112.182:8080/user/login`这就是完整的正确的API接口

## login.vue&&logout.vue

在登出页面添加了判断是否登录的逻辑，因为在当前项目中，项目一运行就会进入登出页面，在这里判断你有没有登录，没有登陆就跳转到登录页  
在登陆页面写了一个简单的收集登录信息的表单，通过reqLogin发送请求登录，并根据回传的响应做下一步的动作
