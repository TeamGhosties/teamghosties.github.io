$(document).ready(function() {
  $("#work-tabs li a").click(function() {
    if (!$(this).hasClass("toggled")) {
      $(".toggled").removeClass("toggled");
      $(this).addClass("toggled").parent().addClass("toggled");
      $(".shown").toggleClass("shown").toggleClass("hidden");
      $($(this).attr("data-target")).toggleClass("hidden").toggleClass("shown");
      console.log("Toggled");
    }
  });
})
