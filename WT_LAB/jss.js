/*let a;
a=89;
console.log(typeof a);
a=String(a);
console.log(typeof a);
*/

/*
let classid;
classid=window.prompt("Enter your ID");
document.writeln("The input id is ", classid);
classid=Number(classid);
classid += 2;
console.log(classid)
*/
/*
document.getElementById("btn").onclick=function(){
    let username;
    username=document.getElementById("user").value;
    console.log(username);
    document.getElementById("greet").innerHTML="<h1>Hello "+username + ",</h1>";
}

let number;
number=window.prompt("Enter a Number: ");
number=Number(number);
if(isNaN(number)){
    console.log("Enter a valid number");
}else if(number>0){
    console.log("The Number is greater than 0");
} else if(number<0){
    console.log("The Number is smaller than 0");
} else{
    console.log("The Number is 0");
}

let count;
count=1;
while(count<=5){
    console.log(count);
    count++;
}*/

const guess=7;
let input,attempt=1;
input=Number(input);
input=window.prompt("Guess the number");
while(input!=guess){
    attempt++;
    if(isNaN(input)){
        console.log("Enter a valid guess");
    }else if(input>guess){
        console.log("The guessed number is greater than the secret number");
    }else if (input<guess){
        console.log("The guessed number is smaller than the secret number");
    }
    input=window.prompt("Guess the number");
}
console.log("Congrats! You guessed the number right.");
console.log("You took",attempt, "attempts.");

let i;
const food = ["Beef", "Fried Rice", "Fish Fry", "Burger"];
let len=food.length;
let text="";
for(i=0;i<len;i++){
  text+=food[i]+"<br>";
}

for(i of food){
    text+=i+", ";
}

document.getElementById("loop").innerHTML=text;
