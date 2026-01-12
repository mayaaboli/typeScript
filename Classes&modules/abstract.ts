abstract class AppoinmentABC {
    protected intime : Date ;
    protected outTime : Date;

    constructor(intimeInput:Date,outTime:Date){
        this.intime = intimeInput;
        this.outTime = outTime;
    }

    abstract isappoinmentAbc():void ;
}

class Appoinments extends AppoinmentABC {
 constructor(intimeInput:Date,outTimeInput:Date){
   super(intimeInput,outTimeInput);
 }
 isappoinmentAbc() {
     console.log(this.intime);
     console.log(this.outTime);
 }
}
const d6 = new Appoinments(new Date(),new Date());
d6.isappoinmentAbc();
