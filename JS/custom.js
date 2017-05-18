$(document).ready(function(){
// set up hover panels
// although this can be done without JavaScript, we've attached these events
// because it causes the hover to be triggered when the element is tapped on a touch device
});

function customResetForm() {
    alert("Thank you for your message. Please, return to the website after filling the form");
    document.getElementById("myform").reset();
}

$(".close, .hamburger").click(function(e){
  e.preventDefault();
  $(".main-nav").toggleClass('open-nav');
});

$(function($) {
  $(".card").flip({
  axis: 'y',
  trigger: 'click'
});
});
