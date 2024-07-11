test();
$('.open').on("click" , function(){
console.log($(".navBar-open").innerWidth());
let contentWidth =$(".navBar-open").innerWidth();
$('.navBar-open').animate({left:`${contentWidth-250}`})
})
$('.close').on("click" ,function() {
let contentWidth =$(".navBar-open").innerWidth();
$('.navBar-open').animate({left:`${-contentWidth}`})
})
function test() {
let contentWidth =$(".navBar-open").innerWidth();
$('.navBar-open').animate({left:`${-contentWidth}`},0) 
}
$('#sliderDown .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});
$('document').ready(function() {
    $('.loader').fadeOut(500,function() {
        $('.loading').fadeOut(300 ,function() {
            $('body').css({overflow:'auto'})
        }) ;
    }) ;
})

let countDownDate = new Date("sep 20 , 2021 23:59:59").getTime();
let counter = setInterval(() => {
let dateNow = new Date().getTime();
let dateDiff = countDownDate - dateNow ;
let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
let hours = Math.floor((dateDiff %( 1000 * 60 * 60 * 24)) / 1000 / 60 / 60 );
let minutes = Math.floor((dateDiff % (1000*60*60))/(1000*60));
let seconds = Math.floor((dateDiff%(1000*60))/1000);

document.querySelector('.days').innerHTML = days ;
document.querySelector('.hours').innerHTML = hours ;
document.querySelector('.minutes').innerHTML = minutes ;
document.querySelector('.seconds').innerHTML = seconds ;
},1000)