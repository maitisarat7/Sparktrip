window.addEventListener('scroll', function() {
    var navigationmenu = document.getElementById('navigationmenu');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > 0) {
      navigationmenu.classList.add('scroll');
    } else {
      navigationmenu.classList.remove('scroll');
    }
  });
  


 