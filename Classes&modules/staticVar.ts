class dimentionSta {
    xpoint : number;
    ypoint : number;

    static NUM_var = 2;

 constructor(xInput:number,yInput:number){
    this.xpoint = xInput;
    this.ypoint = yInput;
  }
}
class dimentionSta2 extends dimentionSta{
    zpoint:number;

    static override NUM_var = 3;

    constructor(xInput:number,yInput:number,zInput:number){
     super(xInput,yInput);
     this.zpoint = zInput;
    }
}
const DimenSta = new dimentionSta(0,0);
const Dimen2Sta = new dimentionSta2(0,0,0);
console.log(DimenSta);
console.log(Dimen2Sta);
console.log(dimentionSta2.NUM_var);
