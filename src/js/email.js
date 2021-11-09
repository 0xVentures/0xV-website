import anime, { timeline } from "animejs";

export function emailApplication() {
  const formWrapper = document.querySelector(".form-wrapper");
  const forms = {
    funding: document.querySelector(".js-funding-form"),
    member: document.querySelector(".js-member-form"),
  };
  const applyButtons = {
    funding: document.querySelector(".js-apply-funding"),
    member: document.querySelector(".js-apply-member"),
  };
  const showFormFundingButton = document.querySelector(".js-show-form");
  const showFormMemberButton = document.querySelector(".js-show-form-member");
  var canSend = true;
  var validate = require("validate.js");
  var openForm = null;

  applyButtons.funding.addEventListener("click", (event) => {
    sendEmail(event, forms.funding);
  });

  applyButtons.member.addEventListener("click", (event) => {
    sendEmail(event, forms.member);
  });

  showFormFundingButton.addEventListener("click", (event) => {
    toggleForm(event, forms.funding);
  });
  showFormMemberButton.addEventListener("click", (event) => {
    toggleForm(event, forms.member);
  });

  //
  //
  //
  function toggleForm(event, form) {
    if (openForm === form) {
      return;
    }

    form.style.display = "block";

    var showFormAnime = anime.timeline({
      easing: "easeInCubic",
      duration: 600,
    });

    showFormAnime
      .add({
        targets: formWrapper,
        height: form.clientHeight,
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
          targets: openForm,
          opacity: [1, 0],
          complete: function (anim) {
            if (openForm !== null) {
              openForm.style.display = "none";
            }
            openForm = form;
          },
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

    console.log(openForm);
  }

  //
  //
  //
  function sendEmail(event, form) {
    const checkOk = checkForm(form);
    const alert = form.querySelector(".js-alert");
    const formFields = form.elements;
    const emailTemplate = "template_q2ibls3";
    var templateParams;

    if (!canSend) {
      return;
    }

    if (!checkOk) {
      alert.innerHTML = templateParams.alert;
      alert.classList.add("form-alert--visible", "form-alert--wrong");
      return;
    }

    if (form === forms.funding) {
      templateParams = {
        email: formFields["email"].value.trim(),
        projectName: formFields["projectName"].value.trim(),
        website: formFields["website"].value.trim(),
        twitter: formFields["twitter"].value.trim(),
        nameContact: formFields["nameContact"].value.trim(),
        contactPosition: formFields["contactPosition"].value.trim(),
        description: formFields["description"].value.trim(),
        alert: "Please fill out all fields.",
      };
      sendEmailFunding(templateParams, applyButtons.funding, alert);
    } else {
      templateParams = {
        emailMember: formFields["emailMember"].value.trim(),
        twitterMember: formFields["twitterMember"].value.trim(),
        telegramMember: formFields["telegramMember"].value.trim(),
        discordMember: formFields["discordMember"].value.trim(),
        sinceWhenMember: formFields["sinceWhenMember"].value.trim(),
        defiProtocolsMember: formFields["defiProtocolsMember"].value.trim(),
        capitalMember: formFields["capitalMember"].value.trim(),
        farmingMember: getCheckBoxesValue(form, "farmingMember").trim(),
        walletMember: formFields["walletMember"].value.trim(),
        assetsMember: getCheckBoxesValue(form, "assetsMember").trim(),
        yieldMember: getCheckBoxesValue(form, "yieldMember").trim(),
        degenRatioMember: formFields["degenRatioMember"].value.trim(),
        degenScoreMember: formFields["degenScoreMember"].value.trim(),
        earlyMember: formFields["earlyMember"].value.trim(),
        recentInvestmentsMember:
          formFields["recentInvestmentsMember"].value.trim(),
        rugpullMember: formFields["rugpullMember"].value.trim(),
        publishedMember: formFields["publishedMember"].value.trim(),
        valueMember: formFields["valueMember"].value.trim(),
        elseMember: formFields["elseMember"].value.trim(),
        alert: "Please fill out your contact information.",
      };
      sendEmailMember(templateParams, applyButtons.member, alert);
    }



    // stop button
    canSend = false;

  }

  function getCheckBoxesValue(form, group) {
    const formFields = form.elements;
    const checkboxes = formFields[group];

    var r = "";

    checkboxes.forEach((element) => {
      if (element.checked === true) {
        r += element.value + " | ";
      }
    });


    return r;
  }

  function sendEmailFunding(templateParams, applyButton, alert) {
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

  function sendEmailMember(templateParams, applyButton, alert) {
    applyButton.classList.add("form-button--loading");
    emailjs.send("default_service", "template_q2ibls3", templateParams).then(
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

  //
  // old
  //
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
    var templateParams = {};

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

  function checkForm(form) {
    const constraints =
      form === forms.funding ? fundingConstrains : memberConstrains;

    const errors = validate(form, constraints);

    if (!errors) {
      return true;
    }

    return false;
  }

  const fundingConstrains = {
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

  const memberConstrains = {

  };
}
