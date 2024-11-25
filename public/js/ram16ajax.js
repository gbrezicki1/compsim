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
      for (let bit = 0; i < response.numBits; i++) {
        $(`#output.${bit}`).css(
          "background-color",
          colorFromBitValue(response["newOutputValue"][bit])
        );
        $(`#output.${bit}`).html(response["newOutputValue"][bit]);
        for (let row=0; row<response.numRows; row++) {
          for (let col=0; col<response.numCols; col++) {
            $(`#memCell.${row}.${col}.${bit}`).css(
              "background-color", colorFromBitValue(response.memCell[row][col][bit])
            )
            $(`#memCell.${row}.${col}.${bit}`).html(
              response.memCell[row][col][bit]
            )
          }
        }
      }
    },
    error: function (xhr, status, error) {
      console.error("Error:", error);
    },
  });
});
