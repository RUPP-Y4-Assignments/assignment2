// import 'jquery-2.2.4.min.js';


$(document).ready(function () {
//     if($(window).width() > 768){
//         alert(1);
//   }
    // var btn_menu = $('#btn-menu');
    // var class_left_side = $('.fixed.left-side>#krb-aside');
    // var center_side = $('.center-side'), clicked = 0;
    // btn_menu.click(function () {
    //     // class_left_side.css({"display":"block"})

    //     if (clicked == 0) {
    //         class_left_side.css({'width':'70%','overflow-y':'scroll'})
    //         class_left_side.show()
    //         center_side.css({'left':'70%','width': '30%' ,'transition':'0.5s'})
    //         clicked = 1;
    //     } else {
    //         class_left_side.hide()
    //         center_side.css({ 'left': '0', 'width': '100%' })
    //         clicked = 0;
    //     }

    // })
    // console.log(Response.viewportW());

    var btn_menu = $('#btn-menu');
    var class_left_side = $('.left-side');
    // var class_left_side = $('.fixed .left-side');
    var center_side = $('.center-side'), clicked = 0;

    btn_menu.click(function () {

        if (clicked == 0) {
            class_left_side.css({'left':'0','transition':'0.5s'});
            center_side.css({'left':'50%','transition':'0.5s'});
            clicked = 1;
        } else {
            class_left_side.css({'left':'-50%','transition':'0.5s'});
            center_side.css({ 'left': '0','transition':'0.5s'});
            clicked = 0;
        }

    });
});