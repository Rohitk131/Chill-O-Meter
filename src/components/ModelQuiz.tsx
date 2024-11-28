'use client'

import React, { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, Twitter } from 'lucide-react'
import confetti from 'canvas-confetti'
import { ChillGraph } from './ChillGraph'
import { toPng } from 'html-to-image'

type Question = {
  question: string
  options: string[]
}

type ScoreMap = {
  [key: string]: number
}

const questions: Question[] = [
  {
    question: "Which app are you scrolling at 2 AM?",
    options: ["TikTok", "Instagram", "YouTube", "Reddit"]
  },
  {
    question: "How do you react when your favorite show gets canceled?",
    options: ["Rant on Twitter", "Start a petition", "Cry in the shower", "Move on to the next trending show"]
  },
  {
    question: "What's your go-to hangout plan with friends?",
    options: ["Gaming all day", "Binge-eating snacks", "Making TikToks", "Deep conversations about life"]
  },
  {
    question: "Your ideal way to survive boring classes?",
    options: ["Doodling in notebooks", "Scrolling under the desk", "Daydreaming about vacations", "Whispering memes to friends"]
  },
  {
    question: "What's your vibe when Wi-Fi goes down for a day?",
    options: ["Full panic mode", "Finally read that book", "Discover offline games", "Ask neighbors for Wi-Fi"]
  }
]

const calculateChillScore = (answers: string[]): number => {
  const scoreMap: ScoreMap = {
    "TikTok": 2, "Instagram": 3, "YouTube": 4, "Reddit": 5,
    "Rant on Twitter": 1, "Start a petition": 2, "Cry in the shower": 3, "Move on to the next trending show": 5,
    "Gaming all day": 4, "Binge-eating snacks": 3, "Making TikToks": 2, "Deep conversations about life": 5,
    "Doodling in notebooks": 4, "Scrolling under the desk": 2, "Daydreaming about vacations": 5, "Whispering memes to friends": 3,
    "Full panic mode": 1, "Finally read that book": 5, "Discover offline games": 4, "Ask neighbors for Wi-Fi": 2
  }
  
  const totalScore = answers.reduce((sum, answer) => sum + (scoreMap[answer] || 0), 0)
  return (totalScore / (questions.length * 5)) * 100 
}

const getChillMessage = (score: number): string => {
  if (score <= 10) return "Ouch! You need to chill a bit more. 😅"
  if (score <= 30) return "Getting there! A chill mindset is within reach. ✌️"
  if (score <= 60) return "Pretty chill! You're on the right track. 🌊"
  if (score <= 90) return "Super chill vibes detected! Keep it up. 🧘‍♂️"
  return "You're the chill master! Absolute zen vibes. 🌟"
}

type InteractiveQuizModalProps = {
  isOpen: boolean
  onClose: () => void
}

const InteractiveQuizModal: React.FC<InteractiveQuizModalProps> = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isFinished, setIsFinished] = useState<boolean>(false)
  const [chillScore, setChillScore] = useState<number>(0)
  const graphRef = useRef<HTMLDivElement>(null)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
  }

  const handleNext = () => {
    if (selectedOption) {
      const newAnswers = [...answers, selectedOption]
      setAnswers(newAnswers)
      setSelectedOption(null)
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        const score = calculateChillScore(newAnswers)
        setChillScore(score)
        setIsFinished(true)
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        })
      }
    }
  }

  const shareOnTwitter = useCallback(async () => {
    try {
    
      if (!graphRef.current) {
        console.error('Graph ref is null')
        return
      }

  
      const imageUrl = await toPng(graphRef.current, { 
        cacheBust: true,
       
        width: graphRef.current.offsetWidth,
        height: graphRef.current.offsetHeight 
      })

    
      const twitterText = encodeURIComponent(
        `I scored ${chillScore.toFixed(1)}% on the Chill Vibe Quiz! ${
          getChillMessage(chillScore)
        } #ChillVibeQuiz`
      )
      const twitterUrl = `https://twitter.com/intent/tweet?text=${twitterText}&url=${encodeURIComponent(imageUrl)}`
   
      window.open(twitterUrl, '_blank')
    } catch (error) {
      console.error('Error sharing on Twitter:', error)
    }
  }, [chillScore])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 w-[90%] max-w-lg relative shadow-2xl border border-gray-300/30"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <X size={24} />
          </button>

          {!isFinished ? (
            <>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Chill Vibe Quiz
              </h2>

              <div className="mb-6 flex items-center space-x-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-blue-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {currentQuestion + 1}/{questions.length}
                </span>
              </div>

              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-6">
                {questions[currentQuestion].question}
              </p>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className={`w-full px-4 py-3 rounded-lg text-left transition-colors ${
                      selectedOption === option
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>

              <motion.button
                onClick={handleNext}
                className={`mt-6 w-full px-4 py-3 rounded-lg text-white font-medium flex items-center justify-center transition-colors ${
                  selectedOption
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                }`}
                whileHover={selectedOption ? { scale: 1.02 } : {}}
                whileTap={selectedOption ? { scale: 0.98 } : {}}
                disabled={!selectedOption}
              >
                {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
                <ChevronRight size={20} className="ml-2" />
              </motion.button>
            </>
          ) : (
            <>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Your Chill Vibe Results
              </h2>
              <div ref={graphRef} id="chill-graph">
                <ChillGraph score={chillScore} />
              </div>
              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 text-center mt-6">
                Your chill score: {chillScore.toFixed(1)}%
              </p>
              <p className="text-xl text-gray-800 dark:text-gray-200 mb-6 text-center">
                {getChillMessage(chillScore)}
              </p>
              <div className="mt-6 space-y-4">
                <motion.button
                  onClick={shareOnTwitter}
                  className="w-full px-4 py-3 rounded-lg text-white font-medium flex items-center justify-center bg-blue-400 hover:bg-blue-500"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Twitter size={20} className="mr-2" />
                  Share on Twitter
                </motion.button>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default InteractiveQuizModal