// class user {
//     public name : string ;
//     public age : number ;

//     constructor(name:string ,age:number){
//         this.name = name ;
//         this.age = age;
//     }

//     get getname() : string{
//         return this.name;
//     }

// }
// const publicuser = new user("aboli",24);
// console.log(publicuser);
// publicuser.getname = "ab"; // this is not happed because of only get method


class user {
    public _name : string ;
    public age : number ;

    constructor(name:string ,age:number){
        this._name = name ;
        this.age = age;
    }

    get name() : string{
        return this._name;
    }
    set name(name:string){
      this._name = name;
    }
}
const publicuser = new user("aboli",24);
console.log(publicuser);
publicuser.name = "ab";
console.log(publicuser);      // one gettter setter property can work for one property
