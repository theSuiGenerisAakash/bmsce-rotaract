window.i = 0;
window.total_file = 0;

function preview_images()
{
	window.added =  document.getElementById("images").files.length;
	window.total_file += added;
	
    for (window.i =0; window.i<window.added;window.i++)
    {
        $('#image_preview').append("<div class='col-md-3'><img class='img-responsive' src='"+URL.createObjectURL(event.target.files[window.i])+"'></div>");
    }
	
	window.i = window.total_file - window.added;
	
    for (; window.i<total_file; window.i++)
    {
        $('#comments').append('<div style="white-space:nowrap">\
                              <label for="photo'+(window.i+1)+'">Content for photo'+(window.i+1)+':</label>\
                              <input type="text" name="photo'+(window.i+1)+'"></input>\
                              </div><br/>');
        last = i;
    }

}