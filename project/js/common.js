


window.onload = function () {


  ;(function () {


    // Move to Top screen
    var mybutton = document.querySelector('.top-btn');

    // When the user scrolls down 20px from the top of the document, show the button
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        // mybutton.css('display', 'block');

      } else {
        mybutton.style.display = "none";
        // mybutton.css('display', 'none');
      }
    }
    window.onscroll = function () {
      scrollFunction();
    };

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    $('#topBtn').on('click', function(){
      topFunction();
    })
    // // Image change
    // var roomList = $('.room-list');
    // var lists = roomList.children('li');
    // var imgPath = './images/space/';


    // lists.hover(function () {
    //   var imgGroup = $(this).data('index');
    //   var imgNum = 0 + String($(this).index() + 1);

    //   $(this).siblings('li').removeClass('active');
    //   $(this).toggleClass('active');
    //   $(this).parent().siblings('.room-img').attr('src', imgPath + 'img-room' + imgGroup + imgNum + '.png');
    // });

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
    });

    // radio button checked
    var radio = $('.cj-chk.radio');
    radio.on('click', function(){
      // $(this).children().prop('checked', true);
      var ischecked = $(this).children();
      var other = $(this).parent().siblings().children();

      $(this).siblings().children().removeAttr('checked');
      $(this).children().attr('checked','checked');
    });


    // 대댓글 open & close
    var reply = $('.reply-list li .user-info .btn-reply');

    reply.on('click', function(e){
      e.preventDefault();
      $(this).parent().parent().next().toggleClass('active');
    });

    var submitClose = $('.reply-list li.re-reply-input .submit');
    submitClose.on('click', function(){
      $(this).parent().parent().parent().toggleClass('active');
    });

    // Dimmer(popup) 닫기
    var popupclose = $('.dimmer .btn-popup-close');
    popupclose.on('click', function(e){
      e.preventDefault();
      $(this).parent().parent().toggleClass('active');
      console.log($(this).parent().parent());

    });

    // Mobile GNB hamberger
    var hamberger = $('.gnb-menu-mob');
    var gnbClose = $('.gnb-close');

    hamberger.on('click', function(){
      $('.main-gnb').toggleClass('active');
    });
    gnbClose.on('click', function(e){
      e.preventDefault();
      $('.main-gnb').removeClass('active');
      return false;
    });

    var gnbList = $('.main-menu .menu .menu-list');
    gnbList.on('click', function(e){
      // e.preventDefault();
      $(this).parent().siblings().removeClass('active');
      $(this).parent().toggleClass('active');

    });

    // 드라마 스테이지 scroll slide button controll
    var scrollPrev = $('.scroll-btn-wrap .prev');
    var scrollNext = $('.scroll-btn-wrap .next');

    scrollPrev.on('click', function(){
      var leftPos = $('.scroll-tab').scrollLeft();
      $('.scroll-tab').animate({
        scrollLeft: leftPos - 800
      }, 800);
    })
    scrollNext.on('click', function(){
      var leftPos = $('.scroll-tab').scrollLeft();
      $('.scroll-tab').animate({
        scrollLeft: leftPos + 800
      }, 400);
    });


  })();
}