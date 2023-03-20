function multi(a, b) {
    //if(isNaN(a)&&isNaN(b)){
    if (typeof a == 'number' && typeof b == 'number') {
        return a * b;

    } else {
        return "Not Number"
    }

}

// return constructor 
module.exports = multi;