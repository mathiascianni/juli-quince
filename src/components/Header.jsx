import { motion } from "motion/react"

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center gap-8 h-screen font-body">
      <motion.p
        className="tracking-widest"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Te invito a mi noche mágica
      </motion.p>
      <motion.h1
        className="font-title text-4xl text-center line-clamp"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Julieta Cianni
      </motion.h1>
      <motion.p
        className="tracking-widest"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        28-02-2025 - 21:00hs
      </motion.p>
    </header>
  )
}

export default Header