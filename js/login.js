//用户登录
function f(){
  var a=document.getElementsByName("usn")[0].value;
  var b=document.getElementsByName("psd")[0].value;
  let data = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:test="http://service.wcy/">'
      + '<soapenv:Header/>'
      + '<soapenv:Body>'
      + '<test:Login >'
      +'<findUser>'
      +'<userName>'
      +a
      +'</userName>'
      +'<password>'
      +b
      +'</password>'
      +'</findUser>'
      + '</test:Login>'
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
      let dd = data.getElementsByTagName('admin')[0].firstChild.nodeValue;
      document.cookie = name+"="+escape(dd);
      if (dd!=-1){

        alert("登录成功"+dd);
        location.href="manage.html";
      }else{
        alert("对不起，您输入的账号或密码有误，请重新输入");
      }

    },
    error: function (data) {
      alert("对不起，您输入的账号或密码有误，请重新输入");
    }
  });
}