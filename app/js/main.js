$(function(){
    $('.project-slider').slick({
  
       arrows: false,
       dots: true,
       customPaging: function(slider, i) { 
        return '<button class="dot">' ;
    },
    });


    $('.testimonial__slider').slick({
        arrows:false,
        dots:true
    })

    $("input").on("focus", function(){
        $(this).addClass("focus");
    })
    
    $("input").on("blur", function(){
        if($(this).val() == "")
        $(this).removeClass("focus");
    })


})