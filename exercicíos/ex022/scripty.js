let numeros = []

function adicionar(){
    let numtxt = document.getElementById('inum')  
    let sel = document.getElementById('ilista')
    let num = Number(numtxt.value)

    if (numtxt.value.length == 0){
        window.alert('por favor digite um número')
    } else if (1 > num || 100 < num){
        window.alert('por favor digite um número entre 1 e 100')
    } else if (numeros.indexOf(num) != -1){
        window.alert('este número já foi adicionado')
    } else{
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado!` 
        item.value = `num ${num}`
        sel.appendChild(item)
        numeros.push(num)
    }
    
    numeros.push(numtxt)
}
