'use strict';

const enterbtn = document.getElementById("enterbtn");
const checkbox = '<input class="check" type="checkbox">';

let li_number = 1;

function getToDo() {
  let todo = document.getElementById("todo");

  return todo.value
}

function setInitialToDo() {
  let todo = document.getElementById("todo");
  todo.value = '';
}

function addToDoByEnterKey(e) {
  if (e.keyCode == 13) {
    addToDo();
  }
}

function addToDo() {
  if (getToDo() === '') {
    alert('할 일을 입력하세요!');
  } else {
    let todolist = document.getElementById("todo_list");
    let new_liTag = document.createElement('li');    

    const togglebtn = '<button id="togglebtn' + li_number + '" class="modify_togglebtn" onclick="ModifySaveHandler(this)">수정</button>';
    new_liTag.innerHTML = checkbox + '<input id="todotext' + li_number + '" type="text" class="todo_text" value="' + getToDo() + '" readonly>' + togglebtn;
    
    li_number += 1;

    todolist.appendChild(new_liTag);
    setInitialToDo();
  }
}

function getNumberOfId(element) {
  return element.id.slice(-1)
}

function ModifySaveHandler(self) {
  if(self.innerText === '수정') {
    let todotext = document.getElementById("todotext" + getNumberOfId(self));
    todotext.setAttribute('class', 'todo_text can_write_mode');
    todotext.readOnly = false;

    self.className = 'save_togglebtn';
    self.innerText = '저장';
  } else {
    let todotext = document.getElementById("todotext" + getNumberOfId(self));
    todotext.setAttribute('class', 'todo_text');
    todotext.readOnly = true;

    self.className = 'modify_togglebtn';
    self.innerText = '수정';
  }
}

function selectAllCheckBox() {
  let checkboxes = document.querySelectorAll(".check");
  for (let i = 0; i<checkboxes.length; i++) {
    checkboxes[i].checked = true;
  }
}

function deselectAllCheckBox() {
  let checkboxes = document.querySelectorAll(".check");
  for (let i = 0; i<checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }
}

function removeCheckBox() {
  let checkboxes = document.querySelectorAll(".check");
  for (let i = 0; i<checkboxes.length; i++) {
    if (checkboxes[i].checked === true) {
      checkboxes[i].parentNode.remove();
    }
  }
}



// 1. textbar에 내용을 입력하고
//    1. 엔터키를 누르거나
//    2. Enter버튼을 마우스로 누르면
//      -> ul에 li를 추가하기
//        - 근데 li에 수정, 저장 버튼 만들기
//          - li는 input readonly 타입으로 먼저 생성
//          - 수정 버튼을 누르면 li의 input이 readonly에서 수정가능하도록 변경되게 하고 
//            - 엔터를 누르거나 마우스로 저장 버튼을 누르면
//            - 해당 li의 수정된 value를 가져와서 새로운 내용으로 li의 value를 변경
//            - 다시 li input의 타입은 readonly로 변경
//            - 근데 여기서 수정/저장은 toggle 버튼으로 만들기 -> 이건 night/day 내용 참고
// 2. 전체선택 버튼 : input checkbox를 전부 checked로 바꾸기
// 3. 선택해제 버튼 : class check인 것 전부 checked 지우기
// 4. 선택삭제 버튼 : checked인 것 전부 li 지우기