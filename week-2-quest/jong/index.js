function addList(){
    const textarea = document.getElementById("textarea").value;
    const li = document.createElement("li");

    li.style.fontSize='20px';
    li.style.lineHeight="50px";
    
    const check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("class", "ch");

    const editbutton = document.createElement('button');
    editbutton.innerText="수정";
    editbutton.style.width="50px";
    editbutton.style.height="35px";
    editbutton.style.fontSize="16px";
    editbutton.style.fontWeight="bold";
    editbutton.style.marginTop="8px";
    
    editbutton.addEventListener("click", edittext);

    const savebutton = document.createElement('button');
    savebutton.innerText="저장";
    savebutton.style.float="right";
    savebutton.style.width="50px";
    savebutton.style.height="35px";
    savebutton.style.fontSize="16px";
    savebutton.style.fontWeight="bold";
    savebutton.style.marginLeft="8px";
    savebutton.style.marginTop="8px";
    // savebutton.addEventListener("click",savetext);
    editbutton.style.float="right";
    li.style.height="50px";

    const textNode= 
    document.createTextNode(textarea);

    li.appendChild(check);
    li.appendChild(textNode);
    li.appendChild(savebutton);
    li.appendChild(editbutton);
    document.getElementById("todo").appendChild(li);
    document.getElementById('textarea').value=""
    document.getElementById('textarea').focus();

    function edittext(){ 
    textNode.remove();
    const edittextbox = document.createElement('input');
    edittextbox.type = 'text';
    edittextbox.setAttribute('id','edit');
    this.parentElement.appendChild(edittextbox);
    }

}

function enterkey() {
    if (window.event.keyCode == 13){
        addList();
    }
}

function removeItem(){
    const ul = document.getElementById('todo');
    
    const chb = document.querySelectorAll("input[type=checkbox]");
    for(i=0;i<chb.length;i++){
        if(chb[i].checked==true){
            chb[i].parentElement.remove();
        }
    }
}

function selectAll()  {
    const chb = document.querySelectorAll('.ch');
    chb.forEach(checkbox => {
        checkbox.checked = true;
    });
}

    function unSelectAll()  {
    const chb = document.querySelectorAll('.ch');
    chb.forEach(checkbox => {
        checkbox.checked = false;
    });
}