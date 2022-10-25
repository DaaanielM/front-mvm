# Frontend Gestión de Solicitudes - MVM

El siguiente repositorio contiene:

-   La interfaz gráfica de la aplicación
-   Formulario para enviar una solicitud
-   Consumo de los servicios (API)
-   Panel administrativo
-   Tabla para visualizar, editar y eliminar datos

## Proyecto Solicitudes

-   [Requerimientos](https://mvmingenieriadesoftware-my.sharepoint.com/:w:/g/personal/fabian_coronel_mvm_com_co/EZs4DVtHluVDv3GwU3JM-GgB5V8MCbd34AW9uwy-GFfHmQ?e=qjUKbt)

## Mockup Frontend

-   [Mockup-Gestion-Solicitudes](https://xd.adobe.com/view/af9a222b-deba-4611-bbbb-1baf2a11d88f-fac9/)

### Pre-requisitos 📋

-   Tener VSCode o parecidos
-   NodeJS
-   Git
-   Postman
-   Internet
-   Estar familiarizado con HTML y JavaScript
-   Extensión de Azure en VSCode

### Instalación 🔧

Clonar el repositorio y instalar con:

```
npm i
```

Ejecutar con

```
npm run dev
```

Una vez instalado y ejecutado el proyecto. Podremos encontrar: la configuración a la base de datos, puerto, modelo, controlador y rutas.

## DEMO👾

![demo.gif](https://github.com/DaaanielM/front-mvm/blob/master/demo.gif)

## Despliegue 📦

-   Creamos un appservice en Azure (Para esto debemos contar con licencia en Azure)
-   El proceso anterior, nos crea un dominio para nuestra aplicación
-   Luego vamos a nuestra consola(en el proyecto) y ejecutamos el comando **npm run build**
-   El proceso anterior crea una carpeta llamada [dist]
-   Vamos a la extensión de Azure y vamos a los App Services
-   Damos click derecho sobre el appservice que creamos y le damos en **Deploy to web app**
-   Escogemos la carpeta **dist** que creamos con anterioridad
-   Listo, con esto nos da la opción desde el VSCode de poder abrir la app o en Azure también podemos encontrarla la URL en Introducción.

## Construido con 🛠️

-   [vite+react](https://vitejs.dev/guide/) - Herramienta de compilación
-   [react-spinner](https://www.npmjs.com/package/react-spinners) - Una colección de spinners de carga
-   [axios](https://www.npmjs.com/package/mssql) - Sirve para realizar peticiones HTTP
-   [react-router-dom](https://www.npmjs.com/package/react-router-dom) - Crear rutas
-   [materia-ui](https://mui.com/) - Herramienta de interfaz de usuario

## Autores ✒️

-   **Daniel Brand** - _Frontend_, _Documentación_ - (https://github.com/DaaanielM)

## Licencia 📄

Este proyecto está bajo la Licencia de (Daniel Brand)

## Expresiones de Gratitud 🎁

-   ¡Muchas gracias al equipo de MVM, y a Fabian Coronel, por la gestión que están haciendo, las oportunidades y el aprendizaje que están dando. Es de mucho valor y se agradece bastante la oportunidad! 😁
