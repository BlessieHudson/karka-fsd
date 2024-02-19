// function square(a)
// {
//     var a
//     var sq=a*a
//     return sq
// }
// result=square(5)
// console.log(result)

a=[100,50,300,500,150,20]
output=[1,3]
b=[]
c=[]
b.push(Math.max(...a))
for(var i=0;i<=a.length;i++)
{
    if(a[i]<=b[0] || a[i]==b[0])
    {
        c.push(a[i])

    }
}



console.log(b)
console.log(c)
const array = [100, 50, 300, 500, 150, 20];
let minIndex = 0;
let maxIndex = 0;

// Find the index of the minimum value in the specified range
for (let i = 0; i < array.length; i++) {
  if (array[i] < array[minIndex]) {
    minIndex = i;
  }
}

// Find the index of the maximum value in the specified range
for (let i = 0; i < array.length; i++) {
  if (array[i] > array[maxIndex]) {
    maxIndex = i;
  }
}

console.log(`Index of minimum value in the range: ${minIndex}`);
console.log(`Index of maximum value in the range: ${maxIndex}`);
