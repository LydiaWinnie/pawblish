// 數據統計動畫
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// 添加數據統計區塊
function addStatsSection() {
  const statsSection = document.createElement('section');
  statsSection.className = 'max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8';
  statsSection.innerHTML = `
    <div class="text-center p-6 bg-white rounded-xl shadow-lg card-hover" data-aos="fade-up">
      <h3 class="text-2xl font-bold mb-2">📊 總瀏覽量</h3>
      <p class="text-4xl font-bold text-[#f582ae]" id="totalViews">0</p>
    </div>
    <div class="text-center p-6 bg-white rounded-xl shadow-lg card-hover" data-aos="fade-up" data-aos-delay="100">
      <h3 class="text-2xl font-bold mb-2">👥 粉絲數</h3>
      <p class="text-4xl font-bold text-[#8bd3dd]" id="totalFollowers">0</p>
    </div>
    <div class="text-center p-6 bg-white rounded-xl shadow-lg card-hover" data-aos="fade-up" data-aos-delay="200">
      <h3 class="text-2xl font-bold mb-2">💬 互動率</h3>
      <p class="text-4xl font-bold text-[#f3d2c1]" id="engagementRate">0</p>
    </div>
  `;
  
  // 在功能特色區之前插入統計區塊
  const featuresSection = document.querySelector('.max-w-7xl');
  featuresSection.parentNode.insertBefore(statsSection, featuresSection);
  
  // 啟動數字動畫
  setTimeout(() => {
    animateValue(document.getElementById('totalViews'), 0, 12345, 2000);
    animateValue(document.getElementById('totalFollowers'), 0, 5678, 2000);
    animateValue(document.getElementById('engagementRate'), 0, 89, 2000);
  }, 1000);
}

// 添加互動式圖表
function addInteractiveChart() {
  const chartSection = document.createElement('section');
  chartSection.className = 'max-w-7xl mx-auto py-12 px-6';
  chartSection.innerHTML = `
    <div class="bg-white rounded-xl p-6 shadow-lg" data-aos="fade-up">
      <h3 class="text-2xl font-bold mb-4">📈 流量趨勢圖</h3>
      <canvas id="trafficChart" class="w-full h-64"></canvas>
    </div>
  `;
  
  // 在統計區塊之後插入圖表
  const statsSection = document.querySelector('.max-w-7xl');
  statsSection.parentNode.insertBefore(chartSection, statsSection.nextSibling);
  
  // 初始化圖表
  const ctx = document.getElementById('trafficChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
      datasets: [{
        label: '瀏覽量',
        data: [1200, 1900, 3000, 5000, 4000, 6000],
        borderColor: '#f582ae',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      interaction: {
        intersect: false,
        mode: 'index'
      }
    }
  });
}

// 頁面載入完成後初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
  addStatsSection();
  addInteractiveChart();
  
  // 添加滾動監聽
  window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        card.classList.add('active');
      }
    });
  });
}); 