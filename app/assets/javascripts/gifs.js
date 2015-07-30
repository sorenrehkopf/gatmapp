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


	$("#collectionView").on('click','.delete',function(e){
		e.preventDefault()
		// console.log($(this).attr('imgurl'))
		var imgSrc = $(this).parent().attr('imgurl');
		$.ajax({
			url:'/gifs',
			method: 'DELETE',
		}).done(function(){
			console.log(imgSrc)
		}).error(function(err){
			console.log(err)
		});
	});

	$("#collectionView").on('click','.post',function(e){
		e.preventDefault()
		// console.log($(this).attr('imgurl'))
		var imgSrc = $(this).parent().attr('imgurl');
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