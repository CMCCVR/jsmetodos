
var carro = new Object();

    carro.Modelo = 'Uno';
    carro.Ano = 1999;
    carro.pneu = 'Pirreli';
    carro.transmissao = 'CVT'

// exibe o objeto com todos os atributos e valores, 
//ex: { Modelo: 'Uno', Ano: 1999, pneu: 'Pirreli', transmissao: 'CVT' }
console.log(carro)

// Lista todos os nomes dos atributos dos objetos
console.log(Object.keys(carro))

// Lista todos os valores de todos dos atributos dos objetos
console.log(Object.values(carro))