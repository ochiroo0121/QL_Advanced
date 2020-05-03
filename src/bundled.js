import "../src/styles/styles.css";
import toggleMenu from "./scripts/toggle_menu";
import backToTop from "./scripts/toTop";
import homeSlide from "./scripts/home_slider";
import colorController from "./scripts/color_control";
import contactAnim from "./scripts/contact";
import videoSlider from "./scripts/library/_video_slide";
import venoBox from "./scripts/library/_venobox";

document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector(".body");

  // HOME ******************************
  if (body.id === "homePage") {
    homeSlide();
    toggleMenu();
    colorController();
  }

  // VIDEO *****************************
  if (body.id === "videoPage") {
    toggleMenu();
    venoBox();
    videoSlider();
    colorController();
    backToTop();
  }

  // CONTACT ***************************
  if (body.id === "contactPage") {
    toggleMenu();
    colorController();
    contactAnim();
  }
});
