// import 'jquery-2.2.4.min.js';


$(document).ready(function () {
    var btn_menu = $('#btn-menu');
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
});