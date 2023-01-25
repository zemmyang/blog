const status = document.getElementById('status');
const output = document.getElementById('output');
if (window.FileList && window.File && window.FileReader) {
  document.getElementById('file-selector').addEventListener('change', event => {
    output.src = '';
    status.textContent = '';
    const file = event.target.files[0];
 //    if (!file.type) {
 //      status.textContent = 'Error: The File.type property does not appear to be supported on this browser.';
 //      return;
 //    }
    const reader = new FileReader();
    reader.onload = function(e) {
     var buffer = reader.result;
     var sliced = new Int32Array(buffer.slice(0, 4));
     output.innerHTML = sliced[0].toString(16) == "4d524443";
     }

     reader.readAsArrayBuffer(file);

    //    reader.addEventListener('load', event => {
 //      output.innerHTML = event.target.result;
 //    });
 //    reader.readAsDataURL(file);
  }); 
}