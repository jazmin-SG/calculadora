        // ==================== DATOS DE TODOS LOS TEMAS ====================

        const temasFisica1 = [
            { id: 1, nombre: "MRU (Movimiento Rectilíneo Uniforme)", formula: "v = d / t", campos: [
                { nombre: "Distancia (m)", id: "distancia", tipo: "number" },
                { nombre: "Tiempo (s)", id: "tiempo", tipo: "number" }
            ], calcular: (valores) => valores.distancia / valores.tiempo, unidad: "m/s" },
            
            { id: 2, nombre: "MRUA (Aceleración constante)", formula: "v_f = v₀ + a·t", campos: [
                { nombre: "Velocidad inicial (m/s)", id: "v0", tipo: "number" },
                { nombre: "Aceleración (m/s²)", id: "aceleracion", tipo: "number" },
                { nombre: "Tiempo (s)", id: "tiempo", tipo: "number" }
            ], calcular: (valores) => valores.v0 + valores.aceleracion * valores.tiempo, unidad: "m/s" },
            
            { id: 3, nombre: "Caída libre (velocidad final)", formula: "v_f = √(v₀² + 2gh)", campos: [
                { nombre: "Velocidad inicial (m/s)", id: "v0", tipo: "number" },
                { nombre: "Altura (m)", id: "altura", tipo: "number" },
                { nombre: "Gravedad (m/s²)", id: "gravedad", tipo: "number", defecto: 9.81 }
            ], calcular: (valores) => Math.sqrt(Math.pow(valores.v0, 2) + 2 * valores.gravedad * valores.altura), unidad: "m/s" },
            
            { id: 4, nombre: "Segunda Ley de Newton", formula: "F = m · a", campos: [
                { nombre: "Masa (kg)", id: "masa", tipo: "number" },
                { nombre: "Aceleración (m/s²)", id: "aceleracion", tipo: "number" }
            ], calcular: (valores) => valores.masa * valores.aceleracion, unidad: "N" },
            
            { id: 5, nombre: "Peso", formula: "W = m · g", campos: [
                { nombre: "Masa (kg)", id: "masa", tipo: "number" },
                { nombre: "Gravedad (m/s²)", id: "gravedad", tipo: "number", defecto: 9.81 }
            ], calcular: (valores) => valores.masa * valores.gravedad, unidad: "N" },
            
            { id: 6, nombre: "Trabajo mecánico", formula: "W = F·d·cosθ", campos: [
                { nombre: "Fuerza (N)", id: "fuerza", tipo: "number" },
                { nombre: "Distancia (m)", id: "distancia", tipo: "number" },
                { nombre: "Ángulo (grados)", id: "angulo", tipo: "number", defecto: 0 }
            ], calcular: (valores) => valores.fuerza * valores.distancia * Math.cos(valores.angulo * Math.PI/180), unidad: "J" },
            
            { id: 7, nombre: "Energía cinética", formula: "K = ½·m·v²", campos: [
                { nombre: "Masa (kg)", id: "masa", tipo: "number" },
                { nombre: "Velocidad (m/s)", id: "velocidad", tipo: "number" }
            ], calcular: (valores) => 0.5 * valores.masa * Math.pow(valores.velocidad, 2), unidad: "J" },
            
            { id: 8, nombre: "Energía potencial gravitatoria", formula: "U = m·g·h", campos: [
                { nombre: "Masa (kg)", id: "masa", tipo: "number" },
                { nombre: "Gravedad (m/s²)", id: "gravedad", tipo: "number", defecto: 9.81 },
                { nombre: "Altura (m)", id: "altura", tipo: "number" }
            ], calcular: (valores) => valores.masa * valores.gravedad * valores.altura, unidad: "J" },
            
            { id: 9, nombre: "Potencia mecánica", formula: "P = W / t", campos: [
                { nombre: "Trabajo (J)", id: "trabajo", tipo: "number" },
                { nombre: "Tiempo (s)", id: "tiempo", tipo: "number" }
            ], calcular: (valores) => valores.trabajo / valores.tiempo, unidad: "W" },
            
            { id: 10, nombre: "Presión hidrostática", formula: "P = ρ·g·h", campos: [
                { nombre: "Densidad (kg/m³)", id: "densidad", tipo: "number" },
                { nombre: "Gravedad (m/s²)", id: "gravedad", tipo: "number", defecto: 9.81 },
                { nombre: "Profundidad (m)", id: "altura", tipo: "number" }
            ], calcular: (valores) => valores.densidad * valores.gravedad * valores.altura, unidad: "Pa" },
            
            { id: 11, nombre: "Principio de Pascal", formula: "F₂ = F₁·(A₂/A₁)", campos: [
                { nombre: "Fuerza 1 (N)", id: "f1", tipo: "number" },
                { nombre: "Área 1 (m²)", id: "a1", tipo: "number" },
                { nombre: "Área 2 (m²)", id: "a2", tipo: "number" }
            ], calcular: (valores) => valores.f1 * (valores.a2 / valores.a1), unidad: "N" },
            
            { id: 12, nombre: "Principio de Arquímedes", formula: "E = ρ·g·V", campos: [
                { nombre: "Densidad fluido (kg/m³)", id: "densidad", tipo: "number" },
                { nombre: "Gravedad (m/s²)", id: "gravedad", tipo: "number", defecto: 9.81 },
                { nombre: "Volumen sumergido (m³)", id: "volumen", tipo: "number" }
            ], calcular: (valores) => valores.densidad * valores.gravedad * valores.volumen, unidad: "N" },
            
            { id: 13, nombre: "Dilatación lineal", formula: "ΔL = α·L₀·ΔT", campos: [
                { nombre: "Coef. dilatación (1/°C)", id: "alfa", tipo: "number" },
                { nombre: "Longitud inicial (m)", id: "longitud", tipo: "number" },
                { nombre: "ΔTemperatura (°C)", id: "deltaT", tipo: "number" }
            ], calcular: (valores) => valores.alfa * valores.longitud * valores.deltaT, unidad: "m" },
            
            { id: 14, nombre: "Dilatación volumétrica", formula: "ΔV = β·V₀·ΔT", campos: [
                { nombre: "Coef. dilatación (1/°C)", id: "beta", tipo: "number" },
                { nombre: "Volumen inicial (m³)", id: "volumen", tipo: "number" },
                { nombre: "ΔTemperatura (°C)", id: "deltaT", tipo: "number" }
            ], calcular: (valores) => valores.beta * valores.volumen * valores.deltaT, unidad: "m³" },
            
            { id: 15, nombre: "Ley de Hooke (Resorte)", formula: "F = -k·x", campos: [
                { nombre: "Constante elástica (N/m)", id: "k", tipo: "number" },
                { nombre: "Deformación (m)", id: "x", tipo: "number" }
            ], calcular: (valores) => -valores.k * valores.x, unidad: "N" }
        ];

        const temasFisica2 = [
            { id: 1, nombre: "Calor específico", formula: "Q = m·c·ΔT", campos: [
                { nombre: "Masa (kg)", id: "masa", tipo: "number" },
                { nombre: "Calor específico (J/kg·°C)", id: "calorEspecifico", tipo: "number" },
                { nombre: "ΔTemperatura (°C)", id: "deltaT", tipo: "number" }
            ], calcular: (valores) => valores.masa * valores.calorEspecifico * valores.deltaT, unidad: "J" },
            
            { id: 2, nombre: "Calor latente", formula: "Q = m·L", campos: [
                { nombre: "Masa (kg)", id: "masa", tipo: "number" },
                { nombre: "Calor latente (J/kg)", id: "calorLatente", tipo: "number" }
            ], calcular: (valores) => valores.masa * valores.calorLatente, unidad: "J" },
            
            { id: 3, nombre: "Conducción de calor (Fourier)", formula: "Q = k·A·ΔT/L", campos: [
                { nombre: "Conductividad k (W/m·K)", id: "k", tipo: "number" },
                { nombre: "Área (m²)", id: "area", tipo: "number" },
                { nombre: "ΔT (K)", id: "deltaT", tipo: "number" },
                { nombre: "Longitud (m)", id: "longitud", tipo: "number" }
            ], calcular: (valores) => valores.k * valores.area * valores.deltaT / valores.longitud, unidad: "W" },
            
            { id: 4, nombre: "Velocidad de una onda", formula: "v = λ·f", campos: [
                { nombre: "Longitud de onda (m)", id: "longitud", tipo: "number" },
                { nombre: "Frecuencia (Hz)", id: "frecuencia", tipo: "number" }
            ], calcular: (valores) => valores.longitud * valores.frecuencia, unidad: "m/s" },
            
            { id: 5, nombre: "Periodo de onda", formula: "T = 1/f", campos: [
                { nombre: "Frecuencia (Hz)", id: "frecuencia", tipo: "number" }
            ], calcular: (valores) => 1 / valores.frecuencia, unidad: "s" },
            
            { id: 6, nombre: "Intensidad del sonido", formula: "I = P/A", campos: [
                { nombre: "Potencia (W)", id: "potencia", tipo: "number" },
                { nombre: "Área (m²)", id: "area", tipo: "number" }
            ], calcular: (valores) => valores.potencia / valores.area, unidad: "W/m²" },
            
            { id: 7, nombre: "Nivel sonoro (dB)", formula: "β = 10·log(I/I₀)", campos: [
                { nombre: "Intensidad (W/m²)", id: "intensidad", tipo: "number" }
            ], calcular: (valores) => 10 * Math.log10(valores.intensidad / 1e-12), unidad: "dB" },
            
            { id: 8, nombre: "Efecto Doppler (Fuente acercándose)", formula: "f' = f·(v/(v-v_f))", campos: [
                { nombre: "Frecuencia emitida (Hz)", id: "frecuencia", tipo: "number" },
                { nombre: "Velocidad sonido (m/s)", id: "vSonido", tipo: "number", defecto: 343 },
                { nombre: "Velocidad fuente (m/s)", id: "vFuente", tipo: "number" }
            ], calcular: (valores) => valores.frecuencia * (valores.vSonido / (valores.vSonido - valores.vFuente)), unidad: "Hz" },
            
            { id: 9, nombre: "Ley de Coulomb", formula: "F = k·q₁·q₂/r²", campos: [
                { nombre: "Carga 1 (C)", id: "q1", tipo: "number" },
                { nombre: "Carga 2 (C)", id: "q2", tipo: "number" },
                { nombre: "Distancia (m)", id: "distancia", tipo: "number" }
            ], calcular: (valores) => (9e9 * valores.q1 * valores.q2) / Math.pow(valores.distancia, 2), unidad: "N" },
            
            { id: 10, nombre: "Campo eléctrico", formula: "E = k·q/r²", campos: [
                { nombre: "Carga (C)", id: "carga", tipo: "number" },
                { nombre: "Distancia (m)", id: "distancia", tipo: "number" }
            ], calcular: (valores) => (9e9 * valores.carga) / Math.pow(valores.distancia, 2), unidad: "N/C" },
            
            { id: 11, nombre: "Potencial eléctrico", formula: "V = k·q/r", campos: [
                { nombre: "Carga (C)", id: "carga", tipo: "number" },
                { nombre: "Distancia (m)", id: "distancia", tipo: "number" }
            ], calcular: (valores) => (9e9 * valores.carga) / valores.distancia, unidad: "V" },
            
            { id: 12, nombre: "Capacitancia placa paralela", formula: "C = ε₀·A/d", campos: [
                { nombre: "Área (m²)", id: "area", tipo: "number" },
                { nombre: "Distancia (m)", id: "distancia", tipo: "number" }
            ], calcular: (valores) => (8.85e-12 * valores.area) / valores.distancia, unidad: "F" },
            
            { id: 13, nombre: "Ley de Ohm", formula: "V = I·R", campos: [
                { nombre: "Corriente (A)", id: "corriente", tipo: "number" },
                { nombre: "Resistencia (Ω)", id: "resistencia", tipo: "number" }
            ], calcular: (valores) => valores.corriente * valores.resistencia, unidad: "V" },
            
            { id: 14, nombre: "Resistencias en serie", formula: "R_eq = R₁ + R₂ + ...", campos: [
                { nombre: "Resistencias (Ω) - separadas por coma", id: "resistencias", tipo: "text" }
            ], calcular: (valores) => {
                let resistencias = valores.resistencias.split(',').map(Number);
                return resistencias.reduce((a,b) => a+b, 0);
            }, unidad: "Ω" },
            
            { id: 15, nombre: "Resistencias en paralelo", formula: "1/R_eq = 1/R₁ + 1/R₂ + ...", campos: [
                { nombre: "Resistencias (Ω) - separadas por coma", id: "resistencias", tipo: "text" }
            ], calcular: (valores) => {
                let resistencias = valores.resistencias.split(',').map(Number);
                let sumaInversas = resistencias.reduce((a,b) => a + 1/b, 0);
                return 1 / sumaInversas;
            }, unidad: "Ω" }
        ];

        const temasFisica3 = [
            { id: 1, nombre: "Potencia eléctrica", formula: "P = V·I", campos: [
                { nombre: "Voltaje (V)", id: "voltaje", tipo: "number" },
                { nombre: "Corriente (A)", id: "corriente", tipo: "number" }
            ], calcular: (valores) => valores.voltaje * valores.corriente, unidad: "W" },
            
            { id: 2, nombre: "Ley de Joule", formula: "Q = I²·R·t", campos: [
                { nombre: "Corriente (A)", id: "corriente", tipo: "number" },
                { nombre: "Resistencia (Ω)", id: "resistencia", tipo: "number" },
                { nombre: "Tiempo (s)", id: "tiempo", tipo: "number" }
            ], calcular: (valores) => Math.pow(valores.corriente, 2) * valores.resistencia * valores.tiempo, unidad: "J" },
            
            { id: 3, nombre: "Kirchhoff - Ley de Corrientes (KCL)", formula: "Σ I_entran = Σ I_salen", campos: [
                { nombre: "Corrientes que ENTRAN (A) - separadas por coma", id: "entran", tipo: "text" },
                { nombre: "Corrientes que SALEN (A) - separadas por coma", id: "salen", tipo: "text" }
            ], calcular: (valores) => {
                let entran = valores.entran.split(',').map(Number);
                let salen = valores.salen.split(',').map(Number);
                let sumaEntran = entran.reduce((a,b) => a+b, 0);
                let sumaSalen = salen.reduce((a,b) => a+b, 0);
                return { sumaEntran, sumaSalen, cumple: Math.abs(sumaEntran - sumaSalen) < 0.001 };
            }, unidad: "verificacion" },
            
            { id: 4, nombre: "Kirchhoff - Ley de Voltajes (KVL)", formula: "Σ V = 0", campos: [
                { nombre: "Voltajes (V) - con signo, separados por coma", id: "voltajes", tipo: "text" }
            ], calcular: (valores) => {
                let voltajes = valores.voltajes.split(',').map(Number);
                let suma = voltajes.reduce((a,b) => a+b, 0);
                return { suma, cumple: Math.abs(suma) < 0.001 };
            }, unidad: "verificacion" },
            
            { id: 5, nombre: "Fuerza de Lorentz", formula: "F = q·v·B·senθ", campos: [
                { nombre: "Carga (C)", id: "carga", tipo: "number" },
                { nombre: "Velocidad (m/s)", id: "velocidad", tipo: "number" },
                { nombre: "Campo magnético (T)", id: "campo", tipo: "number" },
                { nombre: "Ángulo (grados)", id: "angulo", tipo: "number", defecto: 90 }
            ], calcular: (valores) => valores.carga * valores.velocidad * valores.campo * Math.sin(valores.angulo * Math.PI/180), unidad: "N" },
            
            { id: 6, nombre: "Ley de Faraday (Inducción)", formula: "ε = -N·ΔΦ/Δt", campos: [
                { nombre: "Número de espiras", id: "n", tipo: "number" },
                { nombre: "ΔFlujo magnético (Wb)", id: "deltaFlujo", tipo: "number" },
                { nombre: "Δt (s)", id: "deltaT", tipo: "number" }
            ], calcular: (valores) => -valores.n * valores.deltaFlujo / valores.deltaT, unidad: "V" },
            
            { id: 7, nombre: "Ley de Snell (Refracción)", formula: "n₁·senθ₁ = n₂·senθ₂", campos: [
                { nombre: "Índice refracción medio 1", id: "n1", tipo: "number" },
                { nombre: "Ángulo incidente (grados)", id: "angulo1", tipo: "number" },
                { nombre: "Índice refracción medio 2", id: "n2", tipo: "number" }
            ], calcular: (valores) => {
                let seno2 = (valores.n1 * Math.sin(valores.angulo1 * Math.PI/180)) / valores.n2;
                let angulo2 = Math.asin(Math.min(1, Math.max(-1, seno2))) * 180/Math.PI;
                return angulo2;
            }, unidad: "grados" },
            
            { id: 8, nombre: "Lentes delgadas", formula: "1/f = 1/dₒ + 1/dᵢ", campos: [
                { nombre: "Distancia objeto (m)", id: "do", tipo: "number" },
                { nombre: "Distancia imagen (m)", id: "di", tipo: "number" }
            ], calcular: (valores) => {
                let f = 1 / ((1/valores.do) + (1/valores.di));
                return f;
            }, unidad: "m" },
            
            { id: 9, nombre: "Aumento de lente", formula: "M = -dᵢ/dₒ", campos: [
                { nombre: "Distancia imagen (m)", id: "di", tipo: "number" },
                { nombre: "Distancia objeto (m)", id: "do", tipo: "number" }
            ], calcular: (valores) => -valores.di / valores.do, unidad: "aumento" },
            
            { id: 10, nombre: "Energía de un fotón", formula: "E = h·f", campos: [
                { nombre: "Frecuencia (Hz)", id: "frecuencia", tipo: "number" }
            ], calcular: (valores) => 6.626e-34 * valores.frecuencia, unidad: "J" },
            
            { id: 11, nombre: "Energía fotón (longitud onda)", formula: "E = h·c/λ", campos: [
                { nombre: "Longitud de onda (m)", id: "longitud", tipo: "number" }
            ], calcular: (valores) => (6.626e-34 * 3e8) / valores.longitud, unidad: "J" },
            
            { id: 12, nombre: "Masa-Energía (Einstein)", formula: "E = m·c²", campos: [
                { nombre: "Masa (kg)", id: "masa", tipo: "number" }
            ], calcular: (valores) => valores.masa * 9e16, unidad: "J" },
            
            { id: 13, nombre: "Velocidad de la luz en medio", formula: "v = c/n", campos: [
                { nombre: "Índice de refracción", id: "n", tipo: "number" }
            ], calcular: (valores) => 3e8 / valores.n, unidad: "m/s" },
            
            { id: 14, nombre: "Fuerza magnética (conductor)", formula: "F = I·L·B·senθ", campos: [
                { nombre: "Corriente (A)", id: "corriente", tipo: "number" },
                { nombre: "Longitud (m)", id: "longitud", tipo: "number" },
                { nombre: "Campo magnético (T)", id: "campo", tipo: "number" },
                { nombre: "Ángulo (grados)", id: "angulo", tipo: "number", defecto: 90 }
            ], calcular: (valores) => valores.corriente * valores.longitud * valores.campo * Math.sin(valores.angulo * Math.PI/180), unidad: "N" },
            
            { id: 15, nombre: "Efecto fotoeléctrico (E max)", formula: "E_max = h·f - φ", campos: [
                { nombre: "Frecuencia (Hz)", id: "frecuencia", tipo: "number" },
                { nombre: "Función trabajo (J)", id: "phi", tipo: "number" }
            ], calcular: (valores) => (6.626e-34 * valores.frecuencia) - valores.phi, unidad: "J" }
        ];

        // ==================== VARIABLES GLOBALES ====================
        let temasActual = [];

        // ==================== MOSTRAR FÍSICA SELECCIONADA ====================
        function mostrarFisica(numero) {
            // Ocultar mensaje de bienvenida
            document.getElementById('mensaje-bienvenida').style.display = 'none';
            
            // Ocultar calculadora si estaba visible
            document.getElementById('calculadora-container').classList.add('oculto');
            
            // Mostrar contenedor de temas
            document.getElementById('contenedor-temas').classList.remove('oculto');
            
            // Seleccionar temas según la física
            if (numero === 1) temasActual = temasFisica1;
            else if (numero === 2) temasActual = temasFisica2;
            else temasActual = temasFisica3;
            
            // Generar tarjetas de temas
            const contenedor = document.getElementById('contenedor-temas');
            contenedor.innerHTML = '';
            
            temasActual.forEach(tema => {
                const card = document.createElement('div');
                card.className = 'tema-card';
                card.onclick = () => mostrarCalculadora(tema.id);
                card.innerHTML = `
                    <h3>📌 ${tema.nombre}</h3>
                    <p>${tema.formula}</p>
                `;
                contenedor.appendChild(card);
            });
        }

        // ==================== MOSTRAR CALCULADORA ====================
        function mostrarCalculadora(temaId) {
            const tema = temasActual.find(t => t.id === temaId);
            if (!tema) return;
            
            // Ocultar temas, mostrar calculadora
            document.getElementById('contenedor-temas').classList.add('oculto');
            document.getElementById('calculadora-container').classList.remove('oculto');
            
            const calculadoraDiv = document.getElementById('calculadora');
            let camposHTML = '';
            
            tema.campos.forEach(campo => {
                let valorDefecto = campo.defecto ? `value="${campo.defecto}"` : '';
                if (campo.tipo === 'text') {
                    camposHTML += `
                        <div class="campo">
                            <label>${campo.nombre}</label>
                            <input type="text" id="${campo.id}" placeholder="Ej: 2, 4.5, 3">
                        </div>
                    `;
                } else {
                    camposHTML += `
                        <div class="campo">
                            <label>${campo.nombre}</label>
                            <input type="number" id="${campo.id}" step="any" ${valorDefecto} placeholder="Ingresa valor">
                        </div>
                    `;
                }
            });
            
            calculadoraDiv.innerHTML = `
                <div class="calculadora-card">
                    <h2>${tema.nombre}</h2>
                    <div class="formula">${tema.formula}</div>
                    ${camposHTML}
                    <button class="btn-calcular" onclick="calcularTema(${tema.id})">🔁 CALCULAR</button>
                    <div id="resultado-tema" class="resultado">✨ Ingresa valores y presiona calcular</div>
                </div>
            `;
        }

        // ==================== CALCULAR TEMA ====================
        function calcularTema(temaId) {
            const tema = temasActual.find(t => t.id === temaId);
            if (!tema) return;
            
            let valores = {};
            let hayError = false;
            let mensajeError = "";
            
            for (let campo of tema.campos) {
                const input = document.getElementById(campo.id);
                if (!input) {
                    hayError = true;
                    mensajeError = `Campo ${campo.nombre} no encontrado`;
                    break;
                }
                
                if (campo.tipo === 'text') {
                    if (!input.value.trim()) {
                        hayError = true;
                        mensajeError = `❌ El campo "${campo.nombre}" está vacío`;
                        break;
                    }
                    valores[campo.id] = input.value;
                } else {
                    let val = parseFloat(input.value);
                    if (isNaN(val)) {
                        if (campo.defecto !== undefined) {
                            valores[campo.id] = campo.defecto;
                        } else {
                            hayError = true;
                            mensajeError = `❌ El campo "${campo.nombre}" debe ser un número válido`;
                            break;
                        }
                    } else {
                        valores[campo.id] = val;
                    }
                }
            }
            
            if (hayError) {
                document.getElementById('resultado-tema').innerHTML = `<span class="error">${mensajeError}</span>`;
                return;
            }
            
            try {
                let resultado = tema.calcular(valores);
                const resultadoDiv = document.getElementById('resultado-tema');
                
                if (typeof resultado === 'object' && resultado.hasOwnProperty('sumaEntran')) {
                    if (resultado.cumple) {
                        resultadoDiv.innerHTML = `✅ <strong>LEY KCL CUMPLIDA</strong><br>Σ I<sub>entran</sub> = ${resultado.sumaEntran.toFixed(3)} A<br>Σ I<sub>salen</sub> = ${resultado.sumaSalen.toFixed(3)} A<br><span style="color: green;">✓ La suma de corrientes que entran es igual a las que salen</span>`;
                    } else {
                        resultadoDiv.innerHTML = `❌ <strong>LEY KCL NO CUMPLIDA</strong><br>Σ I<sub>entran</sub> = ${resultado.sumaEntran.toFixed(3)} A<br>Σ I<sub>salen</sub> = ${resultado.sumaSalen.toFixed(3)} A<br><span style="color: red;">✗ Diferencia: ${Math.abs(resultado.sumaEntran - resultado.sumaSalen).toFixed(3)} A</span>`;
                    }
                } 
                else if (typeof resultado === 'object' && resultado.hasOwnProperty('suma')) {
                    if (resultado.cumple) {
                        resultadoDiv.innerHTML = `✅ <strong>LEY KVL CUMPLIDA</strong><br>Σ V = ${resultado.suma.toFixed(3)} V<br><span style="color: green;">✓ La suma de voltajes en la malla es cero</span>`;
                    } else {
                        resultadoDiv.innerHTML = `❌ <strong>LEY KVL NO CUMPLIDA</strong><br>Σ V = ${resultado.suma.toFixed(3)} V<br><span style="color: red;">✗ La suma no es cero, falta ${(-resultado.suma).toFixed(3)} V</span>`;
                    }
                }
                else {
                    resultadoDiv.innerHTML = `✅ <strong>RESULTADO</strong><br><span style="font-size: 28px;">${typeof resultado === 'number' ? resultado.toFixed(6) : resultado}</span><br>${tema.unidad !== 'verificacion' ? `<span style="font-size: 14px;">${tema.unidad}</span>` : ''}`;
                }
            } catch(e) {
                document.getElementById('resultado-tema').innerHTML = `<span class="error">❌ Error en el cálculo: ${e.message}</span>`;
            }
        }

        // ==================== VOLVER A LISTA ====================
        function volverALista() {
            document.getElementById('calculadora-container').classList.add('oculto');
            document.getElementById('contenedor-temas').classList.remove('oculto');
        }