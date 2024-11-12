$(".one-bit-mem-cell-input").click(function () {
  const box = $(this);
  $.ajax({
    url: "/update_onebitmemcell",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      currentColor: box.css("background-color"),
      inputID: box.attr("id"),
    }),
    success: function (response) {
      box.css("background-color", response["newInputColor"]);
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
  