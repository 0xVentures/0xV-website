export function sendApplication() {
  const form = document.querySelector(".js-contact-form");
  const button = document.querySelector(".js-apply");
  const alert = document.querySelector(".js-alert");
  const formFields = form.elements;
  var canSend = true;
  var validate = require("validate.js");

  button.addEventListener("click", (event) => {
    resolveClick(event);
  });

  function resolveClick(event) {
    var checkOk = checkForm();

    if (!canSend) {
      return;
    }

    if (!checkOk) {
      alert.innerHTML = "Please fill out all fields.";
      alert.classList.add("form-alert--visible", "form-alert--wrong");
      return;
    }

    // gather message
    var templateParams = {
      email: formFields["email"].value.trim(),
      projectName: formFields["projectName"].value.trim(),
      website: formFields["website"].value.trim(),
      twitter: formFields["twitter"].value.trim(),
      nameContact: formFields["nameContact"].value.trim(),
      contactPosition: formFields["contactPosition"].value.trim(),
      description: formFields["description"].value.trim(),
    };

    // stop button
    canSend = false;
    button.classList.add("form-button--loading");

    emailjs.send("default_service", "template_nrbw9wi", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert.innerHTML = "Thank you. Your application is on its way.";
        alert.classList.remove("form-alert--wrong");
        alert.classList.add("form-alert--thanks", "form-alert--visible");
        button.classList.add("form-button--done");
      },
      function (error) {
        console.log("FAILED...", error);
        canSend = true;
        button.classList.remove("form-button--loading");
      }
    );
  }

  function checkForm() {
    var constraints = {
      email: {
        // If email is required
        presence: true,
        // and you want to check if this is an email
        email: true,
      },
      projectName: {
        presence: true,
      },
      website: {
        presence: true,
      },
      twitter: {
        presence: true,
      },
      nameContact: {
        presence: true,
      },
      contactPosition: {
        presence: true,
      },
      description: {
        presence: true,
      },
    };
    var errors = validate(form, constraints);

    if (!errors) {
      return true;
    }

    return false;
  }
}
