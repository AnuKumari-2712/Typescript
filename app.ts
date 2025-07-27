// //typeScript setup
// //setting up a typescript project
// //compiling typescript
// //agar me chata hu me code likhta rahu wo compile hota rhe
// //uske like run on terminal tsc --watch
// var a=12;
// function abcd(){
//     console.log(a);
// }
// //ts compile hokar app.js banega

//day2 
//basic type
//.primitive  types(number,string,boolean)
//array
//tuples
//enums
//any ,unknown,void,nukl,undefined,never
//primimtive ==noo bracket
//bracket=reference
//var a=90;//primritive =we copy direct
//var a={} =referce= we cannot direct copy
//{}=refernece
//harsh =primitve
//video 3
//for declaration
// var 
// let
//number 
//let a=12;//number
//bool=true //false
//arrays
//let arr=[1,2,3,4];
//let r=[1,2,3,4,{name:"harsh"},{name:122}];//number  or arry both h in ts
//let a:number[]=[1,2,3,4,"harssh"]//wrong
//it generate error we see later

//tuples
//let array:[string,number]=["harsg",22];//we say it first take string and number
//let arr2:[number,string]=[22,"annu"];

//enumerations
//in eumjns we can cfreate  properties we set value
// enum UserRoles{
//     ADMIN="admin",
//     GUEST="guest",
//     SUPER_ADMIN="super_Admin"
    
// }
// enum StatusCodes{
//     ABANDONED="abandooned stataus code 500",
//     NOTFOUND="not found status code 400"
// }
// StatusCodes.NOTFOUND;

// let b;//by default set hpga any

// let a:number;
// a=12;
// a=true;//wrong //bx we set number to a


//unknown
// let a:unknown;
// a=12;
// a="harsh";

// if(typeof a==="string"){//in ts for unknown we have to say type then it work
//     a.toUpperCase();
// }

//but in any ts left us the process
// let b;
// b=12;
// b="annuu"
// b.toUpperCase();//it run for string part


//function
// function abcd():number{//we have to declare here it return number
//     return 12;
// }
// function abc():void {//not return any thing
//     console.log("Ahdhd");
// }
// function ac():string {//not return any thing
//     return "Ahdhd";
// }

//null
// let a:null=null;//a ka type null h'
// a=12;//it wrong bz it null

//undefined
//let a:undefined;

//never jo kuch return nahi karta
// function ab():never{
//     while(true){

//     }
// }
// ab();
// console.log("hey");//donot return anything bz never

//day4 tpic
//type inference
//understaanding type infernece
//type annotations
//start
//type inference

//let a=12;//automatic pata kare ki kaun sa type h wo hi inference hoat h

//annotatation
// let a:number;//colom mar ke value likhna

// let a:number|boolean|string;
// a=12;
// a=true;
// a="gaijshh";

// let a:boolean;
// ///for function annotaion
// function abcd(a:number,b:string):void{}


//day 5 topics
//interfaces and types alises
//defining interfaces
//using interfaces to define object shapees
//extending interfaces
//type aliases
//intersection types

//interefn ka kam h object ka shape batna
//types ka kam h khud ki user define typ banna

// function abcd(a:number,b:string){
//     b.//wahi option dekhega to string se related h
// }




// interface User{//face h
//     name:string,
//     email:string,
//     password:string
// }
// function getDataofuser(obj:User){//obj user ki tarah h


// }
// getDataofuser({name:'nsbhd'})//password emil not here 
//option 2
// interface User{
//     name:string,
//     email:string,
//     password:string,
//     gender?:string//it becoome optional
// }
// //we have to say 
// function abcd(obj:User){
  


// }
// abcd({name:"anuuue",email:"kscnjc",password:"kdsmn",gender:"male"});//jo user me h wahi diya jayega both have sam eface

// interface User {
//   name: string;
//   email: string;
//   password: string;
//   gender?: string; // optional field
// }

// // Function to handle user data
// function abcd(obj: User): void {
//   console.log("📋 Received User Data:");

//   console.log("👤 Name:", obj.name);
//   console.log("📧 Email:", obj.email);
//   console.log("🔐 Password:", obj.password);

