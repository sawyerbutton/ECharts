var myChart = echarts.init(document.getElementById("blc"),'dark');
var option = {
    xAxis:{
        type:'category',
        data:['mon','tue','wed','thu','fri','sat','sun']
    },
    yAxis:{
        type:'value'
    },
    series:[
        {
            data:[820, 932, 901, 934, 1290, 1330, 1320],
            type:'line'
        }
    ]
}
myChart.setOption(option);