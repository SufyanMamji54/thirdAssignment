var user = prompt("Enter Karachi")

if(user == "Karachi"){
    alert("Welcome to City of Lights")
}
else{
    alert("Enter Karachi for Message")
}


var gender = prompt("Input Your Gender");

if (gender == "male"){
    alert("Good Morning Sir")
}
else{
    if(gender == "female"){
        alert("Good Morning Ma'am")
    }
    else{
    alert("Input correct gender")
    }
}

var traffic_signal_color = prompt("Enter Signal Color");

if(traffic_signal_color == "Red"){
    alert("Must Stop")
}
if(traffic_signal_color == "Yellow"){
    alert("Ready to move")
}
if(traffic_signal_color == "Green"){
    alert("Move now")
}

var car_fuel = prompt("Input Remaining Fuel")

if(car_fuel == "0.25litres"){
    alert("Please refill the fuel in your car")
}else{
    alert("Don't Refill the fuel")
}


var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
else{
    alert(" Message would not be displayed")
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
else{
    alert(" Message would not be displayed")
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
else{
    alert(" Message would not be displayed")
}
if (c === 13){
    alert("condition 2 is true");
}
else{
    alert(" Message would not be displayed")
}
if (++c < 14){
    alert("condition 3 is true");
}
else{
    alert(" Message would not be displayed")
}
if(c === 14){
    alert("condition 4 is true");
}
else{
    alert(" Message would not be displayed")
}

var material_cost = 20000;
var labor_cost = 2000;
var total_cost = labor_cost+material_cost;

if(total_cost == labor_cost+material_cost){
    alert("The Cost Equals");
}
document.write("<br>");
document.write("<br>");
document.write("MARKS SHEET:");
document.write("<br>");

var eng_marks = +prompt("Enter English Marks");
var maths_marks = +prompt("Enter Maths Marks");
var urdu_marks = +prompt("Enter Urdu Marks");
var total_no = eng_marks + maths_marks + urdu_marks;
var total_marks$ = 300;
var per = 100;

document.write("<br>");
document.write(eng_marks);
document.write("<br>");

document.write(maths_marks);
document.write("<br>");

document.write(urdu_marks);
document.write("<br>");

document.write(total_no);
document.write("<br>");

document.write("Total Marks:"+total_marks$);
document.write("<br>");
document.write("Marks Obtained:"+total_no);
document.write("<br>");

document.write("Percentage:"+total_no/total_marks$*100+"%");
document.write("<br>");

if(per => 80){
    document.write("Grade A-one");
    document.write("<br>");
    document.write("Remark:Excellent");
}
else if(per => 70){
    document.write("Grade A");
    document.write("<br>");
    document.write("Remark:Good");
}
else if(per => 60){
    document.write("Grade B");
    document.write("<br>");
    document.write("Remark:You need to improve");
}
else if(per < 60){
    document.write("Grade Fail")
    document.write("<br>");
    document.write("Remark:Sorry");
}
document.write("<br>");
document.write("<br>");

document.write("GUESS GAME:");
document.write("<br>");

var secret_number = 7;
var guess_number = prompt("Guess the Secret Number");

if(guess_number == secret_number){
     alert("Bingo! Correct Answer");
}
else if(guess_number == secret_number+1){
    alert("CLose enough to the correct answer");
}
else{
    alert("Bad Luck");
}

var divisible_no = prompt("Input Any Number here!")

if(divisible_no % 3 == 0){
    alert("This No. Is Divisible by 3");
}
else{
    alert("This No. is not Divisible by 3");
}


var T = prompt("Input Temperature");

if(T > 40){
    alert("It is too hot outside.");
}
if(T > 30){
    alert("The Weather today is Normal.");
}
if(T > 20){
    alert("Today’s Weather is cool.");
}
if(T > 10){
    alert("OMG! Today’s Weather is cool.");
}
else{
    alert("Plzz! Input Correct Temperature");
}

var number1 = +prompt("Enter 1st value");
var number2 = +prompt("Enter 2nd value");
var operator = prompt("Enter Operator","+, -, * or /");

if(operator == "+"){
    alert(number1+number2);
}else if(operator == "-"){
    alert(number1 - number2);
}else if(operator == "*"){
    alert(number1 * number2)
}else if(operator == "/"){
    alert(number1/number2)
}
else{
    alert("Input Correct Operators");
}