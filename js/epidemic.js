//中国疫情地图
(function () {
//初始化echarts实例
  var myChart = echarts.init(document.getElementById('mapchart1'));

//随机数据
  function randomData() {
    return Math.round(Math.random()*500);
  }
  var mydata = [
    {name: '北京',value: '100' },{name: '天津',value: randomData() },
    {name: '上海',value: randomData() },{name: '重庆',value: randomData() },
    {name: '河北',value: randomData() },{name: '河南',value: randomData() },
    {name: '云南',value: randomData() },{name: '辽宁',value: randomData() },
    {name: '黑龙江',value: randomData() },{name: '湖南',value: randomData() },
    {name: '安徽',value: randomData() },{name: '山东',value: randomData() },
    {name: '新疆',value: randomData() },{name: '江苏',value: randomData() },
    {name: '浙江',value: randomData() },{name: '江西',value: randomData() },
    {name: '湖北',value: randomData() },{name: '广西',value: randomData() },
    {name: '甘肃',value: randomData() },{name: '山西',value: randomData() },
    {name: '内蒙古',value: randomData() },{name: '陕西',value: randomData() },
    {name: '吉林',value: randomData() },{name: '福建',value: randomData() },
    {name: '贵州',value: randomData() },{name: '广东',value: randomData() },
    {name: '青海',value: randomData() },{name: '西藏',value: randomData() },
    {name: '四川',value: randomData() },{name: '宁夏',value: randomData() },
    {name: '海南',value: randomData() },{name: '台湾',value: randomData() },
    {name: '香港',value: randomData() },{name: '澳门',value: randomData() }
  ];

  var optionMap = {
    // backgroundColor: '#FFFFFF',
    title: {
      text: '全国疫情数据',
      subtext: '',
      x:'center'
    },
    tooltip : {
      trigger: 'item'
    },

    //左下侧小导航图标
    visualMap: {
      show : true,
      x: 'left',
      y: 'bottom',
      splitList: [
        {start: 500, end:600},{start: 400, end: 500},
        {start: 300, end: 400},{start: 200, end: 300},
        {start: 100, end: 200},{start: 0, end: 100},
      ],
      color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']
    },

    //配置属性
    series: [{
      name: '确诊人数',
      type: 'map',
      mapType: 'china',
      roam: true,
      label: {
        normal: {
          show: true  //省份名称
        },
        emphasis: {
          show: false
        }
      },
      data:mydata  //数据
    }]
  };

//使用制定的配置项和数据显示图表
  myChart.setOption(optionMap);
  window.addEventListener("resize",function () {
    myChart.resize();
  });
})();

