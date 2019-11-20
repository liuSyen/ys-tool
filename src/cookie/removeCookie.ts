let setCookies = require('./setCookie')
/**
 *
 * @desc 根据name删除cookie
 * @param  {String} name
 */
function removeCookie(name: string): void {
  // 设置已过期，系统会立刻删除cookie
  setCookies(name, '1', -1)
}

export default removeCookie
