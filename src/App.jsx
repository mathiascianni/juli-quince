import ParallaxStars from "./components/ParallaxStars"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Countdown from "./components/Countdown"
import EventsOrder from "./components/EventsOrder"
import Ubication from "./components/Ubication"
import Donate from "./components/Donate"
import AsistForm from "./components/AsistForm"
import Photos from "./components/Photos"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div className="relative bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <div className="bg-gradient-to-t from-slate-950 via-indigo-900 to-indigo-900 max-h-[100vh] overflow-hidden">
        <ParallaxStars />
        <div className="relative z-10">
          <Header />
        </div>
      </div>
      <div className="relative z-10">

        <main>
          <Countdown date={"2025-02-28T21:00:00"} />
          <div className="block xl:flex xl:gap-16 my-16 xl:my-32 xl:px-desk">
            <Photos />
            <EventsOrder />
          </div>

          <Ubication />
          <div className="block xl:flex xl:gap-16 xl:px-desk">
            <Donate />
            <AsistForm />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App