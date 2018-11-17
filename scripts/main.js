$(document).ready(function() {
  function hideAll() {
    $('#sumAud').hide();
    $('#sumText').hide();
    $('#godAud').hide();
    $('#godText').hide();
    $('#kokoAud').hide();
    $('#kokoText').hide();
    $('#surfAud').hide();
    $('#surfText').hide();
  };

  hideAll(); /* code to hide audio players when page loads*/

  $('.art').click(function() {
    hideAll();

    switch ($(this).attr("id")) {
      case "sum":
        $('#sumAud').show();
        $('#sumText').slideDown();
        break;
      case "god":
        $('#godAud').show();
        $('#godText').slideDown();
        break;
      case "koko":
        $('#kokoAud').show();
        $('#kokoText').slideDown();
        break;
      case "surf":
        $('#surfAud').show();
        $('#surfText').slideDown();
        break;
    }

    $("audio").each(function() {
            this.pause();
            this.currentTime=0;
          });

  });

  });
