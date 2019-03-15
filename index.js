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

  /**
   * On Submit.
   */
  const onSubmit = function() {
    const submitButton = document.getElementById('submit');
    if (submitButton !== null) {
      submitButton.addEventListener("click", function() {
        checkFields();
      });
    }
  };



  // Arrow function => is the same as function() but more advanced ECMA6
  /**
   * Check Fields.
   */
  const checkFields = () => {

    const fields = [
      'subject',
      'subheader',
      'project-details',
      'benefits',
      'kpi',
      'project-manager',
      'vit-manager',
      'project-team',
      'business-sponsor'
    ];

    const allFieldValues = {};
    fields.forEach(function(field) {
      const fieldInput = document.getElementById(field);
      if (fieldInput !== null) {
        const fieldValue = fieldInput.value;
        allFieldValues[field] = fieldValue;
      }
    });
    buildTemplate(allFieldValues);
  };

  onSubmit();
});