// function replace() {
//     var nome = 'José Ângelo Stefânio Antônio         ';
//     console.log(`Nome original: ${nome}`)
//..................  remover os espaços
//     console.log(`Removendo espaços no final da linha: ${nome.trim()}`)
// }

// replace ();


function replace() {
    var nome = 'José Ângelo Stefânio Antônio         ';
    console.log(`Nome original: ${nome}`)
//.................. conta a quantidade de caracteres
    console.log(nome.length)
//.................. conta a quantidade de caracterese depois converte tudo para minusculo
console.log(nome.trim().toLowerCase())
//.................. conta a quantidade de caracterese depois converte tudo para maiuscula
console.log(nome.trim().toUpperCase())
//.................. substitui a string a ser procurada por outra, apenas no primeiro caracter 
console.log(nome.trim().replaceAll('o', 'w'))
//.................. substitui a string em todas as ocorrencias
console.log(nome.trim().replaceAll('o', 'w'))
//.................. retorna a posição do indice do array da string
console.log(nome.indexOf('elo'))
}

replace ();