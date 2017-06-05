var indicador = 0;
$(document).ready(function() {
  defineSize() ;
  $('.left').on('click', function(e){
  e.preventDefault();
  moveSlider('left');
  });
  $('.right').on('click', function(e){
  e.preventDefault();
  moveSlider('right');
  });
});
function defineSize(){
  $('.slider-container li').each(function(i,el){
    $(el).css({
      'background-image': "url(" + $(el).data("background") + ")",
      'height': ($('.container').width()*0.75) + 'px',
      'width': ($('.container').width() - 10) + 'px'
    });
  });
}
function moveSlider(direccion){
  var limite = $('.slider-container li').length;
  console.log(limite);
  indicador = (direccion == 'right')? indicador + 1 : indicador - 1;
  indicador = (indicador >= limite)? 0 : indicador;
  indicador = (indicador < 0)? limite - 1 : indicador;
  $('.slider-container').animate({
    'margin-left': - (indicador* $('.container').width()-10) + 'px'

  });
}
