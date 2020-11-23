# StudyInCao


## TIPS
1. 安装/更新到较新版本的的Node.js (10.16.0)
2. 安装React(最新版本：17.0.1): `npm install -g create-react-app`

    或者更新React: `npm install react@17.0.1`
4. pull Git仓库的代码
5. 运行React的命令 
```
cd study-in-cao    //进入项目文件夹，React不允许项目名中有大写字母
npm install        //第一次pull后，运行命令安装module

npm start    //一般用这个。第一次编译会慢一点，网页打开后的修改只要保存然后刷新网页就可以
// or
npm build    //这个要编译很久

// 如果编译显示缺少组件
yarn add antd                         //安装Ant Design组件库，参考文档：https://ant.design/docs/react/use-with-create-react-app-cn
npm install --save @ant-design/icons  //安装icon组件包，
npm install --save react-router       //安装路由组件,参考文档：http://react-guide.github.io/react-router-cn/


// 也可以把 npm 换成 yarn，如果安装了的话，没有什么区别
```
6. 在浏览器访问 http://localhost:3000