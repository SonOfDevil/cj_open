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



;(function () {
  var imgSrc = $('.room-img').attr('src');
  var roomList = $('.room-list');
  var lists = roomList.children('li');
  var imgbox = roomList.siblings('.room-img');

  var imgUrl = imgbox.attr('src');
  var splitUrl = imgUrl.split('/');
  var imgPath = './images/space/';



  var arSplitUrl = sOriginImgUrl.split("/");    //   "/" 로 전체 url 을 나눈다
  var nArLength = arSplitUrl.length;
  var arFileName = arSplitUrl[nArLength - 1];   // 나누어진 배열의 맨 끝이 파일명이다
  var arSplitFileName = sImgUrl.split(".");   // 파일명을 다시 "." 로 나누면 파일이름과 확장자로 나뉜다
  var sFileName = arSplitFileName[0];         // 파일이름
  var sFileExtension = arSplitFileName[1]     // 확장자






  lists.hover(function () {
    $(this).siblings('li').removeClass('active');
    $(this).toggleClass('active');
    console.log($(this).index());


    imgbox.attr('src', imgPath + 'asdf' +'.png');
    // var imgSrc = $('.room-img').attr("src");

    // $('.room-img').attr('src').replace('img-room01.png', 'img-room02.png')
  });


  var tab = $('.open-space-tab li');
  tab.on('click', function(){
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
    $('.open-introdution-wrap').toggleClass('active');
  })
})();


