function navbaropen(){
    fadein('.overlay', 3);
    slidein('.navbar', 'left', '0%');
    slidein('#advert', 'top', '80%');
    fadein('#advert', 4);
}
function dropdown(id){
  element="#drop_"+id;
  $(element).css('height', '7.5vh');
  $(element).css('opacity', '1');
  $(element+":before").css('color', '#B0BEC5');
}

function navbarclose(){
    slideout('.navbar', 'left', '-100%');
    slideout('#advert', 'top', '120%');
    fadeout('.overlay');
    fadein('#advert');
}

function extendElipsisCutoff(classname){
    $(classname).dotdotdot({
        elipsis: '...',
        wrap: 'letter',
        watch: true,
      }
    );
}

function onlink(link){
  window.location.assign(link);
}

function mainmedia(type, srclink){
  var id="#main_"+type;
  if(id !== "#main_img"){
    $("#main_img").css('display','none');
  }
  else if(id !== "#main_video"){
    $("#main_iframe").css('display','none');
  }
  else{
    $("#main_video").css('display','none');
  }
  if(id === "#main_iframe"){
    srclink = "http://"+srclink;
  }
  $(id).attr('src', srclink);
  $(id).css('display', 'block');
}

$(document).ready(function() {
  var mainMarginTop = $('#title').height()*1.6;//calculation for margins in main
  $('#main').css('margin-top', mainMarginTop+"px");

  extendElipsisCutoff(".card-elipsis");
//  $('.card-gallery-bar').css('width');
  $('button').click(function(){
    $('.card-data-column').append("<p>thankyou for filling out the form. We will shortly email you with our contact details</p>");
    $('.card-important').append("<p>thankyou for your custom we shall get back to you shortly</p>");
  });
}
)
