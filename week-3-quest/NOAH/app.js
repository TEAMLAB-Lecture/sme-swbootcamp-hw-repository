function setBg(t){
    td =t.parentNode;
    tr=t.parentNode.parentNode;
    tr.style.backgroundColor=(t.checked)?"rgba(169, 169, 169, 0.433)":"white";
    tr.style.fontWeight=(t.checked)? 700: 300;
}


/*전체선택*/
function selectAll(selectAll)  {
    const checkboxes = document.getElementsByName('check');
    
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
                            setBg(checkbox);
        })
    }