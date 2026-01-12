// class dimention {
//     xpoint : number;
//     ypoint : number;

//     constructor(xInput:number,yInput:number){
//     this.xpoint = xInput;
//     this.ypoint = yInput;
//     }
// }
// const Dimen = new dimention(0,0);
// console.log(Dimen);


class dimention {
    xpoint : number;
    ypoint : number;
 constructor(xInput:number,yInput:number){
    this.xpoint = xInput;
    this.ypoint = yInput;
  }
}
class dimention2 extends dimention{
    zpoint:number;
    constructor(xInput:number,yInput:number,zInput:number){
     super(xInput,yInput);
     this.zpoint = zInput;
    }
}
const Dimen = new dimention(0,0);
const Dimen2 = new dimention2(0,0,0);
console.log(Dimen);
console.log(Dimen2);
