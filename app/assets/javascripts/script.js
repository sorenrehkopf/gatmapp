$(function(){

$("#userSrchBtn").on('click',function(e){
		e.preventDefault()
		var srchTrm = $('#userSearchField').val() || '*'
		console.log(srchTrm)
		$.ajax({
			url:'search',
			method: 'GET',
			data: {'user_name': srchTrm}
		}).done(function(e){
			console.log(result)
    	});
	});

});