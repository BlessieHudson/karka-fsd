//1)Write a function that takes an array of integers as input and prints the elements of the array in
// reverse order without using any inbuilt functions

// a=[20,89,39,664]
// for(var i=a.length-1;i>=0;i--)
// {
//     console.log(a[i])
// }

// 2)Write a function to remove duplicate elements from an array without using inbuilt functions.
// var a=[1,1,2,2,3,3,44,66,44]
// var b=[]
// function remdup(a)
// {
// for(i=0;i<a.length;i++)
// {
//     if(b.indexOf(a[i])==-1)
//     {
//         b.push(a[i])
//     }
// }
// return b
// }
// console.log(remdup(a))

// for(var i=0;i<a.length;i++)
// {
//     var duplicate=false;
//     for(var j=0;j<=b.length;j++)
//     {
//         if(a[i]==b[j])
//         {
//             duplicate=true;
//         }
//     }
//     if(duplicate==false)
//     {
//         b.push(a[i])
//     }
// }
// console.log(b)

// 4)Write a function that takes two arrays as input and returns a new array containing the sum of corresponding elements.

// a=[1,2,3]
// b=[11,12,13]
// c=[]
// for(i=0;i<a.length;i++)
// {
//     c.push(a[i]+b[i])    
// }
// console.log(c)

// 5)Write a function to find the maximum difference between any two elements in an array

// a=[20,4,8,90,67]
// min=a[0]
// max=a[0]
// for(var i=0;i<a.length;i++)
// {
//     if(a[i]<min)
//     {
//         min=a[i]
//     }
//     if(a[i]>max)
//     {
//         max=a[i]
//     }
// }
// console.log(max-min)
//6)Write a function to move all zeros in an array to the end without changing the order of
// non-zero elements.
// a=[1,2,0,0,3,0,8]
// b=[]
// for(var i=0;i<a.length;i++)
// {
//     for (j=0;j<a.length;j++){
//         if(a[i]==0)
//     {
//         a.splice(i,1)
//         a.push(0)
//     }
//     }
// }
// console.log(a)

// 7)Write a function that takes two arrays as input and returns an array containing their common
// elements without using inbuilt functions.
// a=[2,4,6]
// b=[6,2,5]
// c=[]
// for(var i=0;i<a.length;i++)
// {
//     for(var j=0;j<b.length;j++)
//     {
//         if(a[i]==b[j])
//         c.push(a[i])
//     }
// }
// console.log(c)


// 9)Write a function to remove a specific element from an array. The function should modify the
// original array in place

// a=[4,6,7,8]
// b=7
// c=[]
// for(var i=0;i<a.length;i++)
// {
//     if(a[i]!=b)
//     {
//         c.push(a[i])
//     }
// }
// console.log(c)
a=[4,6,7,8]
b=7
c=[]
for(var i=0;i<a.length;i++)
{
    if(a[i]==b)
    {
        a.splice(i,1)
    }
}
console.log(a)