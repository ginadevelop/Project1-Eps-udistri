# **GROUP MEMBERS**

- Alexander Davila

- Slayder Reyes

- Joan Esteban Mendez Martinez

- Nhorverly Astrid Jacome

- Gina Ardila Zuñiga

#  API

API-REST facilita la gestión y persistencia de citas médicas en un entorno hospitalario. Se basa en un modelo cliente-servidor, donde los clientes pueden interactuar con el servidor a través de formularios y peticiones HTTP para realizar operaciones CRUD sobre los datos de pacientes y doctores.

**También se especifica el método de rutas correspondiente**

- *Create = post* 

- *Read = get*

- *Update = put*

- *Delete = delete*


## INSTALACIÓN - CONFIGURACIÓN
Para usar el proyecto en su repositorio local, siga cuidadosamente las indicaciones, teniendo en cuenta que debe clonar el repositorio
inicialmente, luego siga las instrucciones indicadas:

- Inicializar el proyecto
```code
    npm init 
```
- Instalar dependencias del proyecto
```code
    npm i express nodemon body-parser mysql2 dotenv cors
```
- *(Opcional)* Instalar Swagger para documentar la API
```code
    npm i swagger-jsdoc swagger-ui-express
```
-  Instalar ORM sequelize con Typescript
```code
    npm i sequelize sequelize-typescript
```
- Instalar nodemon para Typescript
```code
    npm install --save-dev ts-node nodemon
```
- Instalar los tipos para trabajar con Typescript
```code
    npm i @types/node @types/express @types/body-parser @types/mysql @types/dotenv
```
- Crear el proyecto Typescript
```code
    npx tsc --init
```
- Crear el fichero .env *(Variables de entorno para la base de datos )*
```code
    .env
```
## TECNOLOGÍAS
Tecnologías usadas en el proyecto:

[![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)]()

[![Expressjs](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)]()

[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)]()

[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white&labelColor=101010)]()

[![Node.JS](https://img.shields.io/badge/Node.JS-339933?style=for-the-badge&logo=node.js&logoColor=white&labelColor=101010)]()

[![Sequelize](https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue)]()

<hr>

<h2>DIAGRAMA - API </h2>

[![imagen-2023-12-01-180439533.png](https://i.postimg.cc/mZyTncmZ/imagen-2023-12-01-180439533.png)](https://postimg.cc/MXXkMGkg)

<h3>
    RUTAS API
</h3>

Para consumir la API correctamente se debe tener en cuenta la siguiente estructura...

#### *endpoint/Doctores*
```http
  GET      /api/doctores
  GET      /api/doctores/{id}
  POST     /api/doctores/{body}
  PUT      /api/doctores/{id}
  DELETE   /api/doctores/{id}
```
##### **body**
```json
    {
        "id_profesional":"666",
        "nombre":"Juanito",
        "apellido":"Alimaña",
        "correo":"example@gmail.com",
        "telefono":"31415926535"
    }   

```

-----

#### *endpoint/Pacientes*
```http
  GET      /api/pacientes
  GET      /api/pacientes/{id}
  POST     /api/pacientes/{body}
  PUT      /api/pacientes/{id}
  DELETE   /api/pacientes/{id}
```
##### **body**
```json
    {
        "id_numeroCedula":"777",
        "nombre":"Angel",
        "apellido":"Casallas",
        "fechaNacimiento":"2000-08-28",
        "id_telefono":"315678"
    } 
#### *Consultorio*
```http
  GET      /api/consultorio
  GET      /api/consultorio/{id}
  POST     /api/consultorio/{body}
  PUT      /api/consultorio/{id}
  DELETE   /api/consultorio/{id}
```
##### **body**
```json
    {
        "id_consultorio":"101",
        "direccionConsultorio":"Transversal 78H bis#41c-48 - Compensar"
    }
```
-----

#### *endpoint/Especialización*
```http
  GET      /api/especialidad   
  GET      /api/especialidad/{id}
  POST     /api/especialidad/{body}
  PUT      /api/especialidad/{id}
  DELETE   /api/especialidad/{id}
```
##### **body**
```json
    {
        "especialidad":"Neurologia",
        "descripcion":"Medicina especializada"
    }
```

-----
#### *endpoint/Cita*
```http
  GET      /api/cita   
  GET      /api/cita/{data}
  POST     /api/cita/{id}
  PUT      /api/cita/{id}
  DELETE   /api/cita/{id}
```
##### **body**
```json
    {
        "fecha_hora":"2023-12-07T12:00:00",
        "id_profesional":"56254652",
        "id_numeroCedula":"98723421",
        "id_especializacion":"1",
        "id_consultorio":"101"
    } 
```


### Ejemplo para el uso de parametros
#### Get item {id} 

```http
  GET /api/consultorio/${id}
```

| Parámetro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id del recurso |


<hr>

<h3>PRUEBAS - API</h3>

*api/citas ${data}*

![api/citas](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGNmajYwNnhkdW5zNG5vc3Njd2cxZ2R0bTA3Nml0emhleTQzYms2NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/irKTaZBzqcRc5RJ22w/giphy.gif)

*api/doctores ${data}*

![api/doctores](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWl1cHk4aHRycmgydm95Y2JwdmMzdDRodXF0MGF3NHY5bG52cXg5OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UlDTBnTGP4P2hOURwR/giphy.gif)

*api/pacientes ${data}*

![api/pacientes](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMngycHA0NW1yemVoNmkzMXRiM2lidG50ZTgwN29weTdlcmw2dnZmZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5gkMV9oBIx7c02xcbY/giphy.gif)

*api/consultorio:id*

![api/consultorio](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXNxeGM1eHF1eGowOW5pcmZzMDMybHB5NDFzbXp0cGE1YWJ1Z2U0eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1R0Ek0YD2TX5IVX5RM/giphy.gif)

*api/especializacion:id*

![api/especializacion](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd201dW16MDkzcW5vaTcwd21uN2U4b2lzOHE1MmhkeXk1dm9rM2lvYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sHILILxU4Oe8kfhz9r/giphy.gif)