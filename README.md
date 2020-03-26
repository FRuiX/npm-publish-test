# npm发布模版
## 目录说明

├── example               // 示例代码，在自己测试的时候可以把测试文件放到 src 里
│   └── src               // 示例源代码
│       ├── index.js      // 示例 js
│       └── index.html    // 示例 html
├── lib                   // 打包构建后生成的文档
├── src // 组件源代码
│   └── Message.jsx       // 组件源代码文件
├── .babelrc
├── .gitignore
|—— .package.json         // 配置文件 
|—— .readme.md            // 项目说明文档
└── webpack.config.js

## package.json 配置项简单说明
```
{
  "name": "npm-publish-test",               // npm包名称
  "version": "1.0.0",                       // 版本号
  "description": "a test for npm publish",  // 描述说明
  "main": "lib/Message.jsx",                // 实际引用文件
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "./node_modules/.bin/babel src --copy-files --source-maps --extensions .es6,.es,.jsx --out-dir lib",
    "dev": "webpack-dev-server"
  },
  "author": "",
  "license": "ISC",
}

```

## 启动
```
npm install
npm run dev
```
## 打包
```
npm run build
```

## 流程
准备条件：
1. [注册npm账号](https://www.npmjs.com/)
2. 创建git仓库
流程：
1. 克隆仓库到本地
2. 复制本模版代码
3. 修改package.json配置
4. 开发代码完成
5. 通过测试
6. 推送到仓库并合并至主分支
7. 发布npm包

### npm包发布方法
1. 登录npm
```
npm add
按照提示填写信息
```
2. 退出工程文件夹
```
npm publish <文件夹名>
```

