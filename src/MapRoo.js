import * as mapText from "./MapText";

class MapRoo {
  constructor(pageWidth, name) {
    this.bg = document.getElementById("background");
    this.pageWidth = pageWidth;
    this.img = document.getElementById("location-img");
    this.title = document.getElementById("info-title");
    this.landmarks = document.getElementById("info-landmarks");
    this.content = document.getElementById("info-content");
    this.title.innerText = mapText[name].title;
    this.landmarks.innerText = mapText[name].landmarks;
    this.content.innerText = mapText[name].content;
  }

  calculate({ offsetX, x }, base) {
    const val = offsetX - x + base;
    return val;
  }

  kaliope(event) {
    // leftOff is the percentage away from the left the box is times the screen width.
    let leftOff = this.pageWidth * 0.08;
    let offsetX = event.offsetX + leftOff;
    let coordX = -85;
    // coordY is the percentage away from the top the start of the
    // element is, plus about 5 percent to place it at the bottom of the
    // screen, as to give the modal room to exist
    let coordY = 85;
    const val = this.calculate({ offsetX, x: event.x }, coordX);
    this.img.src =
      "https://github.com/jacobpmeyer/RooMap/blob/master/images/kaliope.jpg?raw=true";
    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
  }

  which(event) {
    let leftOff = this.pageWidth * 0.32;
    let offsetX = event.offsetX + leftOff;
    let coordX = -540;
    let coordY = 85;
    const val = this.calculate({ offsetX, x: event.x }, coordX);
    this.img.src =
      "https://github.com/jacobpmeyer/RooMap/blob/master/images/which_stage.jpeg?raw=true";
    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
  }

  other(event) {
    let leftOff = this.pageWidth * 0.21;
    let offsetX = event.offsetX + leftOff;
    let coordX = -310;
    let coordY = 37;
    const val = this.calculate({ offsetX, x: event.x }, coordX);
    this.img.src =
      "https://github.com/jacobpmeyer/RooMap/blob/master/images/other1.jpg?raw=true";
    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
  }

  thisStage(event) {
    let leftOff = this.pageWidth * 0.21;
    let offsetX = event.offsetX + leftOff;
    let coordX = -248;
    let coordY = 66;
    const val = this.calculate({ offsetX, x: event.x }, coordX);
    this.img.src =
      "https://github.com/jacobpmeyer/RooMap/blob/master/images/this.jpeg?raw=true";
    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
  }

  mushroom(event) {
    let leftOff = this.pageWidth * 0.21;
    let offsetX = event.offsetX + leftOff;
    let coordX = -470;
    let coordY = 60;
    const val = this.calculate({ offsetX, x: event.x }, coordX);
    this.img.src =
      "https://github.com/jacobpmeyer/RooMap/blob/master/images/mush2.jpg?raw=true";
    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
  }

  sd(event) {
    let leftOff = this.pageWidth * 0.21;
    let offsetX = event.offsetX + leftOff;
    let coordX = -360;
    let coordY = 50;
    const val = this.calculate({ offsetX, x: event.x }, coordX);
    this.img.src =
      "https://github.com/jacobpmeyer/RooMap/blob/master/images/discolineup.jpg?raw=true";
    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
  }

  who(event) {
    let leftOff = this.pageWidth * 0.21;
    let offsetX = event.offsetX + leftOff;
    let coordX = -660;
    let coordY = 60;
    const val = this.calculate({ offsetX, x: event.x }, coordX);
    this.img.src =
      "https://github.com/jacobpmeyer/RooMap/blob/master/images/who.jpeg?raw=true";
    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
  }

  that(event) {
    let leftOff = this.pageWidth * 0.21;
    let offsetX = event.offsetX + leftOff;
    let coordX = -720;
    let coordY = 46;
    const val = this.calculate({ offsetX, x: event.x }, coordX);
    this.img.src =
      "https://github.com/jacobpmeyer/RooMap/blob/master/images/that.jpeg?raw=true";
    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
  }

  what(event) {
    let leftOff = this.pageWidth * 0.21;
    let offsetX = event.offsetX + leftOff;
    let coordX = -830;
    let coordY = 95;
    const val = this.calculate({ offsetX, x: event.x }, coordX);
    this.img.src =
      "https://github.com/jacobpmeyer/RooMap/blob/master/images/what.jpg?raw=true";
    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
  }

  snakejake(event) {
    let leftOff = this.pageWidth * 0.21;
    let offsetX = event.offsetX + leftOff;
    let coordX = -515;
    let coordY = 43;
    const val = this.calculate({ offsetX, x: event.x }, coordX);
    this.img.src =
      "https://github.com/jacobpmeyer/RooMap/blob/master/images/snakejake.jpg?raw=true";
    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
  }
}
export default MapRoo;
