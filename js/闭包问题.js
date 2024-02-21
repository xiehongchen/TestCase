/**
 * 闭包问题
 */
function func () {
  const a = '123'
  function func1 () {
    console.log(a)
  }
  return func1
}
const fn = func()
fn()
