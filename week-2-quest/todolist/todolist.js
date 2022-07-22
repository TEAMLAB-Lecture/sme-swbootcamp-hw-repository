const do_list = document.getElementById('list');
// text안에 내용을 const 해야 될듯 if문을 사용 할려면

// input 입력값 나타내기
// createElement 라는 요소를 사용하여 리스트 생성
// createTextNode는 선택한 요소에 텍스트 추가
function addtodolist(){
    // var jbBtn = document.createElement( 'button' );
    // var jbBtnText = document.createTextNode( 'Click' );
    // jbBtn.appendChild( jbBtnText );
    // li.appendChild( jbBtn );
    // document.getElementById('jbBtn').appendChild(li);

    // 버튼에 체크박스 다는법?
    if("text !==''"){
    const button = document.createElement('input');
    // button.setAttribute('id', button);
    button.setAttribute("type", "checkbox");
    document.getElementById('result').appendChild(button);

    const add= document.getElementById('add').value;
    const li = document.createElement('li');
    li.setAttribute('id', add);
    const textNode=document.createTextNode(add);
    li.appendChild(textNode);
    document.getElementById('result').appendChild(li); 
    }
    else{
        alert("입력하세요");
    }
    
    
}

// 선택된거 삭제(x)
// function deleteOrCheck(e){
// 	if(e.target.className == 'delete')  
// 		deleteToDo(e); // X 버튼을 누르면 목록에서 항목 삭제
// 	else {
// 		checkToDo(e); // 체크박스를 클릭한 경우 글씨 색을 연하게 바꿔준다.
// 	}


// function allselect(allselect){
//     const checkboxes = document.getElementsByName('button');
//     checkboxes.forEach((checkbox) => {
//         checkbox.checked = allselect.checked;
//     })
// }

// checkbox를 사용하면 성공하는 법
// 왜 버튼으로 변경이 안되지?
function allselect(allselect)  {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = allselect.checked;
    })
}

// function toggle(source) {
//     var checkboxes = document.querySelectorAll('input[type="checkbox"]');
//     for (var i = 0; i < checkboxes.length; i++) {
//         if (checkboxes[i] != source)
//             checkboxes[i].checked = source.checked;
//     }
// }

// 버튼을 새로 만들어서 해보기 실패 
// const $agreeBtn = document.querySelector('.agree-btn');
// $agreeBtn.onclick = () => {
//     if ($inputs.filter(input => input.checked).length === $inputs.length) {
//     $inputs.forEach(input => { input.checked = false; });
//     } else {
//     $inputs.forEach(input => {
//         input.checked = true;
//     });
//     }
// }

            // function deletecheck(){

            //     for(var i=0;i<500;i++){
            //         if(document.getElementsByName("checkBox")[i].checked == true){
            //             document.getElementsByName("deletediv")[i].remove();
            //         }


            //      }


            // }

function enterkey(){
    if (window.event.keyCode ==13 ){addtodolist()}
}