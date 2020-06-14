// 权限设置的显示与隐藏
// function disp() {
//     var ad = document.getElementById("added");
//     ad.style.display = "block";
// }

// //轨迹图
// // GL版命名空间为BMapGL
// // 按住鼠标右键，修改倾斜角和角度
var bmap = new BMapGL.Map("trail");    // 创建Map实例
bmap.centerAndZoom(new BMapGL.Point(116.297611, 40.047363), 17);  // 初始化地图,设置中心点坐标和地图级别
bmap.enableScrollWheelZoom(true);     // 开启鼠标滚轮缩放
var path = [{
    'lng': 116.297611,
    'lat': 40.047363
}, {
    'lng': 116.302839,
    'lat': 40.048219
}, {
    'lng': 116.308301,
    'lat': 40.050566
}, {
    'lng': 116.305732,
    'lat': 40.054957
}, {
    'lng': 116.304754,
    'lat': 40.057953
}, {
    'lng': 116.306487,
    'lat': 40.058312
}, {
    'lng': 116.307223,
    'lat': 40.056379
}];
var point = [];
for (var i = 0; i < path.length; i++) {
    point.push(new BMapGL.Point(path[i].lng, path[i].lat));
}
var pl = new BMapGL.Polyline(point);
setTimeout('start()', 3000);
function start () {
    trackAni = new BMapGLLib.TrackAnimation(bmap, pl, {
        overallView: true,
        tilt: 30,
        duration: 20000,
        delay: 300
    });
    trackAni.start();
}
window.addEventListener("resize",function () {
    myChart.resize();
});

function edit(){
    var $t1 = $(".t1");
    $t1.prop("contentEditable","true");
}

//用户数据显示
function show() {
    let data = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:test="http://service.wcy/">'
        + '<soapenv:Header/>'
        + '<soapenv:Body>'
        + '<test:findInfo>'
        + '</test:findInfo>'
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

            let id = data.getElementsByTagName('id');
            let name = data.getElementsByTagName('name');
            let age = data.getElementsByTagName('age');
            let home = data.getElementsByTagName('home');
            let identity = data.getElementsByTagName('identity');
            let work = data.getElementsByTagName('work');
            let phoneNumber = data.getElementsByTagName('phoneNumber');
            for (let i=0;i<id.length;i++){
                let idd=id[i].firstChild.nodeValue;
                let nname=name[i].firstChild.nodeValue;
                let aage=age[i].firstChild.nodeValue;
                let hhome=home[i].firstChild.nodeValue;
                let iidentity=identity[i].firstChild.nodeValue;
                let wwork=work[i].firstChild.nodeValue;
                let pphoneNumber=phoneNumber[i].firstChild.nodeValue;
                // alert(nname+"成功");
                var us='<tr class="t1">'
                    +'<td  name="number">'+ idd +'</td>'
                    +'<td name="me">'+ nname +'</td>'
                    +'<td name="ge">'+aage+'</td>'
                    +'<td name="ome">'+hhome+'</td>'
                    +'<td name="ty">'+iidentity+'</td>'
                    +'<td name="rk">'+wwork+'</td>'
                    +'<td name="er">'+pphoneNumber+'</td>'
                    +'<td contenteditable="false">' + '<a type="button" class="btn btn-primary btn-xs" onclick="edit()" >编辑</a>&nbsp;'
                    +'<a type="button" class="btn btn-primary btn-xs" onclick="changeUser()">确认</a>&nbsp;'
                    + '<a type="button" class="btn btn-warning btn-xs" onclick="lose()">失效</a>&nbsp;</td></tr>';
                $("#addus").append(us);
            }
        }
    });
}

