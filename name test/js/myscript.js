$(function(){

	var carousel_img_ht=$("#carousel-example-generic .item:last-child").height();
	$("#carousel-example-generic iframe, .carousel-control").height(carousel_img_ht);
	// alert(carousel_img_ht);
	$(window).resize(function(){
		var carousel_img_ht=$("#carousel-example-generic .item:last-child").height();
		// alert(carousel_img_ht);
		$("#carousel-example-generic iframe, .carousel-control").height(carousel_img_ht);
		// alert(carousel_img_ht);
	})
	//이미지 갤러리를 담고있는 캐로셀의 자동순환시간변경
	$("#gallery_carousel").carousel({
		interval: 3000
		})
	// parallax 플러그인 연결
	$("#top").parallax({
		speed: .3
	});
	$("#icon_contents_01").parallax({
		speed : .3
	});
	$("#accordian_contents_02").parallax({
		speed : .3
	});
	$("#gallery_contents_03").parallax({
		speed : .3
	});
	$("#form_04").parallax({
		speed : .3
	});

	/*fancybox플러그인 연결*/
	$(".fancybox").fancybox();

	
	// waypoint연결
	$(".wp1").waypoint(function(direction){
		if(direction==="down"){
			$(".wp1").addClass("animated fadeInUp")
		}
	},{
		offset:"50%"
	})
	$(".wp1").waypoint(function(direction){
		if(direction==="up"){
			$(".wp1").removeClass("animated fadeInUp")
		}
	},{
		offset:"50%"
	})
	$(".wp2").waypoint(function(direction){
		if(direction==="down"){
			$(".wp2").addClass("animated fadeInDown")
		}
	},{
		offset:"40%"
	})
	$(".wp2").waypoint(function(direction){
		if(direction==="up"){
			$(".wp2").removeClass("animated fadeInDown")
		}
	},{
		offset:"40%"
	})
})
