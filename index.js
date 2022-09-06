import * as fs from 'fs';

function leerArchivoComoString(nombreArchivo){
    return fs.readFileSync(nombreArchivo, 'utf8')
}

function escribirTextoEnArchivo(ruta, texto, flag){
    if ((!fs.existsSync(ruta) && flag) || fs.existsSync(ruta)) {
        fs.writeFileSync(ruta, texto)
    }
    else{
        console.log("el archivo no existe.")
    }
}

function transformarStringEnArrayDeNumeros(texto, separador){
    return texto.split(separador)
}

function transformarArrayDeNumerosAUnSoloString(array, separador){
    return array.join(separador)
}

function combinarDosArrays(array1, array2){

    var array1SinRepetidos = array1.filter(x => !array2.includes(x))
    var indexArray1 = 0
    var indexArray2 = 0
    var resultado = []

    while(indexArray1 < array1SinRepetidos.length && indexArray2 < array2.length){
        if(array1SinRepetidos[indexArray1] < array2[indexArray2]){
            resultado.push(array1SinRepetidos[indexArray1])
            indexArray1++
        }
        else{
            
            resultado.push(array2[indexArray2])
            indexArray2++
        }
    }

    while(indexArray1 < array1SinRepetidos.length){
        resultado.push(array1SinRepetidos[indexArray1]);
        indexArray1++;
    }
    
    while(indexArray2 < array2.length){
        resultado.push(array2[indexArray2]);
        indexArray2++;
    }

    return resultado
}

function combinarNArrays(array){
    var resultado = []

    array.forEach(element => {
        resultado = combinarDosArrays(resultado, element)
    });

    return resultado
}

export default { 
    leerArchivoComoString,
    escribirTextoEnArchivo,
    transformarStringEnArrayDeNumeros,
    transformarArrayDeNumerosAUnSoloString,
    combinarDosArrays,
    combinarNArrays
};