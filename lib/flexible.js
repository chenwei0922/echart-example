(function(window, document){
  var docEl = document.documentElement
  //获取设备的dpr，即当前设置下物理像素与虚拟像素的比值
  var dpr = window.devicePixelRatio || 1

  function setBodyFontSize(){
    if(document.body){
      document.body.style.fontSize = (12 * dpr) + 'px'
    }else{
      document.addEventListener('DomContentLoaded', setBodyFontSize)
    }
  };
  setBodyFontSize()

  //设置1rem = vw / 24
  //当设计稿为1920/24=80
  function setRemUnit(){
    var rem = docEl.clientWidth / 24
    docEl.style.fontSize = rem + "px"
  }
  setRemUnit()

  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports  检测是否支持0.5像素，解决1px在高清屏多像素问题，需要css的配合。
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }

})(window, document)