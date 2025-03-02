# PRUEBA TÉCNICA - DESARROLLADOR WEB

Plazo máximo de entrega: lunes 3 de marzo, 5:00 a.m. 



## Dependencias del Proyecto

#### Frontend(React)

- **React**: Biblioteca para construir interfaces de usuario.

- **Axios**: Cliente HTTP para realizar solicitudes a la API.

#### Backend (Node.js)

- **Express**: Framework para aplicaciones web en Node.js.

- **Axios**: Cliente HTTP para realizar solicitudes a la API externa.

- **Cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing).

## Ejecución del Programa

1. **Instalar** dependencias para el front

```bash
cd Prueba-Tecnica
npm install axios
```

2. **Instalar** dependencias para el back

```bash
cd randomuser-proxy
npm install express axios cors
```

3. **Iniciar** el servidor backend

```bash
node server.js
```

4. **Iniciar** la aplicacion frontend

```bash
cd my-react-app
npm start
```

5. **Acceder** a la aplicacion

```
Abre tu navegador y ve a http://localhost:3000
```



### Objetivo 

Evaluar los conocimientos en React (frontend), Node.js (backend), Oracle (base de  datos) y el manejo de versiones con GitLab, así como la capacidad lógica y de resolución  de problemas del candidato. La prueba consta de tres partes:



1. Desarrollo de un aplicativo web que consuma la API pública  RandomUser API.  2. Ejercicios en Oracle sobre relacionamiento entre tablas y creación de  objeto  3. Manejo de versiones con Git 
2. Ejercicios en Oracle sobre relacionamiento entre tablas y creación de  objeto
3. Manejo de versiones con Git 



## PARTE 1: Aplicación Web



1. #### Frontend (React): 

   - Crear una interfaz que muestre una lista de usuarios obtenidos de la API  RandomUser (https://randomuser.me/api/?results=25). 
   - Cada usuario debe mostrarse con su nombre, correo electrónico, foto y  nacionalidad.  
   - Crear una vista adicional donde se muestren los detalles completos de un  usuario.   
   - Implementar un buscador que permita filtrar usuarios por nombre o país.  
   - Usar componentes funcionales y hooks (useState, useEffect, etc.).  
   - Estilizar la aplicación usando CSS o alguna librería como Material-UI o  TailwindCSS. 

Extras (opcional, pero valorado)

- Implementar manejo de estados con React Redux  

- Usar React Router para el enrutamiento de las vistas 

  

2. #### Backend (Node.js + Express): 

   - Crear un servidor en Node.js que actúe como intermediario entre el frontend  y la API de RandomUser.  
   - El servidor debe exponer un endpoint /api/users que devuelva los datos de  los 25 (n) usuarios  
   - Implementar manejo de errores 

   Extras (opcional, pero valorado)  

   - Manejo de autenticación con JWT. 
   - Implementar middleware para el manejo de errores y logs 

   

## Parte 2: Base de Datos (Oracle)



1. #### Creación de Tablas: 

   - Crear una tabla USUARIOS con los siguientes campos:  

     - ID (clave primaria, autoincremental)  
     - NOMBRE (nombre completo del usuario)  
     - CORREO (correo electrónico)  
     - PAIS (país del usuario)  
     - FOTO (URL de la foto del usuario) 

   - Crear una tabla DIRECCIONES con los siguientes campos:  

     - ID (clave primaria, autoincremental)  
     - USUARIO_ID (clave foránea que referencia a USUARIOS.ID)  
     - CALLE (nombre de la calle)  
     - CIUDAD (ciudad)  
     - ESTADO (estado)  
     - CODIGO_POSTAL (código postal) 

     

2. #### Relacionamiento y Consultas: 

   - Insertar 5 registros en la tabla USUARIOS y 5 registros en la tabla DIRECCIONES,  asegurando que cada dirección esté relacionada con un usuario.  
   - Escribir una consulta SQL que devuelva el nombre del usuario, su correo y su  dirección completa (calle, ciudad, estado y código postal).  
   - Crear una vista llamada VW_USUARIOS_CON_DIRECCIONES que muestre el nombre  del usuario, su correo y su dirección completa. 

   

3. #### Objetos de Base de Datos: (Extras, pero valorados) 

   - Crear un procedimiento almacenado que reciba como parámetro el ID de un  usuario y devuelva su nombre, correo y país.  
   - Crear un trigger que, al insertar un nuevo usuario en la tabla USUARIOS, registre en  una tabla de auditoría (AUDITORIA_USUARIOS) la fecha y hora de la inserción. 

   

## Parte 3: Manejo de Versiones (GitLab) - Entregables 



- Crear un repositorio público en GitLab con el código de la aplicación web  (frontend y backend) y los scripts de la base de datos.  
  - Realizar commits significativos que muestren el progreso del desarrollo.  
  - Incluir un README.md en el repositorio con: 
    - Instrucciones para ejecutar el proyecto (frontend, backend). Instalación  de dependencias y más.  
    - Explicación breve de la estructura del proyecto.  
    - Capturas de pantalla de la aplicación funcionando. (Extra) 
