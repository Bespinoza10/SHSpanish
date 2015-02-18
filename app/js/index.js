//We are making Fb a shorcut for the Firebase URL

var FIREBASE_URL = 'https://springhspanish.firebaseio.com/',
fb = new Firebase(FIREBASE_URL),
authData = fb.getAuth();

//Making the log in function

$('.LogIn').click(function(event){
	event.preventDefault()
	var email = $('#email').val();
	var password = $('#password').val();
	fb.authWithPassword({
		email:    email,
		password: password
	}, function(error, authData){
		if(error){
			console.log("Log In Failed, Please try again.", error)
		} else{
			console.log("Welcome, your log in was succesfull", authData)
		}
	})
})

if(authData) {
	  // if user is logged in, remove the login div from dom
	  $('.app').toggleClass('.hidden');
}
