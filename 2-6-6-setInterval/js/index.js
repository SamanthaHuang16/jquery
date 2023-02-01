let index = 0;
let picInterval;
const duration = 1000;
const $slide = $('#Slide');
const $slideImgInner = $slide.find('.img-inner');
const $paginationItems =$('#Pagination .pagination-item');

function setSlide(){
    if(index < 4){
        index++;
    }else{
        index = 0;
    }
    console.log(index);
    //$('#Slide .img-inner').css('left',-index*700)
    $slideImgInner.css('left',`${-index * 100}%`);
    $paginationItems
    .eq(index).addClass('js-pagination-item')
    .siblings().removeClass('js-pagination-item');
}

//Initial
picInterval = setInterval(setSlide, duration);
$paginationItems.eq(index).addClass('js-pagination-item');

//event
$slide.hover(function(){
    clearInterval(picInterval);
},function(){
    picInterval = setInterval(setSlide, duration);
});

$paginationItems.click(function(){
    index = $(this).index();
    $slideImgInner.css('left',`${-index * 100}%`);
    $paginationItems
    .eq(index).addClass('js-pagination-item')
    .siblings().removeClass('js-pagination-item');
});

