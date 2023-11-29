var sirina = window.innerWidth;
var visina = window.innerHeight;
var ekran = (sirina/visina).toFixed(2);

function azuriraj_odnos(){
    sirina = window.innerWidth;
    visina = window.innerHeight;
    ekran = (sirina/visina).toFixed(2);
    document.getElementById("screen-width_mp").innerText = ekran;
}

window.addEventListener("load", azuriraj_odnos);
window.addEventListener("resize", azuriraj_odnos);

           

function showLectures(div, event) {
    if (event) {
        event.preventDefault();
    }
    
    var lekcije = document.getElementsByClassName('lekcije');
    var boje = document.getElementsByClassName('_boja');

    for (var i = 0; i < lekcije.length; i++) {
        lekcije[i].style.transition = 'opacity 0.5s';
        lekcije[i].style.opacity = '0';
        boje[i].style.boxShadow = '0px 4px 4px 0px rgba(0, 0, 0, 0.25)';
        boje[i].style.transition = 'background 0.5s';
        boje[i].style.background = 'rgba(0, 0, 0, 0.15)';
        lekcije[i].style.display = 'none';
    }

    var lekcija = document.getElementById(div+'_lekcije');
    var boja = document.getElementById(div);
    boja.style.background = "#2A415D";
    boja.style.boxShadow = '0px 8px 8px 0px rgba(0, 0, 0, 0.25)';
    setTimeout(function() {
        lekcija.style.opacity = '1';
        lekcija.style.display = 'block';;
    }, 100);
}

// Add an event listener for the 'load' event
window.addEventListener("load", function() {
    showLectures("priprema");
});
function frame_dimensions(){
    if (ekran<1.45){
        document.getElementById("frame").style.marginLeft = "5%";
        document.getElementById("frame").style.width = "90%";
    }else{
        document.getElementById("frame").style.marginLeft = "15%";
        document.getElementById("frame").style.width = "70%";
    }
    document.getElementById("frame").style.height = document.getElementById("frame").offsetWidth * 315 / 560 + "px";
}
window.addEventListener("resize", frame_dimensions);

window.addEventListener("load", function(){
    frame_dimensions();
    var frame_black_background = document.getElementById("frame_black_background");
    frame_black_background.style.backgroundColor = "black";
    document.getElementById("frame_snimak").setAttribute("src", "https://www.youtube.com/embed/NI6aOFI7hms");
    document.getElementById("frame_snimak").style.position = "absolute";
    
});

function pomeri_na_vrh(stranica, lekcije, oblast, zadatak) {
    if (stranica === "mp"){
        stranica = "Математика за пријемни";
    }
    if (stranica === "mt"){
        stranica = "Математика за такмичења";
    }
    if (stranica === "fp"){
        stranica = "Физика за пријемни";
    }
    if (stranica === "ft"){
        stranica = "Физика за такмичења";
    }
    if (lekcije === "pl"){
        lekcije = "Припремне лекције";
    }
    if (lekcije === "pi"){
        lekcije = "Пријемни испити претходних година";
    }
    if(oblast === "Kombinatorika"){
        oblast = "Комбинаторика";
    }
    if(oblast === "Racionalni algebarski izrazi"){
        oblast = "Рационални алгебарски изрази";
    }
    if(oblast === "Тригонометрија"){
        oblast = "Комбинаторика";
    }
    if(oblast === "Skupovi"){
        oblast = "Скупови";
    }
    document.getElementById("orijentacija").textContent ="Тренутно пратите лекцију: " + stranica + " / " + lekcije + " / " + oblast + " / " + " Задатак " +zadatak;
    $(document).ready(function() {
        $("html, body").animate({ scrollTop: 15 }, "slow");
    });
}


    
    
function prikazi(id_diva, event){
    if (event) {
        event.preventDefault();
    }

    var div = document.getElementById(id_diva);
    var strelica = document.getElementById('strelica_'+id_diva);

    if (div.style.display === "none") {
        setTimeout(function(){
            div.style.display = "block";
            strelica.innerText = '⮟️'; // Promena strelice na dole
        }, 100); 
    } else {
        div.style.maxHeight = null;
        setTimeout(function(){
            div.style.display = "none";
            strelica.innerText = '⮞️'; // Vraćanje strelice ulevo
        }, 100); 
    }
}

function change_dimensions(){
    if (ekran<1.45){
        document.getElementById("izbor_lekcija").style.marginLeft = "5%";
        document.getElementById("izbor_lekcija").style.height = "200px";
        document.getElementById("priprema").style.fontSize = "50px";
        document.getElementById("priprema").style.height = "200px";
        document.getElementById("prethodni_prijemni").style.fontSize = "50px";
        document.getElementById("prethodni_prijemni").style.height = "200px";
        document.getElementById("izbor_lekcija").style.width = "90%";
        
        document.getElementById("priprema_lekcije").style.width = "90%";
        document.getElementById("priprema_lekcije").style.marginLeft = "5%";
        
        var naslovi = document.getElementsByClassName('naslov');

        for (var i = 0; i < naslovi.length; i++) {
            naslovi[i].style.fontSize = '300%'; // Zamenite 'NoviFont' sa željenim fontom
            naslovi[i].style.height = '180px';
        }
        
        var zadaci = document.getElementsByClassName('zadatak');

        for (var i = 0; i < zadaci.length; i++) {
            zadaci[i].style.fontSize = '250%';
            zadaci[i].style.height = '90px';// Zamenite 'NoviFont' sa željenim fontom
        }
        document.getElementById("orijentacija").style.width = "90%";
        document.getElementById("orijentacija").style.marginLeft = "5%";
        document.getElementById("orijentacija").style.fontSize = "200%";
    }else{
        document.getElementById("izbor_lekcija").style.marginLeft = "15%";
        document.getElementById("izbor_lekcija").style.height = "120px";
        document.getElementById("priprema").style.fontSize = "40px";
        document.getElementById("priprema").style.height = "120px";
        document.getElementById("prethodni_prijemni").style.fontSize = "40px";
        document.getElementById("prethodni_prijemni").style.height = "120px";
        document.getElementById("izbor_lekcija").style.width = "70%";
        
        document.getElementById("priprema_lekcije").style.width = "70%";
        document.getElementById("priprema_lekcije").style.marginLeft = "15%";
        
        var naslovi = document.getElementsByClassName('naslov');

        for (var i = 0; i < naslovi.length; i++) {
            naslovi[i].style.fontSize = '150%'; // Zamenite 'NoviFont' sa željenim fontom
            naslovi[i].style.height = '70px';
        }
        
        var zadaci = document.getElementsByClassName('zadatak');

        for (var i = 0; i < zadaci.length; i++) {
            zadaci[i].style.fontSize = '120%';
            zadaci[i].style.height = '35px';// Zamenite 'NoviFont' sa željenim fontom
        }
        document.getElementById("orijentacija").style.width = "70%";
        document.getElementById("orijentacija").style.marginLeft = "15%";
        document.getElementById("orijentacija").style.fontSize = "140%";
    }
}

window.addEventListener("load", change_dimensions);
window.addEventListener("resize", change_dimensions);