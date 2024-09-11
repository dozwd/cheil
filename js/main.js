$(document).ready(function(){
    $('.slider').slick({
        // 자동재생,페이지 화살표,페이지 갯수 버튼,페이드효과
      autoplay:true,arrows:false,dots:true,fade:true
    });
    

    // 메뉴 클릭시 애니메이션
    $('.btn_menu').click(function(){
      $('header').toggleClass('on')
      $('.cover').fadeToggle('on')
    })

    // 해당 페이지가 load 되자마자 header 가 -100에서 0으로 내려오는 애니메이션
    $(window).on('load',function(){
      $('header').addClass('load')
    })
    $(window).on('scroll',function(){
    let num =  $(window).scrollTop()
    console.log(num)
    let header = $('header')
    let visual = $('.visual')
    console.log(visual)
    console.log(header)

    let headerH = header.outerHeight()
    console.log(headerH)
    let visualH = visual.outerHeight()
    console.log(visualH)
    if(num > visualH){
      header.addClass('down')
    }else{
      header.removeClass('down')
    }
    })
    // scroll bar 위치에 따라서 해당 요소들이 애니메이션(on class 추가)
    // scroll bar 위치를 벗어나면 해당 요소들이 해제(on class 제거)

    // 제이쿼리 공통함수 정의
    $.fn.aniOn = function(){
      // 선택한 요소의 y축 시작좌표값
      let eleTop = $(this).offset().top
      // 선택한 요소의 y축 높이좌표값
     let eleBottom = eleTop + $(this).outerHeight()
     
      // 화면 scroll bar 의 시작 과 끝 
      //  화면 scroll bar 의 시작위치
     let scrollTop = $(window).scrollTop()
     console.log(scrollTop)
      // 화면 scroll bar 끝 위치
      //  scroll 시작 위치 + 화면의 높이 
     let scrollbottom = scrollTop + $(window).height();
    //  scroll bar 에 요소가 들어왔는지 벗어났는지 결과를 return
      return (scrollTop<eleBottom) && (eleTop<scrollbottom)
    }
    let  ani = $('.ani')
    // 반복적으로 실행
    // scroll bar 이벤트 실행
    $(window).on('load scroll',function(){
      // ani class 붙은 걸 찾아서 각각 반복하는 명령
      ani.each(function(){
        // 현재 요소가 aniOn함수를 호출 했을때
        if($(this).aniOn()){
          $(this).addClass('on')
        }else{
          $(this).removeClass('on')
          
        }





      })
    })






  });