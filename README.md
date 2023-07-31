<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png" width="150px">
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
