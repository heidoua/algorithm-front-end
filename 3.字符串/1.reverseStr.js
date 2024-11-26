const str = '1234567'
console.log(reverseStr(str))

function reverseStr(str) {
  return str.split('').reverse().join('')
}

function reverseStr(str) {
  let newStr = ''
  
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }

  return newStr
}

function reverseStr(str) {
  return str.split('').reduceRight((pre, cur) => pre + cur)
}