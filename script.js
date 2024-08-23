// script.js
$(document).ready(function() {
    // Counter animation
    function animateCounter() {
        $('.counter').each(function() {
            var $this = $(this);
            var countTo = parseInt($this.attr('data-target'));
            
            $({ countNum: 0 }).animate({
                countNum: countTo
            },
            {
                duration: 2000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    }

    // Trigger counter animation when the element comes into view
    $(window).scroll(function() {
        var counterTop = $('#counter').offset().top;
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();

        if (scroll + windowHeight > counterTop) {
            animateCounter();
            $(window).off('scroll'); // Remove the scroll event listener after animation
        }
    });
});
