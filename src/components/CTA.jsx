import React from 'react'
import Button from './Button'
import styles from '../style'
import { cn } from '../lib/utils'

const CTA = () => {
  return (
    <section className={cn(styles.flexCenter, styles.marginY, styles.padding, 'sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow')}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={cn('max-w-[470px] mt-5', styles.paragraph)}>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>

      <div className={cn('sm:ml-10 ml-0 sm:mt-0 mt-10', styles.flexCenter)}>
        <Button />
      </div>
    </section>
  )
}

export default CTA