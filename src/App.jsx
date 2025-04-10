import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Iniciar sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600">Correo electrónico</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Entrar
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-500">
          ¿No tienes cuenta? <a href="#" className="text-blue-500 hover:underline">Regístrate</a>
        </p>
      </div>
    </div>
  )
}

export default App
