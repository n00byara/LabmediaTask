const arr = '1 15 3 4 -5'.split(' ').sort((a,b) => {return a - b})
console.log(`${arr[arr.at(-1)} ${arr[0]}`)
