function copyClipboard() {
    let copy = document.getElementById("resposta");
    navigator.clipboard.writeText(copy.value)
    .then(() => {
        Swal.fire({
            title: 'Texto copiado com sucesso!',
            text: copy.value,
            icon: 'success',
            confirmButtonText: 'Ok'
          });
    })
    .catch(() => {
        Swal.fire({
            title: 'Falha ao copiar o texto.',
            text: copy.value,
            icon: 'error',
            confirmButtonText: 'Ok'
          });
    });

}

function textConversion(letter) {
    let resultConversion = "";
    if(letter == 'a') 
    {
        resultConversion = resultConversion + "ai";
    } else if (letter == 'e')
    {
        resultConversion = resultConversion + "enter";
    } else if (letter == 'i')
    {
        resultConversion = resultConversion + "imes";
    } else if (letter == 'o')
    {
        resultConversion = resultConversion + "ober";
    } else if (letter == 'u')
    {
        resultConversion = resultConversion + "ufat";
    } else {
        resultConversion = resultConversion + letter;
    }
	return resultConversion;
}

function checkTypeErrors(text) {
	let quantityLetters = 0;
	let quantityNumbers = 0;
	let quantityOthers = 0;
	for (let i = 0; i < text.length; i++) 
    {
        let letter = text.charAt(i);
		    if(letter >= 'A' && letter <= 'Z')
		    {
		        quantityLetters++;
		    } else if(letter >= '0' && letter <= '9')
		    {
		        quantityNumbers++;
		    } else if(letter >= '!' && letter <= '/' || letter >= ':' && letter <= '@' || letter >= ':' && letter <= '`' || letter >= '{')
		    {
		    	quantityOthers++;
		    } 
    }

    Swal.fire({
        title: 'Quantidade de Ocorrencias Não Permitidas:',
        html: '<p>' + `Letra(s) Maiuscula(s): ${quantityLetters}` + '</p><p>' + `Numero(s): ${quantityNumbers}` + '</p><p>' + `Letras com acentos ou caracteres especiais: ${quantityOthers}` + '</p>',
        icon: 'warning',
        showConfirmButton: false
      }).then(() => {
        Swal.fire({
            title: 'Remova e tente novamente.',
            text: 'Lembre-se é permitido apenas letras minúsculas e sem acento.',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
        
      });
}

function encrypt() {
    let text = document.getElementById("texto").value;
    let textResult = "";
    let quantityErrors = 0;
    for (let i = 0; i < text.length; i++) 
    {
        let letter = text.charAt(i);
        if(letter >= 'a' && letter <= 'z' || letter == ' ') 
        {
        	textResult = textResult + textConversion(letter);
        } else {
			quantityErrors++;
        }
    }
    
    if(quantityErrors > 0) {
    	checkTypeErrors(text)
    } else {
        document.getElementById("resposta").innerHTML = textResult;
        showResult(textResult);
    }

}

function decrypt() {
    let text = document.getElementById("texto").value;
    let textResult = "";
    let quantityErrors = 0;
    for (let i = 0; i < text.length; i++) {
        let letter = text.charAt(i);
        if(letter >= 'a' && letter <= 'z' || letter == ' ') 
        {
            text;
        } else {
            quantityErrors++;
        }
    }

    if(quantityErrors > 0) {
    	checkTypeErrors(text)
    } else {
        textResult = text.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
        showResult(textResult);
    }
}

function showResult(textResult) {
    let withMessage = document.getElementById("com-mensagem");
    let noMessage = document.getElementById("sem-mensagem");
    if (textResult.length > 0) {
        withMessage.style.display = 'flex';
        noMessage.style.display = 'none'
    } else {
        withMessage.style.display = 'none';
        noMessage.style.display = 'flex';
    }
}