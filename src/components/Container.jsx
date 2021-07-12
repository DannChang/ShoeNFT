import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import Footer from './Footer'

export const Container = ({ title, children, column, className }) => {
  return (
    //   Animation page effect
    <motion.div
      className='flex flex-col h-screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      <Header className='absolute top-0 right-4' />
      <main className={`flex-1 pt-20 flex ${className}`}>{children}</main>

      <Footer />
    </motion.div>
  )
}