# AGUA POTABLE SAN ANTONIO - Sistema de Gestión de Agua Potable

Este proyecto es un sistema integral de gestión de agua potable con soporte para:
- Aplicación de escritorio (Electron)
- Aplicación web PWA (funciona offline y online)
- Generación de instaladores para Windows

## Estructura del Proyecto
- **index.html / aguamodificado.html**: Versiones web del sistema (PWA)
- **app-unpacked**: Aplicación Electron
  - main.js: Archivo principal de Electron
  - package.json: Dependencias y scripts de Electron
  - static/: Archivos web de la aplicación (incluye manifest y service worker)
- **manifest.json / sw.js**: Archivos PWA para uso offline

## Cómo usar

### 1. Como aplicación web (PWA - online/offline)
1. Abre `index.html` directamente en tu navegador web (preferiblemente Chrome o Edge).
2. Haz clic en el botón de "Instalar" que aparecerá en la barra de direcciones para instalar la app en tu dispositivo.
3. La app funcionará sin conexión a internet!

### 2. Como aplicación de escritorio (Electron)
Para desarrollar y probar la app de escritorio:
1. Asegúrate de tener **Node.js** instalado (versión 18 o superior, descargala desde https://nodejs.org/)
2. Abre una terminal en la carpeta del proyecto
3. Ejecuta `npm run dev` para instalar dependencias y abrir la app

### 3. Generar un instalador
Para crear un instalador de Windows (.exe) y versión portable:
1. Asegúrate de tener Node.js instalado
2. Abre una terminal en la carpeta del proyecto
3. Ejecuta `npm run build`
4. Los instaladores se generarán en `app-unpacked/dist/`!

## Funcionalidades del Sistema
- Padrón de usuarios con paginación para manejar grandes conjuntos de datos
- Categorías de usuarios gestionables desde configuración
- Historial de pagos editable y exportable
- Generación de recibos y reportes
- Respaldo y restauración de datos
