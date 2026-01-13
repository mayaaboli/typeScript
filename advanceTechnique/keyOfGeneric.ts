interface user {
    name : string;
    age : number;
    email : string;
}
interface admin {
    name : string
}
function userIntro<T extends user | admin>(User:T,key:keyof T){
console.log(User[key]);
}
const u2:user = {name :"aboli",age:24,email:"abolibhor@gmail.com"}
userIntro(u2,'name');
