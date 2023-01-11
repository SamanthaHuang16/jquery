$('#Thumb1').click(function(){
    $('#Pic1').fadeIn();
/*     $('#Pic2').fadeOut();
    $('#Pic3').fadeOut();
    $('#Pic4').fadeOut();
    $('#Pic5').fadeOut(); */
    $('#Pic2, #Pic3, #Pic4, #Pic5').fadeOut();
});

$('#Thumb2').click(function(){
    $('#Pic2').fadeIn();
/*     $('#Pic1').fadeOut();
    $('#Pic3').fadeOut();
    $('#Pic4').fadeOut();
    $('#Pic5').fadeOut(); */
    $('#Pic1, #Pic3, #Pic4, #Pic5').fadeOut();
});

$('#Thumb2').click(function(){
    $('#Pic3').fadeIn();
    $('#Pic2, #Pic1, #Pic4, #Pic5').fadeOut();
});
$('#Thumb2').click(function(){
    $('#Pic4').fadeIn();
    $('#Pic2,#Pic3,#Pic1,#Pic5').fadeOut();
});

$('#Thumb2').click(function(){
    $('#Pic5').fadeIn();
    $('#Pic2,#Pic3,#Pic4,#Pic1').fadeOut();
});

