$(function(){

$("#userSrchBtn").on('click',function(e){
		e.preventDefault()
		$('#usrSrchRslts').html('')
		var srchTrm = $('#userSearchField').val() || '*'
		console.log(srchTrm)
		var rslt=$.ajax({
			url:'search',
			method: 'GET',
			data: {'user_name': srchTrm}
		}).done(function(e){
			console.log(rslt);
			for(i=0;i<rslt.responseJSON.length;i++){
			$('#usrSrchRslts').append("<div><p><img src='"+rslt.responseJSON[i].pic+"'>"+rslt.responseJSON[i].user_name+"</p></div>");
			};
    	});
	});

});