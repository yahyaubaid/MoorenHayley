var komen=document.getElementById("textarea")
var hasilKomen=document.getElementById("hasil-komen")
var komenan=document.getElementById("komenan")
var i=0
/*var valKomen=komen.value
komen.value=""
komenan[i].innerHTML=valKomen
hasilKomen[i].style.display="block"*/

function komentar(){
    if (komen.value!="") {
        if (i==0) {
            var valKomen=komen.value
            komen.value=""
            komenan.innerHTML=valKomen
            hasilKomen.style.display="block"
            i=i+1
        } else if(i>0){
            var clone=hasilKomen.cloneNode(true)
            var valKomen=komen.value
            komen.value=""
            komenan.innerHTML=valKomen
            clone.style.display="block"
            var body=document.querySelector("container")
            body.appendChild(clone)
            body.insertBefore(clone,body.childNodes[10])
        }
    }
}