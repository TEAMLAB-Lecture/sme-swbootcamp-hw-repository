// script.js
var button = document.getElementById('button');
var input = document.getElementById('input');
var list = document.getElementById('list');

button.addEventListener('click', clickButton);

function clickButton(){
  var temp = document.createElement('li');
  temp.innerHTML = input.value;
  list.appendChild(temp);
}


