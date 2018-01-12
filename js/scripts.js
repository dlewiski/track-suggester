


$(document).ready(function() {
  $("#survey").submit(function(event) {
    $("#ruby").hide();
    $("#css").hide();
    $("#java").hide();
    
    var design = $("#designQuestion").val();

    if(design === "Design") {
      $("#css").show();
    } else {
      $("#css").hide();
      alert("try again");
    }


    event.preventDefault();
  });

  $("#showAll").click(function() {
    $("#ruby").toggle();
    $("#css").toggle();
    $("#java").toggle();
  });
});
