import { ButtonComponent } from "./components/button"
import NavigationMenu from "./components/navmenu"

export function App() {
  return (
    <>
      <div className="mx-auto min-h-screen items-center justify-center p-4">
          <div className="p-5">
            <h1 className="text-2xl text-light pacifico-regular">Dribbles</h1>
            <div className="flex flex-row items-center justify-center gap-4 -mt-8">
              <NavigationMenu />
            </div>
          </div>
          <ButtonComponent />
          <div className="font-mono text-xs text-muted-foreground">
            (Press <kbd>d</kbd> to toggle dark mode)
          </div>
      </div>
    </>
  )
}

export default App
