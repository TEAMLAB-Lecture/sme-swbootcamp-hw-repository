
function getInputByEnter(){ //enter 버튼 클릭시 할 일 추가
  let addPlan = document.createElement('li');
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