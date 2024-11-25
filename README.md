# Proyecto API AMIIBO 
### Desarrollo Web Entorno Cliente: Adrián Ucha Sousa

## Idea de Aplicación
- Vamos a realizar un proyecto de diseño, maquetación y desarrollo de una aplicación web sobre la AMIIBO API, sobre 
figuras de Nintendo, y accesorios, en la que tendremos diferentes secciones con información extraída de la API y 
podremos guardar nuestras figuras favoritas en nuestra sección de favoritos, ahora vamos a explicar de una forma más 
detallada las secciones propuesta para dicha aplicación:

- Una página de inicio básica en la que podemos ver una descripción sobre la página para hacerla usable y fácil de 
entender a la hora de acceder, en la que tenemos diferentes botones y enlaces que nos llevan a la página del contenido 
de la API y al Acceso/Singup de la aplicación.

- Tenemos una sección de figuras en la que podemos ver todos los
AMIIBO que ha sacado Nintendo hasta la fecha en el que si nos
posicionamos encima tendremos una tarjeta desplegada para ver más
información sobre el personaje, y la posibilidad de agregarlo a favoritos
(siempre que estemos logueados evidentemente). Esta sección todavía
no está 100% ya que después de los testing de usabilidad realizados en
el diseño y prototipado de la aplicación planteamos la posibilidad, de
hacerlo con un botón para ver mas info y mostrar y explotar mejor la

- API, para proporcionar algo más de contenido sobre esta, para este
finde estará 100% aclarado debido a que la idea ya esta pensada pero
necesito plantear su diseño.
Está página tendrá 3 filtros para poder buscar por el nombre de
AMIIBO, Su videojuego o a la serie a la que pertenece.

- Y otra similar con accesorios que en este caso son cartas y algunos
peluches que sacaron de AMIIBOS de la serie Yoshi.

- Una página de inicio de sesión y registro que contendrá diferentes
inputs como nombre y apellidos correo contraseña verificar contraseña
y un selector de personaje favorito con lo que personalizamos el fondo
de la página de favoritos en base al personaje seleccionado.

- Una sección de favoritos, en la que podemos ver nuestros favoritos con
sus filtros correspondientes y uno adicional que nos permite filtrar entre
carta, amiibo y peluche.

- Una página de contacto en la que pondremos un sencillo formulario
de envío en el que no tienes porque estar logueado y si lo estas que coja
directamente tu correo electrónico y lo ponga en el input de correo
automáticamente

- Su respectiva página personalizada de error 404 not found.

- Implementación de modo claro oscuro cambiable con un botón que lo
accione desde cualquier página de la web.



## Descripción de las Carpetas y Organización de proyecto:

- **src/**: Contiene todos los archivos de código fuente de la aplicación.
    - **assets/**: Archivos estáticos como imágenes, fuentes, etc.
    - **components/**: Componentes reutilizables, como el navbar o también footer.
      - **Navbar.jsx**: Bara de navegación con la que navegamos por le router.
    - **context/** Para los diferentes contextos que usemos como el de login.
    - **hooks/**: Hooks personalizados como el de validación de formularios.
      - **ValidateFormsHook.jsx**: Archivos estáticos como imágenes, fuentes, etc.
    - **layout/**: Para las diferentes rutas de router dependiendo del contexto.
      - **LayoutModal.jsx**: Es hijo de **LayoutRoot**, para los modales de incio sesion y registro
      - **LayoutPrivate.jsx**: Para la carga del contenido logueado
      - **LayoutRoot.jsx**: Para la carga del contenido principal
    - **pages/**: Donde se encuentran las diferentes páginas.
      - **Accesories.jsx**: Página de Cartas y Peluches extraidas de la API
      - **Contact.jsx**: Página de contacto con funcionalidad ya implementada.
      - **Favorites.jsx**: Página de favoritos en el que almacenamos nuestas figuras y accesorios
      - **Figures.jsx**: Página de figuras que utiliza la API
      - **Home.jsx**: Componente de página de Incio
      - **Login.jsx**: Componente de Incio de Sesión
      - **Singup.jsx**: Componente de Registo
    - **router/**: Componentes con los que se crean el enrutamiento.
      - **router.jsx**: Componente donde se genera el enrutamiento.
    - **main.jsx**: Componente donde se carga y renderiza la app.
    - **styles.css**: Archivos de estilos con arquitectura BEM.
- **README.md**: Archivo de documentación del proyecto.

## Enrutamiento de la App
Hemos creado un enrutamiento que tiene las rutas de las páginas comentadas en la estructura y que tiene la ruta de 
favoritos oculta y solo se mostrara cunado estemos logueados, cuando esta se muestre la idea es intentar que el home 
desaparezca, ya que es un incio informativo(todavia no implementado solo router inicial y formulario de contacto), y 
modales de incio de sesión y registro están dentro del enrutamiento principal y la idea es que se rendericen en la misma
página los dos.

## Página de contacto
Tenemos una página de contacto por la que se puede contactar con el servicio en caso de que se quiera dejar un 
comentario o sujerencia, está compuesta por:
  - **INPUT DE CORREO**: Un correo para enviar el mensaje con su respectiva validación, que mi idea es que se rellene 
solo en caso de estar logueado, ya que ya tendríamos el correo del usuario,
  - **TEXTAREA**: Un campo de texto con una validación obligatoria de introducir una pequeña frase al menos, para que 
tenga algo de coerencia.

Ninguno de los elementos pueden estar vacíos y tienen que pasar la validación para que se habilite el botón de envío
y este, entonces mostrara un toast(no desarrollado aún no terminamos de ver css en DIW) de que se envió.

La validación la realizamos con Hook Personalizado

## ValidateFormHook
En nuestro hook realizamos la validación en el que realizamos la validación y devolvemos un estado de error
para cada input en base de ese estado de error, comprobamos que se pasa la validación y habilitamos el input.
Al hacer el hook personalizado lo hacemos reutilizable para otros componentes como el de Inicio de Sesión, y además
dejamos un código más organizado y legible y mantenible.