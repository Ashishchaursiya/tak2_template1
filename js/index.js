  $(document).ready(function(){
    $(window).scroll(function(){
      var position=$(document).scrollTop();
     console.log(position)

        if((position>399 && position<700)){
          $(".n1").addClass("animate__animated animate__fadeInLeft");
         $(".n2").addClass("animate__animated animate__bounceInRight");
       
      }
          

 if((position>897 && position<1270)){
          $(".n3").addClass("animate__animated animate__bounceInRight");
           
       
      }
 if((position>1716 && position<2400)){
          $(".n4").addClass("animate__animated animate__zoomIn");
           
       
      }


     $(window).scroll(function(){
     if($(this).scrollTop() >40)
{
     $("#top-bt").fadeIn();
}     else{
     $("#top-bt").fadeOut();
}
});
     $("#top-bt").click(function(){
     $("html,body").animate({scrollTop:0},800);
 });
 
   
   
  });
 });


mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
