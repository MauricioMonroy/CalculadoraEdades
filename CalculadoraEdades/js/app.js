function calcular() {
    const edades = [];
    for (let i = 1; i <= 10; i++) {
      let edad = parseFloat(document.getElementById(`edad${i}`).value);
      if (edad >= 1 && edad <= 120) {
        edades.push(edad);
      } else {
        alert(`La edad ${edad} no es válida.`);
        return;
      }
    }
  
    // Cantidad de personas menores de edad
    let menoresDeEdad = 0;
    for (let edad of edades) {
      if (edad < 18) {
        menoresDeEdad++;
      }
    }
  
    // Cantidad de personas mayores de edad
    let mayoresDeEdad = 0;
    for (let edad of edades) {
      if (edad >= 18) {
        mayoresDeEdad++;
      }
    }
  
    // Cantidad de adultos mayores
    let adultosMayores = 0;
    for (let edad of edades) {
      if (edad >= 60) {
        adultosMayores++;
      }
    }
  
    // Edad más baja
    let edadMasBaja = edades[0];
    for (let edad of edades) {
      if (edad < edadMasBaja) {
        edadMasBaja = edad;
      }
    }
  
    // Edad más alta
    let edadMasAlta = edades[0];
    for (let edad of edades) {
      if (edad > edadMasAlta) {
        edadMasAlta = edad;
      }
    }
  
    // Promedio de edades
    let promedioEdades = edades.reduce((a, b) => a + b, 0) / edades.length;
  
    // Mostrar resultados
    document.getElementById("resultado").innerHTML = `
      <ul>
        <li>Cantidad de personas menores de edad: ${menoresDeEdad}</li>
        <li>Cantidad de personas mayores de edad: ${mayoresDeEdad}</li>
        <li>Cantidad de adultos mayores: ${adultosMayores}</li>
        <li>Edad más baja: ${edadMasBaja} años</li>
        <li>Edad más alta: ${edadMasAlta} años</li>
        <li>Promedio de edades: ${promedioEdades} años</li>
      </ul>
    `;
  }