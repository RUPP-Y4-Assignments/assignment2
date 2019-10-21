// import 'jquery-2.2.4.min.js';


$(document).ready(function () {

    // alert($('.krb-aside-slide').length)

    var btn_menu_1 = $('span#btn-menu-1');
    var btn_menu = $('span#btn-menu');
    var btn_sub_menu = $('#btn-sub-menu');
    var class_left_side = $('.left-side') , right_side = $('.right-side');
    var center_side = $('.center-side'), clicked = 0, clickedd = 0;

    btn_menu.click(function () {
        if (clicked == 0) {
            class_left_side.css({ 'left': '0', 'transition': '0.5s'});
            center_side.css({ 'left': '50%', 'transition': '0.5s' });
            clicked = 1;
        } else {
            class_left_side.css({ 'left': '-50%', 'transition': '0.5s' });
            center_side.css({ 'left': '0', 'transition': '0.5s' });
            clicked = 0;
        }
    });
    btn_sub_menu.click(function () {
        if (clickedd == 0) {
            right_side.css({ 'right': '0', 'transition': '0.5s'});
            center_side.css({ 'left': '-50%', 'transition': '0.5s' });
            clickedd = 1;
        } else {
            right_side.css({ 'right': '-50%', 'transition': '0.5s' });
            center_side.css({ 'left': '0', 'transition': '0.5s' });
            clickedd = 0;
        }
    });
    btn_menu_1.click(function () {
        if (clicked == 0) {
            class_left_side.css({ 'left': '0', 'transition': '0.5s'});
            center_side.css({ 'left': '50%', 'transition': '0.5s' });
            right_side.css({ 'right': '-40%', 'transition': '0.5s' });
            clicked = 1;
        } else {
            class_left_side.css({ 'left': '-50%', 'transition': '0.5s' });
            center_side.css({ 'left': '0', 'transition': '0.5s' });
            right_side.css({ 'right': '0', 'transition': '0.5s' });
            clicked = 0;
        }
    });

    //Slide Show

    var slide = $('.krb-aside-slide');
    var slIndex = 0;

    slide.hide();
    slide.eq(slIndex).show();
    interval();

    $('.next').click(function () {
        slide.eq(slIndex).hide();
        slIndex++;
        if (slIndex == slide.length) {
            slIndex = 0;
        }
        slide.eq(slIndex).show();
    });
    $('.back').click(function () {
        slide.eq(slIndex).hide();
        if (slIndex == 0) {
            slIndex = slide.length;
        }
        slIndex--;
        slide.eq(slIndex).show();
    });

    var myVar;

    function interval() {
        myVar = setInterval(autoSlide, 4000);
    }

    function autoSlide() {
        //var dur = 
    //     $("#"+divname).show("slide", { direction: "left" }, 1000);
    // $("#"+divname).parent().siblings(":visible").hide("slide", { direction: "left" }, 1000);

        // if(slIndex==1){

        // }
        slide.eq(slIndex).hide();
        slIndex++;
        if (slIndex == slide.length) {
            slIndex = 0;
        }
        slide.eq(slIndex).show();
    }

    $('.krb-aside-slide').mouseover(function () {
        clearInterval(myVar);
    });

    $('.krb-aside-slide').mouseleave(function () {
        interval();
    });
});