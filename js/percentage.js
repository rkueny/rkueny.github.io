$(document).ready(function() {
 	
 	var percentage = 0;
 	var scrollTop = 0;

 	$(window).scroll(function(e){
		scrollTop = $(window).scrollTop();
		var docHeight = $(document).height();
		var winHeight = $(window).height();
		var scrollPercent = (scrollTop) / (docHeight - winHeight);
		var scrollPercentRounded = Math.round(scrollPercent*100)/100;
		 
		percentage = scrollPercentRounded * 100;

		$('#scrollPercentLabel>span').html(scrollPercentRounded);
		repositionLabel();
	});
 
	$(window).resize(function(){
		repositionLabel();
	});
	 
	function repositionLabel() {
		if (scrollTop >= 570) {
			$('#indicator').show();

			var speed = 15;
			$('#scrollPercentLabel').animate( { width: percentage + "%" }, speed );
		} else {
			$('#indicator').hide();
			$('#scrollPercentLabel').css({'width': 0});
		}
	}
	 
	repositionLabel();
});
