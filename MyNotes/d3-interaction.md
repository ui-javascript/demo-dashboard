### 交互
+ 鼠标
+ 键盘
+ 触屏
+ on监听
+ d3.event
+ 拖拽和缩放

### 监听器
+ 新的覆盖旧的
+ 同一件事情添加多个监听器 名称后缀
+ 删除`on("click", null)`
+ 过渡对象不能设置监听器
+ 监听器要在transition()之前

### 鼠标事件

### 键盘事件
+ keydown 不区分字母大小写
+ keypress 区分字母大小写
+ keyup

### 事件
+ screenX 和 screenY  显示屏幕的左上角
+ clientX 和 clientY  浏览器内容区的左上角
+ pageX 和 pageY      页面的左上角，不随滚动而移动
+ 任何事件发生信息都会保存在d3.event里

### 行为
+ 拖拽和缩放
+ 