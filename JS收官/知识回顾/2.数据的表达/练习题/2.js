/* 
于谦，男，职业捧哏，手机号13812341234，江湖人称谦哥，家住北京八大胡同。
其父亲王老爷子是一位古汉语专家，爱好洗澡

用字面量描述上面的数据
*/

var object={
  name:"于谦",
  sex:"男",
  profession:"捧哏",
  phone:"13812341234",
  nickname:"谦哥",
  address:"北京八大胡同",
  father:{
    name:"王老爷子",
    profession:"古汉语专家"
  },
  hobby:"洗澡"
}
console.log(object)
console.log(object.father.name)
console.log(object.father.profession)
console.log(object.hobby)
console.log(object.phone)
console.log(object.nickname)
console.log(object.address)
console.log(object.profession)
console.log(object.sex)
console.log(object.name)