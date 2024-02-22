const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const UsuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String
}, { collection: 'Usuarios' });

module.exports = mongoose.model('Usuario', UsuarioSchema);
