(function ( $ ) {
  "use strict";

  $('.input-color-base').on('input', function(){
    console.log($(this).val());
    if($(this).val() != ''){
      $('.base').attr( 'fill', $(this).val() );
      // TODO: When value is changed (either .hex or .picker) update the other one
    }
  });

  $('.input-color-dots').on('input', function(){
    console.log($(this).val());
    if($(this).val() != ''){
      $('.dot').attr( 'fill', $(this).val() );
      // TODO: When value is changed (either .hex or .picker) update the other one
    }
  });

  $('.input-color-wordpress-logo').on('input', function(){
    console.log($(this).val());
    if($(this).val() != ''){
      $('.wordpress-logo').attr( 'fill', $(this).val() );
      // TODO: When value is changed (either .hex or .picker) update the other one
    }
  });

  $('.input-color-wordpress-logo-background').on('input', function(){
    console.log($(this).val());
    if($(this).val() != ''){
      $('.wordpress-logo-background').attr( 'fill', $(this).val() );
      // TODO: When value is changed (either .hex or .picker) update the other one
    }
  });

  $('.input-color-background').on('input', function(){
    console.log($(this).val());
    if($(this).val() != ''){
      $('.preview').attr( 'style', 'background:' + $(this).val() );
      $('.preview svg').attr( 'style', 'background:' + $(this).val() );
      // TODO: When value is changed (either .hex or .picker) update the other one
    }
  });


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


  /*
   * Dot focus
   *
   * Cycle through available dot sizes
   * Example http://jsfiddle.net/jBJ3B/
   */

  // Experimenting, feel free to delete :)
  // var dotSizeArray = ["12", "18", "28"];
  // var dotIndex = 0;

  // $('.dot').on('click', function nextSize(){
  //   $(this).attr( 'r', + dotSizeArray[dotIndex] );
  //   dotIndex = (dotIndex + 1) % (dotSizeArray.length);
  // })

  /*
   * TODO: Focus area
   * Steps to generate the focus area
   * 1) Make the clicked .dot largest (level 0), update radius value to r="28", and fill-opacity="1"
   * 2) Duplicate the clicked .dot in place, with the radius value r="9" and match the fill value with the one from .base
   * 3) Relative to clicked .dot, make the top/right/bottom/left neighbouring .dot (level 1) r="18"
   * 4) Relative to level 1 .dot, make the top/right/bottom/left neighbouring .dot (level 2) r="12" (but make sure that level 0/1 .dots remain unchanged)
   */

   var $dot = $('.dot');

   $dot.on('click', function(event) {
    // Select marker element from DOM
    var $marker = document.querySelector('.marker');

    // Retrive transform property value of clicked element
    var transform = SVG._getTransform(event);

    // Setting transform values for marker
    $marker.setAttribute('transform', transform);
   });



  // Small module named 'SVG' for any kind of svg element manipulation
   var SVG = (function(clickedElement, cityCursor) {
      return {

        // Returns currently passed element svg attributes
        _getAttrs: function(clickedElement) {
          return clickedElement.currentTarget.attributes;
        },

        // Returns transform value of clicked element
        _getTransform: function(clickedElement) {
          return clickedElement.currentTarget.attributes.transform.value;
        },

        // Changes currently passed element fill value,
        // with passed color
        _setFill: function(clickedElement, fillValue) {
          clickedElement.currentTarget.attributes.fill.value = 'red';
        }

      }
   })();

}(jQuery));