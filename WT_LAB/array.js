const array=["A","B","C","D","E"];
const arr=["G","H","I"];
array.push("F");
array.pop();
array.unshift("Z");
array.shift();
const concat=array.concat(arr);
let text="";
for(let i=0;i<array.length;i++){
    text+=array[i]+"<br>";
}
document.getElementById("a").innerHTML=text;
document.getElementById("b").innerHTML=concat;