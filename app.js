const modal = document.querySelector(".modal");
const preview_imgs = document.querySelectorAll(".gallery img");
const full_img = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

preview_imgs.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    full_img.classList.add("open");

    //dynamic caption and image

    const originalSrc = preview.getAttribute("data-original");
    full_img.src = `./full-imgs/${originalSrc}`;
    const captionText = preview.alt;
    caption.innerHTML = captionText;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    full_img.classList.remove("open");
  }
});
