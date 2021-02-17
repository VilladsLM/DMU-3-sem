// Tilføj kode for opgave 4.1 - 4.5 her!

//4.1
let p = document.querySelectorAll("p");
for (const key of p) {
  key.style.color = "red";
}

//4.2
let h1 = document.querySelectorAll("h1");
for (const key of h1) {
  key.nextElementSibling.nextElementSibling.style.color = "brown";
}

//4.3
let list = document.querySelectorAll("li");
id = 0;
for (const iterator of list) {
  if (id % 2 === 0) {
    iterator.style.backgroundColor = "Gray";
  }
  id++;
}

//4.4
let overskrift = document.querySelectorAll("h1, h2, h3, h4, h5");
for (const iterator of overskrift) {
  let data = iterator.nextElementSibling.innerHTML;
  iterator.nextElementSibling.outerHTML = "<h2>" + data;
}

//4.5
let anotherHeadlines = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
let count = 1;
for (const iterator of anotherHeadlines) {
  iterator.id = "id" + count;
  count++;
}

let body = document.querySelector("body");
for (let index = count - 1; index > 0; index--) {
  let node = document.createElement("a");
  node.href = "#id" + index;
  node.innerHTML = document.getElementById("id" + index).innerHTML + "<br>";
  body.insertBefore(node, body.firstChild);
}
