const $sizePicker = $('#sizePicker'),
      $input_height = $('#input_height'),
      $input_width = $('#input_width'),
      $colorPicker = $('#colorPicker'),
      $pixel_canvas = $('#pixel_canvas');
let color = 'black';


let makeGrid = (row, column) => {
  let html;
  for (let x = 0; x < row; x++) {
    html += `<tr>`;
    for (var y = 0; y < column; y++) {
      html += `<td class="pixel"></td>`
    }
    html += `</tr>`;
  }
  $pixel_canvas.append(html);
}


let deleteRow = () => {
  let rowCounter = $('tr').length;
  while (rowCounter--) {
    document.getElementById('pixel_canvas').deleteRow(-1);
  }
}

$colorPicker.change(() => {
  color = $colorPicker.val();
});


$sizePicker.submit(function(e) {
  e.preventDefault();
  let row = $input_height.val(),
    column = $input_width.val(),
    trs = $('tr').length;
  deleteRow();
  makeGrid(row, column);
  $('td').click(function() {
    $(this).css('background-color', color);
  })
});
