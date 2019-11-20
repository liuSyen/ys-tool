let deepClone = require('./deepClone')
let arrayEqual = require('./arrayEqual')
let getCookie = require('./cookie/getCookie')
let setCookie = require('./cookie/setCookie')
let removeCookie = require('./cookie/removeCookie')
let getBroweser = require('./device/getBrowser')
let getOS = require('./device/getOs')

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
