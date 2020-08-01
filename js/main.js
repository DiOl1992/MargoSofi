$(function () {
  // Slick slider/////////////////////////////////////
  $(".about__slider").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"> <img src="img/back.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"> <img src="img/next.svg" alt=""></button>',
    autoplay: true,
    fade: true,
  });

  // fixedMenu/////////////////////////////////////
  let header = document.getElementById("header");
  onscroll = function fixedMenuHandler() {
    if (window.pageYOffset > header.scrollHeight) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  };

  // Modal/////////////////////////////////////
  let modalCall = $("[data-modal]");
  let modalClose = $("[data-close]");

  modalCall.on("click", function (event) {
    event.preventDefault();
    let $this = $(this);
    let modalId = $this.data("modal");

    $(modalId).addClass("show");
    $("body").addClass("no-scroll");
  });

  modalClose.on("click", function (event) {
    event.preventDefault();
    let $this = $(this);
    let modalParent = $this.parents(".modal");

    modalParent.removeClass("show");
    $("body").removeClass("no-scroll");
  });
});

// SVG Animation Vivus/////////////////////////////////////
const woolIcon = new Vivus("wool", {
  type: "delayed",
  duration: 800,
});

/*nav toggle*/

$("#nav-toggle").on("click", function (event) {
  event.preventDefault();

  $(this).toggleClass("active");
  $("#menu").toggleClass("active");
});

$("#menu li").click(function () {
  $("#nav-toggle").toggleClass("active");
  $("#menu").toggleClass("active");
});

/*smooth scroll*/
$("[data-scroll]").on("click", function (event) {
  event.preventDefault();

  let $this = $(this),
    blockId = $this.data("scroll"),
    blockOffset = $(blockId).offset().top;

  $("#menu a").removeClass("active");
  $this.addClass("active");

  $("html, body").animate(
    {
      scrollTop: blockOffset - 50,
    },
    500
  );
});
