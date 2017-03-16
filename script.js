(function ( $ ) {
  "use strict";

  $('.input-color-base').on('input', function(){
    console.log($(this).val());
    if($(this).val() != ''){
      $('.base').attr( 'fill', $(this).val() );
    }
  });

  $('.input-color-dots').on('input', function(){
    console.log($(this).val());
    if($(this).val() != ''){
      $('.dot').attr( 'fill', $(this).val() );
    }
  });

  $('.input-color-wordpress-logo').on('input', function(){
    console.log($(this).val());
    if($(this).val() != ''){
      $('.wordpress-logo').attr( 'fill', $(this).val() );
    }
  });

  $('.input-color-wordpress-logo-background').on('input', function(){
    console.log($(this).val());
    if($(this).val() != ''){
      $('.wordpress-logo-background').attr( 'fill', $(this).val() );
    }
  });

  $('.input-color-background').on('input', function(){
    console.log($(this).val());
    if($(this).val() != ''){
      $('.preview').attr( 'style', 'background:' + $(this).val() );
    }
  });

  /*
   * Dot focus
   *
   * Cycle through available dot sizes
   * Example http://jsfiddle.net/jBJ3B/
   */

  var dotSizeArray = ["12", "18", "28"];
  var dotIndex = 0;

  $('.dot').on('click', function nextSize(){
    $(this).attr( 'r', + dotSizeArray[dotIndex] );
    dotIndex = (dotIndex + 1) % (dotSizeArray.length);
  })

}(jQuery));