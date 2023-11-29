<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Slideshow Example</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="header.css">
    <link rel="stylesheet" href="squares.css">
    <link rel="stylesheet" href="lekcije.css">
    <link rel="stylesheet" href="o_meni.css">
    <link rel="stylesheet" href="privatni_casovi.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <script src="script.js"></script>
</head>
<body>
    <div id="header">
        <div id="logo">
        </div>
        <div id="nav">
            <nav id="nav-right">
                <ul>
                   <li id="button1"><a id="pocetna" href="#">Почетна</a></li>
                   <li id="button2"><a id="o_meni_button" href="#">О мени</a></li>
                   <li id="button3"><a id="privatni_casovi_button" href="#">Часови</a></li>
                    <li id="button4"><a id="contact_button" href="#">Контакт</a></li>
                    <li id="button5"><a id="button" onclick="showPopup();" href="#">&#9776;</a></li>
                    <li id="button6"><a id="button" onclick="hidePopup();" href="#">&#10006;</a></li>
                    
                </ul>
                <div id="popup-container">
                    <div id="popup-content">
                      <table>
                        <tr>
                            <td><a id="pocetna_popup" onclick="hidePopup()">Početna</a></td>
                        </tr>
                        <tr>
                          <td><a id="o_meni_popup" onclick="hidePopup()">O meni</a></td>
                        </tr>
                        <tr>
                          <td><a id="casovi_popup" onclick="hidePopup()">Časovi</a></td>
                        </tr>
                        <tr>
                          <td><a id="contact_popup" onclick="hidePopup()">Kontakt</a></td>
                        </tr>
                      </table>

                    </div>
                </div>

            </nav>
        </div>
    </div>
    
        <div id="welcome">
            <i>Рачунај на успех!</i><br>
            Мрежа младих инжењера
    </div>
    <div id="squares">
        <a href="matematika_prijemni"><div id="square1"></div></a>
                <a><div id="square2"></div></a>
                <a><div id="square3"></div></a>
               <a><div id="square4"></div></a>
            </div>
    <div id="platforma">
На овој платформи можете приступити бесплатним видео материјалима који ће вам помоћи да се припремите за упис на жељени факултет или постигнете изванредне резултате на такмичењима из математике и физике.
    </div>
    <div class="overlay-container">
        <div class="overlay" style="background-image: url('1m.png');">
        </div>
        <div class="overlay" style="background-image: url('2m.png'); ">
        </div>
        <div class="overlay" style="background-image: url('3m.png');">
        </div>
        
    </div>
    
    <div id="lekcije">
        <div id="prijemni_ispit_spoljni_div">
            <div id="prijemni_ispiti_background">
            <div id="prijemni_ispit">
                <div id="prijemni_ispit_tekst">
                    <div id="prijemni_ispit_naslov">Пријемни испит</div>
                    <div id="prijemni_ispit_opis">
                        
                        Лекције за пријемне испите снимане су на систематичан начин како би 
пружиле јасан и свеобухватан пролазак кроз градиво и тиме омогућиле матурантима
оптималну припрему за упис на факултет.
Креиране су у складу са планом и програмом уз коришћење препоручених збирки за
припрему пријемних испита.<br><br>
Материјали за пријемни испит из математике су прављени прaтећи збирку: 
<i>Мр Мирко С. Јовановић: Методичка збирка задатака за полагање пријемног испита из математике са решењима и прегледом теорија за упис на техничке и природно-математичке факултете, 
Академска мисао, Београд 2015.</i><br><br>
Материјали су подељени у 16 различитих области којим је покривено
целокупно градиво потребно за припрему пријемног испита.
Материјали за пријемни испит из физике су и даље у припреми. На индивидуалним часовима за пријемни испит 
из физике се прелази 15 области препоручених на званичном сајту Електротехничког факултета. <br><br>
У склопу припремних материјала за пријемни испит се осим детаљно објашњених
лекција могу пронаћи и корисни савети, пречице и стратегије који омогућавају
постизање већег броја поена.

                    </div>
                </div>
                <div id="prijemni_ispit_icon">
                    <img src="ikonice_final/graduate_hat.png">
                </div>
            </div>
                <div id="prijemni_ispit_icon_druga" style="display: flex; justify-content: center;">
                    <img src="ikonice_final/graduate_hat.png">
                </div>
                </div>
        </div>
        <div id="takmicenja_spoljni_div">
            <div id="takmicenja_background">
            <div id="takmicenja">
                <div id="takmicenja_icon">
                    <img src="ikonice_final/gold_medal.png">
                </div>
                <div id="takmicenja_tekst">
                    <div id="takmicenja_naslov">Такмичења</div>
                    <div id="takmicenja_opis">
                        Видео лекције за такмичења су у припреми. На приватним часовима
                        прелазе се области које прате гимназијски план и програм. Ове области усклађене
