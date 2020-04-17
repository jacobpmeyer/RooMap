import MapRoo from "./MapRoo";

document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");
  const modal = document.getElementById("modal");
  const modalOverlay = document.getElementById("modal-overlay");
  const background = document.getElementById("background");
  const wrapper = document.getElementById("wrapper");
  const nav = document.getElementById("nav");

  const closeModal = () => {
    background.classList.remove("zoom", "small");
    wrapper.classList.remove("oh");
    modalOverlay.classList.remove("modal-overlay");
    modal.classList.remove("modal");
    background.setAttribute("style", "");
    nav.innerHTML = "Click on a landmark to show info";
  };

  const openModal = () => {
    modalOverlay.classList.add("modal-overlay");
    modal.classList.add("modal");
    nav.innerHTML = "Click anywhere to close and zoom out";
  };

  background.addEventListener("click", (e) => {
    if (e.target.id === "background") return console.log(e.offsetX);
    wrapper.classList.add("oh");
    background.classList.add("small", "zoom");
    const id = e.target.id;
    const mapPoint = new MapRoo(window.innerHeight);
    mapPoint[id](e);
    const om = setTimeout(() => {
      openModal();
      console.log("inside the timeout");
      clearTimeout(om);
    }, 2000);
  });

  function zoom(event) {
    console.log("inside zoom");
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
    wrapper.style.transform = `scale(${scale})`;
  }
  let scale = 1;
  document.onwheel = zoom;

  modalOverlay.addEventListener("click", closeModal);
});
