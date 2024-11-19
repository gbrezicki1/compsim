import { colorFromBitValue } from "./utils.js";

$(".input-bit").click(function () {
  const box = $(this);
  console.log(box.innerHTML);
  $.ajax({
    url: "/update_memcell8bit",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      currentValue: box.innerHTML,
      boxID: box.attr("id"),
    }),
    success: function (response) {
      box.innerHTML = response["newInputValue"];
      box.css("background-color", colorFromBitValue(response["newInputValue"]));
      for (let i = 0; i < response.numBits; i++) {
        $(`#outputBit${i}`).css(
          "background-color",
          colorFromBitValue(response["newOutputValue"][i])
        );
        $(`#outputBit${i}`).innerHTML(response["newOutputValue"][i]);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error:", error);
    },
  });
});
