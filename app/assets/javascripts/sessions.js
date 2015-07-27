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
				$('#searchResults').append('<img src='+giphs.data[i].images.original.url+'>');
			};
		});
		$('#gifSearch').animate({'margin-top':'0%'},1000,function(){
			$('#resultsView').fadeIn(2000);
			var more=true
			$('#resultsView').on('scroll',function(){
				if($('#resultsView').scrollTop() + $('#resultsView').height() > $('#searchResults').height()-100 && more) {
				more=false
				offset+=25;
				data="q="+$('#gifSearchField').val()+"&api_key=dc6zaTOxFJmzC&offset="+offset;
					$.get(url,data,function(giphs1){
						console.log(giphs1);
						for(i=0;i<giphs1.data.length;i++){
							$('#searchResults').append('<img src='+giphs1.data[i].images.original.url+'>');
						};
						more = true
					});
				};
			});
		});

	});



});