//   // Check if gender exists and display accordingly
//   if (obj.gender) {
//     console.log("⚥ Gender:", obj.gender);
//   } else {
//     console.log("⚠️ Gender not specified");
//   }

//   // Sample greeting
//   console.log(`👋 Hello, ${obj.name}! Welcome to our system.`);
// }

// Function call
// abcd({
//   name: "Anuuue",
//   email: "kscnjc@example.com",
//   password: "kdsmn123",
//   gender: "male"
 // });


 //extending interfaces
// interface User{
//     name:string;
//     email:string,
//     password:string;
// }
// interface Admin extends User{
//     admin:boolean;
// }
// function anu(obj:Admin){
//     console.log(obj.email);
//     console.log(obj.name);
//     console.log(obj.password);
//     console.log(obj.admin);
// }
// anu({
//   name: "Anuuue",
//   email: "kscnjc@example.com",
//   password: "kdsmn123",
//   admin: true
//  });


 //types aliases
//  type value=string|number|null;
//  let a:value;

//
// type add=string|null;
// function abcd(boj:arg){


// }
// abcd(true)//it say wromg bz see in type/
// abcd("anu")
///
// type u={
//     name:string,
//     email:string,
// }
// type admin =u &{
//     getDetails(u:string):void 
// }
// function abcd(a:admin){
//     a.getDetails//we acces all admin combin ewuth u
    
// }
// Base type
// type U = {
//   name: string;
//   email: string;
// }

// // Admin type extends U and adds a method
// type Admin = U & {
//   getDetails: (info: string) => void;
// }

// // Function that accepts Admin type and uses the method
// function abcd(a: Admin): void {
//   console.log("👤 Name:", a.name);
//   console.log("📧 Email:", a.email);

//   // Call the method from Admin type
//   a.getDetails("Additional info about user");
// }

// // Usage example
// const adminUser: Admin = {
//   name: "Anuuue",
//   email: "kscnjc@example.com",
//   getDetails: (info: string) => {
//     console.log(`🛡️ Admin Details: ${info}`);
//   }
// };

// // Call the function
// abcd(adminUser);

//topics
//classes and objects
//class definiation
//cosntruction
//access moifeire(public,priavte,protected)
//readonly properties
//paramerter properties
//getters and setters
//static members
//abstract classes and methods

//class object

// class Device {
//     name: string = "fmmf";
//     price: string = "digital";
//     category: string = "1223";
// }

// let d1: Device = new Device();
// let d2: Device = new Device();

//dono sma eh

///day 6

//topics
//constructor
// class bottle{
//     age=0;//jo magna h use constuctor me likho
//     constructor(public name:string,public ishandsome:boolean){

//     }
// }
// new bottle('anu',true)
// //constructor me jo liya h use bhejn aparega
// class bott {
//     age = 0;
//     constructor(public name: string, public ishandsome: boolean) {}
// }

// const obj = new bottle('anu', true);

// // Outside the class—log to console
// console.log(obj.name);        // 'anu'
// console.log(obj.ishandsome);  // true
// console.log(obj.age);         // 0

// //example
// class bottlemaker{
//     constructor(public brand:string ,public price:number ,public color:string,public material:string){
// //blueprint
//     }

// }
// let b1=new bottlemaker("Milton",122,"black","metal");
// let b2=new bottlemaker("cello",100,"transparent","plastic")
// //b1 and b2 both are different cars consist scharacters of constructor

 
// //ex2
// class music{
//     public name;
//     public artist;
//     public thumbnail;
//     public length;
//     public free;
//     constructor(name:string,artist:string,thumbnail:string="somethumbnail",length:number,free:boolean){
//         this.name=name;
//         this.artist=artist;
//         this.thumbnail=thumbnail;
//         this.length=length;
//         this.free=free;
//     }
// }

// class Music{
//     constructor(public name:string ,public artist :string,public thumbnail:string,public length:number,public k:boolean ){
//         this.thumbnail=thumbnail || "somethumbnail.jpg";
//     }

// }

