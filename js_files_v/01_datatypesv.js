// console.log("Vinayak");
// document.write("<p> This is the paragraph</p>");

// literals are classified into
// literals-numbers,characters,strings
// 1)(i). Integers console.log(10); size: 4-bytes
//   (ii). Decimal console.log(2.4); size: 4-bytes
// 2). Character console.log('a'); size: 2-bytes
// 3). String console.log("Vinayak"); size: undefined (no of char*2)bytes
// console.log("4261892");
// console.log("@#$%718");
// 4) Boolean Statements
//    i)console.log(true); 
//   ii)console.log(false);

// console.log(typeof(2.5));
// console.log(typeof(15));
// console.log(typeof('a'));
// console.log(typeof("abcd"));

// ascii
// A - 65
// B - 66
// c - 67
// a - 97
// b - 98

/*
ASCII Table    American Standard Code for Information Interchange
Dec  = Decimal Value
Char = Character

'5' has the int value 53
if we write '5'-'0' it evaluates to 53-48, or the int 5
if we write char c = 'B'+32; then c stores 'b'


Dec  Char                           Dec  Char     Dec  Char     Dec  Char
---------                           ---------     ---------     ----------
  0  NUL (null)                      32  SPACE     64  @         96  `
  1  SOH (start of heading)          33  !         65  A         97  a
  2  STX (start of text)             34  "         66  B         98  b
  3  ETX (end of text)               35  #         67  C         99  c
  4  EOT (end of transmission)       36  $         68  D        100  d
  5  ENQ (enquiry)                   37  %         69  E        101  e
  6  ACK (acknowledge)               38  &         70  F        102  f
  7  BEL (bell)                      39  '         71  G        103  g
  8  BS  (backspace)                 40  (         72  H        104  h
  9  TAB (horizontal tab)            41  )         73  I        105  i
 10  LF  (NL line feed, new line)    42  *         74  J        106  j
 11  VT  (vertical tab)              43  +         75  K        107  k
 12  FF  (NP form feed, new page)    44  ,         76  L        108  l
 13  CR  (carriage return)           45  -         77  M        109  m
 14  SO  (shift out)                 46  .         78  N        110  n
 15  SI  (shift in)                  47  /         79  O        111  o
 16  DLE (data link escape)          48  0         80  P        112  p
 17  DC1 (device control 1)          49  1         81  Q        113  q
 18  DC2 (device control 2)          50  2         82  R        114  r
 19  DC3 (device control 3)          51  3         83  S        115  s
 20  DC4 (device control 4)          52  4         84  T        116  t
 21  NAK (negative acknowledge)      53  5         85  U        117  u
 22  SYN (synchronous idle)          54  6         86  V        118  v
 23  ETB (end of trans. block)       55  7         87  W        119  w
 24  CAN (cancel)                    56  8         88  X        120  x
 25  EM  (end of medium)             57  9         89  Y        121  y
 26  SUB (substitute)                58  :         90  Z        122  z
 27  ESC (escape)                    59  ;         91  [        123  {
 28  FS  (file separator)            60  <         92  \        124  |
 29  GS  (group separator)           61  =         93  ]        125  }
 30  RS  (record separator)          62  >         94  ^        126  ~
 31  US  (unit separator)            63  ?         95  _        127  DEL
*/


// varaibles :-  named memory locations. which can store any values. 

// variable declartion,  
// let , var, const.

// let a=30;
// console.log(a);
// let variable declaration will allow only once to assign a value to a same variable.
// let b=50
// console.log(a);

// var a=10;
// console.log(a);
// var lets us assign different values to same variable name and the latest updated value will be displayed if printed
// a=50;
// console.log(a);


// const pi=3.14;
// console.log(pi);

// operators. 
// + , - , * , / ,  % 
// var a = 7; 
// var b = 2; 

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// // relational operators. 

// //  >  <  <= >=  !=     ==    ===    = 

//  console.log(a < b); // boolean
//  console.log(b < a); // boolean
//  console.log(a == b); // boolean
//  console.log(a === b); // boolean

// var a = 10; 
//  var b = "10"

//  console.log(a == b);  // true
//  console.log(a === b); // false

 //  how to concatinate different datatypes in javascript. 

//   var a = 10; 
//   var b = 20;
//   console.log(a+b);
//   console.log("The Sum of a and b is:"+ (a+b));
//   console.log("The Sum of a and b is:",(a+b));
//   console.log(`The Sum of a and b is: ${a+b}`);
//   console.log(`The Sum of ${a} and ${b} is:${a+b} `);



 // javascript inbuilt functions. 
//  alert("Press ok to continue"); This shows a notification on the website with ok button
// confirm("Do you want to proceed?");this shows a notification and two buttons ok and cancel
// var username = prompt("Enter your username");
// console.log(`Hello ${username}`);
// document.write(`Hello ${username}`);


// conditionals statments. 
// if, if-else, if - else if - else, switch case, break , continue

// let username = prompt("enter your username");

//  if (username === "vinayak")
//  {
//    console.log("access granted.");
//  }

//  else if (username === "raj")
//  {
//    console.log("access granted.");
//  }

 
let username = prompt("enter your username");

 switch(username)
 {
     case "raj" : {
        console.log("access granted");
        break;
     }

     case "vinayak" : {
         console.log("access granted");
         break;
      }

      case "kentappa" : {
         console.log("access granted");
         break;
      }

      default:
//         {
//             console.log("Access denied");
//         }
// }
