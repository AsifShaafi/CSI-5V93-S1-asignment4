$('#comment_submit_btn').on('click', function () {
  console.log('clicked');
  $('#hiddenAlertContainer').css('display', 'block');

  setTimeout(function () {
    $('#hiddenAlertContainer').css('display', 'none');
  }, 3000);
});

function navFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}
