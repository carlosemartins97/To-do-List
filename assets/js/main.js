
$("li").click(function(){
    $(this).toggleClass("completed")
})

$(".delete").on("click", function(event){
    $(this).parent().fadeOut(400, function(){
        $(this).remove();
    });
    event.stopPropagation();
})