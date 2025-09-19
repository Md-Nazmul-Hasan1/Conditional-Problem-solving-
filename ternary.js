/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

let num1 = 3 ;
let num2 = 2 ; 
let result ; 
if ( num1 > num2){
  result = num1 * 2 ; 
  console.log('the value of two times of number 1 : ', result); 

}
else {
  result = num1 + num2 ; 
  console.log('the summation of number one and number 2 : ', result ); 
}

//using ternary operator .

result = (num1 > num2) ? (num1 * 2) : (num1 + num2); 
   
      console.log('the value of result : ', result); 
