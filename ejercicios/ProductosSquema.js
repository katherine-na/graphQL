const mongoose = require('mongoose');

//Creando Modelo
const ProductosSquema = mongoose.Squema({
    nombre: {
        type: String,
        require: true,
        trim: true,
    },
    existencia: {
        type: Number,
        require: true,
        trim: true,
    },
    precio: {
        type: Number,
        require: true,
        trim: true,
    },
    creado: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.mode('Producto', ProductosSquema);

//Creando Squema

const Productos = gql`

input productoInput {
    nombre: String
}

type Mutation {
   nuevoProducto(input: ProductoInput) 
}

`;
