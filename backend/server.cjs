const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'login_system'
});

app.options('*', cors());

db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos MySQL establecida');
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ message: 'Usuario y contraseña son requeridos' });
  }

  const query = 'SELECT * FROM users WHERE username = ?';
  
  db.query(query, [username], (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
    
    if (results.length === 0) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }
    
    const user = results[0];
    
    if (password !== user.password) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }
    
    db.query('UPDATE users SET last_login = NOW() WHERE user_id = ?', [user.user_id], (err) => {
      if (err) {
        console.error('Error al actualizar el último inicio de sesión:', err);
        return res.status(500).json({ message: 'Error interno del servidor' });
      }
      
      delete user.password; 
     
      res.json({ message: 'Inicio de sesión exitoso', user });
    });
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
