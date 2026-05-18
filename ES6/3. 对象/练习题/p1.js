/**
 * 创建一个用户对象
 * 对象格式：
 * {
 *    firstName: xxx,
 *    lastName: xxx,
 *    fullName: xxx,
 *    sayHello: fn
 * }
 */
function createUser(firstName, lastName) {
  const user={
    firstName,
    lastName,
    fullName:firstName+lastName,
    sayHello(){
      console.log(this.fullName);
    }
  }
  return user;
}

// 调用createUser函数，使用解构得到fullName
var {fullName}=createUser("李","四");
console.log(fullName);

