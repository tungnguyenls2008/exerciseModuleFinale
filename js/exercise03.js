function isFibonacci(num) {
    console.log(num);
    let fibonacciSequence = [0, 1];
    for (let i = 0; i < 500; i++) {
        fibonacciSequence.push(fibonacciSequence[i] + fibonacciSequence[i + 1]);
        if (num === fibonacciSequence[i]) {
            document.getElementById('display').innerHTML = num + " is a Fibonacci number.";
            break;
        } else document.getElementById('display').innerHTML = num + " is NOT a Fibonacci number.";

    }
    console.log(fibonacciSequence);
}
