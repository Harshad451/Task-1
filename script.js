document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector('nav');

    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'red';
      } else {
        navbar.style.backgroundColor = '#333';
      }
    });
  
    var menuItems = document.querySelectorAll('.link a');
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('mouseover', function() {
        this.style.color = '#ff9900';
      });
  
      menuItems[i].addEventListener('mouseout', function() {
        this.style.color = '#fff';
      });
    }
  });
  