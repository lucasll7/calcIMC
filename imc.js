function calcular() {
    var nome = document.getElementById('nome').value
    var peso = document.getElementById('peso').value
    var altura = document.getElementById('altura').value
    var resultado = document.getElementById('resultado')

    if(nome !== '' && peso !== '' && altura !== ''){
        var imc = (peso/(altura*altura)).toFixed(2)
        if(imc<18.5){
            resultado.innerHTML = `${nome}, seu IMC é ${imc}, está no nível magreza.`
        }
        if(imc >18.5 && imc <25){
            resultado.innerHTML = ` ${nome}, seu IMC é ${imc}, está no nível normal `
        }
        if(imc >25 && imc <30){
            resultado.innerHTML = `${nome} seu IMC é ${imc}, está no nível sobrepeso, obesidade grau I.`
        }
        if(imc >30 && imc <40){
            resultado.innerHTML = `${nome} seu IMC é ${imc}, está no nível obesidade grau II.`
        }
        if(imc >40){
            resultado.innerHTML = `${nome} seu IMC é ${imc}, está no nível obesidade grau III.`
        }
//-se os campos não forem digitados retornara a mensagem-//
    }else{ alert('preencha todos os campos')

        }
    }
    function limpar() {
        if(nome !== '' && peso !== '' && altura !== '' && resultado !== ''){
            nome.value = '', peso.value = '', altura.value = '', resultado.innerHTML = 'resultado'
        }
    }
