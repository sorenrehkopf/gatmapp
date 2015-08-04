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
			$('#usrSrchRslts').append("<div><p><img src='http://res.cloudinary.com/hx0wmncm4/image/upload/c_fill,h_40,w_40/"+rslt.responseJSON[i].pic+"'><strong>"+rslt.responseJSON[i].user_name+"</strong><button class='followBtn'>Follow.</button><div class='clear'></div></p></div>");
			};
    	});
	});

});