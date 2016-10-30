(function() {
"use strict";

angular("MenuApp")
.component("items", {
  bindings: {
    // one way binding
    items: "<"
  }
});
})();
