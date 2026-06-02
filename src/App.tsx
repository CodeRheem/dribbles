import { ButtonComponent } from "./components/button"
import NavigationMenu from "./components/navmenu"

export function App() {
  return (
    <>
      <div className="mx-auto min-h-screen items-center justify-center p-4">
        <div className="flex max-w-full flex-col gap-4 text-sm">
          <div className="flex flex-row items-center justify-center gap-4">
            <NavigationMenu />
          </div>
          <ButtonComponent />
          <div className="font-mono text-xs text-muted-foreground">
            (Press <kbd>d</kbd> to toggle dark mode)
          </div>
        </div>
      </div>
    </>
  )
}

export default App
