// Better scroll events

export function onScroll(cb) {
  var isTicking = false;
  var scrollY = 0;
  var body = document.body;
  var html = document.documentElement;
  var scrollHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  function scroll() {
    scrollY = window.scrollY;
    if (cb) cb(scrollY, scrollHeight);
    requestTick();
  }
  function requestTick() {
    if (!isTicking) requestAnimationFrame(updateScroll);
    isTicking = true;
  }
  function updateScroll() {
    isTicking = false;
    var currentScrollY = scrollY;
  }
  scroll();
  window.onscroll = scroll;
}

// Scroll to element

export function scrollToElement(el, offset) {
  var off = offset || 0;
  var rect = el.getBoundingClientRect();
  var top = rect.top + off;
  var animation = anime({
    targets: [document.body, document.documentElement],
    scrollTop: '+='+top,
    easing: 'easeInOutSine',
    duration: 1500
  });
  // onScroll(animation.pause);
}

// Check if element is in viewport

export function isElementInViewport(el, inCB, outCB, rootMargin) {
  var margin = rootMargin || '-10%';
  function handleIntersect(entries, observer) {
    var entry = entries[0];
    if (entry.isIntersecting) {
      if (inCB && typeof inCB === 'function') inCB(el, entry);
    } else {
      if (outCB && typeof outCB === 'function') outCB(el, entry);
    }
  }
  var observer = new IntersectionObserver(handleIntersect, {rootMargin: margin});
  observer.observe(el);
}

export function fitElementToParent(el, padding, exception) {
  let windowWidth = 0;
  let timeout = 0;
  function resize() {
    anime.set(el, {scale: 1});
    if (exception) anime.set(exception, {scale: 1});
    var pad = padding || 0;
    var parentEl = el.parentNode;
    var elOffsetWidth = el.offsetWidth - pad;
    var parentOffsetWidth = parentEl.offsetWidth;
    var ratio = parentOffsetWidth / elOffsetWidth;
    var invertedRatio = elOffsetWidth / parentOffsetWidth;
    anime.set(el, {scale: ratio});
    if (exception) anime.set(exception, {scale: invertedRatio});
  }
  resize();
  window.addEventListener('resize', function() {
    if (window.innerWidth === windowWidth) return;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      windowWidth = window.innerWidth;
      resize();
    }, 15);
  });
}
