(function(){
  var checkAll=document.querySelector('.checkAll');
  var tbody=document.querySelector('tbody');
  var checkOneLists=tbody.querySelectorAll('input');
  var ths=document.querySelectorAll('th');
  var rows=tbody.querySelectorAll('tr');
  var init=function(){
    initEvents();
  }

  var initEvents=function(){
    checkAll.addEventListener('click',onCheckAllClick);
    tbody.addEventListener('click',onCheckOneListsClick);
    for(var i=0;i<ths.length;i++){
      handleThsClickFn(ths[i],i);
    }
  }

  var onCheckAllClick=function(){
    var checkStatus=this.checked;
    for(var i=0;i<checkOneLists.length;i++){
      checkOneLists[i].checked=checkStatus;
    }
  }

  var onCheckOneListsClick=function(e){
    if(e.target.tagName!=="INPUT") return;
    var checkNumber=0;
    for(var i=0;i<checkOneLists.length;i++){
      if(checkOneLists[i].checked){
        checkNumber++;
      }
    }
    checkAll.checked=checkNumber===checkOneLists.length;
  }
  
  var handleThsClickFn=function(th,index){
    if(index===0) return;
    th.addEventListener('click',function(){
      var arr=Array.prototype.slice.call(rows).sort(function(a,b){
        if(index==2||index==4){
          return a.querySelectorAll('td')[index].innerHTML.localeCompare(b.querySelectorAll('td')[index].innerHTML,'zh');
        }
        return a.querySelectorAll('td')[index].innerHTML-b.querySelectorAll('td')[index].innerHTML;
      });
      for(var i=0;i<arr.length;i++){
        tbody.appendChild(arr[i]);
      }
    });
  }

  init();
  // var th = document.querySelectorAll('th');
  // var overturn = true;

  // init();
  // function init() {
  //   thInit();
  //   checkAllInit();
  // }
  
  // function checkAllInit(){
  //   var checkAll = document.querySelector('.checkAll');
  //   var checkboxAll = document.querySelectorAll('tbody input');
  //   var checkAllStatus = 1;
  //   checkAll.addEventListener('click', function () {
  //     for (var i = 0; i < checkboxAll.length; i++) {
  //       checkboxAll[i].checked = checkAllStatus ? true : false;
  //     }
  //     checkAllStatus = !checkAllStatus;
  //   });
  //   for (var i = 0; i < checkboxAll.length; i++) {
  //     checkboxAll[i].addEventListener('click', syncCheckAll);
  //   }
  //   function syncCheckAll() {
  //     checkAll.checked = Array.prototype.every.call(checkboxAll, function (el) {
  //       return el.checked;
  //     });
  //   }
  // }
  
  // function thInit() {
  //   for (let i = 1; i < th.length; i++) {
  //     th[i].addEventListener('click', function () {
  //       sortByColumn(i);
  //     });
  //   }
  //   function sortByColumn(col) {
  //     var tbody = document.querySelector('tbody');
  //     var rows = Array.prototype.slice.call(tbody.querySelectorAll('tr'));
    
  //     rows.sort(function (a, b) {
  //       var va = a.children[col].textContent.trim();
  //       var vb = b.children[col].textContent.trim();
  //       var cmp;
  //       if (col === 2 || col === 4) {
  //         cmp = va.localeCompare(vb, 'zh-CN');
  //       } else {
  //         cmp = (parseFloat(va) || 0) - (parseFloat(vb) || 0);
  //       }
  //       if (overturn) {
  //         cmp = -cmp;
  //       }
  //       return cmp;
  //     });
    
  //     overturn = !overturn;
    
  //     for (var i = 0; i < rows.length; i++) {
  //       tbody.appendChild(rows[i]);
  //     }
  //   }
  // }
  
})();