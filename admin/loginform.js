function validate() {
    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;
    if (name == "Sukitto" && pass == "Koloszvar96") {
        alert("Login successfully");
		event.preventDefault();
        window.location.href = "admin.html"; // Redirecting to other page.
		return false;
    } else {
		alert("Wrong password buddy, try again.");
	
	}}
