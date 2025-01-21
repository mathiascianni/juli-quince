import { motion } from "motion/react"

const ListItem = ({ event, index }) => {
    return (
        <li key={index} className={` w-full  ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
            <div className={`grid grid-cols-3 items-center`}>
                <motion.img
                    initial={{ opacity: 0, x: index % 2 === 0 ? 10 : -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{once:true}}
                    src={event.icon}
                    alt=""
                    className={`aspect-square w-10 ${index % 2 === 0 ? "order-last justify-self-start" : "order-first justify-self-end"}`}
                />
                <div className="flex justify-center items-center w-full">
                    <div className="bg-white rounded-full w-[5px] h-[5px]"></div>
                    <div className="bg-white w-[50%] h-px"></div>
                    <div className="bg-white rounded-full w-[5px] h-[5px]"></div>
                </div>
                <motion.h3
                    initial={{ opacity: 0, x: index % 2 === 0 ? 10 : -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{once:true}}
                    className={`font-title text-lg text-center ${index % 2 === 0 ? "order-first justify-self-end" : "order-last justify-self-start"}`}
                >
                    {event.title}
                </motion.h3>
            </div>
        </li>
    )
}

export default ListItem