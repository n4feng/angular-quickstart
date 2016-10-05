
//to make the canvas for editing picture
var canvas = new fabric.Canvas('canvas');
var a = document.getElementById('file');
var info = document.getElementById('info');
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

//canvas touch detector
//This part of the code is wrong even on Fabric.js demos page
//http://fabricjs.com/touch-events
//So I decide not put this feature in my app.
/*
canvas.on({
  'touch:gesture': function() {
    var text = document.createTextNode(' Gesture ');
    var currentTime = d.getTime;
    
    //only insert new edit history if the event happen more than 1 s
    //from the previous event
    if(currentTime - eventTime > 1000){
      if(info.lastChild == null){
        info.insertBefore(text,info.lastChild);
      }
      else{
        info.insertBefore(text,info.lastChild.nextSibling);
      }
    }
    eventTime = currentTime
  },
  'touch:drag': function() {
    var text = document.createTextNode(' Dragging ');
    var currentTime = d.getTime;
    if(currentTime - eventTime > 1000){
      if(info.lastChild == null){
        info.insertBefore(text,info.lastChild);
      }
      else{
        info.insertBefore(text,info.lastChild.nextSibling);
      }
    }
    eventTime = currentTime
  },
  'touch:orientation': function() {
    var text = document.createTextNode(' Orientation ');
    var currentTime = d.getTime;
    if(currentTime - eventTime > 1000){
      if(info.lastChild == null){
        info.insertBefore(text,info.lastChild);
      }
      else{
        info.insertBefore(text,info.lastChild.nextSibling);
      }
    }
    eventTime = currentTime
  },
  'touch:shake': function() {
    var text = document.createTextNode(' Shaking ');
    var currentTime = d.getTime;
    if(currentTime - eventTime > 1000){
      if(info.lastChild == null){
        info.insertBefore(text,info.lastChild);
      }
      else{
        info.insertBefore(text,info.lastChild.nextSibling);
      }
    }
    eventTime = currentTime
  },
  'touch:longpress': function() {
    var text = document.createTextNode(' Longpress ');
    var currentTime = d.getTime;
    if(currentTime - eventTime > 1000){
      if(info.lastChild == null){
        info.insertBefore(text,info.lastChild);
      }
      else{
        info.insertBefore(text,info.lastChild.nextSibling);
      }
    }
    eventTime = currentTime
  }
});*/
