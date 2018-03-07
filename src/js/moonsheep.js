var Moonsheep = {
  init: function(){
    console.log('MOONSHEEP RISING...');
    this.progressBar();
  },

  /** Init width of prog bars **/
  progressBar: function(){
    console.log('1. Progress Bar calculations...');
    $('.progress-bar').each(function(i){
      var w = $(this).data('width');
      var t = $(this).next('.progress-number');

      $(this).css('width', w + '%');
      t.text(w + '%');
      if(w > 48){
        t.css('color', '#FFFEE7');
      }
      else {
        t.css('color', '#644263');
      }
    });
  }
}

$(document).ready(function(){
  Moonsheep.init();
});
