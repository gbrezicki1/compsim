$(document).ready(function () {
  $(".input-checkbox").on("change", function () {
    $.ajax({
      url: "/update_gates",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        isChecked: $(this).is(":checked"),
        input: $(this).attr("id"),
      }),
      success: function (response) {
        $(response.elementID).html(response.output.toString());
      },
      error: function (xhr, status, error) {
        console.error("Error:", error);
      },
    });
  });
  $(".one-bit-mem-cell-input").click(function () {
    console.log("clicked!");
    $.ajax({
      url: "/update_onebitmemcell",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        currentColor: $(this).css("background-color"),
        inputID: $(this).attr("id"),
      }),
      success: function (response) {
        $(this).css("background-color", response["newInputColor"]);
        $("#one-bit-mem-cell-output").css(
          "background-color",
          response["newOutputColor"]
        );
      },
      error: function (xhr, status, error) {
        console.error("Error:", error);
      },
    });
  });
});
