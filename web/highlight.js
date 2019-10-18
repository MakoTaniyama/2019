function selectPage(page) {
  if (page == 'highlight') {
    document.getElementById('highlight').style.display = 'block'
    document.getElementById('golf').style.display = 'none'
    document.getElementById('highlight_btn').classList.add('current_btn')
    document.getElementById('golf_btn').classList.remove('current_btn')
  } else if(page == 'golf') {
    document.getElementById('highlight').style.display = 'none'
    document.getElementById('golf').style.display = 'block'
    document.getElementById('highlight_btn').classList.remove('current_btn')
    document.getElementById('golf_btn').classList.add('current_btn')
  }
}

window.onload = function () {
  document.getElementById('highlight').style.display = 'block'
  document.getElementById('golf').style.display = 'none'
  document.getElementById('highlight_btn').classList.add('current_btn')
  document.getElementById('golf_btn').classList.remove('current_btn')
}

$(function () {
  $('.modal_open').click(function () {
    $('body').append('<div class="modal_overlay"></div>')
    $('.modal_overlay').fadeIn('slow')

    var modal = '#' + $(this).attr('data-target')
    modalResize()
    $(modal).fadeIn('slow')

    $('.modal_overlay, .modal_close').off().click(function () {
      $(modal).fadeOut('slow')
      $('.modal_overlay').fadeOut('slow', function () {
        $('.modal_overlay').remove()
      });
    });

    $(window).on('resize', function () {
      modalResize()
    });

    function modalResize() {
      var w = $(window).width()
      var h = $(window).height()

      var x = (w - $(modal).outerWidth(true)) / 2
      var y = (h - $(modal).outerHeight(true)) / 2

      $(modal).css({ 'left': x + 'px', 'top': y + 'px' })
    }

  });
});