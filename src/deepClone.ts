function deepClone<T> (val: T) {
  val = JSON.parse(JSON.stringify(val))
  return val
}

export default deepClone
