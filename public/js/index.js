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
  $(".one-bit-mem-cell-input").on("change", function () {
    $.ajax({
      url: "/update_onebitmemcell",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        highlow: $(this).val(),
        inputID: $(this).attr("id"),
      }),
      success: function (response) {
        $(response.elementID).html(response.output.toString());
      },
      error: function (xhr, status, error) {
        console.error("Error:", error);
      },
    });
  });
});
