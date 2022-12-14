# Frontend Gesti贸n de Solicitudes - MVM

El siguiente repositorio contiene:

-   La interfaz gr谩fica de la aplicaci贸n
-   Formulario para enviar una solicitud
-   Consumo de los servicios (API)
-   Panel administrativo
-   Tabla para visualizar, editar y eliminar datos

## Proyecto Solicitudes

-   [Requerimientos](https://mvmingenieriadesoftware-my.sharepoint.com/:w:/g/personal/fabian_coronel_mvm_com_co/EZs4DVtHluVDv3GwU3JM-GgB5V8MCbd34AW9uwy-GFfHmQ?e=qjUKbt)

## Mockup Frontend

-   [Mockup-Gestion-Solicitudes](https://xd.adobe.com/view/af9a222b-deba-4611-bbbb-1baf2a11d88f-fac9/)

### Pre-requisitos 馃搵

-   Tener VSCode o parecidos
-   NodeJS
-   Git
-   Postman
-   Internet
-   Estar familiarizado con HTML y JavaScript
-   Extensi贸n de Azure en VSCode

### Instalaci贸n 馃敡

Clonar el repositorio y instalar con:

```
npm i
```

Ejecutar con

```
npm run dev
```

Una vez instalado y ejecutado el proyecto. Podremos encontrar: la configuraci贸n a la base de datos, puerto, modelo, controlador y rutas.

## DEMO馃懢

![demo.gif](https://github.com/DaaanielM/front-mvm/blob/master/demo.gif)

## Despliegue 馃摝

-   Creamos un appservice en Azure (Para esto debemos contar con licencia en Azure)
-   El proceso anterior, nos crea un dominio para nuestra aplicaci贸n
-   Luego vamos a nuestra consola(en el proyecto) y ejecutamos el comando **npm run build**
-   El proceso anterior crea una carpeta llamada [dist]
-   Vamos a la extensi贸n de Azure y vamos a los App Services
-   Damos click derecho sobre el appservice que creamos y le damos en **Deploy to web app**
-   Escogemos la carpeta **dist** que creamos con anterioridad
-   Listo, con esto nos da la opci贸n desde el VSCode de poder abrir la app o en Azure tambi茅n podemos encontrarla la URL en Introducci贸n.

## Construido con 馃洜锔?

-   [vite+react](https://vitejs.dev/guide/) - Herramienta de compilaci贸n
-   [react-spinner](https://www.npmjs.com/package/react-spinners) - Una colecci贸n de spinners de carga
-   [axios](https://www.npmjs.com/package/mssql) - Sirve para realizar peticiones HTTP
-   [react-router-dom](https://www.npmjs.com/package/react-router-dom) - Crear rutas
-   [materia-ui](https://mui.com/) - Herramienta de interfaz de usuario

## Autores 鉁掞笍

-   **Daniel Brand** - _Frontend_, _Documentaci贸n_ - (https://github.com/DaaanielM)

## Licencia 馃搫

Este proyecto est谩 bajo la Licencia de (Daniel Brand)

## Expresiones de Gratitud 馃巵

-   隆Muchas gracias al equipo de MVM, y a Fabian Coronel, por la gesti贸n que est谩n haciendo, las oportunidades y el aprendizaje que est谩n dando. Es de mucho valor y se agradece bastante la oportunidad! 馃榿
