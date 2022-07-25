"use strict";

const add_button = document.getElementById("add_button");
const check = document.getElementsByName("checkbox");
const main_check = document.getElementById("main_checkbox");

add_button.addEventListener("click", function () {
    add_list();
});

// check.forEach(element => element.onclick = function(element){
//     let check_ele = event.target;
//     if(check_ele.checked) {
//         check_ele.parentElement.parentElement.style.backgroundColor = "#E1DFDD";
//         check_ele.parentElement.parentElement.style.borderBottom = "solid";
//         check_ele.parentElement.parentElement.style.borderBottomColor = "white";
//     }
//     else {
//         check_ele.parentElement.parentElement.style.backgroundColor = "";
//         check_ele.parentElement.parentElement.style.borderBottom = "";
//         check_ele.parentElement.parentElement.style.borderBottomColor = "";
//         main_check.checked = false;
//     }
// })

function ch_bg(e) {
    if(e.checked) {
        e.parentElement.parentElement.style.backgroundColor = "#E1DFDD";
        e.parentElement.parentElement.style.borderBottom = "solid";
        e.parentElement.parentElement.style.borderBottomColor = "white";
    }
    else {
        e.parentElement.parentElement.style.backgroundColor = "";
        e.parentElement.parentElement.style.borderBottom = "";
        e.parentElement.parentElement.style.borderBottomColor = "";
        main_check.checked = false;
    }
}

// 추가
function add_list() {
    const content_text =
        `<div class="no-words-add" style="width: 48px;"><input type="checkbox" name="checkbox" onclick="ch_bg(this)"></div>
            <div class="no-words-add" style="width: 40px;">
                <img style="width: 20px;" src="https://res-1.cdn.office.net/files/fabric-cdn-prod_20211207.001/assets/item-types/20/folder.svg"></div>
            <div class="file-div-add" style="width: 300px;"><span>폴더</span></div>
            <div class="file-div-add" style="width: 150px;"><span style="font-size: 12px; color: #616161;">2022. 7. 24.</span></div>
            <div class="file-div-add" style="width: 150px;"><span style="font-size: 12px; color: #616161;"></span></div>
            <div class="file-div-add" style="width: 150px;"><span style="font-size: 12px; color: #616161;">비공개</span></div>
            <div style="width: 170px;"></div>`
    const content_to_HTML = document.createElement("div");
    content_to_HTML.classList.add("files-div");
    content_to_HTML.innerHTML += content_text;
    const file = document.getElementById("files");
    file.append(content_to_HTML);
}

// 선택 삭제
function delete_checked() {
    main_check.checked = false;
    for (let i=check.length-1; i < check.length; i--) {
        if(check[i].checked) {
            check[i].parentNode.parentNode.remove();
        }
    }
}

// 모두 체크 & 취소
function all_check() {
    const num = how_many();

    if (num != check.length) {
        for (let i=0; i < check.length; i++) {
            check[i].checked = true;
            main_check.checked = true;
            check[i].parentElement.parentElement.style.backgroundColor = "#E1DFDD";
            check[i].parentElement.parentElement.style.borderBottom = "solid";
            check[i].parentElement.parentElement.style.borderBottomColor = "white";
        }
    }
    else {
        for (let i=0; i < check.length; i++) {
            check[i].checked = false;
            main_check.checked = false;
            check[i].parentElement.parentElement.style.backgroundColor = "";
            check[i].parentElement.parentElement.style.borderBottom = "";
            check[i].parentElement.parentElement.style.borderBottomColor = "";
        }
    }
}

// 개수
function how_many() {
    let count_num = 0;
    for (let i=0; i < check.length; i++) {
        if(check[i].checked) {
            count_num += 1;
        }
    }
    return count_num;
}