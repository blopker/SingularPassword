$(document).ready(function() {
    $("#passwordform").keyup(function(e) {
		if (e.keyCode == 13) {
            return false;
        }
		passwordEntered($("#passwordbox").val())
    });

	$("#passwordbox").select();
});

function passwordEntered(password){
	$("#results").append("<li>"+password+"</li>")
}
