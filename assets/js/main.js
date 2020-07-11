
//Completando Tarefas
$("ul").on("click","li", function(){
    $(this).toggleClass("completed")
})

//Deletando Tarefas
$("ul").on("click",".delete", function(event){
    $(this).parent().fadeOut(400, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

//Criando Tarefas
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var tarefaText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span class='delete'><i class='far fa-trash-alt'></i></span> " + tarefaText+ "</li>");
    }
});

//Fadein e fadeOut input
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();

})