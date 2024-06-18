<?php 
include 'koneksi.php';
$id_menu = $_POST['id_menu'];
$nama_menu = $_POST['nama_menu'];
$harga = $_POST['harga'];
$kategori = $_POST['kategori'];
$deskripsi = $_POST['deskripsi'];
$foto = $_POST['foto']
 
$ekstensi =  array('png','jpg','jpeg','gif');
$filename = $_FILES['foto']['name'];
$ukuran = $_FILES['foto']['size'];
$ext = pathinfo($filename, PATHINFO_EXTENSION);
 
if(!in_array($ext,$ekstensi) ) {
	header("location:index.php?alert=gagal_ekstensi");
}else{
	if($ukuran < 1044070){		
		$xx = $rand.'_'.$filename;
		move_uploaded_file($_FILES['foto']['tmp_name'], 'gambar/'.$rand.'_'.$filename);
		mysqli_query($koneksi, "INSERT INTO menu VALUES(NULL,'$nama_menu','$harga','$kategori', '$deskripsi', '$xx')");
		header("location:index.php?alert=berhasil");
	}else{
		header("location:index.php?alert=gagak_ukuran");
	}
}