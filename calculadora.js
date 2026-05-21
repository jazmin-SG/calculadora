
let temasActual = [];

const $ = (id) => document.getElementById(id);


function mostrarFisica(numero) {

    $('mensaje-bienvenida').style.display = 'none';

    $('calculadora-container').classList.add('oculto');

    $('contenedor-temas').classList.remove('oculto');

    if (numero === 1) {
        temasActual = temasFisica1;
    }

    else if (numero === 2) {
        temasActual = temasFisica2;
    }

    else {
        temasActual = temasFisica3;
    }

    const contenedor = $('contenedor-temas');

    contenedor.innerHTML = '';

    temasActual.forEach(tema => {

        const card = document.createElement('div');

        card.className = 'tema-card';

        card.onclick = () => mostrarCalculadora(tema.id);

        card.innerHTML = `
            <h3>${tema.nombre}</h3>
            <p>${tema.formula}</p>
        `;

        contenedor.appendChild(card);

    });

}


function mostrarCalculadora(temaId) {

    const tema = temasActual.find(t => t.id === temaId);

    if (!tema) return;

    $('contenedor-temas').classList.add('oculto');

    $('calculadora-container').classList.remove('oculto');

    const calculadoraDiv = $('calculadora');

    let camposHTML = '';

    tema.campos.forEach(campo => {

        let valorDefecto =
            campo.defecto !== undefined
            ? `value="${campo.defecto}"`
            : '';

        if (campo.tipo === 'text') {

            camposHTML += `
                <div class="campo">
                    <label>${campo.nombre}</label>

                    <input
                        type="text"
                        id="${campo.id}"
                        placeholder="Ej: 2, 4.5, 3"
                    >
                </div>
            `;
        }

        else {

            camposHTML += `
                <div class="campo">
                    <label>${campo.nombre}</label>

                    <input
                        type="number"
                        id="${campo.id}"
                        step="any"
                        ${valorDefecto}
                        placeholder="Ingresa valor"
                    >
                </div>
            `;
        }

    });

    calculadoraDiv.innerHTML = `
        <div class="calculadora-card">

            <h2>${tema.nombre}</h2>

            <div class="formula">
                ${tema.formula}
            </div>

            ${camposHTML}

            <button
                class="btn-calcular"
                onclick="calcularTema(${tema.id})"
            >
                🔁 CALCULAR
            </button>

            <div id="resultado-tema" class="resultado">
                ✨ Ingresa valores y presiona calcular
            </div>

        </div>
    `;
}

function calcularTema(temaId) {

    const tema = temasActual.find(t => t.id === temaId);

    if (!tema) return;

    let valores = {};

    let hayError = false;

    let mensajeError = "";


    for (let campo of tema.campos) {

        const input = $(campo.id);

        if (!input) {

            hayError = true;

            mensajeError =
            `❌ Campo "${campo.nombre}" no encontrado`;

            break;
        }

        if (campo.tipo === 'text') {

            if (!input.value.trim()) {

                hayError = true;

                mensajeError =
                `❌ El campo "${campo.nombre}" está vacío`;

                break;
            }

            valores[campo.id] = input.value.trim();
        }


        else {

            let val = parseFloat(input.value);

            // VALIDAR NÚMERO

            if (isNaN(val)) {

                if (campo.defecto !== undefined) {

                    valores[campo.id] = campo.defecto;
                }

                else {

                    hayError = true;

                    mensajeError =
                    `❌ "${campo.nombre}" debe ser un número válido`;

                    break;
                }
            }

            else {

                if (
                    campo.permitirNegativos === false &&
                    val < 0
                ) {

                    hayError = true;

                    mensajeError =
                    `❌ "${campo.nombre}" no puede ser negativo`;

                    break;
                }

                // ====================
                // NO CERO
                // ====================

                if (
                    campo.noCero === true &&
                    val === 0
                ) {

                    hayError = true;

                    mensajeError =
                    `❌ "${campo.nombre}" no puede ser cero`;

                    break;
                }

                // ====================
                // VALOR MÍNIMO
                // ====================

                if (
                    campo.min !== undefined &&
                    val < campo.min
                ) {

                    hayError = true;

                    mensajeError =
                    `❌ "${campo.nombre}" debe ser ≥ ${campo.min}`;

                    break;
                }

                // ====================
                // VALOR MÁXIMO
                // ====================

                if (
                    campo.max !== undefined &&
                    val > campo.max
                ) {

                    hayError = true;

                    mensajeError =
                    `❌ "${campo.nombre}" debe ser ≤ ${campo.max}`;

                    break;
                }

                valores[campo.id] = val;
            }
        }
    }

    // ==================== MOSTRAR ERROR ====================

    if (hayError) {

        $('resultado-tema').innerHTML = `
            <span class="error">
                ${mensajeError}
            </span>
        `;

        return;
    }

    // ==================== CALCULAR RESULTADO ====================

    try {

        let resultado = tema.calcular(valores);

        const resultadoDiv = $('resultado-tema');

        // ==================== KCL ====================

        if (
            typeof resultado === 'object' &&
            resultado.hasOwnProperty('sumaEntran')
        ) {

            if (resultado.cumple) {

                resultadoDiv.innerHTML = `
                    ✅ <strong>LEY KCL CUMPLIDA</strong>

                    <br><br>

                    Σ I_entran =
                    ${Number(resultado.sumaEntran.toPrecision(6))} A

                    <br>

                    Σ I_salen =
                    ${Number(resultado.sumaSalen.toPrecision(6))} A

                    <br><br>

                    <span style="color:lightgreen;">
                        ✓ Las corrientes cumplen la ley
                    </span>
                `;
            }

            else {

                resultadoDiv.innerHTML = `
                    ❌ <strong>LEY KCL NO CUMPLIDA</strong>

                    <br><br>

                    Diferencia:
                    ${Number(
                        Math.abs(
                            resultado.sumaEntran -
                            resultado.sumaSalen
                        ).toPrecision(6)
                    )} A
                `;
            }
        }

        // ==================== KVL ====================

        else if (
            typeof resultado === 'object' &&
            resultado.hasOwnProperty('suma')
        ) {

            if (resultado.cumple) {

                resultadoDiv.innerHTML = `
                    ✅ <strong>LEY KVL CUMPLIDA</strong>

                    <br><br>

                    ΣV =
                    ${Number(resultado.suma.toPrecision(6))} V
                `;
            }

            else {

                resultadoDiv.innerHTML = `
                    ❌ <strong>LEY KVL NO CUMPLIDA</strong>

                    <br><br>

                    ΣV =
                    ${Number(resultado.suma.toPrecision(6))} V
                `;
            }
        }

        // ==================== RESULTADO NORMAL ====================

        else {

            resultadoDiv.innerHTML = `
                ✅ <strong>RESULTADO</strong>

                <br><br>

                <span style="font-size:32px;">
                    ${
                        typeof resultado === 'number'
                        ? Number(resultado.toPrecision(6))
                        : resultado
                    }
                </span>

                <br>

                ${
                    tema.unidad !== 'verificacion'
                    ? `<small>${tema.unidad}</small>`
                    : ''
                }
            `;
        }

    }

    catch (e) {

        $('resultado-tema').innerHTML = `
            <span class="error">
                ❌ Error en el cálculo:
                ${e.message}
            </span>
        `;
    }
}

function volverALista() {

    $('calculadora-container')
    .classList.add('oculto');

    $('contenedor-temas')
    .classList.remove('oculto');

}