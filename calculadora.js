class Inversion {

  constructor(capital, plazo, utilidad) {

    this.capital = capital;
    this.plazo = plazo;
    this.utilidad = utilidad;

  }
}

class Interfaz {

  //ACTIVOS
  agregarCapital(inversion) {
    const fila = document.getElementById('fila');


    const elemento = document.createElement('tr');
    elemento.innerHTML = `

            <td style="text-align:center;" class="a">${0}</td>
            <td style="text-align:center;" class="b">${inversion.capital}</td>
            <td style="text-align:center;" class="c">${0}</td>
            <td style="text-align:center;" class="d">${0}</td>
            <td style="text-align:center;" class="e">${0}</td>
            `;
    fila.appendChild(elemento);

    switch (inversion.plazo) {
      case "12":
        for (var i = 1; i <= 12; i++) {
          var utilidadpro = (inversion.utilidad / 12) * inversion.capital / 100;
          var cap = inversion.capital;
          var total = new Array();

          total[i] = parseFloat(cap) + parseFloat(utilidadpro) * [i];

          const elemento = document.createElement('tr');
          elemento.innerHTML = `
        
                    <td style="text-align:center;" class="a">${i}</td>
                    <td style="text-align:center;" class="b">${""}</td>
                    <td style="text-align:center;" class="c">${cap}</td>
                    <td style="text-align:center;" class="d">${utilidadpro.toFixed(2)}</td>
                    <td style="text-align:center;" class="e">${total[i].toFixed(2)}</td>
                    `;
          fila.appendChild(elemento);

        }
        break;
      case "24":
        for (var i = 1; i <= 12; i++) {
          var utilidadpro = (inversion.utilidad / 12) * inversion.capital / 100;
          var cap = inversion.capital;
          var total = new Array();

          total[i] = parseFloat(cap) + parseFloat(utilidadpro) * [i];

          const elemento = document.createElement('tr');
          elemento.innerHTML = `
        
                    <td style="text-align:center;" class="a">${i}</td>
                    <td style="text-align:center;" class="b">${""}</td>
                    <td style="text-align:center;" class="c">${cap}</td>
                    <td style="text-align:center;" class="d">${utilidadpro.toFixed(2)}</td>
                    <td style="text-align:center;" class="e">${total[i].toFixed(2)}</td>
                    `;
          fila.appendChild(elemento);

        }
        for (var j = 13; j <= 24; j++) {
          var utilidadpro1 = (inversion.utilidad / 12) * inversion.capital / 100;
          var cap = parseFloat(inversion.capital) + parseFloat(utilidadpro1) * 12;
          var utilidadpro = (inversion.utilidad / 12) * cap / 100;

          var total = new Array();
          total[j - 12] = parseFloat(cap) + parseFloat(utilidadpro) * [j - 12];

          const elemento = document.createElement('tr');
          elemento.innerHTML = `
        
                    <td style="text-align:center;" class="a">${j}</td>
                    <td style="text-align:center;" class="b">${""}</td>
                    <td style="text-align:center;" class="c">${cap.toFixed(2)}</td>
                    <td style="text-align:center;" class="d">${utilidadpro.toFixed(2)}</td>
                    <td style="text-align:center;" class="e">${total[j - 12].toFixed(2)}</td>
                    `;
          fila.appendChild(elemento);

        }
        break;
      case "36":
        for (var i = 1; i <= 12; i++) {
          var utilidadpro = (inversion.utilidad / 12) * inversion.capital / 100;
          var cap = inversion.capital;
          var total = new Array();

          total[i] = parseFloat(cap) + parseFloat(utilidadpro) * [i];

          const elemento = document.createElement('tr');
          elemento.innerHTML = `
        
                    <td style="text-align:center;" class="a">${i}</td>
                    <td style="text-align:center;" class="b">${""}</td>
                    <td style="text-align:center;" class="c">${cap}</td>
                    <td style="text-align:center;" class="d">${utilidadpro.toFixed(2)}</td>
                    <td style="text-align:center;" class="e">${total[i].toFixed(2)}</td>
                    `;
          fila.appendChild(elemento);

        }
        for (var j = 13; j <= 24; j++) {
          var utilidadpro1 = (inversion.utilidad / 12) * inversion.capital / 100;
          var cap = parseFloat(inversion.capital) + parseFloat(utilidadpro1) * 12;
          var utilidadpro = (inversion.utilidad / 12) * cap / 100;

          var total = new Array();
          total[j - 12] = parseFloat(cap) + parseFloat(utilidadpro) * [j - 12];

          const elemento = document.createElement('tr');
          elemento.innerHTML = `
        
                    <td style="text-align:center;" class="a">${j}</td>
                    <td style="text-align:center;" class="b">${""}</td>
                    <td style="text-align:center;" class="c">${cap.toFixed(2)}</td>
                    <td style="text-align:center;" class="d">${utilidadpro.toFixed(2)}</td>
                    <td style="text-align:center;" class="e">${total[j - 12].toFixed(2)}</td>
                    `;
          fila.appendChild(elemento);

        }
        for (var k = 25; k <= 36; k++) {
          var utilidadpro1 = (inversion.utilidad / 12) * inversion.capital / 100;
          var cap = parseFloat(inversion.capital) + parseFloat(utilidadpro1) * 12;
          var utilidadpro = (inversion.utilidad / 12) * cap / 100;

          var cap2 = parseFloat(cap) + parseFloat(utilidadpro * 12);
          var utilidadpro2 = (inversion.utilidad / 12) * cap2 / 100;
          var total = new Array();
          total[k - 24] = parseFloat(cap2) + parseFloat(utilidadpro2) * [k - 24];

          const elemento = document.createElement('tr');
          elemento.innerHTML = `
        
                    <td style="text-align:center;" class="a">${k}</td>
                    <td style="text-align:center;" class="b">${""}</td>
                    <td style="text-align:center;" class="c">${cap2.toFixed(2)}</td>
                    <td style="text-align:center;" class="d">${utilidadpro2.toFixed(2)}</td>
                    <td style="text-align:center;" class="e">${total[k - 24].toFixed(2)}</td>
                    `;
          fila.appendChild(elemento);

        }

        break;
      case "48":
        for (var i = 1; i <= 12; i++) {
          var utilidadpro = (inversion.utilidad / 12) * inversion.capital / 100;
          var cap = inversion.capital;
          var total = new Array();

          total[i] = parseFloat(cap) + parseFloat(utilidadpro) * [i];

          const elemento = document.createElement('tr');
          elemento.innerHTML = `
        
                    <td style="text-align:center;" class="a">${i}</td>
                    <td style="text-align:center;" class="b">${""}</td>
                    <td style="text-align:center;" class="c">${cap}</td>
                    <td style="text-align:center;" class="d">${utilidadpro.toFixed(2)}</td>
                    <td style="text-align:center;" class="e">${total[i].toFixed(2)}</td>
                    `;
          fila.appendChild(elemento);

        }
        for (var j = 13; j <= 24; j++) {
          var utilidadpro1 = (inversion.utilidad / 12) * inversion.capital / 100;
          var cap = parseFloat(inversion.capital) + parseFloat(utilidadpro1) * 12;
          var utilidadpro = (inversion.utilidad / 12) * cap / 100;

          var total = new Array();
          total[j - 12] = parseFloat(cap) + parseFloat(utilidadpro) * [j - 12];

          const elemento = document.createElement('tr');
          elemento.innerHTML = `
        
                    <td style="text-align:center;" class="a">${j}</td>
                    <td style="text-align:center;" class="b">${""}</td>
                    <td style="text-align:center;" class="c">${cap.toFixed(2)}</td>
                    <td style="text-align:center;" class="d">${utilidadpro.toFixed(2)}</td>
                    <td style="text-align:center;" class="e">${total[j - 12].toFixed(2)}</td>
                    `;
          fila.appendChild(elemento);

        }
        for (var k = 25; k <= 36; k++) {
          var utilidadpro1 = (inversion.utilidad / 12) * inversion.capital / 100;
          var cap = parseFloat(inversion.capital) + parseFloat(utilidadpro1) * 12;
          var utilidadpro = (inversion.utilidad / 12) * cap / 100;

          var cap2 = parseFloat(cap) + parseFloat(utilidadpro * 12);
          var utilidadpro2 = (inversion.utilidad / 12) * cap2 / 100;
          var total = new Array();
          total[k - 24] = parseFloat(cap2) + parseFloat(utilidadpro2) * [k - 24];

          const elemento = document.createElement('tr');
          elemento.innerHTML = `
        
                    <td style="text-align:center;" class="a">${k}</td>
                    <td style="text-align:center;" class="b">${""}</td>
                    <td style="text-align:center;" class="c">${cap2.toFixed(2)}</td>
                    <td style="text-align:center;" class="d">${utilidadpro2.toFixed(2)}</td>
                    <td style="text-align:center;" class="e">${total[k - 24].toFixed(2)}</td>
                    `;
          fila.appendChild(elemento);

        }
        for (var l = 37; l <= 48; l++) {
          var utilidadpro1 = (inversion.utilidad / 12) * inversion.capital / 100;
          var cap = parseFloat(inversion.capital) + parseFloat(utilidadpro1) * 12;
          var utilidadpro = (inversion.utilidad / 12) * cap / 100;

          var cap2 = parseFloat(cap) + parseFloat(utilidadpro * 12);
          var utilidadpro2 = (inversion.utilidad / 12) * cap2 / 100;

          var cap3 = parseFloat(cap2) + parseFloat(utilidadpro2 * 12);
          var utilidadpro3 = (inversion.utilidad / 12) * cap3 / 100;

          var total = new Array();
          total[l - 36] = parseFloat(cap3) + parseFloat(utilidadpro3) * [l - 36];

          const elemento = document.createElement('tr');
          elemento.innerHTML = `
        
                    <td style="text-align:center;" class="a">${l}</td>
                    <td style="text-align:center;" class="b">${""}</td>
                    <td style="text-align:center;" class="c">${cap3.toFixed(2)}</td>
                    <td style="text-align:center;" class="d">${utilidadpro3.toFixed(2)}</td>
                    <td style="text-align:center;" class="e">${total[l - 36].toFixed(2)}</td>
                    `;
          fila.appendChild(elemento);

        }

        break;
      case "60":
        for (var i = 1; i <= 12; i++) {
          var utilidadpro = (inversion.utilidad / 12) * inversion.capital / 100;
          var cap = inversion.capital;
          var total = new Array();

          total[i] = parseFloat(cap) + parseFloat(utilidadpro) * [i];

          const elemento = document.createElement('tr');
          elemento.innerHTML = `
        
                    <td style="text-align:center;" class="a">${i}</td>
                    <td style="text-align:center;" class="b">${""}</td>
                    <td style="text-align:center;" class="c">${cap}</td>
                    <td style="text-align:center;" class="d">${utilidadpro.toFixed(2)}</td>
                    <td style="text-align:center;" class="e">${total[i].toFixed(2)}</td>
                    `;
          fila.appendChild(elemento);

        }
        for (var j = 13; j <= 24; j++) {
          var utilidadpro1 = (inversion.utilidad / 12) * inversion.capital / 100;
          var cap = parseFloat(inversion.capital) + parseFloat(utilidadpro1) * 12;
          var utilidadpro = (inversion.utilidad / 12) * cap / 100;

          var total = new Array();
          total[j - 12] = parseFloat(cap) + parseFloat(utilidadpro) * [j - 12];

          const elemento = document.createElement('tr');
          elemento.innerHTML = `
        
                    <td style="text-align:center;" class="a">${j}</td>
                    <td style="text-align:center;" class="b">${""}</td>
                    <td style="text-align:center;" class="c">${cap.toFixed(2)}</td>
                    <td style="text-align:center;" class="d">${utilidadpro.toFixed(2)}</td>
                    <td style="text-align:center;" class="e">${total[j - 12].toFixed(2)}</td>
                    `;
          fila.appendChild(elemento);

        }
        for (var k = 25; k <= 36; k++) {
          var utilidadpro1 = (inversion.utilidad / 12) * inversion.capital / 100;
          var cap = parseFloat(inversion.capital) + parseFloat(utilidadpro1) * 12;
          var utilidadpro = (inversion.utilidad / 12) * cap / 100;

          var cap2 = parseFloat(cap) + parseFloat(utilidadpro * 12);
          var utilidadpro2 = (inversion.utilidad / 12) * cap2 / 100;
          var total = new Array();
          total[k - 24] = parseFloat(cap2) + parseFloat(utilidadpro2) * [k - 24];

          const elemento = document.createElement('tr');
          elemento.innerHTML = `
        
                    <td style="text-align:center;" class="a">${k}</td>
                    <td style="text-align:center;" class="b">${""}</td>
                    <td style="text-align:center;" class="c">${cap2.toFixed(2)}</td>
                    <td style="text-align:center;" class="d">${utilidadpro2.toFixed(2)}</td>
                    <td style="text-align:center;" class="e">${total[k - 24].toFixed(2)}</td>
                    `;
          fila.appendChild(elemento);

        }
        for (var l = 37; l <= 48; l++) {
          var utilidadpro1 = (inversion.utilidad / 12) * inversion.capital / 100;
          var cap = parseFloat(inversion.capital) + parseFloat(utilidadpro1) * 12;
          var utilidadpro = (inversion.utilidad / 12) * cap / 100;

          var cap2 = parseFloat(cap) + parseFloat(utilidadpro * 12);
          var utilidadpro2 = (inversion.utilidad / 12) * cap2 / 100;

          var cap3 = parseFloat(cap2) + parseFloat(utilidadpro2 * 12);
          var utilidadpro3 = (inversion.utilidad / 12) * cap3 / 100;

          var total = new Array();
          total[l - 36] = parseFloat(cap3) + parseFloat(utilidadpro3) * [l - 36];

          const elemento = document.createElement('tr');
          elemento.innerHTML = `
        
                    <td style="text-align:center;" class="a">${l}</td>
                    <td style="text-align:center;" class="b">${""}</td>
                    <td style="text-align:center;" class="c">${cap3.toFixed(2)}</td>
                    <td style="text-align:center;" class="d">${utilidadpro3.toFixed(2)}</td>
                    <td style="text-align:center;" class="e">${total[l - 36].toFixed(2)}</td>
                    `;
          fila.appendChild(elemento);

        }
        for (var m = 49; m <= 60; m++) {
          var utilidadpro1 = (inversion.utilidad / 12) * inversion.capital / 100;
          var cap = parseFloat(inversion.capital) + parseFloat(utilidadpro1) * 12;
          var utilidadpro = (inversion.utilidad / 12) * cap / 100;

          var cap2 = parseFloat(cap) + parseFloat(utilidadpro * 12);
          var utilidadpro2 = (inversion.utilidad / 12) * cap2 / 100;

          var cap3 = parseFloat(cap2) + parseFloat(utilidadpro2 * 12);
          var utilidadpro3 = (inversion.utilidad / 12) * cap3 / 100;

          var cap3 = parseFloat(cap2) + parseFloat(utilidadpro2 * 12);
          var utilidadpro3 = (inversion.utilidad / 12) * cap3 / 100;

          var cap4 = parseFloat(cap3) + parseFloat(utilidadpro3 * 12);
          var utilidadpro4 = (inversion.utilidad / 12) * cap4 / 100;

          var total = new Array();
          total[m - 48] = parseFloat(cap4) + parseFloat(utilidadpro4) * [m - 48];

          const elemento = document.createElement('tr');
          elemento.innerHTML = `
        
                    <td style="text-align:center;" class="a">${m}</td>
                    <td style="text-align:center;" class="b">${""}</td>
                    <td style="text-align:center;" class="c">${cap4.toFixed(2)}</td>
                    <td style="text-align:center;" class="d">${utilidadpro4.toFixed(2)}</td>
                    <td style="text-align:center;" class="e">${total[m - 48].toFixed(2)}</td>
                    `;
          fila.appendChild(elemento);

        }

        break;
    }
    var table = document.getElementById("tablaInversion");
   var contador =parseFloat(inversion.plazo) + 1;
    var row = "";
    row =  Number(table.rows[contador].cells[4].innerHTML);
    var su=row;
    
    var capital = parseFloat(inversion.capital);
    this.resultadoFinal(su, capital);
  }

