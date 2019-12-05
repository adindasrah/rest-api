<?php 

//mengambil data dari array dan menampilkan ke json
	// $mahasiswa = [
	// 	[
	// 		"nama" => "Adinda Sarah",
	// 		"nrp"  => "173040048",
	// 		"email" => "adindasarah.asam@mail.unpas.ac.id"
	// 	],
	// 	[
	// 		"nama" => "Evi Peot",
	// 		"nrp"  => "173040050",
	// 		"email" => "evipeot@mail.unpas.ac.id"
	// 	]
	// ];

// mengambil data dari database
	$dbh = new PDO('mysql:host=localhost;dbname=phpmvc','root','');
	$db = $dbh->prepare('SELECT * FROM mahasiswa');
	$db->execute();
	$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

	$data = json_encode($mahasiswa);
	echo $data;

 ?>