import { eventOrder } from "../constants"
import ListItem from "./ListItem"


const EventsOrder = () => {
  return (
    <section className="flex flex-col justify-center items-center px-4 py-8 w-full min-h-screen" id="cronograma">
      <h2 className="mb-16 font-title text-2xl text-center">Qué habrá durante la noche</h2>
      <div className="relative">
        <ol className="flex flex-col justify-center items-center gap-16 w-full">
          {eventOrder.map((event, index) => (
            <ListItem key={index} event={event} index={index} />
          ))}
        </ol>
        <div className="-top-1/2 left-1/2 absolute bg-white w-px h-full -translate-x-1/2 translate-y-1/2"></div>
      </div>
    </section>
  )
}

export default EventsOrder