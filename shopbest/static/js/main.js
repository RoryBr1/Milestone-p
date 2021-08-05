$(function() {
  
    $('#navbarSupportedContent')
      .on('shown.bs.collapse', function() {
        $('#navbar-open-icon').addClass('hidden');
        $('#navbar-close-icon').removeClass('hidden');
      })
      .on('hidden.bs.collapse', function() {
        $('#navbar-open-icon').removeClass('hidden');
        $('#navbar-close-icon').addClass('hidden');
      });
    
  });