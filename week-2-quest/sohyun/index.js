const myinputinjs = document.getElementById('myinput');
// myinput을 가리키는 변수 설정

//list 만드는 거
const Todolist = document.getElementById('list');
function todolist(){
    const createlist = document.createElement('li');
    //const text = document.createElement('span');
    //text.textContent=myinputinjs.value;

    createlist.className ='listelem';

    createlist.innerHTML = `<span class="checkbox"><input type="checkbox" name='checkbox'><input class="todo" value = '${myinputinjs.value}' type="text" width="500px"></input></span>`;
    //createlist.innerHTML ='<span id="checkboxcontent"><input type="checkbox" name="checkbox"></span>'
    //createlist.appendChild(text);

    createlist.innerHTML += `<span id="elem"><input class="button1" type="button" name="buttonedit" value="edit" onclick="readOnlyFalse(this)"><input class="button2" type="button" name="buttonsave" value="save" onclick="readOnlyTrue(this);"></span>`;

    
    Todolist.appendChild(createlist);

    if(myinputinjs.value===''){
        alert('할 일을 입력하세요.')
    }else{
        myinputinjs.value='';
    }
}

function readOnlyFalse(e){
    e.parentNode.previousSibling.lastChild.readOnly=false;
}

function readOnlyTrue(e){
    e.parentNode.previousSibling.lastChild.readOnly=true;
}


function checkall(){
    const checkboxes = document.getElementsByName('checkbox'); // checkbox라는 이름을 가진 체크박스불러오기   
    for(var i=0;i<checkboxes.length;i++){
        if(checkboxes[i].checked == false){
            checkboxes[i].checked = true;
        }
    }
}
    

    //for(var i=0;i<checkboxes.length;i++)document.getElementsByName("checkBox")[i].checked=true;
    //if(checkbox.checked=='True'){
       // alert('fsdf');
    //}else {

    //}
//}

//전체 해제
function clearall(){
    const checkboxes = document.getElementsByName('checkbox');  
    for(var i=0;i<checkboxes.length;i++){
        if(checkboxes[i].checked == true){
            checkboxes[i].checked = false;
        }
    }
}
//*/

//선택 삭제
function selectdelete(){
    const checkboxes = document.getElementsByName('checkbox');  
    for(var i=0;i<checkboxes.length;i++){
        if(checkboxes[i].checked == true){
            //checkboxes[i].remove();
            //checkboxes[i].parentElement.remove();
            //EventTarget.parentNode.remove();
            $('checkboxes:checked').remove();
        }
    }
}







































//function printtodo(){
    //const myinputinjs = document.getElementById('myinput').value;
   // document.getElementById("list").innerText = myinputinjs.value;
 //   alert('ads');
//}

/*function todolist(){
    alert('dkanfsdf');
    // todolist 메소드는 input값을 list로 반환하는 것

    const addlistelem = documnet.createElement('li');
    //<li></li>를 만드는 
    addlistelem.className='addlist'
    addlistelem.innerHTML = `<span id="checkboxelem"><input type="checkbox" name="checkbox"><input type="text" value="${myinputinjs.value}" readOnly></input></span>`;
    
    if (myinputinjs.value ===  '') {
        alert('할 일을 입력하세요')
    }   else {
            Todolist.appendChild(addlistelem);
            addlistelem.value = '';
        }
    

    //const listText = document.createTextNode( myinputinjs );

}


//const myinputinjs = document.getElementById('myinput');
//const todolist = document.getElementById('list');


function todolist(){
    const addlistelem = document.createElement('li');
    const addlisttext = document.createTextNode('${myinputinjs.value}');

    addlistelem.appendChild(addlisttext);

    if (myinputinjs.value ===  '') {
        alert('할 일을 입력하세요')
    }   else {
            Todolist.appendChild(newToDoList);
            inputbox.value = '';
        } 
}
*/

