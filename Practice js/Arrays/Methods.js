// const a=[1,2,3,6,7,8,4];
// const c=[1,2,3,4]
// const d=[...a,...c]
// console.log(d);


// const a=[1,2,3,6,7,8,4];
// a.push(44);
// console.log(a);

// const a=[1,2,3,4];
// const b=a.includes(4);
// console.log(b);

// const a=[1,2,3,4,5,6];
// const b=a.find((ele)=>{
//   return ele>4;
// });
// console.log(b);

// const a=[1,2,3,4,5,6];
// const b=a.findIndex((ele,index,a)=>
// {
//     return ele<4;
// })
// console.log(b);



// const a=[1,2,3,4,5,6];
// const b=a.filter((ele,index,array)=>
// {
// return ele>2;
// })
// console.log(b);

// const a=[1,2,3,4,5,6];
// a.forEach((e,i,array)=>{
//     console.log(e+"index",i)
// })


// const a=[1,2,3,4,5];
// const b=a.map((ele)=>
// {
//     return `${ele}`
// });
// console.log(b);

// let a=[1,2,3,4];
// let sum=a.reduce((acc,ele,index,arr)=>
// {
//     return acc+=ele +"index"+ index;
// })
// console.log(sum);

// let a=["2","9","4","5"];
// let b=a.toString();
// // console.log(b);

// let string="apple,banana,orange,kiwi";
// let b=string.slice(5,-4);
// console.log(b);

// const a="apple,ncncj"
// const b=a.substring(6)
// console.log(b);


// let string="apple,banana,orange,kiwi";
// let b=string.replace("apple","bnana")
// console.log(b);


// const a=new Date();
// const b=a.getDay();
// console.log(new Date().toLocaleString());

// const a=new Date();
// const b=a.getTime(a.toLocaleDateString());
// console.log(new Date().toLocaleDateString());

// 
// const a=[1,2,3,4];
// const b=a.splice(3,2,4,5);
// console.log(b);

// const a=[1,2,3,4,5];
// let sum=a.reduce((acc,index,ele,arr)=>
// {
//    acc+=ele;
//    console.log(sum);
// })
// var a=["abc","bdh","jbsx"]
//  a.forEach((element,index,array)=>
//  {
//    console.log(element+"index:",index+"array:",array);
//  })
// function sum(a,b)
// {
//     return total=a+b;
    
// }
// console.log(sum(2,3));
// const c=(()=>
// {
//     let a=2,b=3;
//  return total=a+b;
// })
// console.log(c());

// var a=[200,300,390,800,7889];
// var b=a.filter((element)=>
// {
//     return element >300;
// })
// console.log(b)
// var a=[200,300,390,800,7889];
// var b=a.find((element)=>
// {
//   return element<300;
// })
// console.log(b);
// var a=[200,300,390,800,7889];
// console.log(a.length);
// var a=[200,300,390,800,7889];
// var b=a.pop(4);
// console.log(b)
// var a=[200,300,390,800,7889];
// const s=a.unshift("222222");
// console.log(a);
// var a=[200,300,390,800,7889];
// const b=a.pop(7889)
// console.log(a);
// console.log(b);
// var a=[200,300,390,800,7889];
// var b=a.shift()
// console.log(a);
// console.log(b);
// var a=[200,300,390,800,7889];
// var b=a.splice(5,0,678);
// console.log(a);

// var a=[200,300,390,800,7889];
// a.splice(1,1,222);
// // console.log(a);
//  const a=[1,2,3];
//  const b=a.reduce((acc,ele)=>
//  {
//     return acc*=ele;
//  })
//  console.log(b);

//Strings in javascript

// let a="paras";
// let b="mani";
// let c=`${a} ${b}`;
// console.log(c);

// let a="paras";
// let b="mani";
// console.log(a.length);

// let a="there is a chance";
// console.log(a);
 

// let a="there is a chance";
// console.log(a.indexOf("chance"));

// let a="there is a chance";
// console.log(a.search("i"));

// let a="apple,mango,kiwi";
// console.log(a.slice(6,10));

// let a="apple,mango,kiwi";
// console.log(a.slice(6,-2));

// let a="apple,mango,kiwi";
// console.log(a.substring(3,5));


// let a="apple,mango,kiwi";
// console.log(a.substr(-3));
  


// let a="apple,mango,kiwi";
// console.log(a.replace("mango","orange"));


// let a="apple,mango,kiwi";
// console.log(a.charAt(6));


// let a="apple,mango,kiwi";
// console.log(a.charCodeAt(3));


// let a="  apple, mango ,kiwi  ";
// console.log(a.trim());


// let a="apple,mango,kiwi";
// console.log(a.split());

const calling=()=>
{
    alert("hello")
}