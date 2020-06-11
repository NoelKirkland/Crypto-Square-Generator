// Business logic


// User interface
$(document).ready(function(){
  $("form#crypto-square").submit(function(event){
    event.preventDefault();
    const inputSentance = $("input#input-sentance").val();
    // noSpaceInputSentance = inputSentance.replace(/\s/g,'');
    console.log();
  });
});