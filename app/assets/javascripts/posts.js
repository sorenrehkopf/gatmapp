$(function(){

	$("#userSrchBtn").on('click',function(e){
		e.preventDefault()
	});

	$("#collectionView").on('click','.delete',function(e){
		e.preventDefault()
		var imgId = $(this).parent().attr('imgId');
		console.log(imgId)
		var btn = $(this).parent()
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

	$("#collectionView").on('click','.post',function(e){
		e.preventDefault()
		// console.log($(this).attr('imgurl'))
		var imgSrc = $(this).parent().attr('imgurl');
		var btn = $(this).parent().html()
		$.ajax({
			url:'/posts',
			method: 'POST',
			data: {'url': imgSrc}
		}).done(function(){
			$(".notification").html('Re-posted.')
			$(".notification").fadeIn(400).delay(400)
			$(".notification").fadeOut(1000)
			console.log(imgSrc)
		}).error(function(err){
			console.log(err)
		});
	});

});