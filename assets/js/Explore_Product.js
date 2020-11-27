var sort=document.getElementsByClassName("sort")
var kategori1=document.getElementsByClassName("kategori")
var kategori2=document.getElementsByClassName("product-category")
var chair=document.getElementsByClassName("chair")
var setD=document.getElementsByClassName("setD")
var ganti=document.getElementById("ganti")
var search=document.getElementById("pSearch")
var beigeWB=document.getElementById("beigeWB")
var setCD=document.getElementById("setCD")
var brownW=document.getElementById("brownW")
var minimalistS=document.getElementById("minimalistS")
var vintageF=document.getElementById("vintageF")
var beibehag=document.getElementById("beibehag")
var blueSS=document.getElementById("blueSS")
var georgeusS=document.getElementById("georgeusS")

function tampilSemua(){
    for(i=0;i<sort.length;i++){ sort[i].style.display="inline" }
    ganti.innerHTML="ALL"+"&emsp;"
    ganti.style.fontSize="16pt"
}

function tampilKategori(n){
    var variable1=kategori1[n].innerHTML
    for(i=0;i<sort.length;i++){
        var variable2=kategori2[i].innerHTML
        if(variable1==variable2){
            sort[i].style.display="inline"
            ganti.innerHTML= variable1 + "&emsp;"
            if(n==1){ ganti.style.fontSize="12pt" } 
            else{ ganti.style.fontSize="16pt" }
        } else{
            sort[i].style.display="none"
        }
    }
}

function tampilSearch(){
    var valSearch=search.value
    if(valSearch=="beige wooden bar"|| valSearch=="Beige Wooden Bar"){
        for(i=0;i<sort.length;i++) { sort[i].style.display="none" }
        beigeWB.style.display="inline"
    } else if(valSearch=="set couple dinner"||valSearch=="Set Couple Dinner"){ 
        for(i=0;i<sort.length;i++){ sort[i].style.display="none" }
        setCD.style.display="inline"
    }else if(valSearch=="brown wooden"||valSearch=="Brown Wooden"){ 
        for(i=0;i<sort.length;i++){ sort[i].style.display="none" }
        brownW.style.display="inline"
    }else if(valSearch=="minimalist style"||valSearch=="Minimalist Style"){ 
        for(i=0;i<sort.length;i++){ sort[i].style.display="none" }
        minimalistS.style.display="inline"
    }else if(valSearch=="vintage floral"||valSearch=="Vintage Floral"){ 
        for(i=0;i<sort.length;i++){ sort[i].style.display="none" }
        vintageF.style.display="inline"
    }else if(valSearch=="beibehag"||valSearch=="Beibehag"){ 
        for(i=0;i<sort.length;i++){ sort[i].style.display="none" }
        beibehag.style.display="inline"
    }else if(valSearch=="blue small sofa"||valSearch=="Blue Small Sofa"){ 
        for(i=0;i<sort.length;i++){ sort[i].style.display="none" }
        blueSS.style.display="inline"
    }else if(valSearch=="georgeus style"||valSearch=="Georgeus Style"){ 
        for(i=0;i<sort.length;i++){ sort[i].style.display="none" }
        georgeusS.style.display="inline"
    }else if(valSearch=="chair"||valSearch=="Chair"){ 
        for(i=0;i<sort.length;i++){ sort[i].style.display="none" }
        for(i=0;i<chair.length;i++){ chair[i].style.display="inline"}
    }else if(valSearch=="set dinner"||valSearch=="Set Dinner"){ 
        for(i=0;i<sort.length;i++){ sort[i].style.display="none" }
        for(i=0;i<setD.length;i++){ setD[i].style.display="inline"}
    } else{
        for(i=0;i<sort.length;i++){ sort[i].style.display="inline" }
    }
}
search.oninput=tampilSearch