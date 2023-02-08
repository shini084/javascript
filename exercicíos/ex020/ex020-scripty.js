let num = [9, 5, 3, 1, 7, 2, 6, 4, 8, 0]

num[10] = 11
num.push('número')
num.length


console.log(`Nosso Vetor é o ${num[5]} ele tem ${num.length} elementos`)

num.sort()

console.log(`O quinto elemento em ordem cresente nele é o ${num}`)

for(let pos = 0; pos < num.length; pos++) {
    console.log(`a posição ${pos} tem valor ${num[pos]}`)
}

for(let pos in num) {
    console.log(`a posição ${pos} tem valor ${num[pos]}`)
}

num.indexOf(3)