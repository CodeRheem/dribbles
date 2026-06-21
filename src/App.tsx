import NavigationMenu from "./components/navmenu"


export function App() {
  return (
    <div 
      className="mx-auto min-h-screen p-4 bg-cover bg-center rounded-sm border-10 border-white"
      style={{ backgroundImage: "url('/oscar-nord--U4GwXGP5ew-unsplash.jpg')" }}
    >

      {/* Navbar */}
      <header className="relative z-10 flex justify-center items-center px-5 py-4 text-white dark:text-white">
        <div className="absolute left-35">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-arrow-out-up-left-icon lucide-circle-arrow-out-up-left"><path d="M2 8V2h6"/><path d="m2 2 10 10"/><path d="M12 2A10 10 0 1 1 2 12"/></svg>
        </div>
        <nav>
          <NavigationMenu />
        </nav>
        <div className="absolute right-35 flex items-center gap-4">
          <span>Buy Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-tally1-icon lucide-tally-1"><path d="M4 4v16"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
        </div>
      </header>

      {/* Page content */}
      <main className="relative z-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Elevate Your Living Experience</h1>
        <p className="text-lg">This is a sample page content.</p>
      </main>   
    </div>
  )
}

export default App