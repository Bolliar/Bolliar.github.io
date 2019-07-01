$(document).ready(function() {
    
   
    if (window.matchMedia('(max-width: 800px)').matches) {

   $('.nav-toggle-label').click(function(event) {
       event.preventDefault();
       $('.header-top').toggleClass('menu-active');
       $(this).toggleClass('nav-active');
       $('.content').toggleClass('content-active');

   });
    
        
        
    }
      
      else {
          
       $('.nav-toggle-label').click(function(event) {
       event.preventDefault();
       $(this).toggleClass('nav-active');
       $('nav').toggleClass('nav-pc-active');
   });
      }
    

});