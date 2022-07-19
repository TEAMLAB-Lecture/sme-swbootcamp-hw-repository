const contents = document.getElementById('input');
const button = document.getElementById('button').addEventListener('click',addToDoList);  
const list = document.getElementById('list');

const cnt = 1;

function addToDoList(){
    const temp = document.createElement('li');
    const newToDoList = document.createElement('li');

    if(!contents.value)
    {
        alert("할 일을 입력하시오.");
        contents.focus();
        return false;
    }
// 경고창

    temp.setAttribute('class', 'list-group-item');
    temp.setAttribute('id', 'li' + cnt);
    temp.innerHTML = contents.value;  
    temp.innerHTML += '<button style="float: right;" type="button">저장</button>';
    temp.innerHTML += '<button style="float: right;" type="button">수정</button>';
    list.appendChild(temp);
    cnt++;
// to do 등록
}