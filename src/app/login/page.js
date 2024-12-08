



"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid'
    
    if (!password) newErrors.password = 'Password is required'
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Implement login logic
      console.log('Login attempted', { email, password })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        <Link href="/" className="block text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-500 to-emerald-900 text-transparent bg-clip-text">
            Prodmast
          </h1>
        </Link>
        
        <p className="text-center text-gray-600 mb-6">
          Your one-stop trade copier platform
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className={`w-full p-3 border rounded-md outline-none 
                ${errors.email 
                  ? 'border-red-500 bg-red-50' 
                  : 'border-gray-300 focus:border-emerald-500'}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={`w-full p-3 border rounded-md outline-none 
                ${errors.password 
                  ? 'border-red-500 bg-red-50' 
                  : 'border-gray-300 focus:border-emerald-500'}`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          
          <div className="text-right">
            <Link href="/forgot-password" className="text-sm text-emerald-600 hover:underline">
              Forgot password?
            </Link>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-emerald-600 text-white p-3 rounded-md hover:bg-emerald-700 transition-colors"
          >
            Login
          </button>
        </form>
        
        <p className="text-center text-sm mt-4">
          Don't have an account? {' '}
          <Link href="/register" className="text-emerald-600 hover:underline">
            Register
          </Link>
        </p>
        
        <p className="text-center text-xs text-gray-500 mt-4">
          © 2024 Prodmast. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default page