$(document).ready(function () {
  $(".input-checkbox").on("change", function () {
    $.ajax({
      url: "/update",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        isChecked: $(this).is(":checked"),
        input: $(this).attr("id"),
      }),
      success: function (response) {
        console.log(response.output.toString());
        $("#output").html(response.output.toString());
      },
      error: function (xhr, status, error) {
        console.error("Error:", error);
      },
    });
  });
});
