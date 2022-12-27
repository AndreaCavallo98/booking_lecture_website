<template>
  <!-- Footer -->
  <footer class="footer">
    <!-- Footer Top -->
    <div class="footer-top aos" data-aos="fade-up">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <!-- Footer Widget -->
            <div class="footer-widget footer-about">
              <div class="footer-logo">
                <router-link
                  :to="{ name: 'homepage' }"
                  class="navbar-brand logo"
                >
                  <h5 style="color: white">BOOKING LECTURE</h5>
                  <!--<img
              src="../../../assets/img/logo.png"
              class="img-fluid"
              alt="Logo"
            />-->
                </router-link>
              </div>
              <div class="footer-about-content">
                <p>
                  Welcome in booking lecture. With this application you will be
                  able to learn and improve your knowledge. No more bad grades
                  at school and the mum will be happy!
                </p>
                <div class="social-icon">
                  <ul>
                    <li>
                      <a href="javascript:void(0);" target="_blank"
                        ><i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" target="_blank"
                        ><i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" target="_blank"
                        ><i class="fab fa-linkedin-in"></i
                      ></a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" target="_blank"
                        ><i class="fab fa-instagram"></i
                      ></a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" target="_blank"
                        ><i class="fab fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- /Footer Widget -->
          </div>

          <div class="col-lg-2 col-md-6"></div>

          <div class="col-lg-2 col-md-6"></div>

          <div class="col-lg-4 col-md-6">
            <!-- Footer Widget -->
            <div class="footer-widget footer-contact">
              <h2 class="footer-title">Contact Us</h2>
              <div class="footer-contact-info">
                <div class="footer-address">
                  <span><i class="fas fa-map-marker-alt"></i></span>
                  <p>
                    Via Centallo 121, Centallo,<br />
                    Piemonte, CN 12044
                  </p>
                </div>
                <p>
                  <i class="fas fa-phone-alt"></i>
                  +39 345 960 4812
                </p>
                <p class="mb-0">
                  <i class="fas fa-envelope"></i>
                  andrea.cavallo296@edu.unito.it
                </p>
              </div>
            </div>
            <!-- /Footer Widget -->
          </div>
        </div>
      </div>
    </div>
    <!-- /Footer Top -->

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container-fluid">
        <!-- Copyright -->
        <div class="copyright">
          <div class="row">
            <div class="col-md-6 col-lg-6">
              <div class="copyright-text">
                <p class="mb-0">
                  &copy; 2023 Booking lecture. All rights reserved.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <!-- Copyright Menu -->
              <div class="copyright-menu">
                <ul class="policy-menu">
                  <li style="color: white">Terms and Conditions</li>
                  <li style="color: white">Policy</li>
                </ul>
              </div>
              <!-- /Copyright Menu -->
            </div>
          </div>
        </div>
        <!-- /Copyright -->
      </div>
    </div>
    <!-- /Footer Bottom -->
  </footer>
  <!-- /Footer -->
</template>

<script>
export default {
  name: "AppFooter",
};
</script>
