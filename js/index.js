/**
 *2. ESTUDIANTE-B
*Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota
*máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
*Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que
*retorne los nombres de los estudiantes aprobados.
*La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}
*Función: nombresDeAprobados.
*Parámetros: estudiantes (array de objetos estudiante).
*Retorno: array de strings, con los nombres de los estudiantes aprobados.
 */
let nombresDeAprobados = (estudiantes) => {
    let aprobados = [];
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].nota >= 10) {
            aprobados.push(estudiantes[i].nombre);
        }
    }
    return aprobados;
}
let estudiantes = [
    { nombre: 'Juancho', semestre: 5, nota: 14 },
    { nombre: 'Ivan', semestre: 6, nota: 17 },
    { nombre: 'Francisco', semestre: 7, nota: 5 },
    { nombre: 'Diomedes', semestre: 8, nota: 9 },
    { nombre: 'Daniel', semestre: 9, nota: 15 },   
    { nombre: 'Naimarllys', semestre: 10, nota: 8 },
    { nombre: 'Ricardo', semestre: 9, nota: 12 },
    { nombre: 'Fernando', semestre: 8, nota: 16 },
    { nombre: 'Jose', semestre: 7, nota: 9 },
]

let salida = document.getElementById('salida');
salida.innerHTML = `Estudiantes aprobados:`+JSON.stringify(nombresDeAprobados(estudiantes));
