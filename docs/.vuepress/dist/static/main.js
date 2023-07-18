// 全站统一脚本
;(function() {


// 节流
function throttle(func, wait, options = {}) {
  var timeout = null
  var previous = 0, now, context,args
  var later = function() {
    previous = options.leading === false ? 0 : +new Date(); // 每次都初始化为0
    timeout = null
    func.apply(context, args)
  }

  var throttled = function(func, wait) {
    var now = +new Date();
    context = this
    args = arguments
    if(!previous && options.leading === false) {
      previous = now // 有了这一步，第一次就会直接走setTimeout了
    }
    var remaining = wait - (now - previous)
    if(remaining <= 0 || remaining > wait) {
      if(timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now;
      func.apply(context, args)
    } else if(!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
  }

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  }
  return throttled
}


var navbar
/*=======================导航条跟随页面滚动透明度变化===============================*/
document.addEventListener('scroll', throttle(function(e) {
  navbar = navbar || document.getElementsByClassName('navbar')[0]
  if(document.documentElement.scrollTop === 0) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.4)' //'transparent'
  } else {
    navbar.style.backgroundColor = '#26282c'
  }
}))






}())