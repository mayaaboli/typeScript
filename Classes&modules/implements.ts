interface appoinmentInterface{
    intime : Date;
    outtime : Date ;
    description : string;

    isAppoinment():void;
}
class Appoinment implements appoinmentInterface{
    intime : Date;
    outtime : Date ;
    description : string;

    constructor(intimeInput:Date,outtimeInput:Date,descriptionInput:string){
        this.intime =intimeInput;
        this.outtime = outtimeInput;
        this.description=descriptionInput;
    }

    isAppoinment() {
     console.log(this.intime);
     console.log(this.outtime);
     console.log(this.description);
    }
}
const d5 = new Appoinment(
    new Date ("2025-07-24"),
    new Date ("2025-07-26"),
    "any of this");
d5.isAppoinment();
