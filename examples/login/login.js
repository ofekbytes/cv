
/***
 * 
 */
 var glUser = '';
 var glPassword = '';



 /***
  *  onload - check if ready.
  */
$( document ).ready(function() {
    // DOM ready

    loadProfile();
});



/***
 * loadProfile() - load all element/event in form.
 */
function loadProfile() 
{

	// #inputUser
	$("#inputUser").on("keyup", function () 
	{
		var stUser = $(this).val();
	
		glUser = stUser;
	});

	
	// #inputPassword - password - with enter -
	$("#inputUser").keypress(function (e) 
	{
		//enter pressed
		if (e.which == 13) 
		{			
			fnSubmitLogin();						
		}
	})	

	
	// #inputPassword
	$("#inputPassword").on("keyup", function () 
	{
		var stPassword = $(this).val();
	
		glPassword = stPassword;
	});


	// #inputPassword - password - with enter -
	$("#inputPassword").keypress(function (e) 
	{
		//enter pressed
		if (e.which == 13) 
		{			
			fnSubmitLogin();						
		}
	})	

	// submit button - click
	document.getElementById('submit').addEventListener('click', fnSubmitLogin);

}



/****
 * fnSubmitLogin() - get user & password
 */
function fnSubmitLogin()
{
	console.log("fnSubmitLogin()");
	console.log(":::" + glUser + ":::" + glPassword);

	if ( (glUser.length <= 0) || (glPassword.length <= 0) )
	{
		fnMessages(999);
		fnCleanPage();
		fnMessages(2);

		console.log('here');
	}
	else
	{
		fnMessages(4);
		
		$.post("http://localhost:8080/login-validation", 
		{
			glUser: String(glUser),
			glPassword: String(glPassword),
		},
		function(data, status)
		{
			// gData =  data;
			console.log("data >> " + data);
	
			// //display return data.
			// document.getElementById("mpTableData").innerHTML = gData;   


			// if (gData == '9999')
			// {
			//   //document.getElementById("barcodeSearch").innerHTML = " < " +  barcode + " > --- " + "ברקוד לא נימצא";

			  
			//   SoundError.play();

			//   document.getElementById("barcodeSearch").value = " < " +  barcode + " > --- " + "ברקוד לא נימצא";
			//  // console.error(gData); 
			//   alert(" < " +  barcode + " > --- " + "ברקוד לא נימצא");
			  
			  
			//   document.getElementById("barcodeSearch").value = "";
			//   document.getElementById("output").text = "";
			//   document.getElementById("mpTableData").innerHTML = "";

			// }
			// else
			// {
			//   document.getElementById("output").text = ""; // //print table element to console//
			//   document.getElementById("barcodeSearch").value = "";
			// }

	
		});
	} //else

	fnCleanPage();
}



/****
 * fnCleanPage() - clearn all page console/form.
 */
function fnCleanPage()
{
	console.log("clean all page");
	document.getElementById("inputUser").value = "";
	document.getElementById("inputPassword").value = "";

	glUser = "";
	glPassword = "";
	console.log(":::" + glUser + ":::" + glPassword);

}



/****
 * fnMessages() - form messages.
 */
function fnMessages(number)
{
	var output = '';

	switch(number) 
	{
		case 1:
			output = 'please wait';
			break;
		case 2:
			output = 'please enter user -and- password';
			break;
		case 3: 
			output = 'incorrect user -or- password';
			break;
		case 4:
			output = " ::: OK ::: ";
			break;
		case 999:
			output = '&nbsp;&nbsp;&nbsp;&nbsp;'; 
			break;
		default:
			output = '&nbsp;&nbsp;&nbsp;&nbsp;'; 
	}

	document.getElementById("FormOutput").innerHTML = "<u>" + output + "</u>";
	console.log("output = " + output + " number " + number);
}

/////////////////////////////////////////
//// erase/delete all console.* in code and this code too.
////////////////////////////////////////
