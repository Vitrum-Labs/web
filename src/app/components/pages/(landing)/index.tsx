'use client'
import Hero from './Hero'

const LandingPage: React.FC = () => {
  const handleGetStarted = () => {
    console.log('Get started clicked')
  }

  return (
    <div>
      <Hero
        title="The Onchain Identity & Reputation on Arbitrum"
        subtitle="We help you grow your onchain reputation through transparent blockchain-based activities on the Arbitrum network."
        buttonText="Get Started"
        onButtonClick={handleGetStarted}
      />
    </div>
  )
}

export default LandingPage