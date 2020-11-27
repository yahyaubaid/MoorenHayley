var picIndex = 0
showPic(picIndex)

function currentPic(n) {
  showPic(picIndex = n)
}

function showPic(n) {
  var i
  var slides = document.getElementsByClassName("bigPic")
  var border = document.getElementsByClassName("pic")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < border.length; i++) {
    border[i].className = border[i].className.replace(" active", "")
  }
  slides[n].style.display = "table"
  border[n].className += " active"
}