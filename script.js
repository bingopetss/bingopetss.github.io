document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".overlay");
    var currentIndex = images.length -2;
    var pocetak = true;

    function showSlides() {
        var nextIndex = (currentIndex + 1) % images.length;

        images[currentIndex].style.transition = "opacity 1.5s, transform 20s";
        images[nextIndex].style.transition = "opacity 1.5s,  transform 20s";
        
        images[currentIndex].style.transform = "scale(1)";
        images[currentIndex].style.opacity = 0;
        images[nextIndex].style.opacity = 1;
        images[nextIndex].style.transform = "scale(1.25)";

        currentIndex = nextIndex;
        
        
        if(pocetak){
            pocetak = false;
            images[0].style.opacity = 1;
            images[1].style.opacity = 0;
            images[2].style.opacity = 0;
            setTimeout(showSlides, 0);
        }else{
            setTimeout(showSlides, 5000);
        }
        
            
    }

    showSlides();
});

document.addEventListener("DOMContentLoaded", function() {
    function setOverlayContainerHeight() {
        
    }

    setOverlayContainerHeight(); // Postavljanje visine prilikom učitavanja stranice

    // Postavljanje visine prilikom promene veličine prozora
    window.addEventListener("resize", function() {
        setOverlayContainerHeight();
    });

    // Ostatak vašeg koda za slideshow
});

function updateScreenWidth() {
  var screenWidth = window.innerWidth;
  var screenWidthElement = document.getElementById("screen-width");
}
window.addEventListener("load", updateScreenWidth);
window.addEventListener("resize", updateScreenWidth);




