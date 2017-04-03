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
      $('.preview svg').attr( 'style', 'background:' + $(this).val() );
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

  /*
   * Save as SVG
   *
   * Based on this http://stackoverflow.com/a/28087280/7809192
   */

  function toBase64 (str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }

  function triggerDownload () {
    var html = 'data:text/attachment;base64,' + toBase64(document.querySelector('.preview').innerHTML);
    var evt = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    });

    var a = document.createElement('a');
    a.setAttribute('download', 'logo.svg');
    a.setAttribute('href', html);
    a.setAttribute('target', '_blank');

    a.dispatchEvent(evt);
  }

  document.querySelector('.button-download').addEventListener('click', function () {
    triggerDownload();
  });

}(jQuery));