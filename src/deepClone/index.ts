/**
 *
 * @desc 深度克隆数组或者对象
 * @param {Array, Object}
 * @return {Array, Object}
 */
function deepClone<T>(val: T) {
  val = JSON.parse(JSON.stringify(val))
  return val
}

export default deepClone
