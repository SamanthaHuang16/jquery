$('#ThumbLs img').click(function(){
    //alert($(this).index());
    const index = $(this).index();
    //alert(index)
    //$('#PicLs img').fadeOut();
    $('#PicLs img')
    .eq(index).fadeIn()
    .siblings().fadeOut();
});

//console.log($('#ThumbLs img'))