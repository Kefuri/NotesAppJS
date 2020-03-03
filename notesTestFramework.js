const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp == assertion) {
      console.log("Asserted: "+ assertion)
      console.log("Got" + exp)
      console.log('pass')
      return true
    } else {
      console.log('Asserted: '+ assertion)
      console.log('Got:' + exp)
      console.log('fail')
      return false
    }
  }
 })

const expect = (exp) => matchers(exp)
