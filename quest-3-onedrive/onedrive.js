

    function addfile(e){ //목록에 파일 추가하기
        const text = e.innerText;
        const li = document.createElement("li");
        let listdiv_1 = document.createElement('div');
        const listcheck = document.createElement('input');
        let listdiv_2= document.createElement('div');
        let listdiv_3= document.createElement('div');
        let today = new Date();
        listcheck.setAttribute("type","checkbox");
        li.setAttribute('class','list-group-item hoverlist');
        listcheck.className='filecheck';
        listdiv_1.className='checkname';        listdiv_2.className='date';
        listdiv_3.className='filesize';
        listdiv_1.innerHTML='<input class="filecheck" type="checkbox">';
        listdiv_1.innerText = text;
        listdiv_2.innerText = today.toLocaleString();
        listdiv_3.innerText='10';
        li.setAttribute('onclick','licheck(this)');
        li.appendChild(listcheck);
        li.appendChild(listdiv_1);
        li.appendChild(listdiv_2);
        li.appendChild(listdiv_3);
        document.getElementById('filelist').appendChild(li);
    }

    function remove(){ //선택 제거
        const chb = document.querySelectorAll("input[class='filecheck']");
        for(i=0;i<chb.length;i++){
            if(chb[i].checked==true){
                chb[i].parentElement.remove();
            }
        }
    }

    function allcheckcontrol(selectAll){ //모두선택 or 선택제거
        const checkboxes 
    = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked
    })
    }