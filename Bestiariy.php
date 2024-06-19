<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bestiariy.css">
    <link rel="shortcut icon" href="/img/Witcher_ico.png" type="image/x-icon">
    <title>Бестиарий</title>
</head>
<body>
  
    <div id="container">
        <section class="navigation">
            <a href="index.html" class="logo">
            <img src="img/logo.png" alt="Logo">
            </a>
            <nav>
            <ul>
                <li><a href="index.html#Book">Сага о Ведьмаке</a>
                <ul class="sub-menu">
                    <a href="Book_1.html"><li>Последнее желание</li></a>
                    <a href="Book_2.html"><li>Меч Предназначения</li></a>
                    <a href="Book_3.html"><li>Кровь Эльфов</li></a>
                    <a href="Book_4.html"><li>Час Презрения</li></a>
                    <a href="Book_5.html"><li>Крещение огнем</li></a>
                    <a href="Book_6.html"><li>Башня Ласточки</li></a>
                    <a href="Book_7.html"><li>Владычица Озера</li></a>
                    <a href="Book_8.html"><li>Сезон Гроз</li></a>
                </ul>
                </li>
                <li><a href="index.html#Game">Компьютерные игры</a>
                <ul class="sub-menu">
                    <a href="Game_1.html"><li>Ведьмак</li></a>
                    <a href="Game_2.html"><li>Ведьмак 2: Убийцы королей</li></a>
                    <a href="Game_3.html"><li>Ведьмак 3: Дикая Охота</li></a>
                    <a href="Game_5.html"><li>Гвинт</li></a>
                    <a href="Game_4.html"><li>Кровная вражда: Ведьмак. Истории</li></a>
                </ul>
                </li>
                <li><a href="index.html#Film">Киноадаптации</a>
                <ul class="sub-menu">
                    <a href="Cinema_1.html"><li>Ведьмак (2002г.)</li></a>
                    <a href="Cinema_2.html"><li>Ведьмак (Netflix 2019г.)</li></a>
                    <a href="Cinema_3.html"><li>Ведьмак: Кошмар волка</li></a>
                </ul>
                <li><a href="#">Бестиарий</a></li>
                <li><a href="World.html">Мир Ведьмака</a></li>
            </ul>
            <div class="burger-icon">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            </nav>
          </section>
          <header>
            <h1 class="h1_head"><b>Бестиарий</b></h1><br>
            <p class="p_head"><i>Земли Северных Королевств полны опасностей: на дороге на путника могут напасть алчные бандиты, в лесу – стая волков, а в болотистых местах, темных пещерах, путника поджидают куда более страшные твари.</i></p>
          </header>
          <div class="faded"></div>
        <section class="char_box">
            <div class="char_box_content">
                <div class="char_info">
                    <div class="char_box_name">
                        <h3 class="popup-title"></h3>
                        <a href="#" class="char_box_close"></a>
                    </div>
                    <div class="char_image">
                      <img src="" alt="" class="popup-img">
                    </div>
                    <div class="char_desc">
                      <p class="popup-desc"></p>
                    </div>
            </div>
        </section>

          <section class="best_main">
          <?php require 'DB.php'; ?>
          </section>




    </div>
    <script src="js/bestiariy.js"></script>
</body>
</html>