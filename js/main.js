$(document).ready(function () {
    var $elm2 = $('.partners-row2');
    var $elm = $('.partners-row1'); 


    function run(v) {
        // clone the array (before "animate()" modifies it), and reverse it
        var reversed = JSON.parse(JSON.stringify(v)).reverse();

        $(v[0]).animate(v[1], {
            duration: 26000,
            easing: 'linear',
            step: function (val) {
                $elm.css("transform", `translateX(-${val}px)`);
            },
            done: function () {
                run(reversed)
            }
        })
    };

    function run2(c) {
        // clone the array (before "animate()" modifies it), and reverse it
        var reversed2 = JSON.parse(JSON.stringify(c)).reverse();


        $(c[0]).animate(c[1], {
            duration: 32000,
            easing: 'linear',
            step: function (val) {
                $elm2.css("transform", `translateX(-${val}px)`);
            },
            done: function () {
                console.log('done');
                run2(reversed2)
            }
        })
    };

    var width = 0;
    $('.partners-row1 > *').each(function () { width += ($(this).width() + 50); });
    var parwidth = $elm.parent().width();
    var toscroll = width - parwidth;


    var width2 = 0;
    $('.partners-row2 > *').each(function () { width2 += ($(this).width() + 50); });
    var parwidth2 = $elm2.parent().width();
    var toscroll2 = width2 - parwidth2;   


    // "y" is arbitrary used as the key name 
    run([{ y: 0 }, { y: toscroll }]);
    run2([{ y: toscroll2 }, { y: 0 }])
});