//<![CDATA[
$(document).ready(function(){
	// 포트폴리오 레이어창 띄우기
	var $port = $("#artist-list");
	var $item = $port.find(".element-item");
	var $por  = $item.find(".por");
	$por.on("click", function(e){
		var $dep = false;
		var $dep_idx = "";
		$por.removeClass("on");
		$(this).addClass("on");
		e.preventDefault();
		$por.each(function(){
			if($(this).hasClass("on")){
				$dep = true;
				//$dep_idx = $(this).parent().index();
				$dep_idx = $(this).data('item');
				return;
			}
		});
		loadFrame($dep_idx);	// 본문 불러오기 함수
		layShow();				// 레이어창 위치 함수
	});
	function layShow(){
		$("#lay-wrap").show();
		$(".lay-mask").show();
		$(".lay-cont").show();
		var $wid = $(window).width();
		var $wih = $(window).height();
		$(".lay-frame").css({"height":$wih - 60});
	}
	function loadFrame($dep_idx){
//		$(".lay-frame").load("/sub/port_" + $dep_idx + ".html", function(){
		$(".lay-frame").load("/sub/port_view_" + $dep_idx + ".html");
	}
	$(".lay-mask").on("click", function(){
		$(this).hide();
		$("#lay-wrap").hide();
		$(".lay-cont").hide();
		$(".lay-frame").html("");				// load된 html 파일 내용 지우기
	});
	$("#lay-wrap .lay-close").on("click", function(e){
		e.preventDefault();
		$("#lay-wrap").hide();
		$(".lay-cont").hide();
		$(".lay-mask").hide();
		$(".lay-frame").html("");				// load된 html 파일 내용 지우기
	});
});	
//]]>