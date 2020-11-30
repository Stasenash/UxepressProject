$(document).ready(function () {
    $('label[for=r2]').css('background', '#264160');
});

var label = $("label[for=r1],label[for=r2]");

function change() {
    $(label).css('background', '#264160');
    $(this).css('background', 'none');
}


var x = false,
    timeOut = 5000;
setTimeout(autoslide(), timeOut);
var coin = 0;
$(label[0]).css('background', 'none');

function autoslide() {
    $(label).css('background', '#264160');
    if (coin == 1) {
        if (x == false) {
            right();

            $(label[1]).css('background', 'none');
        } else {
            left();

            $(label[0]).css('background', 'none');
        }
    }

    setTimeout(autoslide, timeOut);
}


/*Движение слайдов*/
coin = 1;
var f = true;


$(label[1]).click(right);
$(label).click(change);
$(label[0]).click(left);


function left() {
    if (x == true) {
        $('#slider1').css('left', '0%');
        $('#slider2').css('left', '-50%');
        $('.block').css('z-index', '6');
        setTimeout(function () {
            $('#slider2').css('transition', '0s');
            $('#slider2').css('opacity', '0');
            setTimeout(function () {
                $('#slider2').css('left', '50%');
                setTimeout(function () {
                    $('#slider2').css('opacity', '1');
                    $('#slider2').css('transition', '1s');
                    $('.block').css('z-index', '4');
                }, 20);
            }, 10);
        }, 600);
    }
    x = false;
}

function right() {

    if (x == false) {
        $('#slider2').css('left', '0%');
        $('#slider1').css('left', '-50%');
        $('.block').css('z-index', '6');
        setTimeout(function () {
            $('#slider1').css('transition', '0s');
            $('#slider1').css('opacity', '0');
            setTimeout(function () {
                $('#slider1').css('left', '50%');
                setTimeout(function () {
                    $('#slider1').css('opacity', '1');
                    $('#slider1').css('transition', '1s');
                    $('.block').css('z-index', '4');
                }, 20);
            }, 10);
        }, 600);
    }
    x = true;
}





