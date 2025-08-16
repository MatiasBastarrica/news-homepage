const navIcon = document.querySelector(".nav-icon");
const dialog = document.querySelector("dialog");

navIcon.addEventListener("click", () => {
  const closeIcon = dialog.querySelector(".close-icon-container");
  dialog.showModal();

  closeIcon.addEventListener("click", () => {
    dialog.close();
  });
});
