var titles=document.querySelectorAll('.menu h2')
var itemHeight=30;
for(var i=0;i<titles.length;i++){
  titles[i].onclick=function(){
    var beford=document.querySelector('.submenu[status=opened]');
    if(beford){
      closeSubmenu(beford);
    }
    toggleSubmenu(this.nextElementSibling);
  };
}
function openSubmenu(subMenu){
  var status=subMenu.getAttribute('status');
  if(status !=="close" && status){
    return;
  }
  subMenu.setAttribute('status','playing')
  createAnimate({
    from:0,
    to:itemHeight*subMenu.children.length,
    totalMs:1000,
    duration:15,
    onmove:function(n){
      subMenu.style.height=n+"px";
    },
    onend:function(){
      subMenu.setAttribute('status','opened')
    }
  })
}
function closeSubmenu(subMenu){
  var status=subMenu.getAttribute('status');
  if(status !=="opened"){
    return;
  }
  subMenu.setAttribute('status','playing')
  createAnimate({
    from:itemHeight*subMenu.children.length,
    to:0,
    totalMs:1000,
    duration:15,
    onmove:function(n){
      subMenu.style.height=n+"px";
    },
    onend:function(){
      subMenu.setAttribute('status','close')
    }
  })
}

function toggleSubmenu(subMenu){
  var status=subMenu.getAttribute('status');
  if(status==="playing"){
    return;
  }
  if(status==="opened"){
    closeSubmenu(subMenu);
  }else{
    openSubmenu(subMenu);
  }
}