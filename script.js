//Load animation if input fields containing value on page load
$(document).ready(function () {
  $('.form-input').each(function () {
    if ($(this).val() != '') {
      $(this).parent().addClass('animation');
    }
  });

  //Add animation on input focused
  $('.form-input').focus(function () {
    $(this).parent().addClass('animation animation-color');
  });

  //Remove animation when input is not focused
  $('.form-input').focusout(function () {
    if ($(this).val() === '') $(this).parent().removeClass('animation');
    $(this).parent().removeClass('animation-color');
  });
});
