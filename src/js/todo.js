const form = document.querySelector(".todo-form");
const input = document.querySelector(".todo-input");

let toDos = [];
let dragged;

function persistToDos() {
  const stringToDo = JSON.stringify(toDos);
  window.localStorage.setItem("toDos", stringToDo); // eslint-disable-line no-unused-vars
}

function saveToDo(index, text, status) {
  const toDo = {
    index: index,
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
  const toDoIndex = li.id;
  ul.removeChild(li);
  toDos = toDos.filter(function(toDo) {
    return toDo.index !== parseInt(toDoIndex);
  });
  persistToDos();
}

function addToDo(index, text, status) {
  const toDo = document.createElement("li");
  toDo.className = "toDo";
  if (index === null) {
    if (toDos.length === 0) {
      index = 1;
    } else {
      index = toDos[toDos.length - 1].index + 1;
    }
  }
  toDo.id = index;
  toDo.setAttribute("draggable", "true");
  toDo.setAttribute("aria-grabbed", "false");
  toDo.setAttribute("tabindex", index);
  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = " ❎ ";
  deleteBtn.className = "toDo__button";
  deleteBtn.addEventListener("click", handleDelete);
  const label = document.createElement("label");
  label.innerHTML = text;
  toDo.appendChild(label);
  toDo.appendChild(deleteBtn);
  const todoList = document.querySelector("#todo .js-list");
  const doingList = document.querySelector("#doing  .js-list");
  const doneList = document.querySelector("#done  .js-list");
  if (status === "todo") todoList.appendChild(toDo);
  if (status === "doing") doingList.appendChild(toDo);
  if (status === "done") doneList.appendChild(toDo);
  saveToDo(index, text, status);
}

function moveToDo(dragged, dropped) {
  if (dropped.querySelector(".js-list") !== null) {
    let index = 0;
    let toDoValue = null;
    for (let i = 0; i < toDos.length; i++) {
      if (parseInt(toDos[i].index) === parseInt(dragged.id)) {
        toDoValue = {
          index: toDos[i].index,
          value: dragged.querySelector("label").innerHTML,
          status: dropped.id
        };
        index = i;
      }
    }
    toDos.splice(index, 1, toDoValue);
    persistToDos();
    dragged.parentNode.removeChild(dragged);
    dropped.querySelector("ul.js-list").appendChild(dragged);
  }
}

function onSubmit(event) {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  addToDo(null, value, "todo");
}

function loadToDos() {
  const loadedToDos = window.localStorage.getItem("toDos");
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      return addToDo(toDo.index, toDo.value, toDo.status);
    });
  }
}

function init() {
  loadToDos();
}

form.addEventListener("submit", onSubmit);

/* events fired on the draggable target */
document.addEventListener("drag", function() {}, false);

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
  function(dropped) {
    // highlight potential drop target when the draggable element enters it
    if (dropped.target.className === "todo-section") {
      dropped.target.style.opacity = 0.5;
      console.log(dropped.target);
    } else if (dropped.target.parentNode.className === "todo-section") {
      dropped.target.parentNode.style.opacity = 0.5;
      console.log(dropped.target.parentNode.parentNode);
    } else if (
      dropped.target.parentNode.parentNode.className === "todo-section"
    ) {
      dropped.target.parentNode.parentNode.style.opacity = 0.5;
      console.log(dropped.target.parentNode.parentNode);
    }
  },
  false
);

document.addEventListener(
  "dragleave",
  function(dropped) {
    // reset background of potential drop target when the draggable element leaves it
    if (dropped.target.className === "todo-section") {
      dropped.target.style.opacity = 1;
    } else if (dropped.target.parentNode.className === "todo-section") {
      dropped.target.parentNode.style.opacity = 1;
    } else if (
      dropped.target.parentNode.parentNode.className === "todo-section"
    ) {
      dropped.target.parentNode.parentNode.style.opacity = 1;
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
    if (dropped.target.className === "todo-section") {
      dropped.target.style.opacity = 1;
      moveToDo(dragged, dropped.target);
    } else if (dropped.target.parentNode.className === "todo-section") {
      dropped.target.parentNode.style.opacity = 1;
      moveToDo(dragged, dropped.target.parentNode);
    } else if (
      dropped.target.parentNode.parentNode.className === "todo-section"
    ) {
      dropped.target.parentNode.style.opacity = 1;
      moveToDo(dragged, dropped.target.parentNode.parentNode);
    }
  },
  false
);

init();
