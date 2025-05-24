let dom=document.getElementById("dom");
console.log(dom);

let name=document.getElementsByName("Gender");
console.log(name);

let head=document.getElementsByClassName("header");
console.log(head);

head.className="New Class";

let headhead=document.getElementsByTagName("h2");
console.log(headhead);

let para=document.querySelectorAll(".p1");
console.log(para);

let sec=document.querySelector(".sec");
console.log(sec);
console.log(sec.previousElementSibling);
console.log(sec.nextElementSibling);

let div=document.createElement("div");
div.innerHTML="<h1>The Heading inside div</h1>";
div.className="newHead";
div.id="nH";
console.log(div);

let item=document.createElement("li");
item.innerHTML="water";

let l=document.querySelector("ul");
l.appendChild(item)
console.log(l);

console.log(l.textContent);
console.log(l.innerText);
l.after("Next text");
l.insertAdjacentHTML("beforebegin","This is food");
l.insertAdjacentHTML("beforeend","<li>Pizza</li>");

let choc=document.getElementById("choc");
choc.remove();

let ps=document.getElementById("style");
console.log(ps.style);
console.log(ps.style.backgroundColor);

ps.style.padding="20px";
ps.style.cssText="font-size: 20px";