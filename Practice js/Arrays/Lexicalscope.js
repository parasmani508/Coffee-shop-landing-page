let a="hello";
const first=()=>
{
    let b="how are you"
    const second=()=>
    {
        let c="fine"
        console.log(a+b+c);
    }
    second();
}
first();