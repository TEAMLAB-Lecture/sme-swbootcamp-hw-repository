
function getInputByButton(){ //enter 버튼 클릭시 할 일 추가
  let addPlan = document.createElement('li');
  addPlan.className = "lists";
  let plan =  document.getElementById('input').value;
  addPlan.innerText = plan;
  let addButton = document.createElement('input');
  addButton.type = 'checkbox';
  let addModifyButton = document.createElement('button');
  addModifyButton.innerText = "수정";
  addModifyButton.className = "listButton";
  addModifyButton.addEventListener("click", modifyByModifyButton);
  let addDeleteButton = document.createElement('button');
  addDeleteButton.innerText = "삭제";
  addDeleteButton.className = "listButton";
  addDeleteButton.addEventListener("click", removeByDeleteButton);

  if(plan == ""){
    alert("내용을 입력해 주세요.");
  }
  else{
    checkbox.appendChild(addButton);
    toDoList.appendChild(addPlan);
    modifyButton.appendChild(addModifyButton);
    deleteButton.appendChild(addDeleteButton);
    document.getElementById('input').value = '';
  }
}

function getInputByEnter(e){ // enter 키 입력시 할 일 추가
  if(e.key == "Enter"){
    getInputByButton();
  }
}

function checkAll(){ // 전체 선택
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {checkbox.checked = true;})
}

function uncheckAll(){ // 전체 해제
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {checkbox.checked = false;})
}

function deleteAll(){ // 전체 삭제
  while(checkbox.hasChildNodes()){
    checkbox.removeChild(checkbox.firstChild);
    toDoList.removeChild(toDoList.firstChild);
    modifyButton.removeChild(modifyButton.firstChild);
    deleteButton.removeChild(deleteButton.firstChild);
  }
}

function removeChecked(){ // 선택 삭제
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let listButtons = document.querySelectorAll('.listButton');
  let toDoLists = document.querySelectorAll('.lists')
  for(i=0; i<checkboxes.length; i++){
    if(checkboxes[i].checked){
      checkboxes[i].remove();
      listButtons[i].remove();
      listButtons[checkboxes.length+i].remove();
      toDoLists[i].remove();
    }
  }
}

function removeByDeleteButton(event){ // 삭제 버튼 클릭시 해당 일정 삭제
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let listButtons = document.querySelectorAll('.listButton');
  let toDoLists = document.querySelectorAll('.lists')
  for(i=0; i<checkboxes.length; i++){
    if(event.target == listButtons[checkboxes.length+i]){
      checkboxes[i].remove();
      listButtons[i].remove();
      listButtons[checkboxes.length+i].remove();
      toDoLists[i].remove();
    }
  }
}

function modifyByModifyButton(event){ // 수정 버튼 클릭시 해당 일정 수정
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let listButtons = document.querySelectorAll('.listButton'); 
  let toDoLists = document.querySelectorAll('.lists')
  for(i=0; i<checkboxes.length; i++){
    if(event.target == listButtons[i]){
      let modifyPlan = prompt("수정할 내용을 입력해 주세요.", toDoLists[i].innerText);
      if (modifyPlan == ""){
        alert("내용을 입력해 주세요.");
      }
      else{toDoLists[i].innerText = modifyPlan;}
    }
  }
}