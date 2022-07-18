const do_list = document.getElementById('list');


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

// 선택된거 삭제(x)
// function deleteOrCheck(e){
// 	if(e.target.className == 'delete')  
// 		deleteToDo(e); // X 버튼을 누르면 목록에서 항목 삭제
// 	else {
// 		checkToDo(e); // 체크박스를 클릭한 경우 글씨 색을 연하게 바꿔준다.
// 	}

// 전부 선택하게 하는거(x)
// function allselect(allselect){
//     const checkboxes = document.getElementsByName('checkbox');
//     checkboxes.forEach(function (checkbox) {
//         checkbox.checked = selectAll.checked;
//     })
// }

function allselect(allselect)  {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
    })
}

// function toggle(source) {
//     var checkboxes = document.querySelectorAll('input[type="checkbox"]');
//     for (var i = 0; i < checkboxes.length; i++) {
//         if (checkboxes[i] != source)
//             checkboxes[i].checked = source.checked;
//     }
// }