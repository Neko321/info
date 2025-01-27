function idos(){
    let kor = parseInt(document.getElementById("age").value)
    let form = document.getElementById("idose")
    let kod = ""
    if(kor < 18)
        kod += 'Felnőttnek kell lenni a jelentkezéshez'
    else kod += 'Köszönjük a jelentkezést'
    form.innerHTML = kod
}