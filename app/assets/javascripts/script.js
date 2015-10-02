$(function(){

$("#userSrchBtn").on('click',function(e){
		e.preventDefault()
		$('#usrSrchRslts').html('')
		var srchTrm = $('#userSearchField').val() || '*'
		console.log(srchTrm)
		var rslt=$.ajax({
			url:'/search',
			method: 'GET',
			data: {'user_name': srchTrm}
		}).done(function(e){
			console.log(rslt);
			for(i=0;i<rslt.responseJSON.length;i++){
			$('#usrSrchRslts').append("<div><p><img src='http://res.cloudinary.com/hx0wmncm4/image/upload/c_fill,h_40,w_40/"+rslt.responseJSON[i].pic+"'><strong>"+rslt.responseJSON[i].user_name+"</strong><button class='btn btn-default'><a href='/users/"+rslt.responseJSON[i].id+"'>Profile.</a></button><button class='followBtn btn btn-default' frndId='"+rslt.responseJSON[i].id+"'>Follow.</button><div class='clear'></div></p></div>");
			};
    	});
	});
$("#userModSrchBtn").on('click',function(e){
		e.preventDefault()
		$('#usrSrchRslts').html('')
		var srchTrm = $('#userModSearchField').val() || '*'
		console.log(srchTrm)
		var rslt=$.ajax({
			url:'/search',
			method: 'GET',
			data: {'user_name': srchTrm}
		}).done(function(e){
			console.log(rslt);
			for(i=0;i<rslt.responseJSON.length;i++){
			$('#usrSrchRslts').append("<div><p><img src='http://res.cloudinary.com/hx0wmncm4/image/upload/c_fill,h_40,w_40/"+rslt.responseJSON[i].pic+"'><strong>"+rslt.responseJSON[i].user_name+"</strong><button class='btn btn-default'><a href='/users/"+rslt.responseJSON[i].id+"'>Profile.</a></button><button class='followBtn btn btn-default' frndId='"+rslt.responseJSON[i].id+"'>Follow.</button><div class='clear'></div></p></div>");
			};
    	});
	});


$('#usrSrchRslts').on('click','.followBtn',function(e){
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

});