$(document).ready(function() {

});


      var currentIndex = 1;
      
      //Show current image
      showSlides(currentIndex);
      
      //Function to move Next
      function plusSlides(n) {
         showSlides(currentIndex += n);
      }
      
      //Function to move back
      function currentSlide(n) {
         showSlides(currentIndex = n);
      }
      
      
      //Initiate moving of slides
      function showSlides(n) {
         var i;
         var slides = document.getElementsByClassName("images");
         var dots = document.getElementsByClassName("navigation-dot");
         if (n > slides.length) {currentIndex = 1}
         if (n < 1) {currentIndex = slides.length}
         for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
         }
         for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
         }
         slides[currentIndex-1].style.display = "block";
         dots[currentIndex-1].className += " active";
      }

      $(document).ready(function() {
        // Background photo slider
        let images = ["image1.jpg", "image2.jpg", "image3.jpg"];
        let currentImageIndex = 0;
  
        function changeBackground() {
          $('body').css('background-image', 'url(' + images[currentImageIndex] + ')');
          currentImageIndex = (currentImageIndex + 1) % images.length;
        }
  
        setInterval(changeBackground, 5000); // Change background every 5 seconds
  
        // Toggle information visibility
        $('#toggleInfo').click(function() {
          $('#info').slideToggle();
        });
  
        // Form submission
        $('#opinionForm').submit(function(event) {
          event.preventDefault();
          let opinion = $('#opinionInput').val();
          alert("Thank you for sharing your opinion: " + opinion);
          // You can send the opinion data to a server for further processing
        });
      });