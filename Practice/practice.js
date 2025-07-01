document.querySelector('.notice').innerHTML="This is an important notice";
document.querySelector('.notice').style.backgroundColor = "lightyellow";

const m=document.getElementsByClassName('message');
for(let i=0;i<m.length;i++){
    m[i].append(" - Updated");
}
m[1].style.fontStyle="italic";

const l=document.querySelector("ul");
l.insertAdjacentHTML("beforeend","<li>New Item</li>")
l.removeChild(l.children[1]);

const b=document.getElementById("clickBtn");
b.onclick = function() {
    b.innerText="Clicked!";
    b.style.backgroundColor="green";
}

const mb=document.getElementById("mainBox");
mb.insertAdjacentHTML("beforebegin","<h2>Its a heading</h2>");
mb.insertAdjacentHTML("afterbegin","<p>This is inside the box</p>");