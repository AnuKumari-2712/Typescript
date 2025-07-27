

// type UserInput = {
//     name: string;
//     isPaid: boolean;
// };

// function createUser({ name, isPaid }: UserInput) {
//     console.log(name, isPaid);
// }

// createUser({ name: "anu", isPaid: false });

// function createcourse():{name:string,price:number}{
//     return {name:"react",price:37373}
//     //in thsi case obj return obj
// }
//geneerics aprt of ts
//se in documnetation
// const score:Array<number>=[]
// const names:Array<string>=[]
// function identityOne(val:boolean|number):boolean|number{
//     return val
// }
// function identitytwo(val:any):any{
//     return val
//     //any kuch bhi le sakta h or dusar eme de sakta h
// }
// function identitythree<type>(val:type):type{
//     return val//jo lega wahi dega
// }
// identitythree(3)//jo lega wahi dega type

// function identityfour<T>(val:T):T{//T is type
//     return val
// }

// interface bottle{
//     brand:string,
//     type:number
// }
// // identityfour<bottle>({})
// //how to define generic
// function getsearchProducts<T>(products:T[]):T{
//     //do some database operation
//     const myIndex=2
//     return products[myIndex]
// }

// const  geteSerachProduts=<T>(products:T[]):T|undefined=>{
//     //do some databse operation
//     const myIndex=4
//     return products[myIndex]
// }

// const getMoreSerachProduts=(products:number[]):number=>{
//     //do some databse operation
//     const myIndex=4
//     return products[myIndex]
// }

// const gete=<T,>(p:T[]):T=>{//generic
//     //do some database operations
//     const m=4
//     return p[m]
// }

function another<T,U>(valone:T,valtwo:U):object{
    return{
        valone,
        valtwo
    } 
}