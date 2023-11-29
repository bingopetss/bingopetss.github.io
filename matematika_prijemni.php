<!DOCTYPE html>
<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/EmptyPHPWebPage.php to edit this template
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <link rel="stylesheet" href="matematika_prijemni_razredi.css">
        <script src="script_matematika_prijemni.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="header.js"></script>
    <link rel="stylesheet" href="header_mp.css">
    </head>
    <body>
        <?php
        include_once 'header.php';
        echo "<style>"
        . "#matematika_mp{background: #d9d9d9;}</style>"
        ?>
        <div id="frame">
            <div id="frame_black_background"></div>
            <iframe id="frame_snimak" name="frame_" width="560" height="315" src="" frameborder="0" allowfullscreen loading="lazy"></iframe>
        </div>
        <div id='orijentacija'>
            Тренутно пратите лекцију:
            Математика за пријемни / Припремне лекције / Рационални алгебарски изрази / Задатак 1
        </div>
        
        <div id="izbor_lekcija">
            <a onclick="showLectures('priprema', event)" href="#">
                    <div id="priprema" class="_boja">Припремне лекције</div>
            </a>
            <a onclick="showLectures('prethodni_prijemni', event)" href="#">
                <div id="prethodni_prijemni" class="_boja">Пријемни испити претходних година</div>
            </a>         
        </div>
        
        <div id="priprema_lekcije" class="lekcije">
            
            <?php
                   //include_once './lekcije/racionalni_algebarski_izrazi.php';
                   include_once './lekcije/kombinatorika.php';
                   include_once './lekcije/trigonometrija.php';
                   include_once './lekcije/skupovi.php';
            ?>
        </div>
        <div id="prethodni_prijemni_lekcije" class="lekcije">
            <?php
                   include_once './lekcije/racionalni_algebarski_izrazi.php';
            ?>
        </div>
    <div id="smth" style="height: 500px; width: 100%;"></div>
    <div id="copy_right">
        
        Мрежа младих инжењера &COPY;
    </div>
        <?php
        ?>
    </body>
</html>
