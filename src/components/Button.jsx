import React from 'react'
import { cn } from '../lib/utils'

const Button = ({ styles }) => {
  return (
    <button type='button' className={cn('py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-lg', styles)}>
      Get Started
    </button>
  )
}

export default Button