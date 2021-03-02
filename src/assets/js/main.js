!(function (e) {
  "use strict";
  var i = e(".mainmenu li.dropdown,.mainmenu li.sub-dropdown"),
    t = e('<div class="dropdown-btn"></div>');
  i.append(t),
    e(".mainmenu li.dropdown .dropdown-btn").on("click", function () {
      return (
        e(this).toggleClass("submenu-icon"),
        e(this).prev("ul").slideToggle(400),
        !1
      );
    });
  var o = e(".search-box i");
  e("#close");
  o.length &&
    o.on("click", function () {
      return e(this).parent().toggleClass("active-search"), !1;
    });
  var a = e(".active-sticky");
  (n = e(window)).on("scroll", function () {
    var i = e(window).scrollTop(),
      t = a;
    return i < 1 ? t.removeClass("is-sticky") : t.addClass("is-sticky"), !1;
  });
  var n,
    r = e(".active-sticky-2");
  (n = e(window)).on("scroll", function () {
    var i = e(window).scrollTop(),
      t = r;
    return i < 100 ? t.removeClass("is-sticky") : t.addClass("is-sticky"), !1;
  });
  var s = window.location.href.substr(
    window.location.href.lastIndexOf("/") + 1
  );
  e("ul li a").each(function () {
    (e(this).attr("href") !== s && "" !== e(this).attr("href")) ||
      e(this).addClass("active");
  });
  var l = e(".portfolio-menu li");
  l.on("click", function () {
    var i = e(".portfolio-grid");
    l.removeClass("active"), e(this).addClass("active");
    var t = e(this).attr("data-filter");
    i.isotope({
      filter: t,
      animationOptions: { duration: 750, easing: "linear", queue: !1 },
    });
  }),
    e(".venobox").venobox(),
    e(".venoboxvid").venobox();
  var c = e("#slickFade"),
    d = e(".one-item"),
    u = e(".testimonial-item");
  c.slick({
    dots: !1,
    arrows: !0,
    fade: !0,
    autoplay: !0,
    speed: 1e3,
    prevArrow: '<i class="prev zmdi zmdi-chevron-left"></i>',
    nextArrow: '<i class="next zmdi zmdi-chevron-right"></i>',
  }),
    d.slick({
      dots: !1,
      arrows: !0,
      prevArrow: '<i class="prev zmdi zmdi-chevron-left"></i>',
      nextArrow: '<i class="next zmdi zmdi-chevron-right"></i>',
    }),
    u.slick({ dots: !1, arrows: !1, autoplay: !0, autoplaySpeed: 4e3 }),
    e(".counter").counterUp({ delay: 50, time: 3e3 });
  var m = e("#bgvideo");
  e.fn.mb_YTPlayer && m.mb_YTPlayer();
  var v = e("#contact_form");
  v.validate({
    onfocusout: !1,
    onkeyup: !1,
    rules: { name: "required", email: { required: !0, email: !0 } },
    errorPlacement: function (e, i) {
      e.insertBefore(i);
    },
    messages: {
      name: "What's your name?",
      email: {
        required: "What's your email?",
        email: "Please, enter a valid email",
      },
    },
    highlight: function (i) {
      e(i).text("").addClass("error");
    },
    success: function (e) {
      e.text("").addClass("valid");
    },
  });
  var p = e("#contact_submit");
  v.submit(function () {
    if (e(this).valid()) {
      p.button("loading");
      var i = e(this).attr("action");
      e.ajax({
        url: i,
        type: "POST",
        data: {
          contactname: e("#contact_name").val(),
          contactemail: e("#contact_email").val(),
          contactmessage: e("#contact_message").val(),
        },
        success: function () {
          p.button("reset"), p.button("complete");
        },
        error: function () {
          p.button("reset"), p.button("error");
        },
      });
    } else p.button("reset");
    return !1;
  }),
    e.scrollUp({
      scrollText: '<i class="zmdi zmdi-long-arrow-up"></i>',
      easingType: "linear",
      scrollSpeed: 500,
      animation: "slide",
    });
  var h = e(".more-load"),
    b = e("#load-more-btn"),
    f = h.length;
  h.hide(),
    f > 3 && b.show(),
    h.slice(0, 3).show(),
    b.on("click", function () {
      var i = h.filter(":visible").length;
      h.slice(i - 1, i + 3).fadeIn(),
        h.filter(":visible").length >= f && b.hide(),
        e(".portfolio-grid").isotope("layout");
    }),
    e(".portfolio-menu li:not(:first-child)").on("click", function () {
      b.hide();
    }),
    e("#particles-bg").length &&
      particlesJS("particles-bg", {
        particles: {
          number: { value: 100, density: { enable: !0, value_area: 800 } },
          color: { value: "#666666" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 0.5,
            random: !1,
            anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
          },
          size: {
            value: 3,
            random: !0,
            anim: { enable: !1, speed: 40, size_min: 0.1, sync: !1 },
          },
          line_linked: {
            enable: !0,
            distance: 150,
            color: "#666666",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: !0,
            speed: 6,
            direction: "none",
            random: !0,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: { enable: !1, rotateX: 600, rotateY: 600 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: !0, mode: "grab" },
            onclick: { enable: !0, mode: "push" },
            resize: !0,
          },
          modes: {
            grab: { distance: 250, line_linked: { opacity: 1 } },
            bubble: {
              distance: 600,
              size: 80,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: !0,
      }),
    n.on("load", function () {
      e("#loading-wrap").fadeOut(1e3),
        e(".fitRows-grid").isotope({
          itemSelector: ".grid-item",
          layoutMode: "fitRows",
        }),
        e(".masonry-grid").isotope({
          itemSelector: ".grid-item",
          masonryHorizontal: { rowHeight: 100 },
        });
    });
})(jQuery);
