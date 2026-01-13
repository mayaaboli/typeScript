// interface user {
//     name : string;
//     age : number;
//     email : string
// }
// type updateuser = Partial<user>;

// const u0 :updateuser = {name:"aboli",age:24,email:"aboli@gmail.com"};
// console.log(u0);


interface user {
    name : string;
    age : number;
    email : string
}
type partialuser = Partial<user>;

const u0 :partialuser = {name:"aboli",age:24,email:"aboli@gmail.com"};
console.log(u0);

type requireuser = Required<user>;

type pickuser = Pick<user,"age">;

type omituser = Omit<user,"name"|"email">;

type requirepickuser = Required<Pick<user,"age"|"name">>;
