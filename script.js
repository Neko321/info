function idos(){
    let kor = parseInt(document.getElementById("age").value)
    let jegy = parseInt(document.getElementById("jegy").value)
    let form = document.getElementById("idose")
    let kod = ""
    if(kor < 18 && (jegy <= 1 || jegy >= 200))
        kod +='felnőttnek kell lenni a jelentkezéshez és minimum 1 vagy maximum 200 embernek lehet jegyet venni'
    else if(kor < 18)
        kod += 'Felnőttnek kell lenni a jelentkezéshez'
    else if(jegy <= 1 || jegy >= 200)
        kod +='minimum 1 vagy maximum 200 embernek lehet jegyet venni'
    else kod += 'Köszönjük a jelentkezést'
    form.innerHTML = kod
}