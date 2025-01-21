import StarryBg from "./components/StarryBg"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Countdown from "./components/Countdown"
import EventsOrder from "./components/EventsOrder"

const App = () => {
  return (
    <div className="relative bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <div className="bg-gradient-to-t from-slate-950 via-indigo-900 to-indigo-900 min-h-screen overflow-hidden">
        <StarryBg starsCount={10} />
        <div className="relative z-10">
          <Header />
        </div>
      </div>
      <div className="relative z-10">

        <main>
          <Countdown date={"2025-02-28T21:00:00"} />
          <EventsOrder />
        </main>
      </div>
    </div>
  )
}

export default App