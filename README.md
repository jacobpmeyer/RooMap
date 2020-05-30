# RooMap

## Live link
https://roomap.jacobmeyer.dev/

## Instructions
To interact with the map, simply click or tap any of the stages or tents(and even some other locations). A photo and some information about the location will apear to help you find your way around the venue a little more easily. 

## Technologies
- Javascript
- HTML/CSS

## Challenges
Getting the map to focus on the location point from anywhere that they might be viewing the map was the most challenging. In the end, the desired result was achieved by mulptiplying the page width by the percentage from left that the box is, then adding that to the difference of the event offsetX and the event x.
``` javascript
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
  let coordY = 85;
  const val = this.calculate({ offsetX, x: event.x }, coordX);
  this.img.src = "https://github.com/jacobpmeyer/RooMap/blob/master/images/kaliope.jpg?raw=true";
  return (this.bg.style.backgroundPosition = `${val}px ${coordY}%`);
}
```
## To-dos
- Collect more location photos
- Add more landmarks to select
