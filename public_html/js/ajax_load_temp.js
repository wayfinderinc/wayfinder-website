$(function() {
    $('nav a').click(function(e) {
        $('#loading').show();
        href = $(this).attr('href');
        loadContent(href);
        
        history.pushState('', 'New URL: '+href, href);
        e.preventDefault();
    });
    
    // THIS EVENT MAKES SURE THAT THE BACK/FORWARD BUTTONS WORK AS WELL
    
    window.onpopstate = function(event) {
        $('#loading').show();
        console.log('pathname: '+location.pathname);
        loadContent(location.pathname);
    };
});
    
function loadContent(url){
    
    $.getJSON('content.php', {cid: url, format: 'json'}, function(json) {
        $.each(json, function(key, value){
            $(key).html(value);
        });
        $('#loading').hide();
    });
}