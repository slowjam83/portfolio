//<![CDATA[
$(document).ready(function(){
	// 슬라이드 메뉴바 효과
	$('.m-gnb-btn').off('click').on(' click', function(e){
		e.preventDefault();
		$(this).toggleClass('open');
		$('#m-header').toggleClass('open');
		if($('#m-header').hasClass('open')){
			$('#m-header > ul').stop().delay(200).animate({'right':0},500);
		}else{
			$('#m-header > ul').css({'right':'-51%'});
		}
	});
	// gnb 링크 움직임 효과
	$("body").smoothScroll({
        delegateSelector: ".navi a",
		afterScroll:function(){
			var $scrollY = $(window).scrollTop();
			var $targetY = $scrollY - 140;
			var $wid = $(window).width();
			//console.log($scrollY, $targetY);
			if($wid >= 1025){
				$(window).scrollTop($targetY);
			}
		}
    });
	// 스크롤 이벤트
	$(window).scroll(function(){
		var $scroll = $(this).scrollTop(); // 상단에서 부터 이동한 스크롤 높이
		headScroll ($scroll);	// #header
		visualScroll ($scroll); // #visual
	});
	function headScroll ($scroll){
		if($scroll >= 10){
			$("#header").addClass("on");
			$("#header").find(".header_bg").hide();
		}else{
			$("#header").removeClass("on");
			$("#header").find(".header_bg").show();
		}
	}
	function visualScroll ($scroll){
		if($scroll > 500){
			$("#visual").find(".visual_logo").removeClass("flipInX").removeClass("delay-2s");
			$("#visual").find(".visual_txt1").removeClass("flipInY").removeClass("delay-3s");
			$("#visual").find(".visual_txt2").removeClass("flipInX").removeClass("delay-3s");
		}else if($scroll <= 500){
			$("#visual").find(".visual_logo").addClass("flipInX").addClass("delay-1s");
			$("#visual").find(".visual_txt1").addClass("flipInY").addClass("delay-2s");
			$("#visual").find(".visual_txt2").addClass("flipInX").addClass("delay-2s");
		}
	}
	// 서비스 준비중
	$(".noservice").on("click", function(e){
		e.preventDefault();
		alert("서비스 준비중입니다");
	});
});	
//]]>

// 포트폴리오 이미지(리스트, 뷰) 및 텍스트 준비
// 자기소개 텍스트 준비