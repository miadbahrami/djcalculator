$.ajaxSetup({ 
     beforeSend: function(xhr, settings) {
         function getCookie(name) {
             var cookieValue = null;
             if (document.cookie && document.cookie != '') {
                 var cookies = document.cookie.split(';');
                 for (var i = 0; i < cookies.length; i++) {
                     var cookie = jQuery.trim(cookies[i]);
                     // Does this cookie string begin with the name we want?
                 if (cookie.substring(0, name.length + 1) == (name + '=')) {
                     cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                     break;
                 }
             }
         }
         return cookieValue;
         }
         if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
             // Only send the token to relative URLs i.e. locally.
             xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
         }
     } 
});

$(document).ready(function() {
	$("#1").click(function() {
		$("#result").val($("#result").val() + $("#1").val());
	});
	
	$("#2").click(function() {
		$("#result").val($("#result").val() + $("#2").val());
	});
	
	$("#3").click(function() {
		$("#result").val($("#result").val() + $("#3").val());
	});
	
	$("#4").click(function() {
		$("#result").val($("#result").val() + $("#4").val());
	});
	
	$("#5").click(function() {
		$("#result").val($("#result").val() + $("#5").val());
	});
	
	$("#6").click(function() {
		$("#result").val($("#result").val() + $("#6").val());
	});
	
	$("#7").click(function() {
		$("#result").val($("#result").val() + $("#7").val());
	});
	
	$("#8").click(function() {
		$("#result").val($("#result").val() + $("#8").val());
	});
	
	$("#9").click(function() {
		$("#result").val($("#result").val() + $("#9").val());
	});
	
	$("#0").click(function() {
		$("#result").val($("#result").val() + $("#0").val());
	});
	
	$("#sum").click(function() {
		$("#result").val($("#result").val() + $("#sum").val());
	});
	
	$("#sub").click(function() {
		$("#result").val($("#result").val() + $("#sub").val());
	});
	
	$("#mul").click(function() {
		$("#result").val($("#result").val() + $("#mul").val());
	});
	
	$("#div").click(function() {
		$("#result").val($("#result").val() + $("#div").val());
	});
});

$(document).ready(function() {
	$("#equal").click(function() {
		$.ajax({
			type: "POST",
			url: "",
			data: {
				"result": $("#result").val(),
			},
			success: function(result) {
				$("#result").val(result);
			},
		});
	})
});