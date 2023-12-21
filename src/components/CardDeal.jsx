import React from 'react'
import { cn } from '../lib/utils'
import styles, { layout } from '../style'
import Button from './Button'
import { card } from '../assets'

const CardDeal = () => {
  return (
    <section className={cn(layout.section)}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden' /> in few easy steps.
        </h2>
        <p className={cn('max-w-[470px] mt-5', styles.paragraph)}>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={cn(layout.sectionImg)}>
        <img src={card} alt='card' className='w-[100%] h-[100%]' />
      </div>
    </section>
  )
}

export default CardDeal