const form = document.querySelector(".todo-form"),
  input = document.querySelector(".todo-input"),
  todoList = document.getElementById("todo"),
  doingList = document.getElementById("doing"),
  doneList = document.getElementById("done");

let toDos = [];
var dragged;

function persistToDos() {
  const stringToDo = JSON.stringify(toDos);
  localStorage.setItem("toDos", stringToDo);
}

function saveToDo(id, text, status) {
  const toDo = {
    id: id,
    value: text,
    status: status
  };
  toDos.push(toDo);
  persistToDos();
}

function handleDelete(event) {
  const target = event.target;
  const li = target.parentElement;
  const ul = li.parentElement;
  const toDoId = li.id;
  ul.removeChild(li);
  toDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(toDoId);
  });
  persistToDos();
}

function addToDo(id, text, status) {
  const toDo = document.createElement("li");
  toDo.className = "toDo";
  if (id === null) {
    if (toDos.length === 0) {
      id = 1;
      toDo.id = id;
    } else {
      id = toDos[toDos.length - 1].id + 1;
      toDo.id = id;
    }
  }
  toDo.setAttribute("draggable", "true");
  toDo.setAttribute("aria-grabbed", "false");
  toDo.setAttribute("tabindex", toDo.id);
  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = " ❎ ";
  deleteBtn.className = "toDo__button";
  deleteBtn.addEventListener("click", handleDelete);
  const label = document.createElement("label");
  label.innerHTML = text;
  toDo.appendChild(label);
  toDo.appendChild(deleteBtn);
  if (status === "todo") todoList.querySelector("ul").appendChild(toDo);
  if (status === "doing") doingList.querySelector("ul").appendChild(toDo);
  if (status === "done") doneList.querySelector("ul").appendChild(toDo);
  saveToDo(id, text, status);
}

function moveToDo(dragged, dropped) {
  var index = 0;
  var toDoValue = null;
  for (let i = 0; i < toDos.length; i++) {
    if (parseInt(toDos[i].id) === parseInt(dragged.id)) {
      toDoValue = {
        id: toDos[i].id,
        value: toDos[i].value,
        status: dropped.target.id
      };
      index = i;
    }
  }
  toDos.splice(index, 1, toDoValue);
  persistToDos();
  dragged.parentNode.removeChild(dragged);
  dropped.target.querySelector("ul.js-list").appendChild(dragged);
}

function onSubmit(event) {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  addToDo(null, value, "todo");
}

function loadToDos() {
  const loadedToDos = localStorage.getItem("toDos");
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      addToDo(toDo.id, toDo.value, toDo.status);
    });
  }
  return;
}

function init() {
  loadToDos();
}

form.addEventListener("submit", onSubmit);

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {}, false);

document.addEventListener(
  "dragstart",
  function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = 0.5;
  },
  false
);

document.addEventListener(
  "dragend",
  function(event) {
    // reset the transparency
    event.target.style.opacity = 1;
  },
  false
);

/* events fired on the drop targets */
document.addEventListener(
  "dragover",
  function(event) {
    // prevent default to allow drop
    event.preventDefault();
  },
  false
);

document.addEventListener(
  "dragenter",
  function(event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "todo-section") {
      event.target.style.opacity = 0.5;
    }
  },
  false
);

document.addEventListener(
  "dragleave",
  function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "todo-section") {
      event.target.style.opacity = 1;
    }
  },
  false
);

document.addEventListener(
  "drop",
  function(dropped) {
    // prevent default action (open as link for some elements)
    dropped.preventDefault();
    // move dragged elem to the selected drop target
    if (dropped.target.className == "todo-section") {
      dropped.target.style.opacity = 1;
      moveToDo(dragged, dropped);
    }
  },
  false
);

init();
