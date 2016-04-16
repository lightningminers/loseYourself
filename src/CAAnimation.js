'use strict';

(function(factory) {
  var root = (typeof self == 'object' && self.self == self && self) ||
    (typeof global == 'object' && global.global == global && global);
  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = factory();
  } else if (typeof exports === 'object') {
    exports['CAAnimation'] = factory()
  } else {
    root.CAAnimation = factory();
  };
})(function() {
  var CAAnimation = function(options) {
    this.options = options;
    if (!options.id) {
      console.log('请指定动画的容器元素');
    };
    this.isShowed = false;
    this.element = document.getElementById(options.id);
    this.elementComputedStyle = window.getComputedStyle(this.element, null);
    this.options.duration = options.duration || 400;
    this.options.timingFunction = options.timingFunction || 'ease-out';
    this.options.keyPath = options.keyPath || 'slateY';
    this.element.classList.add('visibility-control');
    var self = this;
    this.handler = function(e) {
      if (e.type === 'scroll') {
        console.log('12');
      } else if (e.type === 'webkitTransitionEnd') {
        if (!self.isShowed) {
          self.element.classList.add('control');
        }
      }
      e.preventDefault();
      e.stopPropagation();
    }
    window.addEventListener('scroll', this.handler, false);
  }
  CAAnimation.createAnimation = function(options) {
    var an = new CAAnimation(options);
    return an;
  }
  CAAnimation.prototype.finish = function() {
    var self = this;
    this.isShowed = false;
    this.element.addEventListener('webkitTransitionEnd', this.handler, false);
    this.element.style.webkitTransitionTimingFunction = this.options.timingFunction;
    this.element.style.webkitTransitionDuration = this.options.duration + 'ms';
    switch (this.options.keyPath) {
      case 'slateY':
        this.element.style.webkitTransform = 'translate3d(0, 0, 0)';
        break;
    }
  }
  CAAnimation.prototype.start = function() {
    this.isShowed = true;
    this.element.classList.remove('control');
    this.element.classList.remove('visibility-control');
    this.element.removeEventListener('webkitTransitionEnd', this.handler, false);
    this.element.style.webkitTransitionTimingFunction = this.options.timingFunction;
    this.element.style.webkitTransitionDuration = this.options.duration + 'ms';
    switch (this.options.keyPath) {
      case 'slateY':
        this.element.style.webkitTransform = 'translate3d(0, -' + this.elementComputedStyle.height + ', 0)';
        this.element.style.top = window.innerHeight + window.pageYOffset + 'px';
        this.element.style.webkitTransitionProperty = '-webkit-transform';
        break;
    }
  }
  CAAnimation.prototype.removeEvent = function() {
    this.element.removeEventListener('webkitTransitionEnd', this.handler, false);
    window.removeEventListener('scroll', this.handler, false);
  }

  return CAAnimation;
});
