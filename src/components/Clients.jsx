import React from 'react'
import { clients } from '../constants'
import styles from '../style'
import { cn } from '../lib/utils'

const Clients = () => {
  return (
    <section className={cn(styles.flexCenter, 'my-4')}>
      <div className={cn(styles.flexCenter, 'flex-wrap w-full')}>
        {
          clients.map((client) => (
            <div key={client.id} className={cn('flex-1 sm:min-w-[192px] min-w-[120px]', styles.flexCenter)}>
              <img src={client.logo} alt='client' className='sm:w-[192px] w-[100px] object-contain filter hover:brightness-200 hover:contrast-200' />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Clients