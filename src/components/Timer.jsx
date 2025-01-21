import { useState, useEffect } from "react";


const Timer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

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
            <h2 className="mb-4 font-title text-2xl text-center">Faltan sólo</h2>
            <div className="flex justify-center items-center gap-2 mb-4">
                <span className="block flex-1 bg-white/20 backdrop-blur-md p-2 text-center text-white">{timeLeft.days}d</span>
                <span className="block flex-1 bg-white/20 backdrop-blur-md p-2 text-center text-white">{timeLeft.hours}h</span>
                <span className="block flex-1 bg-white/20 backdrop-blur-md p-2 text-center text-white">{timeLeft.minutes}m</span>
                <span className="block flex-1 bg-white/20 backdrop-blur-md p-2 text-center text-white">{timeLeft.seconds}s</span>
            </div>
            <p>Para una noche inolvidable</p>
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