    // scroll up button
     
    var scrollButton = document.getElementById("scrollUpButton");


    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {

      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    }

    scrollButton.onclick = function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }


// PWA অটো-রিফ্রেশ
window.addEventListener('load', function() {
    if (!sessionStorage.getItem('pwa_auto_reloaded')) {
        sessionStorage.setItem('pwa_auto_reloaded', 'true');
        location.reload();
    }
});
