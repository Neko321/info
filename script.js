function idos(){
    let kor = parseInt(document.getElementById("age").value)
    let form = document.getElementById("form")
    let kod = ""
    if(kor < 18)
        kod += '<h1>Felnőtnek kell lenni a jelentkezéshez</h1>'
    form.innerHTML + kod


}