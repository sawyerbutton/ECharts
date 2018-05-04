var myChart = echarts.init(document.getElementById('main'));
var option = {
    xAxis:{
        type:'category',
        boundaryGap:false,
        data:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis:{
        type:'value'
    },
    series:[{
        data:[123,313,634,912,121,644,543],
        type:'line',
        areaStyle:{}
    }]
}

myChart.setOption(option);