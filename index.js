// // 1- Write a program that allow to user enter number then printit

// var num= Number( window.prompt("Enter a number"))
// console.log( "You Enterd "+num)

/* 2- Write a program that take number from user then print yes if that number can divide by 3
and 4 otherwise print no */

// var three= Number (window.prompt("enter a number can be divided by 3 and 4"))
// if (three % 3 == 0 && three % 4 == 0 )  {console.log("Yes")
// }
// else {console.log("No")
// }

/*
3- Write a program that allows the user to insert 2 integers then print the max  
*/
// var fNum = Number(window.prompt("enter first number"))
// var sNum = Number (window.prompt("enter second number"))
// if (fNum > sNum) {console.log("Max :"+ fNum)}
//  else { console.log( "Max: "+ sNum)

// }

/*4- Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive.*/

// var Num = Number(window.prompt("enter a number"))
// if (Num < 0) {console.log(Num +": Negative")}
//  else { console.log(Num +": positive")}

/*5- Write a program that take 3 integers from user then print the max element
and the min element.*/

// var fNum = Number(window.prompt("enter first number"))
// var sNum = Number (window.prompt("enter second number"))
// var tNum = Number (window.prompt("enter third number"))


// var fNum = Number(window.prompt("enter first number"))
// var sNum = Number (window.prompt("enter second number"))
// var tNum = Number (window.prompt("enter third number"))

// if (fNum >= sNum && fNum >= tNum) {console.log("Max :"+ fNum)}
// else if (sNum >= tNum && sNum >= fNum) {console.log("Max :"+ sNum)}
// else if (tNum >= fNum && tNum >= sNum) {console.log("Max :"+ tNum)}
// if (fNum <= sNum && fNum <= tNum) {console.log("Min :"+ fNum)}
// else if (sNum <= tNum && sNum <= fNum) {console.log("Min :"+ sNum)}
// else if (tNum <= fNum && tNum <= sNum) {console.log("Min :"+ tNum)}

/*6- Write a program that allows the user to insert integer number then
check If a number is oven or odd*/

// var num= Number (window.prompt("enter a number "))
// if (num % 2 == 1 && num  !== 0 )  {console.log("odd")
// }
// else {console.log("even")
// }

/*
8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
then print vowel otherwise print consonant
*/
// var char = String(window.prompt("enter a character"))
// if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" || char == "I" || char == "O" || char == "U" )
// {console.log ("Vowel")}

// else { console.log ("Consonant")

// }
/* 9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to
that’s number*/
// var int = Number (window.prompt("Enter a number"))
// for(i=1;i <= int ;i++) {
//     console.log(i)
// }

/*
10- Write a program that allows userto insert integerthen print a multiplication table up to 12. */
// var int = Number (window.prompt("Enter a number"))
// for(i=1 ;i <= 12 ;i++) {
//     console.log(int +" * "+i+" = "+i*int)
// }

/*
11- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers
between 1 to this number
 */

// var int = Number (window.prompt("Enter a number"))
// for( i=0 ; i<= int ; i+=2) {
//     console.log(i)
// }

//12- Write a program that take two integers then print the power

// var fNum = Number(window.prompt("enter first number"))
// var sNum = Number (window.prompt("enter second number"))
// console.log(fNum**sNum)

//12- Write aprogram that take two integers then print the power #2

// var fNum = Number(window.prompt("enter first number"))
// var p_num = Number (window.prompt("enter power number"))
// var power = fNum*fNum
// if (p_num == 0) {console.log(fNum+" ^ 0 = "+1)  
// }
// else if (p_num == 1){console.log(fNum +" ^ 1 = "+fNum)}

// else if(p_num<0){ power = fNum/fNum;
// for (let index = 0; index !== p_num; index--) {
// power=(power/fNum);

// }
// console.log(fNum+" ^ "+p_num+" = "+power);}
// else{for (let index = 2; index !== p_num; index++) {
//   power=(power*fNum);
    
// }
// console.log(fNum+" ^ "+p_num+" = "+power);}




/*
12- Write a program to enter marks of five subjects and calculate total, average and
percentage.
 */
