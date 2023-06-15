function loadSum() {

    let number1 = document.getElementById("ingreso1")

    let number2 = document.getElementById("ingreso2")

    let suma = Number(number1.value) + Number(number2.value)

    let total = document.getElementById("total")

    total.value = suma

}