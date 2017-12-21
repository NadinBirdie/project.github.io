
/*/  START JS FOR HOUSE.html 
_____________________________
______________________
*/


// SLIDER
$(document).ready(function(){
    $("#flip-reserve").click(function(){
        $("#panel-reserve").slideToggle("slow");
    });
});


function formhotel(form){
    fail = false;
    var email = form.email.value;
    var name = form.name.value;
    var surrname = form.surrname.value;
    var telephone = form.telephone.value;
    var datecome = form.datecome.value;
    var dateout = form.dateout.value;
    var hotel = form.hotel.value;

    var regEmail = /^[a-zA-Z][0-9a-zA-Z_]{2,21}@[a-zA-Z]{2,12}\.[a-zA-Z]{2,5}/i;
  //  var reg= /^\+380[0-9]{7}/i; 
    if (regEmail.test(email) == false )
        fail = 'Ви ввели неправильнo email';
    else if (name == '' || name == ' ')
        fail = 'Вкажіть, будь ласка, своє ім\'я ';
    else if  (surrname == '' || surrname == ' ')
        fail = 'Вкажіть, будь ласка, своє прізвище '; 
    else if (telephone == '')  
        fail = 'Вкажіть, будь ласка, свій номер телефону '; 
     else if (datecome == '')
        fail = 'Вкажіть, будь ласка, дату приїзду';
     else if (dateout == '')
        fail = 'Вкажіть, будь ласка, дату від\'їзду'; 
    else if (hotel ==  '')
        fail = 'take a hotel';    
        if(fail)             
           alert(fail);                             
        else
        window.location = 'http://google.com';
  }
// END SLIDER


/*/  END JS FOR HOUSE.html 
_____________________________
______________________
*/




//__________________________________________________________________________________



/*/ START JS FOR HOUSE-1.html 
_____________________________
______________________
*/

// MODAL IMG HOUSE-1.HTML

// Get the modal
var modal = document.getElementById('myModal');
              
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg-house');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-modal-house")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}



/*  slider top
...........
...................
.........-  */

$(document).ready(function(){
    $("#flip-reserve-house1-top").click(function(){
        $("#panel-reserve-house1-top").slideToggle("slow");
    });
});

function formhoteltop (form){
    fail = false;
    var email = form.email.value;
    var name = form.name.value;
    var surrname = form.surrname.value;
    var telephone = form.telephone.value;
    var datecome = form.datecome.value;
    var dateout = form.dateout.value;
    if ( email == '' || email == ' ')
        fail = 'Вкажіть, будь ласка, свій email';
    else if (name == '' || name == ' ')
        fail = 'Вкажіть, будь ласка, своє ім\'я ';
    else if  (surrname == '' || surrname == ' ')
        fail = 'Вкажіть, будь ласка, своє прізвище '; 
    else if (telephone == '')  
        fail = 'Вкажіть, будь ласка, свій номер телефону '; 
     else if (datecome == '')
        fail = 'Вкажіть, будь ласка, дату приїзду';
     else if (dateout == '')
        fail = 'Вкажіть, будь ласка, дату відїзду'; 
        if(fail)             
        alert(fail);
       
        else
        window.location = 'http://google.com';
  }

  /* END slider top
...........
...................
.........-  */
    

/*  Gallery house-1.html
...........
...................
.........-  */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-house");
  var dots = document.getElementsByClassName("demo-house");
  var captionText = document.getElementById("caption-house");
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
/* END Gallery house-1.html
...........
...................
.........-  */


  /*  slider BOTTOM
...........
...................
.........-  */

$(document).ready(function(){
    $("#flip-reserve-house1-bot").click(function(){
        $("#panel-reserve-house1-bot").slideToggle("slow");
    });
});

function formhotel (form){
    fail = false;
    var email = form.email.value;
    var name = form.name.value;
    var surrname = form.surrname.value;
    var telephone = form.telephone.value;
    var datecome = form.datecome.value;
    var dateout = form.dateout.value;
    if ( email == '' || email == ' ')
        fail = 'Вкажіть, будь ласка, свій email';
    else if (name == '' || name == ' ')
        fail = 'Вкажіть, будь ласка, своє ім\'я ';
    else if  (surrname == '' || surrname == ' ')
        fail = 'Вкажіть, будь ласка, своє прізвище '; 
    else if (telephone == '')  
        fail = 'Вкажіть, будь ласка, свій номер телефону '; 
     else if (datecome == '')
        fail = 'Вкажіть, будь ласка, дату приїзду';
     else if (dateout == '')
        fail = 'Вкажіть, будь ласка, дату відїзду'; 
        if(fail)             
        alert(fail);
       
        else
        window.location = 'http://google.com';
  }

  /* END slider BOTTOM
...........
...................
.........-  */



/*/ END JS FOR HOUSE-1.html 
_____________________________
______________________
*/
