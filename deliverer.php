<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <title>Your Restaurant</title>

  <!-- Bootstrap core CSS -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/styles.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="css/landing-page.min.css" rel="stylesheet">
  <!-- Bootstrap CSS CDN -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
    integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
  <!-- Our Custom CSS -->
  <link rel="stylesheet" href="css/style2.css">
  <!-- Scrollbar Custom CSS -->
  <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css">

  <!-- Font Awesome JS -->
  <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js"
    integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ"
    crossorigin="anonymous"></script>
  <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js"
    integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY"
    crossorigin="anonymous"></script>

  <!--Firebase authentication-->
  <script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-firestore.js"></script>


</head>

<body>

  <div class="wrapper">
    <div id="sidebar">
        <div class="sidebar-header">
          <h3>Your Account Information</h3>
        </div>
        <div class="inSidebar">
          Name:
          <p style="color:#008000">
          <strong id="userName"></strong>
        </p>
          Address:
          <p style="color:#008000">
          <strong id="userAddress"></strong>
            </p>
          City:
          <p style="color:#008000">
          <strong id="userCity"></strong>
            </p>
          State:
          <p style="color:#008000">
          <strong id="userState"></strong>
            </p>
          Zip:
          <p style="color:#008000">
          <strong id="userZip"></strong>
            </p>
          Email:
          <p style="color:#008000">
          <strong id="userEmail"></strong>
            </p>
          Phone Number:
          <p style="color:#008000">
          <strong id="userPhone"></strong>
            </p>
          <input type="submit" value="Edit Information" class="btn btn-info" id="editButton">
          <br>
          <br>

        </div>
      </div>

      <!-- Page Content  -->

      <div id="content">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">

            <button type="button" id="sidebarCollapse" class="btn btn-info">
              <i class="fas fa-align-left"></i>
              <span><img src="./img/fm.jpg"></span>

            </button>
            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <i class="fas fa-align-justify"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

              <ul class="nav navbar-nav ml-auto">
                  <li class="nav-item active">
                      <a class="nav-link" id="ordersButton" href="OrdersDeliverer.html">Restaurant Orders</a>
                    </li>
                <li class="nav-item">
                  <a class="nav-link" href="homepage.html" id="signOut">Sign Out</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section class="features-icons bg-light text-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <p class="lead mb-0">Grab your vehicle and deliver whenever you want. Be your own boss!</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <p class="lead mb-0">Enjoy your city and the rides you make.</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                  <p class="lead mb-0">Deliver with Food Mood and get paid instantly. No more waiting for biweekly paychecks!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Image Showcases -->
        <section class="showcase">
          <div class="container-fluid p-0">
            <div class="jumbotron">
            <div class="row no-gutters">

              <div class="col-lg-6 order-lg-2 text-white showcase-img" style="background-image: url('img/login3.jpg');"></div>
              <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Log in!</h2>
                <p class="lead mb-0">Deliver with Food Mood in the easiest possible way! Just sign in and you will be good to go.</p>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-lg-6 text-white showcase-img" style="background-image: url('img/delivery.png');"></div>
              <div class="col-lg-6 my-auto showcase-text">
                <h2>Pick Up. Drop off.</h2>
                <p class="lead mb-0">Grab your vehicle and deliver whenever you want. Be your own boss!</p>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-lg-6 order-lg-2 text-white showcase-img" style="background-image: url('img/money1.jpg');">
              </div>
              <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Make instant money!</h2>
                <p class="lead mb-0">Deliver with Food Mood and get paid instantly. No more waiting for biweekly paychecks!</p>
              </div>
            </div>
            <div>
          </div>
        </section>
        
         <footer class="footer bg-light">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
                <ul class="list-inline mb-2">
                  <li class="list-inline-item">
                    <a href="#">About</a>
                  </li>
                  <li class="list-inline-item">&sdot;</li>
                  <li class="list-inline-item">
                    <a href="#">Contact</a>
                  </li>
                  <li class="list-inline-item">&sdot;</li>
                  <li class="list-inline-item">
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
                <p class="text-muted small mb-4 mb-lg-0">&copy; Food Mood 2019. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </footer> 

</div>
</div>

    <script src="js/firebase.js"></script>
    <script src="js/signOut.js"></script>
  <script src="js/deliverer.js"></script>
  <script src="js/editAccount.js"></script>

  <!-- jQuery CDN - Slim version (=without AJAX) -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
  <!-- Popper.JS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
    integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
    crossorigin="anonymous"></script>
  <!-- Bootstrap JS -->
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
    integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
    crossorigin="anonymous"></script>
  <!-- jQuery Custom Scroller CDN -->
  
  </body>
</html>
