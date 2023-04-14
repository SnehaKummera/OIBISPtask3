let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");

 
function getTodoListFromLocalStorage() {
  let stringifiedTodoList = localStorage.getItem("todoList");
  let parsedTodoList = JSON.parse(stringifiedTodoList);
  if (parsedTodoList === null) {
    return [];
  } else {
    return parsedTodoList;
  }
}
 
let todoList = getTodoListFromLocalStorage();
let todosCount = todoList.length;
 
addTodoButton.onclick = function() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};
 
function onAddTodo() {
  let userInputElement = document.getElementById("todoUserInput");
  let userInputValue = userInputElement.value;
  
  
  let TextValue =document.getElementById("textareainput");
  let areavalue=TextValue.value;
  
 
  if (userInputValue === "") {
    alert("Enter Valid Text");
    return;
  }
 if (areavalue === ""){
 alert("Enter Valid Text");
    return;
  }
  
  todosCount = todosCount + 1;
 
  let newTodo = {
    text: userInputValue +'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+areavalue,
    uniqueNo: todosCount,
  };
  
  todoList.push(newTodo);
  createAndAppendTodo(newTodo);
  userInputElement.value = "";
  }
 
addTodoButton.onclick = function() {
  onAddTodo();
};
 
function onDeleteTodo(todoId) {
  let todoElement = document.getElementById(todoId);
  todoItemsContainer.removeChild(todoElement);
 
  let deleteElementIndex = todoList.findIndex(function(eachTodo) {
    let eachTodoId = "todo" + eachTodo.uniqueNo;
    if (eachTodoId === todoId) {
      return true;
    } else {
      return false;
    }
  });
 
  todoList.splice(deleteElementIndex, 1);
}
 
function createAndAppendTodo(todo) {
  let todoId = "todo" + todo.uniqueNo;
  let checkboxId = "checkbox" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;
 
  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id = todoId;
  todoItemsContainer.appendChild(todoElement);
 
  

 
  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);
 
  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id = labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelContainer.appendChild(labelElement);
 
  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  
  labelContainer.appendChild(deleteIconContainer);
 
  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far","fa-solid","fa-trash-alt","delete-icon");
  
 
  deleteIcon.onclick = function () {
    onDeleteTodo(todoId);
  };
 
  deleteIconContainer.appendChild(deleteIcon);
}
 
for (let todo of todoList) {
  createAndAppendTodo(todo);
}