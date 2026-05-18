// 完成表单验证
function vailLoginId(){
  var div=document.querySelector('#loginId');
  var text=div.querySelector('input');
  var msg=div.querySelector('.msg');
  var err='';
  if(text.value.length<6||text.value.length>12){
    err='账户长度不能小于六位或大于十二位';
  }
  msg.innerText=err;
  div.className=err?"form-item err":"form-item";
  return !err;
}
function vailLoginPwd(){
  var div=document.querySelector('#loginPwd');
  var text=div.querySelector('input');
  var msg=div.querySelector('.msg');
  var err='';
  if(text.value.length<6||text.value.length>12){
    err='密码长度不能小于六位或大于十二位';
  }
  msg.innerText=err;
  div.className=err?"form-item err":"form-item";
  return !err;
}

function vaildataForm(){
  var loginId=document.querySelector('#loginId');
  var loginPwd=document.querySelector('#loginPwd');
  loginId.addEventListener('input',vailLoginId);
  loginPwd.addEventListener('input',vailLoginPwd);
}
vaildataForm();

var button=document.querySelector('.form-container');
button.addEventListener('submit',function(e){
  if(vailLoginId()&&vailLoginPwd()){
    console.log("成功");
  }else{
    e.preventDefault();
  }
})