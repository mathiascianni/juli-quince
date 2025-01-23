import Timer from "./Timer"

const Countdown = ({date}) => {
  return (
    <section className="flex flex-col justify-center items-center my-16 px-4 py-16 w-full" id="fecha">
      
      <Timer targetDate={date} />
    </section>
  )
}

export default Countdown