//標題一"的"click事件
$('h1').on('click', getTitle);
function getTitle(){
    alert('我點到標題一')
}

$('p').on('click', getParagraph);
function getParagraph(){
    alert('我點到段落')
}