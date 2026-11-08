# 🎯 Misión Dirección — Juego Didáctico de Memoria y Estrategia

[![Windows](https://img.shields.io/badge/Plataforma-Windows%20x64-blue?logo=windows)](https://github.com/NerioARH/mision-direccion/releases)
[![Python](https://img.shields.io/badge/Python-3.14-yellow?logo=python)](https://www.python.org/)
[![HTML5 / CSS3 / JS](https://img.shields.io/badge/Frontend-HTML5%20%7C%20CSS3%20%7C%20JS-orange?logo=html5)](https://nerioarh.github.io/mision-direccion/)
[![Licencia](https://img.shields.io/badge/Licencia-MIT-green)](LICENSE)

Aplicación interactiva y didáctica diseñada para la enseñanza y dinamización en el aula de la materia **Teoría Administrativa**, enfocada específicamente en la **etapa de Dirección** del proceso administrativo.

Diseñada especialmente para proyectarse en salones de clases con gráficos vectoriales nítidos de alta definición, temporizador en tiempo real, efectos de sonido sintetizados y mecánicas competitivas por equipos (**Equipo A vs. Equipo B**).

---

## 📥 Descarga Rápida (.EXE)

Puedes descargar la última versión compilada lista para usar (no requiere instalación ni dependencias):

👉 **[Descargar MisionDireccion.exe (v1.0.0)](https://github.com/NerioARH/mision-direccion/releases/latest/download/MisionDireccion.exe)**

---

## 🌐 Demo Web / Jugar en Línea

¡También puedes jugarlo directamente desde el navegador web sin descargar nada!

👉 **[Jugar Misión Dirección en GitHub Pages](https://nerioarh.github.io/mision-direccion/)**

---

## 🕹️ Dinámica y Reglas del Juego

1. **Estructura del Tablero:**
   - **20 barajas** distribuidas en una cuadrícula de 5 columnas × 4 filas (10 parejas en total).
   - Cada pareja representa un concepto clave de la fase de Dirección.
2. **Turnos Competitivos (Equipo A vs Equipo B):**
   - El juego se disputa por turnos alternados entre dos equipos.
   - Cada equipo cuenta con **10 segundos** en el temporizador interactivo para encontrar y levantar una pareja.
3. **Momento Reto:**
   - Al encontrar un par acertado, se despliega en pantalla completa el anuncio animado **MOMENTO RETO**.
   - Los equipos realizan una dinámica o pregunta rápida presencial antes de continuar con la partida.
4. **Reto Final del Ganador al Perdedor:**
   - Al descubrirse las 10 parejas, la pantalla de victoria anuncia al equipo ganador y proclama:
     > **¡El Equipo Ganador pondrá un reto al Equipo Perdedor!**
   - En caso de empate, ambos equipos realizan un reto mutuo de cierre.

---

## 📚 Los 10 Conceptos de Dirección

El juego incluye 10 ilustraciones vectoriales SVG con arte corporativo moderno, contrastado y optimizado para proyectores escolares:

| # | Concepto | Definición Pedagógica |
|---|----------|------------------------|
| **01** | **Dirección** | Guiar a las personas y coordinar sus esfuerzos para alcanzar objetivos de la organización. |
| **02** | **Liderazgo** | Influir y orientar a un grupo para avanzar hacia objetivos comunes con visión e inspiración. |
| **03** | **Motivación** | Impulsar la disposición, energía y compromiso de las personas con su trabajo y sus metas. |
| **04** | **Comunicación** | Intercambiar información y construir una comprensión compartida y efectiva entre las personas. |
| **05** | **Toma de decisiones** | Analizar alternativas y seleccionar el curso de acción más adecuado para la organización. |
| **06** | **Delegación** | Asignar tareas y conferir la autoridad necesaria para su realización manteniendo el seguimiento. |
| **07** | **Autoridad** | Facultad legítima de un cargo para tomar decisiones e impartir instrucciones en su ámbito. |
| **08** | **Responsabilidad** | Obligación moral y funcional de cumplir tareas asumidas y rendir cuentas por sus resultados. |
| **09** | **Trabajo en equipo** | Colaborar de manera coordinada complementando habilidades para lograr un resultado común. |
| **10** | **Resolución de conflictos** | Abordar diferencias de forma constructiva buscando acuerdos viables y armónicos. |

---

## 💻 Ejecución desde el Código Fuente

### Requisitos
- **Python 3.10+** (probado en Python 3.14)
- **Microsoft Edge WebView2** (instalado por defecto en Windows 10/11)

### Instalación de dependencias
```bash
pip install pywebview
```

### Ejecutar la aplicación de escritorio
```bash
python app.py
```

### O abrir directamente en el navegador
Basta con abrir el archivo `index.html` con cualquier navegador moderno (Chrome, Edge, Firefox, Safari).

---

## 🔨 Compilación a .EXE

Para compilar el proyecto en un ejecutable independiente de un solo archivo con icono personalizado:

```bash
pip install pyinstaller
pyinstaller --noconfirm MisionDireccion.spec
```

El ejecutable resultante se ubicará en la carpeta `dist/MisionDireccion.exe`.

---

## 📁 Estructura del Repositorio

```text
mision-direccion/
├── app.py                  # Wrapper de escritorio nativo con WebView2
├── index.html              # Aplicación web completa (HTML5 + CSS3 + Audio API + SVGs)
├── concepts.js             # Módulo con los 10 conceptos e ilustraciones vectoriales HD
├── generate_icon.py        # Generador de icono .ico multirresolución
├── icon.ico                # Icono de la aplicación de escritorio
├── MisionDireccion.spec    # Configuración de compilación PyInstaller
└── README.md               # Documentación general del proyecto
```

---

## 📄 Licencia

Este proyecto está bajo la Licencia **MIT**. Libre para fines educativos, académicos y comerciales.
