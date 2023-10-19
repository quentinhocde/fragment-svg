# Installation
`npm i fragment-tools -g`

# Launch fragment
`fragment sketch.js`

# Edit the interface
Press `w` to edit the panels

# Docs
Fragment for the interface and the framework
[Fragment.tools](https://github.com/raphaelameaume/fragment/tree/dev/docs)

SVG5 for the drawing API
[svg5](https://github.com/MAKIO135/svg5.js)

# Draw with svg5
Before each svg5 functions, you'll need to add `svg5.`

Example : 
```
// svg5
circle(100, 100, 10);

//in sketch.js
svg5.circle(100, 100, 10);
```