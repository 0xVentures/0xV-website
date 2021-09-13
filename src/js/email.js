import anime, { timeline } from "animejs";

export function emailApplication() {
  const formWrapper = document.querySelector(".form-wrapper");
  const form = document.querySelector(".js-contact-form");
  const applyButton = document.querySelector(".js-apply");
  const showFormButton = document.querySelector(".js-show-form");
  const alert = document.querySelector(".js-alert");
  const formFields = form.elements;
  var canSend = true;
  var formIsOpen = false;
  var validate = require("validate.js");

  applyButton.addEventListener("click", (event) => {
    resolveClick(event);
  });

  showFormButton.addEventListener("click", (event) => {
    showForm(event);
  });

  function showForm() {
    if (formIsOpen) {
      return;
    }


    var hideButtonAnime = anime({
      easing: "easeOutCubic",
      duration: 1000,
      targets: showFormButton.parentNode,
      opacity: [1, 0],
      height: 0,
      complete() {
        formIsOpen = true;
        showFormButton.classList.add("hidden");
        form["email"].focus();
      },
    });

    var showFormAnime = anime.timeline({
      easing: "easeInCubic",
      duration: 600,
    });

    form.classList.remove("contact-form--hidden");

    showFormAnime
      .add({
        targets: formWrapper,
        height: form.clientHeight,
        complete() {
          formWrapper.style.height = "auto";
        },
      })
      .add(
        {
          targets: form,
          opacity: [0, 1],
        },
        0
      )
      .add(
        {
          targets: form.querySelectorAll(".form-section"),
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(100),
        },
        0
      );
  }

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
    applyButton.classList.add("form-button--loading");

    emailjs.send("default_service", "template_nrbw9wi", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert.innerHTML = "Thank you. Your application is on its way.";
        if (alert.classList.contains("form-alert--wrong")) {
          alert.classList.remove("form-alert--wrong");
        } else {
          alert.classList.add("form-alert--thanks", "form-alert--visible");
          var showAlert = anime({
            easing: "easeInCubic",
            duration: 1000,
            targets: alert,
            opacity: [0, 1],
          });
        }

        var hideButtonAnime = anime({
          easing: "easeOutCubic",
          duration: 1000,
          targets: applyButton.parentNode,
          opacity: [1, 0],
          height: 0,
          margin: 0,
          complete() {
            applyButton.classList.add("hidden");
          },
        });
      },
      function (error) {
        console.log("FAILED...", error);
        canSend = true;
        applyButton.classList.remove("form-button--loading");
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
