


$(document).ready(function() {
  $("#showAll").click(function() {
    $(".tracks").toggle();
  });

  $("#survey").submit(function() {
    // $(".tracks").hide();
    var design = $("#designQuestion").val();

    if(design === "Design") {
      $(".tracks#css").show();
    } else {
      alert("try again");
    }


    event.preventDefault();
  });
});
