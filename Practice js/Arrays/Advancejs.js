// callback function and higher order function
const add=(a,b)=>
{
 return a+b;
}
const sub=()=>
{
    return a-b;
}
const mul=()=>
{
    return a*b;
}
const calc=(num1,num2,operator)=>
{  return operator(num1,num2)

}
console.log(calc(2,3,add))

