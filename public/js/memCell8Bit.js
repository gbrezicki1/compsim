import { colorFromBitValue } from "./utils.js";

$(".input-bit").click(function () {
  const box = $(this);
  $.ajax({
    url: "/update_memcell8bit",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      boxID: box.attr("id"),
    }),
    success: function (response) {
      box.html(response["newSetOrInputValue"]);
      box.css(
        "background-color",
        colorFromBitValue(response["newSetOrInputValue"])
      );
      for (let i = 0; i < response.numBits; i++) {
        $(`#outputBit${i}`).css(
          "background-color",
          colorFromBitValue(response["newOutputValue"][i])
        );
        $(`#outputBit${i}`).html(response["newOutputValue"][i]);
        console.log(`#outputBit${i}`);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error:", error);
    },
  });
});
