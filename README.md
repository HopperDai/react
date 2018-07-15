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

## 父子组件

## 跟后台数据交互

## 组件间通信
