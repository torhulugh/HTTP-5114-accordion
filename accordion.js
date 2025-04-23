function accordion_toggle(section) {
  // Log the section ID that was clicked
  console.log(section);

  // Log a message indicating which section was clicked
  console.log("clicked " + section);

  // Get the DOM element for the clicked section using its ID
  var selectedSection = document.getElementById(section);

  // Check if the selected section is currently displayed
  if (selectedSection.style.display == "block") {
    // Hide the section if it is already visible
    selectedSection.style.display = "none";
  } else {
    // Get all elements with the class "accordion-section"
    var allSelections = document.getElementsByClassName("accordion-section");

    // Loop through all sections and hide them
    for (var i = 0; i < allSelections.length; i++) {
      allSelections[i].style.display = "none";
    }

    // Show only the clicked section
    selectedSection.style.display = "block";
  }
}
