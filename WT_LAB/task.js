const info = document.getElementById("info");
info.innerText = "I love Javascript";
info.style.color = "red";

const box = document.getElementsByClassName("box");
box.className = "highlight";
console.log(box.className);

const card=document.getElementsByClassName("card");
for(let i=0;i<card.length;i++){
    card[i].style.border="solid 1px black";
}
card[0].style.backgroundColor="Gray";

const child1=document.querySelectorAll("li");
child1[0].innerText="First Item";
child1[2].innerText="Last Item";

const table=document.querySelector("table");
table.after("The table is shown above");
table.insertAdjacentHTML("afterbegin","<tr><td>New Row</td></tr>");

const mid = document.querySelector(".middle");
mid.previousElementSibling.style.color = "blue";
mid.nextElementSibling.style.color = "green";

const radio = document.getElementsByName("Gender");
for (let i = 0; i < radio.length; i++) {
    radio[i].onclick = function() {
        console.log("Selected gender:", this.value);
    };
}



