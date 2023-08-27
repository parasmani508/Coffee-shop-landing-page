const arr=[1,3,5,6,7,4,3];
function a(arr)
{
    const arr2=[];
    for(let i=0; i<arr.length; i++)
    {
     if(arr[i]!==0)
     {
        arr2.push(arr[i])
     }
    }
    return arr2;
}
console.log(a(arr));