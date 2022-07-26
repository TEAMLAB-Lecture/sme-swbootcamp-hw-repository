const folderButton = document.getElementById('folderButton');
const wordButton = document.getElementById('wordButton');
const excelButton = document.getElementById('excelButton');
const powerPointButton = document.getElementById('powerPointButton');
const noteButton = document.getElementById('noteButton');
const serveryButton = document.getElementById('serveyButton');
const textFileButton = document.getElementById('textFileButton');
const itemList = document.getElementById('itemList');
const searchBox = document.getElementById('searchBox');
const icon2 = document.getElementById('icon2');
const icon3 = document.getElementById('icon3');
const informationButton = document.getElementById('informationButton');
const folderCard = document.getElementById('folderCard');

folderButton.addEventListener('click', clickFolderButton);
wordButton.addEventListener('click', clickWordButton);
excelButton.addEventListener('click', clickExcelButton);
powerPointButton.addEventListener('click', clickPowerPointButton);
noteButton.addEventListener('click', clickNoteButton);
serveryButton.addEventListener('click', clickServeyButton);
textFileButton.addEventListener('click',clickTextFileButton);
// searchBox.addEventListener('click', clickSearchBox);
icon2.addEventListener('click', clickSettingContainerButton);
icon3.addEventListener('click', clickHelpContainerButton);
informationButton.addEventListener('click', clickInformationContainerButton);


<!-- 폴더버튼을 누르면 폴더 추가 -->
function clickFolderButton() {
    const fileList = document.createElement('li');
    fileList.innerHTML = folderCard;
    itemList.appendChild(fileList);
}

<!-- 워드버튼을 누르면 워드 추가 -->
function clickWordButton() {
    const fileList = document.createElement('li');
    fileList.innerHTML = '워드'
    itemList.appendChild(fileList);
}

<!-- 엑셀버튼을 누르면 엑셀 추가 -->
function clickExcelButton() {
    const fileList = document.createElement('li');
    fileList.innerHTML = '엑셀'
    itemList.appendChild(fileList);
}

<!-- ppt버튼을 누르면 ppt 추가 -->
function clickPowerPointButton() {
    const fileList = document.createElement('li');
    fileList.innerHTML = '파워포인트'
    itemList.appendChild(fileList);
}

<!-- 필기장 버튼을 누르면 필기장 추가 -->
function clickNoteButton() {
    const fileList = document.createElement('li');
    fileList.innerHTML = '필기장'
    itemList.appendChild(fileList);
}

<!-- 설문조사 버튼을 누르면 설문조사 추가 -->
function clickServeyButton() {
    const fileList = document.createElement('li');
    fileList.innerHTML = '설문조사'
    itemList.appendChild(fileList);
}

<!-- 텍스트문서 버튼을 누르면 텍스트문서 추가 -->
function clickTextFileButton() {
    const fileList = document.createElement('li');
    fileList.innerHTML = '텍스트문서'
    itemList.appendChild(fileList);
}

<!-- 설정 버튼을 누르면 설정창 나타남 -->
function clickSettingContainerButton() {
    const settingContainer = document.getElementById('settingContainer');  
    if(settingContainer.style.display =='none'){
        settingContainer.style.display = 'block';
    }
    else{
        settingContainer.style.display = 'none';
    }  
}

<!-- 설정 도움 버튼을 누르면 도움말 나타남 -->
function clickHelpContainerButton() {
    const helpContainer = document.getElementById('helpContainer');  
    if(helpContainer.style.display =='none'){
        helpContainer.style.display = 'block';
    }
    else{
        helpContainer.style.display = 'none';
    }  
}

<!-- 정보 도움 버튼을 누르면 정보창 나타남 -->
function clickInformationContainerButton(){
    const infotmationContainer = document.getElementById('informationContainer');  
    if(informationContainer.style.display =='none'){
        informationContainer.style.display = 'block';
    }
    else{
        informationContainer.style.display = 'none';
    }  
}

// <!-- 검색창 클릭하면 박스 생성 -->
// function clickSearchBox() {
//     const searchHelpBox = document.createElement('li');
//     searchHelpBox.innerHTML = 'sfasdf';
//     searchBox.appendChild(searchHelpBox);
// }