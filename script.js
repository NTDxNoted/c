function initGallery() {
  const images = document.querySelectorAll(".gallery img");
  console.log("Gallery loaded");

  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    img.setAttribute("tabindex", "0");

    img.addEventListener("mouseover", () => {
      console.log(`Mouseover on image ${i}`);
      img.style.borderColor = "green";
    });

    img.addEventListener("mouseleave", () => {
      console.log(`Mouse leave on image ${i}`);
      img.style.borderColor = "transparent";
    });

    img.addEventListener("focus", () => {
      console.log(`Focus on image ${i}`);
      img.style.borderColor = "orange";
    });

    img.addEventListener("blur", () => {
      console.log(`Blur on image ${i}`);
      img.style.borderColor = "transparent";
    });
  }
}
