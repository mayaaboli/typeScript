// function add(a:number|string,b:number|string){
//  return a+b;
// }     // this is not possible in this case we do function overloading

function addnumber(a:number,b:number):number;
function addnumber(a:string,b:string):string;

function addnumber(a: string | number, b: string | number){
if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  throw new Error("Invalid arguments");
}
console.log(addnumber(28,19));
console.log(addnumber("aboli","mayur"));
