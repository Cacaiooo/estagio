function pertenceFibonacci(numero) {
    let a = 0, b = 1;
    while (a <= numero) {
        if (a === numero) return true;
        [a, b] = [b, a + b];
    }
    return false;
}

const numero = 45;
if (pertenceFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
