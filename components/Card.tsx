import React from 'react'

interface CardProps {
  className?: string
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ className = '', children }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  )
}

export const CardHeader: React.FC<CardProps> = ({ className = '', children }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  )
}

export const CardContent: React.FC<CardProps> = ({ className = '', children }) => {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  )
}

export const CardTitle: React.FC<CardProps> = ({ className = '', children }) => {
  return (
    <h3 className={`text-2xl font-semibold ${className}`}>
      {children}
    </h3>
  )
}

