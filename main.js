"use strict";
const taskInput = document.querySelector(".task--input");
const taskAdder = document.querySelector(".task--adder");
const taskContainer = document.querySelector(".task--container");
let p = null;
taskAdder.addEventListener("click", function () {
  p = document.createElement("p");
  p.classList.add("task");
  p.innerText = taskInput.value;
  taskContainer.appendChild(p);
  taskInput.value = "";
  p.addEventListener("click", function () {
    p.style.textDecoration = "line-through";
  });
  p.addEventListener("dblclick", function () {
    taskContainer.removeChild(p);
  });
});
