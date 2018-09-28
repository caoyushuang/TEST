~function () {
    var myChart = echarts.init(ET1);
    var option = {
        title: {
            text: '11大类专业男女比例人数',
              x:'center'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['男', '女'],
            orient : 'vertical',
             x:'left'
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['line', 'bar']}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['制造大类', '艺术设计传媒大类', '文化教育大类', '土建大类', '生化与药品大类',
                    '轻纺食品大类', '农林牧渔大类', '旅游大类', '交通运输大类', '电子信息大类', '财经大类']
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} '
                }
            }
        ],
        series: [
            {
                name: '男',
                type: 'line',
                data: [784, 85, 0, 214, 10, 8, 279, 8, 46, 192, 176],

            },
            {
                name: '女',
                type: 'line',
                data: [51, 138, 10, 43, 20, 1, 165, 16, 2, 154, 138],

            }
        ]
    };
    myChart.setOption(option);
}();


~function () {
    var myChart = echarts.init(ET2);
    var option = {
        title : {
            text: '毕业后工作相关度',

            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['很相关','相关','不好说','不相关','很不相关']
        },
        toolbox: {
            show : true,

        },
        calculable : true,
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['55%', '60%'],
                data:[
                    {value:612, name:'很相关'},
                    {value:995, name:'相关'},
                    {value:313, name:'不好说'},
                    {value:414, name:'不相关'},
                    {value:113, name:'很不相关'}
                ]
            }
        ]
    };


    myChart.setOption(option);
}();
