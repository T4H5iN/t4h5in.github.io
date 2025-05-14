const info=document.getElementById("info");
info.innerText="This is a paragraph";
info.style.color="blue";

const box=document.getElementsByClassName("box");
box.classname="highlight";
console.log(box);

const card=document.getElementsByClassName("card");
for(let i=0;i<card.length;i++){
    card[i].style.border="solid 1px red";
}
card[0].style.backgroundColor="Gray";

const child1=document.querySelectorAll("li");
child1[0].innerText="First Item";
child1[2].innerText="Last Item";

const table=document.querySelector("table");
table.after("The table is above");
table.insertAdjacentHTML("afterbegin","<tr><td>Row 0</td></tr>");
