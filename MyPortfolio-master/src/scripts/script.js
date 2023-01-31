$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.navbar').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky");

        }
    });
 //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
 

$('.menu').on('click', function(){
   // $('.menu' ).fadeToggle(200);   
    $('.menu-btn i').toggleClass("active");
    $('.menu ').toggleClass("active");
});


//typing animation script
let typed = new Typed(".typing",{
    strings: ["Fullstack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
});

