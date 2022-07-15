init();

function init(){
    document.querySelector('form').addEventListener('submit', addToDo);
    document.querySelector('clear').addEventListener('click', clearTodoList);
    document.querySelector('ul').addEventListener('click', deleteOrCheck);
    document.querySelector('reset').addEventListener('click', reset);
    document.querySelector('all').addEventListener('click', all);
}

//새로운 할 일 추가하는 경우
function addToDo(e){
    e.preventDefault();
    let toDoValue = document.querySelector('input');
    if(toDoValue.value !== '')
        addTask(toDoValue.value);
        toDoValue.value = '';
}

function addTask(value){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `</span><input type="checkbox"><label>${value}</label><button id="btn1">저장</button> <button id="btn1">수정</button>`;
    ul.appendChild(li);
    document.querySelector('.todolist').style.display = 'block';
}
