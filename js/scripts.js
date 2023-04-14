
function encriptar(){
    var textoLimpio = document.getElementById("textoLimpio").value;
    if(textoLimpio == ""){
        alert("llena esto")
    }else{
        var textResult = "";
        for(var cont = 0; cont < textoLimpio.length; cont++){
           switch(textoLimpio[cont]){
                case 'a':
                    textResult = textResult + "ei";
                break;
                case 'e':
                    textResult = textResult + "enter";
                break;
                case 'i':
                    textResult = textResult + "imes";
                break;
                case 'o':
                    textResult = textResult + "ober";
                break;
                case 'u':
                    textResult = textResult + "ufat";
                break;
                default:
                    textResult = textResult + textoLimpio[cont];
           }    
        }
        resultado(textResult);
    }
}

function desencriptar(){
    var textoLimpio = document.getElementById("Resultado").value;
    if(textoLimpio == ""){
        alert("llena esto")
    }else{
        var textResult = "";
        for(var cont = 0; cont < textoLimpio.length; cont++){
           switch(textoLimpio[cont]){
                case 'a':
                    textResult = textResult + "ei";
                break;
                case 'e':
                    textResult = textResult + "enter";
                break;
                case 'i':
                    textResult = textResult + "imes";
                break;
                case 'o':
                    textResult = textResult + "ober";
                break;
                case 'u':
                    textResult = textResult + "ufat";
                break;
                default:
                    textResult = textResult + textoLimpio[cont];
           }    
        }
        resultado(textResult);
    }
}

function resultado(resultado){
    resultadoTextArea = document.getElementById("Resultado");
    resultadoTextArea.value = resultado; 
}