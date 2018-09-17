
// JavaScript Document
$('#subscribeform').submit(function(){

	var action = $(this).attr('action');

		$("#mesaj").slideUp(750,function() {



		$('#mesaj').hide();

	$('#subsubmit')



			.after('')



			.attr('disabled','disabled');

	$.post(action, {



			email: $('#subemail').val()



		},



			function(data){



				document.getElementById('mesaj').innerHTML = data;



				$('#mesaj').slideDown('slow');



				$('#subscribeform img.subscribe-loader').fadeOut('slow',function(){$(this).remove()});



				$('#subsubmit').removeAttr('disabled');



				if(data.match('success') != null) $('#subscribeform').slideUp('slow');

			}



		);



		});



		return false;

/*PARALLAX*/

	});

	$(window).scroll(function(e){
  parallax();
});
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.bg').css('top',-(scrolled*1.4)+'px');
}

/* END PARALLAX */


/* FADE IN */

$(function(){  // $(document).ready shorthand
  $('.monster').fadeIn('slow');
});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},800);

            }

        });

    });

});

/* END FADE IN */
