let num =1;
const $pic=$('#Pic');
const duration =3000;

function todo (){
    if(num<5){
        num += 1;
    } else{
        num = 1;
    }
    console.log(num)
    $pic.attr('src',`./images/photo${num}.jpg`);
}

setInterval(todo,duration);