// var mark_1 = Number(window.prompt("enter subject-1 mark"))
// var mark_2 = Number(window.prompt("enter subject-2 mark"))
// var mark_3 = Number(window.prompt("enter subject-3 mark"))
// var mark_4 = Number(window.prompt("enter subject-4 mark"))
// var mark_5 = Number(window.prompt("enter subject-5 mark"))
// var sum = mark_1+mark_2+mark_3+mark_4+mark_5
// var avg =sum/5
// var percentage = sum/500*100
// console.log ("Total Marks:" + " "+sum )
// console.log ("Average Marks:" + " "+avg )
// console.log ("Percentage:" + " "+percentage+"%" )

/*
13-Write a program to input month number and print number of days in that
month.
*/
// var monthNumber = Number(window.prompt("Enter month number"))
// if (monthNumber==4 || monthNumber==6 || monthNumber==9 || monthNumber==11) {console.log("30 Days")}
//  else if (monthNumber==2) {console.log("28~29 Days")}
//  else {console.log ("31 Dys")}
/*

14- Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade
*/
// var mark_1 = Number(window.prompt("enter Chemistry mark"))
// var mark_2 = Number(window.prompt("enter Biology mark"))
// var mark_3 = Number(window.prompt("enter Physics mark"))
// var mark_4 = Number(window.prompt("enter Mathematics mark"))
// var mark_5 = Number(window.prompt("enter Computer mark"))
// var sum = mark_1+mark_2+mark_3+mark_4+mark_5
// var percentage = sum/500*100
// console.log ("Percentage:" + " "+percentage+"%" )

// if (percentage >= 90) {console.log("Grade: A")}
// else if (percentage >= 80) {console.log("Grade: B")}
// else if (percentage >= 70) {console.log("Grade: C")}
// else if (percentage >= 60) {console.log("Grade: D")}
// else if (percentage >= 50) {console.log("Grade: E")}
// else if (percentage >= 40) {console.log("Grade: F")}

/* ******************************** Using switch case******************************* */
// 15- Write a program to print total number of days in month

// var monthNumber = Number(window.prompt("Enter month number"));

// switch (monthNumber)

//  {
//     case 4 :
//     case 6 :
//     case 9:
//     case 11:
//     console.log("30 Days")
//         break;
//     case 2:
//     console.log("28~29 Days")
//         break;

//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//     console.log("31 Days")
//         break;
// }
//  16- Write a program to check whether an alphabet is vowel or consonant
// var char = String(window.prompt("Enter a letter"));

// switch (char)

//  {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//     console.log("vowel")
//         break;

//     default:console.log("consonant")
//         break;
// }

//  17- Write a program to find maximum between two numbers
// var fNum = Number(window.prompt("enter first number"));
// var sNum = Number(window.prompt("enter second number"));
// var diff = fNum - sNum;

// switch (fNum > sNum) {
//   case true:
//     console.log("Max :" + fNum);
//     break;
//   case false:
//     console.log("Max :" + sNum);
//     break;

// }

//18- Write a program to check whether a number is even or odd

// var num = Number(window.prompt("enter a number"))
// switch (num%2==0 ) {
//     case true:
//         console.log("even")

//         break;

//     default:console.log("odd")
//         break;
// }
//19- Write a program to check whether a number is positive or negative or zero
// var num = Number(window.prompt("enter a number"));
// switch (num < 0) {
//   case true:
//     console.log("negative");
//     break;

//   default:
//     console.log("positive");
//     break;
// }

// 20- Write a program to create Simple Calculator

// var fNum = Number(window.prompt("enter first number"))

// var operator = (window.prompt("enter operator [ + ] [ - ] [ / ] [ * ] [ ^ ]"))

// var sNum = Number (window.prompt("enter second number"))
// switch (operator) {
//     case "+":
//         console.log(fNum +"+"+sNum)
//         console.log(fNum+sNum)
//         break;
//     case "-":
//         console.log(fNum +"-"+sNum)
//         console.log(fNum-sNum)
//         break;
//     case "*":
//         console.log(fNum +"*"+sNum)
//         console.log(fNum*sNum)
//         break;
//     case "/":
//         console.log(fNum +"/"+sNum)
//         console.log(fNum/sNum)
//         break;
//     case "^":
//         console.log(fNum +"^"+sNum)
//         console.log(fNum**sNum)
//         break;
// }
