

//Obtener elementos para hacer uso de ellos
const list = document.getElementById("listOfTodos");
const inputTextArea = document.getElementById("toDoText");
const postButton = document.getElementById("postTask");
const clearButton = document.querySelector(".clearButton");
const markAllButton = document.querySelector(".markAllButton");
const deleteButton = document.querySelector(".deleteButton");
let checkboxes;

function addToDo(taskInput){

	const newTask = `<li class = "task"> 
                    	${taskInput} <input type="checkbox" class = "cbox">
                  	</li>`;

    list.innerHTML += newTask;

	// list.insertAdjacentHTML("beforeend", newTask); //before end agrega los tasks dentro y al final del elemento

}

function deleteAllToDos(){

	const tasks = document.getElementsByClassName("task");

	list.innerHTML = "";
}

function clearTasks(){

	checkboxes = document.getElementsByClassName("cbox");

	for(let i = 0; i<checkboxes.length; i++){
		if(checkboxes[i].checked){
			checkboxes[i].checked = false;
		}
	}
}

function checkTasks(){

	checkboxes = document.getElementsByClassName("cbox");

	for(let i = 0; i<checkboxes.length; i++){
		if(!checkboxes[i].checked){
			checkboxes[i].checked = true;
		}
	}

}

postButton.addEventListener("click",  function(event){

	event.preventDefault(); //previene refresh al dar submit a una forma y otros comportamientos

	let toDoText = document.getElementById("toDoText").value.trim();

	if(toDoText){
		addToDo(toDoText);
	}

	inputTextArea.value = "";
});

deleteButton.addEventListener("click", function(event){

	deleteAllToDos();

});

clearButton.addEventListener("click", function(event){
	clearTasks();
});

markAllButton.addEventListener("click", function(event){
	checkTasks();
});