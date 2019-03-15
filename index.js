document.addEventListener("DOMContentLoaded", function() {



  // Use Focus to get  
  //  function getSubject() {
  //   var subjectField = document.getElementById('subject');
  //
  //   if (subjectField !== null) {
  //     subjectField.addEventListener("blur", function() {
  //       console.log(subjectField.value);
  //     });
  //   }
  // }



  const onSubmit = function() {
    const submitButton = document.getElementById('submit');

    if (submitButton !== null) {
      submitButton.addEventListener("click", function() {
        checkFields();
      });
    }
  }



  // Arrow function => is the same as function() but more advanced ECMA6
  const checkFields = () => {

    var fields = ["subject", "subheader", "project-details", "benefits", "kpi", "project-manager", "vit-manager", "project-team", "business-sponsor"];

    var allFieldValues = {};

    fields.forEach(function(field) {
      const fieldInput = document.getElementById(field);

      if (fieldInput !== null) {
        const fieldValue = fieldInput.value;
        allFieldValues[field] = fieldValue;
      }
    })

    console.log(allFieldValues);
    buildTemplate(allFieldValues);
  }

  onSubmit();

})