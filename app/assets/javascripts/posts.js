$(function(){

	$("#userSrchBtn").on('click',function(e){
		e.preventDefault()
	});

	$(".opImgDiv").on('mouseover','img',function(){
		$(this).animate({opacity:'0.8'},0);
	});

	$(".opImgDiv").on('mouseout','img',function(){
		$(this).animate({opacity:'0.4'},0);
	});

	// $(".opImgDiv").on('mouseover','img',function(){
	// 	$(this).animate({height:'60px'},100);
	// });

	// $(".opImgDiv").on('mouseout','img',function(){
	// 	$(this).animate({height:'40px'},100);
	// });
	
	$(".opImgDiv").on('click','.show',function(e){
		e.preventDefault()
		var imgSrc = $(this).parent().attr('imgUrl');
		$('#gifExpandImg').html('<img src="'+imgSrc+'">')

	});

	$(".opImgDiv").on('click','.delete',function(e){
		e.preventDefault()
		var imgId = $(this).parent().attr('imgId');
		console.log(imgId)
		var btn = $(this).parent().parent()
		$(".notification").html('Successfully deleted.')
			$(".notification").fadeIn(400).delay(400)
			$(".notification").fadeOut(1000)
		$.ajax({
			url:'/posts/'+imgId,
			method: 'DELETE',
			data: {'id': imgId}
		}).done(function(e){
			console.log(e)
			btn.remove()
			// console.log(imgId)
		}).error(function(err){
			// console.log(err)
		});
	});

	$(".opImgDiv").on('click','.post',function(e){
		e.preventDefault()
		// console.log($(this).attr('imgurl'))
		var imgSrc = $(this).parent().attr('imgUrl');
		$(".notification").html('Re-posted.')
		$(".notification").fadeIn(400).delay(400)
		$(".notification").fadeOut(1000)
		$.ajax({
			url:'/posts',
			method: 'POST',
			data: {'url': imgSrc}
		}).done(function(){
			console.log(imgSrc)
		}).error(function(err){
			console.log(err)
		});
	});

});