const $btnLg = $('#BtnLg')
const $btnSm = $('#BtnSm')
const $content = $('#Content')

$btnLg.click(function(){
    /* $content.css('font-sie',"3zem"); */
   /*  $content.css( "fontSize" ,"3em");
    $content.css("backgroundColor","pink"); */
    $content.css({
        "font-size":"2.5em",
        backgroundColor:"pink",
        lineHeight:"3em"
    });
});

$btnSm.click(function(){
    $content.css('font-size',10)
})