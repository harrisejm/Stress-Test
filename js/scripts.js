$(document).ready(function(){
  $("form#test").submit(function(event){
    event.preventDefault();
    $("#result").show();

 var total = 0;
  //  var arr1 = [];
    $("input:checkbox[name=question1]:checked").each(function(){
      var stressLevel = $(this).val();
      $("#result1").append(stressLevel + "<br>");
        total += 1;
    //  arr1.push(stressLevel);
    });


  //  var arr2 = [];
    $("input:checkbox[name=question2]:checked").each(function(){
      var stressSymptoms = $(this).val();
      $("#result2").append(stressSymptoms + "<br>");
        total += 1;
    //  arr2.push(stressSymptoms);
    });

  //  var arr3 =[];
    $("input:checkbox[name=question3]:checked").each(function(){
      var copingMethods = $(this).val();
      $("#result3").append(copingMethods + "<br>");
      total -= 1;
    //    arr3.push(copingMethods);
    });

    //$("p.testLine").text("Does this work " + total);


    if (total >= 3) {

    $("p.testLine").text("You are in bad shape. You should seek help")

  } else if (total >= 0 && total < 2) {

    $("p.testLine").text("You seem to be doing okay, but you may want to seek help");

  } else if (total <= -3) {

    $("p.testLine").text("You are doing great");

  } else if (total < 0 && total >= -2) {

    $("p.testLine").text("You seem to be doing fine");
  }


 // ******using array.length to outpu*************

 // var arr1 = [];
 //    $("input:checkbox[name=question1]:checked").each(function(){
 //      var stressLevel = $(this).val();
 //      $("#result1").append(stressLevel + "<br>");
 //
 //   arr1.push(stressLevel);
 //    });
 //
 //    var arr2 = [];
 //    $("input:checkbox[name=question2]:checked").each(function(){
 //      var stressSymptoms = $(this).val();
 //      $("#result2").append(stressSymptoms + "<br>");
 //
 //   arr2.push(stressSymptoms);
 //    });
 //
 //    var arr3 =[];
 //    $("input:checkbox[name=question3]:checked").each(function(){
 //      var copingMethods = $(this).val();
 //      $("#result3").append(copingMethods + "<br>");
 //
 //        arr3.push(copingMethods);
 //    });
 //
 //    $("p.testLine").text("Does this work " + total);
 //
 //    var neg = arr1.concat(arr2).length;
 //   var pos= arr3.length;
 //
 //    if (pos > neg && pos - neg >= 3) {
 //    $("p.testLine").text("You are doing great");
 //  } else if (pos > neg && pos - neg >= 0 && pos - neg < 2) {
 //    $("p.testLine").text("You seem to be doing fine");
 //  } else if (neg > pos && neg - pos >= 3) {
 //    $("p.testLine").text("You are in bad shape. You should seek help");
 //  } else if (neg > pos && neg - pos > 0 && neg - pos < 2) {
 //    $("p.testLine").text("You seem to be doing okay, but you may want to seek help");
 //  }








  });
});
