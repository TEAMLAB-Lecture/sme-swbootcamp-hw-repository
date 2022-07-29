const inputbox = document.getElementById('inputbox');
const enterbtn = document.getElementById('button-addon2');
const ToDoList = document.getElementById('list'); // ul
const removebtn = document.getElementById('removebtn');
const selectAll = document.getElementById('allcheck');
const unselect = document.getElementById('uncheck');

enterbtn.addEventListener('click', addToDoList);
removebtn.addEventListener('click', removeChecklist);
selectAll.addEventListener('click', checkAll);
unselect.addEventListener('click', uncheckAll);

// 엔터버튼을 클릭해서 등록
function addToDoList() { // 새로운 할 일 버튼 눌러서 추가
    const newToDoList = document.createElement('li');
    newToDoList.className = 'd-flex justify-content-between';
    newToDoList.innerHTML = `<span id="checkboxcontent"><input type="checkbox" name="checkbox"><input type="text" value="${inputbox.value}" readOnly></input></span>`;
    newToDoList.innerHTML += `<span id="save"><input type="button" name="buttonmodify" value="수정" onclick="readOnlyFalse(this)"><input type="button" name="buttonsave" value="저장" onclick="readOnlyTrue(this)"></span>`;
    
    if (inputbox.value ===  '') {
        alert('할 일을 입력하세요')
    }   else {
            ToDoList.appendChild(newToDoList);
            inputbox.value = '';
        }  
}

// 엔터키로 등록
function addToDoListByEnterBtn() {
    const newToDoList = document.createElement('li');
    newToDoList.className = 'd-flex justify-content-between';
    newToDoList.innerHTML = `<span id="checkboxcontent"><input type="checkbox" name="checkbox"><input type="text" value="${inputbox.value}" readOnly></input></span>`;
    newToDoList.innerHTML += `<span id="save"><input type="button" name="buttonmodify" value="수정" onclick="readOnlyFalse(this)"><input type="button" name="buttonsave" value="저장" onclick="readOnlyTrue(this)"></span>`;

    if (window.event.keyCode == 13) {
        if (inputbox.value === '') {
            alert('할 일을 입력하세요')
        } else{
            ToDoList.appendChild(newToDoList);
            inputbox.value = '';   
        }

    }
}

// 체크된 친구 삭제
function removeChecklist() {
    const checkbox = document.querySelectorAll('input[type=checkbox]'); // input
    for (i =0; i<checkbox.length; i++) {
        if (checkbox[i].checked==true) {
            checkbox[i].parentElement.parentElement.remove();
        }
    }
    // checkbox.forEach(element => {
    //     if(element.checked == true){
    //         element.parentElement.parentElement.remove();
    //     }
    // })
}

function readOnlyFalse(e){
    e.parentNode.previousSibling.lastChild.readOnly=false;
}

function readOnlyTrue(e){
    e.parentNode.previousSibling.lastChild.readOnly=true;
}

function checkAll() {
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

function uncheckAll() {
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