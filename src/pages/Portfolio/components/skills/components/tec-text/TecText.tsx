import { TecTextContainer } from "."


export default function TecText() {
    return (
        <TecTextContainer>
            <div className="first">
                <h1>
                    SERVICIO TECNICO
                </h1>
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
                        <li>-Cambio de display y vidrio glass</li>
                        <li>-Reparación de pantallas táctiles, touch</li>
                        <li>-Cambio de batería</li>
                        <li>-Reemplazo de pin de carga/ flex/ subplaca</li>
                        <li>-Cambio de tapa trasera y carcasa</li>
                        <li>-Reemplazo o reparación de micrófono y auricular</li>
                        <li>-Reparaciones en placa y microsoldadura</li>
                        <li>-Solución a tu equipo mojado (consultar)</li>
                    </ul>
                </div>
                <div className="listpc">
                    <h3>
                        SOLUCIONES DE HARDWARE - COMPUTADORAS
                    </h3>
                    <ul>
                        <li>-Cambio de display, pantalla</li>
                        <li>-Reparación de teclado</li>
                        <li>-Problemas con el cable flex y bisagras</li>
                        <li>-Arreglo conectores USB y demás puertos</li>
                        <li>-Arreglo / reemplazo de parlantes</li>
                        <li>-Reemplazo o reparación de micrófono y auricular</li>
                        <li>-Limpieza y mantenimiento de equipos</li>
                        <li>-Cambio de pila BIOS</li>
                    </ul>
                </div>
            </div>

            <div className="responsive">
                <div className="listvideo">
                    <h3>
                        SOLUCIONES DE HARDWARE CONSOLA DE VIDEJUEGOS
                    </h3>
                    <ul>
                        <li>-Reballing de consolas</li>
                        <li>-Reparación de joystick</li>
                        <li>-RGH y carga de juegos digitales</li>
                        <li>-Cambio de disco</li>
                        <li>-Limpieza y mantenimiento de equipos</li>
                    </ul>
                </div>
                <div className="listsoft">
                    <h3>
                        SOLUCIONES DE SOFTWARE - GENERAL
                    </h3>
                    <ul>
                        <li>-Limpieza y mantenimiento de equipos</li>
                        <li>-Actualización de disco rígido y memoria RAM</li>
                        <li>-Downgrade, actualización y flasheo de software</li>
                        <li>-Configuración o instalación de aplicaciones y programas</li>
                        <li>-Cambio de tapa trasera y carcasa</li>
                        <li>-Back up de datos</li>
                        <li>-Recuperación de datos</li>
                    </ul>
                </div>
            </div>

        </TecTextContainer>
    )
}