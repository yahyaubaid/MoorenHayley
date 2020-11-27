var colorPick=document.getElementsByClassName("color-pick")
var bigPic=document.getElementsByClassName("bigPic")

function pilihWarna(n){
    for(i=0;i<bigPic.length;i++){
        bigPic[i].style.display="none"
    }
    for (i = 0; i < colorPick.length; i++) {
        colorPick[i].className = colorPick[i].className.replace(" active-pick", "")
      }
    bigPic[n].style.display="block"
    colorPick[n].className+= " active-pick"
}