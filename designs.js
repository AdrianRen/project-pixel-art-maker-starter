const $sizePicker = $('#sizePicker'),
// Define global variables
  $input_height = $('#input_height'),
  $input_width = $('#input_width'),
  $colorPicker = $('#colorPicker'),
  $pixel_canvas = $('#pixel_canvas');
let color;
// When size is submitted by the user, call makeGrid()
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

$colorPicker.change(() => {
  color = $colorPicker.val();
});

$sizePicker.submit(function(e) {
  e.preventDefault();
  let row = $input_height.val(),
      column = $input_width.val();
  $('#pixel_canvas tr').remove();
  makeGrid(row, column);
  $('td').click(function(){
    $(this).css('background-color',color);
  })
});
