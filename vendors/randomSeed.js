import seedImport from './seed.js';
import { createNoise2D, createNoise3D, createNoise4D } from 'simplex-noise';

export class randomSeed {
    
    constructor(defaultSeed = null) {
        defaultSeed = defaultSeed;
        this.defaultRandom = Math.random;
        this.currentSeed;
        this.currentRandom;
        this.noise2DGenerator,
        this.noise3DGenerator,
        this.noise4DGenerator;
        this._nextGaussian = null;
        this._hasNextGaussian = false;

        this.setSeed(this.defaultSeed);
    }

    setSeed (seed, opt) {
        if (typeof seed === 'number' || typeof seed === 'string') {
            this.currentSeed = seed;
            this.currentRandom = new seedImport(this.currentSeed, opt);
        } else {
            this.currentSeed = undefined;
            this.currentRandom = this.defaultRandom;
        }
        this.noise2DGenerator = this.createNoise2D();
        this.noise3DGenerator = this.createNoise3D();
        this.noise4DGenerator = this.createNoise4D();
        this._nextGaussian = null;
        this._hasNextGaussian = false;
    }

    value () {
        return this.currentRandom();
    }

    valueNonZero () {
        var u = 0;
        while (u === 0) u = this.value();
        return u;
    }

    getSeed () {
        return currentSeed;
    }

    getRandomSeed () {
        var seed = String(Math.floor(Math.random() * 1000000));
        return seed;
    }

    createNoise2D () {
        return new createNoise2D(this.currentRandom);
}

    createNoise3D () {
        return new createNoise3D(this.currentRandom);
    }

    createNoise4D () {
        return new createNoise4D(this.currentRandom);
    }

    permuteNoise2D () {
        this.noise2DGenerator = createNoise2D();
    }
    permuteNoise3D () {
        this.noise3DGenerator = createNoise3D();
    }
    permuteNoise4D () {
        this.noise4DGenerator = createNoise4D();
    }

    noise1D (x, frequency, amplitude) {
        if (!isFinite(x)) throw new TypeError('x component for noise() must be finite');
        frequency = (frequency != undefined) ? frequency : 1;
        amplitude = (amplitude != undefined) ? amplitude : 1;
        return amplitude * this.noise2DGenerator(x * frequency, 0);
    }

    noise2D (x, y, frequency, amplitude) {
        if (!isFinite(x)) throw new TypeError('x component for noise() must be finite');
        if (!isFinite(y)) throw new TypeError('y component for noise() must be finite');
        frequency = (frequency != undefined) ? frequency : 1;
        amplitude = (amplitude != undefined) ? amplitude : 1;
        return amplitude * this.noise2DGenerator(x * frequency, y * frequency);
    }

    noise3D (x, y, z, frequency, amplitude) {
        if (!isFinite(x)) throw new TypeError('x component for noise() must be finite');
        if (!isFinite(y)) throw new TypeError('y component for noise() must be finite');
        if (!isFinite(z)) throw new TypeError('z component for noise() must be finite');
        frequency = (frequency != undefined) ? frequency : 1;
        amplitude = (amplitude != undefined) ? amplitude : 1;
        return amplitude * this.noise3DGenerator(
        x * frequency,
        y * frequency,
        z * frequency
        );
    }

    noise4D (x, y, z, w, frequency, amplitude) {
        if (!isFinite(x)) throw new TypeError('x component for noise() must be finite');
        if (!isFinite(y)) throw new TypeError('y component for noise() must be finite');
        if (!isFinite(z)) throw new TypeError('z component for noise() must be finite');
        if (!isFinite(w)) throw new TypeError('w component for noise() must be finite');
        frequency = (frequency != undefined) ? frequency : 1;
        amplitude = (amplitude != undefined) ? amplitude : 1;
        return amplitude * this.noise4DGenerator(
        x * frequency,
        y * frequency,
        z * frequency,
        w * frequency
        );
    }

    sign () {
        return boolean() ? 1 : -1;
    }

    boolean () {
        return value() > 0.5;
    }

    chance (n) {
        n = (n != undefined) ? n : 0.5;
        if (typeof n !== 'number') throw new TypeError('expected n to be a number');
        return value() < n;
    }

    range (min, max) {
        if (max === undefined) {
        max = min;
        min = 0;
        }

        if (typeof min !== 'number' || typeof max !== 'number') {
        throw new TypeError('Expected all arguments to be numbers');
        }

        return value() * (max - min) + min;
    }

    rangeFloor (min, max) {
        if (max === undefined) {
        max = min;
        min = 0;
        }

        if (typeof min !== 'number' || typeof max !== 'number') {
        throw new TypeError('Expected all arguments to be numbers');
        }

        return Math.floor(range(min, max));
    }

