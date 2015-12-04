//singleton instance object...
module.exports = (function () {
  var instance;

  function createRepositoryObject() {
      return {
        set: function (key, value) {
          window.localStorage.setItem(key, value);
        },
        get: function (key) {
          return window.localStorage.getItem(key);
        }
      };
  };

  return {
    // get instance of Repository
    getInstance: function () {
      // if instance doesn't already exist - create
      if (!instance) {
        instance = createRepositoryObject();
      }
      // otherwise, return reference to existing instance
      return instance;
    }
  };

})();
