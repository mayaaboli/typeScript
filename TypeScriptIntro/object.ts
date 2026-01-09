const obj = {
name : 'aboli',
age : 24 ,
email : 'abolibhor@gmail.com',
courses : ['java','c++','c#']
}
console.log(obj);

const obj1 = {
name : 'aniket',
age : 25 ,
email : 'aniketbhor@gmail.com',
courses : ['javascript','angular','react']
}
console.log(obj1);

function printobj(user :{name:string,age:number,email:string,courses:string[]}){
 console.log(user);
}
printobj(obj1);
printobj(obj);


// const obj = {
// name : 'aboli',
// age : 24 ,
// email : 'abolibhor@gmail.com',
// courses : ['java','c++','c#']
// }
// console.log(obj);

// const obj1 = {
// name : 'aniket',
// age : 25 ,
// email : 'aniketbhor@gmail.com',
// courses : ['javascript','angular','react']
// }
// console.log(obj1);

// function printobj(obj :any, obj1:any){
//  console.log(obj);
//  console.log(obj1)
// }
// printobj(obj1,obj);
