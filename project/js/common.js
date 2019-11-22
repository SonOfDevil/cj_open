// Move to Top screen
var mybutton = document.querySelector('.top-btn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";

  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



;
(function () {

  // Image change
  var roomList = $('.room-list');
  var lists = roomList.children('li');
  var imgPath = './images/space/';

  lists.hover(function () {
    var imgGroup = $(this).data('index');
    var imgNum = 0 + String($(this).index() + 1);

    $(this).siblings('li').removeClass('active');
    $(this).toggleClass('active');
    $(this).parent().siblings('.room-img').attr('src', imgPath + 'img-room' + imgGroup + imgNum + '.png');
  });

  // tab toggle
  var tab = $('.open-tab li');
  tab.on('click', function () {
    var currentNum = $(this).index();
    var test = $('.open-tab-list-wrap li');
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
    test.siblings().removeClass('active');
    // test.toggleClass('active');
    $('.open-tab-list-wrap > li').eq(currentNum).toggleClass('active');

  })



  // Story page - Slider
  $(".slider").slick({
    // dots: true,
    // infinite: true,
    speed: 20,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    draggable: false,
    arrows: false,
    variableWidth: true,
    centerPadding: '20px',
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //     arrows: false,
    //     centerMode: true,
    //     centerPadding: '40px',
    //     slidesToShow: 3
    //     }
    //     },
    //     {
    //     breakpoint: 480,
    //     settings: {
    //     arrows: false,
    //     centerMode: true,
    //     centerPadding: '40px',
    //     slidesToShow: 1
    //     }
    //   }
    // ]

    // responsive: [{
    //   breakpoint: 600,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   }
    // },
    // {
    //    breakpoint: 400,
    //    settings: {
    //       arrows: false,
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //    }
    // }]
  });
  $('.slider-story').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    var count = currentSlide / 2;
    $('.story-tab li').siblings('li').removeClass('active');
    $('.story-tab li').eq(count).toggleClass('active');
    $('.sub-head.story li').removeClass('active');
    $('.sub-head.story li').eq(count).toggleClass('active');
  });
  $('.slider-music').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    var count = currentSlide / 2;
    $('.music-tab li').siblings('li').removeClass('active');
    $('.music-tab li').eq(count).toggleClass('active');
    $('.sub-head.music li').removeClass('active');
    $('.sub-head.music li').eq(count).toggleClass('active');
  });


  // Slider button Event
  var moveTabStory = function () {
    var currentSlideNum = $('.slider.story').slick('slickCurrentSlide');
    var tabIndex = currentSlideNum / 2;

    $('.story-tab li').siblings('li').removeClass('active');
    $('.story-tab li').eq(tabIndex).toggleClass('active');

    $('.sub-head.story li').removeClass('active');
    $('.sub-head.story li').eq(tabIndex).toggleClass('active');

  }
  var moveTabMusic = function () {
    var currentSlideNum = $('.slider.music').slick('slickCurrentSlide');
    var tabIndex = currentSlideNum / 2;
    $('.music-tab li').siblings('li').removeClass('active');
    $('.music-tab li').eq(tabIndex).toggleClass('active');

    $('.sub-head.music li').removeClass('active');
    $('.sub-head.music li').eq(tabIndex).toggleClass('active');
  }

  $('.slider-arrow.story .prev-arrow').click(function () {
    $('.slider.story').slick('slickPrev');
    moveTabStory()
  })
  $('.slider-arrow.story .next-arrow').click(function () {
    $('.slider.story').slick('slickNext');
    moveTabStory()

  })
  $('.slider-arrow.music .prev-arrow').click(function () {
    $('.slider.music').slick('slickPrev');
    moveTabMusic()
  })
  $('.slider-arrow.music .next-arrow').click(function () {
    $('.slider.music').slick('slickNext');
    moveTabMusic()
  })

  // Slider Tab Event
  $('.story-tab li, .music-tab li').on('click', function () {
    $(this).siblings('li').removeClass('active');
    $(this).toggleClass('active');

    // tab 클릭시 slide 변경
    var slideNo = $(this).index() * 2;
    $(".slider").slick('slickGoTo', slideNo);

    // tab 클릭시 제목 변경
    $(this).parents().siblings('.sub-head').children('li').removeClass('active');
    $(this).parents().siblings('.sub-head').children('li').eq($(this).index()).toggleClass('active');

  });

  // FAQ arcodion Action
  var btnMore = $('.faq-list .question .more');
  btnMore.on('click', function(){
    $(this).toggleClass('action');
    $(this).parent().next().eq(0).toggleClass('action');
  })








})();