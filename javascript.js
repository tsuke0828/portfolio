var bar = new ProgressBar.Line(splash_text, {
	easing: 'easeInOut',
	duration: 1000,
	strokeWidth: 30,//進捗ゲージの太さ
	color: '#cdbe78',//進捗ゲージのカラー
	trailWidth: 30,//ゲージベースの線の太さ
	trailColor: '#f2f2f2',
	text: {	
		style: {
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',
			transform:'translate(-50%,-50%)',
			'font-size':'3rem',
			color: '#cdbe78',
		},
		autoStyleContainer: false 
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); 
	}
});

//アニメーションスタート
bar.animate(1.0, function () {
	$("#splash_text").fadeOut(10);
	$(".loader_cover-up").addClass("coveranime");
	$(".loader_cover-down").addClass("coveranime");
	$("#splash").fadeOut();
});
$('.imgslid').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,
    
});

lightbox.option({
    'wrapAround': true,
    'albumLabel': ' %1 / total %2 '
})