су са планом и програмом за такмичења из математике и физике доступним на 
сајтовима Друштва математичара Србије и Друштва физичара Србије.<br><br>
У индивидуалном раду појашњавамо захтевније задатке и примере из претходних година такмичења,
пружајући практичан увид у стил и тежину задатака.
Ова настава је намењена средњошколцима свих разреда и служи као припрема за
све нивое такмичења (општинско, окружно, републичко).

                    </div>
                </div>
            </div>
                
                <div id="takmicenja_icon_druga">
                    <img src="ikonice_final/gold_medal.png">
                </div>
            </div>
        </div>
    </div>
    
    <div id="o_meni">
        
        <p id="o_meni_naslov">О мени</p>
        
        <div id="o_meni_content">
            <p id="o_meni_1">Поздрав! Моје име је Илија Савић, дипломирани сам инжењер
                електротехнике и рачунарства. Основне студије сам завршио на Електротехничком 
                факултету Универзитета у Београду, одсек Сигнали и системи. Тренутно настављам 
                своје академско усавршавање на мастер студијама, истовремено радећи као инжењер у 
                једној домаћој компанији.  <br><br>Током основне и средње школе освајао сам награде на бројним
                републичким такмичењима из математике и физике и био сам учесник на Српској физичкој олимпијади. Електротехнички факултет 
                сам уписао без полагања пријемног испита као један од петоро студената у генерацији који
                су имали награде са републичких такмичења и из математике и из физике.   <br><br>Током свог образовања, увек сам уживао у помагању својим вршњацима, млађим друговима и колегама. Жеља за преношењем знања из области математике и физике довела ме је до 
                стварања ове платформе - Мрежа младих инжењера. Ова веб страница може послужити као полазна
                тачка свим средњошколцима који теже каријерама у областима електротехнике, софтверског 
                инжењерства, машинства и осталим. 
        </p>
        <div id="o_meni_slika"></div>
        
        </div>
        <div id="o_meni_slika_druga"></div>
    </div>
    <div id="privatni_casovi">
        <div id="privatni_casovi_naslov">Приватни часови</div> 
        <div id="privatni_casovi_tekst1">Приватни часови су прилика да се посветимо индивидуалном раду.
            На часу прво прелазимо теоријску основу лекција које вам нису јасне, 
            а затим се бавимо типичним задацима из те области. 
            Током часа ће бити објашњена суштина 
            једне лекције, њени главни проблеми и начини на које они могу да се превазиђу.<br><br>
            На крају часа добијате домаће задатке како бисте код куће провежбали 
            лекцију са часа, јер свака лекција мора да се провежба самостално да би се добро разумела. 
            Бићемо у комуникацији путем WhatsApp или Viber апликације 
            како бисмо додатно разјаснили недоумице током израде домаћих задатака.<br><br>
            Настава је могућа уживо или online. Настава уживо се одржава у Београду, појединачно
            или у групама. Настава online се одржава на Google meet up платформи. Непосредно
            пре часа добијате линк за приступ позиву. Користећи графичку таблу, ја предајем
            лекцију, док је ви пратите на екрану који бих поделио са вама. Након часа добијате
            pdf датотеку са свим материјалима пређеним на часу.

        </div>
        
        <div id="privatni_casovi_final">
            <div id="contact">
                
                <div id="logo_again">
                    <img src="ikonice_final/LOGOBELONARANDZASTA.png" width="100%">
                </div>
                <div id="contact_info">
                        <div id="contact_naslov">Контакт</div>
                    <div id="privatni_casovi_p1" style="padding-left: 100px;">Резервишите час на време:</div>
                    <div id="privatni_casovi_p3" style="font-size: 10px;">savic.ilija_ <img src="ikonice_final/instagram.png" width="50px" height="50px" style="margin-bottom: -15px; margin-left: 20px;"></div>
                    <div id="privatni_casovi_p2" style="font-size: 10px;">ilijasavic1999@hotmail.com <img src="ikonice_final/gmail.png" width="50px" height="50px" style="margin-bottom: -15px; margin-left: 20px;"></div>
                    
                </div>
            </div>
        </div>
    </div>
    <div id="copy_right">
        
        Мрежа младих инжењера &COPY;
    </div>
</body>
</html>
