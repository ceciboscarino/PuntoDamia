import { TecTextContainer } from ".";
import { ReactElement, useEffect } from "react";





export default function TecText() {

    
    
    useEffect(() => { 
        const items = document.getElementsByClassName("fade-item");
        const items1 = document.getElementsByClassName("fade-item1");
        const items2 = document.getElementsByClassName("fade-item2");
        const items3 = document.getElementsByClassName("fade-item3");
       
        function fadeIn (item: Element , delay: number) {
            setTimeout(() => {
              item.classList.add('fadein')
            }, delay)
          }
          function fadeIn1 (item: Element , delay: number) {
            setTimeout(() => {
              item.classList.add('fadein1')
            }, delay)
          }
          function fadeIn2 (item: Element , delay: number) {
            setTimeout(() => {
              item.classList.add('fadein2')
            }, delay)
          }
          function fadeIn3 (item: Element , delay: number) {
            setTimeout(() => {
              item.classList.add('fadein2')
            }, delay)
          }
        
        console.log(items)
        
        for (let i = 0; i < items.length; ++i) {
            fadeIn(items[i], i * 1000)
          }

          for (let i = 0; i < items1.length; ++i) {
            fadeIn1(items1[i], i * 1000)
          }
          for (let i = 0; i < items2.length; ++i) {
            fadeIn2(items2[i], i * 1000)
          }
          for (let i = 0; i < items3.length; ++i) {
            fadeIn3(items3[i], i * 1000)
          }


    }, [])
            
            

    return (
        <TecTextContainer>
            <div className="first">
                <h2>
                    SERVICIO TECNICO
                </h2>
                <p>
                    En nuestro laboratorio tecnológico cuidamos y reparamos equipos celulares, de computación y consolas de todas las marcas. Tenemos en nuestro equipo a los mejores profesionales, usamos repuestos originales y de máxima calidad.
                </p>
            </div>
            <div className="responsive">
                <div className="listcel">
                    <h3>
                        SOLUCIONES DE HARDWARE - CELULARES
                    </h3>
                    <ul>
                        <li className="fade-item">-Cambio de display y vidrio glass</li>
                        <li className="fade-item">-Reparación de pantallas táctiles, touch</li>
                        <li className="fade-item">-Cambio de batería</li>
                        <li className="fade-item">-Reemplazo de pin de carga/ flex/ subplaca</li>
                        <li className="fade-item">-Cambio de tapa trasera y carcasa</li>
                        <li className="fade-item">-Reemplazo o reparación de micrófono y auricular</li>
                        <li className="fade-item">-Reparaciones en placa y microsoldadura</li>
                        <li className="fade-item">-Solución a tu equipo mojado (consultar)</li>
                    </ul>
                </div>
                <div className="listpc">
                    <h3>
                        SOLUCIONES DE HARDWARE - COMPUTADORAS
                    </h3>
                    <ul>
                        <li className="fade-item1">-Cambio de display, pantalla</li>
                        <li className="fade-item1">-Reparación de teclado</li>
                        <li className="fade-item1">-Problemas con el cable flex y bisagras</li>
                        <li className="fade-item1">-Arreglo conectores USB y demás puertos</li>
                        <li className="fade-item1">-Arreglo / reemplazo de parlantes</li>
                        <li className="fade-item1">-Reemplazo o reparación de micrófono y auricular</li>
                        <li className="fade-item1">-Limpieza y mantenimiento de equipos</li>
                        <li className="fade-item1">-Cambio de pila BIOS</li>
                    </ul>
                </div>
            </div>

            <div className="responsive">
                <div className="listvideo">
                    <h3>
                        SOLUCIONES DE HARDWARE CONSOLA DE VIDEJUEGOS
                    </h3>
                    <ul>
                        <li className="fade-item2">-Reballing de consolas</li>
                        <li className="fade-item2">-Reparación de joystick</li>
                        <li className="fade-item2">-RGH y carga de juegos digitales</li>
                        <li className="fade-item2">-Cambio de disco</li>
                        <li className="fade-item2">-Limpieza y mantenimiento de equipos</li>
                    </ul>
                </div>
                <div className="listsoft">
                    <h3>
                        SOLUCIONES DE SOFTWARE - GENERAL
                    </h3>
                    <ul>
                        <li className="fade-item3">-Limpieza y mantenimiento de equipos</li>
                        <li className="fade-item3">-Actualización de disco rígido y memoria RAM</li>
                        <li className="fade-item3">-Downgrade, actualización y flasheo de software</li>
                        <li className="fade-item3">-Configuración o instalación de aplicaciones y programas</li>
                        <li className="fade-item3">-Cambio de tapa trasera y carcasa</li>
                        <li className="fade-item3">-Back up de datos</li>
                        <li className="fade-item3">-Recuperación de datos</li>
                    </ul>
                </div>
            </div>

        </TecTextContainer>
    )
    }