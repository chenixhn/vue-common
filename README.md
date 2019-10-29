-----

### 技术栈


 * vuejs，vuex，axios，element-ui，webpack

### 安装和运行

 * 安装依赖
	```npm install``` 
	```npm run dev``` 
	成功执行！

### 项目结构

<pre>

```
├── README.md           
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
│
├── server             // 项目后台
│   ├── api            // api操作
│   ├── db             // 与数据库交互
│   ├── routes          // 后台路由
│   ├── index.js       // 后台入口文件
│   └── package.json   // 项目配置文件
|   
│
├── src                // 生产目录
│   └── axios           // axios操作
|         ├──index.js   // axios配置表
|         ├──base       // axios公共部分
|         |    ├──index.js    //公共方法
|         |    └──setting.js  //状态码
|         └── user
|               ├──cache.js     //请求函数
|               └──config.js    //配置信息
|
|   ├── base           //vue模板
│   ├── components     // 组件
|   |     ├──common    //公共组件
|   |     └──admin
|   |          ├── ui.vue             // 输出组件
|   |          ├── component.html     // template
|   |          ├── component.js       // script
|   |          └── component.less     // style
|   |  
│   ├── router         // 路由
│   ├── store          // vuex状态管理器
│	  ├── App.vue        // 首页
│   └── main.js        // Webpack 预编译入口
│     
```
