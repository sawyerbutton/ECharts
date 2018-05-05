var myCharts = echarts.init(document.getElementById("main"));

$.get('./aqi-beijing.json',function (data) {
    var option = {
        title:{
            text:'Beijing AQI',
            x:'left'
        },
        tooltip:{
            trigger:'axis'
        },
        xAxis:{
            data:data.map(function(item){
                return item[0];
            })
        },
        yAxis:{
            //split line need to figure out
            splitLine: {
                show: false
            }
        },
        toolbox:{
            left:'center',
            feature:{
                dataZoom:{
                    yAxisIndex:'none'
                },
                restore:{},
                saveAsImage:{}
            }
        },
        dataZoom:[
            {
                startValue:'2014-06-01'
            },
            {
                type:'inside'
            }
        ],
        //separate the y axis into three part
        visualMap:{
            top:10,
            right:10,
            pieces:[
                {
                    gt:0,
                    lte:50,
                    color:'#096'
                },{
                    gt: 50,
                    lte: 100,
                    color: '#ffde33'
                }, {
                    gt: 100,
                    lte: 150,
                    color: '#ff9933'
                }, {
                    gt: 150,
                    lte: 200,
                    color: '#cc0033'
                }, {
                    gt: 200,
                    lte: 300,
                    color: '#660099'
                }, {
                    gt: 300,
                    color: '#7e0023'
                }
            ],
            outOfRange: {
                color: '#999'
            }
        },
        series:{
            name:'Beijing AQI',
            type:'line',
            data:data.map(function(str){
                return str[1];
            }),
            markLine: {
                silent: true,//silent still needs to figure out
                data: [{
                    yAxis: 50
                }, {
                    yAxis: 100
                }, {
                    yAxis: 150
                }, {
                    yAxis: 200
                }, {
                    yAxis: 300
                }]
            }
        }
    };

    myCharts.setOption(option);
})