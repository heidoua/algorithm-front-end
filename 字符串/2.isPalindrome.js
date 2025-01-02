const str = '11'
console.log(isPalindrome(str))

function isPalindrome(str) {
  return str.split('').reverse().join('') === str
}

function isPalindrome(str) {
  for (let i = 0, len = str.length; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false
    }
  }

  return true
}