interface obj3 {
  name : string,
  age : number,
  email: string,
  courses:string[]
}

interface obj4 extends obj3 {
    weight :number
}

const obj:obj4= {
name : 'aboli',
age : 24 ,
email : 'abolibhor@gmail.com',
courses : ['java','c++','c#'],
weight : 45
}

const obj1:obj4= {
name : 'aniket',
age : 25 ,
email : 'aniketbhor@gmail.com',
courses : ['javascript','angular','react'],
weight : 47
}

function printobj(user:obj4){
 console.log(user);
}
printobj(obj1);
printobj(obj);
