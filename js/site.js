$(function() {
    loadAboutPage();
    
    $("#name").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000);
    });
    
});

function loadAboutPage() {
    $('#about').load("/aboutme.html");  
}


