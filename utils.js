// Utility functions, random number between [min..max] range, manage seed

import { randomSeed as randomSeedInstance } from './vendors/randomSeed'
export let randomSeed = new randomSeedInstance();

export function random (min, max) {
    try {
        return fxrand() * (max - min) + min;
    } catch (error) {
        return randomSeed.value() * (max - min) + min;
    }
}

export function roundRandom (min, max) {
    return Math.ceil(random(min-1,max));
}
    
export function lerp (start, end, amt) {
    return (1 - amt) * start + amt * end
}

export function hexToRGB(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}

export function convertToRatio(value, canvasWidth, ratio = 2000) {
    return value * canvasWidth / ratio;
}