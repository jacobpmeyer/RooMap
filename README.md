# RooMap

## Live link 
https://roomap.jacobmeyer.dev/

## Background
The Bonnaroo Music and Arts festival takes up an enormous amount of land and can be very challenging to navigate, especially for first time attendees, but also even for seasoned vets. The idea behind RooMap is to give the festival-goers an interactive map based on the official map of the year. This map would be zoomable, which would be especially helpful for mobile users and would feature pictures of each selectable location on the map, with special attention being given to Centeroo, the main festival grounds of Bonnaroo. My intention with this app is be a replacement to the non-interactive pdf used each year by Bonnarro on their website and their mobile app.

## MVP
RooMap is an interactive map of the Bonnaroo Music and Arts Festival featuring
- A zoomable map of the Bonnaroo festival grounds
- Clicking on a location zooms to that spot on the map
- Zooming on a particular location reveals a photo of the real area to help people who have never been to Bonnaroo orient themselves to the 700 acre festival grounds
-  A navigation modal in the top right of the screen that lists the ways to navigate the map

Bonus Features
- A photo carousel on each location to help further orient patrons to their location
- Directions to other locations based on the location currently selected

## Wirefames
- This will be a single page app that has one navigation modal when the map is fully zoomed out
![Roo map zoomed out](https://github.com/jacobpmeyer/RooMap/blob/master/documents/roomap_wireframe_main.png?raw=true "Map on first load")

- When zoomed in on a location, a photo will prensent on the screen, off center, relative to the navigation modal.
![Roo map zoomed in](https://github.com/jacobpmeyer/RooMap/blob/master/documents/roomap_wireframe_zoomed.png?raw=true "Map when zoomed on location")

## Technologies
- Javascript
- D3
- HTML/CSS