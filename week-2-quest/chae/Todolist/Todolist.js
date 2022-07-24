"use strict";

const add_but = document.getElementById("Add_Key");
const todo_element = document.getElementById("input_text_box");
const check = document.getElementsByName("checkbox");

add_but.addEventListener("click", function () {
  add_list();
  todo_element.value = "";
});

todo_element.addEventListener('keydown', function(e) {
    if (e.keyCode === 13 ) {
        add_list();
        todo_element.value = "";
    }
})

// 수정 버튼
function change_text(e) {
    e.parentNode.previousElementSibling.lastChild.readOnly = false; // readOn/y 해제
   // e.parentNode.previousSibling.previousSibling.lastChild.previousSibling.readOnly = false;
   // e.parentNode.previousSibling.previousSibling.lastChild.readOnly = false;
}

// 저장 버튼
function save_text(e) {
    e.parentNode.previousElementSibling.lastChild.readOnly = true;
    // e.parentNode.previousSibling.previousSibling.lastChild.previousSibling.readOnly = true;
    // e.parentNode.previousSibling.previousSibling.lastChild.readOnly = true;
}

function add_list() {
    const todo_data = document.getElementById("input_text_box").value; // 사용자로부터 받은 일정 추가하기
    const content_text =
        `<div class="list_display"><span><input type="checkbox" name="checkbox" onclick="how_many()"><input type="text" class ="content" value="${todo_data}" readonly></span>
            <div><button id = "change" type="button" onclick="change_text(this)"><img src="image/change.png" style="width: 20px; height: 20px;"></button>
                <button id = "save" type="button" onclick="save_text(this)"><img src="image/save.png" style="width: 20px; height: 20px;"></button></div></div>`
    const content_to_HTML = document.createElement("tr"); // content_to_HTML에 li 태그를 추가
    content_to_HTML.innerHTML += content_text; // 나머지 code 추가

    const list = document.getElementById("list");
    list.append(content_to_HTML);
    how_many();
}

function all_checked() {
    for (let i=0; i < check.length; i++) {
        check[i].checked = true;
    }
    document.getElementById("how_many_num").value = `0개 남았습니다.`;
}

function all_unchecked() {
    for (let i=0; i < check.length; i++) {
        check[i].checked = false;
    }
    document.getElementById("how_many_num").value = `${check.length}개 남았습니다.`;
}

// 선택 삭제
function delete_checked() {
    for (let i=check.length-1; i < check.length; i--) { // 뒤에서부터 제거
        if(check[i].checked) {
            check[i].parentNode.parentNode.parentNode.remove(); // tr 요소 접근 후 삭제
        }
    }
}

// 남은 개수 세기
function how_many() {
    let count_num = 0;
    for (let i=0; i < check.length; i++) {
        if(check[i].checked === false) {
            count_num += 1;
        }
    }
	document.getElementById("how_many_num").value = `${count_num}개 남았습니다.`;
}