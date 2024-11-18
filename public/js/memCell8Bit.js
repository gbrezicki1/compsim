$(".input-bit").click(function () {
  const box = $(this);
  $.ajax({
    url: "/update_memcell8bit",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      currentValue: box.innerHTML,
      boxID: box.attr("id"),
    }),
    success: function (response) {
      box.css("background-color", response["newInputColor"]);
      box.innerHTML(response["newInputValue"]);

      for (let i = 0; i < response.numBits; i++) {
        $(`#outputBit${i}`).css(
          "background-color",
          response["newOutputColor"][i]
        );
        $(`#outputBit${i}`).innerHTML(response["newOutputValue"][i]);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error:", error);
    },
  });
});
