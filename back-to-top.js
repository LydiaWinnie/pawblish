diff --git a/back-to-top.js b/back-to-top.js
index c2d79bb13c8c4e815991f64d69021f7d4644424b..c4180303882392c633de7cdb2f4bc098f2d2442f 100644
--- a/back-to-top.js
+++ b/back-to-top.js
@@ -1,23 +1,26 @@
 // back-to-top.js
 
-document.addEventListener("DOMContentLoaded", function() {
-    const backToTopButton = document.getElementById("backToTop");
-  
-    // 當滾動超過300px，顯示按鈕
-    window.addEventListener("scroll", () => {
-      if (window.scrollY > 300) {
-        backToTopButton.classList.remove("hidden");
-      } else {
-        backToTopButton.classList.add("hidden");
-      }
-    });
-  
-    // 點擊按鈕，平滑滾動回頂端
-    backToTopButton.addEventListener("click", () => {
-      window.scrollTo({
-        top: 0,
-        behavior: "smooth"
-      });
-    });
-  });
+document.addEventListener("DOMContentLoaded", function() {
+    const backToTopButton = document.getElementById("backToTop");
+
+    // 若頁面沒有「回到頂端」按鈕，避免執行後續程式造成錯誤
+    if (!backToTopButton) return;
+
+    // 當滾動超過300px，顯示按鈕
+    window.addEventListener("scroll", () => {
+      if (window.scrollY > 300) {
+        backToTopButton.classList.remove("hidden");
+      } else {
+        backToTopButton.classList.add("hidden");
+      }
+    });
+
+    // 點擊按鈕，平滑滾動回頂端
+    backToTopButton.addEventListener("click", () => {
+      window.scrollTo({
+        top: 0,
+        behavior: "smooth"
+      });
+    });
+  });
   
