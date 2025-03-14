CREATE TABLE USUARIOS (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NOMBRE VARCHAR(100) NOT NULL,
    CORREO VARCHAR(50) NOT NULL UNIQUE,
    PAIS VARCHAR(50),
    FOTO VARCHAR(255)
);

CREATE TABLE DIRECCIONES (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    USUARIO_ID INT,
    CALLE VARCHAR(100),
    CIUDAD VARCHAR(50),
    ESTADO VARCHAR(50),
    CODIGO_POSTAL VARCHAR(20),
    FOREIGN KEY (USUARIO_ID) REFERENCES USUARIOS(ID)
);
