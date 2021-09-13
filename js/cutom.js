// navbar active class add and remove
$(".nav-list-one ul li").click(
    function(){
        $(this).addClass("active").siblings().removeClass("active");
    }
); // statement and now
// scroll statement
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 100){
        $("nav").addClass("header-bg");
    }else{
        $("nav").removeClass("header-bg");
    }
    if(scrolling > 400){
        $(".top-bottom").css({
            "left": "90%",
        });
    }else{
        $(".top-bottom").css({
            "left": "-100%"
        })
    }
});
$(".top-bottom").click(
    function(){
        $("body,html").animate({
            scrollTop: "0",
        },1500);
    }
);

// banner slick js 
$(".banner-container").slick({
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-chevron-left preArrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right nextArrow"></i>',
    dots: true,

}); // statement end
// testimonial saliders
$(".testimonial-container").slick({
    slidesToShow: 2,
    autoplay: true,
    slidesToScroll: 2,
    arrows: false,
    dots: true,

}); 

// wow js start
new WOW().init(); //statement end
// mixitup js start
var mixer = mixitup('.grallery-container'); // statement end
// venobox js start
$('.venobox').venobox({
    closeBackground: "#ffc155",
    closeColor: '#fff'
}); // statement end

// from valitaion start
var email = document.getElementById("email");

function myFun(){
    if(email.value == ""){
        email.style.border = "1px solid yellow";
        return false;
    }
}  //startment end
// one page nav js start
jQuery('.scroll').onePgaeNav({
  wrapper:'#onepage-nav',
  activeClass:'nav-active',
}); // statment end
// banner parallax js start
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene,);
var scene = document.getElementById('scene-one');
var parallaxInstance = new Parallax(scene);
var scene = document.getElementById('scene-three');
var parallaxInstance = new Parallax(scene); // start ment end
// scroll bottom start
