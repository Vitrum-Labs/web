'use client'
import { JetBrains_Mono } from 'next/font/google'
import { motion } from 'framer-motion'

const mono = JetBrains_Mono({ subsets: ['latin'] })

export default function Footer() {
  return (
    <section 
      className={`min-h-screen flex items-center bg-gray-50 justify-center p-12 ${mono.className}`}
    >
      <motion.div
        className="w-full max-w-9xl h-200 bg-cover bg-center bg-no-repeat rounded-4xl flex items-center justify-center"
        style={{ backgroundImage: "url(/assets/landing/footer/footer.png)" }}
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1 
            className="text-4xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              See If Your{' '}
            </motion.span>
            <motion.span 
              className="text-gray-600"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Wallet Can
            </motion.span>
            <br />
            <motion.span 
              className="text-gray-600"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              Vote
            </motion.span>
          </motion.h1>
          
          <motion.button 
            className="bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-colors duration-300 inline-flex items-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.3 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.5 }}
            >
              Launch App
            </motion.span>
            <motion.svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.7 }}
              whileHover={{ x: 5 }}
            >
              <path d="m9 18 6-6-6-6"/>
            </motion.svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}