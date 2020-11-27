var picIndex = 0
showPic(picIndex)
showPic2(picIndex)
showPic3(picIndex)
showPic4(picIndex)
showPic5(picIndex)

function currentPic(n) {
  showPic(picIndex = n)
}

function currentPic2(n) {
  showPic2(picIndex = n)
}

function currentPic3(n) {
  showPic3(picIndex = n)
}

function currentPic4(n) {
  showPic4(picIndex = n)
}

function currentPic5(n) {
  showPic5(picIndex = n)
}

function showPic(n) {
  var i
  var slides = document.getElementsByClassName("bigPic")
  var border = document.getElementsByClassName("pic")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < border.length; i++) {
    border[i].className = border[i].className.replace(" active1", "")
  }
  slides[n].style.display = "table"
  border[n].className += " active1"
}

function showPic2(n) {
  var i
  var slides = document.getElementsByClassName("bigPic2")
  var border = document.getElementsByClassName("pic2")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < border.length; i++) {
    border[i].className = border[i].className.replace(" active1", "")
  }
  slides[n].style.display = "table"
  border[n].className += " active1"
}

function showPic3(n) {
  var i
  var slides = document.getElementsByClassName("bigPic3")
  var border = document.getElementsByClassName("pic3")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < border.length; i++) {
    border[i].className = border[i].className.replace(" active1", "")
  }
  slides[n].style.display = "table"
  border[n].className += " active1"
}

function showPic4(n) {
  var i
  var slides = document.getElementsByClassName("bigPic4")
  var border = document.getElementsByClassName("pic4")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < border.length; i++) {
    border[i].className = border[i].className.replace(" active1", "")
  }
  slides[n].style.display = "table"
  border[n].className += " active1"
}

function showPic5(n) {
  var i
  var slides = document.getElementsByClassName("bigPic5")
  var border = document.getElementsByClassName("pic5")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < border.length; i++) {
    border[i].className = border[i].className.replace(" active1", "")
  }
  slides[n].style.display = "table"
  border[n].className += " active1"
}