//中国疫情趋势
(function () {
  //各码趋势图
  // 初始化Echarts实例对象方法:echarts.init(DOM容器);
  var myChart = echarts.init(document.querySelector("#chinatrend"));
  //指定配置项和数据
  option = {
    title: {
      text: '全国疫情趋势'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['累计确诊', '今日新增', '现有疑似']
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
        name: '累计确诊',
        type: 'line',
        color:'#FF6A6A',
        data: [309, 425, 609, 513, 432, 356, 210]
      },
      {
        name: '今日新增',
        type: 'line',
        color:'#66CDAA',
        data: [120, 282, 391, 434, 790, 930, 1310]
      },
      {
        name: '现有疑似',
        type: 'line',
        color:'#FFA500',
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

//全国疫情地图
(function () {
  var myChart = echarts.init(document.getElementById('mapchart2'));
  option = {
    title: {
      text: '世界疫情情况',
      left: 'center',
      top: 'top'
    },
    /* tooltip: {
         trigger: 'item',
         formatter: function (params) {
             var value = (params.value + '').split('.');
             value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                     + '.' + value[1];
             return params.seriesName + '<br/>' + params.name + ' : ' + value;
         }
     },*/
    // visualMap: {
    //   min: 0,
    //   max: 1000000,
    //   text:['High','Low'],
    //   realtime: false,
    //   calculable: true,
    //   color: ['orangered','yellow','lightskyblue']
    // },
    visualMap: {
      show : true,
      x: 'left',
      y: 'bottom',
      splitList: [
        {start: 0, end:99},{start: 100, end: 999},
        {start: 1000, end: 9999},{start: 10000, end: 99999},
        {start: 100000, end: 999999},{start: 1000000, end: 9999999},
      ],
      color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']
    },
    series: [
      {
        name: 'World Population (2010)',
        type: 'map',
        mapType: 'world',
        roam: true,
        itemStyle:{
          emphasis:{label:{show:true}}
        },
        data: [
          {name: 'Afghanistan', value: 28397.812},
          {name: 'Angola', value: 19549.124},
          {name: 'Albania', value: 3150.143},
          {name: 'United Arab Emirates', value: 8441.537},
          {name: 'Argentina', value: 40374.224},
          {name: 'Armenia', value: 2963.496},
          {name: 'French Southern and Antarctic Lands', value: 268.065},
          {name: 'Australia', value: 22404.488},
          {name: 'Austria', value: 8401.924},
          {name: 'Azerbaijan', value: 9094.718},
          {name: 'Burundi', value: 9232.753},
          {name: 'Belgium', value: 10941.288},
          {name: 'Benin', value: 9509.798},
          {name: 'Burkina Faso', value: 15540.284},
          {name: 'Bangladesh', value: 151125.475},
          {name: 'Bulgaria', value: 7389.175},
          {name: 'The Bahamas', value: 66402.316},
          {name: 'Bosnia and Herzegovina', value: 3845.929},
          {name: 'Belarus', value: 9491.07},
          {name: 'Belize', value: 308.595},
          {name: 'Bermuda', value: 64.951},
          {name: 'Bolivia', value: 716.939},
          {name: 'Brazil', value: 195210.154},
          {name: 'Brunei', value: 27.223},
          {name: 'Bhutan', value: 716.939},
          {name: 'Botswana', value: 1969.341},
          {name: 'Central African Republic', value: 4349.921},
          {name: 'Canada', value: 34126.24},
          {name: 'Switzerland', value: 7830.534},
          {name: 'Chile', value: 17150.76},
          {name: 'China', value: 1359821.465},
          {name: 'Ivory Coast', value: 60508.978},
          {name: 'Cameroon', value: 20624.343},
          {name: 'Democratic Republic of the Congo', value: 62191.161},
          {name: 'Republic of the Congo', value: 3573.024},
          {name: 'Colombia', value: 46444.798},
          {name: 'Costa Rica', value: 4669.685},
          {name: 'Cuba', value: 11281.768},
          {name: 'Northern Cyprus', value: 1.468},
          {name: 'Cyprus', value: 1103.685},
          {name: 'Czech Republic', value: 10553.701},
          {name: 'Germany', value: 83017.404},
          {name: 'Djibouti', value: 834.036},
          {name: 'Denmark', value: 5550.959},
          {name: 'Dominican Republic', value: 10016.797},
          {name: 'Algeria', value: 37062.82},
          {name: 'Ecuador', value: 15001.072},
          {name: 'Egypt', value: 78075.705},
          {name: 'Eritrea', value: 5741.159},
          {name: 'Spain', value: 46182.038},
          {name: 'Estonia', value: 1298.533},
          {name: 'Ethiopia', value: 87095.281},
          {name: 'Finland', value: 5367.693},
          {name: 'Fiji', value: 860.559},
          {name: 'Falkland Islands', value: 49.581},
          {name: 'France', value: 63230.866},
          {name: 'Gabon', value: 1556.222},
          {name: 'United Kingdom', value: 62066.35},
          {name: 'Georgia', value: 4388.674},
          {name: 'Ghana', value: 24262.901},
          {name: 'Guinea', value: 10876.033},
          {name: 'Gambia', value: 1680.64},
          {name: 'Guinea Bissau', value: 10876.033},
          {name: 'Equatorial Guinea', value: 696.167},
          {name: 'Greece', value: 11109.999},
          {name: 'Greenland', value: 56.546},
          {name: 'Guatemala', value: 14341.576},
          {name: 'French Guiana', value: 231.169},
          {name: 'Guyana', value: 786.126},
          {name: 'Honduras', value: 7621.204},
          {name: 'Croatia', value: 4338.027},
          {name: 'Haiti', value: 9896.4},
          {name: 'Hungary', value: 10014.633},
          {name: 'Indonesia', value: 240676.485},
          {name: 'India', value: 1205624.648},
          {name: 'Ireland', value: 4467.561},
          {name: 'Iran', value: 240676.485},
          {name: 'Iraq', value: 30962.38},
          {name: 'Iceland', value: 318.042},
          {name: 'Israel', value: 7420.368},
          {name: 'Italy', value: 60508.978},
          {name: 'Jamaica', value: 2741.485},
          {name: 'Jordan', value: 6454.554},
          {name: 'Japan', value: 127352.833},
          {name: 'Kazakhstan', value: 15921.127},
          {name: 'Kenya', value: 40909.194},
          {name: 'Kyrgyzstan', value: 5334.223},
          {name: 'Cambodia', value: 14364.931},
          {name: 'South Korea', value: 51452.352},
          {name: 'Kosovo', value: 97.743},
          {name: 'Kuwait', value: 2991.58},
          {name: 'Laos', value: 6395.713},
          {name: 'Lebanon', value: 4341.092},
          {name: 'Liberia', value: 3957.99},
          {name: 'Libya', value: 6040.612},
          {name: 'Sri Lanka', value: 20758.779},
          {name: 'Lesotho', value: 2008.921},
          {name: 'Lithuania', value: 3068.457},
          {name: 'Luxembourg', value: 507.885},
          {name: 'Latvia', value: 2090.519},
          {name: 'Morocco', value: 31642.36},
          {name: 'Moldova', value: 103.619},
          {name: 'Madagascar', value: 21079.532},
          {name: 'Mexico', value: 117886.404},
          {name: 'Macedonia', value: 507.885},
          {name: 'Mali', value: 13985.961},
          {name: 'Myanmar', value: 51931.231},
          {name: 'Montenegro', value: 620.078},
          {name: 'Mongolia', value: 2712.738},
          {name: 'Mozambique', value: 23967.265},
          {name: 'Mauritania', value: 3609.42},
          {name: 'Malawi', value: 15013.694},
          {name: 'Malaysia', value: 28275.835},
          {name: 'Namibia', value: 2178.967},
          {name: 'New Caledonia', value: 246.379},
          {name: 'Niger', value: 15893.746},
          {name: 'Nigeria', value: 159707.78},
          {name: 'Nicaragua', value: 5822.209},
          {name: 'Netherlands', value: 16615.243},
          {name: 'Norway', value: 4891.251},
          {name: 'Nepal', value: 26846.016},
          {name: 'New Zealand', value: 4368.136},
          {name: 'Oman', value: 2802.768},
          {name: 'Pakistan', value: 173149.306},
          {name: 'Panama', value: 3678.128},
          {name: 'Peru', value: 29262.83},
          {name: 'Philippines', value: 93444.322},
          {name: 'Papua New Guinea', value: 6858.945},
          {name: 'Poland', value: 38198.754},
          {name: 'Puerto Rico', value: 3709.671},
          {name: 'North Korea', value: 1.468},
          {name: 'Portugal', value: 10589.792},
          {name: 'Paraguay', value: 6459.721},
          {name: 'Qatar', value: 1749.713},
          {name: 'Romania', value: 21861.476},
          {name: 'Russia', value: 21861.476},
          {name: 'Rwanda', value: 10836.732},
          {name: 'Western Sahara', value: 514.648},
          {name: 'Saudi Arabia', value: 27258.387},
          {name: 'Sudan', value: 35652.002},
          {name: 'South Sudan', value: 9940.929},
          {name: 'Senegal', value: 12950.564},
          {name: 'Solomon Islands', value: 526.447},
          {name: 'Sierra Leone', value: 5751.976},
          {name: 'El Salvador', value: 6218.195},
          {name: 'Somaliland', value: 9636.173},
          {name: 'Somalia', value: 9636.173},
          {name: 'Republic of Serbia', value: 3573.024},
          {name: 'Suriname', value: 524.96},
          {name: 'Slovakia', value: 5433.437},
          {name: 'Slovenia', value: 2054.232},
          {name: 'Sweden', value: 9382.297},
          {name: 'Swaziland', value: 1193.148},
          {name: 'Syria', value: 7830.534},
          {name: 'Chad', value: 11720.781},
          {name: 'Togo', value: 6306.014},
          {name: 'Thailand', value: 66402.316},
          {name: 'Tajikistan', value: 7627.326},
          {name: 'Turkmenistan', value: 5041.995},
          {name: 'East Timor', value: 10016.797},
          {name: 'Trinidad and Tobago', value: 1328.095},
          {name: 'Tunisia', value: 10631.83},
          {name: 'Turkey', value: 72137.546},
          {name: 'United Republic of Tanzania', value: 44973.33},
          {name: 'Uganda', value: 33987.213},
          {name: 'Ukraine', value: 46050.22},
          {name: 'Uruguay', value: 3371.982},
          {name: 'United States of America', value: 312247.116},
          {name: 'Uzbekistan', value: 27769.27},
          {name: 'Venezuela', value: 236.299},
          {name: 'Vietnam', value: 89047.397},
          {name: 'Vanuatu', value: 236.299},
          {name: 'West Bank', value: 13.565},
          {name: 'Yemen', value: 22763.008},
          {name: 'South Africa', value: 51452.352},
          {name: 'Zambia', value: 13216.985},
          {name: 'Zimbabwe', value: 13076.978}
        ]
      }
    ]
  };

  //使用制定的配置项和数据显示图表
  myChart.setOption(option);
  //让图表自动适应屏幕
  window.addEventListener("resize",function () {
    myChart.resize();
  });
})();

//全球疫情趋势
(function () {
  //各码趋势图
  // 初始化Echarts实例对象方法:echarts.init(DOM容器);
  var myChart = echarts.init(document.querySelector("#worldtrend"));
  //指定配置项和数据
  option = {
    title: {
      text: '全球疫情趋势'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['累计确诊', '今日新增', '现有疑似']
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
        name: '累计确诊',
        type: 'line',
        color:'#FF6A6A',
        data: [309, 425, 609, 513, 432, 356, 210]
      },
      {
        name: '今日新增',
        type: 'line',
        color:'#66CDAA',
        data: [120, 282, 391, 434, 790, 930, 1310]
      },
      {
        name: '现有疑似',
        type: 'line',
        color:'#FFA500',
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

//浙江疫情地图
(function () {
//初始化echarts实例
  var myChart = echarts.init(document.getElementById('mapchart3'));

  option = {
    series: [{
      type: 'map',
      selectedMode : 'single',
      map: '浙江',
      itemStyle:{
        normal:{label:{show:true}},
        emphasis:{label:{show:true}}
      }
    }]
  };

  //使用制定的配置项和数据显示图表
  myChart.setOption(option);
  window.addEventListener("resize",function () {
    myChart.resize();
  });
})();

//宁波疫情趋势
(function () {
  //各码趋势图
  // 初始化Echarts实例对象方法:echarts.init(DOM容器);
  var myChart = echarts.init(document.querySelector("#zhejiangtrend"));
  //指定配置项和数据
  option = {
    title: {
      text: '宁波疫情趋势'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['累计确诊', '今日新增', '现有疑似']
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
        name: '累计确诊',
        type: 'line',
        color:'#FF6A6A',
        data: [157, 157, 157, 157, 157, 157, 157]
      },
      {
        name: '今日新增',
        type: 'line',
        color:'#66CDAA',
        data: [0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: '现有疑似',
        type: 'line',
        color:'#FFA500',
        data: [6, 5, 4, 3,2, 2, 2]
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


//加载数据
function onLoadedate() {
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
      // alert(confirm2);
      //累计确诊
      let confirm1 = data.getElementsByTagName('confirm1')[0].firstChild.nodeValue;
      let p1 = document.getElementById("p1").innerHTML = confirm1;
      //今日新增
      let confirm2 = data.getElementsByTagName('confirm2')[0].firstChild.nodeValue;
      let p2 = document.getElementById("p2").innerHTML = confirm2;
      //累计死亡
      let dead1 = data.getElementsByTagName('dead1')[0].firstChild.nodeValue;
      let p3 = document.getElementById("p3").innerHTML = dead1;
      //现有确诊
      let now_confirm1 = data.getElementsByTagName('now_confirm1')[0].firstChild.nodeValue;
      let p4 = document.getElementById("p4").innerHTML = now_confirm1;
      //境外输入确诊
      let imported_case1 = data.getElementsByTagName('imported_case1')[0].firstChild.nodeValue;
      let p5 = document.getElementById("p5").innerHTML = imported_case1;
      //现有疑似
      let suspect1 = data.getElementsByTagName('suspect1')[0].firstChild.nodeValue;
      let p6 = document.getElementById("p6").innerHTML = suspect1;
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
      /*let ss = $(data).text();//对应find方法中的值，不同的WebService可能会不同，需根据实际情况来填写*/
      // alert(confirm2);
      //累计确诊
      let confirm4 = data.getElementsByTagName('confirm4')[0].firstChild.nodeValue;
      let w1 = document.getElementById("w1").innerHTML = confirm4;
      //累计确诊(较昨日增加)
      let confirm5 = data.getElementsByTagName('confirm5')[0].firstChild.nodeValue;
      let w4 = document.getElementById("w4").innerHTML = confirm5;
      //现有确诊
      let now_confirm4 = data.getElementsByTagName('now_confirm4')[0].firstChild.nodeValue;
      let w2 = document.getElementById("w2").innerHTML = now_confirm4;
      //现有确诊(较昨日增加)
      let now_confirm5 = data.getElementsByTagName('now_confirm5')[0].firstChild.nodeValue;
      let w5 = document.getElementById("w5").innerHTML = now_confirm5;
      //累计死亡
      let dead4 = data.getElementsByTagName('dead4')[0].firstChild.nodeValue;
      let w3 = document.getElementById("w3").innerHTML = dead4;
      //累计死亡(较昨日增加)
      let dead5 = data.getElementsByTagName('dead5')[0].firstChild.nodeValue;
      let w6 = document.getElementById("w6").innerHTML = dead5;
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
      //累计确诊
      let confirm3 = data.getElementsByTagName('confirm3')[0].firstChild.nodeValue;
      let n1 = document.getElementById("n1").innerHTML = confirm3;
      //现有确诊
      let now_confirm3 = data.getElementsByTagName('now_confirm3')[0].firstChild.nodeValue;
      let n2 = document.getElementById("n2").innerHTML = now_confirm3;
      //累计死亡
      let dead3 = data.getElementsByTagName('dead3')[0].firstChild.nodeValue;
      let n3 = document.getElementById("n3").innerHTML = dead3;
    }
  });
}