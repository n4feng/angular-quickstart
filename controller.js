var canvas = new fabric.Canvas('canvas');
var a = document.getElementById('file');
document.getElementById('file').addEventListener("change", function (e) {
  var file = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function (f) {
    var data = f.target.result;                    
    fabric.Image.fromURL(data, function (img) {
      var oImg = img.set({
        width: canvas.width,
        height: canvas.height,
        originX: 'left',
        originY: 'top'
      }).scale(0.9);
      canvas.add(oImg).renderAll();
      var a = canvas.setActiveObject(oImg);
      var dataURL = canvas.toDataURL({format: 'png', quality: 0.8});
    });
  };
  reader.readAsDataURL(file);
});