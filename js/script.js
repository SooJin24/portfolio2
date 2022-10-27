$(document).ready(function(){
    menu();
    slide();
    dotList();
    countDown();
})

function menu(){
    var mainMenu = $(".mainMenu > li");
    var subMenu = $(".subMenu");

    subMenu.slideUp(0);

    mainMenu.on('mouseenter',function(){
        $(this).find(subMenu).stop().slideDown(300)
    })

    mainMenu.on('mouseleave',function(){
        subMenu.stop().slideUp(300)
    })
}

function slide(){
    var slideNum = 0;
    var slideList = $(".slideList");
    var slideWidth = $(".slideList li").width();
    console.log(slideWidth);

    setInterval(function(){
        if(slideNum < 2)
        {slideNum++;
         slideList.animate({"left":'-=1920'},300)} //-slideWidth
        else{slideNum = 0;
         slideList.animate({'left' : 0},300)}
    },8000)
}

// function contents02(){
//     var slideNum = 0;
//     var slideList = $(".contents02 > div > ul > .productSubList");

//     setInterval(function(){
//         if(slideNum < 4)
//         {slideNum ++;
//          slideList.animate({"left":'-=283.6'},300)}
//         else{slideNum = 0;
//          slideList.animate({"left":0},300)}
//     },2000)
// }

// function contents02(){
//     var slide = $(".contents02 > div > ul > .productSubList");
//     var slideNum = slide.children().size();
//     var slideWidth = slide.children('li').width(); //$(".contents02 > div > ul");

//     console.log(slideWidth);

//     slide.css({"width": slideNum * slideWidth, 'left': -slideWidth});
//     slide.children().css({"width": slideWidth});

//     slide.children().last().prependTo(slide);

//     $(".nextBtn02").on('click',function(){
//         var currentPosition = slide.position().left;

//         slide.stop().animate({"left": currentPosition - slideWidth},500,function(){
//             slide.children().first().appendTo(slide);
//             slide.css({"left":-slideWidth})
//         })
//     })

//     $(".prevBtn02").on('click',function(){
//         var currentPosition = slide.position().left;

//         slide.stop().animate({"left":currentPosition + slideWidth},500,function(){
//             slide.children().last().prependTo(slide);
//             slide.css({'left':-slideWidth})
//         })
//     })
// }

function dotList()
{var visualList = $(".slideList");
 var visualImgNum = visualList.children().size();
 var visualImgWidth = $(".slideContainer").outerWidth()+17;
 var dotList = $(".dotList").children();
 var dotNum = 0;
 var timer;

 visualList.css({'width' : visualImgNum * visualImgWidth});

 showDot(dotNum);
 onPlay();

 dotList.on('click',onDot);

 function showDot(selectDot)
 {dotList.removeClass('selected');
  dotList.eq(selectDot).addClass('selected')}

 function onDot()
 {dotNum = dotList.index($(this));
  showDot(dotNum);
  slide(dotNum)}

 function slide(selectDot)
 {visualList.animate({'left' : -visualImgWidth * selectDot}, 500)}

 function onPlay()
 {timer = setInterval(autoSlide, 8000)}

 function autoSlide()
 {dotNum++;
  if(dotNum >= visualImgNum){dotNum = 0};
  slide(dotNum);
  showDot(dotNum)}

}

// function dotList(){
//     var slideList = $(".slideList");
//     var slideNum = slideList.children().size();
//     var slideWidth = $(".slideContainer").width()+17; //outerWidth()
//     var dotList = $(".dotList").children();
//     var dotNum = 0;

//     console.log(slideWidth);

//     slideList.css({"width": slideNum * slideWidth});
//     dotList.eq(dotNum).addClass('selected');

//     dotList.on('click',function(){
//         dotNum = dotList.index($(this));

//         dotList.removeClass('selected');
//         dotList.eq(dotNum).addClass('selected');
//         slideList.animate({"left": -slideWidth * dotNum}, 500)
//     })

// }

function countDown(){
    //카운트 할 날짜 설정
    var countDownDate = new Date("Dec 31, 2022 24:00:00").getTime();

    //1초마다 카운트하도록 설정
    var x = setInterval(function(){

        //오늘 날짜 및 시작 가져오기
        var now = new Date().getTime();

        //지금부터 카운트 할 날짜까지의 차이 설정
        var distance = countDownDate - now;

        //시간, 분, 초에 대한 계산변수 설정
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60))/1000);

        var s = Math.floor(hours/10);
        var m = hours % 10;
        var l = Math.floor(minutes/10);
        var n = minutes % 10;
        var y = Math.floor(seconds/10);
        var z = seconds % 10;

        document.getElementsByClassName("hours")[0].innerHTML = s;
        document.getElementsByClassName("hours")[1].innerHTML = m;
        document.getElementsByClassName("minutes")[0].innerHTML = l;
        document.getElementsByClassName("minutes")[1].innerHTML = n;
        document.getElementsByClassName("seconds")[0].innerHTML = y;
        document.getElementsByClassName("seconds")[1].innerHTML = z;

    }, 1000)
}