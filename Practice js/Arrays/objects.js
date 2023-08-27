//Object in js

// let biodata={
//     myname:"paras",
//     myage:22,
//     getdata:function(){
//         console.log(`my name is${biodata.myname} and my age is${biodata.myage}`);
//     }
//    }
//    biodata.getdata();
//object inside object


// let biodata={
//         mysirname:{
//         myname:"paras",
//         myage:22},
//         getdata:function(){
//             console.log(`my name is${biodata.myname} and my age is${biodata.myage}`);
//         }
//        }
    
//       console.log(biodata.mysirname);

//this keyword
// const obj={
//     name:"paras",
//     age:22,
//     my(){
//         console.log(this.name);
//     }
// }
// obj.my();

//Array destructuring

// const myBiodata=['paras','mani',22];
//       let a=[...myBiodata];
//       console.log(a);

      //object Destructuring
    //   const myBiodata={
    //     myname:"paras",
    //     lastname:"mani",
    //     age:22
    // }
    // let {myname,lastname,age}=myBiodata;
    // console.log(myname);
    //object properties
    //we can now use dynamic properries
    // let myname='paras';
    // const mybio={
    //     [myname]:"hello",
    //     22:"is my age"
    // }
    // console.log(mybio);

    //

    //object literals

   
    var person={
      name:"paras",
      age:22,
      getdata:function () {
        console.log(`my name is${person.name}`)       
      }
    }
    getdata();
    // {
    //   console.log(this.age);
    // }