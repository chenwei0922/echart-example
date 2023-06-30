import { bar1, bar2 } from './bar'
import { line1, line2 } from './line'
import { pie1, pie2 } from './pie'

window.onload = function () {
  startTime()

  bar1()
  bar2()

  line1()
  line2()

  pie1()
  pie2()
}

const startTime = () => {
  const time = () => {
    timer && clearInterval(timer)
    const d = new Date()
    const message = `当前时间：${d.getFullYear()}年${
      d.getMonth() + 1
    }月${d.getDate()}日${d.getHours()}时${d.getMinutes()}分${d.getSeconds()}秒`
    document.querySelector('.showTime')!.innerHTML = message
  }
  const timer = setInterval(time, 1000)
}
