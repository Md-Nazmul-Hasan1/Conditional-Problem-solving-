/*

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

*/
let marks = 80 ; 
if ( marks >= 90 && marks <= 100 ){
    console.log('You got A , Which is good result . ')
}
else if ( marks >= 80 && marks <= 89 ){
     console.log( ' You got B in bangladeshi grading system . ');
}
else if ( marks >= 70 && marks <= 79 ){
  console.log('You got c. '); 
}
else if ( marks >= 60 && marks <= 69 ){
  console.log('You got D . ' )
}
else {
  console.log(' You failed in the exam. ')
}