var height = 0;
function azurirajOdnosSirineIVisine() {
            var sirina = window.innerWidth;
            var visina = window.innerHeight;
            var ekran = (sirina/visina).toFixed(2);
            if (ekran < 1.45){
                document.getElementById("button1").style.display = "none";
                document.getElementById("button2").style.display = "none";
                document.getElementById("button3").style.display = "none";
                document.getElementById("button4").style.display = "none";
                document.getElementById("button6").style.display = "none";
                document.getElementById("popup-container").style.display="none";
                // Prikazi button5
                document.getElementById("button5").style.display = "block";
                
//                var sirina = window.innerWidth;
//                document.getElementById("takmicenja_naslov").innerText = sirina;
                
                var overlayContainers = document.querySelectorAll(".overlay-container");

                
                
                var squaresAll = document.querySelectorAll('#square1, #square2, #square3, #square4');

                // Iterirajte kroz kvadratne elemente i postavite stilove za svaki od njih
                squaresAll.forEach(function(square) {
                    square.style.margin = '0 auto';
                    square.style.marginTop = "30px";
                    square.style.width = '50%';
                    square.style.height = square.offsetWidth + "px";
                    square.style.display = 'block';
                    square.style.float ='none';
                    
                });
                
                var squares = document.getElementById("squares"); // Get the height of overlay-
                var welcome = document.getElementById("welcome");
                welcome.style.marginLeft = '5%';
                welcome.style.width = "90%";
                document.getElementById("logo").style.marginLeft = "5%";
                document.getElementById("nav").style.marginRight = "5%";
                var platforma = document.getElementById("platforma");
                platforma.style.marginLeft = '5%';
                platforma.style.width = "90%"; 
                
                var welcome = document.getElementById("welcome");
                var platforma = document.getElementById("platforma");
                var welcomeWidth = welcome.offsetWidth;
                var platformaWidth = platforma.offsetWidth;
                platforma.style.height = "auto";
                welcome.style.height = "auto";
                
                var platforma = document.getElementById("platforma");
                welcome.style.marginTop = 70+"px";
                squares.style.marginTop = welcome.offsetHeight + 70*2 +"px";
                platforma.style.marginTop = welcome.offsetHeight + squares.offsetHeight + 70*3+"px";
                
                var overlayContainers = document.querySelectorAll(".overlay-container");
                
                var o_meni_slika_druga = document.getElementById("o_meni_slika_druga");
                o_meni_slika_druga.style.display = "block";
                document.getElementById("platforma").style.fontWeight = 400;
                document.getElementById("platforma").style.fontSize = "36px";
                
                document.getElementById("prijemni_ispit_icon").style.display = "none";
                document.getElementById("prijemni_ispit_icon_druga").style.display = "block";
                document.getElementById("takmicenja_icon").style.display = "none";
                document.getElementById("takmicenja_icon_druga").style.display = "block";
                
                document.getElementById("prijemni_ispit_tekst").style.marginLeft = "5%";
                document.getElementById("prijemni_ispit_tekst").style.marginRight = "5%";
                document.getElementById("prijemni_ispit_tekst").style.width = "90%";
                document.getElementById("prijemni_ispit_icon").style.marginRight = "5%";
                document.getElementById("prijemni_ispit_opis").style.fontSize = "260%";
                document.getElementById("prijemni_ispit_opis").style.fontWeight = "normal";
                
                document.getElementById("takmicenja_icon").style.marginLeft = "5%";
                
                
                document.getElementById("takmicenja_naslov").style.textAlign = "right";
                document.getElementById("takmicenja_naslov").style.fontSize = "400%";
                document.getElementById("prijemni_ispit_naslov").style.fontSize = "400%";
                document.getElementById("o_meni_naslov").style.fontSize = "400%";
                document.getElementById("prijemni_ispit_naslov").style.paddingBottom = "15px";
                document.getElementById("prijemni_ispit_naslov").style.paddingTop = "15px";
                document.getElementById("takmicenja_naslov").style.paddingBottom = "15px";
                document.getElementById("takmicenja_naslov").style.paddingTop = "15px";
                document.getElementById("o_meni_naslov").style.paddingBottom = "15px";
                document.getElementById("o_meni_naslov").style.paddingTop = "15px";
                document.getElementById("privatni_casovi_naslov").style.paddingTop = "15px";
                document.getElementById("privatni_casovi_naslov").style.paddingBottom = "15px";
                document.getElementById("privatni_casovi_naslov").style.fontSize = "400%";
                
                document.getElementById("takmicenja_tekst").style.width = "90%";
                document.getElementById("takmicenja_tekst").style.marginLeft = "5%";
                document.getElementById("takmicenja_opis").style.fontSize = "260%";
                document.getElementById("takmicenja_opis").style.fontWeight = "normal";
                document.getElementById("takmicenja_tekst").style.marginRight = "5%";
                
                
                document.getElementById("o_meni_1").style.fontWeight = "normal";
                document.getElementById("o_meni_1").style.marginLeft = "5%";
                document.getElementById("o_meni_1").style.width = "57%";
                document.getElementById("o_meni_slika").style.marginRight = "5%";
                document.getElementById("o_meni_slika").style.width = "31%";
                document.getElementById("o_meni_naslov").style.marginLeft = "5%";
                
                var o_meni_slika = document.getElementById("o_meni_slika");
                o_meni_slika_width = o_meni_slika.offsetWidth;
                o_meni_slika.style.height = o_meni_slika_width * 2369 / 1669 + "px";
                o_meni_slika_druga.style.width = "50%";
                o_meni_slika_druga.style.margin = "0 auto";
                o_meni_slika_druga_width = o_meni_slika_druga.offsetWidth;
                o_meni_slika_druga.style.height = o_meni_slika_druga_width * 2369 / 1669 + "px";
                
                o_meni_slika_druga.style.display = "block";
                o_meni_slika.style.display = "none";
                document.getElementById("o_meni").style.height = "auto";
                document.getElementById("o_meni_1").style.width = "90%";
                document.getElementById("o_meni_1").style.marginRight = "5%";
                document.getElementById("o_meni_1").style.marginLeft = "5%";
                document.getElementById("o_meni_1").style.fontSize = "140%";
                document.getElementById("o_meni_1").style.color = "#1b1b1b";
                
                
                document.getElementById("privatni_casovi_naslov").style.marginLeft = "5%";
                document.getElementById("privatni_casovi_tekst1").style.fontSize = "14px";
                document.getElementById("privatni_casovi_tekst1").style.marginLeft = "5%";
                document.getElementById("privatni_casovi_tekst1").style.marginRight = "5%";
                
                
                //document.getElementById("privatni_casovi_p1").style.fontSize = "130%";
                document.getElementById("privatni_casovi_p2").style.fontSize = "150%";
                document.getElementById("privatni_casovi_p3").style.fontSize = "150%";
                
                
                document.getElementById("logo_again").style.marginLeft = "5%";
                document.getElementById("contact_info").style.marginRight = "5%";
                
                //document.getElementById("privatni_casovi_p1").style.marginTop = "15px";
                document.getElementById("privatni_casovi_p2").style.marginTop = "15px";
                document.getElementById("privatni_casovi_p3").style.marginTop = "15px";
               
                
                overlayContainers.forEach(function(container) {
                    var containterHeight = welcome.offsetHeight + squares.offsetHeight + platforma.offsetHeight+70*4;
                    if(containterHeight < document.body.offsetWidth * 909 / 1920){
                        containterHeight = document.body.offsetWidth * 909 / 1920;
                    }
                    container.style.height =  containterHeight + "px";
                    
                    
                });
            }else{
                document.getElementById("button1").style.display = "block";
                document.getElementById("button2").style.display = "block";
                document.getElementById("button3").style.display = "block";
                document.getElementById("button4").style.display = "block";

                // Prikazi button5
                document.getElementById("button5").style.display = "none";
                document.getElementById("button6").style.display = "none";
                document.getElementById("popup-container").style.display="none";
                
                // Pristupite svim kvadratnim elementima
                
                
                var squaresAll = document.querySelectorAll('#square1, #square2, #square3, #square4');

                // Iterirajte kroz kvadratne elemente i postavite stilove za svaki od njih
                squaresAll.forEach(function(square) {
                    square.style.marginLeft = 'calc(70% / 17)';
                    square.style.width = 'calc(245% / 17)';
                    square.style.height = square.offsetWidth + "px";
                    square.style.display = 'flex';
                    square.style.float = 'left';
                });
                squaresAll[0].style.marginLeft = "15%";
                
                var squares = document.getElementById("squares"); // Get the height of overlay-
                   
                var welcome = document.getElementById("welcome");
                welcome.style.marginLeft = '15%';
                welcome.style.width = "70%";
                document.getElementById("nav").style.marginRight = "15%";
                document.getElementById("logo").style.marginLeft = "15%";
                
                var platforma = document.getElementById("platforma");
                platforma.style.marginLeft = '15%';
                platforma.style.width = "70%";  
        
                var welcome = document.getElementById("welcome");
                var platforma = document.getElementById("platforma");
                platforma.style.height = "auto";
                welcome.style.height = "auto";
                
                var platforma = document.getElementById("platforma");
                welcome.style.marginTop = 70+"px";
                squares.style.marginTop = welcome.offsetHeight + 70*2 +"px";
                platforma.style.marginTop = welcome.offsetHeight + squares.offsetHeight + 70*3+"px";
                
                
                document.getElementById("platforma").style.fontWeight = 500;
                document.getElementById("platforma").style.fontSize = "30px";
                
                
                document.getElementById("prijemni_ispit_icon").style.display = "block";
                document.getElementById("prijemni_ispit_icon_druga").style.display = "none";
                document.getElementById("takmicenja_icon").style.display = "block";
                document.getElementById("takmicenja_icon_druga").style.display = "none";
                
                document.getElementById("takmicenja_naslov").style.textAlign = "left";
                document.getElementById("takmicenja_naslov").style.fontSize = "300%";
                document.getElementById("prijemni_ispit_naslov").style.fontSize = "300%";
                document.getElementById("o_meni_naslov").style.fontSize = "300%";
                document.getElementById("prijemni_ispit_naslov").style.paddingBottom = "15px";
                document.getElementById("prijemni_ispit_naslov").style.paddingTop = "15px";
                document.getElementById("takmicenja_naslov").style.paddingBottom = "15px";
                document.getElementById("takmicenja_naslov").style.paddingTop = "15px";
                document.getElementById("o_meni_naslov").style.paddingBottom = "15px";
                document.getElementById("o_meni_naslov").style.paddingTop = "15px";
                document.getElementById("privatni_casovi_naslov").style.paddingTop = "15px";
                document.getElementById("privatni_casovi_naslov").style.paddingBottom = "15px";
                document.getElementById("privatni_casovi_naslov").style.fontSize = "300%";
                
                
                document.getElementById("prijemni_ispit_tekst").style.marginLeft = "15%";
                document.getElementById("prijemni_ispit_opis").style.fontSize = "100%";
                document.getElementById("prijemni_ispit_opis").style.fontWeight = "400";
                document.getElementById("prijemni_ispit_icon").style.marginRight = "15%";
                
                document.getElementById("takmicenja_icon").style.marginLeft = "15%";
                document.getElementById("takmicenja_opis").style.fontSize = "100%";
                document.getElementById("takmicenja_opis").style.fontWeight = "400";
                document.getElementById("takmicenja_tekst").style.marginRight = "15%";
                
                
                document.getElementById("o_meni_1").style.fontSize = "100%";
                document.getElementById("o_meni_1").style.fontWeight = "400";
                document.getElementById("o_meni_1").style.marginLeft = "15%";
                document.getElementById("o_meni_1").style.width = "53%";
                document.getElementById("o_meni_slika").style.display = "block";
                document.getElementById("o_meni_slika").style.marginRight = "15%";
                document.getElementById("o_meni_slika").style.width = "15%";
                document.getElementById("o_meni_slika").style.marginLeft = "2%";
                document.getElementById("o_meni_naslov").style.marginLeft = "15%";
                
                var o_meni_slika = document.getElementById("o_meni_slika");
                o_meni_slika_width = o_meni_slika.offsetWidth;
                o_meni_slika.style.height = o_meni_slika_width * 2369 / 1669 + "px";
                if (o_meni_slika_width * 2369 / 1669 > document.getElementById("o_meni_1").offsetHeight){
                    o_meni_slika.style.height = document.getElementById("o_meni_1").offsetHeight + "px";
                    o_meni_slika.style.width = o_meni_slika.offsetHeight * 1669 / 2369 + "px";
                }
                var o_meni_slika_druga = document.getElementById("o_meni_slika_druga");
                o_meni_slika_druga.style.width = "50%";
                o_meni_slika_druga.style.margin = "0 auto";
                o_meni_slika_druga_width = o_meni_slika_druga.offsetWidth;
                o_meni_slika_druga.style.height = o_meni_slika_druga_width * 2369 / 1669 + "px";
                
                o_meni_slika.style.display = "block";
                o_meni_slika_druga.style.display = "none";
                
                
                document.getElementById("privatni_casovi_naslov").style.marginLeft = "15%";
                document.getElementById("privatni_casovi_tekst1").style.fontSize = "100%";
                document.getElementById("privatni_casovi_tekst1").style.marginLeft = "15%";
                document.getElementById("privatni_casovi_tekst1").style.marginRight = "15%";
                
                
                document.getElementById("logo_again").style.marginLeft = "15%";
                document.getElementById("contact_info").style.marginRight = "15%";
                //document.getElementById("privatni_casovi_p1").style.fontSize = "18px";
                document.getElementById("privatni_casovi_p2").style.fontSize = "18px";
                document.getElementById("privatni_casovi_p3").style.fontSize = "18px";
                //document.getElementById("privatni_casovi_p1").style.marginTop = "15px";
                document.getElementById("privatni_casovi_p2").style.marginTop = "15px";
                document.getElementById("privatni_casovi_p3").style.marginTop = "15px";
                
                
                var overlayContainers = document.querySelectorAll(".overlay-container");
                

                overlayContainers.forEach(function(container) {
                    var containterHeight = welcome.offsetHeight + squares.offsetHeight + platforma.offsetHeight+70*4;
                    if(containterHeight < document.body.offsetWidth * 909 / 1920){
                        containterHeight = document.body.offsetWidth * 909 / 1920;
                    }
                    container.style.height =  containterHeight + "px";
                });
//                var sirina = window.innerWidth;
//                document.getElementById("takmicenja_naslov").innerText = sirina;
            }
        }

        // Funkcija koja se poziva kad se elementi učitaju
        window.onload = function () {
            azurirajOdnosSirineIVisine();

            // Dodajemo event listener za proveru promene veličine ekrana
            window.addEventListener('resize', azurirajOdnosSirineIVisine);
        };
        
       

