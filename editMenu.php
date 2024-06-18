 <?php
    session_start();
    include "koneksi.php";
    $id_menu = $_GET['id_menu'];
    $query = mysqli_query($koneksi, "select * from menu where id_menu='$id_menu'");
    $data = mysqli_fetch_array($query);

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

<body>
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
          <li><a href="#about">Edit Menu</a></li>
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

<!-- ======= Edit Menu Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Edit Menu</h2>
          <p>Mengedit Informasi<span> Menu</span></p>
        </div>
        <div class="col-lg-6">
          <form id="contact-form" action="updateMenu.php" method="post" enctype="multipart/form-data">
            <div class="row">
            <div class="form-group">
                <label for="id_menu">Kode Menu</label>
                              <div class="col-lg-12">
                              <fieldset>
                                  <input type="text" name="id_menu" value="<?php echo $data['id_menu']?>" >
                                  <!--<span class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>-->
                                  <fieldset>
                              </div>
              <div class="col-lg-12">
                <fieldset>
                  <label for="nama_menu">Nama Menu</label>
                  <input type="text" name="nama_menu" value="<?php echo $data['nama_menu']; ?>">
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <label for="harga">Harga</label>
                  <input type="harga" name="harga" id="harga" value="<?php echo $data['harga'];?>" required />
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                <label for="kategori">Kategori</label>
                    <select name="kategori" id="kategori"  class="form-control" required />
                      <option> <?php echo $data['kategori'];?> </option>
                      <option value="makanan">Makanan</option>
                      <option value="minuman">Minuman</option>
                      <option value="cemilan">Cemilan</option>
                    </select>
                  </fieldset>
                </div>
              <div class="col-lg-12">
                <fieldset>
                  <label for="deskripsi">Deskripsi</label>
                  <input type="deskripsi" name="deskripsi" id="deskripsi" value="<?php echo $data['deskripsi'];?>" required />
                </fieldset>
              </div> 
              <div class="col-lg-12">
                <fieldset>
				<label for="foto">Foto :</label>
				<input type="file" name="foto" id="foto" value="<?php echo $data['foto'];?>" required >
				<p style="color: red">Ekstensi yang diperbolehkan .png | .jpg | .jpeg | .gif</p>
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" class="orange-button">Kirim Data</button>
                  <a href="admin.php" class="btn btn-sm btn-danger">Batal </a>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>


              
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Edit Menu Section -->

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