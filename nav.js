// nav.js — injected on every page
(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(page) {
    return path === page ? 'active' : '';
  }

  const navHTML = `
  <div class="grid-bg"></div>
  <nav class="nav" id="nav">
    <div class="nav-inner">
      <a href="index.html" class="logo">ELOR<span>TECH</span></a>
      <ul class="nav-links">
        <li><a href="index.html" class="${isActive('index.html')}">Home</a></li>
        <li><a href="about.html" class="${isActive('about.html')}">About</a></li>
        <li><a href="services.html" class="${isActive('services.html')}">Services</a></li>
        <li><a href="products.html" class="${isActive('products.html')}">Products</a></li>
        <li><a href="pricing.html" class="${isActive('pricing.html')}">Pricing</a></li>
        <li><a href="hosting.html" class="${isActive('hosting.html')}">Hosting</a></li>
        <li><a href="jobs.html" class="${isActive('jobs.html')}">Jobs</a></li>
        <li><a href="contact.html" class="nav-cta">Get in Touch</a></li>
      </ul>
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      <ul>
        <li><a href="index.html" onclick="closeMobile()">Home</a></li>
        <li><a href="about.html" onclick="closeMobile()">About</a></li>
        <li><a href="services.html" onclick="closeMobile()">Services</a></li>
        <li><a href="products.html" onclick="closeMobile()">Products</a></li>
        <li><a href="pricing.html" onclick="closeMobile()">Pricing</a></li>
        <li><a href="hosting.html" onclick="closeMobile()">Hosting</a></li>
        <li><a href="jobs.html" onclick="closeMobile()">Jobs</a></li>
        <li><a href="contact.html" onclick="closeMobile()">Contact</a></li>
      </ul>
    </div>
  </nav>`;

  const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="index.html" class="footer-logo">ELOR<span>TECH</span></a>
          <p>Founded in 2015. Transforming the digital landscape for businesses worldwide — from Nigeria to the globe.</p>
          <div class="footer-socials">
            <a href="https://x.com/israelprince4" target="_blank" aria-label="Twitter">𝕏</a>
            <a href="https://www.linkedin.com/in/jacob-momoh-5a05b485/" target="_blank" aria-label="LinkedIn">in</a>
            <a href="https://www.instagram.com/momohjacob20/" target="_blank" aria-label="Instagram">◎</a>
          </div>
        </div>
        <div class="footer-links">
          <div class="footer-col">
            <h5>Services</h5>
            <ul>
              <li><a href="services.html">Web Development</a></li>
              <li><a href="services.html">Mobile Apps</a></li>
              <li><a href="services.html">SEO & Marketing</a></li>
              <li><a href="services.html">Hosting & Maintenance</a></li>
              <li><a href="services.html">UX/UI Design</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="products.html">Our Products</a></li>
              <li><a href="pricing.html">Pricing Plans</a></li>
              <li><a href="hosting.html">Hosting Plans</a></li>
              <li><a href="jobs.html">Careers</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="tel:+2348168376606">+234 816 837 6606</a></li>
              <li><a href="mailto:info@elortech.com">info@elortech.com</a></li>
              <li><a href="contact.html">Send a Message</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 ELOR-TECH LTD. All rights reserved.</p>
        <p>Built with ♥ in Nigeria · Competing Globally.</p>
      </div>
    </div>
  </footer>`;

  // Inject before first element
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
