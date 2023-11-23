let input = document.querySelector("#todo-input");
let button = document.querySelector("#add");
let ol = document.querySelector("#todo-list");
let error = document.querySelector("#error");

// by using enter 
input.addEventListener("keyup",function(event){
if (event.key == "Enter") {

 let value = input.value;

 if (value == "") {
  error.style.color = "black";
  error.style.fontWeight = "bold";
  error.innerHTML = "Fill the Field";

 }
 else {
  error.innerHTML = "";

  let li = document.createElement("li");
  let li_content = document.createTextNode(value);

  li.appendChild(li_content);
  ol.appendChild(li);

  let removeBtn = document.createElement("button");
  let removeContent = document.createTextNode("x");
  // removeBtn.classList.add("remove");
  removeBtn.onclick = (() => {
   removeBTN(removeBtn)
  })
  removeBtn.appendChild(removeContent);

  li.appendChild(removeBtn)

input.value =""

 }
}

})




button.addEventListener("click", function () {
 let value = input.value;

 if (value == "") {
  error.style.color = "black";
  error.style.fontWeight = "bold";
  error.innerHTML = "Fill the Field";

 }
 else {
  error.innerHTML = "";

  let li = document.createElement("li");
  let li_content = document.createTextNode(value);

  li.appendChild(li_content);
  ol.appendChild(li);

  let removeBtn = document.createElement("button");
  let removeContent = document.createTextNode("x");
  // removeBtn.classList.add("remove");
  removeBtn.onclick = (() => {
   removeBTN(removeBtn)
  })
  removeBtn.appendChild(removeContent);

  li.appendChild(removeBtn)

input.value =""

 }

})
function removeBTN(a) {
  let parent = a.parentElement;
 
  parent.style.backgroundColor = "#4d91da";
  parent.style.color = "black";
  parent.style.transition = "opacity 2s ease-in-out";
 
  setTimeout(function () {
   parent.style.opacity = "0";
 
   setTimeout(function () {
    parent.remove();
   }, 1000)
 
    }, 1000)}