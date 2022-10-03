// 자바스크립트는 데이터!!
// "문자열" ,12344 <- "숫자열"
// 제이쿼리 
// $(document).ready(function(){
//     // 제이쿼리 사용가능 
// });

$(function(){
    // 제이쿼리 사용가능
    // $() <= css선택자, 제이쿼리 선택자
    // . <= 뭐뭐 에~
    // hover() <= 제이쿼리 메소드(메소드 = 기능!!) 
    // $('.header .nav > ul > li').hover(
    //     function(){
    //         // 마우스가 올라갈 떄 
    //     }, function(){
    //         // 마우스가 내려갈 때 
    //     }
    // );
    // $('.header .nav > ul > li').on("click",function(){

    // });
    // $('.header .nav > ul > li').on("resize", function(){

    // })

    // 네비 뎁스 펼치기
    $('.header .nav > ul > li').hover(function(){
        // 내가 마우스를 올린 li 
        // $(this).addClass("on")
        // 내가 마우스를 올린 li 에 찾을래 
        // find안에도 (제이쿼리 선택자)
        // $(this).next().stop().slideDown().css("display","flex");
        $(this).find(">a").next().stop().fadeIn().css("display","flex");
    }, function(){
        $(this).find(">a").next().stop().fadeOut();
        // $(this).next().stop().slideUp()
        // $(this).removeClass("on")
    });   

    // $('.header .header_ui .sns > li').hover(
    //     function(){
    //         $(this).children('ul').stop().slideDown();
    //     }, function(){
    //         $(this).children('ul').stop().slideUp();
    //     }
    // )
    // .children() 바로 밑에 있는 자식 선택
    // .find() 모든 자식들 선택
    // .stop()에니메이션 전에 적기
    // .on()모든 기능을 모아든 매소드
    // .slideToggle() 
    // 올라와 있으면 내려가고,내려가 있으면 올라감 
    // .fadeToggle(), .toggleClass("클래스명")
    // .addClass("클래스명") 클래스명 넣기
    // .removeClass("클래스명") 해당 클래스 빼기

    // header_ui 슬라이드 펼치기
    // sns
    $('.header .header_ui .sns > li').hover(function(){
        $(this).find('>ul').stop().slideDown();
    }, function(){
        $(this).find('>ul').stop().slideUp();
    })
    // lag
    //헤더에 헤더유아이 안에 lag안에 li를 호버(마우스를 올릴때, 내릴 때)하면 내가 호버한 li 바로 안에 ul를 찾아서 슬라이드다운한다 그리고 마우스를 떼면 내가 마우스를 뗀 li 안에 ul을 찾아서 슬라이드업 한다. 
    $('.header .header_ui .lag > li').hover(function(){
        $(this).find('>ul').stop().slideDown();
    }, function(){
        $(this).find('>ul').stop().slideUp();
    })
    // 모바일 버튼 클릭해서 'on'클래스 추가되면
    $('.header .header_ui .m_btn').on('click', function(){
        $(this).toggleClass('on');
        // 모바일 gnb 나오게 하기 right: 0
        $('.header .header_ui .m_gnb').toggleClass('on');
        // 첫번째 ul은 원래대로 올라가있게 한다
        $('.header .header_ui .m_gnb .m_nav > ul > li > a').next().stop().slideUp();
        // 두번쨰 ul도 올라가있게 한다 초기화!
        $('.header .header_ui .m_gnb .m_nav > ul > li > ul > li > a').next().stop().slideUp();
    })
    // 모바일 gnb의 첫번째 뎁스의 a를 클릭하면 
    $('.header .header_ui .m_gnb .m_nav > ul > li > a').on("click", function(e){
        // 만약 ul이 존재하면(0보다 크다는 뜻) a의 링크가 넘어가는걸 막는다
        if($(this).next().size() > 0){
            e.preventDefault();
        }
        // 그리고, 내가 누른 a의  ul은 내려가고 a를 또 누르면 올라간다
        $(this).next().stop().slideToggle();
        // 모바일 gnb의 내가 선택한 a 빼고(.not(this)) 나머지 a의 ul들을(next()) 올린다(.stop().slideUp())
       $('.header .header_ui .m_gnb .m_nav > ul > li > a').not(this).next().stop().slideUp();
        $('.header .header_ui .m_gnb .m_nav > ul > li > ul > li > a').next().stop().slideUp();
    })
    //헤더에 안에 들어있는 A를 클릭하면 링크를 막고 내가 클릭한 A 다음에 있는 UL을 슬라이드 토클(올라가있으면 내려가고 내려가 있으면 올라가는)한다. 그리고 내가 클릭한 A를 제외한 나머지 UL을 슬라이드 업 시킨다.

    $('.header .header_ui .m_gnb .m_nav > ul > li > ul > li > a').on("click", function(e){
        if($(this).next().size() > 0){
            e.preventDefault();
        }
        $(this).next().stop().slideToggle();
       $('.header .header_ui .m_gnb .m_nav > ul > li > ul > li > a').not(this).next().stop().slideUp()
    })

    $('.sc_01 .slide_img').slick({
        arrows:false, //화살표 버튼 false 삭제
        fade:true, //fade효과 on
        speed:1000, //넘어가는 속도
        dots:true, //닷버튼 생성
        appendDots:$('.sc_01 .slide_icon'), //닷버튼의 위치를 정할 때 이 클래스 안에 넣고싶다
        autoplay:true, //자동으로 넘기겠는가
        autoplaySpeed:3000, //자동으로 넘길 때 몇초뒤에 넘길까
        pauseOnHover:false, //마우스가 호버될 때는 자동으로 슬라이더 넘김 방지, 기본값: true, false: 넘김.
        pauseOnFocus:false, //마우스가 클릭(포커스)됐을 때 정지 기본값: true, false: 넘김.
    })
    //슬라이더 진행후 클래스 추가
    $('.sc_01 .slide_img').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var count = slick.slideCount;
        var selectors = [nextSlide, nextSlide - count, nextSlide + count].map(function(n){
        return '.sc_01 [data-slick-index="'+n+'"]'
        //한페이지에서 여러개 사용시 return '.부모클래스 [data-slick-index="'+n+'"]'
        }).join(',');
        $('.sc_01 .slick_now').removeClass('slick_now');
        //한페이지에서 여러개 사용시  $('.부모 클래스 .slick_now').removeClass('slick_now');
        $(selectors).addClass('slick_now');
    });

    $('.sc_01 .slide_img').find($('.slick-slide[data-slick-index="0"]')).addClass('slick_now');
      
    $('.sc_02 .slide_ctn').slick({
        arrows:false,
        slidesToShow: 3, //슬라이드 보여주는 갯수 정하기
        slidesToScroll: 3, //슬라이드가 넘어갈 때 갯수
        responsive: [ //반응형
            {
              breakpoint: 1200, //변화할 윈도우 창크기
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
          ]
    })
    //슬라이드가 넘어가는 "순간"에 작동한다 
    $('.sc_02 .slide_ctn').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.sc_02 .circle').removeClass("on")
        if(nextSlide == 3){
            $('.sc_02 .circle').eq(1).addClass("on")
        } else{
            $('.sc_02 .circle').eq(0).addClass("on")
        }
    });
    //슬라이드 다 넘어가고 작동한다
    // $('.sc_02 .slide_ctn').on('afterChange', function(event, slick, currentSlide, nextSlide){
    //     console.log(currentSlide,"2")
    // });
    //.sc_02 슬라이드 버튼
    $(".sc_02 .prev").on("click", function(){
        $('.sc_02 .slide_ctn').slick('slickPrev');
    });

    $(".sc_02 .next").on("click", function(){
        $('.sc_02 .slide_ctn').slick('slickNext');
    });

    $(window).scroll(function(){
        var windowH = $(this).height();
        var percentage = windowH * 60 / 100; //창에서 몇퍼센트일 때 
        var windowS = $(this).scrollTop() + percentage 
        //실행하고 싶은 클래스
        $(".ani").each(function(){
            var thisTop = $(this).offset().top;
            if (thisTop < windowS) {
                //실행하고 싶은 클래스에 on을 넣어준다.
                $(this).addClass("on");
            }
        });

        // scrollTop() 스크롤을 제어하고 싶을 때, 스크롤의 높이를 계산해서 뭔가 할 때
        if ($(this).scrollTop() > 100) {
			$('header').addClass('scroll');
		} else {
			$('header').removeClass('scroll');
		}
    })
    $(".split").each(function(){
		var text = this;
		text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>")
		$(this).find("span").each(function(i , idx){
			$(this).addClass("num"+i+" ")
			var i = i / 10  //1은 1s, 10은 0.1s, 100은 0.01s
			$(this).css("animation-delay", (i)+"s")
		})
	})
  
});

