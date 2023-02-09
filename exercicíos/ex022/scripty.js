let numeros = []
let fin = document.getElementById('final')
let sel = document.getElementById('ilista')

function adicionar(){
    let numtxt = document.getElementById('inum')  
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
        fin.innerHTML = ''
    }
}


function finalizar(){

    fin.innerHTML = ''
    let valor = [numeros.length, 0, 0, 0, 0]
     for(let pos in numeros){
        if (numeros[pos] > valor[1]){
            valor[1] = numeros[pos]
        }
        if (valor[2] == 0){
            valor[2] = numeros[pos]
        } else if(numeros[pos] < valor[2]){
            valor[2] = numeros[pos]
        }
        valor[3] += numeros[pos]
     }
     
     valor[4] = valor[3] / valor[0]
    
     
    let txt = [`<p>Ao todo, temos ${valor[0]} números cadastrados.</p>`, `<p>O maior valor informado foi ${valor[1]}.</p>`, `<p>o menor valor informado foi ${valor[2]}.</p>`, `<p>Somando todos os valores,temos ${valor[3]}.`, `A média dos valores digitados é ${valor[4]}.`]

    for(c=0; c<=4; c++){
        fin.innerHTML += txt[c]
    }
}


function limpar(){
    sel.innerHTML = ''
    fin.innerHTML = ''
}