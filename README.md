# Pokédex - Proyecto Integrados React.js

## Vistas Finales:

![Screenshot 2022-11-08 at 15-28-26 Pokedex](https://user-images.githubusercontent.com/87783719/200646325-70ff745a-4dd7-49e3-ad78-35755e4f3a04.png)
![Screenshot 2022-11-08 153027](https://user-images.githubusercontent.com/87783719/200647291-baf17b93-84cd-4349-90f2-827cb4a6d9ba.png)
![Screenshot 2022-11-08 153114](https://user-images.githubusercontent.com/87783719/200647293-74fe951b-e169-4376-bb89-5b66eb35dea7.png)
![Screenshot 2022-11-08 153336](https://user-images.githubusercontent.com/87783719/200647374-767d44ca-b377-49ef-816b-a49cf41c8aea.png)
![Screenshot 2022-11-08 153435](https://user-images.githubusercontent.com/87783719/200647380-6ea76a96-9b0c-40ce-af68-e662257b1b2f.png)

CORRECCIONES!!!

ESTILO DE CODIGO

- Código legible. Muy buen uso de comentarios en los imports de cada componente, excelente práctica.
- Se mantiene kebab case para estilos, muy bueno.
- Desestructuración de objeto en las props.
- Uso de etiquetas semánticas. Mucho uso de la etiqueta article y section. Ejemplo en esta línea de código: <article className="header-home"> podría haberse utilizado la etiqueta header.
- Buena estructura de los componentes al colocar los useState al principio, buena práctica!
- Correcto nombres de funciones y estados.
- Correcta la separación de responsabilidades en los componentes padres pertinentes.

FUNCIONALIDADES

- Requisitos funcionales COMPLETOS con creces.
- La aplicación funciona correctamente en modo Desktop y mobile.
- Como EXTRA se implementó página de inicio con githubs de los integrantes del grupo, animaciones y estilos muy buenos, página de error 404, json-server con useEffect y fetch, y un modal para visualizar las características.

COMPONENTES

- Separación clara de componentes, funcionalidad en los padres.
- Abstracción correcta en el uso de los componentes Header, Stars y Modal.
- Se podría mejorar el componente Stars reduciendo las lineas de código con un ciclo for.
- Se podría mejorar el componente Header, creando dos hijos uno para el search y otro para el order.
- El ícono de ordenar no es muy intuitivo para la experiencia de usuario, no se alcanza a entender en su totalidad que ese botón ordena.

ESTRUCTURA

- Estructura del proyecto ok. Componentes organizados en carpetas al mismo nivel. Se podría haber hecho una carpeta "pages" o "routes" para identificar mejor los componentes padres que se han declarado para el ruteo.
- Aplicación de pagina 404 en errores de ruteo.
- Archivo de datos en carpeta separada, muy bueno.
- Imagenes en carpeta public.

LIBRERÍAS EXTERNAS

- Uso de React Router, react-bootstrap, chakra-ui, framer-motion, react-circular-progressbar, emotion, react-icons y vite para crear el proyecto base.
- Buen uso de dichas librerías.
- Se nota el esfuerzo en el css de todo el proyecto a través del uso de distintas librerías.

PROPS, STATES, useParams, useEffect, useNavigate y Link

- Buen uso de props, states y librería react router.
- Props desestructuradas, mejora el entendimiento en el pasaje de props.
- Se podría haber pasado por props al Modal la información del pokemon, ahorrandose el useEffect en el mismo modal.
- No se creó una carpeta routes para el enrutamiento.

COMENTARIOS Y FEEDBACK

- Buen trabajo chicos!!! Se nota la dedicación y el esfuerzo en cuanto al estilo, organización y funcionalidad en todo el proyecto. Muy completo y agregaron un montón de cosas extra. Si siguen trabajando de esta forma van a poder construir muy buenas aplicaciones y cumplir con todos los desafíos que se presenten el día de mañana!
- Se me hizo sencillo poder corregir el proyecto ya que está muy bien estructurado y los componentes mantienen su estructura también.
- Una recomendación, les queda por mejorar la parte de router. Para futuros proyectos, traten de tener los componentes utilizados en el ruteo dentro de una carpeta aparte. Mejora mucho la navegación del propio desarrollador para inspeccionar su código y para que un colega también lo pueda entender mas fácil.
