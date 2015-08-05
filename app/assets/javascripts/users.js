$(function(){

$("#userSrchBtn").on('click',function(e){
		e.preventDefault()
	});

$('.followProfBtn').on('click',function(e){
		e.preventDefault();
		var frndId=$(this).attr('frndId')
		var btnTxt = $(this)
		console.log(frndId)
		$.ajax({
			url:'/friendships',
			method: 'POST',
			data: {'friend_id': frndId}
		}).done(function(e){
			console.log('followed!')
			btnTxt.html('Followed!');
		});

	});

$(".profScroll").on('click','.show',function(e){
	e.preventDefault()
	var imgSrc = $(this).parent().attr('imgUrl');
	$('#gifExpandImg').html('<img src="'+imgSrc+'">')

});

$(".profScroll").on('click','.save',function(e){
		e.preventDefault()
		// console.log($(this).attr('imgurl'))
		var imgSrc = $(this).parent().attr('imgurl');
		$(".notification").html('Saved to your collection.')
		$(".notification").fadeIn(400).delay(600)
		$(".notification").fadeOut(1000)
		$.ajax({
			url:'/gifs',
			method: 'POST',
			data: {'url': imgSrc}
		}).done(function(){
		}).error(function(err){
			console.log(err)
		});
	});

	$(".profScroll").on('click','.post',function(e){
		e.preventDefault()
		// console.log($(this).attr('imgurl'))
		var imgSrc = $(this).parent().attr('imgurl');
		$(".notification").html('Successfully posted.')
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