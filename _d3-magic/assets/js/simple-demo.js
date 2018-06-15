/* 
 *  示例代码
 */

var comLayoutStr1 = "<div class='col-md-6 col-xs-12'><div class='svg-border' id='";
var comLayoutStr2 = "'></div></div>";

// 追加元素
$("body > .container ").append(comLayoutStr1 + "simple-demo" + comLayoutStr2);

// 定义长宽，数据数组
var w = $("#simple-demo").width();
var h = 250;  // 默认高度250，最小高度180

//  定义数据 
var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13];
var xScale = d3.scale.ordinal()
    .domain(d3.range(dataset.length))
    .rangeRoundBands([0, w], 0.05);
// 序列比例尺
// domain自适应
// ordinal.rangeRoundBands 
// 指定输出范围为连续区间，区间段的起点均为整数
// 第二个参数表示
// 相邻区间段间的间隔（或空白）占区间段的比例
var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset)])
    .range([0, h]);
// 线性比例尺,连续

// 创建svg元素，绑定，类型，指定长宽
var simpleDemo = d3.select("#simple-demo")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

// 画柱状图
// 注意翻转 h - yScale(i)
simpleDemo.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function (d, i) {
        return xScale(i);
    })
    .attr("y", function (d) {
        return h - yScale(d);
    })
    .attr("width", xScale.rangeBand())
    .attr("height", function (d) {
        return yScale(d);
    })
    .attr("fill", function (d) {
        return "rgb(0, 0, " + (d * 10) + ")";
    })
    .on("mouseover", function () {
        d3.select(this)
            .attr("fill", "orange");
    })
    .on("mouseout", function (d) {
        d3.select(this)
            .transition()
            .duration(250)
            .attr("fill", "rgb(0, 0, " + (d * 10) + ")");
    });


