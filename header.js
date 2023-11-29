function azurirajOdnosSirineIVisine_h() {
            var sirina = window.innerWidth;
            var visina = window.innerHeight;
            var ekran = (sirina/visina).toFixed(2);
            document.getElementById("popup-container_mp").style.opacity="1";
            if (ekran < 1.45){
                document.getElementById("screen-width_mp").innerText = sirina;
                document.getElementById("button1_mp").style.display = "none";
                document.getElementById("button2_mp").style.display = "none";
                document.getElementById("button3_mp").style.display = "none";
                document.getElementById("button4_mp").style.display = "none";
                document.getElementById("button6_mp").style.display = "none";
                document.getElementById("popup-container_mp").style.display="none";
                // Prikazi button5
                document.getElementById("button5_mp").style.display = "block";
                
            }else{
               //document.getElementById("screen-width_mp").innerText = sirina;
               document.getElementById("button1_mp").style.display = "block";
                document.getElementById("button2_mp").style.display = "block";
                document.getElementById("button3_mp").style.display = "block";
                document.getElementById("button4_mp").style.display = "block";

                // Prikazi button5
                document.getElementById("button5_mp").style.display = "none";
                document.getElementById("button6_mp").style.display = "none";
                document.getElementById("popup-container_mp").style.display="none";
                
            }
        }

window.onload = function () {
            azurirajOdnosSirineIVisine_h();

            // Dodajemo event listener za proveru promene veličine ekrana
            window.addEventListener('resize', azurirajOdnosSirineIVisine_h);
        };
        
function showPopup_mp() {
    const button5 = document.getElementById("button5_mp");
    document.getElementById("button5_mp").style.display = "none";
    document.getElementById("button6_mp").style.display = "block";
const popupContainer = document.getElementById("popup-container_mp");
    popupContainer.style.height = 100+"vh";
  popupContainer.style.display = "block";
}
function hidePopup_mp(){
    const button6 = document.getElementById("button6_mp");
    document.getElementById("button6_mp").style.display = "none";
    document.getElementById("button5_mp").style.display = "block";
const popupContainer = document.getElementById("popup-container_mp");
popupContainer.style.height = 0+"vh";
  popupContainer.style.display = "none";
}       

