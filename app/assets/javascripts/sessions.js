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
				$('#searchResults').append('<div class="imageDiv" imgurl="'+giphs.data[i].images.original.url+'" style="background-image: url('+giphs.data[i].images.original.url+');"><img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-128.png"><img src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672382-expand-128.png"></div>' );
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
							$('#searchResults').append('<div class="imageDiv" imgurl="'+giphs1.data[i].images.original.url+'" style="background-image: url('+giphs1.data[i].images.original.url+');"><img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-128.png"><img src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672382-expand-128.png"></div>' );
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

	$("#searchResults").on('click','div',function(){
		// e.preventDefault()
		// console.log($(this).attr('src'))
		// var imgSrc = $(this).attr('src');
		// $.ajax({
		// 	url:'/gifs',
		// 	method: 'POST',
		// 	data: {'url': imgSrc}
		// }).done(function(){

		// }).error(function(err){
		// 	console.log(err)
		// });
	});


});