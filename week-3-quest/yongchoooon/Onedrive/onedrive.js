'use strict';

// text drag 불가하도록
function drag(e) {
  e.dataTransfer.setData("Text", e.target.id);
}

// header 체크박스 클릭하면 전체 선택, 전체 해제 toggle
function checkAllToggle() {
  let checkboxes = document.querySelectorAll(".checkbox");
  for (let i= 1; i < checkboxes.length ; i++) {
    if (checkboxes[0].checked === false) {
      checkboxes[i].checked = true;
      document.getElementById('list-row-' + i).style.backgroundColor = "#f3f2f1";
      document.getElementById('list-row-' + i).style.borderBottom = "1px solid white";
    } else {
      checkboxes[i].checked = false;
      document.getElementById('list-row-' + i).style.backgroundColor = 'transparent';
      document.getElementById('list-row-' + i).style.borderBottom = "1px solid #edebe9";
    }
  }
}
// 1px solid #edebe9
// 체크박스가 전부 checked 되면 header 체크박스가 checked 되도록
$(document).ready(function(){
  $(".checkbox").click(function() {
    if(($(".checkbox:eq(1)").prop("checked") == true) && ($(".checkbox:eq(2)").prop("checked") == true) && ($(".checkbox:eq(3)").prop("checked") == true)) {
      $(".checkbox:eq(0)").prop("checked", true);
    } else {
      $(".checkbox:eq(0)").prop("checked", false);
    }
  })
})

// 체크박스 클릭하면 background color 그레이로
$(document).ready(function(){
  $("label:gt(0)").click(function(){
    if($(this).prev().prop("checked") === false){
      $(this).parent().parent().parent().parent().css('backgroundColor', '#f3f2f1');
      $(this).parent().parent().parent().parent().css('borderBottom', "1px solid white");
    } else {
      $(this).parent().parent().parent().parent().css('backgroundColor', 'transparent');
      $(this).parent().parent().parent().parent().css('borderBottom', "1px solid #edebe9");
    }
  })
})

// row에 hover하면 체크박스 보이도록
$(document).ready(function(){
  $(".list-row").hover(function(){
    $(this).children().children(".visible-checkbox").css('visibility', 'visible');
  }, function(){
    $(this).children().children(".visible-checkbox").css('visibility', 'hidden');
  })
})