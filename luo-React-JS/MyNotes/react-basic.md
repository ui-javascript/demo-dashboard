### react
+ 一个用于构建用户界面的JS库
+ 起源于Instagram...

### 特点
+ 采用声明范式，可以轻松描述应用 ??
+ DOM模拟，最大限度地减少与DOM的交互
+ 与已知的库或框架很好地配合
+ JSX是JS语法的扩展
+ React构建组件，代码更容易复用，大项目开发...
+ 单向响应的数据流 减少了重复代码 比传统数据绑定更简单

### js
+ react.min.js - React 的核心库
+ react-dom.min.js - 提供与 DOM 相关的功能
+ browser.min.js - 将JSX语法转为JS语法

### 环境
+ Node.js 及 NPM
+ 建议在 React 中使用 CommonJS 模块系统，比如 browserify 或 webpack
+ [React 安装](http://www.runoob.com/react/react-install.html)

### React JSX
+ 很像 XML 的 JavaScript 语法扩展
+ 执行更快 代码优化。
+ 类型安全，在编译过程中就能发现错误。
+ 使用 JSX 编写模板更加简单快速。
+ 在 JSX 中不能使用 if else 语句，用 conditional (三元运算) 表达式替代
+ 推荐使用内联样式
+ 渲染 HTML 标签
```
var myDivElement = <div className="foo" />;
ReactDOM.render(myDivElement, document.getElementById('example'));
```
+ 渲染 React 组件
```
var MyComponent = React.createClass({/*...*/});
var myElement = <MyComponent someProperty={true} />;
ReactDOM.render(myElement, document.getElementById('example'));
```
+ React 的 JSX 使用大、小写的约定来区分本地组件的类和 HTML 标签。
+ 由于 JSX 就是 JavaScript，一些标识符像 class 和 for 不建议作为 XML 属性名。作为替代，React DOM 使用 className 和 htmlFor 来做对应的属性。
+ 注释 render里的标签注释要花括号？？

###  组件
+ 组件类只能包含一个顶层标签，否则会报错

### React State(状态)
+ React 把组件看成是一个State Machines。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致React 把组件看成是一个状态机。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致
+ React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）

### React Props
+ state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变
+ 子组件只能通过 props 来传递数据
+ 更多验证器
```
React.createClass({
  propTypes: {
    // 可以声明 prop 为指定的 JS 基本数据类型，默认情况，这些数据是可选的
   optionalArray: React.PropTypes.array,
    optionalBool: React.PropTypes.bool,
    optionalFunc: React.PropTypes.func,
    optionalNumber: React.PropTypes.number,
    optionalObject: React.PropTypes.object,
    optionalString: React.PropTypes.string,

    // 可以被渲染的对象 numbers, strings, elements 或 array
    optionalNode: React.PropTypes.node,

    //  React 元素
    optionalElement: React.PropTypes.element,

    // 用 JS 的 instanceof 操作符声明 prop 为类的实例。
    optionalMessage: React.PropTypes.instanceOf(Message),

    // 用 enum 来限制 prop 只接受指定的值。
    optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

    // 可以是多个对象类型中的一个
    optionalUnion: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.instanceOf(Message)
    ]),

    // 指定类型组成的数组
    optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

    // 指定类型的属性构成的对象
    optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

    // 特定 shape 参数的对象
    optionalObjectWithShape: React.PropTypes.shape({
      color: React.PropTypes.string,
      fontSize: React.PropTypes.number
    }),

    // 任意类型加上 `isRequired` 来使 prop 不可空。
    requiredFunc: React.PropTypes.func.isRequired,

    // 不可空的任意类型
    requiredAny: React.PropTypes.any.isRequired,

    // 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接使用 `console.warn` 或抛异常，因为这样 `oneOfType` 会失效。
    customProp: function(props, propName, componentName) {
      if (!/matchme/.test(props[propName])) {
        return new Error('Validation failed!');
      }
    }
  },
  /* ... */
});
```

### React 组件 API
+ [API](http://www.runoob.com/react/react-component-api.html)

### 组件的生命周期
+ Mounting：已插入真实 DOM
+ Updating：正在被重新渲染
+ Unmounting：已移出真实 DOM

### react ajax
+ 当使用异步加载数据时，在组件卸载前使用 componentWillUnmount 来取消未完成的请求。

### react refs
+ React 支持一种非常特殊的属性 Ref ，你可以用来绑定到 render() 输出的任何组件上
+ 支撑实例（ backing instance ）
+ 任何时间总是拿到正确的实例
+ 


