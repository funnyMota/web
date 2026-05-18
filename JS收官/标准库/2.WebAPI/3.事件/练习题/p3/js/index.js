// 输入待办事项，按下回车后，添加事项到列表
var ul=document.querySelector('.todo-list');
var txt=document.querySelector('.txt');
txt.addEventListener('keydown',function(e){
  if(e.key==="Enter"){
    var li=document.createElement('li');
    var span=document.createElement('span');
    span.innerText=txt.value;
    var button=document.createElement('button');
    button.innerText='删除'
    button.addEventListener('click',function(){
      this.parentElement.remove();
    })
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
  }
})
// 点击删除后，删除对应的待办事项

