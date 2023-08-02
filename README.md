<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png" width="120px">
<h1 align="center">GraphQL</h1>
<h2 align="center">Graph Query Language</h2>

¿Qué es GraphQL?

Fue inventado por Facebook como una necesidad para obtener datos del servidor, desarrollado desde 2012 pero open source desde 2015.
Es independiente de cualquier lenguaje o libreria
No es un servidor, no es una base de datos, ni tampoco es un cliente para realizar consultas.
Graph es similar a SQL, ya que es un lenguaje de consultas

## GraphQL & REST

Graph es desarrollado pensando en el performance en utilizar unicamente los datos que necesitamos.

<img src="https://blogger.googleusercontent.com/img/a/AVvXsEj_76AFj8fAiL1jU6KTJYGAeHWYpdLQKux0HdnW0mb1fkDlpTSFb21O4gX-jsHMgC8WvslKs18VwZ2149b2rZW_XawEQgVEDuZ3FrQNRaZDi2A7BCd3Y6bNrxpupxP_cSeJ8QkrhjWdHwZdS98_r0L9qN3uADWWNzQAczOWGafw-WzVFvmG8JP7HC3j=w566-h318" width="500px">

REST API'S
En REST hay una gran cantidad de endpoints, en graph existe una sola URL y en ella se hacen todas las consultas.

Con REST API tienes que hacer varias peticiones para obtener toda la información que necesitas. Mientras que GraphQL te permite pedir todo lo que quieras de una sola vez.

## Graph & SQL

SQL es un lenguaje que ha existido por 40 años, se puede colocar graphQL sobre una base de datos SQL o NOSQL, ya sea MongoDB, Redis, MySQL, SQL, PotgresQL

## Graph & Apollo

### Apollo

Apollo es una plataforma que te permitirá trabajar con graphQL.  
Apollo viene en 2 paquetes:

_Apollo Server_  
Es utilizado para las tareas relacionadas con el servidor y escribir / consultar la base de datos

_Apollo Client_  
Es utilizado en el cliente (Puede ser React) Para mostrar los resultados de lo que ya se consulto en el servidor.
Se puede instalar sobre create-react-app o next.js  
Va a cachar las consultas y datos para mayor performance

## Terminología en GraphQL

### Query

Es la forma de extraer la información existente desde la base de datos o Rest API  
Equivalente a un select de SQL o un get de una Rest API.

En el Query declaras que campos o datos vas a requerir para tu consulta y también soporta parámetros (Input)

El Query en graph es universal, por lo tanto su sintaxis es igual en Angular, Node, React o si la base de datos es SQL o NOSQL

_Ejemplo de Query:_

<img src="https://miro.medium.com/v2/resize:fit:640/1*-u_N5iZC7i22d7apWRsiCA.gif" width="500px">

### Mutation

La Mutation se utiliza para las otras 3 acciones del CRUD:

-   Actualizar
-   Eliminar
-   Crear Registros

Similares a un PUT, PATCH, DELETE o POST de una Rest API o un DELETE, UPDATE o INSERT en SQL

_Ejemplo de Mutation_

```
mutation eliminarProducto($id : ID) {
    eliminarProducto(id: $ID)
}

{
    "data": {
        "eliminarProducto": "Se elimino correctamente"
    }
}
```

### Schema

Es lo que describe tus tipos de objeto, queries y datos de tu aplicación.

Utiliza un typing en el que defines si un campo será de tipo string, int, boolean u otro tipo de dato

El schema y el resolver están muy relacionados, el schema define la forma de los datos mientras que el resolver se encarga de la comunicación con el lenguaje del servidor y la base de datos

_Ejemplo de Schema_

```
type Cliente {
    id: ID
    nombre: String
    apellido: String
    edad: Int
    emails: [Email]
}

type Email {
    email: String
}
```

### Resolver

Son funciones que son responsables de retornar los valores que existen en tu schema.  
Se encargara de consultar la base de datos y traer el resultado.  
Los nombres de los resolvers deben ser iguales a los definidos en el schema

_Ejemplo de Resolver_

```
ObtenerClientes: async () => {
    const Clientes = await Clientes.find({});
    return Clientes;
}
```

### Inputs o Argumentos para Resolvers

Los inputs te permiten pasar valores

_Ejemplo_

```
query {
  obtenerHelados(sabor: "fresa", tamaño: "mediano") {
    sabor
    tamaño
    toppings
  }
}

```

_Esto nos devolvera_

```
{
  "data": {
    "obtenerHelados": [
      {
        "sabor": "fresa",
        "tamaño": "mediano",
        "toppings": ["chispas de chocolate", "sirope de fresa"]
      },
      {
        "sabor": "fresa",
        "tamaño": "mediano",
        "toppings": ["nueces", "sirope de fresa"]
      }
    ]
  }
}

```

### Variables en graphQL

Las variables se definen con el simbolo de dolar $ + nombre de la variable

_Ejemplo_

```
query ObtenerHelado($sabor: String, $tamaño: String) {
  obtenerHelados(sabor: $sabor, tamaño: $tamaño) {
    sabor
    tamaño
    toppings
  }
}

```
