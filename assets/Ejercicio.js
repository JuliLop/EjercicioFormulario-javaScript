let usuarioBD = [
    {

        name: "",
        lastname: "",
        id: "",
        rh: "",
        gender: "",
        age: "",
        cellphone: "",
        sosphone: "",

    },
];

function login() {
    let name = document.getElementById("name").value
    let lastname = document.getElementById("lastname").value
    let id = document.getElementById("id").value
    let rh = document.getElementById("rh").value
    let gender = document.getElementById("gender").value
    let age = document.getElementById("age").value
    let cellphone = document.getElementById("cellphone").value
    let sosphone = document.getElementById("sosphone").value

    if (!name || !lastname || !id || !rh || !gender || !age || !cellphone || !sosphone) {
        alert("Complete los datos")
        return
    }
    if (age < 18) {
        alert("El usuario es menor de 18 años")
        return
    }
    let hoy = new Date;
    if (hoy.getDay() == 4 && gender == "M") {
        alert("No pueden entrar los hombres")
        return 
    }
    if (hoy.getDate() == 5 && gender == "F") {
        alert("No pueden entrar las mujeres")
        return 

    }
    if (gender.length > 1)
        alert("Solo se permite un caracter en genero")

    return "Bienvenido"
}



