import { colorFromBitValue } from "./utils.js";

$(".input-bit").click(function () {
  const box = $(this);
  $.ajax({
    url: "/update_reg",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      boxID: box.attr("id"),
    }),
    success: function (response) {
      box.html(response["newValue"]);
      box.css("background-color", colorFromBitValue(response["newValue"]));
      for (let i = 0; i < response.numBits; i++) {
        $(`#memCellOutputBit${i}`).css(
          "background-color",
          colorFromBitValue(response["newMemCellOutputValue"][i])
        );
        $(`#memCellOutputBit${i}`).html(response["newMemCellOutputValue"][i]);
        $(`#outputBit${i}`).css(
          "background-color",
          colorFromBitValue(response["newOutputValue"][i])
        );
        $(`#outputBit${i}`).html(response["newOutputValue"][i]);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error:", error);
    },
  });
});
