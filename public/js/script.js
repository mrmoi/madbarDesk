$('.carousel').carousel({
    interval: 3000
});

$(window).scroll(function() {
    $('#playerImage').each(function(){
        var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+300) {
				$(this).addClass("hatch");
			}
    });
});