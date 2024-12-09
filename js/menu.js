function mostrarHeader() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").classList.add("show");
      } else {
        document.getElementById("header").classList.remove("show");
      }
      prevScrollpos = currentScrollPos;
    }
  }
  
  window.onload = function() {
    mostrarHeader();
    document.getElementById("header").classList.add("show");
  };
  
function mostrarHeader() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").classList.add("show");
      } else {
        document.getElementById("header").classList.remove("show");
      }
      prevScrollpos = currentScrollPos;
    }
  }
  
  window.onload = function() {
    mostrarHeader();
    document.getElementById("header").classList.add("show");
  };
  