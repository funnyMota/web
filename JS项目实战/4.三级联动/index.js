(function(){
  var provinceDOM=document.querySelector('#province');
  var cityDOM=document.querySelector('#city');
  var schoolDOM=document.querySelector('#school');
  var init=function(){
    loadData(provinceDOM,province);
    initEvent();
  }
  var loadData=function(dom,data){ 
    if(dom!==provinceDOM) dom.replaceChildren();
    for(var item in data){
      var option=document.createElement('option');
      option.value=item;
      option.innerText=data[item];
      dom.appendChild(option);
    }
  }
  var initEvent=function(){
    provinceDOM.addEventListener('change',selectProvince)
    cityDOM.addEventListener('change',selectCity);
  }
  var selectProvince=function(){
    if(this.value==="0000"){
      loadData(cityDOM,null);
      loadData(schoolDOM,null);
      return;
    };
    loadData(cityDOM,city[this.value]);
    loadData(schoolDOM,allschool[cityDOM.children[0].value]);
  }
  var selectCity=function(){
    loadData(schoolDOM,allschool[this.value]);
  }
  init();
})();

