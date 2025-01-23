import Modal from "./Modal";
import { useState } from "react";

const Donate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <section className="flex flex-col justify-center items-center mb-16 px-4 py-8 w-full min-h-screen font-body" id="regalo">
      <img src="icons/gift.svg" alt="" className="w-32 animate-wiggle duration-1000 delay-1000" />
      <h2 className="my-4 font-title text-2xl text-center">Un regalo desde el corazón</h2>
      <p className="mb-12 text-center">El mejor regalo que puedo recibir es compartir este momento tan especial con vos. Si además querés sumar un gesto especial, te agradezco desde el corazón cualquier aporte que puedas hacer.</p>
      <button onClick={openModal} className="bg-indigo-700 hover:bg-indigo-800 py-4 w-full text-center text-white transition-colors duration-300">Ver datos</button>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}

export default Donate