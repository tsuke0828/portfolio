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
particlesJS("particles-js", {
	"particles":{
		"number":{
			"value":200,//この数値を変更すると星の数が増減できる
			"density":{
				"enable":true,
				"value_area":800
			}
		},
		"color":{
			"value":"#ffffff"
		},
		"shape":{
			"type":"circle",
			"stroke":{
				"width":0
			},
			},
		"opacity":{
			"value":0.5,
			"random":true,
			"anim":{
				"enable":true,
				"speed":3,
				"opacity_min":0,
				"sync":false
			}
		},
		"size":{
			"value":2,
			"random":true,
			"anim":{
				"enable":false,
				"speed":2,
				"size_min":0.3,
				"sync":false
			}
		},
		"line_linked":{
			"enable":false,
		},
		"move":{
			"enable":true,
			"speed":10,
		"direction":"none",
		"random":true,
		"straight":true,
			"out_mode":"out",
			"bounce":false,
			"attract":{
				"enable":false,
				"rotateX":600,
				"rotateY":600
			}
		}
	},
	"interactivity":{
		"detect_on":"canvas",
		"events":{
			"onhover":{
				"enable":false,
			},
			"onclick":{
				"enable":false,
			},
			"resize":true
		}
	},
	"retina_detect":true
});