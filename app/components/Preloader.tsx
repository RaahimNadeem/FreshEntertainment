"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 30)

    const timer = setTimeout(() => {
      setIsLoading(false)
      router.push('/')
    }, 4000)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [router])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 0.8,
            transition: { 
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 0.3 }
            }
          }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-[#ff6633] to-[#ff7744]"
        >
          <motion.div
            initial={{ scale: 1 }}
            exit={{ 
              scale: 2,
              rotate: 5,
              transition: { 
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
              }
            }}
            className="absolute bottom-8 right-8"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-8xl md:text-9xl font-bold text-white"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                textShadow: '0 0 30px rgba(0, 0, 0, 0.3)'
              }}
            >
              {progress}%
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 