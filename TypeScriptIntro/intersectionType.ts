type obj3 = {
  name : string,
  age : number,
  email: string,
  courses:string[]
}

type obj4 = {
    weight :number
}

type obj5 = obj3 & obj4;

const obj:obj5= {
name : 'aboli',
age : 24 ,
email : 'abolibhor@gmail.com',
courses : ['java','c++','c#'],
weight : 45
}

const obj1:obj5= {
name : 'aniket',
age : 25 ,
email : 'aniketbhor@gmail.com',
courses : ['javascript','angular','react'],
weight : 47
}

function printobj(user:obj5){
 console.log(user);
}
printobj(obj1);
printobj(obj);
