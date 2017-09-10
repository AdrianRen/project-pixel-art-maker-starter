
// Define global variables
const $sizePicker = $('#sizePicker'),
      $input_height = $('#input_height'),
      $input_width = $('#input_width'),
      $colorPicker = $('#colorPicker'),
      $pixel_canvas = $('#pixel_canvas');

// When size is submitted by the user, call makeGrid()
let makeGrid = (row,column) => {
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

let clearGrid = () => {
  let $tr = $('tr').length;
  while ($tr > 0) {
    $pixel_canvas.deleteRow(0);
  }
}

$sizePicker.submit(function (e) {
  e.preventDefault();
  let row = $input_height.val(),
      column = $input_width.val();
  clearGrid();
  makeGrid(row,column);
});
