jQuery(document).ready(function($) {
  var $links = $('#api-links');

  $links.on('click', 'a', function(e) {
    e.preventDefault();
    var $that = $(this);
    var $dataurl = $that.attr('data-url');

    $.when( api($dataurl) ).then( function( data ) {
      $('#results').html( data );
    });
  });

  function api( url ) {
    return $.get( url ).then( function ( r ) {
      return JSON.stringify( r );
    } );
  };
});
