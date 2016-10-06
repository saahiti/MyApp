// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

/*
$('a[data-toggle="modal"]').on('click', function(){
    // update modal header with contents of button that invoked the modal
    $('#myModalLabel').html( $(this).html() );
    //fixes a bootstrap bug that prevents a modal from being reused
    $('#utility_body').load(
        $(this).attr('href'),
        function(response, status, xhr) {
            if (status === 'error') {
                //console.log('got here');
                $('#utility_body').html('<h2>Oh boy</h2><p>Sorry, but there was an error:' + xhr.status + ' ' + xhr.statusText+ '</p>');
            }
            return this;
        }
    );
});​


$(document).ready(function() {

  $('a[data-toggle=modal], button[data-toggle=modal]').click(function () {

    var data_id = '';

    if (typeof $(this).data('id') !== 'undefined') {

      data_id = $(this).data('id');
    }

    $('#my_element_id').val(data_id);
  })
});



$('#modal').on('show.bs.modal', function () {
       $(this).find('.modal-body').css({
              width:'auto', //probably not needed
              height:'auto', //probably not needed 
              'max-height':'100%'
       });
});

$('#myModal').on('show.bs.modal', function () {
    $('.modal .modal-body').css('overflow-y', 'auto'); 
    $('.modal .modal-body').css('max-height', $(window).height() * 0.7);
});

$('#modal').on('show', function () {

    $(this).find('.modal-body').css({width:'auto',
                               height:'auto', 
                              'max-height':'100%'});
});*/