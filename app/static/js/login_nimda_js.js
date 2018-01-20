 $('#submit').on('click', function(){
		var form = $('#log').serialize();
		
		$.post('/nimda', form).done(function(data) {
				if(data=="False" && $('#err').length==0){
					$('#log').prepend('<p id = "err" class = "alert alert-info" align = "centre" > Incorrect!</p>');
				}
				else
				{
					$('#err').remove();
					document.location.href = '/nimda/'+data;  
				}
		});
});