// typewriter.js

document.addEventListener("DOMContentLoaded", function() {
    const text = "從靈感到發佈，Pawblish陪你每一步！";
    const target = document.getElementById("typewriter");
    let index = 0;
  
    function type() {
      if (index < text.length) {
        target.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // 每個字出現間隔 100 毫秒
      }
    }
  
    type();
  });
  