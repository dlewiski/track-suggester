


$(document).ready(function() {
  $("#survey").submit(function(event) {
    $("#ruby").hide();
    $("#css").hide();
    $("#java").hide();

    var name = $("#name").val();
    var design = $("#designQuestion").val();

    if (name != "") {
    $("#listName").text(name);
    $("#trackAnnounce").show();
    }

    if(design === "Design") {
      $("#css").show();
    } else if(design === "Logic") {
      $("#java").show();
    } else if(design === "Not sure") {
      alert("That's ok!");
      $("#ruby").show();
      $("#css").show();
      $("#java").show();
    } else {
      $("#css").hide();
      $("#java").hide();
      alert("try again");
    }

    event.preventDefault();
  });

  $("#showAll").click(function() {
    $("#ruby").show();
    $("#css").show();
    $("#java").show();
    $("#trackAnnounce").hide();
  });
});
