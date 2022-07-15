
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
  let addDelateButton = document.createElement('button');
  addDelateButton.innerText = "삭제";
  addDelateButton.className = "listButton";

  if(plan == ""){
    alert("내용을 입력해주세요.");
  }
  else{
    checkbox.appendChild(addButton);
    toDoList.appendChild(addPlan);
    modifyButton.appendChild(addModifyButton);
    delateButton.appendChild(addDelateButton);
  }
}

function getInputByEnter(e){ // enter 키 입력시 할 일 추가
  if(e.key == "Enter"){
    getInputByButton();
  }
}

function checkAll(){
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {checkbox.checked = true;})
}

function uncheckAll(){
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {checkbox.checked = false;})
}

function delateAll(){
  while(checkbox.hasChildNodes()){
    checkbox.removeChild(checkbox.firstChild);
    toDoList.removeChild(toDoList.firstChild);
    modifyButton.removeChild(modifyButton.firstChild);
    delateButton.removeChild(delateButton.firstChild);
  }
}

function removeChecked(){
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