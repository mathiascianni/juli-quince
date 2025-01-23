import { photos } from "../constants"
import { motion } from "motion/react"
const Photos = () => {
  return (
    <section>
      {photos.map((photo, index) => (
        <div>
        <motion.img
          initial={{ filter: "grayscale(100%)", x: index % 2 === 0 ? "100%" : "-60%" }}
          whileInView={{ filter: "grayscale(0%)", x: index % 2 === 0 ? "60%" : "0%", rotateZ: index % 2 === 0 ? -5 : 5 }}
          viewport={{ once: true, amount: 0.4 }}
          key={index}
          src={photo.src}
          alt={photo.alt}
          className="relative mb-16 rounded-md max-w-[250px] min-h-[300px] object-cover"
        />
        </div>
      ))}
    </section>
  )
}

export default Photos