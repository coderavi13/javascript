

// switch statement
/* var a = prompt("Enter number ");
switch(a)
{
case '1':
console.log("one");
break;
case '2' :
console.log("Two");
break;
default:
console.log("Default"); */
//Function
 /* function calculateAge(yearOfBorn)
 {
     const age = 2018 - yearOfBorn;
     return age;
 }
 console.log(calculateAge(1991));

 //Ternary operator

 var isTeenAge = calculateAge(1991)<=18 ? 'Teen Age' : 'Adult';

 console.log(isTeenAge);

  */

  //Array
/*   var arr = ["ravi", "Nivangune", 10 ,true];

  console.log(arr[1]);
  arr.push(123);
  console.log(arr);
  arr.unshift(1);
  console.log(arr)

  console.log(arr.pop());
  console.log(arr);
  arr.shift();
  console.log(arr);
 */

 //********Object */
/* 
 var ravi ={

    name :'Ravi',
    yearOfBirth : 1991,
    city : 'Pune',

    calcAge :function()
    {
  this.age = 2018 - this.yearOfBirth;
    }
 }
 ravi.calcAge();

 console.log(ravi); */



 //////loops ************

/*  for (var i=1;i<10 ;i++)
 {
     console.log(i);
 } */

 var arr = [1,2,3,4,5,6,7," Ravi"];
var i=0;
 while(i<arr.length)
 {
    i++;
     if(typeof arr[i] !== 'string') continue;
     console.log(arr[i]);
     
 }

 console.log(typeof arr[7]);