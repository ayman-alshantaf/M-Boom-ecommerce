$ (document).ready(function (){
  // start navbar
    function myLoader(){
        $('.loader-body').fadeOut(1000);
    }
    $(window).on('load',function (){
            setTimeout(myLoader , 1500)
    })
    // small screen navbar
    $('.clone-nav').clone().appendTo('.small-list-navbar');
    //change color navbar
    $(window).scroll(function(){
      if($(window).scrollTop() > 150){
          $('.navbar').css({
              backgroundColor:'#2f3640',
          })
      }else {
          $('.navbar').css({
              backgroundColor:'rgba(205, 198, 198, 0.07)',
          })

      }
    });

    $(".icon-list-navbar").on('click' , function (){
        $('.small-nav').toggleClass('small-nav-show');
        if ($('.small-nav').hasClass('small-nav-show')){
            $('.small-nav').animate({
                opacity:'1',
            },300);
            $('.small-nav .small-list-navbar').animate({
                left:'0',
            })
            $('.small-nav .close-navbar-small').animate({
                left:'50%',
            })
        }else {
            $('.small-nav').animate({
                visibility:'hidden',
                opacity:'0',
            },300);
        }
    });
    $(".close-navbar-small").on('click' , function (){
        $('.small-nav').toggleClass('small-nav-show');
        if ($('.small-nav').hasClass('small-nav-show')){
            $('.small-nav').animate({
                opacity:'1',
            },300);

        }else {
            $('.small-nav').animate({
                opacity:'0',
            },300);
            $('.small-nav .small-list-navbar').animate({
                left:'-1000px',
            })
            $('.small-nav .close-navbar-small').animate({
                left:'-1000px',
            })

        }
    });
    //end navbar
    // start sidebar navbar

    // end sidebar navbar


    
    $('#stars li').on('mouseover', function(){
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
        // Now highlight all the stars that's not after the current hovered star
       
        $(this).parent().children('li.star').each(function(e){
          if (e < onStar) {
            $(this).addClass('hover');
          }
          else {
            $(this).removeClass('hover');
          }
        });
        
      }).on('mouseout', function(){
        $(this).parent().children('li.star').each(function(e){
          $(this).removeClass('hover');
        });
      });
      
      /* 2. Action to perform on click */
      $('#stars li').on('click', function(){
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');
      
        for (i = 0; i < stars.length; i++) {
          $(stars[i]).removeClass('selected');
        }
        
        for (i = 0; i < onStar; i++) {
          $(stars[i]).addClass('selected');
        }
      });


$('.cards-customer').slick({
  centerMode: false ,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 1500,
  nextArrow:false,
  prevArrow:false,
  dots: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 928,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

//start page category
    $('.page-category .title-type-category').on('click' , function(){
        $(this).next().slideToggle(500);
        $(this).toggleClass('show');
        if ($(this).hasClass('show')){
           $(this).find('i').addClass('fa-minus')
            $(this).find('i').removeClass('fa-plus')
        }else {
            $(this).find('i').removeClass('fa-minus')
            $(this).find('i').addClass('fa-plus')
        }
    })
    $('.page-category .hide-filter').on('click' , function(){
        console.log("as");
        $(this).siblings( ".div-type-category" ).slideToggle(500);
        $(this).toggleClass('show');
        if ($(this).hasClass('show')){
            $(this).find('i').addClass('fa-chevron-up')
            $(this).find('i').removeClass('fa-chevron-down')
        }else {
            $(this).find('i').removeClass('fa-chevron-up')
            $(this).find('i').addClass('fa-chevron-down')
        }
    })

    $('.best-product').slick({
        centerMode: false ,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        nextArrow:false,
        prevArrow:false,

    });

    // pagination
    var numberListProduct =$('#loop .list-product').length;
     var limitedShowProduct = 8;
     $("#loop .list-product:gt("+ (limitedShowProduct - 1) +")").hide();
     var totalPage = Math.round(numberListProduct / limitedShowProduct);
     $('.pagination').append("<li class=\"page-item current-page active\"><a class=\"page-link \" href=\"javascript:void(0)\">1</a></li>\n");
     for (i = 2 ; i <= totalPage;i++){
         $('.pagination').append("<li class=\"page-item current-page\"><a class=\"page-link\" href=\"javascript:void(0)\">" + i +"</a></li>\n");
     }
    $('.pagination').append("<li class=\"page-item\" id='next-page'><a class=\"page-link\" href=\"javascript:void(0)\">Next</a></li>\n");
    $('.pagination .current-page').on('click' , function (){
        if ($(this).hasClass("active")){
            return false;
        }else {
            $('.pagination .current-page').removeClass("active");
            $(this).addClass("active");
            $('#loop .list-product').hide();
            var currentPage = $(this).index();
            var grandTotal = limitedShowProduct * currentPage;
            for (var i = grandTotal - limitedShowProduct ; i < grandTotal ; i++){
                $("#loop .list-product:eq("+ i +")").show();
            }
        }
    });
    $('#previous-page').on('click' , function (){
        var currentPage = $('.pagination li.active').index();
        if (currentPage === 1){
            return false
        }else {
           currentPage--;
           $('.pagination li').removeClass("active");
           $('#loop .list-product').hide();

            var grandTotal = limitedShowProduct * currentPage;
            for (var i = grandTotal - limitedShowProduct ; i < grandTotal ; i++){
                $("#loop .list-product:eq("+ i + ")").show();
            }
            $(".pagination li.current-page:eq(" + (currentPage - 1) +")").addClass("active");
        }
    });

    $('#next-page').on('click' , function (){
        var currentPage = $('.pagination li.active').index();
        if (currentPage === totalPage){
            return false
        }else {
            currentPage++;
            $('.pagination li').removeClass("active");
            $('#loop .list-product').hide();

            var grandTotal = limitedShowProduct * currentPage;
            for (var i = grandTotal - limitedShowProduct ; i < grandTotal ; i++){
                $("#loop .list-product:eq("+ i + ")").show();
            }
            $(".pagination li.current-page:eq(" + (currentPage - 1) +")").addClass("active");
        }
    });


// end page category




});
