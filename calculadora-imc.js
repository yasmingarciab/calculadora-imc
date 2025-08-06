    let p = 60
    let alt = 1.60
    
    const imc = p/(alt*alt);

    if (imc < 18.5){
        console.log("Abaixo do peso")
    } else if (imc > 18.5 && imc < 24.9){
        console.log("Peso ideal")
    } else if (imc > 24.9 && imc < 30){
        console.log("Obesidade grau 1")
    } else if (imc > 30 && imc < 35){
        console.log("Obesidade grau 2")
    } else {
        console.log("Obesidade grau 3")

    }