    pick (array) {
        if (array.length === 0) return undefined;
        return array[rangeFloor(0, array.length)];
    }

    shuffle (arr) {
        if (!Array.isArray(arr)) {
        throw new TypeError('Expected Array, got ' + typeof arr);
        }

        var rand;
        var tmp;
        var len = arr.length;
        var ret = arr.slice();
        while (len) {
        rand = Math.floor(value() * len--);
        tmp = ret[len];
        ret[len] = ret[rand];
        ret[rand] = tmp;
        }
        return ret;
    }

    onCircle (radius, out) {
        radius = (radius != undefined) ? radius : 1;
        out = out || [];
        var theta = value() * 2.0 * Math.PI;
        out[0] = radius * Math.cos(theta);
        out[1] = radius * Math.sin(theta);
        return out;
    }

    insideCircle (radius, out) {
        radius = (radius != undefined) ? radius : 1;
        out = out || [];
        onCircle(1, out);
        var r = radius * Math.sqrt(value());
        out[0] *= r;
        out[1] *= r;
        return out;
    }

    onSphere (radius, out) {
        radius = (radius != undefined) ? radius : 1;
        out = out || [];
        var u = value() * Math.PI * 2;
        var v = value() * 2 - 1;
        var phi = u;
        var theta = Math.acos(v);
        out[0] = radius * Math.sin(theta) * Math.cos(phi);
        out[1] = radius * Math.sin(theta) * Math.sin(phi);
        out[2] = radius * Math.cos(theta);
        return out;
    }

    insideSphere (radius, out) {
        radius = (radius != undefined) ? radius : 1;
        out = out || [];
        var u = value() * Math.PI * 2;
        var v = value() * 2 - 1;
        var k = value();

        var phi = u;
        var theta = Math.acos(v);
        var r = radius * Math.cbrt(k);
        out[0] = r * Math.sin(theta) * Math.cos(phi);
        out[1] = r * Math.sin(theta) * Math.sin(phi);
        out[2] = r * Math.cos(theta);
        return out;
    }

    quaternion (out) {
        out = out || [];
        var u1 = value();
        var u2 = value();
        var u3 = value();

        var sq1 = Math.sqrt(1 - u1);
        var sq2 = Math.sqrt(u1);

        var theta1 = Math.PI * 2 * u2;
        var theta2 = Math.PI * 2 * u3;

        var x = Math.sin(theta1) * sq1;
        var y = Math.cos(theta1) * sq1;
        var z = Math.sin(theta2) * sq2;
        var w = Math.cos(theta2) * sq2;
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = w;
        return out;
    }

    weightedSet (set) {
        set = set || [];
        if (set.length === 0) return null;
        return set[weightedSetIndex(set)].value;
    }

    weightedSetIndex (set) {
        set = set || [];
        if (set.length === 0) return -1;
        return weighted(set.map((s) => {
        return s.weight;
        }));
    }

    weighted (weights) {
        weights = weights || [];
        if (weights.length === 0) return -1;
        var totalWeight = 0;
        var i;

        for (i = 0; i < weights.length; i++) {
        totalWeight += weights[i];
        }

        if (totalWeight <= 0) throw new Error('Weights must sum to > 0');

        var random = value() * totalWeight;
        for (i = 0; i < weights.length; i++) {
        if (random < weights[i]) {
            return i;
        }
        random -= weights[i];
        }
        return 0;
    }

    gaussian (mean, standardDerivation) {
        mean = (mean != undefined) ? mean : 0;
        standardDerivation = (standardDerivation != undefined) ? standardDerivation : 1;

        // https://github.com/openjdk-mirror/jdk7u-jdk/blob/f4d80957e89a19a29bb9f9807d2a28351ed7f7df/src/share/classes/java/util/Random.java#L496
        if (this._hasNextGaussian) {
        this._hasNextGaussian = false;
        var result = this._nextGaussian;
        this._nextGaussian = null;
        return mean + standardDerivation * result;
        } else {
        var v1 = 0;
        var v2 = 0;
        var s = 0;
        do {
            v1 = value() * 2 - 1; // between -1 and 1
            v2 = value() * 2 - 1; // between -1 and 1
            s = v1 * v1 + v2 * v2;
        } while (s >= 1 || s === 0);
        var multiplier = Math.sqrt(-2 * Math.log(s) / s);
        this._nextGaussian = (v2 * multiplier);
        this._hasNextGaussian = true;
        return mean + standardDerivation * (v1 * multiplier);
        }
    }
}
