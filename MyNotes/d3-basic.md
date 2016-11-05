### d3
+ Data-Driven Documents  数据驱动的文档
+ 报刊杂志 门户网站 新闻媒体
+ 使复杂的数据和文字变得十分容易理解
+ DOM
+ 数据中有图形，图形中有数据
+ 一般的可视化库的做法是 drawPie() 
+ d3是computePie() + 自定义
+ ==> 细微部分的修改 自由
+ 链式语法带来的简洁
+ 饼状图，树形图等封装布局的背后 ==> 大量的算法
+ 基于SVG(可缩放矢量图), 缩放不会损失精度
+ 获取 → 分析 → 过滤 → 挖掘 → 表现 → 改善 → 交互
+ Acquire → Parse → Filter → Mine → Represent → Refine → Interact
+ 元素：坐标 大小 色彩 标签 关联线条
+ 简单的图表最快被人认可 不要本末倒置
+ 数据转化和绘制是独立的 ==> data binding


### 图表种类
+ 柱状图
+ 散点图
+ 折线图 
    + 折线图适合连续的数据 柱状图离散的数据
    + 折线图数据量较大，柱状图较少
    + 用于比较
+ 饼状图 份额
+ 弦图 节点间的联系
+ 力导向图 相互作用力
+ 树状图 
+ 打包图 包含关系和权重
+ 分区图 像硬盘分区

### 服务器
+ Apache只支持静态页面，通过插件支持PHP
+ Tomcat支持ASP、JSP、PHP、CGI
+ Apache 下面的 htdocs

### SVG
+ Scalable Vector Graphics 
+ 使用XML定义图片
+ 位图放大，通过原始像素差值 ==> 失真
+ 矢量图优势
    + 文件小 起点终点等信息
    + 缩放改变不失真
    + 锯齿不明显
+ 矢量图内部存储着产生位图的方法
+ 矢量图不适合表现自然度较高，复杂多变的图 ==> 数学方法描述的

### SVG样式
![](https://raw.githubusercontent.com/luo0412/Qmen/master/MyNotes/images/d3-svg-style-1.png)<br/>
![](https://raw.githubusercontent.com/luo0412/Qmen/master/MyNotes/images/d3-svg-style-2.png)<br/>
![](https://raw.githubusercontent.com/luo0412/Qmen/master/MyNotes/images/d3-svg-marker.png)<br/>

### 导入导出
+ 导入：json csv xml txt
+ 导出：svg pdf png
+ d3.xhr 基于XMLHttpRequest实现
+ 在d3.xhr上又封装了
    + d3.json()
    + d3.csv()
    + d3.html()
    + d3.xml()
    + d3.text()
    + d3.tsv() 只是用tab代替csv的 ,
    + d3.dsv() 自定义分隔符 
    ```
    var dsv = d3.dsv(";", "text/plain");
    var csv = d3.dsv(",", "text/csv;charset=gb2312");
    var tsv = d3.dsv("  ", "text/tab-separated-values;charset=gb2312");
    
    csv("xxx.csv", function(error,csvdata) {
    });
    ```
+  导出svg
    + SVG Crowbar chrome扩展
    + d3-downloadable 导入js css
        + 但不支持外部的图形元素样式 例`<style>`

+ 编辑矢量图
    + inkscape: open source software
        + [download](https://inkscape.org/)
        + win10上安装失败，内部出现错误怎么破
    + 暂时处理办法：低版本, lang = en 

### 使用svg最好的两个开源js库
+ d3.js
+ Raphael.js

