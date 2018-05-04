// var echarts = require('echarts/lib/echarts');
// // 引入柱状图
// require('echarts/lib/chart/bar');
// // 引入提示框和标题组件
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'),'dark');
// 绘制图表
myChart.setOption({
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});

var myChart2 = echarts.init(document.getElementById('second'));
myChart2.setOption({
    backgroundColor: '#2c343c',
    series:[
        {
            name:'resource',
            type:'pie',
            roseType:'angle',
            radius:'55%',
            data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ],
            itemStyle: {
                // 阴影的大小
                shadowBlur: 200,
                // 阴影水平方向上的偏移
                shadowOffsetX: 0,
                // 阴影垂直方向上的偏移
                shadowOffsetY: 0,
                // 阴影颜色
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                emphasis: {
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    label: {
                        show: true,
                        // 高亮时标签的文字。
                        formatter: 'This is a emphasis label.'
                    }
                }

            },
            label: {
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            },
            visualMap: {
                // 不显示 visualMap 组件，只用于明暗度的映射
                show: false,
                // 映射的最小值为 80
                min: 80,
                // 映射的最大值为 600
                max: 600,
                inRange: {
                    // 明暗度的范围是 0 到 1
                    colorLightness: [0, 1]
                }
            }
        }
    ]
});