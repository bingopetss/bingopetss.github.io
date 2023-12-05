<!DOCTYPE html>
<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/Project/PHP/PHPProject.php to edit this template
-->
<html>
<head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Univirsity Webiste Design</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    
</head>
<body>
<section class="header">
    <nav>
        <a href="index.html"><img src="images/logo.png"></a>
        <div class="nav-links" id="navLinks">
            <i class="fa fa-times" onclick="hideMenu()"></i>
            <ul>
                <li><a href="">ПОЧЕТНА</a></li>
                <li><a href="">ЧАСОВИ</a></li>
                <li><a href="">О НАМА</a></li>
                <li><a href="">КОНТАКТ</a></li>
            </ul>
        </div>
        <i class="fa fa-bars" onclick="showMenu()"></i>
    </nav>

<div class="text-box">
    <h3><i>Рачунај на успех!</i></h3>
    <h1>Мрежа младих инжењера</h1>
    <p>Добродошли на нашу платформу Мреже младих инжењера - едукативног центра<br>
        посвећеног најбољој припремној настави из математике и физике.
    </p>
    <a href="" class="hero-btn">Више о часовима</a>
</div>
</section>
<section class="course">
    <h1>Шта нудимо?</h1>
    <p>Детаљно спремљене индивидуалне часове из математике и физике:</p>
    
    <div class="row">
        <div class="course-col">
            <h3>Пријемни испит</h3>
            <p>Систематичан пролазак кроз градиво омогућава матурантима оптималну
            припрему за упис на жељени факултет.</p>
        </div>
        <div class="course-col">
            <h3>Такмичења</h3>
            <p>Детаљна појашњења захтевнијих задатака и примера задатака из
            претходних година такмичења. Припрема се врши за
            све нивое такмичења(општинско, окружно, републичко)</p>
        </div>
        <div class="course-col">
            <h3>Редовна настава</h3>
            <p>Наставни програм са фокусом на теоријску основу лекције. Након тога
                се бавимо типичним задацима из те области.
            </p>
        </div>
    </div>
</section>
<section class="facilities">
    <h1>Индивидуални часови</h1>
    <p>Увећајте своје знање уз нашу помоћ.</p>
    
    <div class="row">
        <div class="facilities-col">
            <img src="images/library.png">
            <h3>Предавање лекције</h3>
            <p>На почетку часа, фокус је на индивидуалном приступу
                у објашњавању лекције, прилагођеном вашем нивоу разумевања, што омогућује боље 
                усвајање и примену научених информација.</p>
        </div>
        <div class="facilities-col">
            <img src="images/basketball.png">
            <h3>Израда задатака</h3>
            <p>Активно учење кроз решавање различитих примера задатака
               помаже у бољем разумевању лекције. Током израде задатака
               од предавача добијате смернице за њихово решавање.
            </p>
        </div>
        <div class="facilities-col">
            <img src="images/cafeteria.png">
            <h3>Домаћи задаци</h3>
            <p>На крају часа добијате задатке које ћете провежбати код куће. Током
            израде сте у контакту са професором који ће вам прискочити у помоћ.</p>
        </div>
    </div>
</section>
<section class="campus">
    <h1>Онлајн или уживо<br><span style="color:#f44336;">ИЗБОР ЈЕ ВАШ!</span></h1>
    
    <div class="row">
        <div class="campus-col">
            <p>
                Настава је могућа уживо или онлајн. Настава уживо се одржава у Београду, док се
                онлајн настава се одржава на Google meet up платформи.<br><br> Непосредно
                пред почетак часа добијате линк за приступ позиву. Користећи графичку
                таблу, предавач предаје лекцију, док је ви пратите на свом екрану који је
                подељен са вама. <br><br>У сваком тренутку сте слободни да поставите предавачу питање.
                Након часа добијате pdf датотеку са свим материјалима пређеним на часу.<br><br>
                Уз то, добијате и домаће задатке, јер свака лекција мора да се провежба да би се
                добро разумела.
            </p>
            <div class="layer">
                <h3>LONDON</h3>
            </div>
        </div>
        <div class="campus-col" style="">
            <img src="images/ilija.png">
            <div class="layer">
                <h3>NEW YORK</h3>
            </div>
        </div>
    </div>
