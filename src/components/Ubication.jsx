const Ubication = () => {
  return (
    <section className="mb-16 px-4 py-8 w-full min-h-screen font-body" id="ubicacion">
      <h2 className="font-title text-2xl text-center">Dónde será el evento</h2>
      <p className="mb-12 text-center">Se realizará en "Espacio 1875"</p>
      <iframe
        className="mb-4 w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.0353903262876!2d-58.70254342514203!3d-34.67905626147938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc198fccb5097%3A0xe4aebab87180348c!2sEspacio%201875%20Eventos!5e0!3m2!1ses-419!2sar!4v1737598794750!5m2!1ses-419!2sar"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      <a href="https://maps.app.goo.gl/f3XTMAu4cq4ExKj26" target="_blank" className="block bg-indigo-700 hover:bg-indigo-800 py-4 p-2 text-center text-white transition-colors duration-300">Abrir mapa</a>
    </section>
  )
}

export default Ubication