var ignoredKeyCodes = [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 91, 92, 93, 94, 95, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 189, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249]

$(document).ready(function() {
	// No default action on enter.
	$('#passwordform').keypress(function(e) {
		if (e.keyCode == 13) {
            return false;
        }
	});

    $("#passwordform").keyup(function(e) {
		$("#passwordbox").val($("#passwordbox").val());
		if (ignoredKeyCodes.indexOf(e.keyCode) === -1) {
            passwordEntered($("#passwordbox").val());
        }
    });

	$("#passwordbox").select();
});

function passwordEntered(password){
		var passHash = Sha1.hash(password);
		$.post("/newpass", {hash: passHash}, function(response){
			if (response === '1'){
				var message = "You found a singular password!";			
			} else {
				var message = "That password has been entered " + response + " times.";
			}
			$("#results").replaceWith("<div id=results>"+message+"</div>");
		});
}
