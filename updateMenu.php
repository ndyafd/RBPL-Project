<?php
include "koneksi.php";
$id_menu            = $_POST['id_menu'];
$nama_menu          = $_POST['nama_menu'];
$harga              = $_POST['harga'];
$kategori           = $_POST['kategori'];
$deskripsi          = $_POST['deskripsi'];
$foto               = $_POST['foto'];


$query = mysqli_query($koneksi, "UPDATE menu SET nama_menu='$nama_menu', harga='$harga', kategori='$kategori', deskripsi='$deskripsi', foto='$foto' WHERE id_menu='$id_menu'")or die(mysqli_error());
if ($query){
header('location:manager.php');	
} else {
	echo "gagal";
    }
?>