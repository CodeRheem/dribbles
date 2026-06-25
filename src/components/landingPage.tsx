import { Button } from "@/components/ui/button"
import NavigationMenu from "./navmenu"


export default function LandingPage() {
  return (
    <div 
      className="relative mx-auto min-h-screen p-4 bg-cover bg-center border border-black rounded-3xl shadow-[0_8px_15px_-3px_rgba(0,0,0,0.4)]"
      style={{ backgroundImage: "url('public/oscar-nord--U4GwXGP5ew-unsplash.jpg')", height: '100%', width: '100%',  }}
    >
      {/* Navbar */}
      <header className="relative z-10 flex justify-center items-center px-5 py-4 text-white dark:text-white">
        <div className="absolute left-35">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-arrow-out-up-left-icon lucide-circle-arrow-out-up-left"><path d="M2 8V2h6"/><path d="m2 2 10 10"/><path d="M12 2A10 10 0 1 1 2 12"/></svg>
        </div>
        <nav>
          <NavigationMenu/>
        </nav>
        <div className="absolute right-35 flex items-center gap-4">
          <span>Buy Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-tally1-icon lucide-tally-1"><path d="M4 4v16"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
        </div>
      </header>

      {/* Page content */}
      <main className="absolute right-35 bottom-1/5 z-10 font-[Outfit]">
        <div>
          <h1 className="text-5xl mb-4 text-white">Elevate Your <br /> Living Experience</h1>
          <p className="text-lg text-white">Discover the latest smart devices designed to simplify your life,<br/>and optimize energy efficiency.</p>
          <Button className="flex items-center gap-2 border mt-8 p-3 bg-white rounded-4xl text-black border-white hover:bg-dark hover:text-black">Get Started
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="border rounded-2xl bg-black text-white lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg> 
          </Button>
          <div className="flex gap-4 items-center mt-30 text-white ">
            <Button variant="default">Smart</Button>
            <Button variant="default">Safe</Button>
            <Button variant="default">Secure</Button>
            <Button variant="default">Comfort</Button>
          </div>
        </div>
      </main>   

    </div>
  )
}
