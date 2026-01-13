interface user {
    name : string;
    age : number;
    email : string;
}
function userintro(User:user,key:keyof user){
console.log(User[key]);
}
const u1:user = {name :"aboli",age:24,email:"abolibhor@gmail.com"}
userintro(u1,'name');
