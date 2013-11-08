var num = 0;
document.ready = function()
{
	var Xces = $('X-marker')
		Xces = true
	var Circle = $('O-marker')
		circle = false

	$('input').click(function(){
		$('td').removeClass('X-marker').removeClass('O-marker')
		num = 0
	})
	$('td').click(function()
	{
		if (num%2==0)
		{
			$(this).addClass('X-marker')
			$('#X').removeClass('current-player')
			$('#O').addClass('current-player')
			num = num + 1
			
		}
		else 
		{
		$(this).addClass('O-marker')
		$('#X').addClass('current-player')
		$('#O').removeClass('current-player')
		
		num = num + 1
		}
	 })
	function boxcheckx(n){
		if ($('td').eq(n).attr("X-marker")){
			return true
		}
		else 
		{
			return false
		}
	 }
	 function boxchecko(n)
	 	if ($('td').eq(n).attr("O-marker")){
	 		return true
	 	} 
	 	else 
	 	{
	 		return false
	 	}
	 }
	 var boxes = $('td')
	 var 
	 function win()
	 	if (boxcheckx

};






