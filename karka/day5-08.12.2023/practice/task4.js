//Write a program to iterate the first 10 numbers, and in each iteration, print the sum of the current and previous number.
// prev_num=0;
// for(var i=1;i<=10;i++)
// {
//     cur_num=i;
//     sum=cur_num+prev_num;
//     console.log(cur_num,prev_num,sum);
//     prev_num=sum;
// }
// l=[1,2,3,4,5]
// pre=0;
// sum=0;
// for(i=0;i<l.length;i++)
// {
//     sum+=l[i]
//     console.log(pre,sum)
//     pre=sum
// }
// pre=0;
// sum=0
// for(i=1;i<=10;i++)
// {
//     sum+=i
//     console.log(pre,i,sum)
//     pre=sum
// }
// Check if the first and last number of a list is the same
// Example : Given list: [10, 20, 30, 40, 10] 
// a=[10,20,30,40,10]
// // for(i=0;i<a.length;i++)
// if(a[0]==a[a.length-1])
// {
//     console.log("true")
// }
// else{
//     console.log("false")
 
// }
// a=[10,20,30,40,10]
// b=a.length
// console.log(b)
// // for(i=0;i<a.length;i++)
//     if(a[0]==a[b-1])
//     {
//         console.log("true")
//     }
//     else
//     {
//          console.log("false")
    
//     }

//Iterate the given list of numbers and print only those numbers which are divisible by 5
// for(var i=1;i<=100;i++)
// {
//     if(i%5==0)
//     {
//         console.log(i)
//     }
// }
//Write a program to check whether the given charactor is vowel or consonent.
// var a='i'
// b=['a','e','i','o','u']
// for(var i=0;i<b.length;i++)
// {
//     if(a==b[i])
//     {
//     console.log("its a vowel")
//     }

//     else
//     {
//     console.log("its not a vowel")
//     }
// }
//Write a program to count the occurence of even numbers and odd numbers between the range 10 – 55.
// var even=[]
// var odd=[]
// for(var i=10;i<=55;i++)
// {
//     if(i%2==0)
//     {
//         even.push(i)
//     }
//     else
//     {
//         odd.push(i)
//     }
// }
// console.log(even)
// console.log(odd)
// console.log("Even count=",even.length)
// console.log("Odd count=",odd.length)
//Write a program in Python to sort 3 numbers without using loops or conditional statements.
// a=[2,1,8]
// b=a.sort()
// console.log(b)
//Write a program in Python to print numbers ranging from 1 to 25 but excluding numbers which are the multiples of 5.
// for(var i=1;i<=25;i++)
// {
//     if(i%5!=0)
//     {
//         console.log(i)
//     }
// }
//Write a program in Python to count the occurrence of a specific value in a list.
// Input:  a = [1,3,3,4,3,2,3], n: 3 
// a = [1,3,3,4,3,2,3]
// b=[]
// for(i=0;i<=a.length;i++)
// {
// if(a[i]==3)
// {
//     b.push(a[i])
// }

// }
// console.log(b.length)
// a = [1,3,3,4,3,2,3]
// b=3
// count=0
// for(var i=0;i<=a.length;i++)
// {
//     if(a[i]==b)
//     {
//         count=count+1
//     }
// }
// console.log(count)
//Write a program in Python to count the occurrence of a specific word in a string.
//Input:   string_ = “Adam is a boy and Adam loves to play cricket.”, key: “Adam” Output: 2 (Adam occurs 2 times)
// a="Adam is a boy and Adam loves to play cricket"
// b=a.split(" ")
// c="Adam"
// var count=0
// for(var i=0;i<b.length;i++)
// {
//     if(b[i]==c)
//     {
//         count=count+1
//     }
// }
// console.log(count)
//Given two integer numbers return their product. If the product is greater than 500, then return their sum.
// var a=5,b=150,c=a*b
// if(c>=500)
// {
//     console.log(a+b)
// }
// else
// {
//     console.log("gdsjh")
// }
// Write a program to print the greatest of two numbers.
// var a=5,b=10
// if(a>b)
// {
//     console.log("a is greater")

// }
// else{
//     console.log("b is greater")
// }
//Write a program to print the greatest of three numbers
var a=35,b=100,c=20
// if(a>b && a>c){
//     console.log("a is greater")
// }

// else if(b>a && b>c)
// {
//     console.log("b is greater")
// }
// else{
//     console.log("c is greater")
// }
//Write a program to separate positive and negative numbers from a list.
//	Input:  Given x = [23, 4, -6, 23, -9, 21, 3, -45, -8]
  //  Output:  Positive: [23, 4, 23, 21, 3], Negative: [-6, -45, -9, -8]

// x = [23, 4, -6, 23, -9, 21, 3, -45, -8]
// var positive=[],negative=[]
// for(var i=0;i<x.length;i++)
// {
//   if(x[i]>0)
//   {
//     positive.push(x[i])

//   }
//   else if(x[i]<0)
//   {
//     negative.push(x[i] 
//   }
//   else
//   {
//     console.log("Zero is neither positive nor negative.")
//   }
// }
// console.log("The positive numbers are: ",positive)
// console.log("The Negative numbers are: ",negative)
//Write a program to get the maximum number from a list.
// x=[200,120,500,590,260]
// var max=0;
// for(var i=0;i<x.length;i++)
// {
//   if(x[i]>max)
//   {
//     max=x[i]
//   }
// }
// console.log(max)
// const items = [1, 2, 3, 2, 3, 1, 5,7,7,7,7,7]

// const unique = [ ...new Set(items)]  
// const items = [1, 2, 3, 2, 3, 1, 5]
// const unique = Array.from(new Set(items)) 
// console.log(unique)z