/*global app, qs, $on */
(function (window) {
  function Dark() {
    this.enabled = false;
    this.darkModeClass = 'dark';
    this.$toggleDarkMode = qs('.toggle-dark');
    this.$body = document.body;
  }

  Dark.prototype.init = function () {
    var self = this;

    // find if dark mode is already applied
    self.enabled = self.$body.classList.contains(self.darkModeClass);
  }

  Dark.prototype.setClass = function () {
    var self = this;

    if (self.enabled) {
      self.$body.classList.remove(self.darkModeClass);
    } else {
      self.$body.classList.add(self.darkModeClass);
    }
  }

  Dark.prototype.toggle = function () {
    var self = this;

    self.enabled = !self.enabled;
    self.setClass(self.enabled);
  }

  Dark.prototype.bind = function () {
    var self = this;

    $on(self.$toggleDarkMode, 'click', function () {
      self.toggle.call(self);
    });
  }

  window.app = window.app || {};
  window.app.Dark = Dark;

  // invoke here manually
  var dark = new app.Dark();
  dark.bind();
})(window);
