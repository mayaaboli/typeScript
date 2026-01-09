console.log('hello world');

function concatinate(name: string, surname: string) {
    return name + surname;
}

const r1 = 'aboli';
const r2 = 'aniket';

const result = concatinate(r1, r2);
console.log(result);

// array and tuple
let arr = [1, 2, 3];

function printarry(arr: number[]) {
    console.log(arr);
}

printarry(arr);

function printtuple(tpl: [number, string, number, Boolean]) {
    console.log(tpl);
}

let tpl: [number, string, number, boolean] = [24, 'aboli', 25, true];
printtuple(tpl);

let users: [name: string, age: number] = ['aboli', 23];
console.log(users);