  //RESULTADO FINAL

  resultadoFinal(su, capital) {

    const totalCapital = document.getElementById('cap');
    const elemento1 = document.createElement('td');

    elemento1.innerHTML = `

    <td><b>$${capital}</b></td>

`;
    var linea = document.getElementById("cap");
    linea.deleteCell(1);
    totalCapital.appendChild(elemento1);
///////////////////
    const totalSuma = document.getElementById('sum');
    const elemento2 = document.createElement('td');

    elemento2.innerHTML = `

    <td><b>$${su}</b></td>

`;
    var linea = document.getElementById("sum");
    linea.deleteCell(1);
    totalSuma.appendChild(elemento2);
/////////////////
    const totalUtilidad = document.getElementById('util');
    const elemento3 = document.createElement('td');

    var utilidad=su-capital;
    elemento3.innerHTML = `

    <td><b>$${utilidad}</b></td>

`;
    var linea = document.getElementById("util");
    linea.deleteCell(1);
    totalUtilidad.appendChild(elemento3);

    

  }

  //RESTABLECER FORMULARIO
  restablecerFormulario() {
    document.getElementById('formulario').reset();
  }
}

//Eventos del DOM
document.getElementById('formulario')
  .addEventListener('submit', function (e) {

    var Table = document.getElementById("fila");
    Table.innerHTML = "";

    const capital = document.getElementById('capital').value;
    const plazo = document.getElementById('plazo').value;
    const utilidad = document.getElementById('utilidad').value;

    const inversion = new Inversion(capital, plazo, utilidad);
    const interfaz = new Interfaz();

    interfaz.agregarCapital(inversion);

    e.preventDefault();

   // graficar();
  });

