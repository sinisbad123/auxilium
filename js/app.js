$(document).foundation();

$(document).ready(function() {
	var error_message = $('#error_message');
	var loading_message = $('#loading_message');
	var success_message = $('#success_message');

	error_message.hide();
	loading_message.hide();
	success_message.hide();

	$('form').submit(function(e) {
		e.preventDefault();
		error_message.hide();
		loading_message.show();

		var name = $('#full_name').val().trim();
		var email = $('#email').val().trim();
		var valid_email = validateEmail(email);

		if (name != '' && valid_email) {
			var subscribe_object = {
				name: name,
				email: email,
			};

			$.ajax({
			   url: 'api/subscribe_api.php',
			   data: {subscribe_data: subscribe_object},
			   type: 'POST',
			   success: function(response) {
          console.log("raw response", response);
			   	var response_data = jQuery.parseJSON(response);
          console.log('response',response_data);
			   	
			   	if (response_data.status == 'success') {
			   		error_message.hide();
			   		success_message.html("Subscribed! You'll hear from us soon, " + name + " ;)");
			   		success_message.show();
			   		$('form').hide();
		   		} else if (response_data.status == 'error') {
		   			error_message.show();
		   			error_message.html(response_data.message);
		   		}

			   	loading_message.hide();
			   },
			   error: function (xhr, ajaxOptions, thrownError) {
		        error_message.show();
            error_message.html('There was a problem, please try again later.');
            loading_message.hide();
      	 }
			});

		} else {
			error_message.show();
			error_message.html('Please check your name and email.');
			loading_message.hide();
		}

	});
});


function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
