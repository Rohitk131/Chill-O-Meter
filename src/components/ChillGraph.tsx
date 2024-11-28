import React from 'react'
import { motion } from 'framer-motion'

type ChillGraphProps = {
  score: number
}

export const ChillGraph: React.FC<ChillGraphProps> = ({ score }) => {
  const graphHeight = 200
  const barHeight = (score / 100) * graphHeight

  return (
    <div className="w-full h-[220px] flex items-end justify-center mb-6">
      <div className="w-32 h-[200px] bg-gray-200 dark:bg-gray-700 rounded-t-lg relative">
        <motion.div
          className="absolute bottom-0 w-full bg-blue-500 rounded-t-xl"
          initial={{ height: 0 }}
          animate={{ height: barHeight }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-800 dark:text-white">
            {score.toFixed(1)}%
          </span>
        </div>
        <div className="absolute -left-11 bottom-0 h-full flex flex-col justify-between items-end text-sm text-gray-500 dark:text-gray-400">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>
      </div>
    </div>
  )
}