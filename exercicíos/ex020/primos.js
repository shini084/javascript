let primos = [2]
   
let num = 0
n = primos.length
max = primos[n-1]
max = Number(max)

while (true){
    num++
    let control = 0
    for(let pos in primos){
        if (num % primos[pos] == 0){
            control++
        }
    }
    if (control == 0  && num !=1){
        primos.push(num)
        console.log(num)
    }
}