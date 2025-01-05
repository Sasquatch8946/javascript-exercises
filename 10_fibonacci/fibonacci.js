const fibonacci = function(indx) {
    seq = [0, 1];
    if (indx > 1)
    {
        for (let i = 2; i < indx + 1; i++) {
            seq.push(seq[i-2] + seq[i-1]);
        }
    }
    else if (indx < 0) {
        return "OOPS";
    }

    return seq[indx];
};

// Do not edit below this line
module.exports = fibonacci;
