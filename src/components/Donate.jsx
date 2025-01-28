import Modal from "./Modal";
import { useState } from "react";
import { motion } from "motion/react";

const Donate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <section className="flex flex-col justify-center items-center mb-16 px-4 md:px-tab xl:px-0 py-8 w-full font-body" id="regalo">
      <img src="icons/gift.svg" alt="" className="w-32 animate-wiggle duration-1000 delay-1000" />
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="my-4 font-title text-2xl text-center">Un regalo desde el corazón</motion.h2>
      <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-12 text-center">El mejor regalo que puedo recibir es compartir este momento tan especial con vos. Si además querés sumar un gesto especial, te agradezco desde el corazón cualquier aporte que puedas hacer.</motion.p>
      <motion.button initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} onClick={openModal} className="bg-indigo-700 hover:bg-indigo-800 xl:px-12 py-4 w-full xl:w-auto text-center text-white transition-colors duration-300">Ver datos</motion.button>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}

export default Donate