//seleksi email
var email = document.getElementById('email')
// var password = document.getElementById('password')
//buat funcion untuk menjalankan event
function setGrey(){
    email.style.backgroundColor = '#d8c4ad'
}
function setWhite(){
    email.style.backgroundColor = '#fff'
}
//create method event handler
email.onfocus = setGrey
email.onblur = setWhite
email.focus()
//menggunakan addEvent Listenr
//seleksi password
var password = document.getElementById('password')
// add event Listenr
password.addEventListener('focus',function(){
    password.style.backgroundColor = '#d8c4ad'
})

password.addEventListener('blur',function(){
    password.style.backgroundColor = '#fff'
})

var formLogin = document.getElementById("formLogin")

//validasi email dan password
var btnSubmit = addEventListener('submit', function(){
    var valEmail = email.value
    var valPassword = password.value
    //cek apakah benar nilainya = admin
    if(valEmail != '' && valPassword != ''){
        if(valEmail == 'admin@gmail.com' && valPassword == 'admin'){
            alert('hello ' + valEmail)
            formLogin.setAttribute("action","index.html")
        } else {
            alert('Email/Password salah')
        }
    } else {
        alert('Tolong dilengkapi dulu ya')
    }
})