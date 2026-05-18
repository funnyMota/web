var content=document.querySelector(".content");
var text=content.innerHTML;
var reg=/\s+.+/;
console.log();
var test=text.replace(/\s+.+/g,function(s){
  s=s.replace('/\s/g','');
  s="<p>"+s+"</p>";
  return s;
})
content.innerHTML=test;