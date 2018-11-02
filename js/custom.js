$(document).ready(function(){
    //back to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    //#back to top

    //select2 multiselect & singleselect
    $(".multiple-select").select2({
        minimumResultsForSearch: -1
    });
    $(".single-select").select2({
        minimumResultsForSearch: -1
    });   
    $('.select2-container--default').click(function(){
        $(".select2-container--open").next('label').css("top" , "-22px");
    });
    $(".single-select").siblings('label').css("top" , "-22px");
    //#select2 multiselect & singleselect

    //register blocks same height
    if($(window).width() > 767)
    var highestBox = 0;
        $('.left-block').each(function(){  
            if($(this).height() > highestBox){  
            highestBox = $(this).outerHeight();
        }
    });    
    $('.right-block').height(highestBox);
    //#register blocks same height

    //upload image
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('#blah')
                    .attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }   
    }

    $('#chooseFile').bind('change', function () {
      var filename = $("#chooseFile").val();
      if (/^\s*$/.test(filename)) {
        $(".file-upload").removeClass('active');
        $("#noFile").text("No file chosen..."); 
      }
      else {
        $(".file-upload").addClass('active');
        $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
      }
    });
    //#upload image
    // home-meals-available-today
    $("#meals-available-today").owlCarousel({
        margin: 21,
        items: 3,
        responsiveClass: true,
        nav: true,
        navText:[
            "<i class='icon-left-arrow' aria-hidden='true'></i>",
            "<i class='icon-right-arrow' aria-hidden='true'></i>"
        ],
        loop: false,
        dots: false,
        autoplay:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    // #home-meals-available-today

    //chef-account same height 
    if($(window).width() > 767)
    var height = Math.max($(".chef-left-menu").height(), $(".chef-right-content").height());
        $(".chef-left-menu").height(height);
        $(".chef-right-content").height(height);
    //#chef-account same height 

    //home meals available slider text height
        if($(window).width() > 768)
        var highestBox = 0;
            $('.banner-data').each(function(){  
                    if($(this).height() > highestBox){  
                    highestBox = $(this).height();  
            }
        });    
        $('.banner-data').height(highestBox);
    //#home meals available slider text height

    //meals height
        if($(window).width() > 767)
        var highestBox = 0;
            $('.popular-meals-box').each(function(){  
                    if($(this).height() > highestBox){  
                    highestBox = $(this).height();  
            }
        });    
        $('.popular-meals-box').height(highestBox);
    //#meals height

    //slick slider chef home page
    $('.center').slick({
        centerMode: false,
        centerPadding: '20px',
         arrows: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });


    $('.carousel').carousel({
      interval: 3000,
      pause: false
    });

    
    $('#datetimepicker1').datetimepicker();
    $('#datetimepicker2').datetimepicker();
    $('#datetimepicker3').datetimepicker();
    $('#datetimepicker4').datetimepicker();
    //#slick slider chef home page
});