function checkpsw() {
    var password = document.getElementById("password").value;
    var psd = document.getElementById("psd").value;
    if (psd!=password){
        alert("确认密码错误，请重新输入！");
    }
}

//用户注册
function zhuce() {
    var a=document.getElementsByName("un")[0].value;
    var b=document.getElementsByName("pwd")[0].value;
    var c=document.getElementsByName("em")[0].value;
    let data = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:test="http://service.wcy/">'
        + '<soapenv:Header/>'
        + '<soapenv:Body>'
        + '<test:Register>'
        +'<insertUser>'
        +'<userName>'
        +a
        +'</userName>'
        +'<password>'
        +b
        +'</password>'
        +'<email>'
        +c
        +'</email>'
        +'</insertUser>'
        + '</test:Register>'
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
            alert("恭喜"+a+"注册成功");
        },
        error:function (data) {
            alert("对不起，注册失败");
        }
    });
}
