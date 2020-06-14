function addAdmin(){
    var tpl='<tr contenteditable="true"><td></td><td></td><td></td><td></td><td></td><td>' +
        '<button class="btn btn-xs btn-info">一级权限</button>&nbsp;' +
        '<button class="btn btn-xs btn-info">二级权限</button>' +
        '</td></tr>';
    $("#addad").append(tpl);
}
function addUser() {
    var adu='<tr contenteditable="true">' +
        '<td name="i"></td>' +
        '<td name="nm"></td>' +
        '<td name="ag"></td>' +
        '<td name="ho"></td>' +
        '<td name="ide"></td>' +
        '<td name="wo"></td>' +
        '<td name="ph"></td>' +
        '<td name="lo">' +
        '<a type="button" class="btn btn-primary btn-xs">编辑</a>&nbsp;' +
        '<a type="button" class="btn btn-warning btn-xs">失效</a>&nbsp;</td></tr>';
    $("#addus").append(adu);
}



// // 权限设置的显示与隐藏
// function disp() {
//     var ad = document.getElementById("admin");
//     ad.style.display = "block";
// }

(function () {
    //各码饼图
    // 初始化Echarts实例对象方法:echarts.init(DOM容器);
    var myChart = echarts.init(document.querySelector("#chart1"));
    //指定配置项和数据
    option = {
        // backgroundColor: '#2c343c',
        grid: {
            left: '0%',
            top:'10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        series: [
            {
                type: 'pie',
                radius: '80%',
                center: ['50%', '50%'],
                data: [
                    {value: 3000, name: '绿码'},
                    {value: 3000, name: '黄码'},
                    {value: 20000, name: '红码'}],
                // .sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    color: 'rgba(255, 255, 255, 0.9)',
                    show:true,
                    formatter:"{b} {c} ({d}%)"
                },
                labelLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.9)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                itemStyle: {
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };
    //将配置项给echarts实例对象
    myChart.setOption(option);
    //让图表自动适应屏幕
    window.addEventListener("resize",function () {
        myChart.resize();
    });
})();

(function () {
    //各码趋势图
    // 初始化Echarts实例对象方法:echarts.init(DOM容器);
    var myChart = echarts.init(document.querySelector("#chart2"));
    //指定配置项和数据
    option = {
        title: {
            text: '健康码趋势'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['红码', '绿码', '黄码']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['4.13', '4.14', '4.15', '4.16', '4.17', '4.18', '4.19']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '红码',
                type: 'line',
                color:'red',
                data: [309, 425, 609, 513, 432, 356, 210]
            },
            {
                name: '绿码',
                type: 'line',
                color:'green',
                data: [120, 282, 391, 434, 790, 930, 1310]
            },
            {
                name: '黄码',
                type: 'line',
                color:'yellow',
                data: [150, 232, 201, 430,390, 230, 110]
            }
        ]
    };

    //将配置项给echarts实例对象
    myChart.setOption(option);
    //让图表自动适应屏幕
    window.addEventListener("resize",function () {
        myChart.resize();
    });
})();

//全球疫情趋势图
(function () {
    // 初始化Echarts实例对象方法:echarts.init(DOM容器);
    var myChart = echarts.init(document.querySelector("#chart3"));
    //指定配置项和数据
    option = {
        title: {
            text: '全球疫情趋势'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            orient: 'vertical',
            data: ['全球（万人）', '全国（万人）', '宁波（人）'],

        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['3.08', '3.15', '3.22', '3.29', '4.05', '4.12', '4.19']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '全球（万人）',
                type: 'line',
                color:'red',
                data: [2.30, 9.27, 30.9, 53.4, 114, 171, 228]
            },
            {
                name: '全国（万人）',
                type: 'line',
                color:'green',
                data: [8.08, 8.11, 8.18, 8.23, 8.30, 8.35, 8.42]
            },
            {
                name: '宁波（人）',
                type: 'line',
                color:'yellow',
                data: [157, 157, 157, 157,157, 157, 157]
            }
        ]
    };

    //将配置项给echarts实例对象
    myChart.setOption(option);
    //让图表自动适应屏幕
    window.addEventListener("resize",function () {
        myChart.resize();
    });
})();

