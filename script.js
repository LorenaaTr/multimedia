$(function () {
    const $gallery = $(".gallery a").simpleLightbox();
  });
  
  $(document).ready(function () {
    setTimeout(function () {
      $(".scan-container").fadeOut();
    }, 4000);
    $(".explore-btn").click(function () {
      $(".landing-page").fadeOut(1500);
      $(".main-page").fadeIn(4000);
      var audio = new Audio("sounds/explore_button_click.mp3");
      audio.play();
    });
  });
  
  $(".navbar li").click(function () {
    $(".navbar li").removeClass("active");
    $(this).addClass("active");
    var audio = new Audio("sounds/sidebar_button_click.mp3");
    audio.play();
  });
  
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
  
        if (target.length) {
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr("tabindex", "-1");
                $target.focus();
              }
            }
          );
        }
      }
    });
  
  function playPause() {
    document.getElementById("music").paused
      ? document.getElementById("music").play()
      : document.getElementById("music").pause();
  
    document.querySelector(".audio-wire-1").style.animationPlayState === "running"
      ? (document.querySelector(".audio-wire-1").style.animationPlayState =
          "paused")
      : (document.querySelector(".audio-wire-1").style.animationPlayState =
          "running");
  
    document.querySelector(".audio-wire-2").style.animationPlayState === "running"
      ? (document.querySelector(".audio-wire-2").style.animationPlayState =
          "paused")
      : (document.querySelector(".audio-wire-2").style.animationPlayState =
          "running");
  
    document.querySelector(".audio-wire-3").style.animationPlayState === "running"
      ? (document.querySelector(".audio-wire-3").style.animationPlayState =
          "paused")
      : (document.querySelector(".audio-wire-3").style.animationPlayState =
          "running");
  
    document.querySelector(".audio-wire-4").style.animationPlayState === "running"
      ? (document.querySelector(".audio-wire-4").style.animationPlayState =
          "paused")
      : (document.querySelector(".audio-wire-4").style.animationPlayState =
          "running");
  
    document.querySelector(".audio-wire-5").style.animationPlayState === "running"
      ? (document.querySelector(".audio-wire-5").style.animationPlayState =
          "paused")
      : (document.querySelector(".audio-wire-5").style.animationPlayState =
          "running");
  
    document.querySelector(".audio-wire-6").style.animationPlayState === "running"
      ? (document.querySelector(".audio-wire-6").style.animationPlayState =
          "paused")
      : (document.querySelector(".audio-wire-6").style.animationPlayState =
          "running");
  
    document.querySelector(".audio-wire-7").style.animationPlayState === "running"
      ? (document.querySelector(".audio-wire-7").style.animationPlayState =
          "paused")
      : (document.querySelector(".audio-wire-7").style.animationPlayState =
          "running");
  
    document.querySelector(".audio-wire-8").style.animationPlayState === "running"
      ? (document.querySelector(".audio-wire-8").style.animationPlayState =
          "paused")
      : (document.querySelector(".audio-wire-8").style.animationPlayState =
          "running");
  
    document.querySelector(".audio-wire-9").style.animationPlayState === "running"
      ? (document.querySelector(".audio-wire-9").style.animationPlayState =
          "paused")
      : (document.querySelector(".audio-wire-9").style.animationPlayState =
          "running");
  }
  $.fn.commentCards = function () {
    return this.each(function () {
      var $this = $(this),
        $cards = $this.find(".card"),
        $current = $cards.filter(".card--current"),
        $next;
  
      $cards.on("click", function () {
        if (!$current.is(this)) {
          $cards.removeClass("card--current card--out card--next");
          $current.addClass("card--out");
          $current = $(this).addClass("card--current");
          $next = $current.next();
          $next = $next.length ? $next : $cards.first();
          $next.addClass("card--next");
        }
      });
  
      if (!$current.length) {
        $current = $cards.last();
        $cards.first().trigger("click");
      }
  
      $this.addClass("cards--active");
    });
  };
  
  $(".cards").commentCards();
  