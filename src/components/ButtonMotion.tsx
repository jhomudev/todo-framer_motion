import { motion } from 'framer-motion'
import { ButtonHTMLAttributes, FunctionComponent } from 'react'

const ButtonMotion: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = ({ onClick, className, children, title }) => {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
      onClick={onClick}
      className={`${className} px-5 py-2 rounded-md bg-myblue text-white`}
      title={title}
    >
      {children}
    </motion.button>
  )
}
export default ButtonMotion
