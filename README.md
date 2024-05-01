# Blog de MMA

Este proyecto es un blog dedicado a las artes marciales mixtas (MMA). Permite a los usuarios ver publicaciones sobre eventos, noticias, peleas, etc., así como también permite a los administradores agregar, editar y eliminar publicaciones.

## Características

- **Autenticación y autorización**: Los usuarios pueden iniciar sesión para acceder al área de administración. La autenticación se realiza utilizando tokens JWT.
- **Protección de rutas**: Se utilizan rutas protegidas para restringir el acceso a las áreas de administración solo a usuarios autenticados.
- **Gestión de publicaciones**: Los administradores pueden agregar, editar y eliminar publicaciones del blog.
- **Interfaz amigable**: Se proporciona una interfaz de usuario intuitiva y fácil de usar para navegar por el blog y administrar las publicaciones.

## Tecnologías utilizadas

- **Frontend**:
  - React.js: Biblioteca de JavaScript para construir interfaces de usuario.
  - React Router: Para el enrutamiento en la aplicación de React.
  - React Suspense: Para el lazy loading de componentes y datos.
  - Bootstrap: Para estilos y componentes de interfaz de usuario.
  - Font Awesome: Para iconos y recursos visuales.
  - Axios: Para realizar solicitudes HTTP al servidor.

- **Backend**:
  - Node.js: Entorno de ejecución de JavaScript del lado del servidor.
  - Express.js: Marco de aplicación web para Node.js.
  - JWT (JSON Web Tokens): Para la autenticación de usuarios.
  - MySql: Base de datos SQL utilizada para almacenar publicaciones y datos de usuario.

## Requisitos previos

- Node.js y npm instalados en tu sistema.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega a la carpeta del proyecto en la terminal.
3. Ejecuta `npm install` para instalar las dependencias del proyecto.
4. Configura el servidor backend con la conexión a tu base de datos MongoDB.
5. Ejecuta `npm start` para iniciar el servidor backend.
6. Configura el frontend para que se conecte al servidor backend (por ejemplo, ajusta las URL de las solicitudes API).
7. Ejecuta `npm start` en el directorio del frontend para iniciar la aplicación React.

## Uso

- Accede a la aplicación desde tu navegador web.
- Regístrate o inicia sesión si eres un usuario administrador.
- Explora las publicaciones del blog y realiza acciones como agregar, editar o eliminar publicaciones.

## Contribución

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/improvement`).
3. Realiza tus cambios y haz commit de ellos (`git commit -am 'Add some feature'`).
4. Haz push de tu rama al repositorio (`git push origin feature/improvement`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes ver el archivo de licencia [aquí](LICENSE).

