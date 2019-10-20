function wiev_course() {
  if ($('.line').hasClass('active')) {
    $('.showcase').fadeIn(600);
  }
  else{
    $('.showcase').hide();
  }
  if ($('.tab_1').hasClass('active')) {
    $('#tab_1').fadeIn(600);
  }
  else{
    $('#tab_1').hide();
  }
  if ($('.tab_2').hasClass('active')) {
    $('#tab_2').fadeIn(600);
  }
  else{
    $('#tab_2').hide();
  }
}

function sidebar(){
  var st = $(window).scrollTop();
  var request  = $('.request').height();
  var full_height = $(window).height();
  //console.log('request='+request+', full_height='+full_height);
  if ($(window).width() > 991) {
    if (st > 200){
      $('.request').css({
        'position': 'fixed',
        'top':'30px',
        //'display': 'block',
        'transition': '1s',
        });
    }
    else{
      st_pos = 140 - st;
      $('.request').css({
        'position': 'fixed',
        'top': st_pos + 'px',
        //'transition': '1s',
        });
    } 
  } 
  else {
    $('.request').css('display','none');
  }
}/**/


$(function() {	
	$(window).on("load",function(){
    $(".demo-x").mCustomScrollbar({
      axis:"x",
      advanced:{autoExpandHorizontalScroll:true},
      scrollbarPosition: "inside"
    });
          
    $('#mCSB_1_scrollbar_horizontal').wrap('<div class="container"></div>');

    $('.content.demo-x .showcase_block').parent('div').css({
      'padding-top': '12px',
      'padding-bottom': '12px',
    });  

    $('.showcase_block').height(($('.showcase_block').width()/3*2));

  });

  sidebar();

  $(window).scroll(function(){
    $('.nav_and_banner').css('background-position', '0 ' + -$(window).scrollTop()/2 + 'px');
    $('.form').css('background-position', '0 ' + -$(window).scrollTop()/2 + 'px');
    sidebar();
  }).scroll();


  $('.carousel').carousel({
  	interval: 1000000
	})

  $('.wiev_course').click(function(){
    $('.wiev_course').removeClass('active').removeClass('non_active');
    $(this).addClass('active');
    $('.wiev_course').not(this).addClass('non_active');
    wiev_course();
  });
    
  wiev_course();

  $('.three').each(function(){
    var height=$(this).height();
    var line_height=25;
    var count_rov=height/line_height;
    //count_rov = Math.floor(count_rov);
    console.log('count_rov='+count_rov+', height='+height);
    if (count_rov==1){
      $(this).css('font-size','150%');
    }
    if (count_rov==2){
      $(this).css('font-size','150%');
    }
    if (count_rov==3){
      $(this).css('font-size','100%');
    }
  });

    
  $('div.connection_box_position').on('click','a', function (event) {
    // исключаем стандартную реакцию браузера
    event.preventDefault(); 
    // получем идентификатор блока из атрибута href
    var id  = $(this).attr('href'); 
    $('div.connection_box_position div').removeClass('active');
    $(this).parent().addClass('active');
    $('.connection_box_contact > div').hide();//removeClass('active_cont');
    $(id).fadeIn();//addClass('active_cont');
    $('.connection_box_photo > div').fadeOut();//removeClass('active_cont');
    $('[name="'+id+'"]').fadeIn();//addClass('active_cont');
    console.log('id='+id);
  });

  $('.request').hover(
    function(){
      $('.request .request_back_img, .request_back_grad').css({
        'transform': 'scale(1.05)',
        'transition': '.5s',
      });
    },
    function(){
      $('.request .request_back_img, .request_back_grad').css({
        'transform': 'scale(1)',
        'transition': '.5s',
      });
  });

  $('.el_category').each(function(){
    var height_cat = $(this).height();
    $(this).children('.hover_img').css('height', height_cat + 'px');
    $(this).children('.caption').css('height', height_cat + 'px');
  });

  $('.el_category').hover(
    function(){
      $(this).children('.caption').css({
        'background-color': '#ddd',
        'transition': '.8s',
      });

      $(this).children('.hover_img').css({
        'width': '100px',
        'transition': '.8s',
      });
      $(this).find('.hover_back').css({
        'margin-left': '0px',
        'transition': '.8s',
      });
      
    },
    function(){
      $(this).children('.hover_img').css({
        'width': '0px',
        'transition': '.8s',
      });
      $(this).find('.hover_back').css({
        'margin-left': '-100px',
        'transition': '.8s',
      });  
      $(this).children('.caption').css({
        'background-color': 'transparent',
        'transition': '.8s',
      });
  });

});;