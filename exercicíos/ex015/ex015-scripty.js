function verificar(){
    var anoNascimento = document.querySelector("input#ianoNascimento")
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var resultado = document.getElementById('iresultado')
    var idade = anoAtual - anoNascimento.value
    var sex = document.getElementsByName('sexo')
    var genero = ''
    var frase = document.getElementById('frase')
    
    if (anoNascimento.value > 1900 && anoNascimento.value < anoAtual && (sex[0].checked || sex[1].checked)){ 
        resultado.style.width = '250px'
        resultado.style.height = '250px'
        resultado.style.borderRadius = '125px'
        resultado.style.margin = '20px auto'
        if (sex[0].checked){
            genero = 'Homem'
            if (idade <= 10){
                resultado.innerHTML = '<img src="imagens/crianca-menino.jpg" alt="">'
            } else if (idade <= 21){
                resultado.innerHTML = '<img src="imagens/joven-homem.jpg" alt="">'
            } else if (idade <= 50){
                resultado.innerHTML = '<img src="imagens/adulto-homem.jpg" alt="">'
            } else{
                resultado.innerHTML = '<img src="imagens/idoso-homem.jpg" alt="">'
            }
        }  else{
            genero = 'Mulher'
            if (idade <= 10){
                resultado.innerHTML = '<img src="imagens/crianca-menina.jpg" alt="">'
            } else if (idade <= 21){
                resultado.innerHTML = '<img src="imagens/joven-mulher.jpg" alt="">'
            } else if (idade <= 50){
                resultado.innerHTML = '<img src="imagens/adulto-mulher.jpg" alt="">'
            } else{
                resultado.innerHTML = '<img src="imagens/idoso-mulher.jpg" alt="">'
            }
        }
        frase.innerHTML = `Detectamos ${genero} com ${idade} anos `
        } else{
        resultado.style.fontWeight = 'bold'
        resultado.style.color = 'red'
        resultado.innerHTML = '[ALERTA]Por favor, preencha os dados corretamente!'
    }
}
