<?php
// Подключение к базе данных
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "thewitcherbleidd";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Получение всех типов монстров
$sql = "SELECT * FROM monster_types";
$result = mysqli_query($conn, $sql);

// Создание блоков для каждого типа монстра
while ($row = mysqli_fetch_assoc($result)) {
  echo '<div class="group">';
  echo '<h2 class="group-title">'.$row['name'].'</h2>';
  
  // Получение всех монстров для данного типа
  $sql_monsters = "SELECT * FROM monsters WHERE type_id = ".$row['id'];
  $result_monsters = mysqli_query($conn, $sql_monsters);
  
  // Создание блоков для каждого монстра
  echo '<div class="creature-container">';
  while ($row_monster = mysqli_fetch_assoc($result_monsters)) {
    echo '<div class="creature" data-id="'.$row_monster['id'].'">';
    echo '<a href="'.$row_monster['id'].'" data-desc="'.$row_monster['description'].'"><img src="'.$row_monster['image_url'].'" alt=""></a>';
    echo '<a href="#"><div class="creature-name"><b>'.$row_monster['name'].'</b></div></a>';
    echo '</div>';
  }
  echo '</div>';
  echo '<hr color="silver" size="4px" class="hr_style">';
  echo '</div>';
}
?>