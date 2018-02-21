$(document).ready(function(){

  $('#file').on('change',function(){
     var absolutePath = $('#file').val().split("\\");
     var fileName = absolutePath[absolutePath.length - 1];
    var myFile = $(this)[0].files[0];
    console.log(myFile)
     var fr = new FileReader();
     var lineCount = 0;
     fr.onload = function(){
       var fileContents = this.result;
       var lines = this.result.split('\n');
       for(var line = 0; line < lines.length; line++){
         if (lines[line] != '' && lines[line].length > 6){
             lineCount++;
         }
       }
       $('.file-info').html('<div class="card card-body">\
         <h3>File Name</h3>\
         <div id="border-black"></div>\
         <p id="line-count"></p>\
       </div>')
      $('.card h3').text(fileName);
     $('#line-count').text(lineCount + ' Lines of Code!');
     }
     fr.readAsText(myFile)
  } )
});
