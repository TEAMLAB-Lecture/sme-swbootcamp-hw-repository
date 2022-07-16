<!-- 변수설정 -->
const inputbox = document.getElementById('inputbox');
const enterbtn = document.getElementById('button-enter');
const ToDoList = document.getElementById('list');
const checkAll = document.getElementById('check-all');
const uncheckAll = document.getElementById('uncheck-all');
const removeCheck = document.getElementById('remove-check');

<!-- 함수설정 -->
enterbtn.addEventListener('click', addToDoList);
removeCheck.addEventListener('click', removeChecklist);
checkAll.addEventListener('click', allCheck);
uncheckAll.addEventListener('click', allUncheck);

<!-- '입력'키로 리스트추가 -->
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

<!-- Enter키로 리스트추가 -->
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

<!-- 전체선택버튼 작동함수 -->
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

<!-- 전체해제버튼 작동 함수 -->
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


<!-- 선택삭제버튼 작동 함수 -->
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

