
// Define global variables
let $sizePicker = $('#sizePicker'),
    $input_height = $('#input_height'),
    $input_width = $('#input_width'),
    $colorPicker = $('#colorPicker'),
    $pixel_canvas = $('#pixel_canvas');

$sizePicker.submit(function () {
  let x = $input_width.val(),
      y = $input_height.val();
  console.log(x,y);
  return false;
})
// When size is submitted by the user, call makeGrid()
let makeGrid = (x,y) => {
  

}