//管理员数据显示
function admin() {
    let data = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:test="http://service.wcy/">'
        + '<soapenv:Header/>'
        + '<soapenv:Body>'
        + '<test:findUser>'
        + '</test:findUser>'
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
            let id = data.getElementsByTagName('id');
            let userName = data.getElementsByTagName('userName');
            let password = data.getElementsByTagName('password');
            let email = data.getElementsByTagName('email');
            let admin = data.getElementsByTagName('admin');
            for (let i=0;i<id.length;i++){
                let idd2=id[i].firstChild.nodeValue;
                let uuserName=userName[i].firstChild.nodeValue;
                let ppassword=password[i].firstChild.nodeValue;
                let eemail=email[i].firstChild.nodeValue;
                let aadmin=admin[i].firstChild.nodeValue;

                // alert(nname+"成功");
                var ad='<tr name="tr">'
                    +'<td name="bb">'+ idd2 +'</td>'
                    +'<td>'+ uuserName +'</td>'
                    +'<td>'+ppassword+'</td>'
                    +'<td>'+eemail+'</td>'
                    +'<td>'+aadmin+'</td>'
                    +'<td>' + '<a class="btn btn-xs btn-info" onclick="reduce()">降为普通</a>&nbsp;'
                    + '<a class="btn btn-xs btn-info" onclick="promote()">升为高级</a>&nbsp;</td></tr>';
                $("#addad").append(ad);
            }
        }
    });
}

//失效处理
function lose() {

    const es = document.getElementsByTagName('tr');

    for (const key in es) {
        es[key].onclick = function () {
            let a = parseInt(key);

            // 单元格用innerHtml
            let data = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:test="http://service.wcy/">'
                + '<soapenv:Header/>'
                + '<soapenv:Body>'
                + '<test:LoseInfo>'
                +'<loseId>'
                // +'<id>'
                +a
                // +'</id>'
                +'</loseId>'
                + '</test:LoseInfo>'
                + '</soapenv:Body>'
                + '</soapenv:Envelope>'
            ;
            $.ajax({
                contentType: 'text/xml;charset="UTF-8"',
                dataType: 'xml',
                type: 'post',
                async: false,
                url: 'http://3090108ec6.zicp.vip/SSH_CXF/services/userservice?wsdl',
                data: data,
                success: function(data) {
                    alert(a+"失效成功");
                    location.reload();
                },

                error: function (data) {
                    // alert(a);
                    alert("对不起"+a+"失效出错");
                }
            });

        }
    }
}

