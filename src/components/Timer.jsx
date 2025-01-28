import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { delay } from "motion";

const Timer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));
    const variants = { 
        visible: { 
            opacity: 1,
            transition:{
                delay: 0.5,
                staggerChildren: 0.2,
                when: "beforeChildren",
                
            }
         }, 
        hidden: { opacity: 0 } 
    };

    const childVariants = { 
        visible: { opacity: 1, y: 0 }, 
        hidden: { opacity: 0, y: 20 } 
    };

    useEffect(() => {
        const timer = setInterval(() => {
            const remainingTime = calculateTimeLeft(targetDate);
            setTimeLeft(remainingTime);

            // Si el tiempo llega a cero, limpiamos el intervalo
            if (
                remainingTime?.days <= 0 &&
                remainingTime?.hours <= 0 &&
                remainingTime?.minutes <= 0 &&
                remainingTime?.seconds <= 0
            ) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!timeLeft) {
        return <p className="block bg-white/20 backdrop-blur-md py-4 p-2 text-center text-white">¡La fiesta ha terminado! Esperamos que la pasaran muy bien.</p>;
    }

    return (
        <div className="w-full font-body text-center">
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-4 font-title text-2xl text-center">Faltan sólo</motion.h2>
            <motion.div variants={variants} initial="hidden" viewport={{ once: true }} whileInView="visible" className="flex justify-center items-center gap-2 mb-4">
                <motion.span variants={childVariants} className="block flex-1 bg-white/20 backdrop-blur-md p-2 text-center text-white">{timeLeft.days} <span className="inline xl:hidden">d</span><span className="xl:inline hidden">días</span></motion.span>
                <motion.span variants={childVariants} className="block flex-1 bg-white/20 backdrop-blur-md p-2 text-center text-white">{timeLeft.hours} <span className="inline xl:hidden">h</span><span className="xl:inline hidden">horas</span></motion.span>
                <motion.span variants={childVariants} className="block flex-1 bg-white/20 backdrop-blur-md p-2 text-center text-white">{timeLeft.minutes} <span className="inline xl:hidden">m</span><span className="xl:inline hidden">minutos</span></motion.span>
                <motion.span variants={childVariants} className="block flex-1 bg-white/20 backdrop-blur-md p-2 text-center text-white">{timeLeft.seconds} <span className="inline xl:hidden">s</span><span className="xl:inline hidden">segundos</span></motion.span>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }}>Para una noche inolvidable</motion.p>
        </div>
    );
};

const calculateTimeLeft = (targetDate) => {
    const now = new Date();
    const target = new Date(targetDate);
    const difference = target - now;

    if (difference <= 0) {
        return null;
    }

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
}

export default Timer