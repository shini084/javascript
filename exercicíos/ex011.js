var idade = 59
console.log(`Você tem ${idade} anos`)
if (idade > 18 && idade < 65){
    console.log('Voto Obrigatório')
} else{
    if (idade < 16){
        console.log('Não vota')
    } else{
        console.log('Voto facultativo')
    }
}