//查询用户
function find() {
    findByName();
    findByIdentity();
}
//通过用户名查询数据
function findByName() {
    var a=document.getElementsByName("findname")[0].value;
    var t = document.cookie;
    let data = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:test="http://service.wcy/">'
        + '<soapenv:Header/>'
        + '<soapenv:Body>'
        + '<test:findNameInfo>'
        +'<NameInfo>'
        +'<name>'
        +a
        +'</name>'
        +'</NameInfo>'
        + '</test:findNameInfo>'
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
            alert(t+"成功");
            //隐藏全部用户信息表格，显示查询后的用户信息表
            var user = document.getElementById("user");
            user.style.display="none";
            var finduser = document.getElementById("finduser");
            finduser.style.display="block";

            // $("#user").style.display="none";yTagName('id');
            let id = data.getElementsB
            let name = data.getElementsByTagName('name');
            let age = data.getElementsByTagName('age');
            let home = data.getElementsByTagName('home');
            let identity = data.getElementsByTagName('identity');
            let work = data.getElementsByTagName('work');
            let phoneNumber = data.getElementsByTagName('phoneNumber');
            for (let i=0;i<id.length;i++){
                let idd=id[i].firstChild.nodeValue;
                let nname=name[i].firstChild.nodeValue;
                let aage=age[i].firstChild.nodeValue;
                let hhome=home[i].firstChild.nodeValue;
                let iidentity=identity[i].firstChild.nodeValue;
                let wwork=work[i].firstChild.nodeValue;
                let pphoneNumber=phoneNumber[i].firstChild.nodeValue;
                var us='<tr class="t1">'
                    +'<td  name="number">'+ idd +'</td>'
                    +'<td>'+ nname +'</td>'
                    +'<td>'+aage+'</td>'
                    +'<td>'+hhome+'</td>'
                    +'<td>'+iidentity+'</td>'
                    +'<td>'+wwork+'</td>'
                    +'<td>'+pphoneNumber+'</td>'
                    +'<td>' + '<a type="button" class="btn btn-primary btn-xs" onclick="edit()">编辑</a>&nbsp;'
                    + '<a type="button" class="btn btn-warning btn-xs" onclick="lose()">失效</a>&nbsp;</td></tr>';
                $("#findaddus").append(us);
            }
        }
    });
}
//通过身份证查询
function findByIdentity() {
    var a=document.getElementsByName("findidentity")[0].value;
    let data = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:test="http://service.wcy/">'
        + '<soapenv:Header/>'
        + '<soapenv:Body>'
        + '<test:findIdentityInfo>'
        +'<IdentityInfo>'
        +'<identity>'
        +a
        +'</identity>'
        +'</IdentityInfo>'
        + '</test:findIdentityInfo>'
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
            // alert(a+"成功");
            //隐藏全部用户信息表格，显示查询后的用户信息表
            var user = document.getElementById("user");
            user.style.display="none";
            var finduser = document.getElementById("finduser");
            finduser.style.display="block";

            // $("#user").style.display="none";
            let id = data.getElementsByTagName('id');
            let name = data.getElementsByTagName('name');
            let age = data.getElementsByTagName('age');
            let home = data.getElementsByTagName('home');
            let identity = data.getElementsByTagName('identity');
            let work = data.getElementsByTagName('work');
            let phoneNumber = data.getElementsByTagName('phoneNumber');
            for (let i=0;i<id.length;i++){
                let idd=id[i].firstChild.nodeValue;
                let nname=name[i].firstChild.nodeValue;
                let aage=age[i].firstChild.nodeValue;
                let hhome=home[i].firstChild.nodeValue;
                let iidentity=identity[i].firstChild.nodeValue;
                let wwork=work[i].firstChild.nodeValue;
                let pphoneNumber=phoneNumber[i].firstChild.nodeValue;
                var us='<tr class="t1">'
                    +'<td  name="number">'+ idd +'</td>'
                    +'<td>'+ nname +'</td>'
                    +'<td>'+aage+'</td>'
                    +'<td>'+hhome+'</td>'
                    +'<td>'+iidentity+'</td>'
                    +'<td>'+wwork+'</td>'
                    +'<td>'+pphoneNumber+'</td>'
                    +'<td>' + '<a type="button" class="btn btn-primary btn-xs" onclick="edit()">编辑</a>&nbsp;'
                    + '<a type="button" class="btn btn-warning btn-xs" onclick="lose()">失效</a>&nbsp;</td></tr>';
                $("#findaddus").append(us);
            }
        }
    });
}

//增加用户
function addUser1() {
    // var i=document.getElementsByName("i")[0].innerHTML;
    var a=document.getElementsByName("nm")[0].innerHTML;
    var b=document.getElementsByName("ag")[0].innerHTML;
    var c=document.getElementsByName("ho")[0].innerHTML;
    var d=document.getElementsByName("ide")[0].innerHTML;
    var e=document.getElementsByName("wo")[0].innerHTML;
    var f=document.getElementsByName("ph")[0].innerHTML;
    // var g=document.getElementsByName("lo")[0].innerHTML;
    let data = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:test="http://service.wcy/">'
        + '<soapenv:Header/>'
        + '<soapenv:Body>'
        + '<test:insertInfo>'
        +'<infoC>'
        // +'<id>'
        // +i
        // +'</id>'
        +'<name>'
        +a
        +'</name>'
        +'<age>'
        +b
        +'</age>'
        +'<home>'
        +c
        +'</home>'
        +'<identity>'
        +d
        +'</identity>'
        +'<work>'
        +e
        +'</work>'
        +'<phoneNumber>'
        +f
        +'</phoneNumber>'
        // +'<lose>'
        // +g
        // +'</lose>'
        +'</infoC>'
        + '</test:insertInfo>'
        + '</soapenv:Body>'
        + '</soapenv:Envelope>'
    ;
    $.ajax({
        contentType: 'text/xml;charset="UTF-8"',
        dataType: 'xml',
        type: 'post',
        async: false,
        url: 'http://3090108ec6.zicp.vip/SSH_CXF/services/userservice?wsdl',
        data: data,
        success: function(data) {
            alert("恭喜增加"+a+"成功");
            location.reload();
        },
        error:function (data) {
            alert("对不起，增加失败");
        }
    });
}