// let a=new Music("cahi ","anu","anu.png",1200,false);
// let b=new Music("nujj","lkjkj","hmj.jpg",899,true);
// b.name="lootera";
// a.artist="poyu"
//1st way
///this keywrod
//if we want access from outside we use this
// class abcd{
//     name="anu";
//     changeSomeStuff(){//jo bahar likha h use function kai andar access karne kai liye this ka use kiya jata h
//         // this.name
//         // this.changeSomeMoreStuff
//         let a=12; //no need this 
//     }
//     changeSomeMoreStuff(){
//         console.log("kloo");
//     }
// }

//2nd way
// class Bottle{
   
//     constructor(public name:string){
//         this.name=name;
//     }
// }
// let n=new Bottle("aannu");



//access modifriers
// class boo{
//     constructor(private name:string){
//         this.name=name;
//     }
//     change(){
//         this.name="hARSh";
//     }

// }
// let b1=new boo("milton");

// //wrong code ko bhi chala dega but btayega bhi
// b1.change();//we cahnge private also but inside class

// class bottlemaker{
//     public halua:string="halua";//we aces only public outside class
//     constructor(public name:string){}
// }
// class metalbottle extends bottlemaker{
//     constructor(name:string){
//         super(name);
//     }
//     getvalue(){
//         console.log(this.name,this.halua);
//     }
// }
// let b1=new metalbottle("milton");//ye jayega milton kai pas wo super ki help se bottle kai pas bhej dega
// b1.getvalue();



//we can study 
//private or protecyed
//private jis class me bana bas usmi me use hoga 
//but protected jisse wo extenede ho usme bhi us eho skat ah
// class b{
//     protected name="milto ";
// }
// class me extends b{
//     public metal="metal";
//     changeNmae(){
//         this.name="annu";
//     }
// }
// let b1=new me ();
// // b1.name="jhdsj"//wrong bz its protected

// class user{
//     constructor(public readonly name:string){//we cannot chane name bz readonly
//         // ChangeNmae(){
//         //     this.name="hello";
//         // }//wrong h we cnnaot change
//     }
// }
// let u1=new user("avi");
// u1.changeNmae();//not possible wrong h


// class suser{
//     public name;
//     public age;
//     constructor(name:string,age:number){
//         this.name=name;
//         this.age=age;
//     }
// }

// class user {
//     constructor(public name: string, public age: number) { }
//     getName() {
//         return this.name;
//     }
//     setName(value: string) {
//         this.name = value;
//     }
// }
// let a1=new user("annu",78);
//getter and setter
// class User {
//     constructor(public _name: string, public age: number) {}

//     get name() {
//         return this._name;
//     }

//     set name(newName: string) {
//         this._name = newName;
//     }
// }

// let u1 = new User("harsh", 23);
// console.log(u1.name); // Output: harsh

// u1.name = "rahul";
// console.log(u1.name); // Output: rahul


//static members
class hero{
    static version=1.0
    //without instance we access value due tos tatic
    static getrandom(){
        return Math.random();
    }
}
// let  sh1 =new hero();
//no need of this let line bz staic is there 

// class he{
//      version=1.0;
//     //without instance we access value due tos tatic
//     getrandom(){
//         return Math.random();
//     }
// }
// let u1=new he();

//abstract classses and methods
// class bottle{
//     static get(){
//         return Math.random();
//     }
// }///we use withour instance
// // Numbers.get();//no need of this oinstance

//paytm /phoneay/gpay/gpay payment
//aam ka ped/banana kai paor
//mai app implemntaiton
// class paymnet{
//     constructor(protected amount:number,protected account:number){}
//     ispaymentvalid(amount:number){
//         return this.amount>0;
//     }
// }
//baki h complete me
// class cookingessentail{//imporatnt thing in every calss
//     constructor(protected gas:number,public gasKaname:String){}
// }
// class sabji extends cookingessentail{

// }
// class cake extends cookingessentail{

// }

//function
//function types
//optimal and default parameter
//rest paramters
//overloads

// function abcd(num:number):number{
//     return num+2
// }
// function getUpper(val:string){
//     return val.toUpperCase();

// }
// function signUpUser(name:string,email:string,password:number){

