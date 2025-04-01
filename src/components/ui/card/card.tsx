import React from 'react'
import { cn } from '../../../lib/utils'
import { CardProps } from './types'

const Card:React.FC<CardProps> = ({className, text, header, icon}) => {
  return (
    <div className={cn("border border-offGrey flex flex-col gap-1 p-2 w-full rounded-md", className)}>
        <div className='flex justify-between'>
            <h1>{header}</h1>
            {icon}
        </div>
      <p>{text}</p>
    </div>
  )
}

export default Card