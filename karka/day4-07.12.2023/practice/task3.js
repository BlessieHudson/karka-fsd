// var a=[1,2,3,4,22,11,33,66]
// var b=0
// for(var i=0;i<a.length;i++)
// {
//     b+=a[i]
//     console.log(b)
// }
// console.log(b)

// var a=[1,2,3,4,22,0,11,33,66]
// var b=0
// for(var i=0;i<a.length;i++)
// {
//     if(a[i]==0)
//     {
//         break
//     }
//     else
//     {
//         b+=a[i]
//         console.log(b)
//     }
    
// }
// console.log(b)
// a='786573'
// b=a.toString()
// console.log(a.length)
// a=786573
// console.log(typeof(a))
//5
// a={
//     1:"Sunday",
//     2:"Monday",
//     3:"Tuesday",
//     4:"Wednesday",
//     5:"Thursday",
//     6:"Friday",
//     7:"Saturday"
//   }
// console.log(a[1])


// a=60
// b=[]
// for(i=0;i<=a;i++)
// {
//   if(i%2==0)
//   {
//     b.push(i)
//   }
// }
// console.log(b);

pre=0;
sum=0
for(i=1;i<=10;i++)
{
    sum+=i
    console.log(pre,i,sum)
    pre=sum
}