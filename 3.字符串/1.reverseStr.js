const str = '123'
console.log(reverseStr(str))

function reverseStr(str) {
  return str.split('').reverse().join('')
}
