
<!-- 변수 정의 -->
  const enter_button = document.getElementById('enter_button');
  const list = document.getElementById('list');


  <!-- 함수와 연결 -->
  enter_button.addEventListener('click', clickButton);
  search_box.addEventListener('keydown', clickEnterKey);

   <!-- 버튼을 누르면 추가 -->
  function clickButton() {
    const toDoList = document.createElement('li');
    toDoList.innerHTML = `<span><input type="checkbox" id="checkbox" name="checkbox"><input type="text" id="tdl" name="tdl" value="${search_box.value}"></input></span>`
                       + '<span><input type="button" id="revise_button" value="수정" onclick="deleteText()"><input type="button" id="save_button" value="저장"></span>';
    if(search_box.value === ' ') {
      alert('할 일을 입력하세요');
    }
      else{
         list.appendChild(toDoList);
         search_box.value=' ';
      }
  }
<!-- 엔터키를 누르면 추가 -->
  function clickEnterKey() {
    const search_box = document.getElementById("search_box");
    const toDoList = document.createElement('li');
    toDoList.innerHTML = `<span><input type="checkbox" id="checkbox" name="checkbox"><input type="text" id="tdl" name="tdl" value="${search_box.value}"></input></span>`
                       + '<span><input type="button" id="revise_button" value="수정" onclick="deleteText()"><input type="button" id="save_button" value="저장"></span>';

    if(window.event.keyCode == 13) {
      if(search_box.value === ' ') {
        alert('할 일을 입력하세요');
      }
        else{
           list.appendChild(toDoList);
           search_box.value=' ';
        }
    }
  }

  <!--전체 선택을 누르면 체크박스 모두 선택-->
  function checkAll() {
    const checkboxes = document.getElementsByName('checkbox');
    var i = 0;
    for(i=0;i<checkboxes.length;i++){
      if(checkboxes[i].checked = "unchecked") {
        checkboxes[i].checked = "checked";
      }
      else{
        checkboxes[i].checked = "checked";
      }
    }
  }

  <!--전체 해제을 누르면 체크박스 모두 해제-->
  function uncheckAll() {
    const checkboxes = document.getElementsByName('checkbox');
    var i = 0;
    for(i=0;i<checkboxes.length;i++){
      if(checkboxes[i].checked ==true) {
        checkboxes[i].checked =false;
      }
      else{
        checkboxes[i].checked =false;
      }
    }
  }
    <!--선택 삭제를 누르면 체크박스 선택 삭제-->
    function deleteChecked() {
      const checkbox = document.querySelectorAll('input[type=checkbox]');
       for (i =0; i<checkbox.length; i++) {
           if (checkbox[i].checked==true) {
               checkbox[i].parentElement.parentElement.remove();
           }
       }
    }
