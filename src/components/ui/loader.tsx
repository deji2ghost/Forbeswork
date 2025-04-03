import { TbLoader2 } from 'react-icons/tb'
import { cn } from '../../lib/utils'

const Loader = ({className}: {className?: string}) => {
  return (
    <TbLoader2 className={cn("animate-spin text-[#006694] text-center text-xl mx-auto absolute top-1/2 -translate-1/2 left-0 right-0 flex items-center justify-center", className)}/>
  )
}

export default Loader
