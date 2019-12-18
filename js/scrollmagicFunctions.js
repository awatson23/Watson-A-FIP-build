var controller = new ScrollMagic.Controller();
    
    var scroll1 = new ScrollMagic.Scene({
        triggerElement: '#welcome',
        triggerHook: 0,
        reverse: false,
        })
        .setClassToggle('#arrow', 'scroll-anim')
        .addTo(controller);

        

        var scroll2 = new ScrollMagic.Scene({
            triggerElement: '#mapLegend',
            triggerHook: .8,
            
            })
            .setClassToggle('#mapLegend', 'scroll-anim')
            .addTo(controller);

