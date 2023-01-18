const $advItems = $('#AdvLs.adv-item');

console.log($('#AdvLs .adv-item'))

/*  $('#AdvLs.adv-item').hover(function(){
    $(this).css('top',0);
},function(){
    $(this).css('top',166);
}); */

$advItems.hover(function(){
    $(this).stop(true, false).animate({top:0}),500;
    $(this).siblings().stop(true, false).animate({top:118},500);
},function(){
    //$(this).stop(true, false).animate({top:166}),500;
    //$(this).siblings().stop(true, false).animate({top:166}),500;
    //$('#AdvLs .adv-item').stop(true, false).animate({top:166}),500;
    $advItems.stop(true, false).animate({top:166}),500;
});

