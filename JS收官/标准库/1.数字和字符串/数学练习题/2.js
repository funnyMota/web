/**
 * 得到一个指定长度的随机字符串
 * 字符串包含：数字、字母
 * @param {number} length 字符串的长度
 * @return {number} 随机字符串
 */
function getRandomString(length) {
  var str='';
  for(var i=0;i<length;i++){
    str+=String.fromCharCode(Math.floor(Math.random()*127)+0);
  }
  return str;
}
console.log(getRandomString(10));

