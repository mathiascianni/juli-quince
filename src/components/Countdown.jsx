import Timer from "./Timer"

const Countdown = ({date}) => {
  return (
    <section className="flex flex-col justify-center items-center px-4 w-full min-h-screen" id="fecha">
      
      <Timer targetDate={date} />
    </section>
  )
}

export default Countdown