//各码饼图
(function () {
    // 初始化Echarts实例对象方法:echarts.init(DOM容器);
    var myChart = echarts.init(document.querySelector("#chart4"));
    //指定配置项和数据
    option = {
        title: {
            text: '今日用户填报情况',
            left: 'center'
        },
        color:['rgb(16,174,186)','rgb(255,106,87)'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['已完成填报', '未完成填报']
        },
        label:{
            formatter:"{b} :\n {c} ({d}%)"
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '75%',
                center: ['50%', '60%'],
                data: [
                    {value: 1350, name: '已完成填报'},
                    {value: 1548, name: '未完成填报'}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    //将配置项给echarts实例对象
    myChart.setOption(option);
    //让图表自动适应屏幕
    window.addEventListener("resize",function () {
        myChart.resize();
    });
})();

function onloadDate() {
    getChinadate();
    getWorlddate();
    getNingbodate();
}
//获取国内疫情数据
function getChinadate() {
    let data = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:test="http://service.wcy/">'
        + '<soapenv:Header/>'
        + '<soapenv:Body>'
        + '<test:findInternal>'
        + '</test:findInternal>'
        + '</soapenv:Body>'
        + '</soapenv:Envelope>'
    ;
    $.ajax({
        contentType: 'text/xml;charset="UTF-8"',
        dataType: 'xml',
        type: 'post',
        url: 'http://3090108ec6.zicp.vip/SSH_CXF/services/userservice?wsdl',
        data: data,
        success: function(data) {
            /*let ss = $(data).text();//对应find方法中的值，不同的WebService可能会不同，需根据实际情况来填写*/
            //现有确诊
            let now_confirm1 = data.getElementsByTagName('now_confirm1')[0].firstChild.nodeValue;
            let m1 = document.getElementById("m1").innerHTML = now_confirm1;
        }
    });
}

//获取国外疫情数据
function getWorlddate() {
    let data = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:test="http://service.wcy/">'
        + '<soapenv:Header/>'
        + '<soapenv:Body>'
        + '<test:findNational>'
        + '</test:findNational>'
        + '</soapenv:Body>'
        + '</soapenv:Envelope>'
    ;
    $.ajax({
        contentType: 'text/xml;charset="UTF-8"',
        dataType: 'xml',
        type: 'post',
        url: 'http://3090108ec6.zicp.vip/SSH_CXF/services/userservice?wsdl',
        data: data,
        success: function(data) {
            //现有确诊
            let now_confirm4 = data.getElementsByTagName('now_confirm4')[0].firstChild.nodeValue;
            let m2 = document.getElementById("m2").innerHTML = now_confirm4;
        }
    });
}

//获取宁波疫情数据
function getNingbodate() {
    let data = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:test="http://service.wcy/">'
        + '<soapenv:Header/>'
        + '<soapenv:Body>'
        + '<test:findNingbo>'
        + '</test:findNingbo>'
        + '</soapenv:Body>'
        + '</soapenv:Envelope>'
    ;
    $.ajax({
        contentType: 'text/xml;charset="UTF-8"',
        dataType: 'xml',
        type: 'post',
        url: 'http://3090108ec6.zicp.vip/SSH_CXF/services/userservice?wsdl',
        data: data,
        success: function(data) {
            /*let ss = $(data).text();//对应find方法中的值，不同的WebService可能会不同，需根据实际情况来填写*/
            // alert(confirm2);
            //现有确诊
            let now_confirm3 = data.getElementsByTagName('now_confirm3')[0].firstChild.nodeValue;
            let m3 = document.getElementById("m3").innerHTML = now_confirm3;
        }
    });
}


