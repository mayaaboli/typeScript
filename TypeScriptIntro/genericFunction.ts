function genericFunc<type>(arg:type){
  return console.log(arg) ;
}
const arg = "aboli";
genericFunc(arg);



function genericfunc<type>(arg:type[]){
  return console.log(arg) ;
}
const arg1 = [1,2,2,3,4,5,6];
genericfunc(arg1);
