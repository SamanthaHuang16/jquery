let num = 1;
let picInterval;
const duration = 50;
const $pic = $('#Pic');
const $BtnPause = $('#BtnPause')
const $BtnPlay = $('#BtnPlay')


function doPrev(){
    if (num > 1){
        num -= 1;
    }else {
        num = 24;
    }

    $pic.attr('src',`./images/pic${num}.jpg`);
}

picInterval = setInterval(doPrev, duration);

$BtnPause.click(function(){
    clearInterval(picInterval);
});

$BtnPlay.click(function(){
    clearInterval(picInterval);
    picInterval = setInterval(doPrev, duration);
});