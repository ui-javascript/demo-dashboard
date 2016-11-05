### 比例尺
+ 线性比例尺
    + linear.rangeRound() 输出值四舍五入
    + linear.clamp(true) 超出值域的值
    + linear.nice()   理想定义域
    + linear.ticks(10)  选取坐标轴刻度
    + linear.tickFormat() 例 显示两位小数
+ 指数对数比例尺
    + powScale 多一个exponent()
    + logScale 多一个base()
+ 量子与分位比例尺
+ 阈值比例尺
+ 序数比例尺

### 坐标轴

### 画个散点图

### 绘制
+ svg是最适合D3的画板
+ 路径path最强
+ 路径生成器

### 颜色
+ RGB R+G+B = ？
    + rgb.brighter() 只有在某通道的值在30~255之间才会计算
    + rgb.toString() 返回颜色值,例"#ffeeaa"
+ HSL 色相Hue + 饱和度Saturation + 明度Lightness
    + 色相的取值是一个角度，每个角度代表一种颜色
+ RGB与HSL的转化
+ 插值

### 生成器
+ 线段生成器
+ 区域生成器
+ 弧生成器
+ 符号生成器
+ 弦生成器
+ 对角线生成器

### 画个折线图

### 动画和过渡的区别
+ 动画:可能不确定时间和初始状态
+ 过渡:

### 动画
+ 选择集对象和过渡对象
+ 过渡对象是不能绑定数据的
+ 文字过渡要用到tween()

### 过渡样式
+ linear
+ cubic 逐渐加快速度
+ elastic 弹簧
+ back 回缩
+ bounce 在终点处弹跳几下
+ in 
+ out 相反方向运动
+ in-out 前半段in,后半段out
+ out-in
+ 组合上面的...
+ 默认：cubic-in-out

### each()和call()
+ transition.type
+ start end
+ interrupt 当某过渡在进行中，该元素又在别处被调用一个新的过渡，这时候就会发生打断事件

### 定时器
+ FPS Frames Per Second
+ setInterval
+ setTimeout
+ d3.timer()  内部是requestAnimationFrame
+ 浏览器显示频率大于绘制频率 动画的过渡绘制失帧
+ 与浏览器的显示频率一致
```
d3.timer(draw, 500, +new Date(2015, 1, 1, 15, 21, 30));
```

### 
