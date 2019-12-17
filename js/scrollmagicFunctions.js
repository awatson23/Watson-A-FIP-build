
    var info1 = new ScrollMagic.Scene({
        triggerElement: '#welcome',
        triggerHook: .7,
        })
        .setClassToggle('#arrow', 'scroll-anim')
        .addTo(controller);