// 画标签
// text-anchor
simpleDemo.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function (d) {
        return d;
    })
    .attr("text-anchor", "middle")
    .attr("x", function (d, i) {
        return xScale(i) + xScale.rangeBand() / 2;
    })
    .attr("y", function (d) {
        return h - yScale(d) + 14;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white")
    .style("pointer-events", "none");
//鼠标移到标签上就不会触发moveout事件


/* 
 *  demo-1: 粉色 
 *  func: 
 */

// 追加元素
$("body > .container ").append(comLayoutStr1 + "demo_1" + comLayoutStr2);

// 定义数据
var dataset_1 = [35, 10, 13, 19, 21, 25, 22, 18, 15, 13,
    11, 12, 23, 29];
var xScale_1 = d3.scale.ordinal()
    .domain(d3.range(dataset_1.length))
    .rangeRoundBands([0, w], 0.05);
var yScale_1 = d3.scale.linear()
    .domain([0, d3.max(dataset_1)])
    .range([0, h]);

// 创建svg元素
var simpleDemo = d3.select("#demo_1")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

// 画柱状图
simpleDemo.selectAll("rect")
    .data(dataset_1)
    .enter()
    .append("rect")
    .attr("x", function (d, i) {
        return xScale_1(i);
    })
    .attr("y", function (d) {
        return h - yScale_1(d);
    })
    .attr("width", xScale_1.rangeBand())
    .attr("height", function (d) {
        return yScale_1(d);
    })
    .attr("fill", function (d) {
        return "rgb(0, 0, " + (d * 10) + ")";
    })
    .on("mouseover", function () {
        d3.select(this)
            .attr("fill", "pink");
    })
    .on("mouseout", function (d) {
        d3.select(this)
            .transition()
            .duration(250)
            .attr("fill", "rgb(0, 0, " + (d * 10) + ")");
    });


// 画标签
simpleDemo.selectAll("text")
    .data(dataset_1)
    .enter()
    .append("text")
    .text(function (d) {
        return d;
    })
    .attr("text-anchor", "middle")
    .attr("x", function (d, i) {
        return xScale_1(i) + xScale_1.rangeBand() / 2;
    })
    .attr("y", function (d) {
        return h - yScale_1(d) + 14;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white")
    .style("pointer-events", "none");


/*
 * ex1: 演示连缀语法
 * func:  
 */

$("body > .container ").append(comLayoutStr1 + "ex1" + comLayoutStr2);

// 怎么只把数字改颜色??
var ex1_data = [1, 2, 3, 0, 6];
var ex1P = d3.select("#ex1")
    .append("p")
    .text("Hello D3!!")
    .selectAll("p")

    .data(ex1_data)
    .enter()
    .append("p")
    .text(function (d) {
        return "I can count to " + d;
    })
    .style("font-weight", "bold")
    .style("color", function (d) {
        if (d % 2 === 1) return "red";
        else return "blue";
    });


// d3.csv("../food.csv", function(d) {
//   console.log(d);
// });


/*
 * ex2: 使用div画随机数柱状图
 * date: 2016-10-1
 */

$("body > .container ").append(comLayoutStr1 + "ex2" + comLayoutStr2);

var ex2_data = [];
var ex2_randNum;
for (var i = 0; i < 12; i++) {
    ex2_data.push(Math.random() * 30);
}

d3.select("#ex2").append("div")
    .attr("min-height", h)

    .selectAll("div")
    .data(ex2_data)
    .enter()
    .append("div")

    .style("display", "inline-block")
    // 使其既具有block的宽度高度特性
    // 又具有inline的同行特性。
    .style("margin-right", "2px")
    .style("background-color", "teal")
    .style("width", "20px")
    .style("height", function (d) {
        return d * 6 + "px";
    });


/*
 * ex3: svg画圆
 * date: 2016-10-1
 */

$("body > .container ").append(comLayoutStr1 + "ex3" + comLayoutStr2);

var ex3_data = [5, 10, 15, 20, 25];
var ex3_circle = d3.select("#ex3").append('svg')
    .attr("width", w)
    .attr("height", h)

// 操作画布里的对象
ex3_circle.selectAll("circle")
    .data(ex3_data).enter().append("circle")
    .attr("cx", function (d, i) {
        return (i * 50) + 25;
    })
    .attr("cy", h / 2)
    .attr("r", function (d) {
        return d;
    })
    .attr("fill", "yellow")
    .attr("stroke", "orange")
    .attr("stroke-width", function (d) {
        return d / 2;
    });


/*
 * ex4: svg画柱状图
 * date: 2016-10-1
 */

$("body > .container ").append(comLayoutStr1 + "ex4" + comLayoutStr2);
var ex4_data = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
    11, 12, 15];
var ex4Svg = d3.select("#ex4").append("svg")
    .attr("width", w)
    .attr("height", h);

// 操作画布里的对象
ex4Svg.selectAll("rect")
    .data(ex4_data).enter().append("rect")
    .attr("x", function (d, i) {
        return i * (w / ex4_data.length);
    })
    .attr("y", function (d) {
        return h - (d * 7);
    })
    .attr("width", w / ex4_data.length - 5)
    .attr("height", function (d) {
        return d * 7;  // 使y + height = h
    })
    .attr("fill", function (d) {
        return "rgb(0, 0, " + (d * 10) + ")";
    });


// 画标签
ex4Svg.selectAll("text")
    .data(ex4_data).enter().append("text")
    .text(function (d) {
        return d;
    })
    .attr("text-anchor", "middle")
    .attr("x", function (d, i) {
        return i * (w / ex4_data.length) + (w / ex4_data.length - 5) / 2;
    })
    .attr("y", function (d) {
        return h - (d * 7) + 14;
    })
    .attr({
        "font-family": "sans-serif",
        "font-size": "11px",
        "fill": "white"
    });

// 合写示例
// .attr({
//     x: function(d, i) { return i * (w / dataset.length); },
//     y: function(d) { return h - (d * 4); },
//     width: w / dataset.length - barPadding,
//     height: function(d) { return d * 4; },
//     fill: function(d) { return "rgb(0, 0, " + (d * 10) + ")";}
// });


/*
 * ex5: 散点图（以后默认都是svg）
 * date: 2016-10-1
 */

$("body > .container ").append(comLayoutStr1 + "ex5" + comLayoutStr2);
var ex5_data = [
    [5, 40], [480, 180], [250, 100], [100, 66], [330, 190],
    [410, 24], [475, 88], [25, 134], [85, 42], [220, 176]
];
var ex5Svg = d3.select("#ex5").append("svg")
    .attr("width", w)
    .attr("height", h);

// 在svg中添加circle,散点图
ex5Svg.selectAll("circle")
    .data(ex5_data).enter().append("circle")

    .attr("cx", function (d) {
        return d[0];
    })
    .attr("cy", function (d) {
        return d[1];
    })
    .attr("r", function (d) {
        return Math.sqrt(h - d[1]);
    });

ex5Svg.selectAll("text")
    .data(ex5_data).enter().append("text")
    .text(function (d) {
        return d[0] + "," + d[1];
    })
    .attr("x", function (d) {
        return d[0];
    })
    .attr("y", function (d) {
        return d[1];
    })
    .attr({
        "font-family": "sans-serif",
        "font-size": "11px",
        "fill": "pink"
    });

/*
 * ex6: 散点图,在ex5的基础上添加比例尺
 * func: 防止边缘被svg剪裁
 * date: 2016-10-1
 */

$("body > .container ").append(comLayoutStr1 + "ex6" + comLayoutStr2);
var ex6_data = [
    [5, 40], [480, 180], [250, 100], [100, 66], [330, 190],
    [410, 24], [475, 88], [25, 134], [85, 42], [220, 176]
];

var ex6_padding = 20;

// 线性变化，制定变化区域
var xScale_6 = d3.scale.linear()
    .domain([0, d3.max(ex6_data, function (d) {
        return d[0];
    })])
    .range([ex6_padding, w - ex6_padding * 2]);
var yScale_6 = d3.scale.linear()
    .domain([0, d3.max(ex6_data, function (d) {
        return d[1];
    })])
    .range([h - ex6_padding, ex6_padding]);
var rScale_6 = d3.scale.linear()
    .domain([0, d3.max(ex6_data, function (d) {
        return d[1];
    })])
    .range([2, 10]);   //圆的大小，与y轴的关系


var ex6Svg = d3.select("#ex6").append("svg")
    .attr("width", w)
    .attr("height", h);

ex6Svg.selectAll("circle")
    .data(ex6_data).enter().append("circle")
    .attr("cx", function (d) {
        return xScale_6(d[0]);
    })
    .attr("cy", function (d) {
        return yScale_6(d[1]);
    })
    .attr("r", function (d) {
        return rScale_6(d[1]);
    });

ex6Svg.selectAll("text")
    .data(ex6_data).enter().append("text")
    .text(function (d) {
        return d[0] + "," + d[1];
    })
    .attr("x", function (d) {
        return xScale_6(d[0]);
    })
    .attr("y", function (d) {
        return yScale_6(d[1]);
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "10px")
    .attr("fill", "red");

/*
 * ex7: 散点图 + 坐标轴
 * date: 2016-10-1
 */


$("body > .container ").append(comLayoutStr1 + "ex7" + comLayoutStr2);

var ex7_data = [];
var numDataPoints = 20;
var ex7_xRange = Math.random() * 100;
var ex7_yRange = Math.random() * 100;
var ex7_padding = 60;

// 产生20个在坐标轴内的数
// 随机数的随机数
for (var i = 0; i < numDataPoints; i++) {
    ex7_data.push([Math.floor(Math.random() * ex7_xRange),
        Math.floor(Math.random() * ex7_yRange)]);
}

// 比例尺
var xScale_7 = d3.scale.linear()
    .domain([0, d3.max(ex7_data, function (d) {
        return d[0];
    })])
    .range([ex7_padding, w - ex7_padding * 2]);
var yScale_7 = d3.scale.linear()
    .domain([0, d3.max(ex7_data, function (d) {
        return d[1];
    })])
    .range([h - ex7_padding, ex7_padding]);
var rScale_7 = d3.scale.linear()
    .domain([0, d3.max(ex7_data, function (d) {
        return d[1];
    })])
    .range([2, 5]);
var formatAsPercentage = d3.format(".1%");   //为刻度标签定制样式


// 横纵坐标
// d3.svg.axis - 创建一个新的轴生成器
var xAxis = d3.svg.axis()
    .scale(xScale_7)
    .orient("bottom") // 水平数轴的默认设置
    .ticks(5)         // D3只是参考，如果有更好的就不参考
    .tickFormat(formatAsPercentage);
var yAxis = d3.svg.axis()
    .scale(yScale_7)
    .orient("left")
    .ticks(5)
    .tickFormat(formatAsPercentage);

// 创建svg
var ex7Svg = d3.select("#ex7").append("svg")
    .attr("width", w)
    .attr("height", h);

ex7Svg.selectAll("circle")
    .data(ex7_data).enter().append("circle")
    .attr("cx", function (d) {
        return xScale_7(d[0]);
    })
    .attr("cy", function (d) {
        return yScale_7(d[1]);
    })
    .attr("r", function (d) {
        return rScale_7(d[1]);
    });


ex7Svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + (h - ex7_padding) + ")")  //向下平移
    .call(xAxis);

ex7Svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + ex7_padding + ",0)")
    .call(yAxis);


/*
 * ex8: 力导向图Force layout
 * date: 2016-10-1
 */

$("body > .container ").append(comLayoutStr1 + "ex8" + comLayoutStr2);

//Original data
var force_data = {
    nodes: [
        {name: "Adam"},
        {name: "Bob"},
        {name: "Carrie"},
        {name: "Donovan"},
        {name: "Edward"},
        {name: "Felicity"},
        {name: "George"},
        {name: "Hannah"},
        {name: "Iris"},
        {name: "Jerry"}
    ],
    edges: [
        {source: 0, target: 1},
        {source: 0, target: 2},
        {source: 0, target: 3},
        {source: 0, target: 4},
        {source: 1, target: 5},
        {source: 2, target: 5},
        {source: 2, target: 5},
        {source: 3, target: 4},
        {source: 5, target: 8},
        {source: 5, target: 9},
        {source: 6, target: 7},
        {source: 7, target: 8},
        {source: 8, target: 9}
    ]
};  //来源（ source） ID 和目标（ target）ID。

var force = d3.layout.force()
    .nodes(force_data.nodes)
    .links(force_data.edges)
    .size([w, h])
    .linkDistance([50])  //连线长度
    .charge([-100])      //负电荷，排斥地更远
    .start();

var colors = d3.scale.category10();
var force_svg = d3.select("#ex8").append("svg")
    .attr("width", w)
    .attr("height", h);

// Create edges as lines
var edges = force_svg.selectAll("line")
    .data(force_data.edges).enter().append("line")
    .style("stroke", "#ccc")
    .style("stroke-width", 1);

// Create nodes as circles
var nodes = force_svg.selectAll("circle")
    .data(force_data.nodes).enter().append("circle")
    .attr("r", 10)
    .style("fill", function (d, i) {
        return colors(i);
    })
    .call(force.drag);  //拖放交互

//Every time the simulation "ticks", this will be called
force.on("tick", function () {
    edges.attr("x1", function (d) {
        return d.source.x;
    })
        .attr("y1", function (d) {
            return d.source.y;
        })
        .attr("x2", function (d) {
            return d.target.x;
        })
        .attr("y2", function (d) {
            return d.target.y;
        });

    nodes.attr("cx", function (d) {
        return d.x;
    })
        .attr("cy", function (d) {
            return d.y;
        });

});


/*
 * ex9: 饼图Pie layout
 * date: 2016-10-1
 */

$("body > .container ").append(comLayoutStr1 + "ex9" + comLayoutStr2);

var data9 = [2.5, 5, 10, 27.5, 3, 12.5];
var outerRadius = w / 4.8;  // 这里我界面各自没设置好
var innerRadius = 0;
// var innerRadius = w / 3;   //画出环形

var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);  //弧形，path()内置方法

var pie = d3.layout.pie();  //饼图布局

// var colors = d3.scale.category10();
// 前面已经设置过了

//Create SVG element
var pie_svg = d3.select("#ex9").append("svg")
    .attr("width", w)
    .attr("height", h);

//Set up groups
var arcs = pie_svg.selectAll("g.arc")
    .data(pie(data9)).enter().append("g")
    .attr("class", "arc")
    .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

//Draw arc paths
arcs.append("path")
    .attr("fill", function (d, i) {
        return colors(i);
    })
    .attr("d", arc);

//Labels
arcs.append("text")
    .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .text(function (d) {
        return d.value;
    });

/*
 * ex10: 堆叠布局Stack layout stacked bar chart
 * date: 2016-10-1
 */

$("body > .container ").append(comLayoutStr1 + "ex10" + comLayoutStr2);

//Original data
var stack_data = [
    [
        {x: 0, y: 5},
        {x: 1, y: 4},
        {x: 2, y: 2},
        {x: 3, y: 7},
        {x: 4, y: 23}
    ],
    [
        {x: 0, y: 10},
        {x: 1, y: 12},
        {x: 2, y: 19},
        {x: 3, y: 23},
        {x: 4, y: 17}
    ],
    [
        {x: 0, y: 22},
        {x: 1, y: 28},
        {x: 2, y: 32},
        {x: 3, y: 35},
        {x: 4, y: 43}
    ]
];

//Set up stack method
var stack = d3.layout.stack();

//Data, stacked
stack(stack_data);

//Set up scales
var stack_xScale = d3.scale.ordinal()
    .domain(d3.range(stack_data[0].length))
    .rangeRoundBands([0, w], 0.05);

var stack_yScale = d3.scale.linear()
    .domain([0,
        d3.max(stack_data, function (d) {
            return d3.max(d, function (d) {
                return d.y0 + d.y;  //注意y0 与 y 的区别
            });
        })
    ])
    .range([0, h]);

// var colors = d3.scale.category10();

//Create SVG element
var stack_svg = d3.select("#ex10").append("svg")
    .attr("width", w)
    .attr("height", h);

// Add a group for each row of data
var stack_groups = stack_svg.selectAll("g")
    .data(stack_data).enter().append("g")
    .style("fill", function (d, i) {
        return colors(i);
    });

// Add a rect for each data value
var stack_rects = stack_groups.selectAll("rect")
    .data(function (d) {
        return d;
    }).enter().append("rect")
    .attr("x", function (d, i) {
        return stack_xScale(i);
    })
    .attr("y", function (d) {
        return stack_yScale(d.y0);
    })
    .attr("height", function (d) {
        return stack_yScale(d.y);
    })
    .attr("width", stack_xScale.rangeBand());


/*
 * ex11: 柱状图，数据更新动画
 * date: 2016-10-1
 */

$("body > .container ").append(comLayoutStr1 + "ex11" + comLayoutStr2);

var data11 = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
    11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

var xScale11 = d3.scale.ordinal()
    .domain(d3.range(data11.length))
    .rangeRoundBands([0, w], 0.05);
var yScale11 = d3.scale.linear()
    .domain([0, d3.max(data11)])
    .range([0, h]);

//Create SVG element
var svg11 = d3.select("#ex11").append("svg")
    .attr("width", w)
    .attr("height", h);

//Create bars
svg11.selectAll("rect")
    .data(data11).enter().append("rect")
    .attr("x", function (d, i) {
        return xScale11(i);
    })
    .attr("y", function (d) {
        return h - yScale11(d);
    })
    .attr("width", xScale11.rangeBand())
    .attr("height", function (d) {
        return yScale11(d);
    })
    .attr("fill", function (d) {
        return "rgb(0, 0, " + (d * 10) + ")";
    });

//Create labels
svg11.selectAll("text")
    .data(data11).enter().append("text")
    .text(function (d) {
        return d;
    })
    .attr("text-anchor", "middle")
    .attr("x", function (d, i) {
        return xScale11(i) + xScale11.rangeBand() / 2;
    })
    .attr("y", function (d) {
        return h - yScale11(d) + 14;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white");


//On click, update with new data      
d3.select("#ex11")
    .on("click", function () {
        //New values for dataset
        var numValues = data11.length;
        data11 = [];        //Initialize empty array
        for (var i = 0; i < numValues; i++) {
            data11.push(Math.floor(Math.random() * 25));
        }

        //New values for dataset
        // data11 = [ 11, 12, 15, 20, 18, 17, 16, 18, 23, 25,
        //       5, 10, 13, 19, 21, 25, 22, 18, 15, 13];

        svg11.selectAll("rect")
            .data(data11)
            .transition()
            // .delay(1000)
            // .delay(function(d, i) {  //延迟时间  后一个元素的动画都比前一个晚
            //  return i * 100;
            // })
            .delay(function (d, i) {
                return i / data11.length * 1000;  //1000是最后一个元素的延迟时间
            })
            .duration(200)
            // .ease("linear")
            // .ease("circle")
            // .ease("elastic")
            // .ease("bounce")   //各种缓动函数
            .attr("y", function (d) {
                return h - yScale11(d);
            })
            .attr("height", function (d) {
                return yScale11(d);
            })
            .attr("fill", function (d) {
                return "rgb(0, 0, " + (d * 10) + ")";
            });

        //Update all labels
        svg11.selectAll("text")
            .data(data11)
            .transition()
            .delay(function (d, i) {
                return i / data11.length * 1000;
            })
            .text(function (d) {
                return d;
            })
            .duration(200)
            .attr("x", function (d, i) {
                return xScale11(i) + xScale11.rangeBand() / 2;
            })
            .attr("y", function (d) {
                return h - yScale11(d) + 14;
            });
    });


/*
 * ex12: 柱状图，增删数据
 * date: 2016-10-1
 */

$("body > .container ").append(comLayoutStr1 + "ex12" + comLayoutStr2);

var data12 = [{key: 0, value: 5},
    {key: 1, value: 10},
    {key: 2, value: 13},
    {key: 3, value: 19},
    {key: 4, value: 21},
    {key: 5, value: 25},
    {key: 6, value: 22},
    {key: 7, value: 18},
    {key: 8, value: 15},
    {key: 9, value: 13},
    {key: 10, value: 11},
    {key: 11, value: 12},
    {key: 12, value: 15},
    {key: 13, value: 20},
    {key: 14, value: 18},
    {key: 15, value: 17},
    {key: 16, value: 16},
    {key: 17, value: 18},
    {key: 18, value: 23},
    {key: 19, value: 25}];

var xScale12 = d3.scale.ordinal()
    .domain(d3.range(data12.length))
    .rangeRoundBands([0, w], 0.05);

var yScale12 = d3.scale.linear()
    .domain([0, d3.max(data12, function (d) {
        return d.value;
    })])
    .range([0, h]);

//Define key function, to be used when binding data
var key = function (d) {
    return d.key;
};

//Create SVG element
var svg12 = d3.select("#ex12").append("svg")
    .attr("width", w)
    .attr("height", h);

//Create bars
svg12.selectAll("rect")
    .data(data12, key).enter().append("rect")
    .attr("x", function (d, i) {
        return xScale12(i);
    })
    .attr("y", function (d) {
        return h - yScale12(d.value);
    })
    .attr("width", xScale12.rangeBand())
    .attr("height", function (d) {
        return yScale12(d.value);
    })
    .attr("fill", function (d) {
        return "rgb(0, 0, " + (d.value * 10) + ")";
    });

//Create labels
svg12.selectAll("text")
    .data(data12, key).enter().append("text")
    .text(function (d) {
        return d.value;
    })
    .attr("text-anchor", "middle")
    .attr("x", function (d, i) {
        return xScale12(i) + xScale12.rangeBand() / 2;
    })
    .attr("y", function (d) {
        return h - yScale12(d.value) + 14;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white");


//On click, update with new data      
d3.selectAll("#ex12")
    .on("click", function () {

        var maxValue = 25;
        var newNumber = Math.floor(Math.random() * maxValue);
        var lastKeyValue = data12[data12.length - 1].key;
        console.log(lastKeyValue);
        data12.push({
            key: lastKeyValue + 1,
            value: newNumber
        });

        //Update scale domains
        xScale12.domain(d3.range(data12.length));
        yScale12.domain([0, d3.max(data12, function (d) {
            return d.value;
        })]);

        //Select…
        var bars = svg12.selectAll("rect")
            .data(data12, key);

        //Enter…
        bars.enter()
            .append("rect")
            .attr("x", w)
            .attr("y", function (d) {
                return h - yScale12(d.value);
            })
            .attr("width", xScale12.rangeBand())
            .attr("height", function (d) {
                return yScale12(d.value);
            })
            .attr("fill", function (d) {
                return "rgb(0, 0, " + (d.value * 10) + ")";
            });

        //Update…
        bars.transition()
            .duration(500)
            .attr("x", function (d, i) {
                return xScale12(i);
            })
            .attr("y", function (d) {
                return h - yScale12(d.value);
            })
            .attr("width", xScale12.rangeBand())
            .attr("height", function (d) {
                return yScale12(d.value);
            });

        //Exit…
        bars.exit()
            .transition()
            .duration(500)
            .attr("x", -xScale12.rangeBand())
            .remove();


        //Update all labels

        //Select…
        var labels = svg12.selectAll("text")
            .data(data12, key);

        //Enter…
        labels.enter()
            .append("text")
            .text(function (d) {
                return d.value;
            })
            .attr("text-anchor", "middle")
            .attr("x", w)
            .attr("y", function (d) {
                return h - yScale12(d.value) + 14;
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", "white");

        //Update…
        labels.transition()
            .duration(500)
            .attr("x", function (d, i) {
                return xScale12(i) + xScale12.rangeBand() / 2;
            });

        //Exit…
        labels.exit()
            .transition()
            .duration(500)
            .attr("x", -xScale12.rangeBand())
            .remove();

    });


d3.selectAll("#ex12")
    .on("dblclick", function () {

        //Remove a value
        data12.shift();  //Remove one value from dataset12

        //Update scale domains
        xScale12.domain(d3.range(data12.length));
        yScale12.domain([0, d3.max(data12, function (d) {
            return d.value;
        })]);

        //Select…
        var bars = svg12.selectAll("rect")
            .data(data12, key);

        //Enter…
        bars.enter()
            .append("rect")
            .attr("x", w)
            .attr("y", function (d) {
                return h - yScale12(d.value);
            })
            .attr("width", xScale12.rangeBand())
            .attr("height", function (d) {
                return yScale12(d.value);
            })
            .attr("fill", function (d) {
                return "rgb(0, 0, " + (d.value * 10) + ")";
            });

        //Update…
        bars.transition()
            .duration(500)
            .attr("x", function (d, i) {
                return xScale12(i);
            })
            .attr("y", function (d) {
                return h - yScale12(d.value);
            })
            .attr("width", xScale12.rangeBand())
            .attr("height", function (d) {
                return yScale12(d.value);
            });

        //Exit…
        bars.exit()
            .transition()
            .duration(500)
            .attr("x", -xScale12.rangeBand())
            .remove();


        //Update all labels

        //Select…
        var labels = svg12.selectAll("text")
            .data(data12, key);

        //Enter…
        labels.enter()
            .append("text")
            .text(function (d) {
                return d.value;
            })
            .attr("text-anchor", "middle")
            .attr("x", w)
            .attr("y", function (d) {
                return h - yScale12(d.value) + 14;
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", "white");

        //Update…
        labels.transition()
            .duration(500)
            .attr("x", function (d, i) {
                return xScale12(i) + xScale12.rangeBand() / 2;
            });

        //Exit…
        labels.exit()
            .transition()
            .duration(500)
            .attr("x", -xScale12.rangeBand())
            .remove();
    });


/*
 * ex13: 柱状图，点击数据排序
 * date: 2016-10-1
 */

$("body > .container ").append(comLayoutStr1 + "ex13" + comLayoutStr2);

var data13 = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
    11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

var xScale13 = d3.scale.ordinal()
    .domain(d3.range(data13.length))
    .rangeRoundBands([0, w], 0.05);

var yScale13 = d3.scale.linear()
    .domain([0, d3.max(data13)])
    .range([0, h]);

//Create SVG element
var svg13 = d3.select("#ex13").append("svg")
    .attr("width", w)
    .attr("height", h);

//Create bars
svg13.selectAll("rect")
    .data(data13).enter().append("rect")
    .attr("x", function (d, i) {
        return xScale13(i);
    })
    .attr("y", function (d) {
        return h - yScale13(d);
    })
    .attr("width", xScale13.rangeBand())
    .attr("height", function (d) {
        return yScale13(d);
    })
    .attr("fill", function (d) {
        return "rgb(0, 0, " + (d * 10) + ")";
    })
    .on("click", function () {
        sortBars();
    });

//Create labels
// svg13.selectAll("text")
//    .data(data13).enter()
//    .append("text")
//    .text(function(d) {
//        return d;
//    })
//    .attr("text-anchor", "middle")
//    .attr("x", function(d, i) {
//        return xScale13(i) + xScale13.rangeBand() / 2;
//    })
//    .attr("y", function(d) {
//        return h - yScale13(d) + 14;
//    })
//    .attr("font-family", "sans-serif")
//    .attr("font-size", "11px")
//    .attr("fill", "white");


//Define sort order flag
var sortOrder = false;

//Define sort function
var sortBars = function () {

    //Flip value of sortOrder
    sortOrder = !sortOrder;

    svg13.selectAll("rect")
        .sort(function (a, b) {
            if (sortOrder) {
                return d3.ascending(a, b);
            }
            else {
                return d3.descending(a, b);
            }
        })
        .transition()
        .delay(function (d, i) {
            return i * 50;
        })
        .duration(1000)
        .attr("x", function (d, i) {
            return xScale13(i);
        });
};      












