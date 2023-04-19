$(document).ready (function(){
  
  /*** placeholder snippet for older browsers [start] ***/
  $(":input[placeholder]").each (function () {
    var input = $(this);
    input.addClass("placeholder");
    input.val(input.attr("placeholder"));
 
    $(this).focus(function() {
		  var input = $(this);
		  if (input.val() == input.attr("placeholder")) {
		    input.val("");
		    input.removeClass("placeholder");
		  }
	  });

	  $(this).blur(function() {
		  var input = $(this);
		  if (input.val() == "" || input.val() == input.attr("placeholder")) {
			  input.addClass("placeholder");
			  input.val(input.attr("placeholder"));
		  }
	  })
  });
  /*** placeholder snippet for older browsers [end] ***/
  
  /*** custom validation methods [start] ***/
  $.validator.addMethod(
    "notplaceholder", 
    function(value, element){
      return ($(element).attr("placeholder") != value);
    }, 
    "Please enter a value"
  );
  /*** custom validation methods [end] ***/
  
  // jquery validate initialisation
  $("#UserForm").validate({
	  rules: {
		  name : {
			  required    : true,
			  notplaceholder  : true
		  },
		  dob : {
			  required   : true,
			  notplaceholder  : true
		  },
		  occupation : {
  			required : true,
  			notplaceholder  : true
  		},
  		cell : {
  			required    : true,
  			digits      : true,
  			minlength   : 1,
  			maxlength   : 14,
  			notplaceholder  : true
  		},
  		email : {
  			required    : true,
  			email       : true,
  			notplaceholder  : true
  		},
  		city : {
  			required : true,
  			notplaceholder  : true
  		}
  	},
  	errorPlacement: function(error, element) {
      $(element).addClass("error");
    },
  	submitHandler: function(form){
  
  if (window.confirm('If you click "ok" you would be redirected . Cancel will load this website ')) 
{
window.location.href='https://uefa-champions-league-seven.vercel.app/';
};
  	}
  });
  
});