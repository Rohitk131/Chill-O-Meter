'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/Button'
import Confetti from 'react-confetti'
import ChillGuyQuizModal from '@/components/ModelQuiz'
import Image from 'next/image'
import BackgroundDots from '@/components/BackgroundDots'
import Link from 'next/link'
import { Github } from 'lucide-react';
export default function ChillGuyQuizLanding() {
  const [isHovering, setIsHovering] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6">
      <BackgroundDots />
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-12 p-4 sm:p-6 bg-white/5 rounded-3xl backdrop-blur-sm shadow-red-500/10 shadow-2xl border border-red-500/20">
          <div className="text-center md:text-left space-y-4 sm:space-y-6">
            <motion.h1
              className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-tight"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              How Much Chill Guy Are You? 🌴✨
            </motion.h1>

            <motion.p
              className="text-lg sm:text-2xl md:text-3xl text-white/90 max-w-md sm:max-w-xl mx-auto md:mx-0"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover your chill factor—are you a laid-back legend or a stress machine?
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="flex justify-center md:justify-start"
            >
              <Button handleModelOpen={handleOpenModal} />
            </motion.div>
          </div>

          <div className="flex justify-center md:justify-end items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-3/4 sm:w-full max-w-md"
            >
              <Image
                src="/heroImage.png"
                alt="Chill Guy Character"
                width={500}
                height={500}
                priority
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-300 rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
        
      </div>
   
      {isHovering && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={0.1}
        />
      )}

      <ChillGuyQuizModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      <Link 
  href="https://github.com/Rohitk131" 
  target="_blank" 
  className="group"
>
  <button
    className="
      flex flex-row items-center justify-center z-50 mt-6
      gap-2 
      px-4 py-2 
      rounded-full 
      bg-black/90 
      border border-gray-500/40 
      text-white 
      transition-all duration-300 
      hover:bg-black/70 
      hover:scale-105 
      focus:outline-none 
      focus:ring-2 
      focus:ring-blue-500/50 
      active:scale-95
    "
  >
    <Github 
      className="
        group-hover:rotate-[360deg] 
        transition-transform 
        duration-500
      " 
      size={20} 
    />
    <span className="font-poppins text-sm">
      Created by @Rohitk131
    </span>
  </button>
</Link>
    </div>
  )
}
