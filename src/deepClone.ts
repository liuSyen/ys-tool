function deepClone (val:object):object {
  val = JSON.parse(JSON.stringify(val))
  return val
}

export default deepClone
