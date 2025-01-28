import { motion } from "motion/react"

const AsistForm = () => {
  return (
    <section className="my-16 px-4 md:px-tab xl:px-0 py-16 w-full font-body xl:text-center" id="asistencia">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-4 font-title text-2xl text-center">¿Te lo vas a perder?</motion.h2>
      <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-8 text-center">Confirmá tu asistencia en el siguiente formulario</motion.p>
      <motion.a initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} href="https://docs.google.com/forms/d/e/1FAIpQLScf7LWv5vMI-RnVV2_GYu8zE1ES_A5VX6uFLaon9DFnAcWFGg/viewform?usp=dialog" target="_blank" className="inline-block bg-indigo-700 hover:bg-indigo-800 xl:px-12 py-4 w-full xl:w-auto text-center text-white transition-colors duration-300">Confirmar asistencia</motion.a>
      <motion.p initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.9 }} className="mt-4 text-red-400">*Fecha máxima para confirmar: 13 de febrero</motion.p>
    </section>
  )
}

export default AsistForm