$(document).ready(function() {
  $(".nav-tabs").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  })
  $(".nav-tabs .active")[0].click()
  $(".nav-tabs .active")[0].click()
  $("#contact-form").submit(function(e) {
    e.preventDefault();
    $.post("https://formspree.io/teamghosties@gmail.com", $(this).serialize());
    $("#contact-modal").modal("hide").children().remove()
    $("#contact-modal").html("<div class=\"modal-dialog\"><div class=\"modal-content\" style=\"padding: 5px;\">Please only submit once</div></div>");
  })
})
