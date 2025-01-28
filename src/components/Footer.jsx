const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-indigo-700">
        <div className="py-4">
            <p className="py-4 text-center text-white">Julieta Cianni © {currentYear}. Todos los derechos reservados.</p>
            <p className="text-center text-slate-500 text-sm">Powered by <a href="https://mathiascianni.vercel.app/" target="_blank">Mathias Cianni</a></p>
        </div>
    </footer>
  )
}

export default Footer