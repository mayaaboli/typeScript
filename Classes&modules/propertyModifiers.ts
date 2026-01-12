// optional property

// interface dimention{
//     D2 : string,
//     D1 : string,
//     D3?: string
// }

// const Dimention : dimention = {D2 :"center",D1 :"up"}
// console.log(Dimention);

//Readonly property

interface dimentioncore{
    D2 : string,
    D1 : string,
    readonly D3: string
}

const disha : dimentioncore = {D2 :"center",D1 :"up",D3:"down"}
console.log(disha);
// Dimention.D3 = "up-down";      // ----> we can nor do this beacuse readonly property we can't change it
