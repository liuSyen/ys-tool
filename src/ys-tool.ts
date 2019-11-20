import deepClone from './deepClone'
import arrayEqual from './arrayEqual'
import getCookie from './cookie/getCookie'
import setCookie from './cookie/setCookie'
import removeCookie from './cookie/removeCookie'
import getBroweser from './device/getBrowser'
import getOS from './device/getOs'

const Ystool = {
  deepClone: deepClone,
  arrayEqual: arrayEqual,
  getCookie: getCookie,
  removeCookie: removeCookie,
  setCookie: setCookie,
  getBroweser: getBroweser,
  getOS: getOS
}

export default Ystool
