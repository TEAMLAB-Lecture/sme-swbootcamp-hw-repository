var button = document.getElementById('button');
var input = document.getElementById('input');
var list = document.getElementById('list');
var cnt = 0;  

button.addEventListener('click', clickButton);

function clickButton() {
    var temp = document.createElement('li');
    temp.setAttribute("id", "li"+cnt);
    temp.innerHTML = input.value;
    temp.innerHTML += "<button id=delete style='float: center;' type='button' onclick='remove("+cnt+")'>삭제</button>";
    list.appendChild(temp);
    cnt++;

    temp.addEventListener('click', function(){   
        temp.style.textDecoration = "line-through";
    })
    temp.addEventListener('dblclick', function(){
        list.removeChild(temp);
    })
}

function remove(cnt) {
    var li = document.getElementById('li'+cnt);
    list.removeChild(li);
}




