$('.card__header').click(function() {
    let main = $(this).siblings('main');
    main.stop()
    if(main.attr('opened') === "true"){
        main.slideUp(400);
        main.attr('opened', "false")
    }
    else {
        main.slideDown(400);
        main.attr('opened', "true")
    }
})