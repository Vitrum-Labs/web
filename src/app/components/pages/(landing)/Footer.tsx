'use client'
import { JetBrains_Mono } from 'next/font/google'

const mono = JetBrains_Mono({ subsets: ['latin'] })

export default function Footer() {
  return (
    <section 
      className={`min-h-screen flex items-center bg-white justify-center p-12 ${mono.className}`}
    >
      <div
        className="w-full max-w-9xl h-200 bg-cover bg-center bg-no-repeat rounded-4xl flex items-center justify-center"
        style={{ backgroundImage: "url(/assets/landing/footer/footer.png)" }}
      >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          See If Your{' '}
          <span className="text-gray-600">Wallet Can</span>
          <br />
          <span className="text-gray-600">Vote</span>
        </h1>
        
        <button className="bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-colors duration-300 inline-flex items-center gap-3">
          Launch App
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>
      </div>
    </section>
  )
}