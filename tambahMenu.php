<?php 
session_start();
if (empty($_SESSION['username'])){
	header('location:index.php');	
} else {
	include "koneksi.php";
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>NANGKRING</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Amatic+SC:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/main.css" rel="stylesheet">

  
</head>
<?php 
$query_menu = mysqli_query($koneksi, "SELECT * FROM menu order by id_menu desc")or die(mysqli_error());
$row_menu = mysqli_fetch_array($query_menu);
$totalrow_menu = mysqli_num_rows($query_menu);
 
if ($totalrow_menu > 0) {
  $idmenu_terakhir = substr($row_menu['id_menu'], -3);
  $nourut = $idmenu_terakhir+1;
  $isikodemenu = $nourut;
  }else if ($totalrow_menu ==0){
  $nourut = 1;
  $isikodemenu= $nourut;
  
  }


 ?>
<body>
<?php
    session_start();
   
    // cek apakah yang mengakses halaman ini sudah login
    if($_SESSION['level']==""){
     header("location:index.php?pesan=gagal");
    }
   ?>
   
  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <a href="index.php" class="logo d-flex align-items-center me-auto me-lg-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1>Nangkring<span>.</span></h1>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="#hero">Tambah Menu</a></li>
          <li><a href="manager.php">Beranda</a></li>
         <!-- <li><a href="#menu">Menu</a></li>
          <li><a href="orders.html">Pemesanan</a></li>
          <li><a href="#chefs">Delivery</a></li>
          <li><a href="#book-a-table">Porsi Besar</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
      </nav><!-- .navbar -->

      
      <form class="form-inline">
          <a href="logout.php" class="btn-book-a-table">Log out</a>
      </form>
      
      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header><!-- End Header -->
  <!-- <div class="wrapper">
  <div id="sidebar">
      <div class="sidebar-header">
        <h3>Your Account Information</h3>
      </div>
      <div class="inSidebar">
        
          </p>
        <input type="submit" value="Edit Information" class="btn btn-info" id="editButton">
        <br>
        <br>

      </div>
    </div>
   <!-- Page Content  

   <div id="content">
      <header class="masthead text-gray text-center">
        <div class="container">
          <div class="container1">
          <div class="jumbotron" style="width: 30rem;margin:auto">
          <h2 id="h1" style="color:#008b8b">Welcome to Menu Edit Food!</h2>
          <div id="duplicator">
          </div>
        </div>
      </div>
      </header>

  <section class="features-icons bg-light text-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <p class="lead mb-0">Create, edit and delete food quickly!</p>
          </div>
        </div>
      </div>
    </div>
  </section>



</div>
</div> -->
  
    <!-- ======= Menu Section ======= -->
    <section id="menu" class="menu">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Tambah Menu</h2>
          <p>Create New <span>Warkop Santai Menu</span></p>
        </div>
        <!--
        <ul class="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">
        <div class="container text-center">
        <div class="row">
          <li class="nav-item">
            <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-makanan">
              <h4>Makanan</h4>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-minuman">
              <h4>Minuman</h4>
            </a><!-- End tab nav item 

          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-cemilan">
              <h4>Camilan</h4>
            </a>
          </li><!-- End tab nav item -->

          <!-- End tab nav item -->

        </ul>
    <!-- ======= Tambah Menu Section ======= -->
  <section id="hero" class="hero d-flex align-items-center section-bg">
   <!-- <div class="container">
      <div class="row justify-content-between gy-5">
        <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start"> -->
        <form id="contact-form" action="prosesMenu.php" method="post" enctype="multipart/form-data">
           <!-- <div class="row">
            <div class="form-group"> -->
                <label for="id_menu">Kode Menu</label>
                              <div class="col-lg-12">
                              <fieldset>
                                  <input name="id_menu" type="text" id="id_menu" class="form-control" required="required" value="<?php echo $isikodemenu ?>" readonly>
                                  <!--<span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>-->
                                  <fieldset>
                              </div>
              <div class="col-lg-12">
                <fieldset>
                  <label for="nama_kerabat">Nama Menu</label>
                  <input type="name" name="nama_menu" id="nama_menu" placeholder="Nama Menu..." autocomplete="on" required>
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <label for="harga"><br>Harga</label>
                  <input type="harga" name="harga" id="harga" autocomplete="on" required>
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                <label for="kategori">Kategori</label>
                    <select name="kategori" id="kategori"  class="form-control" required>
                      <option> ---- Pilih Salah Satu ---- </option>
                      <option value="Makanan">Makanan</option>
                      <option value="Minuman">Minuman</option>
                      <option value="Cemilan">Cemilan</option>
                    </select>
                  </fieldset>
                </div>
              <div class="col-lg-12">
                <fieldset>
                  <label for="deskripsi">Deskripsi</label>
                  <input type="deskripsi" name="deskripsi" id="deskripsi" placeholder="Detail Deskripsi..." autocomplete="on" >
                </fieldset>
              </div> 
            <div class="col-lg-12">
            <fieldset>
				<label for="foto">Foto :</label>
				<input type="file" name="foto" required="required">
				<p style="color: red">Ekstensi yang diperbolehkan .png | .jpg | .jpeg | .gif</p>
                <fieldset>
			</div>	
              <div class="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" class="orange-button">Kirim Data</button>
                </fieldset>
              </div>
            </div>
</form>
        </div>
      </div>
    </div>
  </section>
  <!-- End Tambah Menu Section -->

    <!-- ======= Contact Section ======= 
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Kontak</h2>
          <p>Butuh Bantuan? <span>Kontak Kami</span></p>
        </div>

        <div class="mb-3">
          <iframe style="border:0; width: 100%; height: 350px;" src="https://maps.app.goo.gl/r6ffs97t65zsmVST9?g_st=ic" frameborder="0" allowfullscreen></iframe>
        </div><!-- End Google Maps 

        <div class="row gy-4">

          <div class="col-md-6">
            <div class="info-item  d-flex align-items-center">
              <i class="icon bi bi-map flex-shrink-0"></i>
              <div>
                <h3>Alamat Kami</h3>
                <p>Jl Pedes - Godean, Karanglo, Argomulyo, 55563</p>
              </div>
            </div>
          </div><!-- End Info Item 

          <div class="col-md-6">
            <div class="info-item d-flex align-items-center">
              <i class="icon bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Kami</h3>
                <p>itabaandi@gmail.com</p>
              </div>
            </div>
          </div><!-- End Info Item 

          <div class="col-md-6">
            <div class="info-item  d-flex align-items-center">
              <i class="icon bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Panggil Kami</h3>
                <p>081327627091</p>
              </div>
            </div>
          </div><!-- End Info Item 

          <div class="col-md-6">
            <div class="info-item  d-flex align-items-center">
              <i class="icon bi bi-share flex-shrink-0"></i>
              <div>
                <h3>Jam Buka</h3>
                <div><strong>Senin-Sabtu:</strong> 11.00 - 23.00 WIB;
                  <strong>Minggu:</strong> Tutup
                </div>
              </div>
            </div>
          </div><!-- End Info Item 

        </div>

        <form action="forms/contact.php" method="post" role="form" class="php-email-form p-3 p-md-4">
          <div class="row">
            <div class="col-xl-6 form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
            </div>
            <div class="col-xl-6 form-group">
              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
            </div>
          </div>
          <div class="form-group">
            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
          </div>
          <div class="form-group">
            <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <div class="my-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Pesan Kamu sudah terkirim. Terima Kasih!</div>
          </div>
          <div class="text-center"><button type="submit">Kirim Pesan</button></div>
        </form><!--End Contact Form 

      </div>
    </section><!-- End Contact Section -->

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer" class="footer">

    <div class="container">
      <div class="row gy-3">
        <div class="col-lg-3 col-md-6 d-flex">
          <i class="bi bi-geo-alt icon"></i>
          <div>
            <h4>Alamat</h4>
            <p>
              Jl Pedes - Godean, Karanglo, Argomulyo<br>
              Bantul, YK 55563 - ID<br>
            </p>
          </div>

        </div>

        <div class="col-lg-3 col-md-6 footer-links d-flex">
          <i class="bi bi-telephone icon"></i>
          <div>
            <h4>Reservasi</h4>
            <p>
              <strong>Phone:</strong> 081327627091<br>
              <strong>Email:</strong> itabaandi@gmail.com<br>
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 footer-links d-flex">
          <i class="bi bi-clock icon"></i>
          <div>
            <h4>Jam Buka</h4>
            <p>
              <strong>Senin-Sabtu:</strong> 11.00 - 23.00 WIB <br>
              Minggu: Tutup
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 footer-links">
          <h4>Ikuti Kami</h4>
          <div class="social-links d-flex">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Nangkring</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/ -->

      </div>
    </div>

  </footer><!-- End Footer -->
  <!-- End Footer -->

  <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <div id="preloader"></div>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>