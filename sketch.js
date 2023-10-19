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
    radius: {
        value: 50,
        params: {
            min: 10,
            max: 200
        }
    },
	amplitude: {
        value: 50,
        params: {
            min: 10,
            max: 300
        }
    },
	frequency: {
        value: 250,
        params: {
            min: 100,
            max: 1500
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
        },
        params: {
            label: 'Regenerate Hash'
        }
    }
};

let containerCSSSelector;
let circles = [];
let fWidth, fHeight;

export let init = ({ context, width, height, hash = randomSeed.getRandomSeed()}) => {
    initSeed(hash);
    setSizes(width, height);

    containerCSSSelector = '.canvas-container';
    initSVG(width, height);

    initCircles();
};

export let setSizes = (width, height) => {
    fWidth = width;
    fHeight = height;
}

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
        y: random(0, (fHeight/2) - 100)
    });
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

// Draw function
export let update = ({ context, width, height }) => {
    
    const radius = props.radius.value;
    svg5.clear();
    svg5.stroke('black');
    svg5.noFill();

	// Pencil thickness
    svg5.strokeWidth(5);

	// Draw Circles
    circles.forEach((circle) => {
        svg5.circle(circle.x, circle.y, radius)
    });

	// Draw Lines with a cool noise
	for(let y = fHeight/2; y <= fHeight; y += 10){
        svg5.beginShape()
        svg5.vertex(0, fHeight)
        for(let x = 0; x <= fWidth; x += 10){
            svg5.vertex(x, y + svg5.noise(x/props.frequency.value, y/props.frequency.value) * props.amplitude.value)
        }
        svg5.vertex(fWidth, fHeight)
        svg5.endShape(svg5.CLOSE)
    }

	// Important to render the SVG
    renderSVG();

};

export let resize = ({ width, height }) => {
    setSizes(width, height);
};

export let rendering = "2d";
