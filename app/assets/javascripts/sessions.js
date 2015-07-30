$(function(){

	$('#srchBtn').on('click',function(e){
    	e.preventDefault();
    	$('#searchResults').html('');
    	var url="http://api.giphy.com/v1/gifs/search";
		var data="q="+$('#gifSearchField').val()+"&api_key=dc6zaTOxFJmzC";
		var offset=0
		$.get(url,data,function(giphs){
			offset+=25;
			console.log(giphs);
			for(i=0;i<giphs.data.length;i++){
				// $('#searchResults').append('<a href="/gifs/'+giphs.data[i].id+'"><img src='+giphs.data[i].images.original.url+'></a>');
				$('#searchResults').append('<div class="imageDiv" imgurl="'+giphs.data[i].images.original.url+'" style="background-image: url('+giphs.data[i].images.original.url+');"><img class="show" src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672382-expand-128.png"><img class="save" src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-128.png"><img class="post" src="https://d30y9cdsu7xlg0.cloudfront.net/png/1490-200.png"></div>' );
			};
		});
		$('#gifSearch').animate({'margin-top':'0%'},1000,function(){
			$('#resultsView').fadeIn(1500);
			$('#mainView').addClass('dimmed');
			var more=true;
			$('#resultsView').on('scroll',function(){
				if($('#resultsView').scrollTop() + $('#resultsView').height() > $('#searchResults').height()-100 && more) {
				more=false
				offset+=25;
				data="q="+$('#gifSearchField').val()+"&api_key=dc6zaTOxFJmzC&offset="+offset;
					$.get(url,data,function(giphs1){
						console.log(giphs1);
						for(i=0;i<giphs1.data.length;i++){
							$('#searchResults').append('<div class="imageDiv" imgurl="'+giphs.data[i].images.original.url+'" style="background-image: url('+giphs.data[i].images.original.url+');"><img class="show" src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672382-expand-128.png"><img class="save" src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-128.png"><img class="post" src="https://d30y9cdsu7xlg0.cloudfront.net/png/1490-200.png"></div>' );
						};
						more = true
					});
				};
			});
		});

	});

	$("#searchResults").on('mouseover','div',function(){
		$(this).children().animate({opacity:'0.7'},0);
	});

	$("#searchResults").on('mouseout','div',function(){
		$(this).children().animate({opacity:'0.0'},0);
	});

	$("#searchResults").on('mouseover','img',function(){
		$(this).animate({height:'22%'},100);
	});

	$("#searchResults").on('mouseout','img',function(){
		$(this).animate({height:'17.5%'},100);
	});

	$("#searchResults").on('click','.save',function(e){
		e.preventDefault()
		// console.log($(this).attr('imgurl'))
		var imgSrc = $(this).parent().attr('imgurl');

		$.ajax({
			url:'/gifs',
			method: 'POST',
			data: {'url': imgSrc}
		}).done(function(){
			$(".notification").html('Saved to your collection.')
			$(".notification").fadeIn(400).delay(600)
			$(".notification").fadeOut(1000)
		}).error(function(err){
			console.log(err)
		});
	});

	$("#searchResults").on('click','.post',function(e){
		e.preventDefault()
		// console.log($(this).attr('imgurl'))
		var imgSrc = $(this).parent().attr('imgurl');
		$.ajax({
			url:'/posts',
			method: 'POST',
			data: {'url': imgSrc}
		}).done(function(){
			$(".notification").html('Successfully posted.')
			$(".notification").fadeIn(400).delay(400)
			$(".notification").fadeOut(1000)
			console.log(imgSrc)
		}).error(function(err){
			console.log(err)
		});
	});

	$("#userSrchBtn").on('click',function(e){
		e.preventDefault()
		var srch = $('#userSearchField').val();
		alert(srch)
		// $.ajax({
		// 	url:'/users/'+imgId,
		// 	method: 'GET',
		// 	data: {'user_name': imgId}
		// }).done(function(e){
		// 	console.log(e)
		// 	btn.remove()
		// 	// console.log(imgId)
		// }).error(function(err){
		// 	// console.log(err)
		// });
	});


});