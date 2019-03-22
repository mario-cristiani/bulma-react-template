document.addEventListener("DOMContentLoaded", function() {

  const showHelpText = () => {
    const allFields = document.querySelectorAll('.input, .textarea');

    if (allFields.length > 0) {
      allFields.forEach(field => {
        const helpText = field.parentElement.querySelector('.help');
        field.addEventListener("focus", function() {
          if (helpText !== null) {
            helpText.classList.remove('is-hidden')
          }
        });
        field.addEventListener("blur", function() {
          if (helpText !== null) {
            helpText.classList.add('is-hidden')
          }
        });
      })
    }
  }
  showHelpText();
  /**
   * On Submit.
   */
  const onSubmit = function() {
    const submitButton = document.getElementById('submit');
    if (submitButton !== null) {
      submitButton.addEventListener("click", function() {
        checkFields();

        document.getElementById("closing-message").className = "modal is-active";
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
        let fieldValue = fieldInput.value;
        if (field === 'project-details' || field === 'benefits' || field === 'kpi') {
          fieldValue = markdownConverter(fieldValue);
        }

        allFieldValues[field] = fieldValue;
      }
    });
    buildTemplate(allFieldValues);
  };

  const markdownConverter = (markdown) => {
    const converter = new showdown.Converter();

    return converter.makeHtml(markdown);
  }

  const modalClose = () => {
    const closingMessage = document.getElementById("closing-message");
    const closeButtons = ['modal-background', 'modal-close'];
    closeButtons.forEach((button) => {
      const closeButton = document.getElementById(button);
      if (closeButton !== null) {
        closeButton.addEventListener("click", () => {
          closingMessage.classList.remove("is-active");
        })
      }
    })
  }

  onSubmit();
  modalClose();
});

const openTab = (evt, tabName) => {
  const contentTabs = document.getElementsByClassName("content-tab");
  const tablinks = document.getElementsByClassName("tab");

  for (let i = 0; i < contentTabs.length; i++) {
    contentTabs[i].style.display = "none";
    tablinks[i].classList.remove("is-active");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("is-active");
}