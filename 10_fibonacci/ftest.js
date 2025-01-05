function fib(indx) {
    seq = [0, 1];
    if (indx > 1)
    {
        for (let i = 2; i < indx + 1; i++) {
            seq.push(seq[i-2] + seq[i-1]);
        }
    }

    return seq[indx];

}

n = fib(15);
console.log(n);