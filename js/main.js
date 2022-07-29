// Project testimonial slider code

       $('.owl-carousel').owlCarousel({
                   loop:true,
                   margin:10,
                   nav:true,
                   autoplay:true,
                   autoplayTimeout:1000,
                   autoplayHoverPause:true,
                   responsive:{
                       0:{
                           items:1
                       },
                       600:{
                           items:2
                       },
                       1000:{
                           items:3
                       }
                   }
           })


    function loading(){
      document.getElementById('preloader').style.display='none';
    }
    
    function openMenu(){
        document.querySelectorAll('.mobile-menu').style.transform='translateX(opx)';
    }

    function clozeMenu(){
        document.querySelectorAll('.mobile-menu').style.display='none';
    }



var btns = document.querySelectorAll('.product-meta a:first-child');

     btns.forEach(function(item){

    item.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.quickView-modal').style.display='block';

     });

 });


 function closeModal(){

       document.querySelector('.quickView-modal').style.display='none';  

     }



     let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}