# react

- 组件化：重用、工程化、健壮性

- 状态管理：任何东西都是状态（登录、购物车...）

- react 适合做大项目，因为限制严格。越宽松越不适合做大项目

- 一些配合使用的成份：Flux、Redux、React-Native、Server-React

- 基于 JSX（类似 babel）

  - JSX: JS + ES6 + 创建元素

  - 特点：可以直接写一个标签，就是元素；限制：有且仅有一个顶级标签

    ```html
      <!-- 对的写法： -->
      <div>
        <span>aaa</span>
        <span>bbb</span>
      </div>

      <!-- 错的写法 -->
      <span>aaa</span>
      <span>bbb</span>
    ```

- react 自身只提供模块化和状态管理两个功能 -> 精简

- react dom

- 因此使用 react 需要：babel（browser.js）、react.js、react-dom.js

## render 内部的 JSX 与普通的 HTML 的区别

1.  class -> className

2.  (label) for -> htmlFor

3.  单标签也必须闭合（跟 h5 的区别）

4.  style -> 需要一个 json

    - style 的设置写法类似 json

    ```
    // 外面的花括号是 react 的赋值，除了字符串都要用 {} ; 里面的花括号是 style 的 json 值

    style = {{xxx}}
    ```

5.  className -> 类似数组

## 定义自己的组件

- 定义组件：使用 class ，继承 React.Component 。 即：所有组件都遵守的一些规则

  - 注意:

    1.  类名首字母大写

    2.  所有的组件必须得有 render 方法，即所有的组件都是可以被渲染的

  ```javascript
  class Test extends React.Component {
    constructor(...args) {
      super(...args);
    }

    render() {
      return <div>aaa</div>;
    }
  }
  ```

- 使用组件，类似标签

## react 标签属性（‘传参’）

1.  "" -> 进去的都是字符串
    `type = 'text'`

2.  {} -> 进去的都是原来的东西
    `onClick = {this.fn}`

3.  插入 html 标签。 在标签添加属性 `dangerouslySetInnerHTML={__html: html_code}` -> 防止 xxs 攻击

    ```
      <div dangerouslySetInnerHTML={__html: xxx}></div>
    ```

## 组件事件

1.  事件名首字母大写

2.  必须是给个函数，不是字符串。注意 this 调用, 注意 bind 改变所调用方法内部的 this。

    注：react 规定，不指向类自身的 this 的值都为 null

## 组件属性。类似：参数

1.  两种传发："" 、 {}

2.  接收的时候：`this.props.xxx`

3.  属性是只读的，不能修改

## 组件状态

- 初始化状态。只能在 `constructor` 中初始化

  ```javascript
  this.state = { a: 1, b: 2 };
  ```

- 设置，不能直接操作 state , 需要调用 setState() 方法

- 特点：

  1.  可以变

  2.  状态的改变（setState）, 重新渲染 -> 在执行一次 render

      - 即：除了 setState , 没有其他方法再让 render 再次执行

### React 的属性和状态 —— 类似于普通 class 的属性

- 属性：只读

- 状态：可以修改

## 父子级组件通信 -> 组件组合

1.  父 -> 子： 通过 ref ，把子级暴露给父级

2.  子 -> 父： 父级通过属性的方式，把自己暴露给子级；子级再调用父级的方法或属性

- 拓展：无关的组件间通信

  - 原理：通过共同的全局变量

## 跟后台数据交互

## 组件间通信

## redux: 组件间状态管理、通信 -> 适合大型应用，app

## create-react-app

- 安装：`npm i -g create-react-app`

- 创建工程：`create-react-app 工程名`

- `npm start`

- `npm build`

### create-react-app 工程目录

- public 放置静态文件

  - index.html 入口 HTML

- src 源码

  - index.js 入口 js

  - App.js 主模块

### 组件模版

```javascript
import React, {
    Component
} from 'react'

class Index extends Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        return ();
    }
}

export default Index;
```

## [redux](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)

- 适用场景：多交互、多数据源

- 解决：1.代码结构 2.组件间通信

- 设计思想：1. app 是一个状态机，视图和状态一一对应；2. 所有的状态保存在一个对象中

### redux 概念和 API

- 安装 redux : `npm i redux -S` 和 `npm i react-redux -S`

- reducer：计算 state 函数，纯函数，只计算 state

- store：保存数据的容器，整个应用只有一个 store

  - 引入：`import { createStore } from 'redux'`

  - 创建：`const store = createStore(reducer);`

  - 方法：

    - `store.dispatch()`

    - `store.getState()`

    - `store.subscribe()`

* action：view 触发产生 action

  - 触发：dispatch()

* state：状态。时点的数据集合

  - 获取：getState()

* 工作流程

  ![](./imgs/redux_flow.jpg)

- 使用

  1.  定义 reducer

  2.  创建 store , 同时监听 render

  3.  给 view 的 action 绑定 dispatch

  4.  监听 render , 实现 view 的自动渲染

- [配合 react-redux 使用](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)

  - Provider: 在跟组件外面包一层 `<Provider></Provider>` , App 的所有子组件都可以获取到 state

    - 引入：`import { Provider } from 'react-redux'`

    - 在 index.js 使用

    - 绑定 store 属性

  - connect：生成容器组件 `import { connect } from 'react-redux'`

    - mapStateToProps：外部 -> UI 组件

    - mapDispatchToProps：UI 组件 -> 外部

    ```javascript
    // 生成容器组件
    const counter = connect(
      mapStateToProps,
      mapDispatchToProps
    )(Counter);
    ```

- 组件通信的理解：redux 和 react-redux。操作 store

  - redux 引入 store , 储存状态 , 绑定在最外层的 Provider(从 react-redux 引入) 上 , 供所有的子组件使用 state

  - 我们生成的普通组件为 UI 组件 , 通过 connect(从 react-redux 引入) 配置成容器组件 , 把容器组件放置在具体的位置。其中，最关键的两个配置，可供容器组件去读取和修改 store 的状态。store 的工作流程可以参考上图：action -> dispatch -> store(reducer) -> newstate -> view 通过 store 去获取 newstate

    - mapStateToProps

    - mapDispatchToProps
### react-router-dom

- 安装 `react-router-dom`

  - 由于生产模式需要使用，因此安装命令为：`npm i react-router react-router-dom -S`

- 引入

`import {BrowserRouter,Router,Switch,Route} from 'react-router-dom'`

- BrowserRouter: 最外面，声明一个路由块。-> 路由的包裹

  <!-- - Router: 路由对象，用作路由声明 -->

- Switch: 选择声明

- Route: 路由声明->注册一个路由项

- 使用

  - 路由选择 -> 路由注册

    ```javascript
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/detail/:id/" component={Detail} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
    ```

    - 注：BrowserRouter 下面只能有一个子元素

  - 路由跳转：Link

    - 也是从 `react-router-dom` 中引入

    ```
      <Link to=`/detail/${data.id}`>
        XXX
      </Link>
    ```

  - 路由参数获取：`this.props.match.params.xxx`
