-- Eliminar la base de datos si existe
DROP DATABASE IF EXISTS login_system;

-- Crear base de datos
CREATE DATABASE login_system;

-- Usar la base de datos
USE login_system;

-- Crear tabla de usuarios
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    salt VARCHAR(50) NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_login DATETIME,
    is_active BOOLEAN NOT NULL DEFAULT 1,
    role VARCHAR(20) NOT NULL DEFAULT 'user' -- Añadido rol directamente en la tabla de usuarios
);

-- Crear tabla de roles
CREATE TABLE roles (
    role_id INT AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT
);

-- Insertar roles predeterminados
INSERT INTO roles (role_name, description) VALUES
('admin', 'Administrador con acceso completo'),
('user', 'Usuario estándar con acceso limitado');

-- Insertar usuarios aleatorios con contraseñas simples
INSERT INTO users (username, email, password_hash, salt, first_name, last_name, is_active, role)
VALUES 
('xkfwpola', 'xkfwpola@domain.com', 'password123', 'salt123', 'John', 'Doe', 1, 'admin'),
('ztmnbyve', 'ztmnbyve@domain.net', 'password123', 'salt456', 'Jane', 'Smith', 1, 'user'),
('qazwsxed', 'qazwsxed@domain.com', 'password123', 'salt789', 'Robert', 'Johnson', 1, 'user'),
('plokijuh', 'plokijuh@domain.net', 'password123', 'salt101', 'Sarah', 'Williams', 1, 'user'),
('mnbvcxza', 'mnbvcxza@domain.com', 'password123', 'salt102', 'Michael', 'Brown', 1, 'user'),
('poiuytrf', 'poiuytrf@domain.net', 'password123', 'salt103', 'Emily', 'Davis', 1, 'user'),
('lkjhgfds', 'lkjhgfds@domain.com', 'password123', 'salt104', 'David', 'Miller', 1, 'user'),
('zxcvbnmq', 'zxcvbnmq@domain.net', 'password123', 'salt105', 'Jessica', 'Wilson', 1, 'user'),
('asdfghjk', 'asdfghjk@domain.com', 'password123', 'salt106', 'James', 'Taylor', 1, 'user'),
('ytrewqpo', 'ytrewqpo@domain.net', 'password123', 'salt107', 'Jennifer', 'Anderson', 1, 'user');