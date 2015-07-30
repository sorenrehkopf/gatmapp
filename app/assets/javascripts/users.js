$(function(){

$("#userSrchBtn").on('click',function(e){
		e.preventDefault()
	});

$("#collectionView").on('click','.save',function(e){
		e.preventDefault()
		// console.log($(this).attr('imgurl'))
		var imgSrc = $(this).parent().attr('imgurl');
		$.ajax({
			url:'/gifs',
			method: 'POST',
			data: {'url': imgSrc}
		}).done(function(){
			console.log(imgSrc)
		}).error(function(err){
			console.log(err)
		});
	});

});