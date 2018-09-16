$(document).ready(function(){
    $('.grace-menu-toggler').click(function(){
        $('.grace-menu-background').toggleClass("opened");
        setTimeout(function(){
            $('.grace-menu').toggleClass("opened");
        }, 100)
    });

    $('.grace-menu-opener').click(function(){
        $('.grace-menu-background').addClass("opened");
        setTimeout(function(){
            $('.grace-menu').addClass("opened");
        }, 100)
    });

    $('.grace-menu-closer').click(function(){
        $('.grace-menu-background').removeClass("opened");
        setTimeout(function(){
            $('.grace-menu').removeClass("opened");
        }, 100)
    });

    let graceMenu = document.createElement('div');
    graceMenu.classList.add('grace-menu');

    let graceMenuBackground = document.createElement('div');
    graceMenuBackground.classList.add("grace-menu-background");

    $('.grace-menu-body').appendTo(graceMenu).css('opacity', '1');

    $('.grace-menu-container').append(graceMenu).append(graceMenuBackground);
});