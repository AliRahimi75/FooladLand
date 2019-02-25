		function myFunction() {
		    var x = document.getElementById("myPsw").value;
		    document.getElementById("demo").innerHTML = "Your password = " + x;
		    var name = document.getElementById("myText").value;
		    var message = "Hello " + name + "!" 
		    console.log(
		    	message
		    );
		    document.getElementById("demo").innerHTML = message;
		}