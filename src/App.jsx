import React from 'react'
import styles from './style'
import { cn } from './lib/utils'
import { Billing, Business, CTA, CardDeal, Clients, Footer, HeroSection, NavBar, Stats, Testimonials } from './components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={cn(styles.paddingX, styles.flexCenter)}>
        <div className={cn(styles.boxWidth)}>
          <NavBar />
        </div>
      </div>

      <div className={cn('bg-primary', styles.flexStart)}>
        <div className={cn(styles.boxWidth)}>
          <HeroSection />
        </div>
      </div>

      <div className={cn('bg-primary', styles.paddingX, styles.flexStart)}>
        <div className={cn(styles.boxWidth)}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App