</section>
<section class="testimonials">
        <h1>Зашто баш ми?</h1>
        <p></p>
    <div class="row">
        <div class="testimonials-col">
            <div>
                <h3>Искуство у држању наставе  <i class="fa fa-check-circle" aria-hidden="true"></i></h3>
                <p>Наше часове држе предавачи са искуством користећи
                проверене методе које осигуравају ефикасно усвајање градива.</p>
            </div>
        </div>
        <div class="testimonials-col">
            <div>
                <h3>Приступачне цене <i class="fa fa-check-circle" aria-hidden="true"></i></h3>
                <p>Желимо да обезбедимо квалитетно образовање
                    по приступачним ценама, омогућавајући свима
                    да имају шансу да уче и развијају своје
                    вештине без финансијских баријера. </p>
            </div>
        </div>
        
    </div>
    <div class="row">
        <div class="testimonials-col">
            <div>
                <h3>Персонализована настава <i class="fa fa-check-circle" aria-hidden="true"></i></h3>
                <p>Наш фокус је на индивидуалном приступу образовању,
                    пружајући часове прилагођене њиховом 
                    тренутном нивоу знања, темпу и стилу учења.</p>
            </div>
        </div>
        <div class="testimonials-col">
            <div>
                <h3>Гаранција успеха <i class="fa fa-check-circle" aria-hidden="true"></i></h3>
                <p>
                Уколико наша услуга не испуни ваша очекивања обезбедићемо вам 
                повратак новца. Наша гаранција квалитета подразумева потпуно 
                испуњење ваших очекивања и апсолутну преданост вашем успеху.</p>
            </div>
        </div>
    </div>    
        
</section>
<section class="campus">
    <h1>О нама</h1>
    <p>Едукативни центар - Мрежа младих инжењера</p>
    
    <div class="row">
        <div class="campus-col">
            <p>Мрежа младих инжењера је едукативни центар посвећен припреми ученика
            за пријемне испите, такмичења и редовну наставу из математике и физике.
            Настао је из жеље за напретком талената и пружању подршке из ових области.<br><br>
            Њен оснивач је Илија Савић, дипломирани инжењер електротехнике и рачунарства,
            учесник на Српској физичкој олимпијади и освајач бројних награда на републичким
            такмичењима из математике и физике.<br><br> Тренутно је запослен као инжењер у једној
            домаћој компанији, а слободно време користи да помогне ученицима у савладавању
            градива.</p>
            <div class="layer">
                <h3>LONDON</h3>
            </div>
        </div>
        <div class="campus-col" style="">
            <img src="images/ilija.png">
            <div class="layer">
                <h3>NEW YORK</h3>
            </div>
        </div>
    </div>
</section>
<section class="testimonials">
        <h1>Шта наши ученици кажу о нама?</h1>
    <div class="row">
        <div class="testimonials-col">
            <div>
                <h3>Дарко Вујовић</h3>
                <p>Часови које сам имао код Илије су изузетно корисни.
                    Његово стрпљење и посвећеност у објашњавању су ми помогли да боље разумем математику.
                    Свима бих препоручио Мрежу младих инжењера уколико су му потребни приватни часови.</p>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
        </div>
        <div class="testimonials-col">
            <div>
                <h3>Милица Петровић</h3>
                <p> Очекивања од предавача су и више него испуњена. 
                    Његово знање и начин на који објашњава комплексе концепте су импресивни. 
                    Захваљујући његовим часовима успела сам поправим оцену из математике.</p>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            </div>
        </div>
        
    </div>
</section>
<section class="cta">
    <h1><i>Рачунајте на успех уз нас!</i></h1>
    <h1 style="color:#f44336;">РЕЗЕРВИШИТЕ ЧАС НА ВРЕМЕ</h1>
    <a href="" class="hero-btn">КОНТАКТИРАЈТЕ НАС</a>
</section>    

    <?php
    // put your code here
    ?>
<script>
    var navLinks = document.getElementById("navLinks");
    function showMenu(){
        navLinks.style.right = "0";
    }
    function hideMenu(){
        navLinks.style.right = "-200px";
    }
</script>
</body>
</html>
