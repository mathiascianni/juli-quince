import { photos } from "../constants"
import { motion } from "motion/react"
const Photos = () => {
  return (
    <section className="px-16 lg:px-[200px] xl:px-0 w-full">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="relative flex items-center w-full xl:min-w-[50%] h-[350px] sm:h-[550px] xl:h-[350px]"
          style={{
            justifyContent: index % 2 === 0 ? "flex-end" : "flex-start"
          }}
        >
          <motion.img
            initial={{ filter: "grayscale(100%)", x: index % 2 === 0 ? "30%" : "-30%" }}
            whileInView={{ filter: "grayscale(0%)", x: index % 2 === 0 ? "0%" : "0%", rotateZ: index % 2 === 0 ? -5 : 5 }}
            viewport={{ once: true, amount: 0.4 }}
            src={photo.src}
            alt={photo.alt}
            className="absolute rounded-md max-w-[250px] sm:max-w-[350px] min-h-[300px] sm:min-h-[450px] object-cover"
          />
        </div>
      ))}
    </section>
  )
}

export default Photos