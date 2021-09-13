import anime from "animejs";
import helpers from "./helpers.js";
import getProfiles from "./twitter.js";
import { sendApplication } from "./email.js";

var animationsxV = (function () {
  const video = document.querySelector(".back-video");
  const sections = document.querySelectorAll(".js-section");
  const ventures = document.querySelector("#ventures");
  const navButtons = document.querySelectorAll(".js-nav-btn");
  const navWrapper = document.querySelector(".js-side-nav-wrapper");
  const navTop = document.querySelector(".js-top-nav");
  const navGradient = document.querySelector(".js-side-nav-gradient");
  const contentGradient = document.querySelector(".js-content-gradient");
  var isLoading = true;
  var navIsOpen = false;
  // check if nav is displayed
  // if not, do not animate it
  const navIsVisible =
    window.getComputedStyle(document.querySelector(".js-side-nav-wrapper"))
      .display !== "none";

  var init = (function () {
    // hide sections
    // sections.forEach((section) => {
    //   section.style.display = "none";
    // });

    // test
    ventures.style.opacity = "0";

    hideSideNav();
    // contentGradient.style.opacity = "0";

    addProfileImages();
    playIntroAnimation();

    sendApplication();
  })();

  function hideSideNav() {
    if (navIsVisible) {
      navWrapper.style.display = "none";
      navGradient.style.opacity = "0";
    }
  }

  // add listeners
  // video.addEventListener("canplay", (event) => {
  //   addProfileImages();
  //   playIntroAnimation();
  // });

  // video.addEventListener("error", () => {
  //   addProfileImages();
  //   playIntroAnimation();
  //   console.log('video error');
  // });

  // video.addEventListener("abort", () => {
  //   addProfileImages();
  //   playIntroAnimation();
  //   console.log('video abort');
  // });

  // video.onerror = function () {
  //   console.log("video error");
  // };

  navWrapper.addEventListener("click", (event) => {
    resolveNavClick(event);
    if (video.paused) {
      video.play();
    }
  });

  navTop.addEventListener("click", (event) => {
    resolveTopNavClick(event);
  });

  function playIntroAnimation() {
    if (isLoading === false) {
      return;
    }
    const loadingScreen = document.querySelector(".loading-screen");

    anime({
      targets: loadingScreen,
      delay: 800,
      opacity: [1, 0],
      duration: 400,
      easing: "easeOutSine",
      complete() {
        loadingScreen.style.display = "none";
        isLoading = false;

        // open first section
        sectionOpen("ventures");
      },
    });
  }

  function navAnimation() {
    if (!navIsVisible) {
      return;
    }
    navWrapper.style.display = "";

    var timeline = anime.timeline({
      easing: "easeInSine",
      duration: 800,
    });

    timeline
      .add(
        {
          targets: navWrapper,
          opacity: [0, 1],
        },
        0
      )
      .add(
        {
          targets: navGradient,
          opacity: [0, 1],
          duration: 1600,
        },
        0
      );
  }

  function sectionOpen(sectionId) {
    if (sectionId === null) {
      return;
    }

    const section = document.querySelector("#" + sectionId);
    const header = section.querySelector("h2");
    const paragraphs = section.querySelectorAll("p");
    header.innerHTML = header.textContent.replace(
      /,?[a-zA-Z0-9][a-zA-Z0-9]*,?/g,
      "<span class='word'>$&</span>"
    );
    const headerWords = header.querySelectorAll(".word");
    paragraphs.forEach((paragraph) => {
      paragraph.innerHTML = paragraph.textContent.replace(
        /,?[a-zA-Z0-9][a-zA-Z0-9]*(,|.)?/g,
        "<span class='pword'>$&</span>"
      );
    });

    const paragraphWords = section.querySelectorAll(".pword");

    console.log(sectionId);

    section.style.display = "";
    section.style.opacity = "";

    var timeline = anime.timeline({
      easing: "easeInSine",
      duration: 800,
    });

    timeline
      .add({
        targets: headerWords,
        opacity: [0, 1],
        duration: 1200,
        delay: anime.stagger(400),
      })
      .add({
        targets: paragraphWords,
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(80),
        complete() {
          // open nav
          navAnimation();
        },
      });
    // .add(
    //   {
    //     targets: contentGradient,
    //     opacity: [0, 1],
    //     duration: 1600,
    //   },
    //   0
    // );
  }

  async function addProfileImages() {
    const membersWrapper = document.querySelector(".js-members");
    const membersImages = await getProfiles();
    var membersInner = document.createElement("div");
    membersInner.classList.add("members-inner");

    var memberNodes = [];
    membersImages.forEach((memberTwitter, memberName) => {
      var a = document.createElement("a");
      a.classList.add("member");
      a.href = "https://twitter.com/" + memberTwitter;
      a.target = "_blank";

      var wrapper = document.createElement("div");
      wrapper.classList.add("member__data");

      var img = document.createElement("img");
      img.classList.add("member__img");
      img.src = "assets/img/avatars/" + memberTwitter + ".jpg";

      var nameTwitter = document.createElement("div");

      var name = document.createElement("div");
      name.classList.add("member__name");
      name.innerHTML = memberName;

      var twitter = document.createElement("div");
      twitter.classList.add("member__twitter");
      twitter.innerHTML = "@" + memberTwitter;

      // append
      nameTwitter.appendChild(name);
      nameTwitter.appendChild(twitter);
      wrapper.appendChild(img);
      wrapper.appendChild(nameTwitter);
      a.appendChild(wrapper);
      membersInner.appendChild(a);
    });

    membersWrapper.appendChild(membersInner);
  }

  function resolveTopNavClick(event) {
    console.log(event.target);
    if (event.target && event.target.classList.contains("nav-btn--menu")) {
      toggleSideNav();
    }
  }

  function resolveNavClick(event) {
    console.log(event.target);
    toggleSideNav();
  }

  function toggleSideNav() {
    if (navIsVisible) {
      return;
    }

    var animation;

    if (navIsOpen) {
      animation = anime({
        easing: "easeOutSine",
        duration: 400,
        targets: navWrapper,
        opacity: [1, 0],
        complete() {
          navWrapper.classList.remove("side-nav-wrapper--open");
          navIsOpen = false;
        },
      });
    } else {
      // clean up
      navWrapper.style.display = "";
      navWrapper.classList.add("side-nav-wrapper--open");
      animation = anime({
        easing: "easeInSine",
        duration: 400,
        targets: navWrapper,
        opacity: [0, 1],
        complete() {
          navIsOpen = true;
        },
      });
    }
  }
})();

// maybe?
// var sectionAnimation = (function () {});
