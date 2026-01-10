// function add (arg1:number|string,arg2:number|string|boolean){
//     if(typeof arg1 === 'number' && typeof arg2 ==='number')
//  return arg1 + arg2 ;
// }
// const arg1 = 23 ;
// const arg2 = 25;
// const arg = add(arg1,arg2);
// console.log(arg);

function add (arg1:number|string,arg2:number|string|boolean){
    if(typeof arg1 === 'string' && typeof arg2 ==='string')
 return arg1 + arg2 ;
}
const arg1 = "aboli";
const arg2 = 'abhor';
const arg = add(arg1,arg2);
console.log(arg);
