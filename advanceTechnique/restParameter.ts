// const arr = [1,2,3,4,5,6]

// function arrSum(arr: number[]){
//     let result = 0 ;
//     arr.forEach(element => {
//     result += element
//     });
//     return result;
// }
// const s1 = arrSum(arr)
// console.log(s1);

// const arr = [1,2,3,4,5,6]

function arrSum(...arr: number[]){
    let result = 0 ;
    arr.forEach(element => {
    result += element
    });
    return result;
}
const s1 = arrSum(1,2,4,45,6,7)
console.log(s1);
