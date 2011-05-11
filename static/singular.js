$(document).ready(function() {
	$('#passwordform').keypress(function(e) {
		if (e.keyCode == 13) {
            return false;
        }
	});

    $("#passwordform").keyup(function(e) {
		passwordEntered($("#passwordbox").val())
    });

	$("#passwordbox").select();
});

function passwordEntered(password){
	if (password.length > 0){
		$.post("/newpass", {hash: Sha1.hash(password)}, function(response){
			$("#results").replaceWith("<li>That has been entered "+response+" times.</li>")
		});
	}
}
