import React from 'react'
import Heading from '../../../components/UI/Heading/Heading.component'
import { motion } from 'framer-motion'

const TargetHeader = () => {
  return (
    <div className="relative z-10 flex flex-col items-center text-center mb-20">
      {/* Ruchoma kometa */}
      <motion.div 
        className="absolute w-16 h-16 opacity-80 pointer-events-none"
        animate={{
          x: ['-100vw', '100vw'],
          y: ['10vh', '-10vh'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear'
        }}
        style={{
          backgroundImage: 'linear-gradient(45deg, rgba(124, 58, 237, 0.8), rgba(0, 0, 0, 0))',
          filter: 'blur(8px)',
          borderRadius: '50% 0 80% 0',
          transform: 'rotate(-45deg)',
        }}
      />
      
      <Heading className="mb-4">
        <span className="bg-gradient-to-r from-cyan-400 via-primary to-blue-400 bg-clip-text text-transparent">
          Dla kogo jest ten kurs?
        </span>
      </Heading>
      
      <p className="text-lg max-w-3xl text-white/90">
        Odkryj swoją orbitę w kosmosie programowania
      </p>
      
      {/* Dekoracyjne gwiazdy */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: 'blur(1px)',
            opacity: 0.7,
          }}
          animate={{ 
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

export default TargetHeader 