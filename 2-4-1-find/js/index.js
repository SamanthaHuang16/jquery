$('#LessonLs .lesson-title').click(function(){
    $(this).stop(true ,false).siblings('.lesson-desc').slideToggle();
});