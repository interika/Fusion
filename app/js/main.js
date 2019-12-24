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


    autosize(document.querySelector('textarea'));
})