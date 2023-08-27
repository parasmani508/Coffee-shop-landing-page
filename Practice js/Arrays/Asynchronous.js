//Hoisting in js
// console.log(name);
// var name;
// name="paras"

// var name;
// console.log(name);
// name="paras";


 //Scope chain and Lexical scoping
//  const a="heelo";
//  const first=()=>
//  {
//   let b="fine";
//   const second=()=>
//   {
//     let c="thnx";
//     console.log(a+b+c);
//   }
//   second();
//   //console.log(a+b+c);
//  }
//  first();


//Event loop
// const fun2=()=>
// {
//   setTimeout(()=>
//   {
//     console.log("function 2 is running")
//   },3000)
// }
// const fun1=()=>
// {
//   console.log("fun1 is running");
//   fun2();
//   console.log("fun1 is ending");
// }
// fun1();


//Async,await and promises

const promise=new Promise((resolve,reject)=>
{
  let a=8,b=8;
  const c=a+b;
  if(c===16)
  {
    resolve("all fine")
  }
  else
  {
    reject("not fine");
  }
});6
promise.then((m)=>
{
  console.log(m)
})