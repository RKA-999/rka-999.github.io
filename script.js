function createSilverChart(labels, data) {
    const ctxSilver = document.getElementById('silverPriceChart').getContext('2d');
    new Chart(ctxSilver, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: ' ২২ ক্যাঃ রূপার মূল্য বৃদ্ধি (টাকা)',
          data: data,
          borderColor: 'rgba(158, 158, 158, 1)', // Silver Color
          backgroundColor: 'rgba(158, 158, 158, 0.4)',
          fill: true,
          tension: 0.2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
          min: 1000,
          max: 6000,
            title: { display: true, text: 'মূল্য (টাকা/ভরি)' }
          },
          x: {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 7
            }
          }
        }
      }
    });
  }
  
});








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
