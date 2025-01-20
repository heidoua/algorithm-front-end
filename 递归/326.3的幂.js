/*
326. 3 的幂

给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。

整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3x

示例 1：

输入：n = 27
输出：true

示例 2：

输入：n = 0
输出：false

示例 3：

输入：n = 9
输出：true

示例 4：

输入：n = 45
输出：false

提示：

    -231 <= n <= 231 - 1

进阶：你能不使用循环或者递归来完成本题吗？

https://leetcode.cn/problems/power-of-three/description/
*/

function isPowerOfThree(n) {
  if (n === 1) return true;
  if (n % 3 !== 0 || n === 0) return false;
  if (n % 3 === 0) return isPowerOfThree(n / 3);
}

/*
2^31-1 = 2147483647
3^20 = 3486784400
所以从数据范围来说 k 最大只能是 19

如果 n 是 3 的幂，即 n=3^k，那么在本题的数据范围下，3^k 必然是 3^19=1162261467 的因子。

如果 n 不是 3 的幂，即 n=3^k⋅m，n 的质因子分解中必然包含其他不等于 3 的质数，所以 3^k⋅m 必然不是 3^19 的因子。（注意 3^19 的因子只能是 3 的幂）

作者：灵茶山艾府
链接：https://leetcode.cn/problems/power-of-three/solutions/2974674/o1-shu-xue-zuo-fa-yi-xing-gao-ding-pytho-w0uh/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
function isPowerOfThree(n) {
  return n > 0 && 1162261467 % n === 0;
}
