let numeroDigitado = prompt('Digite um número para verificar se ele pertence à sequência de Fibonacci');

let fibonacci = false;

let soma = 0
let anterior = 0
let proximo = 1

while (soma < Number(numeroDigitado)) {
    soma = anterior + proximo
    anterior = proximo
    proximo = soma
    if (soma === Number(numeroDigitado)) {
        fibonacci = true;
    }
}

if (fibonacci) {
   document.write(`O número ${Number(numeroDigitado)} pertence à sequência de Fibonacci`)

} else {
    document.write(`O número ${Number(numeroDigitado)} não pertence à sequência de Fibonacci`)
}
