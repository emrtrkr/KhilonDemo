(function () {
  var header = document.querySelector(".header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  document.querySelectorAll(".nav-item").forEach(function (item) {
    var menu = item.querySelector(".mega-menu");
    if (!menu) return;
    var open = function () {
      document.querySelectorAll(".nav-item.dropdown-open").forEach(function (other) {
        if (other !== item) other.classList.remove("dropdown-open");
      });
      document.querySelectorAll(".mega-menu.show").forEach(function (other) {
        if (other !== menu) other.classList.remove("show");
      });
      item.classList.add("dropdown-open");
      menu.classList.add("show");
      var btn = item.querySelector(".dropdown-toggle");
      if (btn) btn.setAttribute("aria-expanded", "true");
    };
    var close = function () {
      item.classList.remove("dropdown-open");
      menu.classList.remove("show");
      var btn = item.querySelector(".dropdown-toggle");
      if (btn) btn.setAttribute("aria-expanded", "false");
    };
    item.addEventListener("mouseenter", open);
    item.addEventListener("mouseleave", close);
    var toggle = item.querySelector(".dropdown-toggle");
    if (toggle) {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        if (item.classList.contains("dropdown-open")) close();
        else open();
      });
    }
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-item")) {
      document.querySelectorAll(".nav-item.dropdown-open").forEach(function (item) {
        item.classList.remove("dropdown-open");
      });
      document.querySelectorAll(".mega-menu.show").forEach(function (menu) {
        menu.classList.remove("show");
      });
    }
  });

  document.querySelectorAll(".faq-question").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var wasActive = item.classList.contains("active");
      document.querySelectorAll(".faq-item.active").forEach(function (openItem) {
        openItem.classList.remove("active");
      });
      if (!wasActive) item.classList.add("active");
    });
  });

  var banner = document.querySelector(".cookie-banner");
  function hideBanner() {
    if (banner) banner.style.display = "none";
  }
  hideBanner();
  if (banner) {
    banner.querySelectorAll(".cookie-btn").forEach(function (btn) {
      btn.addEventListener("click", hideBanner);
    });
  }
  var cookieFooterBtn = document.querySelector(".footer-cookie-btn");
  if (cookieFooterBtn && banner) {
    cookieFooterBtn.addEventListener("click", function () {
      banner.style.display = "";
    });
  }

  var overlay = document.querySelector(".mobile-menu-overlay");
  var openBtn = document.querySelector(".menu-toggle");
  var closeBtn = document.querySelector(".menu-close");
  function setMobile(open) {
    if (!overlay) return;
    overlay.classList.toggle("active", open);
    document.documentElement.classList.toggle("mobile-menu-open", open);
    document.body.classList.toggle("mobile-menu-open", open);
  }
  if (openBtn) openBtn.addEventListener("click", function () { setMobile(true); });
  if (closeBtn) closeBtn.addEventListener("click", function () { setMobile(false); });
  if (overlay) {
    overlay.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setMobile(false); });
    });
  }

  document.querySelectorAll('a[href="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });
})();
