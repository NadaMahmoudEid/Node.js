function Mins(a, b) {

    if (typeof a == 'number' && typeof b == 'number') {
        return a - b;

    } else {
        return "Not Number"
    }

}

// return constructor 
module.exports = Mins;