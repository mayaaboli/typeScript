type alias = string|number|boolean;

function add (arg1:alias,arg2:alias){
    if(typeof arg1 === 'string' && typeof arg2 ==='string')
 return arg1 + arg2 ;
}
const arg1 = "aboli";
const arg2 = 'abhor';
const arg = add(arg1,arg2);
console.log(arg);
