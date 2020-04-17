class MapRoo {
  constructor(pageWidth) {
    this.bg = document.getElementById("background");
    this.pageWidth = pageWidth;
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
    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
  }

  which(event) {
    let leftOff = this.pageWidth * 0.32;
    let offsetX = event.offsetX + leftOff;
    let coordX = -540;
    let coordY = 85;
    const val = this.calculate({ offsetX, x: event.x }, coordX);
    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
  }

  other(event) {
    let leftOff = this.pageWidth * 0.21;
    let offsetX = event.offsetX + leftOff;
    let coordX = -310;
    let coordY = 37;
    const val = this.calculate({ offsetX, x: event.x }, coordX);
    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
  }

  this(event) {
    let leftOff = this.pageWidth * 0.21;
    let offsetX = event.offsetX + leftOff;
    let coordX = -248;
    let coordY = 66;
    const val = this.calculate({ offsetX, x: event.x }, coordX);
    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
  }

  mushroom(event) {
    let leftOff = this.pageWidth * 0.21;
    let offsetX = event.offsetX + leftOff;
    let coordX = -470;
    let coordY = 60;
    const val = this.calculate({ offsetX, x: event.x }, coordX);
    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
  }

  sd(event) {
    let leftOff = this.pageWidth * 0.21;
    let offsetX = event.offsetX + leftOff;
    let coordX = -360;
    let coordY = 50;
    const val = this.calculate({ offsetX, x: event.x }, coordX);
    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
  }

  who(event) {
    let leftOff = this.pageWidth * 0.21;
    let offsetX = event.offsetX + leftOff;
    let coordX = -660;
    let coordY = 60;
    const val = this.calculate({ offsetX, x: event.x }, coordX);
    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
  }

  that(event) {
    let leftOff = this.pageWidth * 0.21;
    let offsetX = event.offsetX + leftOff;
    let coordX = -720;
    let coordY = 46;
    const val = this.calculate({ offsetX, x: event.x }, coordX);
    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
  }

  what(event) {
    let leftOff = this.pageWidth * 0.21;
    let offsetX = event.offsetX + leftOff;
    let coordX = -830;
    let coordY = 95;
    const val = this.calculate({ offsetX, x: event.x }, coordX);
    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
  }

  snakejake(event) {
    let leftOff = this.pageWidth * 0.21;
    let offsetX = event.offsetX + leftOff;
    let coordX = -515;
    let coordY = 43;
    const val = this.calculate({ offsetX, x: event.x }, coordX);
    return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
  }
}
export default MapRoo;

// class MapRoo {
//   constructor(pageWidth) {
//     this.bg = document.getElementById("background");
//     this.pageWidth = pageWidth;
//   }

//   calculate({ offsetX, x }, base) {
//     const val = (offsetX - x) / 2.5 + base;
//     return val;
//   }

//   // leftOff is the percentage away from the left the box is times the screen width.
//   kaliope(event) {
//     let leftOff = this.pageWidth * 0.08;
//     let offsetX = event.offsetX + leftOff;
//     let coordX = 200;
//     let coordY = -20;
//     const val = this.calculate({ offsetX, x: event.x }, coordX);
//     console.log("Inside Kaliope");
//     return (this.bg.style.transform = `scale(2.5) translate(${val}px, ${coordY}%)`);
//   }

//   which(event) {
//     let leftOff = this.pageWidth * 0.32;
//     let offsetX = event.offsetX + leftOff;
//     let coordX = 27;
//     let coordY = -22;
//     const val = this.calculate({ offsetX, x: event.x }, coordX);
//     return (this.bg.style.transform = `scale(2.5) translate(${val}px, ${coordY}%)`);
//   }

//   other(event) {
//     let leftOff = this.pageWidth * 0.21;
//     let offsetX = event.offsetX + leftOff;
//     let coordX = -310;
//     let coordY = 42;
//     const val = this.calculate({ offsetX, x: event.x }, coordX);
//     return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
//   }

//   what(event) {
//     let leftOff = this.pageWidth * 0.21;
//     let offsetX = event.offsetX + leftOff;
//     let coordX = -310;
//     let coordY = 42;
//     const val = this.calculate({ offsetX, x: event.x }, coordX);
//     return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
//   }

//   that(event) {
//     let leftOff = this.pageWidth * 0.21;
//     let offsetX = event.offsetX + leftOff;
//     let coordX = -310;
//     let coordY = 42;
//     const val = this.calculate({ offsetX, x: event.x }, coordX);
//     return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
//   }

//   this(event) {
//     let leftOff = this.pageWidth * 0.21;
//     let offsetX = event.offsetX + leftOff;
//     let coordX = -310;
//     let coordY = 42;
//     const val = this.calculate({ offsetX, x: event.x }, coordX);
//     return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
//   }

//   who(event) {
//     let leftOff = this.pageWidth * 0.21;
//     let offsetX = event.offsetX + leftOff;
//     let coordX = -310;
//     let coordY = 42;
//     const val = this.calculate({ offsetX, x: event.x }, coordX);
//     return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
//   }

//   mushroom(event) {
//     let leftOff = this.pageWidth * 0.21;
//     let offsetX = event.offsetX + leftOff;
//     let coordX = -310;
//     let coordY = 42;
//     const val = this.calculate({ offsetX, x: event.x }, coordX);
//     return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
//   }

//   sd(event) {
//     let leftOff = this.pageWidth * 0.21;
//     let offsetX = event.offsetX + leftOff;
//     let coordX = -310;
//     let coordY = 42;
//     const val = this.calculate({ offsetX, x: event.x }, coordX);
//     return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
//   }
// }
// export default MapRoo;
