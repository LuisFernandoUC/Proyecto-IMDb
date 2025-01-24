require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const actorRoutes = require('./routes/actorRoutes');

const app = express();

// Middleware
app.use(express.json()); // Para parsear el cuerpo de las peticiones

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.log(err));

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/actors', actorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
    