//修改用户
function changeUser() {
    var i=document.getElementsByName("number")[0].innerHTML;
    var a=document.getElementsByName("me")[0].innerHTML;
    var b=document.getElementsByName("ge")[0].innerHTML;
    var c=document.getElementsByName("ome")[0].innerHTML;
    var d=document.getElementsByName("ty")[0].innerHTML;
    var e=document.getElementsByName("rk")[0].innerHTML;
    var f=document.getElementsByName("er")[0].innerHTML;
    // var g=document.getElementsByName("lo")[0].innerHTML;
    let data = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:test="http://service.wcy/">'
        + '<soapenv:Header/>'
        + '<soapenv:Body>'
        + '<test:updateInfo>'
        +'<infoU>'
        +'<name>'
        +a
        +'</name>'
        +'<age>'
        +b
        +'</age>'
        +'<home>'
        +c
        +'</home>'
        +'<identity>'
        +d
        +'</identity>'
        +'<work>'
        +e
        +'</work>'
        +'<phoneNumber>'
        +f
        +'</phoneNumber>'
        // +'<lose>'
        // +g
        // +'</lose>'
        +'</infoU>'
        +'<infoId>'
        +i
        + '</infoId>'
        + '</test:updateInfo>'
        + '</soapenv:Body>'
        + '</soapenv:Envelope>'
    ;
    $.ajax({
        contentType: 'text/xml;charset="UTF-8"',
        dataType: 'xml',
        type: 'post',
        async: false,
        url: 'http://3090108ec6.zicp.vip/SSH_CXF/services/userservice?wsdl',
        data: data,
        success: function(data) {
            alert("修改用户数据成功");
            location.reload();
        },
        error:function (data) {
            alert("对不起，修改用户数据失败");
        }
    });
}

//提高管理员权限
function promote() {
    // var a=document.getElementsByName("iidd")[0].innerHTML;
    // let dd = data.getElementsByTagName('admin')[0].firstChild.nodeValue;
    // document.cookie = name+"="+escape(dd);
    var t = document.cookie;
   if (t==0){
       const es = document.getElementsByTagName('tr');
       for (const key in es) {
           es[key].onclick = function() {
               let a = parseInt(key);

               let data = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:test="http://service.wcy/">'
                   + '<soapenv:Header/>'
                   + '<soapenv:Body>'
                   + '<test:AdminUser>'
                   +'<adminId>'
                   +a
                   + '</adminId>'
                   + '</test:AdminUser>'
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
                       alert(t+a+"升级为高级管理员成功");
                       location.reload();
                   },
                   error:function (data) {
                       alert("对不起，升级为高级管理员失败");
                   }
               });

           }
       }
   }else {
       alert(t+"没有权限");
   }
}

//降低管理员权限
function reduce() {
    const es = document.getElementsByTagName('tr');
    for (const key in es) {
        es[key].onclick = function() {
            let number = parseInt(key);
            // alert('你点击的是第属' + number + '行表格');

            // let a=document.getElementsByName("bb")[0].innerHTML;
            let data = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:test="http://service.wcy/">'
                + '<soapenv:Header/>'
                + '<soapenv:Body>'
                + '<test:AdminUser2>'
                +'<adminId2>'
                +number
                + '</adminId2>'
                + '</test:AdminUser2>'
                + '</soapenv:Body>'
                + '</soapenv:Envelope>'
            ;
            $.ajax({
                contentType: 'text/xml;charset="UTF-8"',
                dataType: 'xml',
                type: 'post',
                async: false,
                url: 'http://3090108ec6.zicp.vip/SSH_CXF/services/userservice?wsdl',
                data: data,
                success: function(data) {
                    // for(var i=0;i<a.length;i++){
                    //     a[i].setAttribute("index",i+1);
                    //     a[i].onclick=function(){
                    //         alert("我是第答"+this.getAttribute("index")+"个div");
                    //         // var b = this.getAttribute("index");
                    //     }
                    // }
                    alert(number+"降为普通管理员");
                    location.reload();
                },
                error:function (data) {
                    alert("对不起，降为普通管理员失败");
                }
            });
        }
    }


}
