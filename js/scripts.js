/*
 *   Author: imharshm
 */

/* Preloader */

$(window).on("load", function () {
  var preload = $(".preloader");
  preload.find(".spinner").fadeOut(function () {
    preload.fadeOut();
  });
});

$(function () {
  "use strict";

  /* Vars */

  var width = $(window).width();
  var height = $(window).height();

  /* Header Menu Desktop */

  var container = $(".container");
  var card_items = $(".card-inner");
  var animation_in = container.data("animation-in");
  var animation_out = container.data("animation-out");

  $(".top-menu").on("click", "a", function () {
    /* vars */
    var width = $(window).width();
    var id = $(this).attr("href");
    var h = parseFloat($(id).offset().top);
    var card_item = $(id);
    var menu_items = $(".top-menu li");
    var menu_item = $(this).closest("li");

    if (width >= 1024) {
      /* if desktop */
      if (!menu_item.hasClass("active") & (width > 1023) & $("#home-card").length) {
        /* close card items */
        menu_items.removeClass("active");
        container.find(card_items).removeClass("animated " + animation_in);

        if ($(container).hasClass("opened")) {
          container.find(card_items).addClass("animated " + animation_out);
        }

        /* open card item */
        menu_item.addClass("active");
        container.addClass("opened");
        container.find(card_item).removeClass("animated " + animation_out);
        container.find(card_item).addClass("animated " + animation_in);

        $(card_items).addClass("hidden");

        $(card_item).removeClass("hidden");
        $(card_item).addClass("active");
      }
    }
    /* if mobile */
    if ((width < 1024) & $("#home-card").length) {
      /* scroll to section */
      $("body,html").animate(
        {
          scrollTop: h - 76,
        },
        800
      );
    }
    return false;
  });

  var d_lnk = $(".lnks .lnk.discover");
  d_lnk.on("click", function(e){
    e.preventDefault();
    $('a[href="#contacts-card"]').click();
  })

  $(window).on("resize", function () {
    var width = $(window).width();
    var height = $(window).height();

    if (width < 1024) {
      $(".card-inner").removeClass("hidden");
      $(".card-inner").removeClass("fadeOutLeft");
      $(".card-inner").removeClass("rotateOutUpLeft");
      $(".card-inner").removeClass("rollOut");
      $(".card-inner").removeClass("jackOutTheBox");
      $(".card-inner").removeClass("fadeOut");
      $(".card-inner").removeClass("fadeOutUp");
      $(".card-inner").removeClass("animated");

      $(window).on("scroll", function () {
        var scrollPos = $(window).scrollTop();
        $(".top-menu ul li a").each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.offset().top - 76 <= scrollPos) {
            $(".top-menu ul li").removeClass("active");
            currLink.closest("li").addClass("active");
          }
        });
      });

      $(".card-inner .card-wrap").attr("style", "");
    } else {
      $($(".top-menu li.active a").attr("href")).addClass("active");
    }
  });

  /* Smoothscroll */

  if ((width < 1024) & $("#home-card").length) {
    $(window).on("scroll", function () {
      var scrollPos = $(window).scrollTop();
      $(".top-menu ul li a").each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.offset().top - 76 <= scrollPos) {
          $(".top-menu ul li").removeClass("active");
          currLink.closest("li").addClass("active");
        }
      });
    });
  }

  /* slimScroll */

  if (!$(".page").hasClass("has-scroll") && width > 1024) {
    $(".card-inner .card-wrap").slimScroll({
      height: "570px",
    });
  }

  /* Validate Contact Form */

  $("#contact-form").validate({
    ignore: ".ignore",
    rules: {
      name: {
        required: true,
      },
      message: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      hiddenRecaptcha: {
        required: function () {
          if (grecaptcha.getResponse() == "") {
            return true;
          } else {
            return false;
          }
        },
      },
    },
    success: "valid",
    submitHandler: function () {
      $.ajax({
        url: "mailer/contact.php",
        type: "POST",
        data:
          "name=" +
          $("#contact-form").find('input[name="name"]').val() +
          "&email=" +
          $("#contact-form").find('input[name="email"]').val() +
          "&message=" +
          $("#contact-form").find('textarea[name="message"]').val(),
        success: function () {
          $("#contact-form").fadeOut();
          $(".alert-success").delay(1000).fadeIn();
          $.ajax({
            url: "mailer/reply.php",
            type: "POST",
            data:
              "name=" +
              $("#contact-form").find('input[name="name"]').val() +
              "&email=" +
              $("#contact-form").find('input[name="email"]').val(),
            success: function () {
              $("#contact-form").fadeOut();
              $(".alert-success").delay(1000).fadeIn();
            },
          });
        },
      });
    },
  });

  /* Dotted Skills Line */

  function skills() {
    var skills_dotted = $(".skills-list.dotted .progress");
    var skills_dotted_w = skills_dotted.width();
    if (skills_dotted.length) {
      skills_dotted.append(
        '<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
      );
      skills_dotted
        .find(".percentage")
        .append(
          '<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
        );
      skills_dotted.find(".percentage .da").css({ width: skills_dotted_w });
    }
  }
  setTimeout(skills, 1000);

  /* Circle Skills Line */

  var skills_circles = $(".skills-list.circles .progress");
  if (skills_circles.length) {
    skills_circles.append('<div class="slice"><div class="bar"></div><div class="fill"></div></div>');
  }
});
