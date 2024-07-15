let numeroComision = 59955; // Valor inicial
const datos = [
        { id: 1, nombre: 'Conceptos generales', enlace: `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/clase_1` },
        // { id: 2, nombre: 'Control de flujos', enlace: `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/clase_2` },
        // { id: 3, nombre: 'Bucles e iteraciones', enlace: `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/clase_3` },
        // { id: 4, nombre: 'Funciones', enlace: `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/clase_4` },
        // { id: 5, nombre: 'Objetos', enlace: `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/clase_5` },
        // { id: 6, nombre: 'Arrays', enlace: `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/clase_6` },
        // { id: 7, nombre: 'Funciones de orden Superior', enlace: `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/clase_7` },
        // { id: 8, nombre: 'Funciones de orden Superior II', enlace: `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/clase_8` },
        // { id: 9, nombre: 'DOM', enlace: `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/clase_9` },
        // { id: 10, nombre: 'Eventos', enlace: `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/clase_10` },
        // { id: 11, nombre: 'Storage y JSON', enlace: `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/clase_11` },
        // { id: 12, nombre: 'Operadores avanzados', enlace: `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/clase_12` },
        // { id: 13, nombre: 'Operadores avanzados II + workshop', enlace: `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/clase_13` },
        // { id: 14, nombre: 'Librerías', enlace: `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/clase_14` },
        // { id: 15, nombre: 'Asincronía y promesas', enlace: `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/clase_15` },
        // { id: 16, nombre: 'Ajax y Fetch', enlace: `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/clase_16` },
        // { id: 17, nombre: 'Frameworks y Node.js', enlace: `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/clase_17` },
        ];
const afterClass=[
        // { id: 1, nombre: 'After ciclos', enlace: `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/after_ciclos` },
        // { id: 2, nombre: 'After Búsqueda', enlace: `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/after_busqueda` },
        // { id: 3, nombre: 'After DOM', enlace: `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/after_dom` },
        ]

document.title = `Comisión ${numeroComision}`;
document.querySelector('h1').innerHTML = `Comisión ${numeroComision}`
        
function actualizarDatos() {
    // Actualizamos los enlaces con el nuevo valor
    datos.forEach(fila => {
        fila.enlace = `https://github.com/DanielRiverol/${numeroComision}-js/tree/main/${fila.enlace.split('/')[8]}`;
    });
    // Llamamos a la función para agregar las filas
    agregarFilasATabla();
}

function agregarFilasATabla() {
    const tabla = document.getElementById('tabla-dinamica');
    const cuerpoTabla = tabla.getElementsByTagName('tbody')[0];
    const tablaAfter = document.getElementById('tabla-dinamica-after');
    const cuerpoTablaAfter = tablaAfter.getElementsByTagName('tbody')[0];

    cuerpoTabla.innerHTML = '';
    cuerpoTablaAfter.innerHTML = '';
            
    //cargar clases
    if(datos.length > 0){
        datos.forEach((fila,index) => {
            const nuevaFila = document.createElement('tr');
            nuevaFila.innerHTML = `
                <td>${fila.id}</td>
                <td>${fila.nombre}</td>
                <td><a href="${fila.enlace}" target="_blank">Clase ${index + 1}</a></td>`;
            cuerpoTabla.appendChild(nuevaFila);
            });
        }else{
            const nuevaFila = document.createElement('tr');
            nuevaFila.innerHTML = `<td colspan="3">No disponible</td>`;
            cuerpoTabla.appendChild(nuevaFila);
           }

    //cargar afters  
    if(afterClass.length > 0){
        afterClass.forEach((fila,index) => {
            const nuevaFila = document.createElement('tr');
            nuevaFila.innerHTML = `
                <td>${fila.id}</td>
                <td>${fila.nombre}</td>
                <td><a href="${fila.enlace}" target="_blank">${fila.nombre}</a></td>`;
            cuerpoTablaAfter.appendChild(nuevaFila);
            });
        }else{
            const nuevaFila = document.createElement('tr');
            nuevaFila.innerHTML = `<td colspan="3">No disponible</td>`;
            cuerpoTablaAfter.appendChild(nuevaFila);
           }
        }
// Llamamos a la función para agregar las filas cuando se carga la página
window.onload = agregarFilasATabla;
