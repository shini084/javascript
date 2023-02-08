function tabuada() {
    let numtxt = document.querySelector('input#inum')
    let res = document.querySelector('div#resultado')
    let tab = document.getElementById('seltab')

    if (numtxt.value.length == 0){
        window.alert('por favor insira um número')
    } else{
        let n = Number(numtxt.value)
        res.innerHTML = ''
        tab.innerHTML = ''
        for (c=1; c<=10; c++){
            res.innerHTML += `${n} x ${c} = ${n*c} <br>`
            let item = document.createElement('option')
            item.text =  `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
    
    
}