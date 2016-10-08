
//to make the canvas for editing picture
var canvas = new fabric.Canvas('canvas');
var a = document.getElementById('file');
var info = document.getElementById('info');
var serverurl = 'http://localhost:8080';

var d = new Date();
var eventTime = d.getTime;
var textcount = 0;
document.getElementById('file').addEventListener("change", function (e) {
  var file = e.target.files[0];
  var data = URL.createObjectURL(file);
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
  //reader.readAsDataURL(file);
  var text = document.createTextNode(' Uploading Image. ');
  if(info.lastChild == null){
    info.insertBefore(text,info.lastChild);
  }
  else{
    info.insertBefore(text,info.lastChild.nextSibling);
  }
  
});

//functions
function textboxPump(){
  //debugger;
  canvas.add(new fabric.IText('Tap and Type', { 
            fontFamily: 'arial black',
            left: 100+textcount*10, 
            top: 100 +textcount*10
    }));
  textcount++;
  var text = document.createTextNode(' Adding Text. ');
  if(info.lastChild == null){
    info.insertBefore(text,info.lastChild);
  }
  else{
    info.insertBefore(text,info.lastChild.nextSibling);
  }
}

var app = angular.module('myApp',[]);
app.controller('myCtrl',function ($scope, $http){
  $scope.saveImage = function(){
    $http({
      url: 'http://localhost:8080',
      method: "POST",
      data: canvas,
      header: 'Content-Type: application/json'
    });
    alert("Your work have been saved");
  };
});



