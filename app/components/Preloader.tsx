"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const quirkyMessages = [
  "Brewing some digital magic...",
  "Assembling the pixels...",
  "Warming up the creative engines...",
  "Preparing the spectacle...",
  "Almost there, just a moment...",
]

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 1000)
          return 100
        }
        return prev + 1
      })
    }, 20)

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % quirkyMessages.length)
    }, 2000)

    return () => {
      clearInterval(interval)
      clearInterval(messageInterval)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 1.2,
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 0.8 }
            }
          }}
          className="fixed inset-0 z-50 bg-[#1e2321]"
        >
          {/* Subtle Background Animation */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 30% 20%, rgba(255,102,51,0.1) 0%, rgba(30,35,33,0) 50%)",
                "radial-gradient(circle at 70% 80%, rgba(115,224,168,0.1) 0%, rgba(30,35,33,0) 50%)",
                "radial-gradient(circle at 30% 20%, rgba(255,102,51,0.1) 0%, rgba(30,35,33,0) 50%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main Content */}
          <div className="relative h-full w-full">
            {/* Percentage Indicator */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="absolute bottom-8 right-8"
            >
              <motion.div
                className="text-6xl font-bold text-[#ff6633]"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {progress}%
              </motion.div>
            </motion.div>

            {/* Quirky Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="absolute bottom-8 left-8 max-w-md"
            >
              <motion.p
                key={messageIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-white/80 text-lg font-light tracking-wide"
              >
                {quirkyMessages[messageIndex]}
              </motion.p>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.div
                className="h-32 w-32 rounded-full border border-white/10"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <motion.div
                  className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#73e0a8]"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 