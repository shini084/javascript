function contar(){
    let ini = window.document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    } else{
        res.innerHTML = 'contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f){
            res.innerHTML = ''
            for(c=i; c<=f; c+=p){
                res.innerHTML +=  `\u{1F449} ${c} `
            }
        }else if (f <= i){             
            res.innerHTML = ''
            for(c=i; c>=f; c-=p){
                res.append(`\u{1F449} ${c} `)
            }
        }
        res.innerHTML += '\u{1F449} \u{1F3C1}'
    }
}
