import opreraciones from "./index.js"
import * as fs from 'fs';

function compareArrays(array1, array2){
    var resultado = true;

    if(array1.length != array2.length){
        resultado = false;
    }
    
    for(var i=0; i<array1.length; i++)
        if(array1[i] != array2[i]){
            resultado = false;
        }
 
    return resultado
}

function leerArchivoComoStringTest(){
    console.log("Prueba funcion -> leerArchivoComoString...")
    var nombreArchivo = "./archivo.txt"
    var resultadoEsperado = "Hola estoy en el archivo!"
    var resultadoReal = opreraciones.leerArchivoComoString(nombreArchivo)
    var resultadoConsola = resultadoEsperado == resultadoReal ? "TODO OK" : "ERROR SE ESPERABA: " + resultadoEsperado + " RESULTADO OBTENIDO: " + resultadoReal
    console.log(resultadoConsola)
    console.log("----------FIN DE LA PRUEBA----------------\n")
}

function escribirTextoEnArchivoTest(){
    console.log("Prueba funcion -> escribirTextoEnArchivo...")
    var nombreArchivoNoExiste = "./archivo2.txt"
    var resultadoEsperadoNoExisteFlagFalse = "el archivo no existe."
    opreraciones.escribirTextoEnArchivo(nombreArchivoNoExiste, "Hola Soy el archivo 2!", false)
    opreraciones.escribirTextoEnArchivo(nombreArchivoNoExiste, "Hola Soy el archivo 2!", true)
    var resultadoRealFlagTrue = opreraciones.leerArchivoComoString(nombreArchivoNoExiste)
    var resultadoEsperadoNoExisteFlagTrue = "Hola Soy el archivo 2!"
    var resultadoFlagTrue = resultadoEsperadoNoExisteFlagTrue == resultadoRealFlagTrue ? "TODO OK" : "ERROR SE ESPERABA: " + resultadoEsperadoNoExisteFlagTrue + " RESULTADO OBTENIDO: " + resultadoRealFlagTrue
    console.log(resultadoFlagTrue)
    console.log("----------FIN DE LA PRUEBA----------------\n")
}

function transformarStringEnArrayDeNumerosTest(){
    console.log("Prueba funcion -> transformarStringEnArrayDeNumeros...")
    var stringIngreso = "1/2/3/4/5/6"
    var resultadoEsperado = [1,2,3,4,5,6]
    var resultadoReal = opreraciones.transformarStringEnArrayDeNumeros(stringIngreso, "/")
    var resultadoConsola = compareArrays(resultadoEsperado, resultadoReal) ? "TODO OK" : "ERROR SE ESPERABA: " + resultadoEsperado + " RESULTADO OBTENIDO: " + resultadoReal
    console.log(resultadoConsola)
    console.log("----------FIN DE LA PRUEBA----------------\n")
}

function transformarArrayDeNumerosAUnSoloStringTest(){
    console.log("Prueba funcion -> transformarArrayDeNumerosAUnSoloString...")
    var arrayIngreso = [1,2,3,4,5,6]
    var resultadoEsperado = "1-2-3-4-5-6"
    var resultadoReal = opreraciones.transformarArrayDeNumerosAUnSoloString(arrayIngreso, "-")
    var resultadoConsola = resultadoEsperado == resultadoReal ? "TODO OK" : "ERROR SE ESPERABA: " + resultadoEsperado + " RESULTADO OBTENIDO: " + resultadoReal
    console.log(resultadoConsola)
    console.log("----------FIN DE LA PRUEBA----------------\n")
}

function combinarDosArraysTest(){
    console.log("Prueba funcion -> combinarDosArrays...")
    var array1 = [1, 5, 10]
    var array2 = [2, 3, 8, 11]
    var resultadoEsperado = [1, 2, 3, 5, 8, 10, 11]
    var resultadoReal = opreraciones.combinarDosArrays(array1, array2)
    var resultadoConsola = compareArrays(resultadoEsperado, resultadoReal) ? "TODO OK" : "ERROR SE ESPERABA: " + resultadoEsperado + " RESULTADO OBTENIDO: " + resultadoReal
    console.log(resultadoConsola)
    console.log("----------FIN DE LA PRUEBA----------------\n")
}

function combinarNArraysTest(){
    console.log("Prueba funcion -> combinarNArrays...")
    var arrayIngreso = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13, 16]]
    var resultadoEsperado = [1, 2, 3, 4, 6, 7, 10, 13, 15, 16]
    var resultadoReal = opreraciones.combinarNArrays(arrayIngreso)
    var resultadoConsola = compareArrays(resultadoEsperado, resultadoReal) ? "TODO OK" : "ERROR SE ESPERABA: " + resultadoEsperado + " RESULTADO OBTENIDO: " + resultadoReal
    console.log(resultadoConsola)
    console.log("----------FIN DE LA PRUEBA----------------\n")
}

function ejecutarTests(){
    leerArchivoComoStringTest()
    escribirTextoEnArchivoTest()
    transformarStringEnArrayDeNumerosTest()
    transformarArrayDeNumerosAUnSoloStringTest()
    combinarDosArraysTest()
    combinarNArraysTest()
}

ejecutarTests()