// Function to show the popup
function showPopup() {
    const button5 = document.getElementById("button5");
    document.getElementById("button5").style.display = "none";
    document.getElementById("button6").style.display = "block";
const popupContainer = document.getElementById("popup-container");
    popupContainer.style.height = 100+"vh";
  popupContainer.style.display = "block";
}
function hidePopup(){
    const button6 = document.getElementById("button6");
    document.getElementById("button6").style.display = "none";
    document.getElementById("button5").style.display = "block";
const popupContainer = document.getElementById("popup-container");
popupContainer.style.height = 0+"vh";
  popupContainer.style.display = "none";
}

$(document).ready(function() {
    $("#pocetna").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    
    $("#pocetna_popup").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    
    $("#o_meni_button").click(function(event) {
    event.preventDefault();
    var target = $("#lekcije");
    var targetHeight = target.offset().top + target.outerHeight() - 40;
    $("html, body").animate({ scrollTop: targetHeight }, "slow");
    });
    
    $("#o_meni_popup").click(function(event) {
    event.preventDefault();
    var target = $("#lekcije");
    var targetHeight = target.offset().top + target.outerHeight();
    $("html, body").animate({ scrollTop: targetHeight }, "slow");
    });
    
    $("#privatni_casovi_button").click(function(event) {
    event.preventDefault();
    var target = $("#o_meni");
    var targetHeight = target.offset().top + target.outerHeight() - 40;
    $("html, body").animate({ scrollTop: targetHeight }, "slow");
    });
    
    $("#casovi_popup").click(function(event) {
    event.preventDefault();
    var target = $("#o_meni");
    var targetHeight = target.offset().top + target.outerHeight() - 40;
    $("html, body").animate({ scrollTop: targetHeight }, "slow");
    });
    
    $("#contact_button").click(function(event) {
    event.preventDefault();
    var target = $("#contact");
    var targetHeight = target.offset().top + target.outerHeight() - 40;
    $("html, body").animate({ scrollTop: targetHeight }, "slow");
    });
    
    $("#contact_popup").click(function(event) {
    event.preventDefault();
    var target = $("#contact");
    var targetHeight = target.offset().top + target.outerHeight() - 40;
    $("html, body").animate({ scrollTop: targetHeight }, "slow");
    });
});


    function prikaziElement(element) {
      var visinaEkrana = window.innerHeight;
      var elementY = element.getBoundingClientRect().bottom;

      if (elementY < visinaEkrana) {
        element.classList.add('prikazi');
      }
    }
    function prikaziElementTop(element) {
  var visinaEkrana = window.innerHeight;
  var elementY = element.getBoundingClientRect().top + element.clientHeight / 2;

  if (elementY < visinaEkrana && elementY > 0) {
    element.classList.add('prikazi');
  }
}


    window.addEventListener('scroll', function() {
      prikaziElement(document.getElementById('prijemni_ispit_naslov'));
      prikaziElement(document.getElementById('takmicenja_naslov'));
      prikaziElement(document.getElementById('o_meni_naslov'));
      prikaziElement(document.getElementById('privatni_casovi_naslov'));
      prikaziElement(document.getElementById('contact_naslov'));
      prikaziElement(document.getElementById('takmicenja_icon'));
      prikaziElement(document.getElementById('prijemni_ispit_icon'));
      prikaziElementTop(document.getElementById('o_meni_slika'));
      prikaziElementTop(document.getElementById('o_meni_slika_druga'));
    });
    

