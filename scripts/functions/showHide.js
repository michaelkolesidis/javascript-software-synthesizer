

export default function showHide(title, section, display) {
  // (title, section)
  title.addEventListener("click", function () {
    if (section.style.display === display) {
      section.style.display = "none";
    } else {
      section.style.display = display;
    }
  });
}
