$(document).ready(function() {

  $("#mad-lib-form").submit(function(event) {

    let person1Input = $("#person1").val();
    let person2Input = $("#person2").val();
    let locationInput = $("#location").val();
    let nounInput = $("#noun").val();
    let pluralnoun1Input = $("#plural-noun1").val();
    let transportationInput = $("#transportation").val();
    let exclamationInput = $("#exclamation").val();
    let adjectiveInput = $("#adjective").val();
    let pluralnoun2Input = $("#plural-noun2").val();


    $(".person1").append(person1Input);
    $(".person2").append(person2Input);
    $(".location").append(locationInput);
    $(".noun").append(nounInput);
    $(".plural-noun1").append(pluralnoun1Input);
    $(".transportation").append(transportationInput);
    $(".exclamation").append(exclamationInput);
    $(".adjective").append(adjectiveInput);
    $(".plural-noun2").append(pluralnoun2Input);


    $("#story-body").show();
    event.preventDefault();
  });
});
