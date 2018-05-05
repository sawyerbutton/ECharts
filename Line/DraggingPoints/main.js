var symbolSize = 20;
var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];

var myCharts = echarts.init(document.getElementById("main"));

var option = {
    title:{
        text:'trying to drag these points'
    },
    tooltip:{
        triggerOn:'none',
        formatter:function(params){
            return 'X'+ params.data[0].toFixed(2) + 'Y' + params.data[1].toFixed(2);
        }
    },
    grid:{},
    xAxis:{
        min:-100,
        max:80,
        type:'value',
        axisLine:{onZero:false}
    },
    yAxis:{
        min:-30,
        max:60,
        type:'value',
        axisLine:{onZero:false}
    },
    dataZoom:[
        {
            type:'slider',
            xAxisIndex:0,
            filterMode:'empty',
        },
        {
            type:'slider',
            yAxisIndex:0,
            filterMode:'empty'
        },
        {
            type:'inside',
            xAxisIndex:0,
            filterMode:'empty'
        },
        {
            type:'inside',
            yAxisIndex:0,
            filterMode:'empty'
        }
    ],
    series:[
        {
            id:'a',
            type:'line',
            smooth:true,
            symbolSize:symbolSize,
            data:data
        }
    ],
};
//below part is in processing and understanding
//app is not defined with some code not shown clearly
if (!app.inNode) {
    setTimeout(function () {
        // Add shadow circles (which is not visible) to enable drag.
        myCharts.setOption({
            graphic: echarts.util.map(data, function (item, dataIndex) {
                return {
                    type: 'circle',
                    position: myCharts.convertToPixel('grid', item),
                    shape: {
                        cx: 0,
                        cy: 0,
                        r: symbolSize / 2
                    },
                    invisible: true,
                    draggable: true,
                    ondrag: echarts.util.curry(onPointDragging, dataIndex),
                    onmousemove: echarts.util.curry(showTooltip, dataIndex),
                    onmouseout: echarts.util.curry(hideTooltip, dataIndex),
                    z: 100
                };
            })
        });
    }, 0);

    window.addEventListener('resize', updatePosition);
}

myCharts.on('dataZoom',updatePosition);

function updatePosition() {
    myCharts.setOption({
        graphic: echarts.util.map(data, function (item, dataIndex) {
            return {
                position: myCharts.convertToPixel('grid', item)
            };
        })
    });
}

function showTooltip(dataIndex) {
    myCharts.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: dataIndex
    });
}

function hideTooltip(dataIndex) {
    myCharts.dispatchAction({
        type: 'hideTip'
    });
}

function onPointDragging(dataIndex, dx, dy) {
    data[dataIndex] = myCharts.convertFromPixel('grid', this.position);

    // Update data
    myCharts.setOption({
        series: [{
            id: 'a',
            data: data
        }]
    });
}