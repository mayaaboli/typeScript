// class Deskbox <type> {
//     person1 : type ;

//     constructor(person2:type){
//         this.person1 = person2;
//     }

//     print(){
//         console.log(this.person1);
//     }
// }
// const d1 = new Deskbox("aboli");
// const d2 = new Deskbox([1,2,3,4]);
// d1.print();
// d2.print();


interface isSized {
    length : number;
}
class Deskbox <type extends isSized> {
    person1 : type ;

    constructor(person2:type){
        this.person1 = person2;
    }

    print(){
        console.log(this.person1);
    }
}
const d1 = new Deskbox("aboli");
// const d3 = new Deskbox(24);  // this will not work because of type constraints
const d2 = new Deskbox([1,2,3,4]);
d1.print();
d2.print();
