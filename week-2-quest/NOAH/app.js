let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let allSelect = document.getElementById('allSelect');
let delect = document.getElementById('delect');

inputField.addEventListener('keypress', addTodoByEnter);
addToDoButton.addEventListener('click', click);
allSelect.addEventListener('click', allCheck);
delect.addEventListener('click', checkDelect);

function click(){
    var paragraph = document.createElement('li');
    paragraph.classList.add('paragraph-style');
    paragraph.innerHTML = `<input class="listBox" type="checkbox" id= "chk"name="chk[]">
    <input name="listBox[]" type="text" id="ToDoList" value="${inputField.value}" readOnly ></input>
    <input name="listChange[]" type="submit" id="changeButton" value="수정" onclick="changeToDoList()"></input>
    <input name="listSave[]" type="button" id="saveButton" value="저장" onclick="saveToDoList()"></input> `;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    
    
} 

function changeToDoList() {
    var listB = document.getElementsByName("listBox[]");  
    var listC = document.getElementsByName("listChange[]");
    var listS = document.getElementsByName("listSave[]");

    for(var i =0; i<listB.length; i++){
        if(listC[i].onclick)
        listB[i].readOnly= false;
    }
    
}

function saveToDoList(){
    var listB = document.getElementsByName("listBox[]");  
    var listS = document.getElementsByName("listSave[]");

    for(var i =0; i<listB.length; i++){
        if(listS[i].onclick)
        listB[i].readOnly= true;
    }
}

function addTodoByEnter(e) {
    if (window.event.keyCode==13) {
        click();
        e.preventDefault();
    }
}


var check = false;
function allCheck(){
    var chk = document.getElementsByName("chk[]"); 
	if(check == false){ 
		check = true;
		for(var i=0; i<chk.length;i++){ 
			chk[i].checked = true;
			

		} 
	}else{ 
		check = false; 
		for(var i=0; i<chk.length;i++){ 
			chk[i].checked = false;
			
		}
	}
}

function checkDelect(){
    var list = document.querySelectorAll("input[type=checkbox]")  
    for(var i =0; i<list.length; i++){
        if(list[i].checked){
            list[i].parentElement.remove();
        }
    }
    }




