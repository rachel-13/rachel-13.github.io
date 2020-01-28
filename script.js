$(document).ready(function() {

    $("#navbar-div").addClass("navbar-background");
    $("#navbar-header-link").addClass("navbar-brand-text");
    $("#navbar-about").addClass("navbar-text");
    $("#navbar-career").addClass("navbar-text");
    $("#navbar-contact").addClass("navbar-text");
    $("#div-root-content").addClass("div-root-content");
    $("#about-me-div").addClass("about-me");
    $("#career-div").addClass("career");
    $("#contact-me-div").addClass("contact-me");
    });
    
    $(document).on('click', 'a', function(event){
    
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        
         return false;
    });
    