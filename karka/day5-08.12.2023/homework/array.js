// var a=[5,0,10,0,15,0,20,0]
// var b=[]
// for(var i=0;i<a.length;i++)
// {
//     if(a[i]==0)
//     {
//         b.push('*')
//     }
//     else
//     {
//         b.push(a[i])
//     }
// }
// console.log(b)/


// var a=[5,10,30,20,25,30]
// var b=[]
// for(var i=0;i<a.length-1;i+=2)
// {
//     b.push(a[i],a[i+1])
    
//         b.push(a[i]+a[i+1])
    
// }
// console.log(b)

// var a=[5,10,0,3,0,56,0,54,0]
// var b=[]
// for(var i=0;i<a.length;i++)
// {
// b.push(a[i])
// if(a[i]==0)
// {
//     b.push(0)
// }
// }
// console.log(b)


// var a=[3,5,2,1,2]
// var b=2
// var c=[]
// for(i=0;i<a.length;i++)
// {
//     // if(!b.includes(a[i]))
//     if(b!=a[i])
//     {
//         c.push(a[i])
    
//     }
//     else{
//         c.push('*')
//     }
// }
// console.log(c)
var a=[3,5,2,1,2]
var b=2
for(var i=0;i<a.length;i++)
{
    if(a[i]==b)
    {
        a.splice(i,1)
        a.push('*')
    }
}
console.log(a)
