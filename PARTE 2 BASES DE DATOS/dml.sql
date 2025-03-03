-- Insertar registros en la tabla USUARIOS
INSERT INTO USUARIOS (NOMBRE, CORREO, PAIS, FOTO) VALUES
('Juan Pérez', 'jjperez983@gmail.com', 'Colombia', 'https://th.bing.com/th/id/OIP.NqlzjzgzfHI046FjmPZkogHaEK?w=280&h=180&c=7&r=0&o=5&pid=1.7'),
('María García', 'maria.garcia@hotmail.com', 'México', 'https://d-art.ppstatic.pl/kadry/k/r/1/52/e0/66546aef0ff6c_o_large.jpg'),
('Carlos López', 'carlop@ejemplo.com', 'España', 'https://th.bing.com/th/id/OIP.1XmctktVAucZaVUCyVV6hAHaE8?rs=1&pid=ImgDetMain'),
('Ana Martínez', 'amartinez@yahoo.com', 'Argentina', 'https://th.bing.com/th/id/OIP.Q8r6v--dGhDJ_SS_8ZLZRQHaFj?rs=1&pid=ImgDetMain'),
('Luisa Fernández', 'luisa2615@icloud.com', 'Chile', 'https://th.bing.com/th/id/OIP.6iU-Wz-BqHQXV5IW4g9QnAHaEK?rs=1&pid=ImgDetMain');

-- Insertar registros en la tabla DIRECCIONES
INSERT INTO DIRECCIONES (USUARIO_ID, CALLE, CIUDAD, ESTADO, CODIGO_POSTAL) VALUES
(1, 'Calle 123', 'Bogotá', 'Cundinamarca', '110111'),
(2, 'Avenida Revolución', 'Ciudad de México', 'CDMX', '01000'),
(3, 'Calle Gran Vía', 'Madrid', 'Madrid', '28013'),
(4, 'Avenida de Mayo', 'Buenos Aires', 'Buenos Aires', '1084'),
(5, 'Calle Providencia', 'Santiago', 'Santiago', '7500000');

SELECT 
    USUARIOS.NOMBRE, 
    USUARIOS.CORREO, 
    DIRECCIONES.CALLE, 
    DIRECCIONES.CIUDAD, 
    DIRECCIONES.ESTADO, 
    DIRECCIONES.CODIGO_POSTAL
FROM 
    USUARIOS
INNER JOIN 
    DIRECCIONES ON USUARIOS.ID = DIRECCIONES.USUARIO_ID;

CREATE VIEW VW_USUARIOS_CON_DIRECCIONES AS
SELECT 
    USUARIOS.NOMBRE, 
    USUARIOS.CORREO, 
    DIRECCIONES.CALLE, 
    DIRECCIONES.CIUDAD, 
    DIRECCIONES.ESTADO, 
    DIRECCIONES.CODIGO_POSTAL
FROM 
    USUARIOS
INNER JOIN 
    DIRECCIONES ON USUARIOS.ID = DIRECCIONES.USUARIO_ID;



DELIMITER //
CREATE PROCEDURE ObtenerUsuario(
    IN usuario_id INT
)
BEGIN
    SELECT NOMBRE, CORREO, PAIS
    FROM USUARIOS
    WHERE ID = usuario_id;
END //
DELIMITER ;

CALL ObtenerUsuario(1);

