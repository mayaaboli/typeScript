interface obj3 {
  name : string,
  age : number,
  email: string,
  courses:string[]
}

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

function printobj(user:obj3){
 console.log(user);
}
printobj(obj1);
printobj(obj);