// }
// let loginUser=(name:string,email:string,ispaid:boolean=false)=>{}
// abcd(6);
// getUpper("annu");
// signUpUser("anu","@GainNode",82338);
// loginUser("hhdhd","h@hsadj")

// function getvalue(myval:number){
//     if(myval>5){
//         return true;
//     }
//     return "aanu"
//     //yesame string bool dono return kar rjh sh yes liye kuch nahi lokah eh log
// }

// //arrow function
// const gethello=(s:string):string=>{
//     return ""
// }
// const heroes=["thor","spidermen","ironmen"]
// heroes.map((hero):string=>{
//     return "anann"

// })
// function consoleError(errmsg:string):void{
//     console.log(errmsg);
// }

// function handleerror(err:string):never{
//     throw new Error(err);
// }
// //     //yesame hero ka type khud se change ho jayeg a qki mention n h yesliye
// export{}


///genericss from start
//generics
//genric function
//generic interface
//g classes
//hume yek function banana h jo ki accept kaerga koi bhi value adn usey print karega
//function ko us ekarte waat bata sakte h ki funcion argument s ko kis type se treat kare

// function abcd<T>(a:T){//templet   calss
    
// }
// abcd<string>("annu");
// abcd<number>(12);

//3 type of function
// function abcd<H>(a:H,b:string,c:number){

// }
// abcd<string>("amnu","pudi",88);
// abcd<number>(12,"pudi",88);


// function  log<T>(val:T){
//     console.log(val);

// }

// log<string>("kk");
// ///2
// function  lo<T>(val:T){
//     console.log(val);

// }
// lo<number>(23);

//interface
// interface halue<T>{
//     name:string;
//     age:number;
//     key:T;
// }
// function abcd(obj:halue<string>){
//     obj.key.//all possible thing which related to string are accesab;le
// }
// abcd({name:"hoo",age:778,key:"jdsd"})

class bottle<T>{
    constructor(public key:T){}
}
let b1=new bottle<string>("Anuu");
let  b2=new bottle<number>(76);
console.log(b1);
//"ldld"//string literal
//yek hi t me string or nu,mber donon gya qki we use geneeirc
// function acv<T>(a:T,b:T):T{
//     return b;
//    //return "kdjd";//wrong h ye
    //return <T>"hey";//right h
// }
// acv<string>("ahyy","kdjdj")




//module
//exorting and importing modules
//default exports

//her ewe import from payment 
// import { getDetails,addPayment} from "./payment";
// addPayment(278);

//export default
// import Payment from "./payment";
// let a=new Payment(12);
// let b=new Payment(122);
// console.log(a,b);

//type asseration
//type casting
//non null asseration
//type assertion ka matlb batan ats ko ki perticular cheej ka type kya h ye app tab karte ho jab aap typescripr se jada val ka type jante ho
// let a:any=12;
// (a as string).
// (<number>a ).   ///sare milenge work jo number se hota h operation//a number ki traf treat hoga


// let a=Number("13");
// console.log(a);


//non-null asseration operato
// let a:null |undefined|string;
// a="hey";
// a!.// it gives all oeoartion relete dto string it nerver null or undefinded

//type guards and ts utility types
//using typeof and instanceof
//partial ,required,readonlty
// function abcd(arg:string|number|any){
//     if(typeof arg==="number"){
//         return "number";
// //it gives al operation which related to number
//     }
//     else if(typeof arg === "string"){
//         return "string";
// //it gives all operation which related to string
//     }
//     else {
//         throw new Error("anu is beauty");

//     }

// }
// console.log(abcd(12));
// console.log(abcd("hemm"));
// abcd(true);

//type guards->type narrowing we r not sure it which type then we use it type narrowing
//typeof instanceof
// class tvRemote{
//     switchoff(){
//         console.log("switching off tv");
//     }
// }
// class carremote{
//     switchoff(){
//         console.log("switch off car");
//     }

// }
// const tv=new tvRemote();
// const car=new carremote();
// function switchof(device:tvRemote|carremote){
//     if(device instanceof tvRemote){
//         device.switchoff();
//     }
//     else if(device instanceof carremote){
//         device.switchoff();
//     }
// }
// switchof(car);