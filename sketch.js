import * as svg5 from 'svg5';
import { random, roundRandom, randomSeed } from './utils.js';

// Global options
export let filenamePattern = ({ filename, suffix, year, month, day, hours, minutes, seconds }) => {
    return `tictac.${year}-${month}-${day}at${hours}.${minutes}.${seconds}`;
}
export let exportDir = './exports';

// tips for non-animated rendering
export let fps = 0;

// Interface and variables
export let props = {
    numberOfCircles: {
        value: 10,
        params: {
            min: 0,
            max: 100
        },
        onChange: () => {
            initCircles(fWidth, fWidth);
        }
    },
    circlesRadius: {
        value: 50,
        params: {
            min: 10,
            max: 200
        }
    },
	numberOfPoints: {
        value: 2,
        params: {
            min: 0,
            max: 100
        },
        onChange: () => {
            initLine(fWidth, fWidth);
        }
    },
    saveSvg: {
        value: () => {
            svg5.save();
        },
        params: {
            label: 'Save SVG'
        }
    },
    regenerate: {
        value: () => {
            initSeed(randomSeed.getRandomSeed());
			
			circles = [];
            initCircles(fWidth, fWidth);

			line = [];
            initLine(fWidth, fWidth);
        },
        params: {
            label: 'Regenerate Hash'
        }
    }
};

let containerCSSSelector;
let circles = [];
let line = [];

let fWidth, fHeight;
export let init = ({ context, width, height, hash = randomSeed.getRandomSeed()}) => {
    initSeed(hash);
    setSizes(width, height);

    containerCSSSelector = '.canvas-container';
    initSVG(width, height);

    initCircles();
	initLine();
};

export let setSizes = (width, height) => {
    fWidth = width;
    fHeight = height;
}

export let initSeed = (seed) => {
    randomSeed.setSeed(seed);
	svg5.noiseSeed(seed);
    return seed;
}

export let initSVG = (width, height) => {
    svg5.createSVG(width, height);
};

export let clearSVG = () => {
    if(svg5._svg != null) {
        svg5._svg.parentNode.removeChild(svg5._svg);
    }
}

export let renderSVG = () => {
    clearSVG();

    svg5.render(containerCSSSelector);
    
    let svgEl = svg5._svg;
    svgEl.style.backgroundColor = 'white';
    svgEl.style.position = 'absolute';
    svgEl.style.top = '50%';
    svgEl.style.left = '50%';
    svgEl.style.transform = 'translate3d(-50%, -50%, 0';
    svgEl.style.maxWidth = '100%';
    svgEl.style.maxHeight = '100%';
    svgEl.style.setProperty('width', 'auto', 'important');
    svgEl.style.setProperty('height','auto', 'important');
    svgEl.style.flex = 'none';
}


// 
// DRAWING PART
// 

// Create circles
export let initCircles = () => {
    let circlesCountOffset = props.numberOfCircles.value - circles.length;

    if(circlesCountOffset > 0) {
        for (let index = 0; index < circlesCountOffset; index++) {
            createCircle(circlesCountOffset);
        }
    } else {
        circles.length = props.numberOfCircles.value;
    }
}

export let createCircle = () => {
    circles.push({
        x: random(0, fWidth),
        y: random(0, fHeight)
    });
}

// Create line
export let initLine = () => {
    let pointsCountOffset = props.numberOfPoints.value - line.length;
	console.log(pointsCountOffset, props.numberOfPoints.value, line.length);

    if(pointsCountOffset > 0) {
        for (let index = 0; index < pointsCountOffset; index++) {
            addPoint(pointsCountOffset);
        }
    } else {
        line.length = props.numberOfPoints.value;
    }
}

export let addPoint = () => {
	// Get a random number of points, and add all points as array
	const point = {
		x: random(0, fWidth),
		y: random(0, fHeight)
	}
	line.push(point);

}


// Draw function
export let update = ({ context, width, height }) => {
    
    const radius = props.circlesRadius.value;
    svg5.clear();
    svg5.stroke('black');
    svg5.noFill();

	// Pencil thickness
    svg5.strokeWidth(5);

	// Loop and draw Circles
    circles.forEach((circle) => {
        svg5.circle(circle.x, circle.y, radius)
    });

	// Loop and draw Circles
    circles.forEach((circle) => {
        svg5.circle(circle.x, circle.y, radius)
    });

	// Loop points and draw line
	svg5.beginShape();

	line.forEach(point => {
		svg5.circle(point.x, point.y, 30)
		svg5.vertex(point.x, point.y);
	});

	svg5.endShape();

	// Important to render the SVG
    renderSVG();
};

export let resize = ({ width, height }) => {
    setSizes(width, height);
};

export let rendering = "2d";
