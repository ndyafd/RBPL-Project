<?php
// mengaktifkan session pada php
session_start();

// menghubungkan php dengan koneksi database
include 'koneksi.php';

// menangkap data yang dikirim dari form login
$username = $_POST['username'];
$password = $_POST['password'];


// menyeleksi data user dengan username dan password yang sesuai
$login = mysqli_query($koneksi,"SELECT * FROM user WHERE username='$username' and password='$password'");
// menghitung jumlah data yang ditemukan
$cek = mysqli_num_rows($login);

// cek apakah username dan password di temukan pada database
if($cek > 0){

 $data = mysqli_fetch_assoc($login);

 // cek jika user login sebagai admin
 if($data['level']=="admin"){

  // buat session login dan username
  $_SESSION['username'] = $username;
  $_SESSION['level'] = "admin";
  // alihkan ke halaman dashboard admin
  header("location:manager.php");

 // cek jika user login sebagai customer
 }else if($data['level']=="customer"){
  // buat session login dan username
  $_SESSION['username'] = $username;
  $_SESSION['level'] = "customer";
  // alihkan ke halaman dashboard customer
  header("location:ordering/index.php");

  // cek jika user login sebagai driver
 }else if($data['level']=="driver"){
	// buat session login dan username
	$_SESSION['username'] = $username;
	$_SESSION['level'] = "driver";
	// alihkan ke halaman dashboard driver
	header("location:deliverer.php");

 }else{

  // alihkan ke halaman login kembali
  header("location:index.php?pesan=gagal");
 } 
}else{
 header("location:index.php?pesan=gagal");
}

?>
