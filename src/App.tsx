import AboutUs from "./components/aboutUs"
import LandingPage from "./components/landingPage"

export function App() {
  return (
    <>
      <div className="border border-neutral-200 dark:border-neutral-300 bg-neutral-300 dark:bg-neutral-200 rounded-2xl m-4 py-3 px-3">
        <LandingPage/>
        <AboutUs/>
      </div>    
    </>
  )
}

export default App