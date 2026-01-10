// built-in type guards

// 1. typeof ---> all primitive expect object

function print(arg : string|number){
    if(typeof arg === 'string' && typeof arg === 'string'){
        console.log(arg.toLocaleUpperCase());
    }else{
        console.log(arg.toFixed(2));
    }
}
print('aboli');
print(23.34567);

// 2.instanceof  ----> for classes

// class Dog {
//    bark(){
//     console.log("dog is barking");
//    }
// }
// class Cat {
//     meow(){
//         console.log("cat is doing meow");
//     }
// }
// function speck(animal:Dog|Cat){
//  if(animal instanceof Dog){
//     animal.bark();
//  }else{
//     animal.meow();
//  }
// }
// const dog = new Dog();
// const cat = new Cat();

// speck(dog);
// speck(cat);

// 3.in oprator ----> (for object shape)

// type dog = {bark():void};
// type cat = {meow():void};

// function speak(animal: dog|cat){
//     if("bark" in animal){
//         animal.bark();
//     }else{
//         animal.meow();
//     }
// }
// const Dog :dog ={
//  bark() {
//      console.log("this is dog");
//  }
// }
// const Cat : cat ={
//     meow() {
//         console.log("this is cat");
//     }
// }
// speak(Dog);
// speak(Cat);


// user define type guards

type dog = {bark():void};
type cat = {meow():void};

function isDog(animal :dog|cat):animal is dog{
return "bark" in animal;
}

function speak(animal: dog|cat){
    if(isDog(animal)){
        animal.bark();
    }else{
        animal.meow();
    }
}
const Dog :dog ={
 bark() {
     console.log("this is dog");
 }
}
const Cat : cat ={
    meow() {
        console.log("this is cat");
    }
}
speak(Dog);
speak(Cat);

// assertion function ----> used when wants to threw error

function assertionFunc(value:unknown):asserts value is string{
    if( typeof value !== "string"){
        throw new Error("Not a string");
    }
}

function usage(value:unknown){
    assertionFunc(value);
    console.log(value.toLocaleUpperCase());
}

usage("aboli");
