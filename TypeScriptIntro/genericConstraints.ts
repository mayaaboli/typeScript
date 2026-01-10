// function lengthComparison<type>(arg1:type[],arg2:type[]){
// if(arg1.length >= arg2.length){
//  return arg1 ;
// }
// return arg2;
// }
// const arg1 = [1,2,3];
// const arg2 = [1,2,2,3,4];
// console.log(lengthComparison(arg1,arg2));           // length property does not work because we can not prdict the which type we give later on in generic function in this case of function we use array


// for object

interface userList {
  user : string[],
  length :number
}

function lenComparison<type extends {length:number}>(arg1:type,arg2:type){
if(arg1.length >= arg2.length){
 return arg1 ;
}
return arg2;
}
const arg3:userList = {user : ['jan','aboli','aniket'],length:3}
const arg4:userList = {user :['aboli','aaradhya'],length:2}
console.log(lenComparison(arg3,arg4));              // we use extend key word for adding constraints in object


// interface userList {
//   user : string[],
//   length :number
// }
// interface userList2{
//     length :number
// }
// function lenComparison<type extends userList2>(arg1:type,arg2:type){
// if(arg1.length >= arg2.length){
//  return arg1 ;
// }
// return arg2;
// }
// const arg3:userList = {user : ['jan','aboli','aniket'],length:3}
// const arg4:userList = {user :['aboli','aaradhya'],length:2}
// console.log(lenComparison(arg3,arg4));
