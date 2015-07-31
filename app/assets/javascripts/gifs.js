$(function(){

	$("#userSrchBtn").on('click',function(e){
		e.preventDefault()
	})

$("#collectionView").on('mouseover','div',function(){
		$(this).children().animate({opacity:'0.7'},0);
	});

	$("#collectionView").on('mouseout','div',function(){
		$(this).children().animate({opacity:'0.0'},0);
	});

	$("#collectionView").on('mouseover','img',function(){
		$(this).animate({height:'22%'},100);
	});

	$("#collectionView").on('mouseout','img',function(){
		$(this).animate({height:'17.5%'},100);
	});

	$("#collectionView").on('click','.show',function(e){
		e.preventDefault()
		var imgSrc = $(this).parent().attr('imgurl');
		$('#gifExpandImg').html('<img src="'+imgSrc+'">')

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
			url:'/gifs/'+imgId,
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
		var imgSrc = $(this).parent().attr('imgurl');
		$(".notification").html('Successfully posted.')
		$(".notification").fadeIn(400).delay(400)
		$(".notification").fadeOut(1000)
		console.log(imgSrc)
		$.ajax({
			url:'/posts',
			method: 'POST',
			data: {'url': imgSrc}
		}).done(function(e){
			console.log('done!')
		}).error(function(err){
			console.log(err)
		});
	});


});