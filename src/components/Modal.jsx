import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("julieta.cianni");
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="top-0 left-0 z-[100] fixed inset-0 flex flex-col justify-center items-center bg-black/50 backdrop-blur-lg px-4 w-full h-full cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          >
            <motion.div
              className="bg-white shadow-lg xl:py-16 p-6 rounded-md w-full xl:max-w-[600px] text-center cursor-default"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="mb-6 font-bold font-title text-indigo-700 text-lg">Alias</h2>
              <p className="mb-8 text-indigo-700">julieta.cianni</p>
              <button
                disabled={isCopied}
                onClick={copyToClipboard}
                className={`px-4 py-2 rounded text-white transition-colors duration-300 ${isCopied
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-indigo-700 hover:bg-indigo-800"
                  }`}
              >
                {isCopied ? "Alias copiado ✅" : "Copiar alias 📋"}
              </button>
            </motion.div>
            <button className="top-4 right-4 absolute"><img src="icons/close.svg" alt="" /></button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Modal