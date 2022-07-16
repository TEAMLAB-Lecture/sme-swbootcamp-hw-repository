const inputbox = document.getElementById('inputbox');
const enterbtn = document.getElementById('button-enter');
const ToDoList = document.getElementById('list');
const checkAll = document.getElementById('check-all');
const uncheckAll = document.getElementById('uncheck-all');
const removeCheck = document.getElementById('remove-check');

enterbtn.addEventListener('click', addToDoList);
removeCheck.addEventListener('click', removeChecklist);
checkAll.addEventListener('click', allCheck);
uncheckAll.addEventListener('click', allUncheck);


function addToDoList() {
    const newToDoList = document.createElement('li');
    newToDoList.className = 'd-flex justify-content-between';
    newToDoList.innerHTML = `<span id="checkboxcontent"><input type="checkbox" name="checkbox"><input type="text" value="${inputbox.value}" readOnly></input></span>`;
    newToDoList.innerHTML += `<span id="save"><input type="button" name="buttonmodify" value="수정" onclick="readOnlyFalse(this)"><input type="button" name="buttonsave" value="저장" onclick="readOnlyTrue(this)"></span>`;
    
    if (inputbox.value ===  '') {
        alert('할 일을 입력하시오.')
    }   else {
            ToDoList.appendChild(newToDoList);
            inputbox.value = '';
        }  
}


function addToDoListByEnterBtn() {
    const newToDoList = document.createElement('li');
    newToDoList.className = 'd-flex justify-content-between';
    newToDoList.innerHTML = `<span id="checkboxcontent"><input type="checkbox" name="checkbox"><input type="text" value="${inputbox.value}" readOnly></input></span>`;
    newToDoList.innerHTML += `<span id="save"><input type="button" name="buttonmodify" value="수정" onclick="readOnlyFalse(this)"><input type="button" name="buttonsave" value="저장" onclick="readOnlyTrue(this)"></span>`;

    if (window.event.keyCode == 13) {
        if (inputbox.value === '') {
            alert('할 일을 입력하시오.')
        } else{
            ToDoList.appendChild(newToDoList);
            inputbox.value = '';   
        }

    }
}
function allCheck() {
    const checkboxes = document.getElementsByName('checkbox');
    if(checkboxes.checked == false){
        for(var i=0;i<checkboxes.length; i++){
            checkboxes[i].checked = false;
        } 
    }   else {
            for(var i=0;i<checkboxes.length; i++){
                checkboxes[i].checked = true;
            }
        }
        
}

function allUncheck() {
    const checkboxes = document.getElementsByName('checkbox');
    if(checkboxes.checked == true){
        for(var i=0;i<checkboxes.length; i++){
            checkboxes[i].checked = true;
        } 
    }   else {
            for(var i=0;i<checkboxes.length; i++){
                checkboxes[i].checked = false;
            }
        }       
}



function removeChecklist() {
    const checkbox = document.querySelectorAll('input[type=checkbox]'); // input
    for (i =0; i<checkbox.length; i++) {
        if (checkbox[i].checked==true) {
            checkbox[i].parentElement.parentElement.remove();
        }
    }
}

function readOnlyFalse(e){
    e.parentNode.previousSibling.lastChild.readOnly=false;
}

function readOnlyTrue(e){
    e.parentNode.previousSibling.lastChild.readOnly=true;
}

