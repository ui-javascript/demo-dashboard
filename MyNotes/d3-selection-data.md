### 选择集
+ 除了css选择器，还可以是DOM API选择的元素
```
var important = document.getElementById("important"); // ByClassName
d3.select(important); // selectAll
```
+ 查看状态
    + selection.empty() // false
    + selection.node()  // null / `<p>hello<p>` 
    + selection.size()  // 3
+ 属性
    + selection.attr
    ```
    var cx = d3.select("circle").attr("cx");
    console.log(cx); // 50px
    ```
    + selection.classed   
    ```
    d3.select("p").attr("class","red bigsize");
    d3.select("p")
      .classed("red",false)
      .classed({"red":true, "bigsize",false});
    ```
    + selection.style  style -> class
    + selection.property  凡是不能用attr()的
    ```
    d3.select("#fname").property("value","Lisa");
    ```
    + selection.text 相当于innerText,不包括标签
    + selection.html
+ append insert remove
```
body.insert("p","#plane").text("Bike");
```
+  datum的工作过程
    + 为选中集的每一个元素增加 _data_ 
    + 只有undefined和null不会创建这个属性
    + 在被绑定数据的选择集中添加元素后，新元素会继承该数据(coding...)

+  data的工作过程
    + 数组长度与元素数量不一致的处理
        + enter   即将进入可视化 `cosole.log(update)`
        + exit    即将退出可视化 `cosole.log(update.enter())`
        + update  即将被更新     `cosole.log(update.exit())`
    + 上述的模板(coding...)
    + 常用方法： 先选空集再enter().append()
    + datum和data的区别
![](https://raw.githubusercontent.com/luo0412/Qmen/master/MyNotes/images/selection-data-datum-diff.png)
    + 绑定顺序
        + index
        + key value(coding)
        + 只有在选择集原来已经绑定数据,键函数才有效果（曾经被坑...）
    + sort(coding)
    + each
    + filter(coding)
    + call
    ```
    d3.selectAll("div").call(myFunc);

    // 相当于
    function myFunc(selection) {
        selection.attr("name", "value");
    }
    myFunc(d3.selectAll("div"));
    ```
+ 数组的处理
    + 排序
    ```
    var nums = [54, 23, 77, 11, 34];
    nums.sort(d3.ascending);
    nums.sort(d3.descending);
    console.log(nums);
    ``` 
    + 求值 sum mean平均值(有效长度 undefined和NaN) median中间值等等
    ```
    var minAcc = d3.min(nums, function(){ return d * 3;});
    var maxAcc = d3.min(nums, function(){ return d - 5;});
    var extentAcc = d3.min(nums, function(){ return d % 7;}); // [1, 6] 最值
    ```
    + splice(coding...)
    + 操作
        + shuffle 洗牌
        + merge `d3.merge([ [1], [2,3] ]);`
        + pairs 返回邻接数组对???? 原数组不变
        + range (coding...)
        + 映射map 值是包含键的
        + 集合set
        + 嵌套结构Nest

### 做个柱状图
