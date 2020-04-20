import MapRoo from "./MapRoo";
import * as mapText from "./MapText";

document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");
  const imgModal = document.getElementById("img-modal");
  const infoModal = document.getElementById("info-modal");
  const modalOverlay = document.getElementById("modal-overlay");
  const background = document.getElementById("background");
  const wrapper = document.getElementById("wrapper");
  const nav = document.getElementById("nav");
  const img = document.getElementById("location-img");

  const closeModal = () => {
    background.classList.remove("zoom", "small");
    wrapper.classList.remove("oh");
    modalOverlay.classList.remove("modal-overlay");
    imgModal.classList.remove("img-modal");
    infoModal.classList.remove("info-modal");
    background.setAttribute("style", "");
    nav.innerHTML = "Click on a landmark to show info";
  };

  const openModal = () => {
    modalOverlay.classList.add("modal-overlay");
    infoModal.classList.add("info-modal");
    const om = setTimeout(() => {
      imgModal.classList.add("img-modal");
      clearTimeout(om);
    }, 2000);
    nav.innerHTML = "Click anywhere to close and zoom out";
  };

  background.addEventListener("click", (e) => {
    if (e.target.id === "background") return;
    wrapper.classList.add("oh");
    background.classList.add("small", "zoom");
    const id = e.target.id;
    const mapPoint = new MapRoo(window.innerHeight, id);
    mapPoint[id](e);
    openModal();
  });

  function zoom(event) {
    event.preventDefault();
    if (event.deltaY < 0) {
      // Zoom in
      scale *= event.deltaY * -0.02;
    } else {
      // Zoom out
      scale /= event.deltaY * 0.02;
    }
    // Restrict scale
    scale = Math.min(Math.max(0.125, scale), 4);
    // Apply scale transform
    img.style.transform = `scale(${scale})`;
  }
  let scale = 1;
  img.onwheel = zoom;

  modalOverlay.addEventListener("click", closeModal);

  window.name = mapText["kaliope"];
});
