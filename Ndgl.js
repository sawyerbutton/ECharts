var myChart = echarts.init(document.getElementById('second'));
myChart.setOption({
    series:[
        {
            name:'resource',
            type:'pie',
            radius:'55%',
            data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ]
        }
    ]
})