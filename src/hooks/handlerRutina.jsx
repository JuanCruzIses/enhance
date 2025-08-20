import generarRutina from '@/components/GenerarRutina';

const handleRutina = (seleccionadas) => {
    const rutina = generarRutina(seleccionadas);
    // Abrir rutina en nueva pestaña
    const rutinaHtml = `
      <html>
        <head>
          <title>Rutina sugerida para hoy</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="background: #FEF3C7; margin:0; font-family: 'Segoe UI', Arial, sans-serif;">
          <div style="max-width: 700px; margin: 32px auto; padding: 32px 16px; background: #fff7ed; border-radius: 24px; box-shadow: 0 4px 24px rgba(251,146,60,0.12);">
            <h1 style="font-size: 2rem; font-weight: bold; color: #b45309; margin-bottom: 16px; text-align: center;">
              Rutina sugerida para hoy
            </h1>
            <p style="color: #92400e; text-align: center; max-width: 500px; margin: 0 auto 24px;">
              <span style="font-weight:600; color:#ea580c;">Tip:</span> ¡Haz una captura de pantalla para tener tu rutina a mano durante el entrenamiento!
            </p>
            <div style="width:100%; display:flex; flex-direction:column; gap:32px;">
              ${rutina.map(bloque => `
                <div style="background: #fff; border-radius: 16px; box-shadow: 0 2px 12px rgba(251,146,60,0.10); padding: 24px;">
                  <h2 style="font-size: 1.25rem; font-weight: bold; color: #b45309; margin-bottom: 12px;">
                    ${bloque.categoria}
                  </h2>
                  <ul style="list-style: decimal; margin-left: 24px; color: #92400e; padding-left: 0;">
                    ${bloque.ejercicios.map(ej => `
                      <li style="margin-bottom: 18px; display: flex; align-items: flex-start; justify-content: space-between;">
                        <div style="flex:1;">
                          <span style="font-weight:600; color:#ea580c;">${ej.nombre}</span>
                          <span style="display:block; font-size:0.98rem; color:#92400e;">${ej.descripcion}</span>
                          <span style="display:block; font-size:0.85rem; color:#ea580c;">3 series x 10 repeticiones</span>
                        </div>
                        ${ej.src ? `
                          <div style="margin-left:16px; min-width:140px; max-width:180px;">
                            <iframe
                              width="140"
                              height="80"
                              src="${ej.src}"
                              title="Video de ${ej.nombre}"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                              style="border-radius:8px; box-shadow:0 2px 8px rgba(251,146,60,0.10);"
                            ></iframe>
                          </div>
                        ` : ''}
                      </li>
                    `).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>
        </body>
      </html>
    `;
    const win = window.open('', '_blank');
    win.document.write(rutinaHtml);
    win.document.close();
  };

export default handleRutina;