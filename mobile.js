var myBtnm_14 = document.getElementById("myBtnm_14");
var dict = [];

dict.push({
  key: "myBtnm_9",
  value: "myLi_9",
});

dict.push({
  key: "myBtnm_13",
  value: "myLi_13",
});

dict.push({
  key: "myBtnm_14",
  value: "myLi_14",
});

dict.push({
  key: "myBtnm_21",
  value: "myLi_21",
});

dict.push({
  key: "myBtnm_32",
  value: "myLi_32",
});

dict.push({
  key: "myBtnm_22",
  value: "myLi_22",
});

dict.push({
  key: "myBtnm_18",
  value: "myLi_18",
});

dict.push({
  key: "myBtnm_38",
  value: "myLi_38",
});

dict.forEach(function (item) {
  var btn = item.key;
  var li = item.value;
  document.getElementById(btn).addEventListener("click", function () {
    toggleElement(li);
  });
});

function showSlowly(id) {
  var element = document.getElementById(id);
  element.style.display = "block"; // Öğeyi göster
  var opacity = 0;
  var interval = setInterval(function () {
    opacity += 0.05; // Opaklık artış miktarı
    if (opacity >= 1) {
      opacity = 1; // Opaklık sınırını koru
      clearInterval(interval); // Animasyonu durdur
    }
    element.style.opacity = opacity; // Opaklık değerini ayarla
  }, 50); // Animasyon adım süresi (ms)
}

function toggleElement(id) {
  var element = document.getElementById(id);

  if (element.style.display === "none" || element.style.display === "") {
    // Öğeyi göster
    element.style.display = "block";
    var opacity = 0;
    var interval = setInterval(function () {
      opacity += 0.05; // Opaklık artış miktarı
      if (opacity >= 1) {
        opacity = 1; // Opaklık sınırını koru
        clearInterval(interval); // Animasyonu durdur
      }
      element.style.opacity = opacity; // Opaklık değerini ayarla
    }, 30); // Animasyon adım süresi (ms)
  } else {
    // Öğeyi gizle
    var opacity = 1;
    var interval = setInterval(function () {
      opacity -= 0.05; // Opaklık azalış miktarı
      if (opacity <= 0) {
        opacity = 0; // Opaklık sınırını koru
        clearInterval(interval); // Animasyonu durdur
        element.style.display = "none"; // Öğeyi gizle
      }
      element.style.opacity = opacity; // Opaklık değerini ayarla
    }, 30); // Animasyon adım süresi (ms)
  }
}
