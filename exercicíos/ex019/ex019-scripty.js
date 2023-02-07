function tabuada() {
    let numtxt = document.querySelector('input#inum')
    let res = document.querySelector('div#resultado')

    if (numtxt.value.length == 0){
        window.alert('por favor insira um número')
    } else{
        let n = Number(numtxt.value)
        res.innerHTML = ''
        for (c=1; c<=10; c++){
            res.innerHTML += `${n} x ${c} = ${n*c} <br>`
        }
    }
}