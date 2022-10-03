<?php
$conexion = mysql_connect("localhost", "root", "", "bd_prueba");
if(!$conexion){
	echo'error al conectar a la basse de datos';
}
else{
	echo'conectado a la base de datos';
}
>?php