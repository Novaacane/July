console.log("question 1");
let M = parseInt(prompt("Enter your marks out of 50:"));
let grade;

if (M < 0 || M > 50) {
    grade = "Invalid marks";
}
else {
    switch (true) {
        case (M >= 0 && M <= 10):
            grade = "E";
            break;
        case (M >= 11 && M <= 20):
            grade = "D";
            break;
        case (M >= 21 && M <= 30):
            grade = "C";
            break;
        case (M >= 31 && M <= 40):
            grade = "B";
            break;
        case (M >= 41 && M <= 50):
            grade = "A";
            break;
        default:
            grade = "Invalid marks";
    }
    console.log("your grade is : "+ grade);
}
console.log("Question 2");
var C=prompt("enter the character");
    let value;
    switch (C) {
        case ('p'||'P'):
            value = 'PrepBytes';
            break;
            case ('z'||'Z'):
            value = 'Zenith';
            break;
            case ('e'||'E'):
            value = 'Expert Coder';
            break;
            case ('d'||'D'):
            value = 'Data Structure';
            break;
        default:
            value = 'Invalid character';
    }
console.log(value);
console.log("Question 3");
let a = parseInt(prompt("Enter the first number"));
let b = parseInt(prompt("Enter the second number"));
let c = parseInt(prompt("Enter the third number"));
if(a==b==c){
    console.log("-1-1");
}
else{
    console.log((a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c));
}
console.log("Question 4");
let x = parseInt(prompt("Enter the first number"));
let y = parseInt(prompt("Enter the second number"));
let z = parseInt(prompt("Enter the third number"));
if ((x< y && y < z) || (z < y && y < x)) {
    console.log(y);
} else if ((y < x && x < z) || (z < x && x < y)) {
    console.log(x);
} else {
    console.log(z);
}
console.log("Question 5");
let p = parseInt(prompt("Enter the first angle"));
let q = parseInt(prompt("Enter the second angle"));
let r= parseInt(prompt("Enter the third angle"));
if(p>90||q>90||r>90){
    console.log("TRIANGLE is Obtuse");
}
else if(p<=90&&q<=90&&r<=90){
    console.log("TRIANGLE is Acute");
}