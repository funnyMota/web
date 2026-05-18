/**
 * 根据协议的多选框是否选中设置注册按钮状态
 */
function setSubmitButtonStatus() {
  document.querySelector('button[type="submit"]').disabled=!document.querySelector('.policy input').checked;
}

/**
 * 根据手机号文本框中的文本，设置发送验证码按钮的状态
 */
function setSendCodeButtonStatus() {
  var phone=document.querySelector('#txtPhone');
  var captcha=document.querySelector(".captcha button");
  if(phone.value.length>=11){
    captcha.disabled=false;
  }else{
    captcha.disabled=true;
  }
}

/**
 * 根据当前选中的爱好，设置已选择爱好文本
 */
function setSelectedLoves() {
  var select=document.querySelectorAll('option');
  var selChoose=document.querySelector('#selChoose');
  selChoose.innerText='已选择的爱好:';
  for(var i=0;i<select.length;i++){
    if(select[i].selected){
      selChoose.innerText+=select[i].innerText;
    }
  }
}

// 将上面的函数和用户事件连接
setSubmitButtonStatus();
setSendCodeButtonStatus();
setSelectedLoves();
document.querySelector('.policy input').addEventListener('change',function(){
  setSubmitButtonStatus();
})
document.querySelector('select').addEventListener('change',function(){
  setSelectedLoves();
})
document.querySelector('#txtPhone').addEventListener('input',function(){
  setSendCodeButtonStatus();
})
// 给所有的文本框注册事件，若用户在输入的过程中按下了ESC，则将文本框清空
var txt=document.querySelectorAll('.txt');
for(var i=0;i<txt.length;i++){
  txt[i].addEventListener('keydown',clear)
}
function clear(e){
  if(e.key==="Escape"){
    this.value='';
  }
}