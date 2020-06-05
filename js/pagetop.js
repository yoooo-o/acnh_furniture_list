$(function() {
	var topBtn = $('#page-top');

	topBtn.hide();
	//スクロールが600に達したらボタン表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 600) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});

	//スクロールしてトップ
        topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 700, 'easeOutCubic');
		return false;
        });
});

$(function(){
	$('a[href^=#]').click(function() {
		var speed = 300;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "easeOutQuad");
		return false;
	});
});
