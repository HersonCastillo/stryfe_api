**Stryfe API**

Tecnologías utilizadas:
    + Express
    + Socket.io
    + SHA256
    + Sequelize ORM
    + MYSQL2
    + Passport JWT

Ejemplo de uso para rutas:

UsuariosCotroller
    Ruta: /api/v1/usuario       [POST] => Crear usuario
        Body: application/json
        Data: {
            nombre: text,
            apellido: text,
            telefono: [762]xxx-xxxx,
            dui: xxxxxxxx-x,
            password: text,
            correo: text,
            fecha_nac: date,
            direccion: text
        }
        Token Required: true
        Response Object: success, error
    Ruta: /api/v1/usuario       [GET] => Listar usuarios
        Body: application/json
        Data: null
        Token Required: true
        Response Object: success, error, Array[]
    Ruta: /api/v1/usuario/:id   [GET] => Listar usuario
        Body: application/json
        Data: null,
        Token Required: true
        Response Object: success, error
    Ruta: /api/v1/usuario       [PUT] => Actualizar usuario
        Body: application/json
        Data: {
            nombre: text,
            apellido: text,
            telefono: [762]xxx-xxxx,
            dui: xxxxxxxx-x,
            correo: text,
            fecha_nac: date,
            direccion: text,
            id: number | text
        }
        Token Required: true
        Response Object: success, error
    Ruta: /api/v1/usuario       [DELETE] => Eliminar usuario
        Body: application/json
        Data: {
            id: text | number
        }
        Token Required: true
        Response Object: success, error

CategoriasCotroller
    Ruta: /api/v1/categoria       [POST] => Crear categoria
        Body: application/json
        Data: {
            descripcion: text
        }
        Token Required: true
        Response Object: success, error
    Ruta: /api/v1/categoria       [GET] => Listar categorias
        Body: application/json
        Data: null
        Token Required: true
        Response Object: success, error, Array[]
    Ruta: /api/v1/categoria/:id   [GET] => Listar categoria
        Body: application/json
        Data: null,
        Token Required: true
        Response Object: success, error
    Ruta: /api/v1/categoria       [PUT] => Actualizar categoria
        Body: application/json
        Data: {
            descripcion: text,
            id: text | number
        }
        Token Required: true
        Response Object: success, error
    Ruta: /api/v1/categoria       [DELETE] => Eliminar categoria
        Body: application/json
        Data: {
            id: text | number
        }
        Token Required: true
        Response Object: success, error